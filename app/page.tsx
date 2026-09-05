import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  GitBranch,
  Landmark,
  Network,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  capabilityGroups,
  continuityDimensions,
  fragmentedSignals,
  governancePrinciples,
  institutionalAudiences,
  intelligenceWorkflow,
} from "@/data/home";

export const metadata: Metadata = {
  title: "ASII | Financial Crime Intelligence Infrastructure",
  description:
    "ASII is being developed to preserve investigative context across financial crime signals, teams, systems, institutions, and jurisdictions.",
  alternates: { canonical: "/" },
};

const audienceIcons = [Building2, Network, ShieldCheck, Landmark] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-textSecondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen text-textSecondary">
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <section className="relative overflow-hidden rounded-2xl border border-subtle bg-panel/95 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.3)] sm:p-8 lg:p-12">
          <div
            aria-hidden="true"
            className="network-grid absolute inset-y-0 right-0 hidden w-2/5 opacity-25 [mask-image:linear-gradient(to_left,black,transparent)] lg:block"
          />
          <div className="relative max-w-5xl">
            <Badge className="border-subtle bg-panelElevated/80 text-textSecondary">
              Financial Crime Intelligence Infrastructure
            </Badge>
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Preserve investigative context across every financial crime
              handoff.
            </h1>
            <p className="mt-6 max-w-4xl text-base leading-relaxed text-textSecondary sm:text-lg">
              ASII is being developed as continuity-native intelligence
              infrastructure for regulated institutions. It is intended to
              connect fragmented signals while preserving relationships,
              chronology, evidence, and investigative reasoning across systems,
              teams, institutions, and jurisdictions.
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-textMuted">
              Current institutional evaluation track: Tajikistan. The core
              platform remains jurisdiction-neutral and broader expansion stays
              separate from this evaluation gate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-5 py-3 text-sm font-medium text-white transition hover:border-accent/70 hover:bg-accent/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                Discuss an institutional use case
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center justify-center rounded-md border border-subtle px-5 py-3 text-sm font-medium text-textSecondary transition hover:border-strong hover:bg-panelElevated/80 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                Explore the intelligence layer
              </Link>
              <Link
                href="/pilot"
                className="inline-flex items-center justify-center px-3 py-3 text-sm font-medium text-textMuted transition hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                View the synthetic pilot demo
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Designed for regulated institutions",
                "Human-reviewed",
                "Evidence continuity by design",
              ].map((chip) => (
                <Badge
                  key={chip}
                  className="border-subtle bg-bg/40 text-textSecondary"
                >
                  {chip}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="The institutional problem"
            title="Controls generate signals. Investigations still lose continuity."
            description="Financial institutions already operate monitoring, screening, identity, blockchain, adverse-media, and case-management systems. The material gap appears when intelligence moves between them."
          />
          <div className="overflow-hidden rounded-2xl border border-subtle bg-panel/80">
            <ul
              className="grid sm:grid-cols-2"
              aria-label="Fragmented financial crime intelligence sources"
            >
              {fragmentedSignals.map((signal, index) => (
                <li
                  key={signal}
                  className="flex min-h-20 items-center gap-3 border-b border-subtle px-5 py-4 text-sm text-textSecondary last:border-b-0 sm:[&:nth-child(odd)]:border-r"
                >
                  <span className="font-mono text-xs text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-subtle bg-panel/70 p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="ASII Intelligence Layer"
            title="Infrastructure for preserving what the investigation already knows."
            description="ASII is intended to sit above fragmented sources and workflows, maintaining the context required to continue a case without repeatedly reconstructing it from the beginning."
          />
          <dl className="mt-8 grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
            {continuityDimensions.map((dimension) => (
              <div
                key={dimension.title}
                className="border-t border-subtle py-5"
              >
                <dt className="flex items-center gap-3 font-medium text-white">
                  <GitBranch
                    aria-hidden="true"
                    className="h-4 w-4 text-cyan-300"
                  />
                  {dimension.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-textSecondary">
                  {dimension.description}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <SectionHeading
            eyebrow="Intelligence workflow"
            title="From fragmented signals to reviewable institutional output."
            description="The operating model is designed around continuity, not autonomous decision-making. Analysts and reviewers remain accountable for judgement and disposition."
          />
          <ol
            className="mt-8 grid gap-3 lg:grid-cols-4"
            aria-label="ASII intelligence workflow"
          >
            {intelligenceWorkflow.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-xl border border-subtle bg-panel/80 p-5"
              >
                <p className="font-mono text-xs text-cyan-300">0{index + 1}</p>
                <h3 className="mt-5 font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-textSecondary">
                  {step.description}
                </p>
                {index < intelligenceWorkflow.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-bg text-cyan-300 lg:block"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeading
            eyebrow="Capability architecture"
            title="A coherent intelligence system, not a catalogue of disconnected features."
            description="Capabilities are organised around the institutional path from source intelligence to investigation continuity and governed reporting preparation."
          />
          <div className="mt-8 divide-y divide-subtle overflow-hidden rounded-2xl border border-subtle bg-panel/70">
            {capabilityGroups.map((group) => (
              <article
                key={group.title}
                className="grid gap-5 p-6 lg:grid-cols-[5rem_1fr_1.1fr] lg:items-start lg:p-8"
              >
                <p className="font-mono text-sm text-cyan-300">
                  {group.number}
                </p>
                <div>
                  <h3 className="text-xl font-medium text-white">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-textSecondary">
                    {group.description}
                  </p>
                </div>
                <ul
                  className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
                  aria-label={`${group.title} capabilities`}
                >
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-textSecondary"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            >
              Review the platform architecture
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Institutional audiences"
            title="Designed around regulated operating environments."
            description="The same continuity problem appears differently across institutions. ASII is being developed to support the governance and review expectations of each environment."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {institutionalAudiences.map((audience, index) => {
              const Icon = audienceIcons[index];
              return (
                <Card
                  key={audience.title}
                  className="border-subtle bg-panel/70"
                >
                  <Icon aria-hidden="true" className="h-5 w-5 text-cyan-300" />
                  <h3 className="mt-5 text-lg font-medium text-white">
                    {audience.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-textSecondary">
                    {audience.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-subtle bg-panel/80 p-6 sm:p-8">
            <SectionHeading
              eyebrow="Tajikistan evaluation relevance"
              title="A jurisdiction layer without rebuilding the core."
              description="The ASII core remains jurisdiction-neutral. The current evaluation track focuses on Tajikistan, treating local regulatory context and language requirements as additive layers while preserving the same evidence, continuity, human-review, and auditability controls."
            />
          </div>
          <div className="rounded-2xl border border-subtle bg-panelElevated/70 p-6 sm:p-8">
            <SectionHeading
              eyebrow="Governance principles"
              title="Continuity-native, with accountable human review."
            />
            <ul className="mt-6 space-y-4">
              {governancePrinciples.map((principle) => (
                <li
                  key={principle}
                  className="flex items-start gap-3 text-sm leading-relaxed text-textSecondary"
                >
                  <ShieldCheck
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                  />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-accent/20 bg-panel/90 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Institutional conversation
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Evaluate where investigative context is being lost.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-textSecondary">
              Discuss an institutional use case, the Continuity Pilot, or the
              role of an intelligence layer within an existing financial crime
              technology stack.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-5 py-3 text-sm font-medium text-white transition hover:border-accent/70 hover:bg-accent/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 lg:mt-0"
          >
            Contact ASII
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}
