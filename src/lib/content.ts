// Single source of truth for swappable content.
// Anything wrapped in [PLACEHOLDER: ...] still needs your input.

export const SITE = {
  name: "Evans Talk Show",
  firstName: "Evan",
  role: "Independent News Commentary with Evan Mercer",
  show: "Evans Talk Show",
  network: "Evans Talk Show",
  brandMark: "ETS",
  channelHandle: "@EvansTalkShow",
  channelUrl: "https://www.youtube.com/@EvansTalkShow",
  email: "evanmercer@gmail.com",
  location: "Nashville, TN",

  tagline:
    "Independent commentary on the stories shaping America today, hosted by Evan Mercer from Nashville with a sharper point of view and a cleaner read on the story.",

  heroStatement: "Breaking stories. Clean analysis. No filler.",

  missionEyebrow: "01 / Nashville Desk",
  missionHeadline: "Breaking stories. Clean analysis. No filler.",
  missionBody:
    "Evans Talk Show breaks down major political stories with a direct voice, fast pacing, and an editorial look that feels built for the modern news cycle, fronted on-site by Evan Mercer.",
  missionBlurb:
    "Based in Nashville, Tennessee, the site now points to the active Evans Talk Show YouTube channel and keeps one promise: follow the headline to its source, cut through the performance, and explain what actually matters in plain English.",

  aboutShort:
    "Evans Talk Show is an independent commentary platform hosted by Evan Mercer in Nashville, Tennessee, focused on political flashpoints, global conflict, institutional power, and the stories driving the national conversation.",

  aboutLong: [
    "Evans Talk Show is built around direct commentary on current events, politics, and major headlines. Hosted on-site by Evan Mercer in Nashville, Tennessee, the website now reflects the active Evans Talk Show YouTube channel and its current editorial focus.",
    "That focus leans into court fights, fractures inside both parties, America's role abroad, and the economic pressure hitting ordinary people. The format stays fast, pointed, and readable, with each episode framed as a clear argument rather than a recycled cable segment.",
    "This website works as a sharper front door for that work: a distinctive visual identity, a cleaner archive, and a place where new viewers can understand the channel before they ever hit subscribe.",
  ],

  beats: [
    "U.S. Politics",
    "Global Conflict",
    "Party Fractures",
    "Economic Pressure",
  ],

  credentials: [
    "YouTube channel joined November 10, 2016",
    "119 subscribers and 21 videos as checked on April 29, 2026",
    "Hosted by Evan Mercer in Nashville, TN",
    "Linked to the Evans Talk Show YouTube channel",
  ],

  social: {
    youtube: "https://www.youtube.com/@EvansTalkShow",
    x: "[PLACEHOLDER: add X profile URL]",
    instagram: "[PLACEHOLDER: add Instagram profile URL]",
    linkedin: "[PLACEHOLDER: add LinkedIn profile URL]",
  },
}

export type Video = {
  id: string
  title: string
  date?: string
  summary?: string[]
}

// Latest uploads pulled from the provided YouTube channel on April 29, 2026.
export const VIDEOS: Video[] = [
  {
    id: "GpB2W_Io8Yw",
    title: "Trump LOSES CONTROL and THREATENS to JAIL JOURNALISTS",
    date: "Apr 28, 2026",
    summary: [
      "The newest episode frames Trump's threat toward journalists as a direct collision between political power and press freedom. The argument centers on what happens when criticism is treated as an offense rather than a democratic constraint.",
      "On the site, the episode reads as a fast-turn warning about intimidation, media accountability, and the way authoritarian language moves from rally rhetoric into governing posture.",
    ],
  },
  {
    id: "IQswD53LBK4",
    title: "Trump DETONATES at Reporter Over SIMPLE Iran Question",
    date: "Apr 25, 2026",
    summary: [
      "This episode uses a tense exchange over Iran to show how quickly a basic policy question can become a loyalty test. The focus is less on the question itself and more on the reaction it triggered.",
      "For the archive, the summary positions the video as a breakdown of pressure, foreign-policy messaging, and what public outbursts reveal when a leader is pressed on specifics.",
    ],
  },
  {
    id: "A8lHGr_U6mg",
    title: "Trump GETS HUMILIATED After His OWN Lawyer EXPOSES Him",
    date: "Apr 24, 2026",
    summary: [
      "This segment is framed around legal exposure coming from inside Trump's own orbit. The video turns that contradiction into a larger story about credibility, defense strategy, and political damage control.",
      "The site summary treats it as a sharp read on what happens when the people meant to protect a figure end up clarifying the case against him.",
    ],
  },
  {
    id: "jpNfxc3OfEs",
    title: "Megyn Kelly Says SHE'S SICK OF TRUMP on LIVE SHOW!",
    date: "Apr 23, 2026",
    summary: [
      "This episode tracks a public break in tone from Megyn Kelly and uses it as a signal of fatigue inside the broader right-wing media ecosystem. The story is presented as more than a single on-air complaint.",
      "For viewers scanning the archive, it reads as a media-politics piece about audience exhaustion, message discipline, and what changes when allies stop sounding automatic.",
    ],
  },
  {
    id: "bBhPUtqvHiI",
    title: "Trump PANICS as INFLATION HITS HIGHEST LEVEL in YEARS!",
    date: "Apr 21, 2026",
    summary: [
      "This episode is framed around inflation returning to the center of the political story and the pressure that puts on Donald Trump and his public messaging. The argument appears to treat the latest price spike as more than an economic data point, positioning it as a stress test for the broader MAGA narrative.",
      "On the site, the summary reads as a fast-turn breakdown of how inflation changes political leverage, voter patience, and the credibility of promises made only weeks earlier.",
    ],
  },
  {
    id: "DXAFuHUuEpg",
    title: "Alex Jones CALLS FOR Trump's REMOVAL in MAGA SHOCK!",
    date: "Apr 18, 2026",
    summary: [
      "This segment is presented as a rupture inside the MAGA ecosystem, using Alex Jones's call for removal as proof that internal loyalty can fracture very quickly once strategic panic sets in. The emphasis is on what it means when criticism comes from inside the coalition rather than from its usual opponents.",
      "The site summary frames the video as a story about movement discipline, factional instability, and how symbolic figures start speaking differently when they sense the political floor shifting.",
    ],
  },
  {
    id: "ulG9BxKfJYY",
    title: "Trump CAUGHT Pumping Palantir Stock on Truth Social!",
    date: "Apr 17, 2026",
    summary: [
      "This video appears to center on market influence, political messaging, and the optics of a president publicly boosting a specific stock. The framing suggests a critique of blurred lines between political power, media reach, and financial gain.",
      "For the site archive, it reads as a tighter analysis of how even a short post can become a larger story about influence, incentives, and whether the audience is watching politics or live market theater.",
    ],
  },
  {
    id: "WOtOOcUENbk",
    title: "Melania's DARK PAST LEAKS as White House PANICS",
    date: "Apr 16, 2026",
    summary: [
      "This episode is positioned like a reputational crisis story, taking an alleged leak and turning it into a broader look at White House vulnerability, image control, and political panic. The core idea is that personal narratives become governing problems once they break into the public arena.",
      "The on-site summary treats it as a commentary piece on damage control and the limits of message discipline when a story starts moving faster than the people trying to contain it.",
    ],
  },
  {
    id: "21sMBtJW8Ig",
    title: "Israel's Arrow System Cannot Restock — Iran Knows Exactly How Many Shots Are Left",
    date: "Apr 14, 2026",
    summary: [
      "This segment appears to focus on military depletion, deterrence, and what happens when a defense system starts looking finite instead of dependable. The title points to an argument about exposure: once an adversary understands the limits, every launch becomes a strategic countdown.",
      "For the website, the summary frames the episode as a clear geopolitical briefing about readiness, leverage, and the dangers of wars that become arithmetic as much as ideology.",
    ],
  },
  {
    id: "qsBW1vgKPIw",
    title: "Russia Is Feeding Iran Real-Time US Carrier Positions — The Pentagon Just Dismissed It",
    date: "Apr 14, 2026",
    summary: [
      "This episode is framed like a warning about intelligence, escalation, and institutional denial. The title suggests a direct challenge to Pentagon credibility by pairing a severe allegation with an official dismissal that may not reassure viewers at all.",
      "On the site, the writeup presents it as a conflict-analysis video about what governments choose to acknowledge in public and what those choices signal to allies, adversaries, and the domestic audience.",
    ],
  },
  {
    id: "Lh-RhTmAnsM",
    title: "Iran's Regime Is Eating Itself — The IRGC Is Now Threatening Its Own People",
    date: "Apr 13, 2026",
    summary: [
      "This segment reads as a breakdown of internal regime decay, with the IRGC's posture toward its own population used as evidence that the system is under strain from the inside. The focus is less on surface rhetoric and more on what coercion says about stability.",
      "The archive summary frames the episode as a political power analysis: when a regime redirects threat language inward, it can reveal weakness just as clearly as it projects force.",
    ],
  },
  {
    id: "FnItWxB2k8s",
    title: "Iran Broke the Ceasefire With Cluster Munitions — Trump's Pause Is Already Dead",
    date: "Apr 12, 2026",
    summary: [
      "This episode is presented as a ceasefire-collapse story, with the use of cluster munitions serving as the proof point that a temporary pause was never politically durable. The framing suggests that diplomatic language can become obsolete almost immediately once battlefield incentives take over again.",
      "For the website, the summary treats it as a short-form strategic read on escalation, failed pauses, and how quickly a supposedly controlled conflict can outrun the people trying to choreograph it.",
    ],
  },
]

// Press / outlets that have featured, cited, or published your work.
// These are legitimacy signals — replace with real outlets only.
// If you don't have press yet, either delete the Press page link from Nav.tsx,
// or leave these placeholders and update as coverage happens.
export const PRESS: Array<{ name: string; url?: string }> = [
  { name: "[PLACEHOLDER: Outlet A]" },
  { name: "[PLACEHOLDER: Outlet B]" },
  { name: "[PLACEHOLDER: Outlet C]" },
  { name: "[PLACEHOLDER: Outlet D]" },
  { name: "[PLACEHOLDER: Outlet E]" },
  { name: "[PLACEHOLDER: Outlet F]" },
  { name: "[PLACEHOLDER: Outlet G]" },
  { name: "[PLACEHOLDER: Outlet H]" },
]

export type PullQuote = { quote: string; attribution: string }

export const QUOTES: PullQuote[] = [
  {
    quote:
      "[PLACEHOLDER: A short pull quote about your work from a viewer, journalist, or collaborator — 15 to 30 words.]",
    attribution: "[PLACEHOLDER: Name, Title, Outlet]",
  },
  {
    quote:
      "[PLACEHOLDER: A second pull quote — keep the tone editorial, not marketing-copy.]",
    attribution: "[PLACEHOLDER: Name, Title, Outlet]",
  },
]
