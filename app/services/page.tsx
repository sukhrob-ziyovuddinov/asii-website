import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const pilotPlanSteps = [
  {
    title: "Days 0–15",
    description: "Workflow scoping and signal mapping across current systems."
  },
  {
    title: "Days 16–45",
    description: "Case continuity prototype and analyst workflow implementation."
  },
  {
    title: "Days 46–75",
    description: "MLRO review flow design and evidence package hardening."
  },
  {
    title: "Days 76–90",
    description: "Pilot evaluation, success criteria review, and reporting preparation."
  }
];

const successMeasures = [
  "Faster analyst continuity across multi-signal cases.",
  "Clear escalation rationale that is MLRO-reviewable.",
  "Evidence-supported outputs ready for reporting preparation."
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-4 py-10 text-textSecondary sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="rounded-2xl border border-subtle bg-panel/95 p-6 shadow-[0_12px_40px_rgba(2,6,23,0.24)] sm:p-8 lg:p-10">
          <Badge className="border-subtle bg-panelElevated/80 text-textSecondary">ASII Continuity Pilot</Badge>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">ASII Continuity Pilot</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-textSecondary">
            Application-ready pilot design for Hub71+ Digital Assets conversations: Travel Rule + Crypto Risk + Case Continuity.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-textMuted">
            Built for pilot execution with institution-safe language and controls: human-reviewed, evidence-supported, MLRO-reviewable, and reporting preparation focused.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-subtle bg-panelElevated/80 px-4 py-2 text-sm font-medium text-text transition hover:border-strong hover:bg-panelElevated">Book Continuity Pilot Call</Link>
            <Link href="/signals" className="inline-flex items-center justify-center rounded-md border border-subtle px-4 py-2 text-sm font-medium text-textSecondary transition hover:border-strong hover:bg-panelElevated/80">Try the Interactive Pilot Demo</Link>
          </div>
        </section>

        <section className="rounded-xl border border-subtle bg-panel/95 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">90-day pilot plan</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">90-day pilot plan</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pilotPlanSteps.map((step, index) => (
              <Card key={step.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{index + 1}</p>
                <h3 className="mt-2 text-lg font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-textSecondary">{step.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-panel/80 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Success measures</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Success measures</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <p className="text-sm leading-relaxed text-textSecondary">
                The pilot is designed to create a practical operating rhythm for analysts and reviewers, with outputs that remain grounded in evidence and ready for downstream reporting preparation.
              </p>
            </Card>
            <Card>
              <ul className="space-y-3 text-sm text-textSecondary">
                {successMeasures.map((measure) => (
                  <li key={measure} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{measure}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
