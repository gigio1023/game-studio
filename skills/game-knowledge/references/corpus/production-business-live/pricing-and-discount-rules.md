# Steam Pricing, Discounting, and Early Access Rules

Research pass compiled 2026-07-26. Valve changes these rules periodically,
so every rule below is dated. Where this note cites `partner.steamgames.com`
directly, the page was fetched live on 2026-07-26 (HTTP 200, server
`last-modified` header dated 2026-07-26) — current rule set, not a cached
snapshot. Historical rule versions are marked explicitly.

## 1. Discount cooldown rules

Valve's stated goal: keep "a base price that has been in place for at least
30 days" as the reference point for any percentage-off claim (Source:
Steamworks Documentation, "Discounting," partner.steamgames.com/doc/marketing/discounts,
fetched 2026-07-26). Three separate 30-day cooldown triggers, quoted
verbatim from that page:

- **30-Day Release Cooldown** — "A product cannot be discounted for 30 days
  following its release, including both its Early Access release (if
  applicable) and its Full Release." Exception: a **Launch Discount**, which
  must be configured *before* release and runs starting at release.
- **30-Day Price Increase Cooldown** — "A product cannot be discounted for
  30 days following a price increase in any currency." No exceptions.
  Lowering a base price does not trigger this cooldown.
- **30-Day Discount Cooldown** — "A product cannot be discounted within 30
  days of another discount."

**Seasonal Sales are the sole exemption.** Spring, Summer, Autumn, and
Winter Sales don't trigger the discount-cooldown and are exempt from
cooldowns created by prior discounts — a game can schedule a custom
discount within 30 days of a Seasonal Sale and still join it. This
exemption does *not* extend to the Release or Price Increase cooldowns: a
title still mid-cooldown from a recent launch or price hike cannot join a
Seasonal Sale (same source).

### History: 28-day → 30-day

The cooldown was **28 days** before being extended to **30 days effective
January 1, 2023** (Source: secondary summary of "Discount Rule Changes,
January 1, 2023," cross-referenced 2026-07-26). As of this pass, the
standalone changelog page (`.../discount_rule_changes`) no longer resolves —
it 302-redirects to the docs homepage (verified via direct `curl`,
2026-07-26), suggesting Valve folded the change history into the main
Discounting page. Press coverage of the March 2022 and January 2023 rule
changes (NME, The FPS Review) is still findable but describes a rule set
partly superseded — see the 90%/95% note below.

## 2. Discount percentage and duration limits

Per the live docs (fetched 2026-07-26):

- **Standard discounts:** min 10%, **max 95%**.
- **Launch discounts:** min 10%, **max 40%**. Valve's own suggested range:
  "10% to 15%."
- **Duration:** standard 1–14 days; launch discounts 7–14 days, ending
  10am Pacific on the closing day.

**90% vs 95% discrepancy:** March 2022 press coverage (NME, The FPS Review)
reported a 90% cap introduced at that time. The live doc as of 2026-07-26
states 95% as current. Treat 95% as today's rule and 90% as historical/
2022-era.

**Minimum Price Thresholds also cap discount depth.** Steam enforces a
minimum transaction price (~$0.49 USD, i.e. 50% off the $0.99 USD minimum
base-price tier). This creates an effective ceiling below 95% for cheap
games (Source: Steamworks Documentation, "Pricing," fetched 2026-07-26):

- $0.99 tier → max discount **50%**
- $1.99 tier → max discount **75%**
- $4.99 tier → max discount **90%**

The 95% ceiling is only reachable at higher base prices.

**Wishlist notifications:** any discount ≥20% auto-triggers a wishlist
email (same source).

## 3. Curated/featured discount slots

Three Valve-curated homepage promo types (selected by player data, not
sold/negotiated):

- **Daily Deal** — 24-hour feature, 2+ slots/day, runs 7–14 days.
- **Midweek Deal** — Mon 10am–Thu 10am Pacific, up to 6 slots/week, default
  1 week, extendable 3–14 days by request.
- **Weekend Deal** — Thu 10am–Mon 10am Pacific, up to 6 slots/week, default
  1 week, extendable 4–14 days by request.

Curated slots are "generally restricted to once a calendar year, with at
least three months' gap between promotions" per title (Source: Steamworks
Documentation, "Discounting," fetched 2026-07-26).

## 4. Sale participation rules (Seasonal Sales)

**Four major Seasonal Sales per year** — Spring, Summer, Autumn, Winter —
and "all games on Steam are invited to participate" (same source). This is
broader than the curated Daily/Midweek/Weekend slots. Valve also runs
**Themed Sales** (genre-specific "Fests," e.g. Cooking Fest, Racing Fest)
which do have "specific criteria for eligibility, and a process of
invitation, registration, and discounting" — not open to every title.

A game still inside a Release or Price Increase cooldown **cannot** join a
Seasonal Sale even though Seasonal Sales are normally cooldown-exempt — the
exemption only waives the discount-cooldown (same source, worked example
"Bass Ain't Bitin' 2").

## 5. Regional pricing

Steam prices are set in **37 currencies across 4 region groups** (Source:
Steamworks Documentation, "Pricing," fetched 2026-07-26). Three optional
conversion methods for generating regional suggestions from a USD price:

1. **Exchange rate conversion only.**
2. **Purchasing power conversion only** — public PPP data by country/region.
3. **Multi-variable conversion** — local purchasing power + comparable
   entertainment-goods cost + exchange rate, combined.

Pricing is entirely the developer's choice; Valve's tools are suggestions
("Pricing decisions on Steam are entirely in the hands of you the
developer," same source).

**PPP principle:** adjust price to local cost-of-living, not just exchange
rate — flat conversion ignores that a nominal price is a much larger income
share in lower-GDP markets. Example from Hushcrasher newsletter (Antoine
Mayerowitz & Julie Belzanne, "We fixed Steam regional pricing
recommendations," published 2025-11-14): a $12 USD game maps to ~30.6 BRL
(~$6-equivalent) in Brazil via a ~2.55x PPP conversion factor, vs. the
~$12-equivalent a flat exchange-rate conversion would produce.

**Documented problems** (Hushcrasher, 2025-11-14):
- Steam's regional recommendations "haven't been updated since 2022";
  Polish players pay ~26% more than American players relative to local
  purchasing power.
- EU-mandated single euro pricing forces very different purchasing-power
  countries (e.g. Denmark vs. Portugal) to the same nominal price.
- Shared currency buckets (USD_LATAM, USD_MENA) combine markets with very
  different purchasing power — example cited: a 70% purchasing-power gap
  between Argentina and Bolivia inside one USD_LATAM bucket.

**Practical guidance** (secondary sources, medium confidence — not
independently verifiable against one authoritative document): follow
Steam's default price unless you have your own data; expect emerging-market
suggested prices (Brazil, Argentina, Russia, India, Turkey, SE Asia) to land
roughly 40–70% below the EUR/USD price; re-check volatile-currency regions
periodically since Steam's own refresh cadence is infrequent.

## 6. Early Access doctrine

### Official Valve rules

(Source: Steamworks Documentation, "Early Access,"
partner.steamgames.com/doc/store/earlyaccess, fetched 2026-07-26)

1. **Branding required** on any third-party key-selling site, with a link
   to the Early Access FAQ.
2. **No future promises** — don't commit to release dates or guaranteed
   features.
3. **Steam availability parity** — must be on Steam at least as early as
   elsewhere.
4. **Fair pricing** — "no higher than that offered on any other service."
5. **Transparency** — set expectations everywhere, including save-
   compatibility caveats.
6. **Must be playable at launch** — "Don't launch in Early Access without a
   playable game."
7. **Must be under active development** — not a wrapper on a finished game;
   customer feedback should still shape the design.

Valve is explicit: Early Access is **not** crowdfunding and **not**
pre-purchase — it must deliver playable content immediately.

**Inactivity:** past 12 months without an update/news post, Steam adds a
"has not updated in a while" notice. If a dev can't finish: (a) permanently
drop the EA tag (irreversible) and keep the listing, or (b) retire the game,
possibly with refunds.

**Pricing at EA → 1.0 transition** (Source: Steamworks Documentation,
"Pricing" FAQ, fetched 2026-07-26): raise/lower/hold price freely, but
raising *within 30 days* of the transition triggers the standard Price
Increase Cooldown, so **the launch discount won't apply**. Valve's
documented workarounds: keep price flat and discount at 1.0, raising later;
raise at 1.0 and skip the discount; or raise 30+ days before leaving EA,
then run a launch discount at 1.0.

### What "good" Early Access looks like

howtomarketagame.com, "Should you do Early Access?" (2023-07-27): success
factors are meaningful pre-launch visibility already built (rough benchmark:
~7,000 wishlists plus a Next Fest appearance before EA), consistent
community engagement (dev blogs, active Discord/forums, frequent updates),
and treating EA as the *culmination* of marketing already done — "EA Launch
is the culmination of your visibility, not a catalyst." Warns against
entering EA from "financial desperation," or as a cheap user-testing
mechanism. Cites (single-source, not cross-verified here) that **90% of
2016 Early Access games never reached 1.0.**

Companion piece, "Estimating Early Access success" (2023-08-21, author
"zukalous"):
- **0.75** correlation between first-month EA review count and eventual 1.0
  review count.
- **200+ reviews** in EA month one → **73%** conversion to 1,000+ reviews at
  1.0 (209 of 285 sampled).
- **65–110 reviews** in month one → only **9%** conversion (14 of 151).
- **Under 10 reviews** in month one: essentially unrecoverable (one
  exception).
- Time spent in EA: **weak** correlation with review growth (0.141) —
  staying longer doesn't reliably help.

### Failure modes and the "permanent beta" risk

Lower-rigor pop-press sources (GamerRant, TheGamer, Cracked.com, Steam
Community threads — anecdotal color, not data) consistently describe the
same pattern: EA used as an open-ended "protracted Beta Test" that never
converges to 1.0, sometimes abandoned outright while the listing stays live
and for sale. This is the "permanent beta" reputational risk — it damages
trust in the category, not just one title, and is part of why Valve's docs
stress active development and yearly page reviews.

### Does 1.0 actually rescue a slow EA launch? (2025 data)

GameDiscoverCo (Simon Carless), reported via Game World Observer
(2025-12-10): comparing first 30 days post-1.0 revenue vs. first month of
EA revenue —
- Only **20%** of games studied (45 titles) earned more post-1.0 than in
  their first EA month.
- **Median** release-month revenue was **40%** of first-month EA revenue.
- Declines cited: Supermarket Simulator (-95%), Backpack Battles (-87%),
  Slime Rancher 2 (-85%).
- Grew instead: News Tower, Mars First Logistics, Escape The Backrooms
  (each more than doubled).
- Carless: the assumption that "a slow launch can be redeemed by a 1.0
  release" is "increasingly out of step with reality" — 1.0 mostly
  functions as a wishlist notification, not a fresh market catalyst.

## 7. Launch-week pricing dynamics

The advice to avoid discounting at launch is a direct structural
consequence of the rules above, not just folk wisdom: the **30-Day Release
Cooldown** makes any discount except the pre-configured Launch Discount
impossible in the first 30 days (Source: Steamworks Documentation,
"Discounting," fetched 2026-07-26). The only lever available at launch is
the Launch Discount itself — 40% max, 7–14 days, must be set before release.

Valve's own "Discounting Best Practices" (same source):
- **"Stairstep your discounts"** — ease deeper over time (e.g. 33% → 50% →
  66% → 75%+ across a year+). "Rushing into a 50% or 75% discount weeks
  after your launch... sends a bad message to customers who bought at full
  price."
- Consider the **sales decay curve** — best to discount once "you've
  settled into the tail of your sales curve," not to chase early Top
  Sellers placement with small discounts.
- Time discounts to **content updates** to reinforce ongoing commitment.
- Discount **all associated packages together** (base game, DLC, deluxe
  editions) to avoid diluting exposure.

Net effect: an optional modest Launch Discount (10–15% suggested, 40% max),
a full-price plateau of at least 30 days, then gradually deepening
discounts tied to Seasonal Sales or content updates later in the title's
life.

## Sources consulted

- Steamworks Documentation, "Discounting" — partner.steamgames.com/doc/marketing/discounts (live, fetched 2026-07-26)
- Steamworks Documentation, "Pricing" — partner.steamgames.com/doc/store/pricing (live, fetched 2026-07-26)
- Steamworks Documentation, "Early Access" — partner.steamgames.com/doc/store/earlyaccess (fetched 2026-07-26)
- Steamworks Documentation, "Steam Direct" — partner.steamgames.com/steamdirect (fetched 2026-07-26)
- NME, "Steam game discounts to be capped at 90 per cent" (Feb 2022)
- The FPS Review, discount rule coverage (Feb 20, 2022)
- Hushcrasher newsletter (Mayerowitz & Belzanne), "We fixed Steam regional pricing recommendations" (2025-11-14)
- howtomarketagame.com, "Should you do Early Access?" (2023-07-27)
- howtomarketagame.com, "Estimating Early Access success" (2023-08-21)
- Game World Observer / GameDiscoverCo (Simon Carless), Early Access vs. 1.0 revenue analysis (2025-12-10)
- Assorted secondary regional-pricing-calculator sites, practitioner consensus only (medium confidence)
