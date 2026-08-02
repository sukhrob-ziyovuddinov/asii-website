import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-blue-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-blue-300/15 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-900/20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Continuity Pilot</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Services</h1>
        <p className="mt-4 text-base leading-relaxed text-blue-100/80">Content migration in progress.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-cyan-300/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/20">Start Pilot Conversation</Link>
          <Link href="/signals" className="inline-flex items-center justify-center rounded-md border border-blue-300/25 px-4 py-2 text-sm font-medium text-blue-100 transition hover:bg-blue-500/10">Try the Interactive Pilot Demo</Link>
        </div>
      </div>
    </main>
  );
}
