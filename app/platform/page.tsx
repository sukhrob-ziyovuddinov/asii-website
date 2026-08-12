import Link from "next/link";
import { PlatformCapabilities } from "@/components/sections/platform-capabilities";
import { PlatformIntegration } from "@/components/sections/platform-integration";

export default function PlatformPage() {
  return (
    <main className="min-h-screen px-4 py-16 text-blue-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-blue-300/15 bg-panel/80 p-8 shadow-2xl shadow-cyan-900/20">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Platform</p>
          <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Infrastructure for Travel Rule compliance, crypto risk, and case continuity
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-blue-100/80">
            ASII is built as an overlay integration — deployed alongside existing case management and compliance systems, not in place of them. The Continuity Pilot gives regulated institutions a focused, evidence-supported starting point.
          </p>
        </div>

        <PlatformCapabilities />
        <PlatformIntegration />

        <div className="mt-16 rounded-2xl border border-blue-300/15 bg-panel/80 p-8 text-center shadow-2xl shadow-cyan-900/20">
          <h2 className="text-2xl font-semibold text-white">Request a strategic conversation</h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-blue-100/80">
            Connect directly to discuss platform access, partnerships, or institutional use cases.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-blue-300/25 px-5 py-2.5 text-sm font-medium text-blue-100 transition hover:bg-blue-500/10"
            >
              Contact ASII
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
