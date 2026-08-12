import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      organisation,
      role,
      institutionType,
      useCase,
      timeframe,
      message,
      website,
    } = body ?? {};

    // Honeypot anti-spam field
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (
      typeof name !== "string" ||
      name.trim().length < 2 ||
      typeof email !== "string" ||
      !EMAIL_RE.test(email) ||
      typeof organisation !== "string" ||
      organisation.trim().length < 2 ||
      typeof message !== "string" ||
      message.trim().length < 10
    ) {
      return NextResponse.json(
        { ok: false, error: "Please provide valid contact details and message." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    const webhookSecret = process.env.CRM_WEBHOOK_SECRET;

    if (!webhookUrl) {
      return NextResponse.json(
        { ok: false, error: "Lead capture is not configured yet." },
        { status: 503 }
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(webhookSecret
            ? { "X-ASII-Webhook-Secret": webhookSecret }
            : {}),
        },
        body: JSON.stringify({
          source: "ASII website",
          submittedAt: new Date().toISOString(),
          name: name.trim(),
          email: email.trim(),
          organisation: organisation.trim(),
          role: typeof role === "string" ? role.trim() : "",
          institutionType:
            typeof institutionType === "string"
              ? institutionType.trim()
              : "",
          useCase: typeof useCase === "string" ? useCase.trim() : "",
          timeframe: typeof timeframe === "string" ? timeframe.trim() : "",
          message: message.trim(),
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        return NextResponse.json(
          { ok: false, error: "Unable to submit your request right now." },
          { status: 502 }
        );
      }
    } finally {
      clearTimeout(timeout);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
