// The guitars Eric Clapton made famous (and that made him famous).
// Curated for the named instruments with real lore — not every guitar
// he ever owned. Brownie, Blackie, The Fool, Beano, Crash, the 000-28EC.

export type Guitar = {
  slug: string;
  name: string;
  maker: string;        // Fender, Gibson, Martin
  model: string;
  type: "electric" | "acoustic";
  years: string;        // when Clapton used it
  era: string;          // shorthand era tag
  finish: string;       // visual identifier
  story: string;        // 2-3 sentences of lore
  defining: string;     // signature song / record
};

export const GUITARS: Guitar[] = [
  {
    slug: "brownie",
    name: "Brownie",
    maker: "Fender",
    model: "1956 Stratocaster",
    type: "electric",
    years: "1970–1971",
    era: "Dominos",
    finish: "Two-tone sunburst, heavily worn",
    story:
      "Clapton's first serious Stratocaster, bought in London in 1967. He played it through the entire Derek and the Dominos record, then used it as the backup to Blackie for years. The Layla guitar — that's Brownie on the title track's main riff.",
    defining: "Layla — Derek and the Dominos, 1970",
  },
  {
    slug: "blackie",
    name: "Blackie",
    maker: "Fender",
    model: "Composite Stratocaster (three 1950s bodies)",
    type: "electric",
    years: "1970–1985",
    era: "Solo / 70s & 80s",
    finish: "Black, with the cigarette burns on the headstock",
    story:
      "Clapton bought six 1950s Strats from the Sho-Bud guitar shop in Nashville for a hundred dollars each, gave three away to George Harrison, Pete Townshend, and Steve Winwood, then assembled the best parts from the remaining three into one guitar. Blackie became his primary stage guitar for fifteen years. Sold at Christie's in 2004 for $959,500 to benefit the Crossroads Centre — the most expensive guitar ever auctioned at the time.",
    defining: "461 Ocean Boulevard through Behind the Sun, 1974–1985",
  },
  {
    slug: "the-fool",
    name: "The Fool",
    maker: "Gibson",
    model: "1964 SG Standard",
    type: "electric",
    years: "1967–1968",
    era: "Cream",
    finish: "Psychedelic paint job by The Fool collective",
    story:
      "Clapton's main Cream-era guitar. The Dutch art collective The Fool — Simon Posthuma and Marijke Koger — painted it in 1967 in full psychedelic regalia. You hear it on Disraeli Gears and the live Wheels of Fire sides. Later owned by Todd Rundgren and Jackie Lomax.",
    defining: "Sunshine of Your Love — Cream, Disraeli Gears, 1967",
  },
  {
    slug: "beano-les-paul",
    name: "Beano Les Paul",
    maker: "Gibson",
    model: "1960 Les Paul Standard",
    type: "electric",
    years: "1965–1966",
    era: "Bluesbreakers",
    finish: "Cherry Sunburst",
    story:
      "Plugged into a Marshall JTM45 combo at maximum volume, this guitar invented the British blues-rock guitar sound. The 'Beano' nickname comes from the album cover where Clapton is reading the Beano comic. Stolen during rehearsals for Cream in 1966 and never recovered — one of the most legendary lost guitars in rock.",
    defining: "Hideaway / All Your Love — Bluesbreakers with Eric Clapton, 1966",
  },
  {
    slug: "signature-strat",
    name: "Eric Clapton Signature Stratocaster",
    maker: "Fender",
    model: "Signature Stratocaster",
    type: "electric",
    years: "1988–present",
    era: "Solo / modern",
    finish: "Various — Torino Red, Pewter, Black, Olympic White, Daphne Blue",
    story:
      "The first Fender artist signature model, designed to replicate Blackie's feel with a few key updates: a soft-V neck profile, Lace Sensor pickups (later Vintage Noiseless), and a 25dB active mid-boost preamp. He has played a version of this guitar at every show since. Still the model he reaches for first.",
    defining: "Pretty much every live record from Journeyman onward",
  },
  {
    slug: "crash-strats",
    name: "Crash 1 / Crash 2 / Crash 3",
    maker: "Fender",
    model: "Signature Stratocasters (hand-painted)",
    type: "electric",
    years: "2001–present",
    era: "Solo / 2000s",
    finish: "Spray-paint and marker by NY graffiti artist John 'Crash' Matos",
    story:
      "Clapton commissioned graffiti artist John 'Crash' Matos to paint three of his signature Stratocasters in vivid street-art style. Crash 1 became a primary touring guitar in the early 2000s — visually unmistakable, sonically a standard Signature Strat underneath. A reminder that the man who played in front of Buckingham Palace still has taste for bright noise.",
    defining: "One More Car, One More Rider tour, 2001",
  },
  {
    slug: "es-335",
    name: "The 335",
    maker: "Gibson",
    model: "1964 ES-335 TDC",
    type: "electric",
    years: "1964–present (still owned)",
    era: "Cream / Solo",
    finish: "Cherry",
    story:
      "Clapton bought this guitar new in 1964 and never sold it — the longest-owned guitar in his collection. Used on Cream's farewell concert at the Royal Albert Hall in 1968 and through select solo dates ever since. The 'civilian' guitar that survived everything.",
    defining: "Badge — Cream, Goodbye, 1969",
  },
  {
    slug: "martin-000-28ec",
    name: "Martin 000-28EC",
    maker: "Martin",
    model: "000-28EC Signature",
    type: "acoustic",
    years: "1995–present",
    era: "Solo / Unplugged onward",
    finish: "Natural, sunburst variant available",
    story:
      "Clapton's signature acoustic — a 000-size Martin with herringbone trim and a slim mahogany neck. Modeled on the prewar Martin he used for MTV Unplugged in 1992. It is the sound of 'Tears in Heaven', the Unplugged record, and every quiet moment in his late catalog.",
    defining: "Tears in Heaven / Unplugged, 1992",
  },
  {
    slug: "cherry-les-paul-custom",
    name: "'56 Cherry Les Paul Custom",
    maker: "Gibson",
    model: "1956 Les Paul Custom (refinished)",
    type: "electric",
    years: "1966 (briefly)",
    era: "Cream (early)",
    finish: "Cherry refinish over the original black",
    story:
      "A brief but documented stand-in after Beano was stolen. Clapton played it for some early Cream rehearsals before the SG took over. A footnote in the catalog — but the kind of footnote serious Clapton-watchers chase.",
    defining: "Early Cream rehearsals, 1966",
  },
];
