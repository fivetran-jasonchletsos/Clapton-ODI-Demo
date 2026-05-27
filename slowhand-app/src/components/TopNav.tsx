"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "/",            label: "Home" },
  { href: "/bands",       label: "Bands" },
  { href: "/discography", label: "Discography" },
  { href: "/guitars",     label: "Guitars" },
  { href: "/crossroads",  label: "Crossroads" },
  { href: "/sheet-music", label: "Sheet Music" },
  { href: "/dedication",  label: "For Woody" },
];

// Secondary "More" menu — pages that exist but don't earn a permanent slot.
const MORE_LINKS = [
  { href: "/collaborators", label: "Collaborators" },
  { href: "/influences",    label: "Influences" },
  { href: "/timeline",      label: "Timeline" },
];

export default function TopNav() {
  const pathname = usePathname();
  const [openMore, setOpenMore] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openMore) return;
    const onDocClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setOpenMore(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMore(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMore]);

  // Close More menu on route change
  useEffect(() => {
    setOpenMore(false);
  }, [pathname]);

  const moreActive = MORE_LINKS.some((l) => pathname?.startsWith(l.href));

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

          <div ref={moreRef} className="relative">
            <button
              type="button"
              onClick={() => setOpenMore((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={openMore}
              className={`px-3 py-1.5 rounded mono text-[11px] uppercase tracking-[0.16em] transition-colors inline-flex items-center gap-1.5 ${
                openMore || moreActive
                  ? "text-ink bg-paper_2"
                  : "text-slate hover:text-ink hover:bg-paper_2/60"
              }`}
            >
              More
              <span
                aria-hidden
                className={`inline-block text-[8px] leading-none transition-transform ${
                  openMore ? "rotate-180" : ""
                }`}
              >
                &#9660;
              </span>
            </button>
            {openMore && (
              <div
                role="menu"
                className="absolute right-0 mt-2 min-w-[180px] border border-paper_3/60 bg-paper shadow-lg rounded overflow-hidden"
              >
                {MORE_LINKS.map((l) => {
                  const active = pathname?.startsWith(l.href);
                  return (
                    <Link
                      key={l.href}
                      role="menuitem"
                      href={l.href}
                      className={`block px-4 py-2 mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                        active
                          ? "text-ink bg-paper_2"
                          : "text-slate hover:text-ink hover:bg-paper_2/60"
                      }`}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
