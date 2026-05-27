import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { GUITARS } from "@/lib/guitars";

export const metadata = { title: "Guitars · Slowhand" };

export default function GuitarsPage() {
  const electrics = GUITARS.filter((g) => g.type === "electric");
  const acoustics = GUITARS.filter((g) => g.type === "acoustic");

  return (
    <>
      <TopNav />
      <main className="page-enter px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pt-12 pb-10">
        <p className="ornament mb-3">Chapter Four</p>
        <h1 className="display headline-tight text-ink text-[52px] sm:text-[88px]">
          THE GUITARS<span className="text-whiskey">.</span>
        </h1>
        <p className="serif text-ink_2 text-lg max-w-3xl mt-4 leading-relaxed">
          The named instruments — the ones with stories. Brownie played the Layla sessions. Blackie sold for nearly a million dollars. The Fool was painted by a Dutch art collective. Beano was stolen and never recovered.
        </p>

        <hr className="hr-rule" />

        <section className="mb-12">
          <div className="flex items-baseline gap-4 mb-3">
            <h2 className="display text-ink text-[34px] sm:text-[44px] leading-none">Electrics</h2>
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-slate">
              {electrics.length} guitars
            </span>
          </div>
          <p className="serif text-ink_2 text-[15px] max-w-3xl leading-relaxed mb-5">
            Strats, a couple of Gibsons, and the signature model he reaches for now. Each one defined a stretch of his recording life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {electrics.map((g, i) => (
              <article
                key={g.slug}
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
                  <p className="mono text-[10px] uppercase tracking-[0.22em] text-denim">
                    {g.years} &middot; {g.era}
                  </p>
                  <h3 className="display text-ink text-[30px] sm:text-[36px] leading-[0.95] mt-1">
                    {g.name}
                  </h3>
                  <p className="mono text-[11px] uppercase tracking-[0.20em] text-whiskey mt-1">
                    {g.maker} &middot; {g.model}
                  </p>
                  <p className="serif text-ink_2/80 text-[12.5px] italic mt-1.5">
                    {g.finish}
                  </p>
                  <p className="serif text-ink_2 text-[14px] mt-3 leading-relaxed">
                    {g.story}
                  </p>
                  <p className="mono text-[10px] uppercase tracking-[0.22em] text-wine mt-4">
                    Defining: <span className="text-ink_2 normal-case tracking-normal font-serif">{g.defining}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {acoustics.length > 0 && (
          <section>
            <div className="flex items-baseline gap-4 mb-3">
              <h2 className="display text-ink text-[34px] sm:text-[44px] leading-none">Acoustic</h2>
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-slate">
                {acoustics.length} guitar{acoustics.length === 1 ? "" : "s"}
              </span>
            </div>
            <p className="serif text-ink_2 text-[15px] max-w-3xl leading-relaxed mb-5">
              The quieter side of the catalog — Unplugged, Tears in Heaven, the late records.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {acoustics.map((g) => (
                <article
                  key={g.slug}
                  className="relative border border-paper_3/60 bg-paper/60 p-6 rounded"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 bottom-0 w-1 bg-whiskey"
                  />
                  <div className="pl-3 sm:pl-4">
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-denim">
                      {g.years} &middot; {g.era}
                    </p>
                    <h3 className="display text-ink text-[30px] sm:text-[36px] leading-[0.95] mt-1">
                      {g.name}
                    </h3>
                    <p className="mono text-[11px] uppercase tracking-[0.20em] text-whiskey mt-1">
                      {g.maker} &middot; {g.model}
                    </p>
                    <p className="serif text-ink_2/80 text-[12.5px] italic mt-1.5">
                      {g.finish}
                    </p>
                    <p className="serif text-ink_2 text-[14px] mt-3 leading-relaxed">
                      {g.story}
                    </p>
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-wine mt-4">
                      Defining: <span className="text-ink_2 normal-case tracking-normal font-serif">{g.defining}</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
