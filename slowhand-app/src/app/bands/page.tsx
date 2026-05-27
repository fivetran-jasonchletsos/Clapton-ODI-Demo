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
