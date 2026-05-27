// Discography — solo records plus the band records Clapton's playing defines.
// Spotify links use search URLs so they keep working even if Spotify changes IDs.

export type Album = {
  slug: string;
  title: string;
  year: number;
  band: string;          // matches BANDS.name
  era: "1960s" | "1970s" | "1980s" | "1990s" | "2000s" | "2010s" | "2020s";
  blurb: string;
  spotifySearch: string; // q for https://open.spotify.com/search/{q}
  highlights: string[];
};

function spotify(query: string) {
  return `https://open.spotify.com/search/${encodeURIComponent(query)}`;
}

export const ALBUMS: Album[] = [
  // Yardbirds
  { slug: "five-live-yardbirds", title: "Five Live Yardbirds", year: 1964, band: "The Yardbirds", era: "1960s",
    blurb: "Live at the Marquee. Clapton 18, already playing harder than anyone in the room.",
    spotifySearch: spotify("Five Live Yardbirds"), highlights: ["I'm a Man", "Smokestack Lightning"] },

  // Bluesbreakers
  { slug: "beano", title: "Bluesbreakers with Eric Clapton", year: 1966, band: "John Mayall's Bluesbreakers", era: "1960s",
    blurb: "The 'Beano' record — origin of the modern blues-rock guitar tone. Les Paul + Marshall combo, cranked.",
    spotifySearch: spotify("Bluesbreakers with Eric Clapton John Mayall"),
    highlights: ["All Your Love", "Hideaway", "Steppin' Out", "Have You Heard"] },

  // Cream
  { slug: "fresh-cream", title: "Fresh Cream", year: 1966, band: "Cream", era: "1960s",
    blurb: "Three musicians figuring out how to be a band that's also a battle royale.",
    spotifySearch: spotify("Fresh Cream"),
    highlights: ["I Feel Free", "Spoonful", "N.S.U."] },
  { slug: "disraeli-gears", title: "Disraeli Gears", year: 1967, band: "Cream", era: "1960s",
    blurb: "The psychedelic peak. 'Sunshine of Your Love' is the riff every kid still learns first.",
    spotifySearch: spotify("Disraeli Gears Cream"),
    highlights: ["Sunshine of Your Love", "Strange Brew", "Tales of Brave Ulysses", "SWLABR"] },
  { slug: "wheels-of-fire", title: "Wheels of Fire", year: 1968, band: "Cream", era: "1960s",
    blurb: "Studio half plus live half. The live 'Crossroads' is the textbook on tasteful improvisation under pressure.",
    spotifySearch: spotify("Wheels of Fire Cream"),
    highlights: ["White Room", "Crossroads (live)", "Spoonful (live)"] },
  { slug: "goodbye", title: "Goodbye", year: 1969, band: "Cream", era: "1960s",
    blurb: "Half studio, half live farewell. 'Badge' co-written with George Harrison.",
    spotifySearch: spotify("Goodbye Cream"),
    highlights: ["Badge", "Doing That Scrapyard Thing"] },

  // Blind Faith
  { slug: "blind-faith", title: "Blind Faith", year: 1969, band: "Blind Faith", era: "1960s",
    blurb: "One album. One tour. One of the best opening sides in rock — 'Had to Cry Today' into 'Can't Find My Way Home'.",
    spotifySearch: spotify("Blind Faith album"),
    highlights: ["Had to Cry Today", "Can't Find My Way Home", "Presence of the Lord", "Sea of Joy"] },

  // Derek and the Dominos
  { slug: "layla", title: "Layla and Other Assorted Love Songs", year: 1970, band: "Derek and the Dominos", era: "1970s",
    blurb: "Duane Allman walks in. The album becomes a guitar-twin masterpiece. The title track is the love song of the rock canon.",
    spotifySearch: spotify("Layla and Other Assorted Love Songs Derek and the Dominos"),
    highlights: ["Layla", "Bell Bottom Blues", "Why Does Love Got to Be So Sad?", "Little Wing", "Have You Ever Loved a Woman"] },

  // Solo 1970s
  { slug: "eric-clapton", title: "Eric Clapton", year: 1970, band: "Eric Clapton (solo)", era: "1970s",
    blurb: "First solo record. Delaney Bramlett's band, J.J. Cale's 'After Midnight' covered. The Tulsa sound begins.",
    spotifySearch: spotify("Eric Clapton 1970 album"),
    highlights: ["After Midnight", "Let It Rain", "Blues Power"] },
  { slug: "461-ocean-boulevard", title: "461 Ocean Boulevard", year: 1974, band: "Eric Clapton (solo)", era: "1970s",
    blurb: "The comeback. Recorded in Miami, light and Caribbean and openly sober-adjacent. Bob Marley's 'I Shot the Sheriff' goes #1.",
    spotifySearch: spotify("461 Ocean Boulevard Eric Clapton"),
    highlights: ["I Shot the Sheriff", "Let It Grow", "Motherless Children", "Willie and the Hand Jive"] },
  { slug: "theres-one-in-every-crowd", title: "There's One in Every Crowd", year: 1975, band: "Eric Clapton (solo)", era: "1970s",
    blurb: "Returning to Miami; deeper reggae interest. Underloved but rewards patient listening.",
    spotifySearch: spotify("There's One in Every Crowd Eric Clapton"),
    highlights: ["Swing Low Sweet Chariot", "The Sky Is Crying"] },
  { slug: "no-reason-to-cry", title: "No Reason to Cry", year: 1976, band: "Eric Clapton (solo)", era: "1970s",
    blurb: "Recorded with The Band at Shangri-La. Dylan walks in. Robbie Robertson plays. A whole scene on tape.",
    spotifySearch: spotify("No Reason to Cry Eric Clapton"),
    highlights: ["Hello Old Friend", "Sign Language"] },
  { slug: "slowhand", title: "Slowhand", year: 1977, band: "Eric Clapton (solo)", era: "1970s",
    blurb: "The title that becomes the nickname. 'Wonderful Tonight' written for Pattie Boyd. 'Cocaine' covered from J.J. Cale.",
    spotifySearch: spotify("Slowhand Eric Clapton"),
    highlights: ["Cocaine", "Wonderful Tonight", "Lay Down Sally", "Next Time You See Her"] },
  { slug: "backless", title: "Backless", year: 1978, band: "Eric Clapton (solo)", era: "1970s",
    blurb: "Tulsa-sound continued. 'Promises' is the underrated single.",
    spotifySearch: spotify("Backless Eric Clapton"),
    highlights: ["Promises", "Tulsa Time"] },

  // Solo 1980s
  { slug: "just-one-night", title: "Just One Night", year: 1980, band: "Eric Clapton (solo)", era: "1980s",
    blurb: "Live at Budokan with Albert Lee. A clean tight document of the late-70s band.",
    spotifySearch: spotify("Just One Night Eric Clapton live"),
    highlights: ["Wonderful Tonight (live)", "Cocaine (live)"] },
  { slug: "money-and-cigarettes", title: "Money and Cigarettes", year: 1983, band: "Eric Clapton (solo)", era: "1980s",
    blurb: "First sober record. Lean band — Ry Cooder, Albert Lee, Donald 'Duck' Dunn.",
    spotifySearch: spotify("Money and Cigarettes Eric Clapton"),
    highlights: ["I've Got a Rock 'n' Roll Heart", "The Shape You're In"] },
  { slug: "behind-the-sun", title: "Behind the Sun", year: 1985, band: "Eric Clapton (solo)", era: "1980s",
    blurb: "Phil Collins production. Polished. 'Forever Man' is the single but 'Same Old Blues' is the keeper.",
    spotifySearch: spotify("Behind the Sun Eric Clapton"),
    highlights: ["Forever Man", "Same Old Blues", "She's Waiting"] },
  { slug: "august", title: "August", year: 1986, band: "Eric Clapton (solo)", era: "1980s",
    blurb: "Big-80s production, but the writing is solid. 'It's in the Way That You Use It' opens the Color of Money film.",
    spotifySearch: spotify("August Eric Clapton"),
    highlights: ["It's in the Way That You Use It", "Tearing Us Apart", "Behind the Mask"] },
  { slug: "journeyman", title: "Journeyman", year: 1989, band: "Eric Clapton (solo)", era: "1980s",
    blurb: "End of the decade reset. Robert Cray, George Harrison guesting. 'Bad Love' wins Grammy.",
    spotifySearch: spotify("Journeyman Eric Clapton"),
    highlights: ["Bad Love", "Pretending", "Old Love", "Run So Far"] },

  // Solo 1990s
  { slug: "unplugged", title: "Unplugged", year: 1992, band: "Eric Clapton (solo)", era: "1990s",
    blurb: "MTV Unplugged. 'Tears in Heaven' for his son Conor. The acoustic 'Layla' divides fans. Six Grammys.",
    spotifySearch: spotify("Unplugged Eric Clapton"),
    highlights: ["Tears in Heaven", "Layla (acoustic)", "Old Love", "Walkin' Blues"] },
  { slug: "from-the-cradle", title: "From the Cradle", year: 1994, band: "Eric Clapton (solo)", era: "1990s",
    blurb: "Pure blues. Twelve covers, no apologies. The album he kept saying he'd make for thirty years.",
    spotifySearch: spotify("From the Cradle Eric Clapton"),
    highlights: ["Motherless Child", "Five Long Years", "Reconsider Baby", "Third Degree"] },
  { slug: "pilgrim", title: "Pilgrim", year: 1998, band: "Eric Clapton (solo)", era: "1990s",
    blurb: "Reflective, processed, divisive. Babyface produces. 'My Father's Eyes' is the moment.",
    spotifySearch: spotify("Pilgrim Eric Clapton"),
    highlights: ["My Father's Eyes", "Pilgrim", "Circus"] },

  // Solo 2000s
  { slug: "reptile", title: "Reptile", year: 2001, band: "Eric Clapton (solo)", era: "2000s",
    blurb: "Tribute to his uncle Adrian. Quieter, jazzier — Billy Preston on Hammond B-3.",
    spotifySearch: spotify("Reptile Eric Clapton"),
    highlights: ["Reptile", "Travelin' Light", "Modern Girl"] },
  { slug: "me-and-mr-johnson", title: "Me and Mr. Johnson", year: 2004, band: "Eric Clapton (solo)", era: "2000s",
    blurb: "Full Robert Johnson tribute. The blues Clapton learned from before he could shave.",
    spotifySearch: spotify("Me and Mr Johnson Eric Clapton"),
    highlights: ["When You Got a Good Friend", "Last Fair Deal Gone Down", "Hell Hound on My Trail"] },
  { slug: "back-home", title: "Back Home", year: 2005, band: "Eric Clapton (solo)", era: "2000s",
    blurb: "Family album. New kids at home; the record is soft, content, unhurried.",
    spotifySearch: spotify("Back Home Eric Clapton"),
    highlights: ["Say What You Will", "Lost and Found"] },

  // Solo 2010s
  { slug: "clapton", title: "Clapton", year: 2010, band: "Eric Clapton (solo)", era: "2010s",
    blurb: "Self-titled forty years in. Mix of covers and originals; Wynton Marsalis features.",
    spotifySearch: spotify("Clapton 2010 album"),
    highlights: ["Travelin' Alone", "When Somebody Thinks You're Wonderful", "Autumn Leaves"] },
  { slug: "old-sock", title: "Old Sock", year: 2013, band: "Eric Clapton (solo)", era: "2010s",
    blurb: "Loose covers album. Paul McCartney guests. The kind of record you make when you have nothing left to prove.",
    spotifySearch: spotify("Old Sock Eric Clapton"),
    highlights: ["Further On Down the Road", "All of Me", "Born to Lose"] },
  { slug: "i-still-do", title: "I Still Do", year: 2016, band: "Eric Clapton (solo)", era: "2010s",
    blurb: "Glyn Johns produces — same producer as Slowhand. Comfort in the room.",
    spotifySearch: spotify("I Still Do Eric Clapton"),
    highlights: ["I Will Be There", "Spiral", "Catch the Blues"] },

  // Solo 2020s
  { slug: "lady-in-the-balcony", title: "The Lady in the Balcony: Lockdown Sessions", year: 2021, band: "Eric Clapton (solo)", era: "2020s",
    blurb: "Pandemic-era return to the unplugged format. Stripped, warm, no audience but his band.",
    spotifySearch: spotify("Lady in the Balcony Lockdown Sessions Eric Clapton"),
    highlights: ["After Midnight", "Bell Bottom Blues", "Layla (unplugged again)"] },
];
