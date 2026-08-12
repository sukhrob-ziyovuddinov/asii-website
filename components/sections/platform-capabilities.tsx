import { Card } from "@/components/ui/card";
import { platformCapabilities } from "@/data/platform";

export function PlatformCapabilities() {
  return (
    <section className="mt-16">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
        Capabilities
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
        The core surfaces of the ASII intelligence layer
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-blue-100/80">
        A structured capability model for connecting source intelligence,
        preserving investigation continuity, and preparing reviewable
        institutional outputs.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {platformCapabilities.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="border-blue-300/15 bg-panel/80">
              <Icon className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-4 text-lg font-medium text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-100/70">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
