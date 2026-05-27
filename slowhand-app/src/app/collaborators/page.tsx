import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { COLLABORATORS } from "@/lib/collaborators";

export const metadata = { title: "Collaborators · Slowhand" };

export default function CollaboratorsPage() {
  return (
    <>
      <TopNav />
      <main className="page-enter px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pt-12 pb-10">
        <p className="ornament mb-3">Chapter Three</p>
        <h1 className="display headline-tight text-ink text-[52px] sm:text-[88px]">
          THE PEOPLE<span className="text-whiskey">.</span>
        </h1>
        <p className="serif text-ink_2 text-lg max-w-3xl mt-4 leading-relaxed">
          Everyone Eric Clapton has played, recorded, or toured with — band-mates, sidemen, friends, rivals. {COLLABORATORS.length} entries, curated for the people who shaped his records or whose records he shaped.
        </p>

        <hr className="hr-rule" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {COLLABORATORS.map((c) => (
            <article
              key={c.slug}
              className="border border-paper_3/60 bg-paper_2/40 p-5 rounded"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="display text-ink text-[22px] leading-tight tracking-tight">{c.name}</h2>
                <span className="mono text-[10px] tracking-[0.18em] text-denim shrink-0">{c.era}</span>
              </div>
              <p className="mono text-[10px] uppercase tracking-[0.22em] text-whiskey mt-1">{c.instrument}</p>
              <p className="serif text-ink_2 text-[13.5px] mt-2.5 leading-relaxed">{c.context}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
