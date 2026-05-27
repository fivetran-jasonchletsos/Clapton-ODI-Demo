import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { CROSSROADS } from "@/lib/crossroads";

export const metadata = { title: "Crossroads · Slowhand" };

const ACCENTS: Record<string, string> = {
  song: "#1f3a8a",
  festival: "#b07a2c",
  centre: "#7a1f2b",
};

export default function CrossroadsPage() {
  return (
    <>
      <TopNav />
      <main className="page-enter px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pt-12 pb-10">
        <p className="ornament mb-3">Chapter Five</p>
        <h1 className="display headline-tight text-ink text-[52px] sm:text-[88px]">
          CROSSROADS<span className="text-whiskey">.</span>
        </h1>
        <p className="serif text-ink_2 text-lg max-w-3xl mt-4 leading-relaxed">
          One word. Three meanings. The Robert Johnson song that started everything, the all-star festival Clapton has hosted for twenty years, and the addiction recovery centre in Antigua that he has called the most important thing he ever built.
        </p>

        <hr className="hr-rule" />

        <div className="space-y-12">
          {CROSSROADS.map((s) => (
            <section key={s.slug} className="relative">
              <div className="flex items-baseline gap-4 mb-3">
                <span
                  aria-hidden
                  className="inline-block w-8 h-[2px]"
                  style={{ background: ACCENTS[s.slug] }}
                />
                <p
                  className="mono text-[10px] uppercase tracking-[0.32em]"
                  style={{ color: ACCENTS[s.slug] }}
                >
                  {s.eyebrow}
                </p>
              </div>
              <h2 className="display text-ink text-[40px] sm:text-[56px] leading-[0.92] tracking-tight">
                {s.title}
              </h2>
              <p className="mono text-[11px] uppercase tracking-[0.20em] text-slate mt-2">
                {s.subtitle}
              </p>

              <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
                <div className="space-y-4 max-w-3xl">
                  {s.body.map((para, i) => (
                    <p
                      key={i}
                      className="serif text-ink_2 text-[15.5px] leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {s.meta && s.meta.length > 0 && (
                  <aside
                    className="border-l-2 pl-5 py-1 space-y-3"
                    style={{ borderColor: ACCENTS[s.slug] }}
                  >
                    {s.meta.map((m) => (
                      <div key={m.label}>
                        <p className="mono text-[10px] uppercase tracking-[0.22em] text-whiskey">
                          {m.label}
                        </p>
                        <p className="serif text-ink_2 text-[13.5px] leading-relaxed mt-0.5">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </aside>
                )}
              </div>

              <hr className="hr-rule mt-10" />
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
