import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { TIMELINE } from "@/lib/timeline";

export const metadata = { title: "Timeline · Slowhand" };

const KIND_COLOR: Record<string, string> = {
  life: "#1f3a8a",
  music: "#b07a2c",
  loss: "#7a1f2b",
};

const KIND_LABEL: Record<string, string> = {
  life: "Life",
  music: "Music",
  loss: "Loss",
};

export default function TimelinePage() {
  return (
    <>
      <TopNav />
      <main className="page-enter px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pt-12 pb-10">
        <p className="ornament mb-3">Year by year</p>
        <h1 className="display headline-tight text-ink text-[52px] sm:text-[88px]">
          TIMELINE<span className="text-whiskey">.</span>
        </h1>
        <p className="serif text-ink_2 text-lg max-w-3xl mt-4 leading-relaxed">
          {TIMELINE.length} entries from Ripley, Surrey in 1945 to the Crypto.com Arena in 2024. Bands joined, records made, the losses that shaped the rest. Marked by kind: <span className="mono text-[12px] text-denim">life</span>, <span className="mono text-[12px] text-whiskey">music</span>, <span className="mono text-[12px] text-wine">loss</span>.
        </p>

        <hr className="hr-rule" />

        <ol className="relative">
          <span
            aria-hidden
            className="absolute left-[78px] sm:left-[110px] top-2 bottom-2 w-px bg-paper_3/70"
          />
          {TIMELINE.map((t) => {
            const kind = t.kind ?? "music";
            const color = KIND_COLOR[kind];
            return (
              <li key={t.year + t.event} className="relative grid grid-cols-[64px_24px_1fr] sm:grid-cols-[96px_28px_1fr] gap-3 sm:gap-5 pb-7 last:pb-0">
                <div className="text-right">
                  <p className="display text-ink text-[28px] sm:text-[36px] leading-none">
                    {t.year}
                  </p>
                  <p
                    className="mono text-[9px] uppercase tracking-[0.22em] mt-1"
                    style={{ color }}
                  >
                    {KIND_LABEL[kind]}
                  </p>
                </div>

                <div className="relative pt-2">
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-2.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-paper"
                    style={{ background: color }}
                  />
                </div>

                <div className="pt-0.5 pb-1">
                  <h3 className="display text-ink text-[20px] sm:text-[24px] leading-tight tracking-tight">
                    {t.event}
                  </h3>
                  <p className="serif text-ink_2 text-[14.5px] mt-1.5 leading-relaxed max-w-2xl">
                    {t.context}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </main>
      <Footer />
    </>
  );
}
