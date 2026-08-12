import { CircleCheck, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { integrationPrinciples, deploymentPrinciples } from "@/data/platform";

export function PlatformIntegration() {
  return (
    <section className="mt-16 grid gap-6 lg:grid-cols-2">
      <Card className="border-blue-300/15 bg-panel/80">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Integration model
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">
          Overlay, not replacement
        </h3>
        <div className="mt-5 space-y-3">
          {integrationPrinciples.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-blue-300/10 bg-white/[0.02] p-3"
            >
              <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              <p className="text-sm leading-relaxed text-blue-100/75">{item}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="border-blue-300/15 bg-panel/80">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Deployment principles
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">
          Built for regulated review
        </h3>
        <div className="mt-5 space-y-3">
          {deploymentPrinciples.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-blue-300/10 bg-white/[0.02] p-3"
            >
              <Layers className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              <p className="text-sm leading-relaxed text-blue-100/75">{item}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
