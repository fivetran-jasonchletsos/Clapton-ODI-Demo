// Every band Eric Clapton played in, in order.
// "Sideman" stints (Plastic Ono Band gig, Delaney & Bonnie touring band, etc.)
// are included where they shaped his playing or led to the next band.

export type Band = {
  slug: string;
  name: string;
  years: string;
  role: string;          // Clapton's role
  blurb: string;         // 2-3 sentences
  members: string[];     // other core members
  iconicSongs?: string[];
  signatureGear?: string;
  keyMoments?: string[];
};

export const BANDS: Band[] = [
  {
    slug: "yardbirds",
    name: "The Yardbirds",
    years: "1963–1965",
    role: "Lead guitar",
    blurb:
      "Clapton's first real band. Eighteen months that proved he could play harder than anyone in London — until they wanted a hit single and he walked. He left over 'For Your Love' because it had no blues in it.",
    members: ["Keith Relf", "Chris Dreja", "Paul Samwell-Smith", "Jim McCarty"],
    iconicSongs: ["I'm a Man", "Got to Hurry", "Smokestack Lightning (live)"],
    signatureGear: "1964 Fender Telecaster",
    keyMoments: [
      "Replaced Top Topham as lead guitarist in October 1963",
      "Backed Sonny Boy Williamson II on the 1965 live LP",
      "Walked out in March 1965 over the pop direction of 'For Your Love'",
    ],
  },
  {
    slug: "bluesbreakers",
    name: "John Mayall's Bluesbreakers",
    years: "1965–1966",
    role: "Lead guitar",
    blurb:
      "The 'Beano' album — Bluesbreakers with Eric Clapton — is where the legend starts. Marshall combo cranked, Les Paul sustained, blues fundamentalism. Fan graffiti appeared in London: 'Clapton is God.'",
    members: ["John Mayall", "John McVie", "Hughie Flint"],
    iconicSongs: ["All Your Love", "Hideaway", "Have You Heard"],
    signatureGear: "1960 Gibson Les Paul Standard into a Marshall JTM45",
    keyMoments: [
      "Joined April 1965 after quitting the Yardbirds",
      "Recorded the Beano album in three days at Decca Studios, spring 1966",
      "Left in July 1966 to form Cream with Jack Bruce and Ginger Baker",
    ],
  },
  {
    slug: "cream",
    name: "Cream",
    years: "1966–1968",
    role: "Lead guitar, vocals",
    blurb:
      "The first power trio. Clapton, Jack Bruce, and Ginger Baker — three soloists who refused to stop soloing. Two and a half years of staggering musicianship and personal warfare. Disbanded at the peak.",
    members: ["Jack Bruce", "Ginger Baker"],
    iconicSongs: ["Sunshine of Your Love", "White Room", "Crossroads", "Badge", "Tales of Brave Ulysses"],
    signatureGear: "Gibson SG 'The Fool' painted by The Fool collective",
    keyMoments: [
      "Debut at the 1966 Windsor Jazz & Blues Festival, July 1966",
      "Farewell concerts at the Royal Albert Hall, 26 November 1968",
      "Reunion shows at the Royal Albert Hall, May 2005",
    ],
  },
  {
    slug: "blind-faith",
    name: "Blind Faith",
    years: "1969",
    role: "Lead guitar, vocals",
    blurb:
      "Clapton, Steve Winwood, Ginger Baker, Ric Grech. One album, one tour, then gone. Too much pressure too fast. The record holds up forty-plus years later as one of the great supergroup statements.",
    members: ["Steve Winwood", "Ginger Baker", "Ric Grech"],
    iconicSongs: ["Can't Find My Way Home", "Presence of the Lord", "Sea of Joy"],
    signatureGear: "1956 Fender Stratocaster (Brownie)",
    keyMoments: [
      "Free debut concert in Hyde Park, 7 June 1969, drew an estimated 100,000",
      "Self-titled LP topped both UK and US charts in August 1969",
      "Disbanded after the US tour in August 1969; Clapton joined the opening act, Delaney & Bonnie",
    ],
  },
  {
    slug: "delaney-and-bonnie",
    name: "Delaney & Bonnie and Friends",
    years: "1969–1970",
    role: "Touring guitarist",
    blurb:
      "Clapton joined the touring band as a sideman to disappear into someone else's group. He learned how to sing under Delaney Bramlett's coaching — directly responsible for him fronting his own bands after.",
    members: ["Delaney Bramlett", "Bonnie Bramlett", "Bobby Whitlock", "Carl Radle", "Jim Gordon"],
    iconicSongs: ["Comin' Home", "Poor Elijah / Tribute to Johnson", "Things Get Better"],
    signatureGear: "Fender Stratocaster",
    keyMoments: [
      "Joined the touring band on the December 1969 UK tour with George Harrison also in the lineup",
      "On Tour with Eric Clapton recorded live at Croydon and Bristol, December 1969",
      "Most of the band followed Clapton out to form Derek and the Dominos in 1970",
    ],
  },
  {
    slug: "derek-and-the-dominos",
    name: "Derek and the Dominos",
    years: "1970–1971",
    role: "Guitar, vocals",
    blurb:
      "Clapton hid behind the band name to escape 'God' fatigue. Duane Allman crashed the sessions and turned the record into a guitar-twin masterpiece. 'Layla' was written for Pattie Boyd while she was still married to George Harrison.",
    members: ["Bobby Whitlock", "Carl Radle", "Jim Gordon", "Duane Allman (sessions)"],
    iconicSongs: ["Layla", "Bell Bottom Blues", "Why Does Love Got to Be So Sad?", "Little Wing"],
    signatureGear: "Fender Stratocaster 'Brownie' (the Layla guitar)",
    keyMoments: [
      "Recorded Layla and Other Assorted Love Songs at Criteria Studios, Miami, August–October 1970",
      "Disintegrated during the abortive second-album sessions in 1971 amid heroin addiction",
      "Reunited (without Allman or Gordon) for the Rainbow Concert organised by Pete Townshend, 13 January 1973",
    ],
  },
  {
    slug: "solo",
    name: "Eric Clapton (solo)",
    years: "1970–present",
    role: "Bandleader, guitar, vocals",
    blurb:
      "Fifty-plus years of solo records, from the laid-back Tulsa-sound 1970s through the 1990s blues turn and the late-career reissues. Different band almost every record, anchored by Nathan East and Steve Gadd for stretches.",
    members: ["Nathan East", "Steve Gadd", "Andy Fairweather Low", "Albert Lee", "Marcy Levy", "Yvonne Elliman", "Phil Collins", "Doyle Bramhall II"],
    iconicSongs: ["Cocaine", "Wonderful Tonight", "Lay Down Sally", "Tears in Heaven", "Change the World", "Running on Faith"],
    signatureGear: "'Blackie' — composite Stratocaster built from three 1950s bodies",
    keyMoments: [
      "MTV Unplugged at Bray Studios, 16 January 1992 — six Grammys, including Album of the Year",
      "Organised the Concert for George at the Royal Albert Hall, 29 November 2002",
      "Launched the Crossroads Guitar Festival in Dallas, June 2004, raising funds for Crossroads Centre Antigua",
    ],
  },
];
