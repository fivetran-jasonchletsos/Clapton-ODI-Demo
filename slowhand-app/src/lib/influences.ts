// The bluesmen Eric Clapton learned from. He has never been shy about
// pointing at his teachers — every interview circles back to these names.

export type Influence = {
  slug: string;
  name: string;
  years: string;       // life dates
  origin: string;      // where from
  blurb: string;       // 2 sentences: what Clapton took
  listen: string;      // one signature song
};

export const INFLUENCES: Influence[] = [
  {
    slug: "robert-johnson",
    name: "Robert Johnson",
    years: "1911–1938",
    origin: "Hazlehurst, Mississippi",
    blurb:
      "The fountainhead. Clapton has said hearing Johnson at fifteen was the moment that decided his life — and the 2004 album Me and Mr. Johnson is his most direct thank-you. The crossroads myth, the haunted vocal, the impossible right-hand pattern.",
    listen: "Cross Road Blues (1936)",
  },
  {
    slug: "muddy-waters",
    name: "Muddy Waters",
    years: "1913–1983",
    origin: "Rolling Fork, Mississippi → Chicago",
    blurb:
      "The man who electrified the Delta. Clapton toured with Muddy as opening act in 1979 and called him 'the father.' Where you hear Clapton dig into a slow blues with confidence rather than flash, that is Muddy showing through.",
    listen: "Hoochie Coochie Man (1954)",
  },
  {
    slug: "howlin-wolf",
    name: "Howlin' Wolf",
    years: "1910–1976",
    origin: "White Station, Mississippi → Chicago",
    blurb:
      "The voice that scared the British Invasion into existence. Clapton played on The London Howlin' Wolf Sessions in 1970 — a humbling lesson in not getting in the singer's way. Hubert Sumlin's guitar on Wolf's records is half the Clapton vocabulary.",
    listen: "Smokestack Lightning (1956)",
  },
  {
    slug: "bb-king",
    name: "B.B. King",
    years: "1925–2015",
    origin: "Itta Bena, Mississippi → Memphis",
    blurb:
      "The melodic blueprint. Every Clapton solo that bends one note and holds it for four bars instead of running scales is B.B. King's lesson learned. The two of them recorded Riding with the King in 2000 — two generations of the same guitar conversation.",
    listen: "The Thrill Is Gone (1969)",
  },
  {
    slug: "freddie-king",
    name: "Freddie King",
    years: "1934–1976",
    origin: "Gilmer, Texas",
    blurb:
      "The instrumental textbook. 'Hideaway' on the Bluesbreakers record is Clapton playing Freddie King's arrangement note-for-note, and his early lead style is more Freddie than anyone. The attack — the picked aggression — is pure Freddie.",
    listen: "Hideaway (1961)",
  },
  {
    slug: "albert-king",
    name: "Albert King",
    years: "1923–1992",
    origin: "Indianola, Mississippi",
    blurb:
      "The string-bending physics of modern rock guitar. Albert King played a Flying V upside-down with the strings reversed, and the giant overbends that resulted became the basic vocabulary of every blues-rock guitarist since. Listen to any Clapton vibrato — it is Albert King filtered.",
    listen: "Born Under a Bad Sign (1967)",
  },
  {
    slug: "buddy-guy",
    name: "Buddy Guy",
    years: "1936–",
    origin: "Lettsworth, Louisiana → Chicago",
    blurb:
      "The wildness. Where most Chicago blues stayed controlled, Buddy went out — feedback, screams, abandoning the chord changes. Clapton has called Buddy 'the best living guitar player' more than once and put him on every Crossroads Festival bill.",
    listen: "Stone Crazy (1962)",
  },
  {
    slug: "otis-rush",
    name: "Otis Rush",
    years: "1934–2018",
    origin: "Philadelphia, Mississippi → Chicago",
    blurb:
      "The minor-key intensity. 'All Your Love' on the Beano album is a direct Otis Rush cover, and the vocal phrasing — the way Clapton trails a line and then bites the next one — is borrowed directly. West-side Chicago blues at its most emotional.",
    listen: "All Your Love (I Miss Loving) (1958)",
  },
  {
    slug: "hubert-sumlin",
    name: "Hubert Sumlin",
    years: "1931–2011",
    origin: "Greenwood, Mississippi",
    blurb:
      "Howlin' Wolf's guitarist for almost three decades. The angular, almost-jazz licks that snake under Wolf's vocal are Sumlin, and Clapton has cited him directly as the under-credited architect of his own playing. They reunited at the 2007 Crossroads Festival, months before Sumlin died.",
    listen: "Killing Floor (1964, w/ Howlin' Wolf)",
  },
  {
    slug: "big-bill-broonzy",
    name: "Big Bill Broonzy",
    years: "1903–1958",
    origin: "Lake Dick, Arkansas → Chicago",
    blurb:
      "The folk-blues bridge. For a young Clapton hearing American records in Surrey, Broonzy's solo acoustic sides were the first proof that the blues was also a fingerpicking tradition — not just an electric one. The Unplugged record's quieter moments trace back here.",
    listen: "Hey Hey (1951)",
  },
];
