// Iconic Clapton songs with sheet music / tab links.
// Songsterr URLs are direct tab pages where resolvable; Ultimate Guitar URLs are searches.
// Both open in new tab for Woody to study from.

export type Song = {
  slug: string;
  title: string;
  band: string;
  year: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  tuning?: string;       // tuning + capo notes; the FIRST thing a student needs
  technique: string;     // the lesson — what to learn
  songsterr: string;
  ultimateGuitar: string;
};

function ug(song: string) {
  return `https://www.ultimate-guitar.com/search.php?search_type=title&value=${encodeURIComponent(song + " eric clapton")}`;
}

export const SONGS: Song[] = [
  { slug: "layla", title: "Layla", band: "Derek and the Dominos", year: 1970,
    difficulty: "Advanced",
    tuning: "Standard tuning, key of D minor. Coda modulates to C major.",
    technique: "Main riff is a three-part guitar harmony — Clapton and Duane Allman interlocking. Coda transcribes Jim Gordon's piano line onto guitar with Allman slide on top.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-dereck-the-dominos-layla-tab-s534032", ultimateGuitar: ug("Layla") },

  { slug: "wonderful-tonight", title: "Wonderful Tonight", band: "Eric Clapton (Slowhand)", year: 1977,
    difficulty: "Intermediate",
    tuning: "Standard tuning, key of G major.",
    technique: "G major arpeggios with the descending double-stop hook over the IV chord. Easy to learn, very hard to make sing — the lesson is bending into the major 3rd cleanly.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-wonderful-tonight-tab-s1380", ultimateGuitar: ug("Wonderful Tonight") },

  { slug: "tears-in-heaven", title: "Tears in Heaven", band: "Eric Clapton (Unplugged)", year: 1992,
    difficulty: "Advanced",
    tuning: "Standard tuning. Commonly taught as G-shapes with capo 2 (sounding A major); some arrangements drop the capo and play in A directly.",
    technique: "Fingerstyle Travis picking, hammer-ons into the chord shapes, bridge modulation up a step. The most-played funeral piece of the modern era; the picking pattern is the lesson.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-tears-in-heaven-tab-s4", ultimateGuitar: ug("Tears in Heaven") },

  { slug: "cocaine", title: "Cocaine", band: "Eric Clapton (Slowhand)", year: 1977,
    difficulty: "Beginner",
    tuning: "Standard tuning, key of E.",
    technique: "E5 power-chord riff, the most-taught rock guitar lesson on Earth. Lay it back. Don't rush. Single-note rake on the turnaround.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-cocaine-tab-s374", ultimateGuitar: ug("Cocaine") },

  { slug: "crossroads", title: "Crossroads", band: "Cream (Wheels of Fire)", year: 1968,
    difficulty: "Expert",
    tuning: "Standard tuning, key of A. Study the Winterland live take from Wheels of Fire — that's the curriculum, not the studio cover of the Robert Johnson original.",
    technique: "Robert Johnson rebuilt as a guitar-solo masterclass. Three choruses, each developing a new motif under sustained band pressure. Tasteful improvisation under fire.",
    songsterr: "https://www.songsterr.com/a/wsa/cream-crossroads-live-wheels-of-fire-tab-s4001215", ultimateGuitar: ug("Crossroads") },

  { slug: "sunshine-of-your-love", title: "Sunshine of Your Love", band: "Cream (Disraeli Gears)", year: 1967,
    difficulty: "Beginner",
    tuning: "Standard tuning, key of D.",
    technique: "The riff every kid learns first — descending double-stops on the D blues scale. The lesson is the feel: late behind the beat, heavy downstroke, no rush.",
    songsterr: "https://www.songsterr.com/a/wsa/cream-sunshine-of-your-love-tab-s256", ultimateGuitar: ug("Sunshine of Your Love") },

  { slug: "white-room", title: "White Room", band: "Cream (Wheels of Fire)", year: 1968,
    difficulty: "Intermediate",
    tuning: "Standard tuning. Intro in 5/4 (key of D minor), verse drops into 4/4.",
    technique: "Wah-pedal lead on the SG. The lesson is the time-signature transition and keeping the wah heel-down on the downbeat.",
    songsterr: "https://www.songsterr.com/a/wsa/cream-white-room-tab-s4455", ultimateGuitar: ug("White Room") },

  { slug: "bell-bottom-blues", title: "Bell Bottom Blues", band: "Derek and the Dominos", year: 1970,
    difficulty: "Intermediate",
    tuning: "Standard tuning, key of C major.",
    technique: "Wandering chord-melody in C — the lesson is voice-leading through the changes, not chops. Hold each chord shape long enough for the melody note to ring.",
    songsterr: "https://www.songsterr.com/a/wsa/derek-and-the-dominos-bell-bottom-blues-tab-s415788", ultimateGuitar: ug("Bell Bottom Blues") },

  { slug: "lay-down-sally", title: "Lay Down Sally", band: "Eric Clapton (Slowhand)", year: 1977,
    difficulty: "Intermediate",
    tuning: "Standard tuning, key of A. Tulsa shuffle feel.",
    technique: "Two-guitar interlock with Marcy Levy and Albert Lee. Pocket lesson — the shuffle eighth-note feel is the whole point; both guitars in different positions of the same A chord.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-lay-down-sally-tab-s34295", ultimateGuitar: ug("Lay Down Sally") },

  { slug: "after-midnight", title: "After Midnight", band: "Eric Clapton (solo debut)", year: 1970,
    difficulty: "Intermediate",
    tuning: "Standard tuning, key of E.",
    technique: "J.J. Cale's song. Stop and start, breathe, don't fill every gap. The Tulsa-sound thesis — space is the instrument.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-after-midnight-tab-s34346", ultimateGuitar: ug("After Midnight") },

  { slug: "i-shot-the-sheriff", title: "I Shot the Sheriff", band: "Eric Clapton (461 Ocean Boulevard)", year: 1974,
    difficulty: "Intermediate",
    tuning: "Standard tuning, key of G minor. Reggae one-drop feel.",
    technique: "Reggae rhythm for a guitarist used to rock. Wait for the upbeat. Don't crowd the bass. Skanks on the 2 and 4.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-i-shot-the-sheriff-tab-s4941", ultimateGuitar: ug("I Shot the Sheriff") },

  { slug: "let-it-rain", title: "Let It Rain", band: "Eric Clapton (solo debut)", year: 1970,
    difficulty: "Intermediate",
    tuning: "Standard tuning, key of C major.",
    technique: "C major outro jam. Modal soloing in one position — great practice for staying inside the C major / A minor pentatonic without wandering.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-let-it-rain-tab-s3722", ultimateGuitar: ug("Let It Rain") },

  { slug: "pretending", title: "Pretending", band: "Eric Clapton (Journeyman)", year: 1989,
    difficulty: "Intermediate",
    tuning: "Standard tuning.",
    technique: "Tight 80s pop-blues. The solo is short and surgical — model for restraint. Listen for the controlled bends inside the box position.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-pretending-tab-s34324", ultimateGuitar: ug("Pretending") },

  { slug: "change-the-world", title: "Change the World", band: "Eric Clapton / Babyface", year: 1996,
    difficulty: "Advanced",
    tuning: "Standard tuning, key of E. Travis-picked thumb pattern throughout.",
    technique: "Written by Tommy Sims, Gordon Kennedy, and Wayne Kirkpatrick (Grammy Song of the Year 1997). Clapton fingerpicks it — the right-hand Travis pattern IS the arrangement. Left hand stays in a tiny range; right hand does all the work.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-change-the-world-tab-s1381", ultimateGuitar: ug("Change the World") },

  { slug: "running-on-faith", title: "Running on Faith", band: "Eric Clapton (Journeyman)", year: 1989,
    difficulty: "Intermediate",
    tuning: "Open G tuning (D-G-D-G-B-D) for the Unplugged version. Standard tuning on the original Journeyman cut.",
    technique: "Open-G slide vocabulary on the Unplugged take — study that one. Andy Fairweather Low plays second guitar; Clapton plays the slide lead.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-running-on-faith-tab-s26806", ultimateGuitar: ug("Running on Faith") },

  { slug: "old-love", title: "Old Love", band: "Eric Clapton (Journeyman)", year: 1989,
    difficulty: "Advanced",
    tuning: "Standard tuning, key of A minor.",
    technique: "Slow blues co-written with Robert Cray. The lesson is dynamics and phrasing across long solo space — every note has to mean something, every rest has to feel intentional.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-old-love-tab-s34297", ultimateGuitar: ug("Old Love") },

  { slug: "have-you-ever-loved-a-woman", title: "Have You Ever Loved a Woman", band: "Derek and the Dominos", year: 1970,
    difficulty: "Advanced",
    tuning: "Standard tuning, key of C — slow blues feel.",
    technique: "Freddie King-rooted vocabulary lesson. Minor pentatonic with major-3rd passing tones, behind-the-beat phrasing. Bend a half-step, hold, release on the next beat.",
    songsterr: "https://www.songsterr.com/a/wsa/derek-and-the-dominos-have-you-ever-loved-a-woman-tab-s5357", ultimateGuitar: ug("Have You Ever Loved a Woman") },

  { slug: "travelin-alone", title: "Travelin' Alone", band: "Eric Clapton (Clapton, 2010)", year: 2010,
    difficulty: "Intermediate",
    tuning: "Standard tuning, shuffle in E.",
    technique: "Two-guitar shuffle with Doyle Bramhall II on second guitar. Pocket study — keep the shuffle eighth-note feel under the lead; resist the urge to play four-on-the-floor.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-travelin-alone-tab-s408196", ultimateGuitar: ug("Travelin Alone") },

  { slug: "riding-with-the-king", title: "Riding with the King", band: "Eric Clapton & B.B. King", year: 2000,
    difficulty: "Intermediate",
    tuning: "Standard tuning, key of A.",
    technique: "John Hiatt's song reframed as a blues duet. The lesson is call-and-response — leave room for B.B. to answer. Clapton sets up the phrase; King finishes it.",
    songsterr: "https://www.songsterr.com/a/wsa/eric-clapton-bb-king-riding-with-the-king-tab-s1597895", ultimateGuitar: ug("Riding with the King") },
];
