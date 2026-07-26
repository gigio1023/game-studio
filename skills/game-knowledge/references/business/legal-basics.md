# Legal, Tax, and IP Basics

- Not legal or tax advice. Entity, tax, and IP rules **vary by jurisdiction**; the sourced material below is US-centric with EU VAT notes, and does not transfer to Canada, the UK, Korea, or elsewhere.
- Signed IP assignment before any contractor starts. By default the contractor owns what they made even though you paid for it, and "work made for hire" wording alone can fail (US: 9 statutory categories only, 17 U.S.C. §101) — pair it with an explicit fallback assignment clause.
- Hobby-vs-business tax status turns at first revenue, not at launch (**varies by jurisdiction**).
- Copyright is automatic at creation and protects expression, not mechanics or genre. US registration ($45 single-author online / $65 standard online / $125 paper) is what makes litigation and DMCA takedowns practical.
- Trademark covers title, studio name, and logo only. US process ~12 months, filable up to 3 years pre-release, reportedly rejected on first pass over 80% of the time.
- US self-employment tax 15.3% of net; quarterly estimates once you expect to owe $1,000+ for the year; tax applies to profit, not revenue (**varies by jurisdiction**).
- Marketplace facilitators collect and remit sales tax/VAT for you — Valve does this in 60+ countries. Selling direct moves that compliance onto you.

## Basics

### Read this first

Every section here is general-principle education, not advice. Business entity
law, tax law, and IP law are **jurisdiction-dependent**. The purpose of this
doc is to let a solo or small-team developer walk into a conversation with a
real accountant or lawyer already knowing which questions matter — not to
replace that conversation. The jurisdiction marker is repeated at each section
because the stakes (personal liability, tax penalties, lost IP) are high enough
that it should not be skimmed past once and forgotten.

Two items on this page are one-way doors — cheap to handle in advance, very
expensive to fix after the fact:

1. **Contractor IP assignment.** Missing it can mean you do not own your own
   game.
2. **First revenue.** It changes your tax obligations whether or not you notice.

Everything else on this page is optimization.

### Contractor IP: the default trap

By default, an independent contractor owns the IP they create — even work you
commissioned and paid for — unless a written agreement explicitly transfers
those rights to you (Trademarkia, accessed 2026-07-26; corroborated by Revision
Legal, 2016).

The same trap catches informal collaboration. Game/IP lawyer Jacob Vela's
framing of the common indie case: when a group of friends makes a game together
with no formal agreement, the default answer to "who owns the IP" is *all of
them* — joint, ambiguous ownership, not clean ownership by whoever was in
charge. His summary: "Contracts aren't about trust; they're about clarity and
preventing misunderstandings that destroy partnerships" (freakingcoolindies.com
interview, accessed 2026-07-26).

**"Work made for hire" language alone is not enough.** Under US copyright law
(17 U.S.C. § 101), independent-contractor work automatically qualifies as work
made for hire only if it falls into one of nine specific statutory categories,
and commissioned game code or art frequently does not fit any of them. Courts
have ruled against the hiring party where a contract used work-for-hire wording
for work outside those categories and had no separate assignment clause as a
fallback — the contractor kept rights the studio believed it had bought
(Revision Legal, 2016).

The fix is structural, not a matter of stronger wording: state that (1) to the
extent the work qualifies as work made for hire under §101, it is one; and
(2) to the extent it does not, the contractor irrevocably assigns all right,
title, and interest to the studio. You are then covered either way.

Timing rule: **the contract is in place before work starts, not after.** This is
the cheapest risk reduction available to a small studio relative to the cost of
a later ownership dispute with a former collaborator.

### Hobby vs business: first revenue is the trigger

The decision point is **first revenue, not launch** — the moment money comes in,
your project has a tax character whether or not you have filed anything. Waiting
until launch, or until an accountant asks, is how the classification gets made
for you (Game Developer, "Indie Developer tax issues: Is game development your
hobby or your business?" — the strongest game-industry-specific source found in
the 2026-07-26 research pass; the detailed jurisdictional tests that separate
hobby from business were **not** verified in that pass, so treat the test
itself as a question for a professional).

**Varies by jurisdiction.** What the classification changes — deductibility of
expenses, filing obligations, which forms apply — differs by country and, in the
US, by state.

### What copyright gives you for free

Copyright attaches **automatically the moment you create the work** — no
registration required for the protection to exist. It covers art, code, sound,
music, story, and characters as actually expressed (Vela interview, accessed
2026-07-26).

The limitation that matters most in practice: copyright protects **specific
expression, not ideas or mechanics**. Vela's example — "The idea of platforming
isn't protectable, but Super Mario Brothers' specific expression is." You cannot
copyright "a deckbuilder" or "a battle royale," only your art, your code, and
your narrative content. Clone anxiety is usually not a copyright question.

Registration is still worth doing even though protection exists without it: per
Vela it is "cheap and easy to do yourself," and it is what actually enables
litigation and DMCA-style takedowns. Current US Copyright Office fees: **$45**
for the cheapest tier (single author, single work, not for hire, filed online),
**$65** standard online, **$125** paper (copyright.gov fee schedule, accessed
2026-07-26). **Varies by jurisdiction** — registration systems and their effects
differ by country.

### What trademark costs you

Trademark covers **branding**, not the creative work: your game's title, your
studio's name, your logo. Unlike copyright it requires active registration and
active enforcement to have teeth.

Reported US registration mechanics: the process commonly takes **about
12 months**; you can file up to **three years before release** as an
intent-to-use filing; applications reportedly face examiner rejection on first
pass **over 80% of the time**, requiring a response (Mekiplaw guide, accessed
2026-07-26 — single-source, and the same guide's claim that using an attorney
raises success odds "over 50%" is **unverified** marketing-adjacent copy).
Exact current USPTO filing fees were **not confirmed** in the research pass —
check uspto.gov before budgeting.

Decision framing: registration is **not mandatory**. Without it you have no
exclusive federal rights and cannot easily stop a copycat using a confusingly
similar name — but you also save the cost and the ongoing policing burden. The
real question is whether the title or studio name is a durable brand asset
(sequels, merchandise, a studio identity reused across games) or a one-off. A
single game with no sequel plans is a weak case for trademarking.

### Entity: do you need an LLC?

**US-centric; entity types and their tax treatment differ by country.**

- **Sole proprietorship** is what you already are if you have done nothing: no
  paperwork, no formation cost, profit and loss flow to your personal return. No
  separation between you and the business — you are personally liable for
  business debts and claims — and outside investors generally prefer a formal
  entity (Kreonit, 2024).
- **LLC** keeps pass-through taxation while adding a liability shield between
  personal assets and business claims, and can be single-member, replacing a
  sole proprietorship one-for-one in most US states (Kreonit, 2024; Adobe,
  undated). Costs: still full self-employment tax on profit, state filing and
  renewal fees, administrative overhead.
- **Corporation (C-corp)** enables raising capital via stock, which matters if
  outside investment is the goal, at the price of double taxation and more
  administration (Kreonit, 2024).

The commonly reported pattern — a pattern, not a rule — is sole proprietorship
while starting small, LLC once liability protection is worth the paperwork,
corporation once revenue is large and steady or investment is the goal. What
actually decides it: your state, revenue stability, whether you have
contractors or co-founders, and liability exposure (a multiplayer or UGC game
carries more than a solo singleplayer premium title).

## Advanced

### What an assignment clause has to cover

Per Revision Legal (2016) plus general contractor-IP guidance, six elements:

1. **Explicit assignment language**, with the work-for-hire clause as a
   secondary layer rather than the only one.
2. **Precise deliverable definitions** — name specific assets, files, or
   systems; vague descriptions create room to argue about what was assigned.
3. **Derivative-works coverage** — the right to modify, extend, and build
   sequels or expansions on the contracted work, not just the delivered asset.
4. **Pre-existing IP carve-out** — separate what the contractor already owned
   (a sound library, a proprietary shader, a store-bought package) from newly
   created assignable work.
5. **Moral-rights waiver**, especially for international contractors.
6. **Category-specific coverage** — source code, art, audio, and monetization
   or LiveOps systems named separately rather than assumed under one blanket
   clause.

### Moral rights and international contractors

Many countries recognize inalienable **moral rights** (attribution, objection to
derogatory treatment) that survive a US-style copyright assignment, so a
contractor in such a jurisdiction may retain certain rights at home regardless
of what a US contract says (Revision Legal, 2016). This is not an edge case: it
is the normal situation when a solo dev hires a freelance artist or composer
overseas. A waiver reduces but does not always eliminate the exposure.
**Varies by jurisdiction** — this one varies on the *contractor's* side.

### Trademark distinctiveness

Trademark strength depends on distinctiveness, usually explained via the
Abercrombie spectrum (per the Vela interview): generic terms get no protection;
descriptive names are weak and must earn secondary meaning; suggestive names
(Electronic Arts, Street Fighter) are registerable; arbitrary names (Valve,
Bungie — real words used unrelatedly) are strong; fanciful invented names
(Pokemon, Sega) are strongest. Practical consequence for naming a game: aim
arbitrary or fanciful, and search the trademark database before committing to a
title — a name you have to abandon after announcement costs more than the search.

### S-corp election and the ~$80K breakeven (US only)

An S-corp is a tax *election*, not an entity type. Mechanism: the owner becomes
a W-2 employee of their own company, takes a "reasonable salary," and the
remaining profit is distributed without self-employment tax.

Reported breakeven: **roughly $80,000 in annual net profit** is where savings
commonly start to exceed added compliance cost. Illustrative figures from the
same source: ~$3,656/year saved at $80K profit with a $50K salary; ~$6,245 at
$120K/$70K; ~$8,954 at $150K/$80K (OneBridge Accounting, 2026 — single source,
illustrative, and actual savings depend on what counts as a "reasonable salary,"
which is judgment-dependent and audit-exposed).

Costs: year-round payroll processing, two annual filings instead of one, federal
unemployment tax (reported up to ~$420/year), potentially reduced future Social
Security benefits, and roughly **$2,000–$4,000/year** in added accounting cost.
The same source flags that highly irregular income — exactly the launch-month
revenue spike shape of a game studio — makes the payroll overhead harder to
justify in lean years.

### R&D tax credits (US)

- Federal credit can recover up to **10%** of qualified research expenses;
  roughly **39 states** offer their own programs recovering up to **12%** in
  some states (IGDA, 2022).
- Startup provision under the PATH Act: offset **payroll** taxes up to
  **$250,000/year** with unused credits if gross receipts are under $5 million
  in the credit year and the company has five or fewer years of gross receipts —
  directly relevant to an early-revenue studio that owes little income tax but
  has payroll (IGDA, 2022).
- Qualifying work spans the dev cycle: technical feasibility, engine and tooling
  work, gameplay systems, UI/sound/character design, alpha/beta testing,
  deployment optimization. Qualifying expenses include developer/QA wages,
  non-depreciable supplies (dev kits, VR headsets, test devices), cloud compute,
  and **65%** of contracted-out development.
- Three-year retroactive lookback for credits not claimed in prior returns.
- Whether your specific work qualifies, and whether substantiating it is worth
  the accounting cost, is a CPA question. **Varies by jurisdiction.**

### Selling direct: the VAT/sales-tax surface you inherit

Sell only through Steam, console stores, or similar marketplace facilitators and
the platform is the party responsible for collecting and remitting consumption
tax. Valve's Steamworks docs state Steam collects VAT/GST/JCT in **60+
countries** (rates seen roughly 5%–27%: Germany 19%, UK 20%, Japan 10%,
Australia 10%) and remits it periodically to the authorities. Steam pricing is
VAT-inclusive where Steam collects; US and Canadian sales tax is added on top of
the listed price. Developer payouts are computed on Net Revenues, with collected
taxes among the "Applicable Adjustments" — meaning the tax passes through
Valve's books, never yours (Steamworks Taxes FAQ, accessed 2026-07-26).

Sell direct from your own storefront and you inherit that compliance yourself.
Scale of what you are taking on, using the EU as the example: the VAT One Stop
Shop (OSS), in force since 2021-07-01 and replacing the earlier MOSS (2015),
lets a business register once and file a single quarterly return covering VAT
owed to all member states instead of registering in each one. A commonly cited
**€10,000/year** cross-border threshold lets you keep applying your home rate
below it — confirm against the official europa.eu page, since thresholds change
(European Commission OSS page, accessed 2026-07-26; threshold figure from
secondary sources, **unverified** against the primary page).

This is the real reason many solo devs avoid direct sales even though the
platform cut is a genuine cost: the alternative is VAT and sales-tax
registration and remittance in every market you sell into. **Varies by
jurisdiction and by platform** — itch.io's specific handling could not be
verified (docs page returned 404 in the research pass) and should not be assumed
identical to Steam's.

### Deeper material

- Full sourced treatment, including per-claim citations and the gaps list:
  `../corpus/production-business-live/legal-tax-ip-basics.md`
- Platform cuts, publisher deal mechanics, and funding routes:
  `../corpus/production-business-live/funding-and-publisher-deals.md`, distilled
  in `publishers-and-funding.md`
- Per-file confidence ratings for this lane:
  `../corpus/production-business-live/MANIFEST.md`

## Cases

None of the case files carry verified contract or tax detail — indie
postmortems document design and marketing decisions, not term sheets — so use
them as situational context only, never as precedent:

- `../cases/studio-practices.md` — how named small studios structure work,
  pace, and outside help; the surrounding context for when contractor
  agreements start to matter.
- `../cases/undertale.md` — solo authorship with outside creative
  collaborators, which is the exact shape where an assignment clause is
  load-bearing.
- `../cases/dwarf-fortress.md` — a long non-commercial run before a commercial
  release, i.e. a project that crossed the hobby-to-business line at an
  identifiable moment.

## Checklist

Before a contractor (artist, composer, contract programmer) starts:

- [ ] Written agreement signed **before** any work begins.
- [ ] Explicit assignment clause present, not work-for-hire wording alone.
- [ ] Deliverables named specifically, not described in general terms.
- [ ] Derivative works, sequels, and expansions covered.
- [ ] Pre-existing contractor IP carved out explicitly.
- [ ] Moral-rights waiver included if the contractor is outside your country.
- [ ] Code, art, audio, and monetization systems each named.

Before or at first revenue:

- [ ] Hobby-vs-business status checked for your jurisdiction, at first revenue
      rather than at launch.
- [ ] Estimated-tax obligation checked (US: expecting to owe $1,000+ triggers
      quarterly payments; due April 15 / June 15 / September 15 / January 15).
- [ ] Business expenses tracked from day one — tax applies to profit, not
      revenue, and untracked expenses are unrecoverable.
- [ ] Confirmed your storefront is a marketplace facilitator for your markets;
      if you sell direct, VAT/sales-tax obligations mapped before the first
      direct sale.
- [ ] Contractor reporting obligations checked if you paid anyone (US: Form 1099
      for contractors paid $600+, due January 31).

Once the project is real:

- [ ] Copyright registration filed if you would ever want to enforce it.
- [ ] Title searched in the trademark database before public announcement.
- [ ] Trademark decision made deliberately (franchise/brand asset → file; one-off
      → skip), not by default.
- [ ] Liability separation (LLC or local equivalent) reconsidered once there is
      real revenue, contractors, or multiplayer/UGC exposure.
- [ ] One conversation with an accountant or lawyer in your own jurisdiction
      booked — this page is the question list, not the answer.

## Sources

- Trademarkia, *Who Owns Intellectual Property Created by Independent Contractors?* (n.d.). https://www.trademarkia.com/news/legal-info/who-owns-ip-created-by-contractors/ — accessed 2026-07-26.
- Revision Legal, *Work for Hire Agreements for Mobile Game Developers* (2016). https://revisionlegal.com/corporate/revision-legal/work-for-hire-mobile-game-developers/ — accessed 2026-07-26.
- freakingcoolindies.com, *Game Developer Legal Foundations: Copyright, Trademark, and Contract Essentials with indie Lawyer Jacob Vela* (n.d.). https://freakingcoolindies.com/11-2/ — accessed 2026-07-26.
- US Copyright Office, *Fees* (current schedule). https://www.copyright.gov/about/fees.html — accessed 2026-07-26.
- Mekiplaw, *How to Trademark a Game: The Ultimate Guide* (n.d.). https://www.mekiplaw.com/how-to-trademark-a-game-the-ultimate-guide/ — accessed 2026-07-26. Single source; the "attorney raises success odds over 50%" claim is **unverified**, and USPTO filing fees were **not confirmed** in this pass.
- Kreonit, *Choosing the Right Form of Company for Your Game Development Studio* (2024). https://kreonit.com/company-and-hiring/choosing-the-right-form-of-company-for-your-game-development-studio/ — accessed 2026-07-26.
- Adobe, *Sole Proprietorship vs LLC* (undated). https://www.adobe.com/acrobat/business/resources/sole-proprietorship-vs-llc.html — accessed 2026-07-26.
- OneBridge Accounting, *S Corp Self-Employment Tax Savings: What the Math Actually Looks Like* (2026). https://onebridgeaccounting.com/blog/s-corp-self-employment-tax-savings/ — accessed 2026-07-26. Single source; savings figures are illustrative, **unverified** independently.
- Johnnemann Nordhagen, *Paying Taxes as a Small Indie*, Medium (date not visible in fetch). https://johnnemann.medium.com/paying-taxes-as-a-small-indie-805e4ee6ea41 — accessed 2026-07-26. Practitioner account; the 15.3% SE-tax rate matches the commonly cited IRS figure, the penalty estimate does not match Paychex and is **unverified**.
- Paychex, *Quarterly & Estimated Tax Payments 2026*. https://www.paychex.com/articles/payroll-taxes/quarterly-taxes — accessed 2026-07-26.
- Valve, *Steamworks Documentation: Taxes FAQ*. https://partner.steamgames.com/doc/finance/taxfaq — accessed 2026-07-26. Primary source.
- European Commission, *The One Stop Shop – VAT e-Commerce*. https://vat-one-stop-shop.ec.europa.eu/one-stop-shop_en — accessed 2026-07-26. The €10,000 threshold comes from secondary sources (e.g. Eurocompta, https://eurocompta.eu/guides/vat-oss/) and is **unverified** against the primary page.
- IGDA, *R&D Tax Credit Opportunities for Video Game Developers* (2022-02-28). https://igda.org/resources-archive/rd-tax-credit-opportunities-for-video-game-developers/ — accessed 2026-07-26.
- IGDA, *Trademarks – What Game Developers Should Know*, Magleby, Jones, Kilaru, Del Monaco (2021-03-29). https://igda.org/resources-archive/trademarks-what-game-developers-should-know-2021/ — byline and date confirmed; full PDF text **unverified** (not extractable in this pass).
- Game Developer, *Indie Developer tax issues: Is game development your hobby or your business?* (n.d.). https://www.gamedeveloper.com/business/indie-developer-tax-issues-is-game-development-your-hobby-or-your-business- — identified as the strongest game-specific source in the 2026-07-26 research pass; detailed hobby/business tests **unverified**.
- Rachel Presser, *The Definitive Guide to Taxes for Indie Game Developers* — repeatedly cited as the field's reference text but **unverified**: not web-accessible during the 2026-07-26 research pass. Named here so the gap is visible, not as a supporting citation.
- Baker Tilly, *How the R&D tax credit can benefit video game developers*. https://www.bakertilly.com/insights/rd-tax-credit-for-video-game-developers — **unverified**, returned HTTP 403; topic represented here via IGDA instead.
