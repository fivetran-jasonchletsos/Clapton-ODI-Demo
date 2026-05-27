import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { DEDICATION, WOODY_PHOTOS } from "@/lib/dedication";

export const metadata = { title: "For Woody · Slowhand" };

export default function DedicationPage() {
  const portrait = WOODY_PHOTOS[0];
  const rest = WOODY_PHOTOS.slice(1);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      <TopNav />
      <main className="page-enter px-5 sm:px-8 md:px-12 max-w-6xl mx-auto pt-12 pb-10">
        <p className="ornament mb-3">Side B &middot; Closing track</p>
        <h1 className="display headline-tight text-ink text-[52px] sm:text-[96px]">
          FOR WOODY<span className="text-whiskey">.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-6 sm:gap-10 mt-8 items-start">
          <figure className="border border-paper_3/60 bg-paper_2/60 p-2 rounded">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}${portrait.src}`}
              alt={portrait.alt}
              className="block w-full h-auto"
            />
            <figcaption className="mono text-[10px] uppercase tracking-[0.18em] text-slate p-2 pt-3">
              {portrait.caption}
            </figcaption>
          </figure>

          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-denim">
              To: {DEDICATION.to}
            </p>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-whiskey mt-1">
              From: {DEDICATION.by} &middot; {DEDICATION.relationship}
            </p>
            <p className="serif text-ink_2 text-lg leading-relaxed mt-6">
              {DEDICATION.message}
            </p>
            <p className="serif text-ink_2 text-[15px] leading-relaxed mt-4 italic">
              Bands he played in. Records he made. People he made them with. Tabs for the songs you're already learning. All of it, in one place — for you.
            </p>
          </div>
        </div>

        <hr className="hr-rule" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {rest.map((p) => (
            <figure key={p.src} className="border border-paper_3/60 bg-paper_2/60 p-2 rounded">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${basePath}${p.src}`} alt={p.alt} className="block w-full h-auto" />
              <figcaption className="mono text-[10px] uppercase tracking-[0.18em] text-slate p-2 pt-3">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="serif text-ink_2 text-[15px] leading-relaxed mt-10 max-w-3xl">
          Happy listening, brother. Pick the guitar up tonight and play something off Slowhand.
        </p>
        <p className="mono text-[11px] uppercase tracking-[0.22em] text-whiskey mt-2">
          &mdash; JC
        </p>
      </main>
      <Footer />
    </>
  );
}
