"use client";

import { useState } from "react";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { ALBUMS } from "@/lib/albums";
import { SONGS } from "@/lib/sheet-music";

// Mood tags. Each album / song picks up tags via the maps below. Three
// quick questions accumulate tags; we score each item by intersection
// and return the top hits.
type Tag =
  | "heartbreak"
  | "fire"
  | "blues"
  | "reflective"
  | "joy"
  | "nostalgia"
  | "60s"
  | "70s"
  | "8090s"
  | "modern"
  | "play"
  | "listen";

// Mood tags by item slug. Curated, not exhaustive.
const ALBUM_TAGS: Record<string, Tag[]> = {
  "beano":                ["blues", "fire", "60s", "play"],
  "fresh-cream":          ["fire", "blues", "60s", "listen"],
  "disraeli-gears":       ["fire", "60s", "play", "listen"],
  "wheels-of-fire":       ["fire", "blues", "60s", "listen"],
  "goodbye":              ["nostalgia", "60s", "listen"],
  "blind-faith":          ["reflective", "60s", "listen"],
  "layla":                ["heartbreak", "fire", "blues", "70s", "play", "listen"],
  "eric-clapton":         ["reflective", "70s", "play", "listen"],
  "461-ocean-boulevard":  ["joy", "70s", "listen", "reflective"],
  "theres-one-in-every-crowd": ["reflective", "70s", "listen"],
  "no-reason-to-cry":     ["nostalgia", "70s", "listen"],
  "slowhand":             ["joy", "play", "70s", "listen"],
  "backless":             ["nostalgia", "70s", "listen"],
  "just-one-night":       ["fire", "70s", "listen"],
  "money-and-cigarettes": ["reflective", "8090s", "listen"],
  "behind-the-sun":       ["reflective", "8090s", "listen"],
  "august":               ["joy", "8090s", "listen"],
  "journeyman":           ["heartbreak", "blues", "8090s", "play", "listen"],
  "unplugged":            ["heartbreak", "reflective", "8090s", "play", "listen"],
  "from-the-cradle":      ["blues", "8090s", "play", "listen"],
  "pilgrim":              ["heartbreak", "reflective", "8090s", "listen"],
  "reptile":              ["reflective", "modern", "listen"],
  "me-and-mr-johnson":    ["blues", "modern", "listen", "play"],
  "back-home":            ["joy", "modern", "listen"],
  "clapton":              ["nostalgia", "modern", "listen"],
  "old-sock":             ["joy", "modern", "listen"],
  "i-still-do":           ["nostalgia", "modern", "listen"],
  "lady-in-the-balcony":  ["nostalgia", "reflective", "modern", "listen"],
  "crossroads-box":       ["nostalgia", "blues", "8090s", "listen"],
  "riding-with-the-king": ["joy", "blues", "modern", "listen", "play"],
  "road-to-escondido":    ["reflective", "modern", "listen"],
};

const SONG_TAGS: Record<string, Tag[]> = {
  "layla":                       ["heartbreak", "fire", "70s", "play"],
  "wonderful-tonight":           ["reflective", "joy", "70s", "play"],
  "tears-in-heaven":             ["heartbreak", "reflective", "8090s", "play"],
  "cocaine":                     ["fire", "70s", "play"],
  "crossroads":                  ["fire", "blues", "60s", "play"],
  "sunshine-of-your-love":       ["fire", "joy", "60s", "play"],
  "white-room":                  ["fire", "60s", "play"],
  "bell-bottom-blues":           ["heartbreak", "70s", "play"],
  "lay-down-sally":              ["joy", "70s", "play"],
  "after-midnight":              ["joy", "70s", "play"],
  "i-shot-the-sheriff":          ["joy", "70s", "play"],
  "let-it-rain":                 ["reflective", "70s", "play"],
  "pretending":                  ["fire", "8090s", "play"],
  "change-the-world":            ["reflective", "joy", "8090s", "play"],
  "running-on-faith":            ["reflective", "blues", "8090s", "play"],
  "old-love":                    ["heartbreak", "blues", "8090s", "play"],
  "have-you-ever-loved-a-woman": ["heartbreak", "blues", "70s", "play"],
  "travelin-alone":              ["blues", "modern", "play"],
  "riding-with-the-king":        ["joy", "blues", "modern", "play"],
};

type Question = {
  prompt: string;
  options: { label: string; tags: Tag[] }[];
};

const QUESTIONS: Question[] = [
  {
    prompt: "What's the mood right now?",
    options: [
      { label: "Heartbroken or close to it",       tags: ["heartbreak", "reflective"] },
      { label: "Need to be moved — fire",           tags: ["fire", "joy"] },
      { label: "Reflective, quiet",                 tags: ["reflective", "nostalgia"] },
      { label: "Just give me the blues",            tags: ["blues"] },
    ],
  },
  {
    prompt: "Which era pulls you in?",
    options: [
      { label: "Sixties — Cream and the Yardbirds", tags: ["60s"] },
      { label: "Seventies — Tulsa-sound and Layla", tags: ["70s"] },
      { label: "Eighties / Nineties — Unplugged, Journeyman, Pilgrim", tags: ["8090s"] },
      { label: "Modern — Road to Escondido and later", tags: ["modern"] },
    ],
  },
  {
    prompt: "Playing tonight or just listening?",
    options: [
      { label: "Got the guitar in my hands",        tags: ["play"] },
      { label: "Listening only — headphones, drive, room", tags: ["listen"] },
      { label: "A little of both",                  tags: ["play", "listen"] },
    ],
  },
];

function score(itemTags: Tag[] | undefined, wantTags: Tag[]) {
  if (!itemTags) return 0;
  let s = 0;
  for (const t of wantTags) if (itemTags.includes(t)) s += 1;
  return s;
}

function recommend(wantTags: Tag[]) {
  const scoredAlbums = ALBUMS.map((a) => ({
    item: a,
    s: score(ALBUM_TAGS[a.slug], wantTags),
  })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s);

  const scoredSongs = SONGS.map((sg) => ({
    item: sg,
    s: score(SONG_TAGS[sg.slug], wantTags),
  })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s);

  return {
    albums: scoredAlbums.slice(0, 3).map((x) => x.item),
    songs: scoredSongs.slice(0, 3).map((x) => x.item),
  };
}

export default function MoodPage() {
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null]);

  const setAnswer = (q: number, opt: number) => {
    const next = [...answers];
    next[q] = opt;
    setAnswers(next);
  };

  const allAnswered = answers.every((a) => a !== null);
  const recs = allAnswered
    ? recommend(answers.flatMap((a, i) => QUESTIONS[i].options[a!].tags))
    : null;

  const reset = () => setAnswers([null, null, null]);

  return (
    <>
      <TopNav />
      <main className="page-enter px-5 sm:px-8 md:px-12 max-w-4xl mx-auto pt-12 pb-10">
        <p className="ornament mb-3">Tell me what to listen to</p>
        <h1 className="display headline-tight text-ink text-[52px] sm:text-[80px]">
          MOOD<span className="text-whiskey">.</span>
        </h1>
        <p className="serif text-ink_2 text-lg max-w-3xl mt-4 leading-relaxed">
          Three quick questions. We&apos;ll point you at the records and the songs that fit. No algorithms, just one fan&apos;s opinion of what plays.
        </p>

        <hr className="hr-rule" />

        {QUESTIONS.map((q, qi) => (
          <section key={qi} className="mb-7">
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-denim mb-2">
              Question {qi + 1}
            </p>
            <h2 className="display text-ink text-[24px] sm:text-[28px] leading-tight mb-3">
              {q.prompt}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {q.options.map((opt, oi) => {
                const active = answers[qi] === oi;
                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => setAnswer(qi, oi)}
                    className={`text-left px-4 py-3 rounded border serif text-[15px] transition-colors ${
                      active
                        ? "border-whiskey bg-whiskey/10 text-ink"
                        : "border-paper_3/60 bg-paper_2/30 text-ink_2 hover:border-whiskey/60 hover:bg-paper_2/60"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </section>
        ))}

        <hr className="hr-rule" />

        {!allAnswered && (
          <p className="serif text-slate text-[15px] italic">
            Answer all three and we&apos;ll show you what to put on.
          </p>
        )}

        {recs && (
          <>
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <p className="ornament">Try these</p>
              <button
                type="button"
                onClick={reset}
                className="mono text-[10px] uppercase tracking-[0.18em] text-slate hover:text-ink"
              >
                Reset
              </button>
            </div>

            <h2 className="display text-ink text-[36px] sm:text-[52px] leading-[0.95] mb-6">
              WHAT TO<br />PLAY<span className="text-whiskey">.</span>
            </h2>

            <section className="mb-8">
              <h3 className="mono text-[11px] uppercase tracking-[0.22em] text-denim mb-3">Songs</h3>
              {recs.songs.length === 0 ? (
                <p className="serif text-slate text-[14px] italic">No song matches that combination — try a different mix above.</p>
              ) : (
                <div className="space-y-2">
                  {recs.songs.map((s) => (
                    <article key={s.slug} className="border border-paper_3/60 bg-paper_2/40 p-4 rounded flex items-baseline justify-between gap-3 flex-wrap">
                      <div>
                        <p className="display text-ink text-[20px] leading-tight">{s.title}</p>
                        <p className="mono text-[10px] uppercase tracking-[0.18em] text-whiskey mt-0.5">{s.band} &middot; {s.year}</p>
                      </div>
                      <div className="flex gap-2">
                        <a href={s.songsterr} target="_blank" rel="noopener noreferrer" className="mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1.5 rounded border border-denim/40 text-denim hover:bg-denim hover:text-paper">Tab</a>
                        <Link href="/sheet-music" className="mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1.5 rounded border border-whiskey/40 text-whiskey hover:bg-whiskey hover:text-paper">Lesson</Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>

            <section>
              <h3 className="mono text-[11px] uppercase tracking-[0.22em] text-denim mb-3">Records</h3>
              {recs.albums.length === 0 ? (
                <p className="serif text-slate text-[14px] italic">No album matches that combination — try a different mix above.</p>
              ) : (
                <div className="space-y-2">
                  {recs.albums.map((a) => (
                    <a
                      key={a.slug}
                      href={a.spotifySearch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-paper_3/60 bg-paper_2/40 p-4 rounded hover:border-whiskey transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-3 flex-wrap">
                        <div>
                          <p className="display text-ink text-[20px] leading-tight">{a.title}</p>
                          <p className="mono text-[10px] uppercase tracking-[0.18em] text-whiskey mt-0.5">{a.band} &middot; {a.year}</p>
                        </div>
                        <span className="mono text-[10px] uppercase tracking-[0.18em] text-denim">Open in Spotify &rarr;</span>
                      </div>
                      <p className="serif text-ink_2/85 text-[13.5px] mt-2 leading-relaxed">{a.blurb}</p>
                    </a>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
