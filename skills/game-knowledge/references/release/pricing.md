# Pricing

- Steam enforces **three separate 30-day cooldowns** — release, price increase, and prior discount. The rule is **30 days, not 28**: it moved from 28 to 30 effective **January 1, 2023**.
- Only **Seasonal Sales** are exempt from the *discount* cooldown, and that exemption does **not** waive the release or price-increase cooldowns.
- Discount limits: standard **10–95%**; launch discount **10–40%**, Valve's own suggested range **"10% to 15%"**, must be configured **before** release, runs 7–14 days.
- Minimum transaction price (~$0.49) caps depth on cheap games: $0.99 tier → max 50% off; $1.99 → 75%; $4.99 → 90%.
- A discount **at or above 20%** sends a wishlist email only if it also hits the **lowest-priced package**, runs **over 8 hours**, and the customer is not inside the **2-week per-app notification cooldown**. The percentage alone does not trigger it.
- Price distribution: **77%** of Steam games are priced under $10; only **5%** above $20 (2023 Gamalytic dataset).
- Median revenue for recent releases **$700**; **$4,000** excluding sub-$5 titles; **$17,000** excluding sub-$10 titles — price tier alone predicts revenue outcome.
- Steam cut is tiered per title on lifetime gross: **30%** to $10M, **25%** $10–50M, **20%** above $50M. Steam Direct fee **$100**, recoupable once the title clears $1,000 gross.

## Basics

### What games actually cost, and what they actually earn

Price is one of the few launch decisions that is hard to reverse — the
cooldown rules below mean a badly-set launch price cannot be quietly fixed in
week two.

**Distribution** (Source: GameDev Reports Substack analysis of the Gamalytic
dataset, 2023-10-04):

- **77%** of Steam games are priced under **$10**.
- Only **5%** are priced above **$20**.

**Revenue by price tier**, same dataset — this is the number that matters
most:

| Cohort | Median revenue |
|---|---|
| Recent releases (excluding free games) | **$700** |
| Excluding sub-$5 titles | **$4,000** |
| Excluding sub-$10 titles | **$17,000** |

Price tier alone strongly predicts revenue outcome, because near-free games
skew hobbyist. Roughly **two-thirds of 2025 Steam releases earned under
$1,000** (Gamalytic running dataset, via 80.lv and a near-identical framing
citing "65.9% of 2025 releases, 8,388 games"). A 2023 GameDiscoverCo/Gamalytic
figure gives the longer view: **over 50% of all games ever released on Steam
have grossed less than $1,000 lifetime**.

Cohort breakdown from the same 2023 analysis:

| Cohort | <$5k | $5k–$50k | $50k–$200k | >$200k |
|---|---|---|---|---|
| All Steam games (all-time) | 67% | 17.2% | 6.9% | 8.9% |
| Released in prior 3 years only | 76.5% | 13.4% | 4.5% | 5.6% |

Context: over **41,000 games** released in the prior 3 years — 58% of all live
Steam games at the time — and **>70%** of releases in that window were
"hobbyist projects," self-funded and part-time (Game World Observer,
2023-10-06, same dataset).

> **On the "$15–20 modal polished-indie band."** A scoping pass that preceded
> this corpus proposed pricing guidance of sub-$10 for short/viral titles,
> **$15–20 as the modal "polished indie" band**, and a harder-to-defend $25–55
> middle ground without a clear differentiator. **No corpus source states a $15–20 modal band.** Treat the
> specific band as **unverified**. What the corpus *does* support: only 5% of
> Steam games are priced above $20, so $15–20 is the top few percent of the
> catalog rather than a default; and median revenue rises sharply once sub-$10
> titles are excluded, so pricing above $10 correlates with better outcomes
> even though the direction of causation is not established by that data
> alone. Set price from comparable titles in your genre and length, not from a
> remembered band.

### The three 30-day cooldowns

Valve's stated goal is to keep "a base price that has been in place for at
least 30 days" as the reference point for any percentage-off claim. Three
separate cooldown triggers, quoted from the live doc (Source: Steamworks
Documentation, "Discounting," fetched 2026-07-26):

1. **30-Day Release Cooldown** — "A product cannot be discounted for 30 days
   following its release, including both its Early Access release (if
   applicable) and its Full Release." The sole exception is a **Launch
   Discount**, which must be configured *before* release and starts at release.
2. **30-Day Price Increase Cooldown** — "A product cannot be discounted for 30
   days following a price increase in any currency." No exceptions. *Lowering*
   a base price does not trigger this.
3. **30-Day Discount Cooldown** — "A product cannot be discounted within 30
   days of another discount."

> **On "28-day cooldown."** The cooldown **was** 28 days, extended to **30
> days effective January 1, 2023**. Any guidance still citing 28 days is
> describing the pre-2023 rule. Valve's standalone changelog page
> (`.../discount_rule_changes`) no longer resolves — it 302-redirects to the
> docs homepage (verified via direct `curl`, 2026-07-26), suggesting the change
> history was folded into the main Discounting page.

**Seasonal Sales are the sole exemption.** Spring, Summer, Autumn, and Winter
Sales do not trigger the discount cooldown and are exempt from cooldowns
created by prior discounts — a game can schedule a custom discount within 30
days of a Seasonal Sale and still join it. **That exemption covers only the
discount cooldown.** A title still inside a Release or Price Increase cooldown
cannot join a Seasonal Sale (same source, worked example "Bass Ain't Bitin'
2").

### Discount limits and duration

Per the live docs, fetched 2026-07-26:

| | Min | Max | Duration |
|---|---|---|---|
| Standard discount | 10% | **95%** | 1–14 days |
| Launch discount | 10% | **40%** | 7–14 days, ending 10am Pacific |

Valve's own suggested launch range is **"10% to 15%."**

**90% vs 95%:** March 2022 press coverage (NME, The FPS Review) reported a 90%
cap introduced at that time. The live doc as of 2026-07-26 states 95%. Treat
95% as today's rule and 90% as historical.

**Minimum Price Thresholds cap depth on cheap games.** Steam enforces a
minimum transaction price of roughly **$0.49 USD** — 50% off the $0.99 minimum
base-price tier — which puts an effective ceiling well below 95% for
low-priced titles (Source: Steamworks "Pricing," fetched 2026-07-26):

- $0.99 tier → max discount **50%**
- $1.99 tier → max discount **75%**
- $4.99 tier → max discount **90%**

The 95% ceiling is only reachable at higher base prices.

**Wishlist notifications:** a discount **at or above 20%** is necessary but not
sufficient. Valve sends the email only when the discount also affects the
**lowest-priced package** for the game — discounting a Deluxe edition while
leaving the base package at full price sends nothing — and only when the
discount runs **more than 8 hours**. Customers notified about the same appID
within the **last 2 weeks** are on cooldown and get nothing, and Valve extends
that cooldown during seasonal sales. This makes 20% a meaningful floor for a
discount intended
to reach an audience rather than just lower the price.

## Advanced

### Discount cadence over a title's life

Valve's own "Discounting Best Practices" (Source: Steamworks "Discounting,"
fetched 2026-07-26):

- **"Stairstep your discounts"** — ease deeper over time. Valve's own worked
  example: **33% → 50% → 66% → 75%+ across a year+**. "Rushing into a 50% or
  75% discount weeks after your launch... sends a bad message to customers who
  bought at full price."
- Consider the **sales decay curve** — discount once "you've settled into the
  tail of your sales curve," rather than chasing early Top Sellers placement
  with small discounts.
- Time discounts to **content updates** to reinforce ongoing commitment.
- Discount **all associated packages together** (base game, DLC, deluxe
  editions) to avoid diluting exposure.

> **On the "10–15% / 25–33% / 50% after a year" cadence.** The launch leg
> (**10–15%**) is verified — it is Valve's own stated suggestion. The "25–33%
> regular sale" and "50% reserved for a title a year+ old with an established
> review base" legs come from the internal scoping note and are **unverified**;
> Valve's own published stairstep example starts at **33%** and reaches
> **75%+** across a year or more. The shape of the advice (start shallow,
> deepen slowly, reserve deep cuts for later) matches Valve's guidance; the
> specific middle percentages do not come from a corpus source.

**Curated slots** are selected by player data, not sold or negotiated:
**Daily Deal** (24-hour feature, 2+ slots/day, runs 7–14 days), **Midweek
Deal** (Mon 10am–Thu 10am Pacific, up to 6 slots/week), **Weekend Deal** (Thu
10am–Mon 10am Pacific, up to 6 slots/week). Curated slots are "generally
restricted to once a calendar year, with at least three months' gap between
promotions" per title.

**Four Seasonal Sales per year** — Spring, Summer, Autumn, Winter — and "all
games on Steam are invited to participate." **Themed Sales** (genre "Fests")
are narrower: they have "specific criteria for eligibility, and a process of
invitation, registration, and discounting."

### Launch-week pricing is structurally constrained

The standard advice to avoid discounting at launch is a direct consequence of
the rules above, not folk wisdom: the 30-Day Release Cooldown makes any
discount except the pre-configured Launch Discount **impossible** in the first
30 days. The only lever available at launch is the Launch Discount itself —
40% max, 7–14 days, set before release.

Net shape: an optional modest Launch Discount (10–15% suggested), a full-price
plateau of at least 30 days, then gradually deepening discounts tied to
Seasonal Sales or content updates later in the title's life.

### Regional and purchasing-power pricing

Steam prices are set in **37 currencies across 4 region groups** (Source:
Steamworks "Pricing," fetched 2026-07-26). Three optional conversion methods
generate regional suggestions from a USD price: exchange rate only; purchasing
power only (public PPP data); or multi-variable (local purchasing power +
comparable entertainment-goods cost + exchange rate).

Pricing is entirely the developer's choice — "Pricing decisions on Steam are
entirely in the hands of you the developer." Valve's tools are suggestions.

**The PPP principle:** adjust to local cost of living, not just exchange rate.
A flat conversion ignores that a nominal price is a far larger income share in
lower-GDP markets. Worked example (Hushcrasher newsletter, Mayerowitz &
Belzanne, 2025-11-14): a $12 USD game maps to ~30.6 BRL (~$6-equivalent) in
Brazil via a ~2.55x PPP factor, versus the ~$12-equivalent a flat exchange-rate
conversion produces.

**Documented problems with Steam's defaults** (same source):

- Steam's regional recommendations "haven't been updated since 2022"; Polish
  players pay ~26% more than American players relative to local purchasing
  power.
- EU-mandated single euro pricing forces very different purchasing-power
  countries (Denmark vs. Portugal) to the same nominal price.
- Shared currency buckets (USD_LATAM, USD_MENA) combine markets with very
  different purchasing power — a cited ~70% purchasing-power gap between
  Argentina and Bolivia sits inside one USD_LATAM bucket.

**Practical guidance** (secondary sources, medium confidence, not
independently verifiable against one authoritative document): follow Steam's
default unless you have your own data; expect emerging-market suggested prices
(Brazil, Argentina, Russia, India, Turkey, SE Asia) to land roughly **40–70%
below** the EUR/USD price; re-check volatile-currency regions periodically
since Steam's own refresh cadence is infrequent.

See [localization-decisions.md](localization-decisions.md) for how regional
pricing interacts with language priority.

### Early Access pricing and the 1.0 transition trap

Raising, lowering, or holding price at the EA → 1.0 transition is free — but
raising **within 30 days** of the transition triggers the standard Price
Increase Cooldown, so **the launch discount will not apply** (Source:
Steamworks "Pricing" FAQ, fetched 2026-07-26). Valve's documented
workarounds: keep price flat and discount at 1.0, raising later; raise at 1.0
and skip the discount; or raise 30+ days *before* leaving EA, then run a launch
discount at 1.0.

This is a scheduling trap worth putting on a calendar months ahead, because
the fix has to happen 30+ days before the decision point.

### What the platform takes

**Steam cut is tiered per title**, tracked on lifetime gross revenue for that
title (not per publisher or catalog): **30%** on the first $10M, **25%**
between $10M and $50M, **20%** above $50M. Widely reported at the time of
Valve's 2018 announcement; the exact split lives in the Steam Distribution
Agreement, which is not freely browsable without a partner login — so this
figure rests on well-corroborated secondary reporting rather than a live
primary quote.

For 2025, Valve stated the revenue share paid across all non-Valve games
averaged **76%** to developers — an effective **~24% blended cut**
(GameDiscoverCo, 2026-03-24).

**Steam Direct fee: $100.00 USD, non-refundable, per product** — but
**recoupable**: Valve states it "will be recoupable in the payment made after
your product has at least $1,000.00 USD Adjusted Gross Revenue" (live
Steamworks doc, fetched 2026-07-26). This is why "40% of 2025 releases didn't
recoup the $100 fee" is a meaningful statistic rather than a rounding artifact
— it means those titles never cleared $1,000 gross.

### DLC and edition pricing

Named small-title examples (Source: Simon Carless, GameDiscoverCo,
2020-07-13): *X-Morph: Defense* base $19.99, Complete Edition $35.95 (~10%
discount versus buying separately), 33% lifetime attach rate rising to 60%
during a 75%-off sale. *Not Tonight* base $19.99, story DLC $9.99 (~half base
price), 21% attach at full price rising to 36% during a Summer Sale. *Dead in
Vinland* base $19.99, DLC at $1.99 and $4.99 — roughly **10–25% of the base
price**.

Revenue thresholds for whether DLC is worth building (howtomarketagame.com,
2026-03-03): base games earning **$10K+** should consider a lightweight
"supporter pack" at launch; **$150K+** should actively plan proper DLC.
Details in [launch-and-post-launch.md](launch-and-post-launch.md).

## Cases

- **X-Morph: Defense, Not Tonight, Dead in Vinland, Hacknet** — the four named
  small-title DLC pricing cases with real attach rates
  ([../corpus/production-business-live/post-launch-operations.md](../corpus/production-business-live/post-launch-operations.md)).
- **Early Access 1.0 revenue reality** — only **20%** of 45 studied games
  earned more in their first 30 days post-1.0 than in their first EA month;
  **median release-month revenue was 40%** of first-month EA revenue. Named
  declines: Supermarket Simulator (-95%), Backpack Battles (-87%), Slime
  Rancher 2 (-85%); named growth: News Tower, Mars First Logistics, Escape The
  Backrooms (each more than doubled). Carless's read: 1.0 mostly functions as a
  wishlist notification, not a fresh market catalyst
  ([../corpus/production-business-live/pricing-and-discount-rules.md](../corpus/production-business-live/pricing-and-discount-rules.md)).

Full lanes:
[../corpus/production-business-live/pricing-and-discount-rules.md](../corpus/production-business-live/pricing-and-discount-rules.md),
[../corpus/production-business-live/funding-and-publisher-deals.md](../corpus/production-business-live/funding-and-publisher-deals.md).
Practitioner scope-and-outcome cases: [../cases/README.md](../cases/README.md).

## Checklist

- [ ] Launch price set from genre/length comparables, not a remembered band.
- [ ] Anyone quoting a "28-day cooldown" has been corrected — it is **30 days**
      since January 1, 2023.
- [ ] Launch Discount is configured **before** release if it is wanted at all
      (it cannot be added afterward).
- [ ] The 30-day full-price plateau is in the launch plan, not a surprise.
- [ ] If leaving Early Access: any price increase happens **30+ days before**
      the 1.0 transition, or the launch discount is knowingly forfeited.
- [ ] Discount plan stairsteps (Valve's example: 33% → 50% → 66% → 75%+ over a
      year+) rather than jumping deep early.
- [ ] Discounts intended to reach an audience are **at or above 20%**, hit the
      lowest-priced package, and run longer than 8 hours — all three are
      required before the wishlist email fires.
- [ ] For low-priced titles, maximum discount depth is checked against the
      minimum-price threshold table before a sale is promised.
- [ ] Regional prices reviewed rather than accepted blind — Steam's defaults
      have not been refreshed since 2022.
- [ ] Revenue projections use the corpus medians ($700 / $4,000 / $17,000 by
      price tier), not a best case.

## Sources

- Steamworks Documentation, "Discounting." https://partner.steamgames.com/doc/marketing/discounts — live, fetched 2026-07-26.
- Steamworks Documentation, "Pricing." https://partner.steamgames.com/doc/store/pricing — live, fetched 2026-07-26.
- Steamworks Documentation, "Early Access." https://partner.steamgames.com/doc/store/earlyaccess — fetched 2026-07-26.
- Steamworks Documentation, "Steam Direct." https://partner.steamgames.com/steamdirect — fetched 2026-07-26.
- GameDev Reports Substack, Gamalytic dataset analysis (2023-10-04); GameDiscoverCo (Simon Carless), Gamalytic infographic writeup (2023-10-02); Game World Observer (2023-10-06) — accessed 2026-07-26.
- GameDiscoverCo (Simon Carless), "Revealed: the numbers behind Steam's '24% cut' in 2025" (2026-03-24) — accessed 2026-07-26.
- Hushcrasher newsletter (Antoine Mayerowitz & Julie Belzanne), "We fixed Steam regional pricing recommendations" (2025-11-14) — accessed 2026-07-26.
- Simon Carless, "The surprising way that paid DLC works," GameDiscoverCo (2020-07-13). https://newsletter.gamediscover.co/p/the-surprising-way-that-paid-dlc — accessed 2026-07-26.
- howtomarketagame.com ("Zukalous"), "Benchmark: How much money can you make from DLC?" (2026-03-03) — accessed 2026-07-26.
- Game World Observer / GameDiscoverCo, Early Access vs. 1.0 revenue analysis (2025-12-10) — accessed 2026-07-26.
- NME, "Steam game discounts to be capped at 90 per cent" (Feb 2022); The FPS Review, discount rule coverage (2022-02-20) — historical, partly superseded.

**Marked unverified in this document:** the "$15–20 modal polished-indie band"
and the "25–33% regular sale / 50% after a year" discount legs (internal
scoping note only — Valve's own stairstep example is 33% → 50% → 66% → 75%+).
The **"28-day discount cooldown" is not unverified but wrong** — it is 30 days
since 2023-01-01. The tiered 30/25/20% Steam cut rests on well-corroborated
secondary reporting, not a live primary quote, since the Distribution
Agreement requires a partner login. Regional-price "40–70% below EUR/USD"
guidance is medium-confidence secondary consensus.
`partner.steamgames.com` pages show no visible publish date; "fetched" dates
are given instead.
