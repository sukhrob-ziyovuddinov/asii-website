import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const problemCards = [
  {
    title: "Signal fragmentation",
    description: "Travel Rule checks, wallet risk signals, and internal monitoring live in disconnected systems."
  },
  {
    title: "Review inefficiency",
    description: "Analysts repeatedly reconstruct context across tickets, cases, and handoffs."
  },
  {
    title: "Evidence gaps",
    description: "Escalations lack consistent, evidence-supported narratives for MLRO review flow."
  },
  {
    title: "Reporting friction",
    description: "Preparation for internal and external reporting remains manual and slow."
  }
];

const pilotCards = [
  {
    title: "Institutional approach",
    description: "Human-reviewed decisions and analyst accountability."
  },
  {
    title: "Output model",
    description: "Evidence-supported artifacts that are MLRO-reviewable."
  },
  {
    title: "Change model",
    description: "Overlay integration with current stack, not rip-and-replace."
  }
];

const workflowSteps = [
  {
    title: "Ingest signals",
    description: "Travel Rule, transaction, and wallet intelligence signals aligned."
  },
  {
    title: "Build continuity",
    description: "Entity and event linking produce a traceable case thread."
  },
  {
    title: "Analyst workflow",
    description: "Human analysts review, enrich, and disposition with full context."
  },
  {
    title: "MLRO review flow",
    description: "Evidence-supported package for escalation and reporting preparation."
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-blue-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <section className="rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-900/20 sm:p-8 lg:p-10">
          <Badge className="border-cyan-400/30 bg-cyan-500/10 text-cyan-100">ASII Continuity Pilot</Badge>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">AI-native financial crime intelligence infrastructure for UAE &amp; MENA</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-blue-100/80">ASII is building institutional infrastructure for financial crime intelligence, starting with a practical entry point: the ASII Continuity Pilot for Travel Rule, crypto risk, and case continuity.</p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-blue-100/70">Designed as an overlay, not a rip-and-replace — built on human-reviewed workflows, evidence-supported outputs, and MLRO-reviewable rationale.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-cyan-300/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/20">Start Pilot Conversation</Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-md border border-blue-300/25 px-4 py-2 text-sm font-medium text-blue-100 transition hover:bg-blue-500/10">View Pilot Scope</Link>
            <Link href="/signals" className="inline-flex items-center justify-center rounded-md border border-blue-300/25 px-4 py-2 text-sm font-medium text-blue-100 transition hover:bg-blue-500/10">Try the Interactive Pilot Demo</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Human-reviewed",
              "Evidence-supported",
              "MLRO-reviewable"
            ].map((chip) => (
              <Badge key={chip} className="border-blue-300/25 bg-blue-500/10 text-blue-100">{chip}</Badge>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-blue-300/15 bg-slate-900/50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">The problem</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Fragmented controls break case continuity.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {problemCards.map((card) => (
              <Card key={card.title}>
                <h3 className="text-lg font-medium text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-blue-100/75">{card.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-blue-300/15 bg-slate-900/50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Solution</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">ASII Continuity Pilot</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pilotCards.map((card) => (
              <Card key={card.title}>
                <h3 className="text-lg font-medium text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-blue-100/75">{card.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-blue-300/15 bg-slate-900/50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Workflow</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Workflow</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <Card key={step.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{index + 1}</p>
                <h3 className="mt-2 text-lg font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-blue-100/75">{step.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
