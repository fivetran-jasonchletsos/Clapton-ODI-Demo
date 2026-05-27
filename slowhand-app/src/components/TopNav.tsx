"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Primary nav — the entry points Woody opens most.
const PRIMARY = [
  { href: "/",            label: "Home" },
  { href: "/bands",       label: "Bands" },
  { href: "/discography", label: "Discography" },
  { href: "/guitars",     label: "Guitars" },
  { href: "/crossroads",  label: "Crossroads" },
  { href: "/sheet-music", label: "Sheet Music" },
  { href: "/dedication",  label: "For Woody" },
];

// Secondary nav — context pages. Same visibility, smaller weight.
const SECONDARY = [
  { href: "/collaborators",  label: "Collaborators" },
  { href: "/influences",     label: "Influences" },
  { href: "/timeline",       label: "Timeline" },
  { href: "/dark-chapters",  label: "Difficult Chapters" },
];

const ALL_LINKS = [...PRIMARY, ...SECONDARY];

function NavLinkItem({
  href,
  label,
  pathname,
  variant,
  onClick,
}: {
  href: string;
  label: string;
  pathname: string | null;
  variant: "primary" | "secondary" | "mobile";
  onClick?: () => void;
}) {
  const active =
    href === "/"
      ? pathname === "/"
      : pathname?.startsWith(href);

  const base = "rounded mono uppercase transition-colors";
  const sizing = {
    primary: "px-3 py-1.5 text-[11px] tracking-[0.16em]",
    secondary: "px-2.5 py-1 text-[10px] tracking-[0.18em]",
    mobile: "block px-3 py-3 text-[12px] tracking-[0.16em]",
  }[variant];

  const activeCls = "text-ink bg-paper_2";
  const idleCls =
    variant === "secondary"
      ? "text-ash hover:text-ink hover:bg-paper_2/60"
      : "text-slate hover:text-ink hover:bg-paper_2/60";

  return (
    <Link href={href} onClick={onClick} className={`${base} ${sizing} ${active ? activeCls : idleCls}`}>
      {label}
    </Link>
  );
}

export default function TopNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-30 border-b border-paper_3/60 bg-paper/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Row 1: logo + primary nav (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-6 py-3">
          <Link
            href="/"
            className="flex items-baseline gap-2.5 group"
            onClick={() => setMobileOpen(false)}
          >
            <span className="display text-ink text-2xl tracking-tight">SLOWHAND</span>
            <span className="hidden sm:inline mono text-[10px] tracking-[0.22em] text-whiskey uppercase">
              A tribute to Eric Clapton
            </span>
          </Link>

          <nav className="ml-auto hidden md:flex items-center gap-0.5">
            {PRIMARY.map((l) => (
              <NavLinkItem
                key={l.href}
                href={l.href}
                label={l.label}
                pathname={pathname}
                variant="primary"
              />
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden ml-auto inline-flex items-center justify-center w-10 h-10 rounded text-slate hover:text-ink focus:outline-none focus:ring-1 focus:ring-whiskey/40"
            aria-controls="mobile-nav"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Row 2: secondary nav (desktop only) — same visibility, smaller weight */}
        <nav className="hidden md:flex items-center gap-0.5 pb-2 -mt-1 justify-end border-t border-paper_3/30 pt-2">
          <span className="mr-auto mono text-[9px] tracking-[0.24em] uppercase text-ash">More on Clapton</span>
          {SECONDARY.map((l) => (
            <NavLinkItem
              key={l.href}
              href={l.href}
              label={l.label}
              pathname={pathname}
              variant="secondary"
            />
          ))}
        </nav>
      </div>

      {/* Mobile drawer — shows all 11 links flat */}
      {mobileOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-[52px] z-10 bg-ink/40 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="md:hidden relative z-20 border-t border-paper_3/60 bg-paper"
          >
            <ul className="max-w-6xl mx-auto px-5 py-2 flex flex-col">
              {ALL_LINKS.map((l) => (
                <li key={l.href}>
                  <NavLinkItem
                    href={l.href}
                    label={l.label}
                    pathname={pathname}
                    variant="mobile"
                    onClick={() => setMobileOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
