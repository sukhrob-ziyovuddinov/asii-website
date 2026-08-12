import Link from "next/link";
import { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/components/ui/utils";

const nav = [
  ["Pilot", "/pilot"],
  ["Dashboard", "/dashboard"],
  ["Signals", "/signals"],
  ["Continuity", "/continuity"],
  ["Review", "/review"],
  ["Report", "/report"],
  ["Success Criteria", "/success"],
];

export function Shell({
  active,
  children,
}: {
  active: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden network-grid">
      <header className="border-b border-subtle bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
              <ShieldCheck
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-accent"
              />
              <span className="truncate">Interactive Pilot Demo</span>
            </div>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-textMuted">
              Demonstration environment · Synthetic data
            </p>
          </div>
          <nav
            aria-label="Interactive demo navigation"
            className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs"
          >
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-md border border-transparent px-2 py-1 text-textSecondary transition hover:border-subtle hover:bg-panelElevated/80 hover:text-text",
                  active === href &&
                    "border-subtle bg-panelElevated/80 text-text",
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl overflow-x-hidden px-4 py-8 sm:px-6">
        {children}
      </main>
    </div>
  );
}
