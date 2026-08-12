import { NextResponse } from "next/server";
import { isHoneypotSubmission, parseContactSubmission } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    // Honeypot anti-spam field
    if (isHoneypotSubmission(body)) {
      return NextResponse.json({ ok: true });
    }

    const submission = parseContactSubmission(body);

    if (!submission) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please provide valid contact details and message.",
        },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    const webhookSecret = process.env.CRM_WEBHOOK_SECRET;

    if (!webhookUrl) {
      return NextResponse.json(
        { ok: false, error: "Lead capture is not configured yet." },
        { status: 503 },
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(webhookSecret ? { "X-ASII-Webhook-Secret": webhookSecret } : {}),
        },
        body: JSON.stringify({
          source: "ASII website",
          submittedAt: new Date().toISOString(),
          ...submission,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        return NextResponse.json(
          { ok: false, error: "Unable to submit your request right now." },
          { status: 502 },
        );
      }
    } finally {
      clearTimeout(timeout);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 },
    );
  }
}
