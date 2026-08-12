import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] px-4 py-16 text-textSecondary sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-subtle bg-panel/90 p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          The requested page is not available.
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed">
          The route may have changed or may not yet be part of the public ASII
          website.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-subtle bg-panelElevated/80 px-4 py-2.5 text-sm font-medium text-text transition hover:border-strong hover:bg-panelElevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Return to ASII home
        </Link>
      </div>
    </main>
  );
}
