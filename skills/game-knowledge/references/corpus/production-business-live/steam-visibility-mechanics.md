# Steam Visibility Mechanics: Wishlists, Discovery Queue, Next Fest

Scope: how Steam surfaces games to players — wishlist mechanics, algorithmic
"visibility rounds," the Discovery Queue, Popular Upcoming, and Steam Next
Fest. Every claim is dated; Valve changes these mechanics without notice and
secondary sources sometimes lag or contradict each other. Where sources
disagree, both appear with dates so the trend is visible rather than
picking one number as settled truth.

Access note: `partner.steamgames.com` (Steamworks docs) was reachable
without login for the specific pages cited below. Where a Steamworks page
returned only navigation chrome and no body (client-side rendered), that is
flagged and a secondary source used instead.

---

## 1. Wishlist mechanics: what adds a game to a wishlist

A wishlist and a "follow" are different signals. (Source: How To Market A
Game, "What is the difference between a Steam Wishlist and a Follower?",
2023-05-01, https://howtomarketagame.com/2023/05/01/what-is-the-difference-between-a-steam-wishlist-and-a-follower/)

- **Wishlist** = "they want to buy it." Triggers a launch-day email to
  every wishlister regardless of discount, plus discount emails only when
  the price cut exceeds 20% (throttled, roughly 1-2 week cooldown between
  emails to the same user in busy periods). Wishlisted games surface in the
  user's News Hub, Community Activity Feed, and Library "What's New."
- **Follow (game)** = "they want to hear more." No launch email, only light
  news updates.
- **Follow (studio/publisher)** triggers one launch email for the studio's
  next release and pings on future releases.
- Zukowski's priority ranking for developers: (1) wishlist, (2) studio
  follow, (3) game follow.

### Does wishlisting drive algorithmic visibility? (contested)

- **Valve's own docs** state wishlists are "**not** a factor in your game's
  algorithmic visibility on Steam" — they matter for downstream emails, not
  as a direct ranking input. Review score is likewise not a factor as long
  as the game is "Mixed or above" (40%+). (Source: Steamworks
  Documentation, "Visibility on Steam,"
  https://partner.steamgames.com/doc/marketing/visibility — no visible
  doc date; fetched 2026-07-26.)
- **How To Market A Game** ("Killing the myths behind Steam's visibility,"
  2023-09-04) lists the **Discovery Queue** as driven by "wishlists earned
  over short periods" — velocity feeds at least one specific widget.
- **StraySpark Studio** ("Steam Algorithm Decoded," 2026-03-28,
  https://www.strayspark.studio/blog/steam-algorithm-decoded-wishlists-visibility)
  claims Discovery Queue weighs wishlist velocity in the last 48-72 hours,
  and Popular Upcoming has a floor of "roughly 3,000-5,000+ wishlists with
  consistent daily additions" (unverified against Valve).

**Read this as:** wishlist *count* isn't a direct ranking input per Valve,
but wishlist *velocity* feeds specific widgets that add up to what
developers colloquially call "algorithmic visibility." Community-derived
numbers are directional, not official — see section 4 for how the Popular
Upcoming threshold specifically has moved.

---

## 2. Visibility rounds

Two distinct mechanisms, not one generic boost. (Source: Steamworks
Documentation, "Visibility on Steam," fetched 2026-07-26.)

- **Launch visibility (New Releases Queue):** on release, a game enters a
  pool of new titles; "the system generates a queue from that pool,
  prioritizing the titles that have the least amount of views since
  release" — a one-time, fixed baseline window, not a performance reward.
- **Update visibility rounds:** for major updates/DLC, developers can
  trigger a round that surfaces to players who already own the game or
  have it wishlisted. Valve says a developer must wait until the launch
  window concludes before triggering an update round — they don't stack.

Widget table from How To Market A Game (2023-09-04), reverse-engineered by
the community, not Valve-confirmed:

| Widget | Type | Driven by |
|---|---|---|
| Featured & Recommended | Algorithmic | Revenue + tag targeting |
| Popular Upcoming | Algorithmic | Total wishlists, sorted by release date |
| New & Trending | Algorithmic | Undisclosed earnings threshold, varies by country/language |
| Top Sellers | Algorithmic | Combined revenue (game + DLC + soundtrack) |
| Specials tab | Algorithmic | Sales velocity during a discount |
| Discovery Queue | Algorithmic | Wishlists earned over short periods (velocity) |
| Daily Deals | Curated (Valve invite only) | ~$250,000 gross revenue (community estimate) |
| Midweek/Weekend Deals | Curated | Top few hundred bestsellers |
| Popups / front-page takeovers | Curated | ~100,000+ wishlists at launch (community estimate) |

---

## 3. The Discovery Queue

Users get a one-at-a-time feed ("explore your queue") and can wishlist,
buy, or skip. (Source: How To Market A Game, "What is the Discovery
Queue?", 2023-08-28, https://howtomarketagame.com/2023/08/28/what-is-the-discovery-queue/)

What feeds it, per that article: tag-based median-playtime matching (a
player well above the tag's median playtime is assumed to prefer that
genre); purchase/ownership history; **wishlists**, called "the strongest
signal" for unreleased games since no purchase/playtime data exists yet;
and filtering of Steam-internal traffic to avoid a feedback loop.

**Case study:** *Whisker Squadron: Survivor* earned 2,794 wishlists in two
days, tied to 7,668 site visits that week via Discovery Queue placement
(same source, single case, not a general threshold).

StraySpark Studio (2026-03-28, unverified against Valve) adds a lookback
window claim: "the past 48-72 hours" of wishlist growth, with daily rate
mattering more than lifetime total.

Valve's own platform history of Discovery changes (Source: Wikipedia,
"Steam (service)," fetched 2026-07-26): **September 2014** — original
"Discovery Update," personalized sorting. **November 2016** — user controls
over which games/tags to see or suppress. **July 2019** — Steam Labs launch
including an ML-based "Interactive Recommender." **July 2026** — wishlist
*categories* (folders) added to the storefront, a UI change distinct from
the ranking algorithm.

---

## 4. Popular Upcoming: a threshold that visibly moved

- **Long-standing rule of thumb, still repeated mid-2026:** "get 7,000
  wishlists before you launch" for Popular Upcoming placement. (Source:
  Steam Page Analyzer, "How Many Wishlists Before Launch? Steam Benchmarks
  2026," 2026-07-13, https://www.steampageanalyzer.com/blog/how-many-wishlists-before-launch
  — frames 7,000 as the *old* standard being displaced.)
- **StraySpark (2026-03-28)** reports a lower velocity-gated floor —
  "roughly 3,000-5,000+ wishlists with consistent daily additions" — a
  different measure (velocity) than a flat lifetime total.
- **How To Market A Game** ("How the Steam Personal Calendar affects your
  launch," 2026-06-25, https://howtomarketagame.com/2026/06/25/how-the-steam-personal-calendar-affects-your-launch/)
  reports Valve raised the Popular Upcoming bar from roughly 7,000 to
  **roughly 100,000 wishlists** in a 2026 change, called "controversial"
  since most indie titles never reach six figures pre-launch.
- **Valve's response**, per the same article: a new "Personal Calendar"
  widget gives upcoming games front-page time independent of the Popular
  Upcoming wishlist gate — the author calls it "a welcome addition" that
  partially offsets the raised threshold for smaller studios.

**Net read:** as of mid-2026, "7,000 wishlists = Popular Upcoming" is
stale. Credible 2026 figures span a ~3-5K velocity-gated floor (StraySpark,
unverified) to a ~100K raised bar for the flagship placement (How To
Market A Game, 2026-06-25). No Valve-published number exists for any of
this.

---

## 5. Steam Next Fest

**History:** began as the Steam Game Festival, launched by Valve with Geoff
Keighley in 2019 alongside The Game Awards ecosystem — a week of demos plus
sales on released titles. Renamed Steam Next Fest, now runs **two to three
times a year**, generally timed near major expos/award shows. (Source:
Wikipedia, "Steam Next Fest," fetched 2026-07-26.)

**2026 schedule:** Feb 23 - Mar 2 (registration deadline reported Jan 5);
June 15-22, 10:00 AM PDT to 10:00 AM PDT; Oct 19-26, 10:00 AM PDT to 10:00
AM PDT. Registration deadlines typically 7-8 weeks before the event.
(Source: Presskit.gg, "Steam Next Fest Dates & Registration Deadlines
(2026-2027)," https://presskit.gg/field-guides/next-fest-scheduling-registration,
citing Steamworks docs, fetched 2026-07-26. The individual Steamworks fest
pages rendered nav-only on direct fetch, so dates are corroborated via
Presskit.gg rather than quoted verbatim from Valve.)

**Eligibility** (same source): unreleased (no Early Access launch, no
re-release); never participated in a prior Next Fest; public "Coming Soon"
page; playable demo live before the fest; must not go to full release
during the event window; not a prologue/short-form slice of a released
game; account in good standing.

**Demo submission timing:** ~4 weeks before the fest for Press Preview
eligibility; ~2 weeks before for public-opening readiness; Press Preview
itself starts 11 days before the public fest.

### Wishlist benchmarks from participating

(Source: How To Market A Game, "Benchmarks: How Many Wishlists Can I Get
From Steam Next Fest," 2025-03-26, survey-based, n=170-174 usable
responses per metric.)

Tiers: Diamond 10,000+; Gold 7,000-9,999; Silver 1,000-6,999; Bronze
0-999.

Strongest predictor of Next Fest gains: **pre-fest wishlist total**
(Spearman r = 0.825):

| Pre-fest wishlists | n | Min | 30th %ile | Median | 70th %ile | Max |
|---|---|---|---|---|---|---|
| 0-999 | 71 | 41 | 179 | 322 | 485 | 5,880 |
| 1K-10K | 60 | 74 | 549 | 1,006 | 1,722 | 15,614 |
| 10K-100K | 36 | 515 | 2,584 | 5,215 | 9,633 | 17,342 |
| 100K+ | 7 | 5,990 | 9,989 | 12,882 | 27,661 | 57,074 |

Pre-fest velocity also correlates (r = 0.819): 0-10/day → median 358
earned; 11-100/day → 1,470; 100+/day → 10,229. Headline recommendation:
**at minimum ~2,000 wishlists before Next Fest** for meaningfully better
odds; below that, results cluster near Bronze.

Demo-specific: **Demo Conversion Rate** (played-and-wishlisted ÷ total
players, r = 0.457 to overall success) — 30th %ile 12%, median 16.33%,
70th %ile 20%. **Page Conversion Rate** (played-and-wishlisted ÷ total
wishlisters) sweet spot 20-30%. Demos launched well before the fest (vs. at
fest start) earned ~2.5x more wishlists on average (weaker correlation, r
= -0.205).

### Named 2026 case studies (momentum strategy)

(Source: How To Market A Game, "Games that used momentum for Steam Next
Fest Success," 2026-07-14.) **Cat Mail Co.**: 5,293 pre-fest wishlists →
42,000 gained during the fest (established team, wholesome/crafting
genre). **Speak**: 694 pre-fest wishlists → ~13,000 gained, via a viral
TikTok campaign (developer reported "1 million views") plus the
developer's prior game *The Matriarch*. **I AM YOUR BEAST**: 60,000
wishlists in 2 weeks via an announcement+demo timed to the PC Gaming Show,
published by Strange Scaffold. These are single-game, self/press-reported
figures — illustrations of the "recent spike beats slow accumulation"
pattern, not typical outcomes.

June 2026 Next Fest is reported to have hosted **4,200+ demos**, described
as a record (Source: Tech Insider, "Steam Next Fest June 2026: 4,200+
Demos Mark Record Event," 2026 — found via search snippet only, not
independently fetched; treat as unverified until cross-checked).

---

## 6. Demo best practices

### Valve's own guidance

(Source: Steamworks Documentation, "Demos,"
https://partner.steamgames.com/doc/store/application/demos, fetched
2026-07-26.) A demo is a separate App ID linked to the base game, with its
own depots/builds, application type set to "Demo," and the base game's App
ID entered in its config; shared content should live in a shared depot
mounted into both apps. **Quality**: "Customers are generally using the
demo to make a purchase decision on your game. Make sure that what you put
out there is high quality and measures up to the real experience."
**Timing**: launch-day release is one valid approach; pre-release is
recommended specifically when "customers need to touch the game to really
understand it." **Length**: "balance giving the customer enough content to
get them excited, without giving away so much that they feel like they've
experienced everything the game has to offer." Implementation notes:
disable achievements (use shared Steam Cloud saves instead); use the
overlay/friends API to link to the full game's store page; Steam
auto-generates a library link from demo to full game. Valve's docs publish
no data on what makes a demo "perform well" — that gap is filled below.

### Chris Zukowski: don't over-read the conversion ratio

(Source: How To Market A Game, "Most people will play your demo and not
wishlist it and that is ok," 2026-06-30,
https://howtomarketagame.com/2026/06/30/nobody-plays-demos-and-that-is-ok/)
Demo-to-wishlist conversion: median 19.3%, 30th %ile 15.9%, 70th %ile
23.2% (example cited: 713 players → 175 wishlists = 24.5%). Correlation
between conversion rate and total wishlists earned is weak — some titles
earned 15,000+ wishlists at under 15% conversion; others earned ~1,000 at
30%+. Core advice: don't tune game design around a low ratio — demo
players skew toward highly-engaged genre "sickos" who try everything, not
a representative buyer sample; their real value is seeding word-of-mouth
and creator pickup. Despite variable conversion, the article's position is
that demos remain "the most powerful marketing tool for generating
wishlists" available to an indie developer.

---

## Sources

- Steamworks Documentation, "Visibility on Steam" — partner.steamgames.com/doc/marketing/visibility (no doc date; fetched 2026-07-26)
- Steamworks Documentation, "Demos" — partner.steamgames.com/doc/store/application/demos (no doc date; fetched 2026-07-26)
- Steamworks Documentation, Next Fest event pages — nav-only on fetch; dates corroborated via Presskit.gg
- How To Market A Game (Chris Zukowski): "Wishlist vs Follower" (2023-05-01); "Killing the myths behind Steam's visibility" (2023-09-04); "What is the Discovery Queue?" (2023-08-28); "Benchmarks: SNF Wishlists" (2025-03-26); "Steam Personal Calendar" (2026-06-25); "Nobody plays demos and that is ok" (2026-06-30); "Games that used momentum for SNF Success" (2026-07-14); "Did AI Slop ruin SNF June 2026?" (2026-07-13, title/index only)
- StraySpark Studio, "Steam Algorithm Decoded" — 2026-03-28
- Steam Page Analyzer, "How Many Wishlists Before Launch? Steam Benchmarks 2026" — 2026-07-13
- Presskit.gg, "Steam Next Fest Dates & Registration Deadlines (2026-2027)" — fetched 2026-07-26, exact publish date not shown on page
- Wikipedia, "Steam Next Fest" and "Steam (service)" — fetched 2026-07-26
- Tech Insider, "Steam Next Fest June 2026: 4,200+ Demos" — snippet only, unverified

Not accessed: store.steampowered.com/news pages fetched during this pass
returned only navigation chrome, not article bodies, so Valve's own
discovery-change announcements (if posted there) could not be retrieved
directly; Wikipedia's dated changelog (section 3) substitutes for that.
