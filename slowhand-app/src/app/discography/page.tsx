import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { ALBUMS } from "@/lib/albums";

export const metadata = { title: "Discography · Slowhand" };

const ERAS: Array<{ key: string; label: string; intro: string }> = [
  { key: "1960s", label: "The Sixties", intro: "Yardbirds. Bluesbreakers. Cream. Blind Faith. The years that built the legend." },
  { key: "1970s", label: "The Seventies", intro: "Dominos, then solo. The Tulsa sound. The peaceful comeback. Slowhand the album, then the nickname." },
  { key: "1980s", label: "The Eighties", intro: "Sober, polished, Collins-produced. The records people argue about, but underrated catalogs underneath." },
  { key: "1990s", label: "The Nineties", intro: "Unplugged. From the Cradle. The blues turn — and the most emotionally charged decade." },
  { key: "2000s", label: "The Aughts", intro: "Robert Johnson tribute, B.B. King duets, family albums. Contented playing." },
  { key: "2010s", label: "The Tens", intro: "Self-titled forty years in. Covers, collaborators, the long late style." },
  { key: "2020s", label: "Today", intro: "The Lady in the Balcony. Pandemic unplugged. Still here, still playing." },
];

export default function DiscographyPage() {
  return (
    <>
      <TopNav />
      <main className="page-enter px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pt-12 pb-10">
        <p className="ornament mb-3">Chapter Two</p>
        <h1 className="display headline-tight text-ink text-[52px] sm:text-[88px]">
          THE RECORDS<span className="text-whiskey">.</span>
        </h1>
        <p className="serif text-ink_2 text-lg max-w-3xl mt-4 leading-relaxed">
          {ALBUMS.length} albums, sorted by decade. Each one links to a Spotify search so you can put it on while you read.
        </p>

        <hr className="hr-rule" />

        {ERAS.map((era) => {
          const inEra = ALBUMS.filter((a) => a.era === era.key);
          if (inEra.length === 0) return null;
          return (
            <section key={era.key} className="mb-12">
              <div className="flex items-baseline gap-4 mb-3">
                <h2 className="display text-ink text-[34px] sm:text-[44px] leading-none">
                  {era.label}
                </h2>
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-slate">
                  {inEra.length} record{inEra.length === 1 ? "" : "s"}
                </span>
              </div>
              <p className="serif text-ink_2 text-[15px] max-w-3xl leading-relaxed mb-5">{era.intro}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inEra.map((a) => (
                  <a
                    key={a.slug}
                    href={a.spotifySearch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border border-paper_3/60 bg-paper_2/40 p-5 rounded lift hover:border-whiskey"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="display text-ink text-[22px] sm:text-[26px] leading-tight tracking-tight">
                        {a.title}
                      </h3>
                      <span className="mono text-[10px] tracking-[0.18em] text-denim shrink-0">{a.year}</span>
                    </div>
                    <p className="mono text-[10px] uppercase tracking-[0.20em] text-whiskey mt-1">{a.band}</p>
                    <p className="serif text-ink_2 text-[13.5px] mt-2.5 leading-relaxed">{a.blurb}</p>
                    {a.highlights.length > 0 && (
                      <p className="serif text-ink_2/80 text-[12.5px] mt-2 italic">
                        Listen for: {a.highlights.join(" &middot; ")}
                      </p>
                    )}
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-denim mt-3 group-hover:text-whiskey">
                      Open in Spotify &rarr;
                    </p>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
