# Store Page and Demo

- Next Fest **registration deadlines run ~7–8 weeks before the event**, not ~4 months (Presskit.gg citing Steamworks, fetched 2026-07-26). Pick your fest far earlier than that; the *deadline* is the 7–8 week mark.
- Demo build timing: **~4 weeks** before the fest for Press Preview eligibility, **~2 weeks** before for public-opening readiness. Press Preview starts **11 days** before the public fest.
- Next Fest eligibility is one-shot: unreleased, never in a prior Next Fest, public Coming Soon page, playable demo live before the fest, must not fully release during the event window.
- Strongest predictor of Next Fest wishlist gains is **pre-fest wishlist total** (Spearman r = 0.825). Below **~2,000** pre-fest wishlists, results cluster at the bottom tier.
- Demos launched well before the fest earned **~2.5x** more wishlists than demos launched at fest start.
- Demo→wishlist conversion: median **19.3%** (30th %ile 15.9%, 70th %ile 23.2%). Correlation between conversion rate and total wishlists earned is **weak** — do not tune design around the ratio.
- A demo is a **separate App ID** linked to the base game; disable achievements, use shared Cloud saves.
- Valve publishes **no** demo length target — "15–25 minutes" and "first 60–120 seconds" are unverified (see Basics).

## Basics

### When the store page should go live

The commonly repeated guidance is that the Steam page should be live **6–12+
months before launch** to start wishlist accrual.

> **Status: unverified.** This figure comes from a scoping pass that preceded
> this corpus, not from any dated source in it. No corpus source states a
> page-live lead time.
> What *is* verified is the underlying mechanic: wishlist accrual takes
> calendar time, the New Releases Queue fires once, and Popular Upcoming and
> Discovery Queue key off wishlist totals and velocity — see
> [marketing-and-wishlists.md](marketing-and-wishlists.md). The direction
> ("earlier than you think") is sound; the specific 6–12 month band is not
> sourced here.

The defensible version of the rule: the page must be live long enough before
launch to accumulate the wishlist base your revenue target implies, and long
enough before Next Fest to clear that event's eligibility and benchmark
requirements. Both are calendar constraints that cannot be compressed by
working harder.

### Steam Next Fest: what it is

Began as the Steam Game Festival, launched by Valve with Geoff Keighley in
2019 alongside The Game Awards ecosystem. Renamed Steam Next Fest, it now runs
**two to three times a year**, generally timed near major expos and award
shows (Source: Wikipedia, "Steam Next Fest," fetched 2026-07-26).

**2026 schedule** (Source: Presskit.gg, citing Steamworks docs, fetched
2026-07-26 — the individual Steamworks fest pages rendered nav-only on direct
fetch, so dates are corroborated via Presskit.gg rather than quoted verbatim
from Valve):

| Event | Dates | Registration deadline |
|---|---|---|
| February 2026 | Feb 23 – Mar 2 | reported Jan 5 |
| June 2026 | Jun 15–22, 10:00 AM PDT | ~7–8 weeks prior |
| October 2026 | Oct 19–26, 10:00 AM PDT | ~7–8 weeks prior |

> **On "~4 months advance registration."** The internal scoping note proposed
> that Next Fest "requires ~4 months advance registration." **The corpus
> contradicts this**: registration deadlines are typically **7–8 weeks** before
> the event, and the Feb 2026 fest (Feb 23 start) had a reported Jan 5
> deadline — about 7 weeks. Use 7–8 weeks as the hard deadline. Four months is
> a reasonable *planning* horizon (you need a demo built, and you get one shot
> per game), but it is not the registration requirement.

### Eligibility — read this before building the demo

A game qualifies only if it is (same Presskit.gg source):

- unreleased — no Early Access launch, no re-release;
- never a participant in a prior Next Fest;
- carrying a public "Coming Soon" store page;
- shipping a **playable demo live before the fest**;
- not going to full release during the event window;
- not a prologue or short-form slice of an already-released game;
- on an account in good standing.

The one-shot constraint is the one that bites: you cannot enter a second time
to fix a weak first showing. That makes "am I ready" a real gate, not a
formality.

### Demo submission timing

- **~4 weeks** before the fest — deadline for Press Preview eligibility.
- **~2 weeks** before the fest — public-opening readiness.
- **Press Preview** itself starts **11 days** before the public fest.

### Valve's own demo guidance

(Source: Steamworks Documentation, "Demos,"
https://partner.steamgames.com/doc/store/application/demos, fetched
2026-07-26.)

**Mechanics.** A demo is a separate App ID linked to the base game, with its
own depots and builds, application type set to "Demo," and the base game's App
ID entered in its config. Shared content should live in a shared depot mounted
into both apps. Disable achievements (use shared Steam Cloud saves instead);
use the overlay/friends API to link to the full game's store page. Steam
auto-generates a library link from demo to full game.

**Quality.** "Customers are generally using the demo to make a purchase
decision on your game. Make sure that what you put out there is high quality
and measures up to the real experience."

**Timing.** Launch-day release is one valid approach; pre-release is
recommended specifically when "customers need to touch the game to really
understand it."

**Length.** Valve gives a principle, not a number: "balance giving the
customer enough content to get them excited, without giving away so much that
they feel like they've experienced everything the game has to offer."

> **On "15–25 minute loop" and "strong first 60–120 seconds."** Both figures
> come from the internal scoping note, **not** from any dated source in this
> corpus. Valve publishes no length target, and no corpus source supplies one.
> Treat both as **unverified**. The underlying reasoning in the scoping note —
> that median demo playtime runs well under the intended length, so the
> opening minutes carry disproportionate weight — is consistent with the
> verified demo-conversion data below, but the specific minute counts are not
> sourced. Design against your own telemetry instead: measure where players
> actually stop.

## Advanced

### Next Fest wishlist benchmarks

(Source: How To Market A Game, "Benchmarks: How Many Wishlists Can I Get From
Steam Next Fest," 2025-03-26 — survey-based, n = 170–174 usable responses per
metric.)

Outcome tiers: Diamond 10,000+; Gold 7,000–9,999; Silver 1,000–6,999; Bronze
0–999 wishlists gained.

**Strongest predictor is pre-fest wishlist total** (Spearman r = 0.825):

| Pre-fest wishlists | n | Min | 30th %ile | Median | 70th %ile | Max |
|---|---|---|---|---|---|---|
| 0-999 | 71 | 41 | 179 | 322 | 485 | 5,880 |
| 1K-10K | 60 | 74 | 549 | 1,006 | 1,722 | 15,614 |
| 10K-100K | 36 | 515 | 2,584 | 5,215 | 9,633 | 17,342 |
| 100K+ | 7 | 5,990 | 9,989 | 12,882 | 27,661 | 57,074 |

Pre-fest **velocity** also correlates (r = 0.819): 0–10 wishlists/day → median
358 earned; 11–100/day → 1,470; 100+/day → 10,229.

**Headline recommendation: at minimum ~2,000 wishlists before Next Fest** for
meaningfully better odds. Below that, results cluster near Bronze.

This is the counterintuitive part worth internalizing: Next Fest amplifies
existing momentum rather than creating it. Entering with nothing produces a
median of 322 wishlists. Entering with 10K–100K produces a median of 5,215.

### Demo conversion metrics

- **Demo Conversion Rate** (played-and-wishlisted ÷ total demo players;
  r = 0.457 to overall success): 30th %ile 12%, **median 16.33%**, 70th %ile
  20%.
- **Page Conversion Rate** (played-and-wishlisted ÷ total wishlisters): sweet
  spot 20–30%.
- **Demos launched well before the fest** (vs. at fest start) earned **~2.5x**
  more wishlists on average — though the correlation is weaker (r = -0.205).

### Do not over-read the demo conversion ratio

(Source: How To Market A Game, "Most people will play your demo and not
wishlist it and that is ok," 2026-06-30.)

Demo-to-wishlist conversion: **median 19.3%**, 30th %ile 15.9%, 70th %ile
23.2% (worked example: 713 players → 175 wishlists = 24.5%). The correlation
between conversion rate and total wishlists earned is **weak** — some titles
earned 15,000+ wishlists at under 15% conversion; others earned ~1,000 at 30%+.

Zukowski's core advice: do not tune game design around a low ratio. Demo
players skew toward highly-engaged genre "sickos" who try everything, not a
representative buyer sample; their real value is seeding word-of-mouth and
creator pickup. Despite variable conversion, his position is that demos remain
"the most powerful marketing tool for generating wishlists" available to an
indie developer.

The practical read: **total wishlists earned is the outcome metric; conversion
rate is a diagnostic**, and a weak one. A demo that reaches 10x more players
at half the conversion rate is the better outcome.

### Scale context

June 2026 Next Fest is reported to have hosted **4,200+ demos**, described as
a record (Source: Tech Insider, 2026 — found via search snippet only, not
independently fetched; **unverified**). Whatever the exact number, the fest is
crowded enough that arriving with no pre-existing audience is the dominant
failure mode, which is what the r = 0.825 pre-fest correlation above measures.

## Cases

Named momentum cases (Source: How To Market A Game, "Games that used momentum
for Steam Next Fest Success," 2026-07-14 — single-game, self- or
press-reported figures illustrating the "recent spike beats slow accumulation"
pattern, **not typical outcomes**):

- **Cat Mail Co.** — 5,293 pre-fest wishlists → 42,000 gained during the fest
  (established team, wholesome/crafting genre).
- **Speak** — 694 pre-fest wishlists → ~13,000 gained, via a viral TikTok
  campaign (developer reported "1 million views") plus the developer's prior
  game *The Matriarch*.
- **I AM YOUR BEAST** — 60,000 wishlists in 2 weeks via an announcement plus
  demo timed to the PC Gaming Show, published by Strange Scaffold.

Full lane detail:
[../corpus/production-business-live/steam-visibility-mechanics.md](../corpus/production-business-live/steam-visibility-mechanics.md).

Practitioner cases on scoping a demo-able slice and on recognizing when
outside help is needed: [../cases/README.md](../cases/README.md),
[../cases/a-short-hike.md](../cases/a-short-hike.md),
[../cases/animal-well.md](../cases/animal-well.md).

## Checklist

- [ ] Target Next Fest is chosen and the **registration deadline (~7–8 weeks
      prior)** is on the calendar as a hard date.
- [ ] Demo build date is set to clear **~4 weeks** prior (Press Preview) or at
      minimum **~2 weeks** prior (public opening).
- [ ] Eligibility verified line by line — especially "never participated in a
      prior Next Fest" and "must not fully release during the event window."
- [ ] Pre-fest wishlist total is at or above **~2,000**; if not, the plan
      either delays the fest or accepts Bronze-tier expectations explicitly.
- [ ] Demo is live meaningfully **before** the fest, not at fest start (~2.5x
      difference).
- [ ] Demo is a separate App ID, achievements disabled, shared Cloud saves,
      store-page link wired through the overlay API.
- [ ] Demo length is set from your own playtest telemetry, not from an
      unverified minute count.
- [ ] Success is measured in **total wishlists earned**, not conversion rate.

## Sources

- Steamworks Documentation, "Demos." https://partner.steamgames.com/doc/store/application/demos — no doc date; fetched 2026-07-26.
- Steamworks Documentation, Next Fest event pages — rendered nav-only on direct fetch; dates corroborated via Presskit.gg. Accessed 2026-07-26.
- Presskit.gg, "Steam Next Fest Dates & Registration Deadlines (2026-2027)." https://presskit.gg/field-guides/next-fest-scheduling-registration — citing Steamworks docs; exact publish date not shown on page; fetched 2026-07-26.
- Wikipedia, "Steam Next Fest" — fetched 2026-07-26.
- Chris Zukowski (How To Market A Game), "Benchmarks: How Many Wishlists Can I Get From Steam Next Fest" (2025-03-26). https://howtomarketagame.com/ — accessed 2026-07-26.
- Chris Zukowski, "Most people will play your demo and not wishlist it and that is ok" (2026-06-30). https://howtomarketagame.com/2026/06/30/nobody-plays-demos-and-that-is-ok/ — accessed 2026-07-26.
- Chris Zukowski, "Games that used momentum for Steam Next Fest Success" (2026-07-14). https://howtomarketagame.com/ — accessed 2026-07-26.
- Tech Insider, "Steam Next Fest June 2026: 4,200+ Demos Mark Record Event" (2026) — snippet only, **unverified**; accessed 2026-07-26.

**Marked unverified in this document:** the "store page live 6–12+ months
pre-launch" lead time (internal scoping note only, no corpus source); the "~4
months advance registration" claim (**contradicted** by the 7–8 week
registration deadlines documented above); the "15–25 minute demo loop" and
"first 60–120 seconds" targets (internal scoping note only; Valve publishes no
length guidance); the 4,200+ June 2026 demo count (search snippet only). The
named momentum cases are self- or press-reported single-game figures, not
survey data. `partner.steamgames.com` pages show no visible publish date;
"fetched" dates are given instead.
