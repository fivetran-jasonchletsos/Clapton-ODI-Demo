import Link from "next/link";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { BANDS } from "@/lib/bands";
import { ALBUMS } from "@/lib/albums";
import { COLLABORATORS } from "@/lib/collaborators";
import { SONGS } from "@/lib/sheet-music";

const HUB = [
  { href: "/bands",         title: "Bands",         blurb: "Yardbirds, Bluesbreakers, Cream, Blind Faith, Dominos, solo. Every group he played in, why he joined, why he left." },
  { href: "/discography",   title: "Discography",   blurb: "Every record, linked to Spotify. From Five Live Yardbirds (1964) through the Lockdown Sessions (2021)." },
  { href: "/collaborators", title: "Collaborators", blurb: "Allman, Harrison, Winwood, Dylan, the Bramletts, Marsalis, Mayer. Everyone he made records or stages with." },
  { href: "/sheet-music",   title: "Sheet Music",   blurb: "Tabs and sheets for the songs every guitarist learns from Clapton. Layla. Tears in Heaven. Cocaine. Crossroads." },
];

export default function Home() {
  return (
    <>
      <TopNav />

      {/* Hero */}
      <section className="px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pt-12 pb-8">
        <p className="ornament mb-4">Side A &middot; Tracklist</p>
        <h1 className="display headline-tight text-ink text-[64px] sm:text-[112px] md:text-[152px]">
          SLOWHAND<span className="text-whiskey">.</span>
        </h1>
        <p className="serif text-ink_2 text-lg sm:text-xl max-w-3xl mt-6 leading-relaxed">
          A tribute to Eric Clapton — his bands, his records, his people, and the songs he taught the rest of us how to play.
          Built for <span className="font-semibold">Keith "Woody" Woodeshick</span>, by Jason Chletsos, a friend of nearly thirty years.
        </p>
        <div className="mt-6 flex items-center gap-3 mono text-[11px] uppercase tracking-[0.22em] text-slate">
          <span>{BANDS.length} bands</span>
          <span className="text-paper_3">·</span>
          <span>{ALBUMS.length} records</span>
          <span className="text-paper_3">·</span>
          <span>{COLLABORATORS.length} collaborators</span>
          <span className="text-paper_3">·</span>
          <span>{SONGS.length} songs to learn</span>
        </div>
      </section>

      <hr className="hr-rule max-w-6xl mx-auto" />

      {/* Hub grid */}
      <section className="px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pb-10">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="display headline-tight text-ink text-[40px] sm:text-[60px]">
            WHERE<br />TO GO
          </h2>
          <p className="mono text-[10px] tracking-widest text-slate uppercase hidden sm:block">
            04 cuts &middot; 33⅓ RPM
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {HUB.map((h, i) => (
            <Link
              key={h.href}
              href={h.href}
              className="group relative block border border-paper_3/60 bg-paper_2/40 p-6
                         hover:border-whiskey hover:bg-paper_2/80 rounded lift overflow-hidden"
            >
              <span aria-hidden="true"
                    className="display text-denim/10 group-hover:text-whiskey/25 transition-colors
                               absolute -right-2 -top-3 leading-none select-none
                               text-[120px] sm:text-[140px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span aria-hidden="true"
                    className="absolute left-0 inset-y-0 w-[3px]"
                    style={{ background: i % 3 === 0 ? "#1f3a8a" : i % 3 === 1 ? "#b07a2c" : "#7a1f2b", opacity: 0.6 }} />
              <div className="relative pl-2">
                <p className="mono text-[9px] tracking-[0.32em] uppercase text-denim">Track {String(i + 1).padStart(2, "0")}</p>
                <h3 className="display text-ink text-[28px] sm:text-[32px] leading-[0.95] tracking-tight mt-2">
                  {h.title}
                </h3>
                <p className="serif text-ink_2 text-[14px] mt-3 leading-relaxed">
                  {h.blurb}
                </p>
                <p className="mono text-[9px] tracking-widest text-slate uppercase mt-5">
                  Open &rarr;
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <hr className="hr-rule max-w-6xl mx-auto" />

      {/* For Woody teaser */}
      <section className="px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pb-16">
        <p className="ornament mb-4">Dedication</p>
        <h2 className="display headline-tight text-ink text-[36px] sm:text-[48px] mb-3">
          FOR WOODY<span className="text-whiskey">.</span>
        </h2>
        <p className="serif text-ink_2 text-lg max-w-3xl leading-relaxed">
          Thirty years of friendship, and the man still picks up the guitar like he just discovered it.
          {" "}
          <Link href="/dedication" className="text-denim underline decoration-whiskey/60 underline-offset-4 hover:decoration-whiskey">
            Open the dedication &rarr;
          </Link>
        </p>
      </section>

      <Footer />
    </>
  );
}
