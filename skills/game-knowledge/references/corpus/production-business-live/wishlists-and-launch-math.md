# Wishlists and Launch Math: Conversion Rates, Review Bands, Launch-Week Dynamics

Scope: the numbers side of a Steam launch — wishlist-to-sales conversion
ratios, review-score thresholds, and why launch week specifically matters.
GameDiscoverCo (Simon Carless) and Chris Zukowski (How To Market A Game)
update these numbers roughly annually; older figures stay here alongside
newer ones, dated, so the trend is visible rather than one number
presented as settled truth.

---

## 1. Wishlist-to-sales conversion: the numbers have moved every year

### 2020 baseline (Chris Zukowski)

First-week conversion by launch-day wishlist count: under 5,000 → 15%;
5,000-39,999 → 20%; 40,000-99,999 → 23%; 100,000+ → 25%. (Source: cited as
"June 2020, Chris Zukowski" by Steam Page Analyzer, "How Many Wishlists
Before Launch? Steam Benchmarks 2026," 2026-07-13,
https://www.steampageanalyzer.com/blog/how-many-wishlists-before-launch —
secondary citation; the article itself flags this data as "directional"
given its age.)

### December 2024 (GameDiscoverCo)

(Source: GameDiscoverCo Newsletter, "revealed: new data on Steam 'wishlist
conversions' & the hit-driven...", 2024-12-03,
https://newsletter.gamediscover.co/p/revealed-new-data-on-steam-wishlist)

Methodology: every Steam release Aug-Oct 2024 with a GDCo "Hype score"
above 250 at launch (roughly a 5,000+ wishlist floor); ~120 games in
August, ~150 each in September/October. **Week 1 median conversion:
10.5%** — lower than GameDiscoverCo's own prior expectation. A separate
April 2024 opt-in developer survey found games launching with **over
10,000 wishlists** achieved **median 17%** Week 1 conversion. Projected
Month 1 conversion: 13-14%, versus the 20% figure GameDiscoverCo's own
"Revenue Predictor" tool had been using — GameDiscoverCo flagged its own
predictor as running hot. Percentile spread: 75th %ile 10.5%, 25th %ile
4.8%, 10th %ile 1.9%. Only 15-30 games/month exceeded 50% conversion, and
several had only ~10,000 wishlists — a low base makes a high ratio easier
to hit.

### October 2025 update (GameDiscoverCo)

(Source: GameDiscoverCo Newsletter, "The state of Steam wishlist
'conversions': 2024-2025," 2025-10-17,
https://newsletter.gamediscover.co/p/the-state-of-steam-wishlist-conversions)

For games with **>25,000 wishlists at launch**: median conversion **0.15x**
(~15,000 first-week sales per 100,000 wishlists — same order of magnitude
as the 2024 figure, though GDCo's "x" convention is a multiplier, not
necessarily identical math to a strict percentage). Games priced **above
$10**: median **0.10x**. Broader 2024 poll median: **0.17x**. Headline
finding: conversion varies "10-20x, not 10-20%" between games — order of
magnitude variance is normal. **NSFW titles** significantly outperformed
median; excluding them dropped the median from 0.15x to 0.14x. February
and August launches spiked; December underperformed (Winter Sale
saturation). Named high performers (6x+ expected): *Peak* (266x), *Mage
Arena* (78x), *R.E.P.O* (68x) — all co-op, all far outside normal
variance. Underperformers (0.07x or lower) clustered near 67% review
positivity (Mixed); top performers averaged 91% (Very Positive) — an
explicit link between review quality and conversion (see section 3).

### July 2026 tier revision (Chris Zukowski)

(Source: cited as "June 2026, Chris Zukowski" by Steam Page Analyzer,
2026-07-13, as above.) New tiers replacing the old "7,000 is good" rule:
Bronze 5,000; Silver 8,000; Gold 50,000; Diamond 90,000 — "shifted upward
over the years as Steam gets more crowded."

**Net read across 2020 → Dec 2024 → Oct 2025 → mid-2026:** wishlist counts
needed for a "good" launch have trended up, while the conversion
*percentage* has trended down and grown more variable and
price/genre-dependent. Don't use the 2020 table for current planning —
it's historical context only.

---

## 2. Wishlist recency and "front-loading" (directional, not primary-source-confirmed)

Older wishlists reportedly convert worse than fresh ones — wishlists added
in the last 30 days are claimed to convert **5-10x better** than ones
sitting ~18 months, on the logic that old adds represent lapsed interest.
Practical implication repeated across marketing sources: concentrate
marketing pushes (trailers, Next Fest, press, influencer keys) in the
weeks immediately before launch rather than spreading evenly over a long
"Coming Soon" period. Conversion also reportedly depends on wishlist
source: Next Fest-sourced wishlists convert well, paid-social-sourced
wishlists convert at roughly half the organic rate. Flag: this section's
specific multipliers were not traced to one confirmed, dated originating
article via direct fetch in this research pass — treat as directional
marketing-community consensus, not a GameDiscoverCo/Valve-verified figure.

---

## 3. Steam review score bands

**Valve has never officially published these exact thresholds.** The table
below is community reverse-engineering, corroborated by two independent
2026 sources, which is evidence of accuracy but not a Valve contract.
(Sources: Steam Page Analyzer, "Steam Review Score Thresholds: All 9
Rating Labels (2026)," 2026-06-26; Bugnet, "Steam Review Score Thresholds,
Explained," 2026-06-07, https://bugnet.io/blog/steam-review-score-thresholds-explained.
Steamworks' own "Get Reviews" API doc,
https://partner.steamgames.com/doc/store/getreviews, confirms
`review_score`/`review_score_desc` fields exist but documents no threshold
values — Valve doesn't publish cutoffs even in its API reference.)

| Label | Positive % | Min. reviews |
|---|---|---|
| Overwhelmingly Positive | 95-100% | 500+ |
| Very Positive | 80-100% | 50-499 |
| Positive | 80-100% | 10-49 |
| Mostly Positive | 70-79% | 10+ |
| Mixed | 40-69% | 10+ |
| Mostly Negative | 20-39% | 10+ |
| Negative | 0-19% | 10-49 |
| Very Negative | 0-19% | 50-499 |
| Overwhelmingly Negative | 0-19% | 500+ |

Below **10 total reviews**, no label displays at all. **70% is the
critical boundary** between Mixed and Mostly Positive — a one-point swing
changes the visible label, producing a "cliff" effect rather than a smooth
gradient. **500+ reviews gates the "Overwhelmingly" labels** in both
directions — sentiment alone isn't sufficient without volume.

### Calculation methodology: unresolved

The widely-repeated developer claim that Steam uses a "Wilson score
interval" to compute the review percentage was **not confirmed** by any
primary Valve source reached in this pass (Steamworks docs, Wikipedia).
Marked unresolved rather than repeated as fact. What Wikipedia's "Steam
(service)" page does confirm, with dates (fetched 2026-07-26): **May
2016** — Valve split the displayed score into "all reviews" vs. "last 30
days," since patches can shift sentiment. **September 2016** — reviews
from keys/activations (not direct Store purchases) discounted in the
calculation, though still visible. **March 2019** — reviews flagged
"off-topic" during review-bombing so they don't distort the summary score.
**August 2025** — language-based filtering added for regional relevance.

### Why review VELOCITY matters, not just the final score

Per Valve's own visibility doc, review score is not an algorithmic
visibility factor **above the Mixed line (40%+)** — a 95% score doesn't
out-rank an 82% score in the algorithm itself (Source: Steamworks
Documentation, "Visibility on Steam," fetched 2026-07-26). But score
strongly affects *human* conversion: the October 2025 GameDiscoverCo data
above found underperformers (0.07x conversion or lower) near 67%
positivity vs. 91% for top performers. Score doesn't move the algorithm
directly — it moves purchase decisions, which move sales velocity, which
*does* feed algorithmic placement (Top Sellers, Specials tab, New &
Trending). Community guidance (not independently verified against a
primary source in this pass) treats **10+ reviews within the first 24
hours** as a rough floor for avoiding an early drop from "New & Trending,"
since that widget is itself threshold-gated and needs early signal to
qualify. The mechanism: review count early is a proxy for purchase early,
and purchases — not review sentiment per se — are what Valve's docs say
the algorithm optimizes toward.

---

## 4. Launch-week dynamics: why the first 24-72 hours matter disproportionately

### Day-1 CCU as a sales predictor

(Source: GameDiscoverCo Newsletter, "How your Steam launch players relate
to Week 1 sales!", 2025-05-13,
https://newsletter.gamediscover.co/p/how-your-steam-launch-players-relate)

Methodology: Top 50 Steam debuts, March 2025, Day 1 concurrent users (CCU)
vs. estimated Week 1 sales. **Median Day 1 CCU → Week 1 sales: 21.8x**
(blended 20.4x): "If your game has 1,000 Steam CCU on Day 1, you can very
roughly expect 20k sales in Week 1." Non-preordered: 21.8x median;
preordered: 15.4x median (preorders pull sales earlier, compressing the
ratio). All-time peak CCU → Week 1 sales: 11.4x median. Peak CCU timing:
non-preordered games peak at a median of 2.5 days post-launch; preordered
at 4 days. The article flags 50%+ variance around these multipliers —
outliers ranged from single digits (heavily preordered) to **224x**
(*Nubby's Number Factory*, cited by name as a viral breakout).

### Why the algorithm structurally favors launch week

Synthesizing the mechanics above: (1) the **New Releases Queue** (file 1)
is a one-time, non-repeating window at launch prioritizing
least-viewed-since-release titles — miss it, and there's no equivalent
second discovery boost later. (2) **Discovery Queue and Popular Upcoming**
key off wishlist *velocity* in short lookback windows (48-72 hours per one
2026 secondary source) — wishlists trickling in over months produce less
lift than the same total concentrated near launch. (3) **Sales-velocity-
gated widgets** (Top Sellers, Specials, New & Trending) respond to the
purchase spike launch week naturally produces, so early wishlist-to-sale
conversion (section 1) determines whether a title clears those thresholds
while its brief New Releases Queue exposure is still live. (4) **Review
velocity** compounds this: reviews accumulated in the first 24-72 hours
determine whether the store page even displays a score (10-review floor)
before that launch traffic dries up.

**Practical synthesis repeated across sources:** front-load
wishlist-building (Next Fest, demo release, press/influencer pushes) into
the weeks immediately before launch rather than spreading it evenly over a
long "Coming Soon" period — recent wishlists convert better than old ones
(section 2), and the algorithmic mechanisms that matter most are
short-lookback or one-time, rewarding a concentrated spike that converts
into the launch-week sales velocity which unlocks the next tier of
placement.

---

## Sources

- GameDiscoverCo Newsletter: "revealed: new data on Steam 'wishlist conversions'..." (2024-12-03); "The state of Steam wishlist 'conversions': 2024-2025" (2025-10-17); "How your Steam launch players relate to Week 1 sales!" (2025-05-13)
- Steam Page Analyzer: "How Many Wishlists Before Launch? Steam Benchmarks 2026" (2026-07-13, secondary citation of 2020/2026 Zukowski figures); "Steam Review Score Thresholds: All 9 Rating Labels (2026)" (2026-06-26)
- Bugnet, "Steam Review Score Thresholds, Explained" (2026-06-07)
- Steamworks Documentation, "Get Reviews" API reference — partner.steamgames.com/doc/store/getreviews (no thresholds published; fetched 2026-07-26)
- Steamworks Documentation, "Visibility on Steam" — fetched 2026-07-26
- Wikipedia, "Steam (service)" — fetched 2026-07-26

Gaps / not independently verified: the Wilson-score calculation claim
(unresolved, no primary source found); the "5-10x fresher wishlist"
and "Next Fest vs. paid-social conversion" multipliers in section 2
(aggregated from marketing-guide search results, no single confirmed
originating article reached via WebFetch); the "10+ reviews in 24 hours"
velocity floor in section 3 (repeated across secondary sources, not traced
to one dated primary source). partner.steamgames.com pages generally show
no visible publish/last-updated date on the rendered doc itself; "fetched"
dates are given instead.
