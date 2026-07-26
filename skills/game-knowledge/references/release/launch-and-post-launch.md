# Launch and Post-Launch

- The first **24–72 hours** are structurally privileged: the New Releases Queue is one-time, Discovery Queue lookback is short, and sales- and review-velocity gates all resolve in that window.
- **Update Visibility Rounds** require selecting a community announcement **posted within the last 30 days** — a stale news feed mechanically disqualifies you. Each product gets **five** rounds total, shared across Early Access and full release.
- Each round runs up to **30 days** or **1 million homepage impressions**, whichever comes first, and typically will **not** show during major seasonal sales.
- Wishlist notifications fire: at launch; on EA→1.0 exit; for discounts **≥20%** held on the lowest-priced package **8+ hours**; and once for a demo release within two weeks of the demo going live. **2-week cooldown** per customer per app.
- Valve states plainly: "there's no formula to accurately predict sales from wishlists."
- Early Access: the "has not updated in a while" page notice fires on **either** 12 months since a build was assigned to the **default branch** or 12 months since an **update-type event** (Major Update, Regular Update, Patch Notes). An ordinary news post is not an update event.
- **1.0 does not rescue a slow EA launch** — only 20% of 45 studied games earned more post-1.0 than in their first EA month; median release-month revenue was **40%** of first-month EA revenue.
- DLC thresholds: base game **$10K+** → consider a lightweight supporter pack; **$150K+** → plan proper DLC.

## Basics

### Why launch week decides more than it should

Four mechanics compound inside the first 24–72 hours. Full treatment in
[marketing-and-wishlists.md](marketing-and-wishlists.md); the short version:

1. **New Releases Queue** — a one-time window prioritizing titles with the
   fewest views since release. There is no equivalent second boost later.
2. **Discovery Queue / Popular Upcoming** — key off wishlist *velocity* in
   short lookback windows.
3. **Sales-velocity-gated widgets** — Top Sellers, Specials, New & Trending
   respond to the launch purchase spike.
4. **Review velocity** — the 10-review floor decides whether a score displays
   at all before launch traffic dries up.

Day-1 concurrents predict week-1 sales at a **21.8x median** (Top 50 March
2025 debuts, 50%+ variance), which makes Day-1 CCU the earliest honest read on
whether the launch is working.

Pricing is locked during this window by the **30-Day Release Cooldown** — the
only lever is a Launch Discount configured before release. See
[pricing.md](pricing.md).

### Patch cadence: what is actually documented

The widely repeated pattern is: ship emergency hotfixes for
crashes/save-corruption/game-breaking bugs within **24–48 hours** of
discovery, then settle into weekly or biweekly scheduled patches, with the
fix-to-feature ratio shifting as stability improves.

> **Status: weakly sourced.** The 24–48h figure traces to a single article
> (Bugnet Blog, 2026-03-19) that cites **no named studios or postmortems** and
> reads as generic best-practice guidance. Its finer breakdown — month 1
> roughly 60% bugfix / 40% features, months 2+ toward 50/50, month 3+ (once
> crash-free rate exceeds 99%) toward 40/60 — is likewise uncited. Treat these
> as a plausible mental model, **not** a documented industry standard.

**What is verified.** Cyberpunk 2077 launched 2020-12-10; CD Projekt Red's own
official announcement confirms **Hotfix 1.05 shipped 2020-12-19** — roughly
nine days, at AAA scale, during an unprecedented launch crisis. That is the
one piece of this example confirmed against a primary source. Characterizations
of "monthly at best" major patches afterward come from an article that
discloses AI-generated imagery and cites no primary sources — unverified.

**The long-tail counter-shape.** Stardew Valley (solo, Eric Barone, launched
2016-02-26) shows a different cadence entirely: ongoing bugfixing punctuated by
*major* content updates spaced **years** apart — multiplayer beta April 2018,
full PC multiplayer 2018-08-01, Switch multiplayer December 2018, version 1.6
for PC in March 2024 (mobile/console November 2024). This is an outlier funded
by exceptional commercial success, not a typical small-indie pattern — most
titles never have the sales volume to justify multi-year post-launch
investment.

**Structural difference worth knowing.** AAA cadence is constrained by console
certification lag and larger QA pipelines, which is the commonly cited reason
major AAA patches land on a roughly monthly rhythm even when severe hotfixes
ship in days. Solo/small-indie cadence on PC is *less* constrained by
certification — Steam patches can ship same-day at the developer's discretion —
but is constrained instead by the developer's own bandwidth. The hotfix
*floor* can be faster for a motivated solo dev; the *sustained* cadence is more
fragile.

### The mechanic that makes community cadence non-optional

This is the best-sourced part of post-launch practice, drawn directly from
Valve's own documentation.

**Update Visibility Rounds** (Source: Steamworks Documentation, "Update
Visibility Rounds," accessed 2026) are developer-triggered from the app's
Marketing admin page, intended for "major updates to your application, add new
content, release new DLC, or ship new features." The constraints:

- Starting a round **requires selecting a recent community announcement, and
  that announcement must have been posted within the last 30 days.** A stale
  news feed directly blocks access to this visibility mechanism.
- Each round appears "to customers that have your game in their library or on
  their wishlist."
- Each runs up to **30 days** or caps at **1 million homepage impressions**,
  whichever comes first.
- Each product starts with **five** allocated rounds, shared across Early
  Access and full release.
- Rounds "will typically not show up during major seasonal sale events" —
  timing an update into a sale window can waste the opportunity.

**Wishlist notifications** (Source: Steamworks "Wishlists," accessed 2026)
fire automatically at launch, again if an Early Access title exits to full
release, for discounts of **20%+** that hold on the lowest-priced package for
**8+ hours**, and once for a developer-controlled demo-release notification
within two weeks of the demo going live. There is a **2-week cooldown** per
customer per app, extended further during high-traffic sale periods. Valve's
own documentation states explicitly that "there's no formula to accurately
predict sales from wishlists."

**Why this matters beyond keeping fans happy:** a stale announcements feed
mechanically disqualifies you from Update Visibility Rounds via the 30-day
recency requirement, and each of the five rounds is a finite resource — best
spent on genuinely content-worthy updates rather than burned early on minor
news.

## Advanced

### Community management: minimal viable practice

Two credible, non-content-mill sources converge on a similar minimal structure.

**Discord's own guidance** (Discord, "The Game Developer Playbook, Part One,"
Nelly, 2025-03-17) recommends four channel category types — read-only info,
two-way discussion, staff-only, and dedicated voice rooms for playtests — plus
specific channels: `#rules-and-info`, `#announcements`/`#patch-notes`,
`#game-discussion`/`#build-feedback`, and a standardized `#report-issue`.
Minimum roles: one admin/studio role with full access, one restricted
playtester role, with `@everyone` stripped of default visibility. Baseline
moderation: enable **Community** server features, set a **Verification Level**
requiring email/phone confirmation, use **Rules Screening**, enable **AutoMod**
and explicit-content filtering.

**A named studio's practitioner account** (Buddy Sola, Akupara Games,
2021-03-10) is more battle-tested: keep landing channels minimal
(`#announcements`, `#welcome-rules`, `#introduce-yourself`); add a couple of
low-barrier casual channels with **clear, legible names over cute ones** (his
example: `#food`, not `#chew-on-this`); separate broadcast channels from
conversational ones. Use an automatically assigned baseline role (e.g.
`@Gamer`) so you can ping the active community without `@everyone`, which
drives members to mute the server. His stated practices: respond in real time
where possible, keep a professional tone about the company while staying casual
elsewhere, and **prioritize bug-report conversations happening in Discord** over
parallel channels like forums or email — Discord becomes the primary support
surface, not just a marketing channel.

**Early Access communication cadence:** bi-weekly "mini updates" plus a monthly
"state of the game" post, with detailed patch notes on every major release —
described as "the minimum dialogue cadence the EA community expects" (Althera
Games, 2026-05-01). The same source recommends keeping a public roadmap's "In
Progress" column deliberately short (**3–5 items**) to signal focus. This is a
single marketing-agency source, not a cross-studio survey — one documented
recommendation, not a proven optimum.

**Devlog cadence** is the weakest-sourced item here: roughly one substantial
devlog every **1–2 weeks** plus 2–3 micro-posts per week, from a content-mill
source with no case studies (**unverified**). It is at least consistent with
the Althera EA cadence, suggesting a convergent expectation of roughly
biweekly touchpoints as a floor.

### Early Access: the rules and the exit

**Valve's seven official rules** (Source: Steamworks "Early Access," fetched
2026-07-26): branding required on any third-party key-selling site with a link
to the EA FAQ; **no future promises** — don't commit to release dates or
guaranteed features; Steam availability parity; fair pricing, "no higher than
that offered on any other service"; transparency including save-compatibility
caveats; **must be playable at launch** — "Don't launch in Early Access without
a playable game"; and must be under active development, not a wrapper on a
finished game.

Valve is explicit that Early Access is **not** crowdfunding and **not**
pre-purchase — it must deliver playable content immediately.

**Inactivity:** Steam adds a "has not updated in a while" notice above the
Developer Questionnaire when **either** more than 12 months have passed since a
build was assigned to the default branch **or** more than 12 months have passed
since an update-type event (Major Update, Regular Update, or Patch Notes). A
general news post does not reset it. A developer who cannot finish may either
permanently drop the EA tag (irreversible) and keep the listing, or retire the
game, possibly with refunds.

**What "good" EA looks like** (howtomarketagame.com, 2023-07-27): meaningful
pre-launch visibility already built — a rough benchmark of ~7,000 wishlists
plus a Next Fest appearance *before* EA — consistent community engagement, and
treating EA as the **culmination** of marketing already done: "EA Launch is the
culmination of your visibility, not a catalyst." Warns explicitly against
entering EA from "financial desperation" or as cheap user testing. Cites
(single-source, not cross-verified) that **90% of 2016 Early Access games never
reached 1.0**.

**Predicting EA outcomes from month one** (howtomarketagame.com, 2023-08-21):

- **0.75** correlation between first-month EA review count and eventual 1.0
  review count.
- **200+ reviews** in EA month one → **73%** convert to 1,000+ reviews at 1.0
  (209 of 285 sampled).
- **65–110 reviews** in month one → only **9%** convert (14 of 151).
- **Under 10 reviews** in month one: essentially unrecoverable (one exception).
- Time spent in EA has only a **weak** correlation with review growth (0.141) —
  staying longer does not reliably help.

**Does 1.0 rescue a slow EA launch? No** (GameDiscoverCo via Game World
Observer, 2025-12-10, 45 titles, first 30 days post-1.0 vs. first month of EA):
only **20%** earned more post-1.0; **median release-month revenue was 40%** of
first-month EA revenue. Declines: Supermarket Simulator (-95%), Backpack
Battles (-87%), Slime Rancher 2 (-85%). Growth: News Tower, Mars First
Logistics, Escape The Backrooms (each more than doubled). Carless's read: the
assumption that "a slow launch can be redeemed by a 1.0 release" is
"increasingly out of step with reality" — 1.0 mostly functions as a wishlist
notification, not a fresh market catalyst.

**The "permanent beta" risk:** lower-rigor pop-press sources consistently
describe EA used as an open-ended beta that never converges to 1.0, sometimes
abandoned outright while the listing stays live and for sale. Anecdotal color
rather than data, but it is part of why Valve's docs stress active development.

### DLC and edition economics

**Documented attach rates from named small titles** (Simon Carless,
GameDiscoverCo, 2020-07-13) — an earlier 2017-era industry benchmark cited in
the same piece put typical lifetime DLC attach rates at **5–15%**:

| Title | Attach rate | Notes |
|---|---|---|
| X-Morph: Defense | 33% lifetime | ~50% of concurrent sales were the bundled Complete Edition; 60% during a 75%-off sale |
| Not Tonight | 21% full price | 36% during a Summer Sale (both discounted 50%) |
| Dead in Vinland | 39% / 25% / 28% | Three packs; combined DLC = 14% of lifetime revenue |
| Hacknet | — | DLC/soundtrack ≈ one-third of total revenue |

**Tier analysis** (howtomarketagame.com, 2026-03-03; 52 games/83 DLC items plus
a 14,399-game 2024 dataset). Revenue tiers: Bronze $0–$10K, Silver $10K–$149K,
Gold $150K–$999K, Diamond $1M+.

- **Thresholds:** base games earning **$10K+** should consider a lightweight
  "supporter pack" DLC at launch; **$150K+** should actively plan proper DLC.
- **Prevalence:** only 68% of Diamond-tier games had any DLC; 47% of Gold;
  21% of Silver. Even among the most successful small titles, roughly a third
  skip DLC entirely.
- **Development time:** a lightweight supporter pack reportedly takes "no more
  than a week or two" — a low-risk way to test willingness to pay before
  committing to a full expansion.
- **Attach rates are noisy:** Silver-tier "expansion" attach reported at 35.9%
  vs. Diamond-tier at 14%, suggesting attach rate alone is meaningless without
  controlling for DLC type.

**Both sources agree** DLC is a **long-tail revenue extension**, not a
launch-window event — release relatively soon after the base game while an
active audience remains, and lean on discounted "Complete Edition" bundles
during sale events, where attach rates spike hardest. Neither supports a single
"magic number" attach rate; a plan assuming a specific rate without a
comparable-game benchmark is building on an unsupported number.

**Season passes:** no well-sourced, indie-scale viability figure or postmortem
was found. Reasoned inference only — since even Diamond-tier titles show ~68%
DLC adoption and highly variable attach rates, a season pass (committing to a
schedule of not-yet-built content sold upfront) is a materially
higher-commitment bet. **Flagged as inference, not a sourced claim.**

## Cases

- **Cyberpunk 2077** — launched 2020-12-10, Hotfix 1.05 on 2020-12-19 (primary
  source). The only patch-timing data point in this corpus verified against an
  official announcement.
- **Stardew Valley** — the long-tail solo counter-shape: years of ongoing
  fixes punctuated by major content updates spaced years apart. See
  [../cases/stardew-valley.md](../cases/stardew-valley.md).
- **Supermarket Simulator, Backpack Battles, Slime Rancher 2** — the three
  named 1.0 revenue declines (-95%, -87%, -85%).
- **Train Sim World 5** — 129 separately priced DLC items ($29.99–$39.99 each)
  while holding "very positive" status across 1,138 reviews; a counterexample
  to "heavy DLC volume damages sentiment," though the niche simulation audience
  may not generalize.

Full lane:
[../corpus/production-business-live/post-launch-operations.md](../corpus/production-business-live/post-launch-operations.md).
Practitioner sustainability and burnout material:
[../cases/README.md](../cases/README.md),
[../cases/studio-practices.md](../cases/studio-practices.md).

## Checklist

- [ ] A community announcement is posted **within 30 days** of any planned
      Update Visibility Round — otherwise the round is unavailable.
- [ ] The five allocated rounds are budgeted deliberately across the title's
      life, not spent on minor news.
- [ ] Update rounds are not scheduled into major seasonal sale windows.
- [ ] Hotfix triage is defined **before** launch: what counts as
      ship-immediately (crash, save corruption, progression block) versus
      next-scheduled-patch.
- [ ] Day-1 CCU is being watched as the earliest honest read on the launch.
- [ ] If in Early Access: an update or news post has landed within 12 months,
      and the roadmap "In Progress" column is 3–5 items.
- [ ] EA month-one review count is treated as a real signal — under 10 reviews
      is a stop-and-reassess, not a "keep going and hope."
- [ ] Nobody is planning on 1.0 to rescue a soft EA launch.
- [ ] DLC is only being planned if base-game revenue cleared the $10K / $150K
      thresholds, and is scheduled as long-tail rather than launch-window.
- [ ] Support surface (Discord `#report-issue` or equivalent) exists and
      someone is actually reading it.

## Sources

- Steamworks Documentation, "Update Visibility Rounds." https://partner.steamgames.com/doc/marketing/visibility/update_rounds — accessed 2026.
- Steamworks Documentation, "Wishlists." https://partner.steamgames.com/doc/marketing/wishlist — accessed 2026.
- Steamworks Documentation, "Early Access." https://partner.steamgames.com/doc/store/earlyaccess — fetched 2026-07-26.
- CD Projekt Red, "Hotfix 1.05," cyberpunk.net official news (2020-12-19). https://cyberpunk.net/en/news/37166/hotfix-1-05 — accessed 2026-07-26.
- Wikipedia, "Stardew Valley" — accessed 2026.
- Discord, "The Game Developer Playbook, Part One: Getting Started on Discord," Nelly (2025-03-17). https://discord.com/blog/the-game-developer-playbook-part-one-getting-started-on-discord — accessed 2026-07-26.
- Buddy Sola (Akupara Games), "Dissecting Discord: How to Set Up an Indie Game Discord Server," Medium (2021-03-10) — accessed 2026-07-26.
- Althera Games, "Steam Early Access: Is It the Right Path for Your Indie Game?" (2026-05-01) — single marketing-agency source.
- howtomarketagame.com, "Should you do Early Access?" (2023-07-27); "Estimating Early Access success" ("zukalous", 2023-08-21); "Benchmark: How much money can you make from DLC?" (2026-03-03) — accessed 2026-07-26.
- Simon Carless, "The surprising way that paid DLC works," GameDiscoverCo (2020-07-13). https://newsletter.gamediscover.co/p/the-surprising-way-that-paid-dlc — accessed 2026-07-26.
- Game World Observer / GameDiscoverCo (Simon Carless), Early Access vs. 1.0 revenue analysis (2025-12-10) — accessed 2026-07-26.
- GameDiscoverCo Newsletter, "How your Steam launch players relate to Week 1 sales!" (2025-05-13) — accessed 2026-07-26.
- Bugnet Blog, "Early Access Bug Management Strategies," Sofia Reyes (2026-03-19). https://bugnet.io/blog/early-access-bug-management-strategies — **uncited generic guidance**.
- Fablesy.com, "How Patch Cycles Vary Between Indie and AAA Titles," Aurora Sharpe (2026-02-13) — **unsourced comparative claims, AI-generated imagery disclosed**.
- script2shorts.app, "Game Devlog Content Strategy" — **content-mill source, uncited**; accessed 2026.

**Marked unverified in this document:** the 24–48h hotfix window and the
60/40 → 50/50 → 40/60 fix-to-feature ratios (single uncited source; the one
verified data point is Cyberpunk's 9-day hotfix); "monthly at best" AAA patch
characterization; devlog cadence figures (content-mill source); the "90% of
2016 EA games never reached 1.0" claim (single source, not cross-verified);
season-pass viability (explicit inference from adjacent DLC data, not a sourced
claim). `partner.steamgames.com` pages show no visible publish date; "fetched"
or "accessed" dates are given instead.
