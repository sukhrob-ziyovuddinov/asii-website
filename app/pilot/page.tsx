import type { Metadata } from "next";
import { Shell } from "@/components/layout/shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { workflowSteps } from "@/data/mock-data";

export const metadata: Metadata = {
  title: "Interactive Pilot Demo",
  description:
    "A synthetic demonstration of the ASII continuity workflow. No live institutional or customer data is used.",
  robots: { index: false, follow: false },
};

export default function PilotPage() {
  return (
    <Shell active="/pilot">
      <section className="mb-8">
        <Badge>Controlled Institutional Demo</Badge>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
          ASII Continuity Pilot
        </h1>
        <p className="mt-2 text-lg text-blue-100/85">
          One workflow. One team. One evaluation cycle. Clear success criteria.
        </p>
        <p className="mt-4 max-w-4xl text-sm text-blue-100/70">
          ASII is being developed as continuity-native financial crime
          intelligence infrastructure for regulated institutions. The current
          Tajikistan evaluation track demonstrates how fragmented signals can
          retain evidence lineage, investigation context, accountable human
          review, and regulator-ready output without using live institutional
          or customer data.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {workflowSteps.map((step, i) => (
          <Card key={step.title}>
            <p className="text-xs text-accent">Step {i + 1}</p>
            <h3 className="mt-1 text-lg font-medium text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-blue-100/70">{step.description}</p>
          </Card>
        ))}
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          ["Proof", "Continuity, evidence lineage, reviewable output"],
          ["Trust", "Human review, auditability, explicit decision context"],
          [
            "Evaluation Entry",
            "Scoped assessment, synthetic data, no rip-and-replace",
          ],
        ].map(([title, copy]) => (
          <Card key={title}>
            <h3 className="text-xl font-medium text-white">{title}</h3>
            <p className="mt-2 text-sm text-blue-100/70">{copy}</p>
          </Card>
        ))}
      </section>
    </Shell>
  );
}
