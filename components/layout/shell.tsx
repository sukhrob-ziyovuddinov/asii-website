import Link from "next/link";
import { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/components/ui/utils";

const nav = [
  ["Overview", "/"],
  ["Dashboard", "/dashboard"],
  ["Signals", "/signals"],
  ["Continuity", "/continuity"],
  ["Review", "/review"],
  ["Report", "/report"],
  ["Success Criteria", "/success"]
];

export function Shell({ active, children }: { active: string; children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden network-grid">
      <header className="sticky top-0 z-20 border-b border-blue-300/15 bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
            <ShieldCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-accent" />
            <span className="truncate">ASII Continuity Pilot</span>
          </div>
          <nav className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className={cn("rounded-md border border-transparent px-2 py-1 text-blue-100/70 transition hover:border-blue-300/30 hover:text-blue-100", active === href && "border-blue-300/30 bg-blue-500/10 text-blue-100")}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl overflow-x-hidden px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
