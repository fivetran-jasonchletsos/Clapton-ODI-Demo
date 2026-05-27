import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import TuningStrip from "@/components/TuningStrip";
import { SONGS } from "@/lib/sheet-music";

export const metadata = { title: "Sheet Music · Slowhand" };

const DIFF_COLOR: Record<string, string> = {
  Beginner: "#0f7438",
  Intermediate: "#b07a2c",
  Advanced: "#7a1f2b",
  Expert: "#0e1830",
};

const DIFF_ORDER = ["Beginner", "Intermediate", "Advanced", "Expert"] as const;

export default function SheetMusicPage() {
  return (
    <>
      <TopNav />
      <main className="page-enter px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pt-12 pb-10">
        <p className="ornament mb-3">Chapter Four · For the guitar in your hands</p>
        <h1 className="display headline-tight text-ink text-[52px] sm:text-[88px]">
          THE SONGS<span className="text-whiskey">.</span>
        </h1>
        <p className="serif text-ink_2 text-lg max-w-3xl mt-4 leading-relaxed">
          {SONGS.length} iconic Clapton songs. Each one links out to a Songsterr interactive tab and an Ultimate Guitar lookup so you can read the chart while you learn. Difficulty rating is honest, not flattering.
        </p>

        {/* Difficulty distribution */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {DIFF_ORDER.map((d) => {
            const count = SONGS.filter((s) => s.difficulty === d).length;
            const pct = (count / SONGS.length) * 100;
            return (
              <div key={d} className="border border-paper_3/60 bg-paper_2/30 p-3 rounded">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="mono text-[10px] uppercase tracking-[0.18em]" style={{ color: DIFF_COLOR[d] }}>{d}</span>
                  <span className="display text-ink text-[22px] leading-none">{count}</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-paper_3/40 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: DIFF_COLOR[d] }} />
                </div>
              </div>
            );
          })}
        </div>

        <hr className="hr-rule" />

        <div className="space-y-3">
          {SONGS.map((s) => (
            <article
              key={s.slug}
              className="border border-paper_3/60 bg-paper_2/40 p-5 rounded grid grid-cols-1 md:grid-cols-[1fr,auto] gap-4 items-start"
            >
              <div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h2 className="display text-ink text-[24px] sm:text-[28px] leading-tight tracking-tight">
                    {s.title}
                  </h2>
                  <span
                    className="mono text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 rounded-sm"
                    style={{ background: DIFF_COLOR[s.difficulty], color: "#fff" }}
                  >
                    {s.difficulty}
                  </span>
                </div>
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-whiskey mt-1">
                  {s.band} &middot; {s.year}
                </p>
                {s.tuning && (
                  <div className="mt-3">
                    <TuningStrip tuning={s.tuning} />
                    <p className="serif text-ink_2/75 text-[12px] mt-2 leading-relaxed italic">
                      {s.tuning}
                    </p>
                  </div>
                )}
                <p className="serif text-ink_2 text-[14px] mt-3 leading-relaxed">
                  <span className="mono text-[10px] uppercase tracking-[0.18em] text-denim mr-2">Lesson</span>
                  {s.technique}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2 text-sm">
                <a
                  href={s.songsterr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-[11px] uppercase tracking-[0.18em] px-3 py-2 rounded border border-denim/40 text-denim hover:bg-denim hover:text-paper transition-colors text-center"
                >
                  Songsterr tab &rarr;
                </a>
                <a
                  href={s.ultimateGuitar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-[11px] uppercase tracking-[0.18em] px-3 py-2 rounded border border-whiskey/50 text-whiskey hover:bg-whiskey hover:text-paper transition-colors text-center"
                >
                  Ultimate Guitar &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="serif text-slate text-[13px] mt-8 italic">
          Tip: open Songsterr first for the interactive tab; cross-reference with Ultimate Guitar for the chord chart and lyrics.
        </p>
      </main>
      <Footer />
    </>
  );
}
