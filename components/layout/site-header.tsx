import Link from "next/link";
import Image from "next/image";

const navigation = [
  ["Platform", "/platform"],
  ["Continuity Pilot", "/services"],
  ["Synthetic Demo", "/pilot"],
] as const;

const linkStyles =
  "rounded-md px-3 py-2 text-sm text-textSecondary transition hover:bg-panelElevated/80 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70";

export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-subtle bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
          aria-label="ASII home"
        >
          <Image
            src="/asii-logo.svg"
            alt="ASII Intelligence Infrastructure"
            width={160}
            height={40}
            priority
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigation.map(([label, href]) => (
            <Link key={href} href={href} className={linkStyles}>
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-md border border-borderDefault bg-panelElevated/80 px-4 py-2 text-sm font-medium text-text transition hover:border-borderStrong hover:bg-panelElevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
          >
            Contact ASII
          </Link>
        </nav>

        <details className="group relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-borderDefault px-3 py-2 text-sm text-textSecondary transition hover:border-borderStrong hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70">
            Menu
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-12 z-50 flex w-64 flex-col rounded-xl border border-subtle bg-panel p-2 shadow-2xl"
          >
            {navigation.map(([label, href]) => (
              <Link key={href} href={href} className={linkStyles}>
                {label}
              </Link>
            ))}
            <Link href="/contact" className={linkStyles}>
              Contact ASII
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
