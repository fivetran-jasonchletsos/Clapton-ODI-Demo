import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { BANDS } from "@/lib/bands";

export const metadata = { title: "Bands · Slowhand" };

export default function BandsPage() {
  return (
    <>
      <TopNav />
      <main className="page-enter px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pt-12 pb-10">
        <p className="ornament mb-3">Chapter One</p>
        <h1 className="display headline-tight text-ink text-[52px] sm:text-[88px]">
          EVERY BAND<span className="text-whiskey">.</span>
        </h1>
        <p className="serif text-ink_2 text-lg max-w-3xl mt-4 leading-relaxed">
          From the Yardbirds to today's solo band — chronological. Each entry includes the role, the years, the people, the signature gear, and the songs that defined the era.
        </p>

        {/* Band tenures gantt — see overlaps at a glance */}
        {(() => {
          const eras = [
            { name: "Yardbirds",      start: 1963, end: 1965 },
            { name: "Bluesbreakers",  start: 1965, end: 1966 },
            { name: "Cream",          start: 1966, end: 1968 },
            { name: "Blind Faith",    start: 1969, end: 1969 },
            { name: "Delaney & Bonnie", start: 1969, end: 1970 },
            { name: "Derek & the Dominos", start: 1970, end: 1971 },
            { name: "Solo",           start: 1970, end: 2024 },
          ];
          const colors = ["#1f3a8a","#b07a2c","#7a1f2b","#0f7438","#4dd0ff","#a78bfa","#ff6b35"];
          const minYear = 1963;
          const maxYear = 2024;
          const W = 880;
          const H = 220;
          const padL = 130;
          const padR = 16;
          const padTop = 12;
          const rowH = 24;
          const rowGap = 4;
          const x = (y: number) => padL + ((y - minYear) / (maxYear - minYear)) * (W - padL - padR);
          const ticks = [1965, 1970, 1980, 1990, 2000, 2010, 2020, 2024];
          return (
            <div className="mt-6 border border-paper_3/60 bg-paper_2/30 rounded p-4 overflow-x-auto">
              <div className="flex items-baseline justify-between mb-2">
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-denim">Where the bands overlapped</p>
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-ash">1963 — 2024</p>
              </div>
              <svg viewBox={`0 0 ${W} ${H}`} className="block w-full min-w-[680px] h-auto">
                {/* Vertical grid lines */}
                {ticks.map((t) => (
                  <line key={t} x1={x(t)} y1={padTop} x2={x(t)} y2={padTop + eras.length * (rowH + rowGap) + 6} stroke="#c8b994" strokeWidth={0.5} opacity={0.6} />
                ))}

                {/* Band rows */}
                {eras.map((era, i) => {
                  const y = padTop + i * (rowH + rowGap);
                  const rectX = x(era.start);
                  const rectW = Math.max(8, x(era.end) - x(era.start) + (era.start === era.end ? 8 : 0));
                  return (
                    <g key={era.name}>
                      <text
                        x={padL - 8}
                        y={y + rowH / 2 + 4}
                        textAnchor="end"
                        fontFamily="'Anton', sans-serif"
                        fontSize={13}
                        fill="#0e1830"
                      >
                        {era.name}
                      </text>
                      <rect x={rectX} y={y} width={rectW} height={rowH} fill={colors[i]} opacity={0.78} rx={2} />
                      <text
                        x={rectX + 6}
                        y={y + rowH / 2 + 4}
                        fontFamily="'JetBrains Mono', monospace"
                        fontSize={10}
                        fill="#fffaf3"
                        letterSpacing="0.06em"
                      >
                        {era.start}{era.end !== era.start ? `–${era.end}` : ""}
                      </text>
                    </g>
                  );
                })}

                {/* Year axis */}
                {ticks.map((t) => (
                  <text
                    key={`l-${t}`}
                    x={x(t)}
                    y={padTop + eras.length * (rowH + rowGap) + 18}
                    textAnchor="middle"
                    fontFamily="'JetBrains Mono', monospace"
                    fontSize={10}
                    fill="#404a66"
                    letterSpacing="0.08em"
                  >
                    {t}
                  </text>
                ))}
              </svg>
            </div>
          );
        })()}

        <hr className="hr-rule" />

        <div className="space-y-8">
          {BANDS.map((b, i) => (
            <article
              key={b.slug}
              className="relative border border-paper_3/60 bg-paper_2/40 p-6 sm:p-8 rounded"
            >
              <span aria-hidden className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ background: i % 3 === 0 ? "#1f3a8a" : i % 3 === 1 ? "#b07a2c" : "#7a1f2b" }} />
              <div className="pl-3 sm:pl-4">
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-denim">{b.years} &middot; {b.role}</p>
                <h2 className="display text-ink text-[34px] sm:text-[44px] leading-[0.95] mt-1">
                  {b.name}
                </h2>
                <p className="serif text-ink_2 text-[15px] mt-3 leading-relaxed max-w-3xl">
                  {b.blurb}
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-whiskey mb-1">Other members</p>
                    <p className="serif text-ink_2">{b.members.join(", ")}</p>
                  </div>
                  {b.signatureGear && (
                    <div>
                      <p className="mono text-[10px] uppercase tracking-[0.22em] text-whiskey mb-1">Signature gear</p>
                      <p className="serif text-ink_2">{b.signatureGear}</p>
                    </div>
                  )}
                  {b.iconicSongs && b.iconicSongs.length > 0 && (
                    <div>
                      <p className="mono text-[10px] uppercase tracking-[0.22em] text-whiskey mb-1">Iconic songs</p>
                      <p className="serif text-ink_2">{b.iconicSongs.join(", ")}</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
