"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/",              label: "Home" },
  { href: "/bands",         label: "Bands" },
  { href: "/discography",   label: "Discography" },
  { href: "/collaborators", label: "Collaborators" },
  { href: "/sheet-music",   label: "Sheet Music" },
  { href: "/dedication",    label: "For Woody" },
];

export default function TopNav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-30 border-b border-paper_3/60 bg-paper/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center gap-6">
        <Link href="/" className="flex items-baseline gap-2.5 group">
          <span className="display text-ink text-2xl tracking-tight">
            SLOWHAND
          </span>
          <span className="hidden sm:inline mono text-[10px] tracking-[0.22em] text-whiskey uppercase">
            A tribute to Eric Clapton
          </span>
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-1 text-sm">
          {LINKS.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  active
                    ? "text-ink bg-paper_2"
                    : "text-slate hover:text-ink hover:bg-paper_2/60"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
