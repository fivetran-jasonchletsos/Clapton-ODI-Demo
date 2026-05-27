import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { DARK_CHAPTERS } from "@/lib/dark-chapters";

export const metadata = { title: "The Difficult Chapters · Slowhand" };

export default function DarkChaptersPage() {
  return (
    <>
      <TopNav />
      <main className="page-enter px-5 sm:px-8 md:px-12 max-w-4xl mx-auto pt-12 pb-10">
        <p className="ornament mb-3">Side B &middot; The hard track</p>
        <h1 className="display headline-tight text-ink text-[44px] sm:text-[72px]">
          THE DIFFICULT<br />CHAPTERS<span className="text-wine">.</span>
        </h1>
        <p className="serif text-ink_2 text-lg max-w-3xl mt-4 leading-relaxed">
          A tribute that skips the bad parts isn't a tribute, it's a press release. Four chapters that belong in any honest accounting of Eric Clapton — handled plainly, with no editorializing in either direction.
        </p>
        <p className="serif text-slate text-[14px] max-w-3xl mt-3 leading-relaxed italic">
          Separating the art from the artist is a choice. This page exists so the choice gets made with the facts on the table, not in their absence.
        </p>

        <hr className="hr-rule" />

        <div className="space-y-8">
          {DARK_CHAPTERS.map((c, i) => (
            <article
              key={c.slug}
              className="relative border border-paper_3/60 bg-paper_2/40 p-6 sm:p-8 rounded"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ background: "#7a1f2b" }}
              />
              <div className="pl-3 sm:pl-4">
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-wine">
                  Chapter {i + 1} &middot; {c.years}
                </p>
                <h2 className="display text-ink text-[28px] sm:text-[36px] leading-[1] mt-1 tracking-tight">
                  {c.title}
                </h2>
                <p className="serif text-ink_2 text-[15px] mt-4 leading-relaxed">
                  {c.blurb}
                </p>
                <p className="serif text-ink text-[14.5px] mt-4 leading-relaxed italic border-l-2 border-whiskey/50 pl-4">
                  {c.takeaway}
                </p>
              </div>
            </article>
          ))}
        </div>

        <hr className="hr-rule" />

        <p className="serif text-ink_2 text-[15px] leading-relaxed max-w-3xl">
          The records on the Discography page are extraordinary. The bands on the Bands page were extraordinary. The songs on the Sheet Music page are extraordinary. The four chapters above happened too. A tribute site that omits them lies by omission. A tribute site that wallows in them tells a different lie. This page exists to keep both lies off the rest of the site.
        </p>
      </main>
      <Footer />
    </>
  );
}
