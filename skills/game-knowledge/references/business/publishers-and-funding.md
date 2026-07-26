# Publishers and Funding

- Median 2025 Steam release earned **$249**; **66%** earned under $1,000 and **40%** never cleared the $100 Steam Direct fee (Gamalytic via 80.lv, 2025-10-22). Plan funding against that distribution, not against the outliers you have heard of.
- Steam cut, tracked per title on lifetime gross: **30%** to $10M, **25%** from $10M–$50M, **20%** above. Valve reported an average **76%** payout across non-Valve games in 2025 (~24% blended).
- Epic Games Store: **0%** on the first $1M net revenue per product per year, then **12%**. Unreal Engine royalty **5%** above $1M/product/year, **3.5%** with a day-one EGS launch.
- The advance is recouped out of your revenue share first; the royalty split applies only after that.
- No "typical" royalty split can be stated as fact. The two publicly disclosed deals diverge in opposite directions — Outersloth 50% pre-recoup / 15% post-recoup and no IP transfer, at a **1.4%** acceptance rate; Indie Fund 25% until 2x the investment or 2 years, then nothing, no clawback.
- Publishers want quantified playtest validation — playtest count, completion rate, specific findings — plus a link to a playable build, not a video. Promises and projections read as risk.
- Kickstarter game funding did not decline after 2018: **443** funded projects and **~$26M** in 2025, with **11** campaigns over $500k, the most since 2015 (ICO Partners, 2026-02-05).

## Basics

### What the market actually pays

The repeatedly confirmed finding across every dataset in this corpus: **the
median outcome for a game released on Steam today is very close to zero.** The
exact percentages move year to year; the shape does not — a few large winners
and a long tail of near-nothing.

2025 releases, January 1 to October 21 (Gamalytic data via 80.lv, 2025-10-22):

| Measure | 2025 |
|---|---|
| Earned less than $1,000 | 66% |
| Did not recoup the $100 Steam Direct fee | 40% |
| Sold fewer than 100 copies | 47.5% |
| Median revenue per game | $249 |
| Mean revenue per game | $358,900 |

The gap between the $249 median and the $358,900 mean is the entire story: the
mean describes a distribution nobody in it experiences.

Trend context from the 2023 Gamalytic cut (GameDiscoverCo, 2023-10-02;
GameDev Reports, 2023-10-04): over 50% of all games ever released on Steam had
grossed under $1,000 lifetime. Of games released in the prior three years,
**76.5%** were under $5k and **5.6%** above $200k. Median revenue for recent
releases was **$700**, rising to **$4,000** once sub-$5 titles are excluded and
**$17,000** once sub-$10 titles are — price tier alone predicts a large part of
the outcome, because near-free pricing correlates with hobbyist projects.
**77%** of Steam games were priced under $10 and only **5%** above $20; over
70% of releases in that window were self-funded, part-time projects.

The **$100 Steam Direct fee** is per product, non-refundable, and recoupable —
Valve credits it back in the payment after the product reaches $1,000 in
Adjusted Gross Revenue (Steamworks, fetched 2026-07-26). That is why "40%
didn't recoup the fee" is a real signal rather than a rounding artifact: those
games never cleared $1,000 gross at all.

### Platform cuts

**Steam**, tracked per game on that title's lifetime gross (not per publisher or
catalog):

| Lifetime gross for the title | Steam's cut |
|---|---|
| First $10M | 30% |
| $10M – $50M | 25% |
| Above $50M | 20% |

Announced 2018 and widely reported at the time; the exact split lives in the
Steam Distribution Agreement rather than a publicly browsable page, so this
rests on well-corroborated secondary reporting, not a live primary quote.
Revenue counted includes game packages, DLC, in-game sales, and Community
Marketplace game fees.

**Epic Games Store**: 100%/0% — Epic takes nothing — on the first **$1M net
revenue per product per year**, then 88%/12% beyond that. The $1M-free tier
reportedly took effect around June 2025. Epic's own program page returned
HTTP 403 in the research pass, so these figures come from secondary reporting.

**Unreal Engine royalty** is separate from the storefront cut and applies
wherever the game sells: baseline **5% of gross above $1M/product/year**, cut to
**3.5%** effective 2025-01-01 for games launching day one on the Epic Games
Store (CG Channel, reporting Epic's October 2024 announcement). A **0% total**
option — no UE royalty and no store cut — exists for UE games sold exclusively
on EGS (announced March 2024, secondary reporting).

Comparison, with a caveat: above $50M lifetime, Steam's 20% marginal rate and
Epic's 12% are in similar territory; at the headline rate the gap is wide (30%
vs 0%-then-12%). The comparison is imperfect because the tiers reset
differently — Steam's are cumulative lifetime, Epic's are annual per product.

**Console cuts** are widely reported near 30% but the agreements are not public
the way Steamworks docs are. **Unverified** — treat as context only.

### How a publisher deal works

The recoup-then-split mechanic is consistent across every source, even though
the specific numbers are not:

1. The publisher fronts an **advance** — development funding, marketing spend,
   or both.
2. The advance is **recouped first**: 100% of the developer's revenue share pays
   it down before any profit split takes effect.
3. Once recouped, remaining revenue splits at the agreed **royalty percentage**.

Treat the general mechanic as reliable and any specific percentage from
SEO/legal-content sites as low-confidence unless corroborated. Terms on IP
ownership, platform exclusivity, cross-collateralization, and audit rights vary
enormously and are usually confidential; there is no reliable aggregated data on
how common each variant is.

### Publisher money vs self-funding

Self-funding keeps whatever the platform does not take and full creative and IP
control, but requires existing runway plus doing or paying for marketing,
localization, QA, and console certification — the services a publisher or fund
typically contributes. Publisher money trades future revenue share, and
sometimes IP or creative control, for capital delivered **before** the game has
proven it can earn anything.

Set that against the distribution above: with roughly two-thirds of Steam
releases earning under $1,000, self-funding without a marketing and distribution
plan carries a real risk of near-zero return no matter how the deal is
structured. The question is not "publisher or independence" in the abstract —
it is which risk you are equipped to carry.

### The pitch

The load-bearing rule: **publishers want quantified playtest validation, not
promises.** A pitch that says "players love it" loses to one that says "34
playtests, 61% reached the second area, the three most common drop-off points
were X, Y, Z." Multiple independent industry-facing sources converge on the same
checklist — concept clarity in one line, a link to a **playable build** rather
than only a video, quantified playtest validation, and a post-launch support
plan — though no single primary practitioner source was found for it in the
2026-07-26 research pass, so treat the checklist as secondary-but-converging.
This is the same standard of evidence the game-review skill applies before a
"playable" claim is accepted; a pitch is that evidence pointed at an external
reader.

From the buyer's side of the table, Brian Upton's GDC 2017 talk "Thirty Things I
Hate About Your Game Pitch" — a veteran designer who had heard hundreds of
pitches — lists what actually kills meetings. The items that hit solo devs
hardest:

- Material that does not bear on whether the game is worth making or whether
  you can make it. Backstory in particular: "the backstory of the game is not
  important."
- Explaining routine features instead of what is genuinely different.
- Asking the publisher questions instead of proposing confident answers —
  "publishers won't design your game for you."
- Demoing the easy parts of a prototype instead of the hard or novel parts, and
  not marking what is placeholder versus final.
- Showing many mediocre art assets instead of one or two great ones.
- Pitching a publisher whose portfolio does not match your genre or platform.
- Unrealistic scope estimates — team size, budget, timeline, content volume,
  playtime.
- Unresolved IP or licensing issues left for the publisher to sort out (see
  `legal-basics.md`).

Most of that list is not about game quality. It is about trust burned through
overclaiming, mismatched targeting, or being underprepared — which kills a pitch
regardless of how good the game is.

## Advanced

### The two publicly disclosed deals

Individual term sheets are almost always confidential. These two are worth more
than any "typical range" claim precisely because the funders published them.

**Outersloth** (funding arm associated with Innersloth, developer of *Among Us*)
published its standard contract after a GDC presentation (mmohuts.com,
2026-03-10):

- **50%** revenue share to Outersloth **before** recoup.
- **15%** to Outersloth **after** recoup — the developer keeps 85% post-recoup.
- Covers all platforms regardless of which platform the funding was tied to.
- Explicitly does **not** take IP rights.
- Scale: **$19,161,040 invested across 24 projects** since 2022, at a **1.4%**
  signing rate (described in the source as slightly above industry average; that
  comparison itself is **unverified**).

**Indie Fund** (indie-fund.com/about, fetched 2026-07-26):

- **25% of revenue** post-launch.
- Continues "until we double the initial investment, or until 2 years after the
  initial launch date, whichever comes first."
- If not recouped at the 2-year mark, the deal **terminates with no further
  obligation** — no clawback, no debt if the game underperforms. This is its
  marketed differentiator against a traditional loan.
- **54 games funded by 19 investors** as of page access, 2026-07-26.

Multiple low-confidence sources cite **50/50 post-recoupment** as the standard.
Both public examples diverge from it in opposite directions — Indie Fund is not
really recoup-then-split-forever (hard 2x/2-year cap, then 0%), and Outersloth's
15% post-recoup is far more developer-favorable. **Honest summary: there is no
single typical publisher royalty split that can be stated as fact.** Terms vary
by developer leverage, budget fronted, exclusivity, and whether IP moves. Treat
any percentage outside these two named examples as indicative at best.

### The "24% blended cut" reconstruction

Valve stated that the revenue share paid across all non-Valve games in 2025
averaged **76%** to developers — an effective ~24% blended cut. GameDiscoverCo's
tier-by-tier reconstruction (2026-03-24):

| Tier | Est. gross revenue | Share of total | Est. Valve take |
|---|---|---|---|
| 30% tier | $3.5B | 23% | ~$1.05B |
| 25% tier | $3.73B | 25% | ~$935M |
| 20% tier | $7.74B | 52% | ~$1.55B |

Total third-party Steam revenue estimated at **$14.98B**, total Steam platform
revenue ~$3.54B, with Valve "forgoing" roughly $960M/year versus a flat 30%.
**Caveat:** the per-tier breakdown is GameDiscoverCo's own reconstruction, not a
figure Valve published — medium confidence, not primary-verified. The practical
read: over half of third-party Steam revenue sits in the 20% tier, so the
blended figure describes large titles, not yours.

### Grants and regional funds

- **Epic MegaGrants — low confidence.** Both primary Epic pages returned HTTP
  403; everything here is secondary. Funds Unreal projects or open-source 3D
  graphics contributions. Reportedly restructured in 2025 from rolling
  applications to two submission windows (reportedly Feb 12–Apr 14 and
  Jul 14–Sep 22). Typical grant **$5,000–$75,000**, up to $150,000
  exceptionally; UEFN projects **$5,000–$250,000**, up to $500,000. Reportedly
  2,000+ awarded to date. **This is the least verified section on this page.**
- **UK Games Fund** (ukgamesfund.com, fetched 2026-07-26): UK non-profit running
  a Prototype Fund and a Content Fund; Content Fund **£100,000–£250,000** for
  commercial entertainment games, open for Expressions of Interest at fetch
  time. Self-reported totals since 2015: 400+ projects funded, £20m distributed.
- **Nordic Game Program**: the program page returned HTTP 404 when checked.
  **Gap** — needs a fresh lookup before relying on it.
- Canada Media Fund, EU national game funds, PlayStation's China Hero Project:
  **not researched** in this pass. Noted as a gap rather than guessed at.

### Kickstarter, and a correction

Game Kickstarter did **not** continue declining after 2018 — a common assumption
the data contradicts (ICO Partners / Thomas Bidaux, 2026-02-05):

| Year | Funded projects | Total raised | $500k+ campaigns |
|---|---|---|---|
| 2018 | 365 (lowest since 2013) | — | — |
| 2024 | 463 (highest on record) | $26M (highest since 2015) | 5 |
| 2025 | 443 (2nd-highest) | ~$26M (flat) | 11 (highest since 2015) |

The $100k+ tier softened slightly (62 projects in 2024 vs 55 in 2025) while the
top tier more than doubled. Bidaux attributes strong 2025 outcomes to campaigns
launching with pre-built follower bases and improved pre-campaign tooling — the
operative lesson being that the audience is assembled **before** the campaign,
not by it. **Gap:** success-rate data (% of campaigns hitting goal) and average
pledge size were not found, so the "harder to succeed, bigger if you do" reading
implied by these numbers is not confirmed.

### Term-sheet items with no public data

These vary enormously, are usually confidential, and have no aggregated
frequency data — meaning you cannot benchmark them, only negotiate them
knowingly:

- **IP ownership** — does anything transfer, and what happens on termination?
- **Exclusivity** — platforms, territories, duration.
- **Cross-collateralization** — can losses on one title be recouped from
  another's revenue?
- **Audit rights** — can you verify the recoup accounting?
- **Marketing spend treatment** — is it part of the recoupable advance or the
  publisher's own cost? This single question can move the recoup date by months.

### Deeper material

- Full sourced treatment with per-claim citations, the dataset provenance notes,
  and the gaps list:
  `../corpus/production-business-live/funding-and-publisher-deals.md`
- Upton's full 30-item pitch list plus other funding/marketing talks:
  `../corpus/gdc-postmortems/pitch-and-marketing-talks.md`
- Entity, tax, and contractor-IP groundwork that a deal assumes is already in
  place: `legal-basics.md` and
  `../corpus/production-business-live/legal-tax-ip-basics.md`
- Per-file confidence ratings for this lane:
  `../corpus/production-business-live/MANIFEST.md`

## Cases

Deal terms for these projects are not public — none of the case files carry
verified contract numbers. Use them for the decision context around funding, not
as evidence about what a deal looks like:

- `../cases/balatro.md` — the unprompted-play signal that makes a validation
  claim credible, which is what a pitch has to carry in numbers.
- `../cases/stardew-valley.md` — a long self-funded solo run before release;
  note the case's own sourcing caveat, since much of it rests on press
  interviews rather than primary documentation.
- `../cases/dwarf-fortress.md` — direct audience funding sustained for years
  before any commercial release, the alternative to both self-funding on savings
  and taking an advance.
- `../cases/studio-practices.md` — runway, pace, and team size, the constraints
  that decide whether you can afford to refuse a deal.

## Checklist

Before you decide you need funding:

- [ ] Budget compared against the median outcome ($249 in 2025), not against a
      success story.
- [ ] Platform cut modeled at the tier you will actually reach (30% for
      essentially all indie titles).
- [ ] Self-funding cost fully counted: marketing, localization, QA, console
      certification — the services a publisher would otherwise supply.
- [ ] Acceptance rates understood: 1.4% at the one funder that published its
      number. Funding is not a plan you can rely on.

Before you pitch:

- [ ] One-line concept that says what is different, not what genre it is.
- [ ] Playable build link ready, not only a video.
- [ ] Playtest validation quantified — number of playtests, completion rate,
      the specific findings and what changed as a result.
- [ ] The hard or novel part of the prototype is what you demo; placeholder
      versus final is marked.
- [ ] Scope estimate you can defend: team size, timeline, content volume,
      playtime.
- [ ] Publisher's portfolio checked for genre and platform fit before the
      meeting.
- [ ] IP and licensing clean, with contractor assignments already signed
      (`legal-basics.md`).

Before you sign:

- [ ] Recoup order confirmed in writing — what is recouped, from whose share,
      and whether marketing spend is inside the recoupable advance.
- [ ] Royalty percentage after recoup, and whether it ever ends (Indie Fund's
      2x/2-year cap is the counterexample to "forever").
- [ ] IP ownership stated explicitly, including what happens on termination.
- [ ] Exclusivity scope: platform, territory, duration.
- [ ] Cross-collateralization checked, especially with more than one title.
- [ ] Audit rights present.
- [ ] A lawyer in your jurisdiction has read it. There is no benchmark to
      compare your terms against, so the wording is the only protection.

## Sources

- 80.lv, *Steam's Getting More Games But Earning Less, Analysts Report* (2025-10-22), citing Gamalytic data via analyst Artur Smiarowski — accessed 2026-07-26.
- GameDiscoverCo (Simon Carless), Gamalytic-sourced Steam revenue distribution (2023-10-02); GameDev Reports Substack tier breakdown (2023-10-04); Game World Observer (2023-10-06) — accessed 2026-07-26.
- Valve, *Steamworks Documentation: Steam Direct*. https://partner.steamgames.com/steamdirect — fetched 2026-07-26. Primary source for the $100 fee and its $1,000 recoup threshold.
- Valve's 2018 tiered revenue-share announcement — via contemporaneous secondary reporting (TechCrunch, ResetEra); the split itself lives in the non-public Steam Distribution Agreement, so the 30/25/20 figures are **not primary-verified**.
- GameDiscoverCo (Simon Carless), *Revealed: the numbers behind Steam's "24% cut" in 2025* (2026-03-24) — accessed 2026-07-26. The 76% payout figure is Valve's; the tier-by-tier table is GameDiscoverCo's own reconstruction and is **unverified**.
- Epic Games Store distribution terms — **unverified**: Epic's program page returned HTTP 403; figures via secondary reporting, accessed 2026-07-26.
- CG Channel, *Epic Games to cut royalty rate on Unreal Engine games* (reporting Epic's October 2024 announcement) — accessed 2026-07-26. The March 2024 0%-total EGS-exclusive option is from secondary reporting, **unverified**.
- mmohuts.com, *Outersloth publishes its standard indie funding contract* (2026-03-10) — accessed 2026-07-26.
- Indie Fund, *About*. https://indie-fund.com/about — fetched 2026-07-26. Primary source for its own terms. PC Gamer's *Inside the Indie Fund* corroborates the framing only; its full text was **not accessible** in this pass.
- ICO Partners (Thomas Bidaux), *Kickstarter and Video Games in 2025*, Medium (2026-02-05). https://icopartners.medium.com — fetched directly 2026-07-26.
- UK Games Fund. https://ukgamesfund.com — fetched 2026-07-26. Totals are self-reported running figures, not tied to a dated release.
- Epic MegaGrants — **unverified**: primary pages returned HTTP 403; description reconstructed from secondary sources (hellodarwin.com, gamesmarket.global) and not independently cross-checked.
- Nordic Game Program — **gap**: nordicgame.com/nordic-game-program/ returned HTTP 404 when checked 2026-07-26.
- Brian Upton, *Thirty Things I Hate About Your Game Pitch*, GDC 2017. https://www.gdcvault.com/play/1023998/Thirty-Things-I-Hate-About — accessed 2026-07-26. Speaker attribution confirmed via GDC Vault listing and official slide filename; content summarized from a detailed third-party recap rather than a primary transcript, so item wording is **near-complete but not verbatim**.
- Publisher pitch expectations (playable build, quantified playtest validation, post-launch plan) — **secondary-converging, no primary source**: Barclays Games and Creative, Spiral Up Games, FirstLook.gg, per the 2026-07-26 research pass.
- Console platform revenue cuts — **unverified**, agreements are not public.
