import Link from "next/link";
import { DEDICATION } from "@/lib/dedication";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-paper_3/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-wrap gap-4 justify-between items-baseline">
        <p className="mono text-[10px] uppercase tracking-[0.18em] text-slate">
          For {DEDICATION.to}, from {DEDICATION.by} &middot; <Link href="/dedication" className="text-whiskey hover:underline">read the dedication</Link>
        </p>
        <p className="mono text-[10px] uppercase tracking-[0.18em] text-slate">
          A side project, built for one specific guitar player.
        </p>
      </div>
    </footer>
  );
}
