import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Controlled Evaluation & Pilot Path",
  description:
    "A proposed controlled evaluation path for case continuity, evidence lineage, human review, and reporting preparation, with any later PoC or pilot subject to separate institutional agreement.",
  alternates: { canonical: "/services" },
};

const laterStagePilotPlanSteps = [
  {
    title: "Days 0–15",
    description: "Workflow scoping and signal mapping across current systems.",
  },
  {
    title: "Days 16–45",
    description:
      "Case continuity prototype and analyst workflow implementation.",
  },
  {
    title: "Days 46–75",
    description: "MLRO review flow design and evidence package hardening.",
  },
  {
    title: "Days 76–90",
    description:
      "Pilot evaluation, success criteria review, and reporting preparation.",
  },
];

const successMeasures = [
  "Faster analyst continuity across multi-signal cases.",
  "Clear escalation rationale that is MLRO-reviewable.",
  "Evidence-supported outputs ready for reporting preparation.",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-4 py-10 text-textSecondary sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="rounded-2xl border border-subtle bg-panel/95 p-6 shadow-[0_12px_40px_rgba(2,6,23,0.24)] sm:p-8 lg:p-10">
          <Badge className="border-subtle bg-panelElevated/80 text-textSecondary">
            Controlled institutional evaluation
          </Badge>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            ASII Controlled Evaluation Path
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-textSecondary">
            The current Tajikistan entry path begins with a proposed controlled
            institutional evaluation of up to 30 calendar days after formal
            scope agreement, using synthetic data by default.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-textMuted">
            Any later controlled PoC or pilot is a separate stage requiring
            institution-agreed scope, security and data boundaries, success
            criteria, owners, and progression authorization.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-subtle bg-panelElevated/80 px-4 py-2 text-sm font-medium text-text transition hover:border-strong hover:bg-panelElevated"
            >
              Discuss a controlled evaluation
            </Link>
            <Link
              href="/signals"
              className="inline-flex items-center justify-center rounded-md border border-subtle px-4 py-2 text-sm font-medium text-textSecondary transition hover:border-strong hover:bg-panelElevated/80"
            >
              Try the Interactive Pilot Demo
            </Link>
          </div>
        </section>

        <section className="rounded-xl border border-subtle bg-panel/95 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Later-stage framework
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Illustrative 90-day pilot framework
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-textMuted">
            This is a proposed later-stage framework, not the current controlled
            evaluation and not an institution-agreed commitment. It applies only
            if a separate PoC or pilot is authorized after evaluation.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {laterStagePilotPlanSteps.map((step, index) => (
              <Card key={step.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-textSecondary">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-panel/80 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Success measures
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Success measures
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <p className="text-sm leading-relaxed text-textSecondary">
                A later-stage pilot would test whether the operating model
                creates measurable continuity and review value for analysts and
                reviewers while keeping outputs grounded in evidence and subject
                to accountable human review.
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
