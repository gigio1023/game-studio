# Indie Game Funding, Platform Cuts, and Publisher Deal Structures

Research pass compiled 2026-07-26. Revenue-distribution and funding numbers
in this space update constantly and are frequently confidential (individual
publisher deal terms especially). Every claim below is dated to its source;
anywhere a number is a range, an estimate, or not independently verifiable,
that is stated explicitly rather than presented as clean fact.

## 1. Revenue math for solo/small indie devs

The core, repeatedly-confirmed finding: **the median outcome for a game
released on Steam today is very close to zero revenue.** Exact percentages
move year to year, but the shape — a small number of large winners, a long
tail of near-zero outcomes — is consistent across every dataset found.

### Most recent (2025) data

80.lv, "Steam's Getting More Games But Earning Less, Analysts Report"
(published **2025-10-22**, citing Gamalytic data via analyst Artur
Smiarowski; covers releases Jan 1 – Oct 21, 2025):

- **66% of 2025 releases earned less than $1,000.**
- **40% did not recoup the $100 Steam Direct fee** (see below for what that
  fee is).
- **47.5% sold fewer than 100 copies.**
- Total tracked 2025 revenue: **$4.7 billion**, lowest since 2020 despite
  more releases than the prior year.
- **Median revenue per game: $249** — second-lowest in the six-year window
  Gamalytic tracked (mean was $358,900, illustrating the top-heavy skew).

A near-identical framing of the same dataset elsewhere cites "65.9% of 2025
releases (8,388 games) earned less than $1,000" — consistent with the 80.lv
figure within normal snapshot-date variance; both trace to Gamalytic's
running Steam dataset. Safe summary: **roughly two-thirds of 2025 releases
earned under $1,000.**

### Prior benchmark (2023) — trend context

GameDiscoverCo (Simon Carless), citing a Gamalytic infographic, published
**2023-10-02**: **over 50% of all games ever released on Steam have grossed
less than $1,000 lifetime.** A companion GameDev Reports Substack analysis
(**2023-10-04**, same Gamalytic dataset) breaks it down further:

| Cohort | <$5k | $5k–$50k | $50k–$200k | >$200k |
|---|---|---|---|---|
| All Steam games (all-time) | 67% | 17.2% | 6.9% | 8.9% |
| Released in prior 3 years only | 76.5% | 13.4% | 4.5% | 5.6% |

Median revenue for recent releases: **$700** (excl. free games); rises to
**$4,000** excluding sub-$5 titles, and **$17,000** excluding sub-$10 titles
— pricing tier alone strongly predicts revenue outcome, since near-free
games skew hobbyist. Same piece: **77%** of Steam games are priced under
$10; only **5%** above $20. Separately, Game World Observer (**2023-10-06**,
same dataset): over **41,000 games** released in the prior 3 years =
**58%** of all live Steam games at the time, and **>70%** of releases in
that window are "hobbyist projects" — self-funded, part-time.

**Data source note:** "VG Insights" now redirects to `app.sensortower.com/vgi`
— apparently acquired/rebranded under Sensor Tower as "VGI." This pass could
not pull dataset figures directly from that page (redirect required app
access); Gamalytic-sourced figures above are the load-bearing dataset
instead.

### The $100 Steam Direct fee, and its recoupment mechanic

Per live Steamworks documentation (partner.steamgames.com/steamdirect,
fetched 2026-07-26): publishing on Steam requires a **$100.00 USD
non-refundable fee per product**. It is, however, **recoupable** — Valve
states it "will be recoupable in the payment made after your product has at
least $1,000.00 USD Adjusted Gross Revenue." That's why "40% of 2025
releases didn't recoup the $100 fee" is meaningful, not a rounding
artifact: it means those games didn't clear $1,000 gross at all.

## 2. Platform revenue cuts

### Steam: tiered 30% / 25% / 20%

Tracked **per game, on lifetime gross revenue for that title** (not per
publisher/catalog):

- **30%** Steam cut on the first $10M lifetime gross.
- **25%** on the portion between $10M and $50M.
- **20%** on the portion above $50M.

Widely reported at the time of Valve's original announcement (Source:
contemporaneous tech press, e.g. TechCrunch/ResetEra coverage, **2018**;
exact Oct 2018 effective date is the commonly cited figure but not
re-verified directly against Valve's original post in this pass). Revenue
counted: "game packages, DLC, in-game sales, and Community Marketplace game
fees" per secondary reporting. The exact split lives in Valve's Steam
Distribution Agreement, not a page freely browsable on partner.steamgames.com
without a partner login — unlike the discount/pricing rules in the
companion file, this figure relies on well-corroborated secondary reporting,
not a live primary-source quote.

**2025 breakdown, the "24% effective cut."** GameDiscoverCo (Simon Carless),
"Revealed: the numbers behind Steam's '24% cut' in 2025" (**2026-03-24**):
Valve stated the revenue share paid out across all non-Valve games in 2025
averaged **76%** to developers — an effective **~24% blended cut**.
GameDiscoverCo's own tier-by-tier estimate:

| Tier | Est. gross revenue | Share of total | Est. Valve take |
|---|---|---|---|
| 30% tier | $3.5B | 23% | ~$1.05B |
| 25% tier | $3.73B | 25% | ~$935M |
| 20% tier | $7.74B | 52% | ~$1.55B |

Total third-party Steam revenue estimated at **$14.98B**; total Steam
platform revenue **~$3.54B**. GameDiscoverCo frames Valve as "forgoing"
roughly **$960M/year** vs. a flat 30% rate. **Caveat:** this per-tier
breakdown is GameDiscoverCo's own reconstruction, not a number Valve
published tier-by-tier — medium confidence, not primary-verified.

### Epic Games Store

Standard **Distribution** revenue share (Epic's own program page returned
HTTP 403 to direct fetch in this pass; figures below are from secondary
reporting that quotes/paraphrases it): **100%/0%** (Epic takes nothing) on
the **first $1M net revenue per product per year**, then **88%/12%**
beyond that. The $1M-free tier reportedly took effect **~June 2025**
(Source: secondary reporting on Epic eliminating fees for smaller devs;
exact original publish date not independently confirmed — approximate).

**Unreal Engine royalty** (separate from the storefront cut, applies
regardless of where the UE game is sold): baseline **5% of gross revenue
above the first **$1M in lifetime worldwide gross revenue per product** (not per year — corrected 2026-07-26 against https://www.unrealengine.com/release; the per-year figure belongs to the Epic Games Store revenue-share waiver, a separate rule). Epic announced a cut to **3.5%**,
effective **January 1, 2025**, contingent on day-one launch on the Epic
Games Store (Source: CG Channel, reporting Epic's **October 2024**
announcement). Separately, **March 2024**: a **0% total** option (no UE
royalty, no store cut) for UE games sold **exclusively** on the Epic Games
Store (secondary reporting, cross-checked 2026-07-26).

**Comparison framing:** above $50M lifetime, Steam's 20% marginal cut and
Epic's 12% cut (above $1M/yr) are close; Steam's headline rate (30%) is
materially higher than Epic's (0% under $1M, then 12%). Direct comparison
is imperfect — the tiers reset differently (Steam: cumulative lifetime;
Epic: annual per-product).

### Console cuts (context only, low confidence)

Widely reported as similar to Steam's **~30%** neighborhood, but console
agreements aren't public the way Steamworks docs are. **Not independently
verified in this pass — flagged as a gap.**

## 3. Publisher deal structures

General recoup-then-split framing appears consistently across secondary
legal/business-advice sites aimed at indie devs (legalmoveslawfirm.com,
contractable.ai, blazetrends.com, gamedevproducer.com — SEO-oriented
content, not primary sources; treat the *general mechanic* as reliable, any
*specific percentage* from these sites as low-confidence unless
corroborated elsewhere):

- Publisher fronts an **advance** (dev funding and/or marketing spend).
- Advance is **recouped first** — 100% of the developer's revenue share pays
  down the advance before any profit split applies.
- Once recouped, remaining revenue splits by an agreed **royalty
  percentage**.
- Terms on IP ownership, platform exclusivity, cross-collateralization, and
  audit rights vary enormously and are usually confidential — no reliable
  aggregated data found on how common each variant is.

### Two concrete, publicly documented examples

Individual term sheets are almost always confidential, so this brief
prioritizes two examples the funders **voluntarily made public**, rather
than repeating unverifiable "typical range" claims as fact.

**Outersloth** (funding arm associated with Innersloth, *Among Us*
developer) published its standard contract after a GDC presentation
(Source: mmohuts.com, **2026-03-10**):
- **50%** revenue share to Outersloth **before** recoup.
- **15%** to Outersloth **after** recoup (developer keeps 85% post-recoup).
- Covers **all platforms**, regardless of which platform funding was tied
  to originally.
- States it does **not** take IP rights.
- Scale: **$19,161,040 invested across 24 projects** since 2022; **1.4%**
  signing/acceptance rate (described as "slightly above industry average"
  in the source — that comparison figure itself not independently sourced
  here).

**Indie Fund** (Source: indie-fund.com/about, fetched 2026-07-26; framing
corroborated by PC Gamer, "Inside the Indie Fund: a better deal for
developers" — full article text wasn't accessible this pass, so treat as
corroboration only, not a source of numbers):
- **25% of revenue** to Indie Fund post-launch.
- Continues **"until we double the initial investment, or until 2 years
  after the initial launch date, whichever comes first."**
- If not recouped by the 2-year mark, the deal **terminates with no further
  obligation** — no clawback or debt if the game underperforms. This is
  Indie Fund's marketed key differentiator vs. a traditional loan.
- As fetched: **54 games funded by 19 investors** (no dated press release
  behind this count — current as of page access, 2026-07-26).
- Positions itself as "a serious alternative to the traditional publisher
  funding model," run as an investment syndicate.

### On "typical" royalty split ranges generally

Multiple SEO/legal-content sites (low confidence) cite **50/50
post-recoupment** as a commonly-referenced standard. The two public
examples above diverge in opposite directions: Indie Fund isn't really
"recoup-then-split-forever" (hard 2-year/2x cap, reverts to 0% after),
while Outersloth's post-recoup 15% is more developer-favorable than the
cited 50/50 point. **Honest summary: there is no single "typical" publisher
royalty split that can be stated as fact.** Terms vary by developer
leverage, how much budget the publisher fronted, exclusivity, and whether
IP changes hands — most real deals are never made public. Treat any
percentage outside the two named examples as indicative at best.

## 4. Funding routes

### Epic MegaGrants

**Status: low confidence.** Both `epicgames.com/megagrants` and
`dev.epicgames.com/en-US/community/megagrants` returned HTTP 403 to
automated fetch. Description below is reconstructed from secondary sources
only (hellodarwin.com, gamesmarket.global; search synthesis, not direct
fetch):

- Funds Unreal Engine projects or contributions to the open-source 3D
  graphics ecosystem, aimed at smaller teams/solo devs/innovative projects.
- Reportedly restructured in **2025** from continuously-open applications to
  **two submission windows** (reportedly Feb 12–Apr 14 and Jul 14–Sep 22).
- Typical grant: **$5,000–$75,000**, up to **$150,000** exceptionally.
- UEFN projects specifically: **$5,000–$250,000**, up to **$500,000**
  extraordinarily.
- Reportedly **over 2,000 MegaGrants** awarded to date.

This section carries the **lowest confidence in this brief** — primary
source inaccessible, secondary sources not independently cross-verified
beyond general agreement on the shape of the numbers.

### Regional / other funds

- **UK Games Fund** (Source: ukgamesfund.com, fetched 2026-07-26,
  redirected from ukgamesfund.co.uk): UK non-profit (UK Games Talent and
  Finance CIC) running a **Prototype Fund** and a **Content Fund**. Content
  Fund: **£100,000–£250,000** for commercial games-for-entertainment
  content, listed "open for Expressions of Interest" at fetch time. Since
  founding in **2015**: **400+ projects funded**, **£20m** distributed
  total, "8,000 members," "1,500+ applications" — self-reported running
  totals, not tied to a single dated release.
- **Nordic Game Program** — checked directly; `nordicgame.com/nordic-game-program/`
  returned **HTTP 404**. **Flagged as a gap** — needs a fresh targeted
  lookup before relying on it.
- Other commonly-referenced funds (Canada Media Fund, various EU national
  game funds, PlayStation's China Hero Project) — **not researched in this
  pass**, noted as a gap rather than guessed at.

### Publisher funding vs. self-funding — the tradeoff

Synthesis, not a single citation: self-funding keeps 100% of whatever
revenue share the platform doesn't take (Section 2) and full creative/IP
control, but requires existing runway plus handling or paying for
marketing, localization, QA, and console certification — services a
publisher or fund typically contributes as part of the deal. Publisher/fund
money trades away future revenue share (sometimes IP or creative control,
Section 3) for that capital up front, before the game has proven it can
earn anything. Given Section 1 — roughly two-thirds of Steam releases
earning under $1,000 — self-funding without a marketing/distribution plan
carries real risk of near-zero return regardless of deal structure.

### Crowdfunding realities: Kickstarter, post-2020

Source: ICO Partners (Thomas Bidaux), "Kickstarter and Video Games in
2025," Medium, published **2026-02-05** — the annual-report source named in
this task's brief, fetched directly:

| Year | Funded projects | Total raised | $500k+ campaigns |
|---|---|---|---|
| 2018 | 365 (lowest since 2013) | — | — |
| 2024 | 463 (highest on record) | $26M (highest since 2015) | 5 |
| 2025 | 443 (2nd-highest) | ~$26M (flat vs. 2024) | **11** (highest since 2015) |

The **$100k+ tier** saw 62 projects in 2024 vs. 55 in 2025 — a modest
pullback in the upper-middle tier even as the top tier ($500k+) grew
sharply. Bidaux attributes strong 2025 outcomes to campaigns launching with
pre-built follower bases and Kickstarter's improved pre-campaign tooling.

**Correction to a common assumption:** this task's brief anticipated "the
well-documented decline in average game Kickstarter success post-2015/
2018." The *project-count* data actually shows a **trough around 2018**
(365, lowest since 2013) followed by **recovery to record or near-record
levels by 2024–2025**, not continued decline. Not found in this pass:
*success-rate* data (% of campaigns hitting goal) or *average pledge size*
trends — the metrics that would confirm or refute a "harder to succeed,
bigger if you do" narrative implied by the 9→11 $500k+ jump alongside a
flat-to-down mid-tier. **Flagged gap.**

## Sources consulted

- 80.lv, "Steam's Getting More Games But Earning Less, Analysts Report" (2025-10-22, citing Gamalytic/Artur Smiarowski)
- GameDiscoverCo (Simon Carless), Gamalytic-sourced Steam revenue distribution (2023-10-02); GameDev Reports Substack tier breakdown (2023-10-04); Game World Observer, "41k games released..." (2023-10-06)
- Steamworks Documentation, "Steam Direct" — partner.steamgames.com/steamdirect (fetched 2026-07-26)
- GameDiscoverCo (Simon Carless), "Revealed: the numbers behind Steam's '24% cut' in 2025" (2026-03-24)
- TechCrunch / ResetEra, secondary reporting of Valve's 2018 tiered revenue-share announcement
- CG Channel, "Epic Games to cut royalty rate on Unreal Engine games" (reporting Oct 2024 announcement); secondary reporting on Epic's $1M-free revenue tier (~mid-2025)
- mmohuts.com, "Outersloth publishes its standard indie funding contract..." (2026-03-10)
- indie-fund.com/about (fetched 2026-07-26); PC Gamer, "Inside the Indie Fund" (framing only)
- ukgamesfund.com (fetched 2026-07-26)
- ICO Partners (Thomas Bidaux), "Kickstarter and Video Games in 2025," Medium (2026-02-05)
- Epic MegaGrants — secondary sources only (hellodarwin.com, gamesmarket.global); primary Epic pages returned HTTP 403
