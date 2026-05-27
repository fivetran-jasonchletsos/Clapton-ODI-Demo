// Iconic Clapton songs with sheet music / tab links.
// Songsterr URLs always work as searches; Ultimate Guitar URLs are direct tabs.
// Both open in new tab for Woody to study from.

export type Song = {
  slug: string;
  title: string;
  band: string;
  year: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  technique: string;     // the lesson — what to learn
  songsterr: string;
  ultimateGuitar: string;
};

function songsterr(song: string) {
  return `https://www.songsterr.com/?pattern=${encodeURIComponent(song + " eric clapton")}`;
}
function ug(song: string) {
  return `https://www.ultimate-guitar.com/search.php?search_type=title&value=${encodeURIComponent(song + " eric clapton")}`;
}

export const SONGS: Song[] = [
  { slug: "layla", title: "Layla", band: "Derek and the Dominos", year: 1970,
    difficulty: "Advanced", technique: "Open D dorian riff in three parts; coda piano line on guitar; Allman slide on top.",
    songsterr: songsterr("Layla"), ultimateGuitar: ug("Layla") },

  { slug: "wonderful-tonight", title: "Wonderful Tonight", band: "Eric Clapton (Slowhand)", year: 1977,
    difficulty: "Intermediate", technique: "G major arpeggios with the descending hook over the IV chord. Easy to learn, very hard to make sing.",
    songsterr: songsterr("Wonderful Tonight"), ultimateGuitar: ug("Wonderful Tonight") },

  { slug: "tears-in-heaven", title: "Tears in Heaven", band: "Eric Clapton (Unplugged)", year: 1992,
    difficulty: "Advanced", technique: "Fingerstyle in A major. Travis picking, hammer-ons, the bridge modulation. The most-played funeral piece of the modern era.",
    songsterr: songsterr("Tears in Heaven"), ultimateGuitar: ug("Tears in Heaven") },

  { slug: "cocaine", title: "Cocaine", band: "Eric Clapton (Slowhand)", year: 1977,
    difficulty: "Beginner", technique: "E5 riff, the most-taught rock guitar lesson on Earth. Lay it back. Don't rush.",
    songsterr: songsterr("Cocaine"), ultimateGuitar: ug("Cocaine") },

  { slug: "crossroads", title: "Crossroads", band: "Cream (Wheels of Fire)", year: 1968,
    difficulty: "Expert", technique: "Robert Johnson rebuilt as a guitar solo masterclass. The live take is the curriculum.",
    songsterr: songsterr("Crossroads"), ultimateGuitar: ug("Crossroads") },

  { slug: "sunshine-of-your-love", title: "Sunshine of Your Love", band: "Cream (Disraeli Gears)", year: 1967,
    difficulty: "Beginner", technique: "The riff every kid learns first. D minor blues scale, descending. Pentatonic gospel.",
    songsterr: songsterr("Sunshine of Your Love"), ultimateGuitar: ug("Sunshine of Your Love") },

  { slug: "white-room", title: "White Room", band: "Cream (Wheels of Fire)", year: 1968,
    difficulty: "Intermediate", technique: "5/4 intro into 4/4 verse. Wah pedal on the lead. Classic Clapton-on-SG tone.",
    songsterr: songsterr("White Room"), ultimateGuitar: ug("White Room") },

  { slug: "bell-bottom-blues", title: "Bell Bottom Blues", band: "Derek and the Dominos", year: 1970,
    difficulty: "Advanced", technique: "C major progression that wanders gorgeously. The chord changes are the lesson.",
    songsterr: songsterr("Bell Bottom Blues"), ultimateGuitar: ug("Bell Bottom Blues") },

  { slug: "lay-down-sally", title: "Lay Down Sally", band: "Eric Clapton (Slowhand)", year: 1977,
    difficulty: "Intermediate", technique: "Tulsa shuffle in A. Two-guitar interlock with Marcy Levy and Albert Lee. Pocket lesson.",
    songsterr: songsterr("Lay Down Sally"), ultimateGuitar: ug("Lay Down Sally") },

  { slug: "after-midnight", title: "After Midnight", band: "Eric Clapton (solo debut)", year: 1970,
    difficulty: "Intermediate", technique: "J.J. Cale's song. Stop and start, breathe, don't fill every gap. The Tulsa-sound thesis.",
    songsterr: songsterr("After Midnight"), ultimateGuitar: ug("After Midnight") },

  { slug: "i-shot-the-sheriff", title: "I Shot the Sheriff", band: "Eric Clapton (461 Ocean Boulevard)", year: 1974,
    difficulty: "Intermediate", technique: "Reggae rhythm for a guitarist used to rock. Wait for the upbeat. Don't crowd the bass.",
    songsterr: songsterr("I Shot the Sheriff"), ultimateGuitar: ug("I Shot the Sheriff") },

  { slug: "let-it-rain", title: "Let It Rain", band: "Eric Clapton (solo debut)", year: 1970,
    difficulty: "Intermediate", technique: "C major outro jam. Modal soloing; great practice for staying inside one position.",
    songsterr: songsterr("Let It Rain"), ultimateGuitar: ug("Let It Rain") },

  { slug: "pretending", title: "Pretending", band: "Eric Clapton (Journeyman)", year: 1989,
    difficulty: "Intermediate", technique: "Tight 80s pop-blues. The solo is short and surgical — model for restraint.",
    songsterr: songsterr("Pretending"), ultimateGuitar: ug("Pretending") },

  { slug: "change-the-world", title: "Change the World", band: "Eric Clapton / Babyface", year: 1996,
    difficulty: "Advanced", technique: "Tommy Sims wrote it; Clapton fingerpicks it. Travis-picked thumb pattern is the entire arrangement.",
    songsterr: songsterr("Change the World"), ultimateGuitar: ug("Change the World") },

  { slug: "running-on-faith", title: "Running on Faith", band: "Eric Clapton (Journeyman)", year: 1989,
    difficulty: "Intermediate", technique: "Open-G blues. The Unplugged version is the one to study — Andy Fairweather Low on second guitar.",
    songsterr: songsterr("Running on Faith"), ultimateGuitar: ug("Running on Faith") },
];
