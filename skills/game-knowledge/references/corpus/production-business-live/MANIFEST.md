# MANIFEST — Production, Business, and Live-Ops Corpus

Date compiled: 2026-07-26
Mission: build a dense, sourced knowledge corpus on game production method, business,
and platform mechanics for a future agent-skill knowledge library. Knowledge ingestion,
not skill authoring — nothing under `game-studio/` was touched.

9 files, 2,016 lines total. Every claim inside each file carries an inline
`(Source, Date)` citation; unverifiable or folklore claims are explicitly flagged as
such rather than stated as fact. Where a 2026-vintage source is cited, treat "2026" as
the source's actual publish date (fetched live via WebSearch/WebFetch during this
session), not a placeholder.

---

## Files and confidence

| File | Lines | Confidence | Core content |
|---|---|---|---|
| `cerny-method-and-preproduction.md` | 239 | medium-high | Mark Cerny's Method (2002 D.I.C.E. debut, sourced to a dated Gamasutra report), pre-production vs. production doctrine, ~30%-of-budget pre-production allocation, "publishable first playable" definition, risk-first prototyping with 5 named practitioners + God of War (2018) camera example |
| `milestones-and-slices.md` | 244 | medium | First Playable/Alpha/Beta/Content Complete/Code Freeze/Gold/Cert definitions (sourced to David Mullich's 2011 contract-negotiation writeup), vertical vs. horizontal slice economics, "cut 50%" scoping folklore honestly marked as folklore with no primary source found |
| `agile-scrum-for-games.md` | 209 | high | Built on 3 strong named/dated sources: Clinton Keith "Beyond Scrum" (2008, 56%-cost-improvement claim), Joost van Dongen "Why Scrum is fundamentally broken" (2014), Rob Sandberg "Beyond Scrum" (2026); Scrumban as documented hybrid |
| `steam-visibility-mechanics.md` | 283 | medium-high | Wishlist vs. follow mechanics, contested wishlist→algorithmic-visibility question (Valve says no, analysts say velocity feeds specific widgets), Popular Upcoming threshold moving ~7,000→~100,000 wishlists in 2026, Next Fest history/eligibility/benchmarks, Valve's official demo guidance |
| `wishlists-and-launch-math.md` | 226 | high (conversion/review data); medium (launch-week section) | Wishlist-to-sales conversion tracked across 4 dated snapshots (2020→Dec 2024→Oct 2025→mid-2026), full Steam review-score threshold table (70%/500-review cliff points), Valve's review-integrity changelog (2016/2019/2025), Day-1-CCU-to-Week-1-sales multiplier (21.8x median) |
| `pricing-and-discount-rules.md` | 270 | high | Live-fetched from partner.steamgames.com: 3 triggers for the 30-day discount cooldown (Jan 2023 change from 28→30 days), exact discount limits (10-95% standard, 10-40% launch), full 7-rule official Early Access doctrine, regional-pricing mechanics (37 currencies/4 region groups); caught and flagged a real 90%-vs-95%-cap discrepancy across doc versions |
| `funding-and-publisher-deals.md` | 302 | medium-high | Steam revenue distribution (Gamalytic/GameDiscoverCo: ~2/3 of 2025 releases earned under $1,000), tiered 30/25/20% Steam cut, 2 real disclosed deal examples (Outersloth/Innersloth, Indie Fund) instead of a fabricated "typical split"; **ICO Partners Kickstarter data contradicts the brief's assumed post-2015 decline** — project counts recovered to record highs by 2024-2025, flagged explicitly as a correction |
| `legal-tax-ip-basics.md` | 143 | high | US entity comparison (sole prop/LLC/S-corp, ~$80K S-corp breakeven), self-employment tax + quarterly estimated tax mechanics, primary-source-confirmed Steam VAT/marketplace-facilitator remittance (60+ countries), R&D tax credit (IGDA-sourced), copyright vs. trademark, contractor IP assignment pitfalls; not-legal-advice flag repeated at every section |
| `post-launch-operations.md` | 100 | medium | Patch cadence (dated Cyberpunk 2077 hotfix example + Stardew Valley long-tail case), Discord setup (Discord's own official guidance + named studio Akupara Games account), Steam Update Visibility Rounds and wishlist-notification mechanics (primary Steamworks source), DLC attach-rate data from 2 dated analyses (Carless/GameDiscoverCo 2020; howtomarketagame.com 2026 tier survey) |

---

## Coverage against the original brief

**Covered in depth:**
- Cerny Method, pre-production/production doctrine, risk-first prototyping
- Publisher milestone definitions, vertical/horizontal slice economics
- Agile/scrum adaptations and documented failure modes for games
- Steam wishlist mechanics, visibility rounds, Discovery Queue, Next Fest, demo practice
- Follower:wishlist ratios and wishlist-to-sales conversion (multi-year trend, not single snapshot)
- Steam review score bands, thresholds, and why velocity matters
- Steam discount cooldown rules (28→30-day rule), regional pricing, Early Access doctrine
- Revenue math / indie outcome distribution, platform cuts, publisher recoup/royalty structure examples
- Funding routes: publisher funding, Indie Fund terms, Kickstarter trend data (with the correction above)
- US entity/tax/IP basics for solo devs, contractor IP assignment
- Patch cadence practice, Discord/community minimal practice, DLC/edition economics

**Partially covered / flagged as gaps inside individual files:**
- "Cut 50%" scoping folklore — no primary source traced despite dedicated search
- Universal AAA pre-production duration — no single verifiable industry-wide figure
- Epic MegaGrants — primary page returned 403; only secondary-source coverage
- Console platform cuts (Xbox/PlayStation/Switch) beyond a brief Steam-vs-Epic comparison
- Season pass viability at indie scale — no sourced data found, explicitly flagged as inference-only
- Devlog cadence — weakest-sourced subsection in the corpus, resting on a single content-mill-tier source
- itch.io's VAT-handling specifics — page returned 404, left unverified rather than guessed

**Not covered (out of the researched scope, would need a dedicated pass):**
- Non-Steam storefront mechanics in comparable depth (Epic Games Store, GOG, console eShops)
- Detailed console certification/cert-pass process specifics beyond the general concept
- Non-US tax/entity regimes in comparable depth to the US-centric section

## Sourcing method notes

- Two of the four research passes hit a shared WebSearch call budget partway through and
  fell back to WebFetch against known URLs rather than fresh search for their later
  sections — this is noted inline in the affected files (`cerny-method-and-preproduction.md`,
  `steam-visibility-mechanics.md`) rather than silently degrading quality.
- Multiple 2026-vintage SEO/content-mill sites were encountered during research
  (`gamineai.com`, `strayspark.studio`, `script2shorts.app`, `fablesy.com`, `bugnet.io`).
  Where used, they are explicitly flagged in-file as "commonly repeated, not
  independently verified" rather than cited as authoritative.
- Primary sources used most heavily: `partner.steamgames.com` (Steamworks docs, fetched
  live), GameDiscoverCo (newsletter + Substack posts, individually dated), IGDA resource
  pages, howtomarketagame.com (Chris Zukowski / "Zukalous"), named developer postmortems
  and GDC-adjacent talks.
- Every file ends with (or inlines) a "Notable gaps / unverified items" note rather than
  presenting a fully-solved picture.
