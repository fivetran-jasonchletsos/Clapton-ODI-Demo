// Three meanings of "Crossroads" in Eric Clapton's life:
// the Robert Johnson song, the Guitar Festival, and the Antigua centre.
// Tone: reverent but plain. This is the most personal Clapton page
// outside the Dedication.

export type CrossroadsSection = {
  slug: "song" | "festival" | "centre";
  eyebrow: string;        // small ornament line
  title: string;
  subtitle: string;       // dates / one-liner
  body: string[];         // paragraphs
  meta?: { label: string; value: string }[];
};

export const CROSSROADS: CrossroadsSection[] = [
  {
    slug: "song",
    eyebrow: "The Song",
    title: "Cross Road Blues",
    subtitle: "Robert Johnson, 1936 — Cream, 1968",
    body: [
      "Robert Johnson recorded 'Cross Road Blues' in San Antonio, Texas, on November 27, 1936. The lyric is plain — a man at a crossroads trying to flag down a ride before dark — but the playing is so haunted that the song became the seed of a legend: that Johnson met the devil at a crossroads and traded his soul for the gift of the guitar.",
      "Cream's 1968 live cover, recorded at the Fillmore West and released on Wheels of Fire, took Johnson's solo acoustic blues and shot it through a power trio at full tilt. Clapton's solo on that track is one of the most studied passages in rock guitar — and it is the first place most listeners under fifty ever encountered Robert Johnson's name.",
      "Clapton has said his entire career is a long thank-you note to Johnson. The 2004 album Me and Mr. Johnson is the most explicit version of that note. The 'Crossroads' that names everything else here all trace back to this song.",
    ],
    meta: [
      { label: "Original", value: "Robert Johnson, San Antonio, 1936" },
      { label: "Cream cover", value: "Wheels of Fire, recorded live 1968" },
      { label: "Tribute album", value: "Me and Mr. Johnson, 2004" },
    ],
  },
  {
    slug: "festival",
    eyebrow: "The Festival",
    title: "Crossroads Guitar Festival",
    subtitle: "2004, 2007, 2010, 2013, 2019, 2023, 2024",
    body: [
      "Clapton founded the Crossroads Guitar Festival in 2004 as a multi-day benefit for the Crossroads Centre in Antigua. The bill reads like a guitar-history textbook: B.B. King, Buddy Guy, Jeff Beck, Sheryl Crow, Robert Cray, Joe Bonamassa, John Mayer, Derek Trucks, Susan Tedeschi, Doyle Bramhall II, Vince Gill, Albert Lee, Steve Vai, Sonny Landreth, the late J.J. Cale.",
      "The format is simple and merciless: every artist gets a short set, every set ends in a jam, and Clapton himself drifts in and out as the guy hosting the dinner. The 2007 Bridgeview, Illinois edition is the one fans cite most often — the Bo Diddley and Hubert Sumlin appearances near the ends of their lives, the Sheryl Crow / Vince Gill duets, John Mayer's coming-out-party set.",
      "Every dollar of net proceeds goes to the Crossroads Centre. Clapton uses the festival not just to raise money but to put the players he learned from on a stage in front of audiences who only know his own records.",
    ],
    meta: [
      { label: "Editions", value: "2004, 2007, 2010, 2013, 2019, 2023, 2024" },
      { label: "Beneficiary", value: "Crossroads Centre, Antigua" },
      { label: "Recurring guests", value: "B.B. King, Buddy Guy, Jeff Beck, John Mayer, Joe Bonamassa, Derek Trucks" },
    ],
  },
  {
    slug: "centre",
    eyebrow: "The Centre",
    title: "Crossroads Centre, Antigua",
    subtitle: "Founded 1998",
    body: [
      "Clapton got sober in 1987 after a stay at Hazelden in Minnesota. Over the next decade he built — quietly at first, then publicly — a residential addiction-recovery centre on the island of Antigua, opening it in 1998. He has called founding the centre the most important thing he has done with his life. He has said it more than once. He means it.",
      "Crossroads Centre treats both substance addiction and process addictions (gambling, sex, work) using a twelve-step framework alongside clinical care. It is non-profit. It runs partly on the proceeds from the Guitar Festival, partly on the 2004 Christie's auction where Clapton sold Blackie and dozens of other guitars and amps for the centre's endowment.",
      "Patients come from around the world; the centre subsidizes treatment for those who cannot pay full fees. If you ever wondered why he keeps the festival running into his late seventies, this is why.",
    ],
    meta: [
      { label: "Founded", value: "1998, Antigua" },
      { label: "Focus", value: "Residential addiction recovery, twelve-step + clinical" },
      { label: "Funded by", value: "Festival proceeds, 2004 Christie's auction, ongoing donations" },
    ],
  },
];
