# Marketing and Wishlists

- Wishlist *count* is not a Valve ranking input; wishlist *velocity* feeds specific widgets (Discovery Queue) — Steamworks "Visibility on Steam," fetched 2026-07-26.
- Week-1 wishlist→sales conversion: median **10.5%** (GameDiscoverCo, Aug–Oct 2024 releases); **17%** median for games launching above 10,000 wishlists (Apr 2024 opt-in survey); **0.15x** median for >25,000 wishlists, **0.10x** above $10 price (Oct 2025).
- Conversion varies "10-20x, not 10-20%" between games — order-of-magnitude spread is normal, so a single ratio is a planning fiction.
- Day-1 CCU × **21.8** ≈ week-1 sales (median, Top 50 March 2025 debuts; 50%+ variance).
- **70%** positive is the Mixed/Mostly Positive cliff; **500+** reviews gates the "Overwhelmingly" labels; under **10** reviews no label displays at all.
- "7,000 wishlists = Popular Upcoming" is stale — reportedly raised toward **~100,000** in a 2026 change.
- Front-load wishlist pushes into the weeks before launch: the New Releases Queue is one-time and Discovery Queue lookback is short (48–72h per secondary sources).
- Calendar lead time is the one project input that cannot be recovered by working harder later.

## Basics

### Wishlist versus follow: different signals, different mechanics

A wishlist means "they want to buy it"; a follow means "they want to hear
more." Only the wishlist triggers a launch-day email to every wishlister
regardless of discount (Source: How To Market A Game, 2023-05-01). Discount
emails fire only when the price cut exceeds 20% and the discount holds on the
lowest-priced package for 8+ hours, with a 2-week per-customer cooldown that
extends further during busy sale periods (Source: Steamworks "Wishlists,"
accessed 2026).

Zukowski's priority ordering for developers: (1) wishlist, (2) studio follow,
(3) game follow. A studio follow still buys one launch email for your *next*
release, which is why it outranks a per-game follow.

### Does wishlisting drive algorithmic visibility? Contested

Valve's own documentation states plainly that wishlists are "**not** a factor
in your game's algorithmic visibility on Steam" — they drive downstream
emails, not ranking. Review score is likewise not a ranking factor as long as
the game sits at Mixed or above (40%+) (Source: Steamworks "Visibility on
Steam," no doc date; fetched 2026-07-26).

Practitioner sources describe something narrower but real: the **Discovery
Queue** is driven by "wishlists earned over short periods," i.e. velocity
feeds at least one specific widget (How To Market A Game, 2023-09-04).
StraySpark Studio (2026-03-28) claims a 48–72 hour lookback window
(**unverified** against Valve).

Read it this way: wishlist count is not a direct ranking input, but wishlist
velocity feeds specific widgets that developers collectively call
"algorithmic visibility." Do not plan around a number Valve has never
published.

### The conversion numbers, and why they keep moving

Every figure below is dated because the trend matters more than any single
snapshot.

| Date | Source | Finding |
|---|---|---|
| 2020 | Zukowski (via secondary citation) | Week-1 conversion by launch-day wishlists: <5,000 → 15%; 5,000–39,999 → 20%; 40,000–99,999 → 23%; 100,000+ → 25%. Flagged "directional" by the citing article given its age. |
| 2024-12-03 | GameDiscoverCo | **Week-1 median 10.5%** across Aug–Oct 2024 releases with Hype score >250 (~5,000 wishlist floor; ~120–150 games/month). 75th %ile 10.5%, 25th %ile 4.8%, 10th %ile 1.9%. Projected month-1: 13–14%. |
| 2024-04 | GameDiscoverCo opt-in dev survey | Games launching with **over 10,000 wishlists** hit **median 17%** week-1 conversion. |
| 2025-10-17 | GameDiscoverCo | >25,000 wishlists: median **0.15x**. Priced above $10: median **0.10x**. Broader 2024 poll median **0.17x**. |
| 2026-07-13 | Zukowski (via secondary citation) | New wishlist tiers: Bronze 5,000; Silver 8,000; Gold 50,000; Diamond 90,000. |

**Net read across 2020 → 2026:** the wishlist count needed for a "good"
launch has trended *up*, while the conversion *percentage* has trended *down*
and grown more variable and more price/genre-dependent. The 2020 table is
historical context, not a planning tool.

> **On the "~18% median" figure.** An earlier scoping pass that preceded this
> corpus proposed "roughly an 18% median" as the number to encode here. **That
> figure is not supported by any dated source in this corpus** and sits above
> every corpus median. The closest verified figures are 17% (April 2024 opt-in survey,
> restricted to games above 10,000 wishlists) and the broader 2024 poll median
> of 0.17x. Treat 18% as **unverified**; use 10.5% as the general week-1 median
> and 17% only for the >10,000-wishlist case.

### Review score bands and the two cliffs

**Valve has never officially published these thresholds.** The table is
community reverse-engineering corroborated by two independent 2026 sources —
evidence of accuracy, not a Valve contract. Steamworks' own "Get Reviews" API
doc confirms the `review_score` fields exist but documents no threshold
values.

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

Two discontinuities matter more than the gradient. **70%** is the boundary
between Mixed and Mostly Positive — a one-point swing changes the visible
label, so scores near 70% behave like a cliff, not a slope. **500+ reviews**
gates the "Overwhelmingly" labels in both directions: sentiment alone is not
sufficient without volume. Below **10 total reviews** no label displays at
all.

The widely-repeated claim that Steam uses a **Wilson score interval** to
compute the percentage was **not confirmed** by any primary Valve source —
marked unresolved rather than repeated as fact.

## Advanced

### Why review velocity matters more than final score

Per Valve's own visibility doc, review score is not an algorithmic factor
above the Mixed line — a 95% score does not out-rank an 82% score in the
algorithm itself. But score strongly affects *human* conversion: the October
2025 GameDiscoverCo data found underperformers (0.07x conversion or lower)
clustered near **67%** positivity, while top performers averaged **91%**.

The causal chain is indirect: score moves purchase decisions → purchases move
sales velocity → sales velocity *does* feed algorithmic placement (Top
Sellers, Specials tab, New & Trending). Community guidance treats **10+
reviews within the first 24 hours** as a rough floor for avoiding an early
drop from New & Trending, since that widget is itself threshold-gated
(**unverified** — repeated across secondary sources, not traced to a dated
primary source).

### Day-1 concurrents as a week-1 sales predictor

(Source: GameDiscoverCo, 2025-05-13, Top 50 Steam debuts March 2025.)

- **Median Day-1 CCU → Week-1 sales: 21.8x** (blended 20.4x). Roughly: 1,000
  Day-1 concurrents ≈ 20,000 week-1 sales.
- Non-preordered 21.8x; **preordered 15.4x** — preorders pull sales earlier
  and compress the ratio.
- All-time peak CCU → week-1 sales: 11.4x median.
- Peak CCU timing: non-preordered games peak a median 2.5 days post-launch;
  preordered at 4 days.
- The article flags **50%+ variance** around these multipliers; outliers ran
  from single digits (heavily preordered) to **224x** (*Nubby's Number
  Factory*, a viral breakout).

### Why the algorithm structurally favors launch week

Four mechanics compound, which is why the first 24–72 hours are not merely
"important" but structurally privileged:

1. **New Releases Queue** — a one-time, non-repeating window at launch that
   prioritizes titles with the least views since release. Miss it and there is
   no equivalent second discovery boost later.
2. **Discovery Queue and Popular Upcoming** key off wishlist *velocity* in
   short lookback windows, so wishlists trickling in over months produce less
   lift than the same total concentrated near launch.
3. **Sales-velocity-gated widgets** (Top Sellers, Specials, New & Trending)
   respond to the launch-week purchase spike, so early conversion determines
   whether you clear those thresholds while New Releases Queue exposure is
   still live.
4. **Review velocity** decides whether the store page displays a score at all
   (the 10-review floor) before launch traffic dries up.

**Practical consequence:** front-load wishlist-building — Next Fest, demo
release, press and creator pushes — into the weeks immediately before launch
rather than spreading it evenly over a long "Coming Soon" period.

### Wishlist recency and front-loading (directional only)

Older wishlists reportedly convert worse than fresh ones: wishlists added in
the last 30 days are claimed to convert **5–10x better** than ones sitting
~18 months, on the logic that old adds represent lapsed interest. Conversion
is also claimed to depend on source — Next Fest-sourced wishlists convert
well, paid-social-sourced wishlists at roughly half the organic rate.

**Unverified**: these specific multipliers were not traced to a confirmed,
dated originating article. Treat as marketing-community consensus, not a
GameDiscoverCo- or Valve-verified figure. The *direction* (concentrate
pushes near launch) is independently supported by the four structural
mechanics above.

### Popular Upcoming: a threshold that visibly moved

- Long-standing rule of thumb, still repeated mid-2026: "get 7,000 wishlists
  before you launch." The citing article frames 7,000 as the **old** standard
  being displaced (Steam Page Analyzer, 2026-07-13).
- StraySpark (2026-03-28) reports a velocity-gated floor of "roughly
  3,000-5,000+ wishlists with consistent daily additions" — a different
  measure than a flat lifetime total (**unverified**).
- How To Market A Game (2026-06-25) reports Valve raised the bar from roughly
  7,000 to **roughly 100,000 wishlists** in a 2026 change, called
  "controversial" since most indie titles never reach six figures pre-launch.
- Valve's partial offset, per the same article: a new **Personal Calendar**
  widget gives upcoming games front-page time independent of the Popular
  Upcoming wishlist gate.

Zukowski's separate GDC 2024 figures: roughly **1,000 wishlists/day** velocity
for "Top Upcoming" placement, and roughly **5,000–7,000** total to reliably
land in its Top Ten — with timing relative to the list's refresh cycle
mattering more than the raw ranking.

**No Valve-published number exists for any of this.** As of mid-2026 the
credible range spans a ~3–5K velocity-gated floor to a ~100K raised bar.

### What "worked" looks like as a number

Zukowski's "golden goose games" marker for a healthy commercial outcome:
clearing **$150,000 in sales within 6 months of release**, generally paired
with **around 500 user reviews** (GDC 2024). Context for how rare that is:
roughly two-thirds of 2025 Steam releases earned under $1,000 — see
[pricing.md](pricing.md).

### Tactics with named evidence

**Extract value from the 30% cut.** Zukowski's central GDC 2024 thesis: "The
secret to Steam is asking for shit" — Valve is unexpectedly responsive to
specific, logistically reasonable requests (featuring, bundling, festival
slots), but developers routinely leave that value unclaimed by never asking.
He characterizes the **Support page** as the single most important page on a
developer's Steam presence. Market context from the same talk: over **18,000
games released on Steam in 2024**.

**GIF-first social posting.** David Wehle sustained "make GIF, post GIF,
rinse, repeat" daily for roughly 12 months using `#madewithunity` and similar
hashtags; roughly a third of his eventual Twitter following is attributed to
community retweets from that exposure. GIFs are cited as outperforming static
images by roughly **10x** in engagement (GDC 2019, summary-based).

**Email list as the launch-hour lever.** Wehle coordinated email list + Steam
wishlist + social into one synchronized push aimed at landing in New &
Trending, and reports **email was the most impactful channel in the first
hour** — the list manufactured the initial spike that Steam's discovery
algorithms then amplified. Given mechanic (3) above, this is mechanically
coherent, not just anecdote.

## Cases

Named cases from the corpus with figures attached:

- **Peak (266x), Mage Arena (78x), R.E.P.O (68x)** — Oct 2025 conversion
  outliers, all co-op, all far outside normal variance. Do not plan against
  outliers ([../corpus/production-business-live/wishlists-and-launch-math.md](../corpus/production-business-live/wishlists-and-launch-math.md)).
- **Nubby's Number Factory** — 224x Day-1-CCU-to-week-1-sales, cited by name
  as a viral breakout against a 21.8x median.
- **The First Tree** (David Wehle) — ~$10,000 budget, ~18 months part-time
  (~1,000 hours), ~$150,000 PC revenue plus ~$150,000 from console ports; the
  GIF and email tactics above are his
  ([../corpus/gdc-postmortems/pitch-and-marketing-talks.md](../corpus/gdc-postmortems/pitch-and-marketing-talks.md)).
- **Whisker Squadron: Survivor** — 2,794 wishlists in two days tied to 7,668
  site visits via Discovery Queue placement (single case, not a threshold).

Practitioner cases on when a solo dev recognized they needed marketing help,
and on what real validation looks like versus polite feedback:
[../cases/README.md](../cases/README.md),
[../cases/animal-well.md](../cases/animal-well.md),
[../cases/balatro.md](../cases/balatro.md),
[../cases/stardew-valley.md](../cases/stardew-valley.md).

## Checklist

- [ ] Steam page is live and accruing wishlists — calendar time spent is
      unrecoverable, unlike code.
- [ ] Wishlist pushes are concentrated in the weeks before launch, not spread
      evenly across a long Coming Soon period.
- [ ] Launch-week plan names which mechanic each activity targets (New
      Releases Queue, Discovery Queue velocity, review floor, sales velocity).
- [ ] A plan exists to clear **10 reviews within 24 hours** so a score
      displays at all.
- [ ] Sales projections use a *range* (week-1 conversion 4.8% at the 25th
      percentile to 10.5% median) rather than one ratio.
- [ ] Nobody is planning against the 2020 conversion table or the "7,000
      wishlists" Popular Upcoming rule — both are stale.
- [ ] Studio-follow and wishlist asks are separated in calls to action.
- [ ] Someone has actually asked Valve for featuring/bundle/festival slots.

## Sources

- GameDiscoverCo Newsletter, "revealed: new data on Steam 'wishlist conversions' & the hit-driven..." (2024-12-03). https://newsletter.gamediscover.co/p/revealed-new-data-on-steam-wishlist — accessed 2026-07-26.
- GameDiscoverCo Newsletter, "The state of Steam wishlist 'conversions': 2024-2025" (2025-10-17). https://newsletter.gamediscover.co/p/the-state-of-steam-wishlist-conversions — accessed 2026-07-26.
- GameDiscoverCo Newsletter, "How your Steam launch players relate to Week 1 sales!" (2025-05-13). https://newsletter.gamediscover.co/p/how-your-steam-launch-players-relate — accessed 2026-07-26.
- Steamworks Documentation, "Visibility on Steam." https://partner.steamgames.com/doc/marketing/visibility — no doc date; fetched 2026-07-26.
- Steamworks Documentation, "Wishlists." https://partner.steamgames.com/doc/marketing/wishlist — accessed 2026.
- Steamworks Documentation, "Get Reviews" API reference. https://partner.steamgames.com/doc/store/getreviews — no thresholds published; fetched 2026-07-26.
- Chris Zukowski (How To Market A Game), "What is the difference between a Steam Wishlist and a Follower?" (2023-05-01); "Killing the myths behind Steam's visibility" (2023-09-04); "What is the Discovery Queue?" (2023-08-28); "How the Steam Personal Calendar affects your launch" (2026-06-25). https://howtomarketagame.com/ — accessed 2026-07-26.
- Chris Zukowski, GDC 2024, "The Steam Secrets Nobody Tells You... Until Now" — summary-based on third-party recaps (gamedeveloper.com, gamesradar.com), not a primary transcript; accessed 2026-07-26.
- David Wehle, "No Time, No Budget, No Problem: Finishing 'The First Tree'," GDC 2019 (March 19). https://www.gdcvault.com/play/1025702/No-Time-No-Budget-No — summary-based on a howtomarketagame.com recap, not a primary transcript; accessed 2026-07-26.
- Steam Page Analyzer, "How Many Wishlists Before Launch? Steam Benchmarks 2026" (2026-07-13); "Steam Review Score Thresholds: All 9 Rating Labels (2026)" (2026-06-26) — secondary citations of 2020/2026 Zukowski figures; accessed 2026-07-26.
- Bugnet, "Steam Review Score Thresholds, Explained" (2026-06-07). https://bugnet.io/blog/steam-review-score-thresholds-explained — accessed 2026-07-26.
- StraySpark Studio, "Steam Algorithm Decoded" (2026-03-28) — **unverified against Valve**; accessed 2026-07-26.
- Wikipedia, "Steam (service)" — review-integrity changelog (May 2016, Sept 2016, March 2019, Aug 2025); fetched 2026-07-26.

**Marked unverified in this document:** the "~18% median" conversion figure
(internal scoping note only, contradicted by corpus medians); the Wilson-score
calculation method (no primary source); the 5–10x wishlist-recency and
Next-Fest-versus-paid-social multipliers; the "10+ reviews in 24 hours"
velocity floor; StraySpark's 48–72h lookback and 3,000–5,000 Popular Upcoming
floor. Review-score thresholds are community reverse-engineering, not
Valve-published. `partner.steamgames.com` pages show no visible publish date;
"fetched" dates are given instead.
