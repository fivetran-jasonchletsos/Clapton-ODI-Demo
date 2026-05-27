import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { INFLUENCES } from "@/lib/influences";

export const metadata = { title: "Influences · Slowhand" };

export default function InfluencesPage() {
  return (
    <>
      <TopNav />
      <main className="page-enter px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pt-12 pb-10">
        <p className="ornament mb-3">His teachers</p>
        <h1 className="display headline-tight text-ink text-[52px] sm:text-[88px]">
          INFLUENCES<span className="text-whiskey">.</span>
        </h1>
        <p className="serif text-ink_2 text-lg max-w-3xl mt-4 leading-relaxed">
          Eric Clapton has never been shy about pointing at his teachers. Every interview circles back to these names — the bluesmen who built the vocabulary he spent sixty years extending.
        </p>

        <hr className="hr-rule" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INFLUENCES.map((p, i) => (
            <article
              key={p.slug}
              className="relative border border-paper_3/60 bg-paper_2/40 p-6 rounded"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{
                  background:
                    i % 3 === 0 ? "#1f3a8a" : i % 3 === 1 ? "#b07a2c" : "#7a1f2b",
                }}
              />
              <div className="pl-3 sm:pl-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="display text-ink text-[28px] leading-tight tracking-tight">
                    {p.name}
                  </h2>
                  <span className="mono text-[10px] tracking-[0.18em] text-denim shrink-0">
                    {p.years}
                  </span>
                </div>
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-whiskey mt-1">
                  {p.origin}
                </p>
                <p className="serif text-ink_2 text-[14px] mt-3 leading-relaxed">
                  {p.blurb}
                </p>
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-wine mt-4">
                  Listen: <span className="text-ink_2 normal-case tracking-normal font-serif italic">{p.listen}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
