// Year-by-year through Eric Clapton's life and career.
// ~25 entries from 1945 (birth) to 2024. Major bands, records, marriages,
// the losses, the recovery, the Centre. One-sentence context each.

export type TimelineEntry = {
  year: string;        // "1945" or "1991"
  event: string;       // headline
  context: string;     // 1 sentence
  kind?: "life" | "music" | "loss";  // optional tint
};

export const TIMELINE: TimelineEntry[] = [
  {
    year: "1945",
    event: "Born in Ripley, Surrey",
    context: "Raised by his maternal grandparents, who he believed for years were his parents.",
    kind: "life",
  },
  {
    year: "1958",
    event: "First guitar — a Hoyer acoustic, age 13",
    context: "A birthday gift from his grandparents; he put it down for two years before picking it back up for keeps.",
    kind: "music",
  },
  {
    year: "1963",
    event: "Joins The Yardbirds",
    context: "Replaces Top Topham as lead guitarist; eighteen-year-old Clapton enters the London R&B circuit.",
    kind: "music",
  },
  {
    year: "1965",
    event: "Quits Yardbirds, joins Bluesbreakers",
    context: "Walks out over the pop direction of 'For Your Love'; joins John Mayall, who lets him play pure blues.",
    kind: "music",
  },
  {
    year: "1966",
    event: "Bluesbreakers with Eric Clapton released; Cream formed",
    context: "The 'Beano' album becomes the bible of British blues; weeks later he leaves Mayall to start Cream with Jack Bruce and Ginger Baker.",
    kind: "music",
  },
  {
    year: "1968",
    event: "Cream disbands at the Royal Albert Hall",
    context: "Two and a half years, four albums, and the band burns out at its peak.",
    kind: "music",
  },
  {
    year: "1969",
    event: "Blind Faith with Steve Winwood — one album, gone",
    context: "Supergroup formed with Winwood, Baker, and Ric Grech; collapses under its own expectations after one US tour.",
    kind: "music",
  },
  {
    year: "1970",
    event: "Derek and the Dominos; Layla recorded with Duane Allman",
    context: "Hiding behind a band name; the album becomes one of the great rock records but flops on release.",
    kind: "music",
  },
  {
    year: "1971",
    event: "Concert for Bangladesh; heroin addiction takes hold",
    context: "Plays George Harrison's benefit at MSG, then disappears into three years of seclusion at his home in Surrey.",
    kind: "loss",
  },
  {
    year: "1973",
    event: "Rainbow Concert — Pete Townshend pulls him back",
    context: "Townshend organizes a single comeback show at the Rainbow Theatre in London, starting the long climb back.",
    kind: "life",
  },
  {
    year: "1974",
    event: "461 Ocean Boulevard; clean from heroin (onto alcohol)",
    context: "Solo career restarts in Miami with the Tulsa rhythm section and a No. 1 cover of Marley's 'I Shot the Sheriff'.",
    kind: "music",
  },
  {
    year: "1977",
    event: "Slowhand released",
    context: "The album that gave him the nickname publicly — 'Wonderful Tonight', 'Cocaine', 'Lay Down Sally'.",
    kind: "music",
  },
  {
    year: "1979",
    event: "Marries Pattie Boyd",
    context: "Marries the woman 'Layla' and 'Wonderful Tonight' were both written about; they divorce in 1989.",
    kind: "life",
  },
  {
    year: "1985",
    event: "Live Aid at Wembley Stadium",
    context: "Plays 'White Room', 'She's Waiting', and 'Layla' for an audience of a billion-plus.",
    kind: "music",
  },
  {
    year: "1987",
    event: "Gets sober at Hazelden",
    context: "Enters treatment in Minnesota and has not used alcohol since; the foundation under everything that follows.",
    kind: "life",
  },
  {
    year: "1990",
    event: "Stevie Ray Vaughan killed leaving Alpine Valley show",
    context: "Vaughan opens for Clapton, dies in a helicopter crash leaving the venue; Clapton was meant to be on the same aircraft.",
    kind: "loss",
  },
  {
    year: "1991",
    event: "Son Conor dies — falls from 53rd-floor window in New York",
    context: "Four-year-old Conor falls from his mother's apartment; Clapton writes 'Tears in Heaven' in the months after.",
    kind: "loss",
  },
  {
    year: "1992",
    event: "MTV Unplugged recorded; six Grammys follow",
    context: "Reinvents 'Layla' as acoustic shuffle; the record sells 26 million copies and becomes the best-selling live album in history.",
    kind: "music",
  },
  {
    year: "1994",
    event: "From the Cradle — pure blues record",
    context: "First album to revert entirely to Chicago and Delta blues covers; debuts at No. 1 in the US.",
    kind: "music",
  },
  {
    year: "1998",
    event: "Crossroads Centre opens in Antigua",
    context: "The residential recovery centre he has called the most important thing he has built — opens its doors.",
    kind: "life",
  },
  {
    year: "2000",
    event: "Riding with the King with B.B. King",
    context: "Duet album with B.B. King wins a Grammy and goes double platinum.",
    kind: "music",
  },
  {
    year: "2004",
    event: "First Crossroads Guitar Festival; Christie's auction of Blackie",
    context: "Sells Blackie and dozens of other guitars to endow the Centre; Blackie alone fetches $959,500.",
    kind: "life",
  },
  {
    year: "2008",
    event: "Live from Madison Square Garden with Steve Winwood",
    context: "Three-night reunion with his Blind Faith bandmate; one of the best live records of his later career.",
    kind: "music",
  },
  {
    year: "2014",
    event: "Diagnosed with peripheral neuropathy",
    context: "Nerve damage in his hands and feet that he has played around for the past decade.",
    kind: "life",
  },
  {
    year: "2021",
    event: "The Lady in the Balcony — Unplugged at Cowdray House",
    context: "Pandemic-era return to the unplugged format with Nathan East, Steve Gadd, and Chris Stainton; quietly beautiful late record.",
    kind: "music",
  },
  {
    year: "2024",
    event: "Crossroads Guitar Festival, Crypto.com Arena",
    context: "Two-night seventh edition of the festival in Los Angeles; the long thank-you note keeps writing itself.",
    kind: "music",
  },
];
