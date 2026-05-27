// The honest chapters. A tribute that pretends the dark years didn't happen
// isn't a tribute, it's a press release. These four belong on any serious
// Clapton page — handled plainly, no editorializing in either direction.

export type DarkChapter = {
  slug: string;
  title: string;
  years: string;
  blurb: string;     // 3-5 sentences, plain
  takeaway: string;  // one sentence — what to do with the information
};

export const DARK_CHAPTERS: DarkChapter[] = [
  {
    slug: "birmingham-1976",
    title: "Birmingham, 1976 — the Enoch Powell rant",
    years: "1976",
    blurb:
      "Onstage at the Birmingham Odeon on August 5, 1976, Clapton — drunk — went on a rambling anti-immigration tirade backing Enoch Powell, the British politician famous for the 'Rivers of Blood' speech. He told the audience to vote for Powell and described immigrants in terms that don't bear repeating here. The irony was suffocating: a career built on Black American blues, calling for the country to keep Black immigrants out. The incident directly catalyzed the founding of Rock Against Racism that same year — Red Saunders' open letter in the music press is dated September 1976. Clapton has partially walked it back across decades of interviews, blaming alcohol and Powell's rhetoric, but has never fully renounced the position with the clarity the moment requires.",
    takeaway:
      "If you love the blues records, you have to know the moment the man playing them tried to take credit for music he simultaneously tried to wall the country off from.",
  },
  {
    slug: "addiction-years",
    title: "Heroin and alcohol",
    years: "1971–1987",
    blurb:
      "After Layla, Clapton withdrew into heroin for roughly three years (1971–1974), barely playing publicly. Pete Townshend organized the Rainbow Concert in January 1973 specifically to get him onstage again. He kicked heroin but replaced it with brandy, and by the late 1970s alcoholism had taken over — the 'Slowhand' records were made by a person increasingly unable to function. He got sober in early 1987 after a treatment stay at Hazelden in Minnesota and has remained so since. The Crossroads Centre in Antigua, which he founded in 1998 and continues to fund through the festival series, is the direct legacy of those years — a residential treatment facility for people without the resources he had.",
    takeaway:
      "The 70s catalog is staggering AND was made under conditions that should have killed him. Both are true.",
  },
  {
    slug: "pattie-and-george",
    title: "Pattie Boyd, George Harrison, Layla",
    years: "1968–1989",
    blurb:
      "George Harrison was Clapton's closest friend. Pattie Boyd, Harrison's wife, was the woman Clapton fell in love with starting in the late 1960s. 'Layla' and 'Bell Bottom Blues' were both written about her while she was still married to George. Clapton pursued her for years — the affair was an open secret in their circle — and she eventually left George for him in 1974. They married in 1979 and divorced in 1989. Boyd has said in her memoir (Wonderful Tonight, 2007) that Clapton was emotionally and at times physically abusive during their marriage, particularly during his alcoholism. Harrison and Clapton remained friends until George's death in 2001 — by all accounts genuinely so — but to call any of this a 'great love story' is to flatten what was, by Boyd's own account, considerably more complicated and considerably less pretty.",
    takeaway:
      "The Layla story is the most famous in rock romance. The lived experience for the woman in the middle of it was less generous than the songs suggest.",
  },
  {
    slug: "vaccine-politics",
    title: "Vaccine politics, 2020–2021",
    years: "2020–2021",
    blurb:
      "During the COVID-19 pandemic Clapton publicly opposed vaccine mandates and lockdowns, released anti-mandate songs with Van Morrison ('Stand and Deliver', 'This Has Gotta Stop'), and described his own reaction to the AstraZeneca vaccine as catastrophic. He gave interviews citing what he called the 'mass formation hypnosis' framing popular in anti-vax circles. He has not, as of mid-2026, publicly walked any of it back. For a generation of musicians who came up listening to him, this was the second time their relationship with his music had to be renegotiated against a public position they could not defend.",
    takeaway:
      "Separating the art from the artist is a choice you have to keep making. He keeps giving you reasons.",
  },
];
