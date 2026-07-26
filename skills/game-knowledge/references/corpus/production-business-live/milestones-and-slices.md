# Publisher Milestones, Vertical Slices, and Scoping Heuristics

## Standard publisher milestone definitions

There is **no single industry standard** for milestone definitions — every
source consulted makes this point explicitly. Definitions vary by publisher,
by contract, and by year (Wikipedia "Video game development," accessed 2026;
David Mullich, "Milestone ABC's: Alpha, Beta and Contract," Nov 14, 2011).
What follows is the commonly-repeated shape, with per-source variation noted.

### Kickoff / prototype (pre-production milestone)

A greybox prototype demonstrating the core gameplay loop, paired with updated
design documents and a production schedule, used to verify the concept is
viable before committing to a contract (salivity.github.io, "Publisher
Milestones in Game Development," accessed 2026). This maps to what Cerny's
Method calls pre-production and the "publishable first playable" gate (see
`cerny-method-and-preproduction.md`).

### First Playable

- Commonly defined as **the first build containing representative gameplay
  and assets with functional major gameplay elements** — not necessarily
  content-complete or polished (WebSearch synthesis of multiple gamedev
  glossary sources, accessed 2026).
- One source explicitly **collapses "First Playable" and "vertical slice"
  into the same milestone**: "a playable level or 10–15 minute gameplay
  segment that looks and plays like the final product," with
  finished-quality gameplay, art, audio, and interface
  (salivity.github.io, accessed 2026). This is a meaningfully different, more
  demanding bar than the "functional but rough" definition above — evidence
  that the term genuinely is publisher/contract-specific, exactly as Mullich
  and Wikipedia warn.

### Alpha

- Widely defined as: **all core systems, mechanics, and features are
  implemented and functional**; the game is playable start-to-finish; but
  **placeholder art/audio is still acceptable**, and after this point **no
  new gameplay features are added** — remaining work is bug-fixing and
  content finishing (WebSearch synthesis, accessed 2026; corroborated by
  salivity.github.io, accessed 2026, which calls Alpha "feature complete").
- David Mullich's contract-specific definition (Nov 14, 2011): "**key
  gameplay functionality is implemented, and assets are partially
  finished**," and in his recommended contract language, placeholder art is
  capped at roughly **50% of total assets** at Alpha.
- Mullich's key practical point: the terms "key gameplay" and acceptable
  placeholder-art percentage **must be explicitly negotiated per contract**,
  because vague definitions are a common source of publisher/developer
  payment disputes.

### Beta

- Commonly defined as: **feature- and asset-complete**; only bug-fixing
  happens from here on; no further changes to features, assets, or code
  beyond fixes (WebSearch synthesis, accessed 2026).
- Mullich's contract-specific version (Nov 14, 2011): "**feature and asset
  complete version of the game, when only bugs are being fixed**," with
  placeholder art capped around **90%** replaced (i.e., very little
  placeholder remaining).
- Mullich also documents a standard **bug-severity taxonomy** used to gate
  milestone sign-off in contracts: **Category A** (renders the game or a
  feature inoperable/blocking), **Category B** (all other functional bugs),
  **Category C** (purely cosmetic). Contracts commonly specify a maximum
  Category-A/B bug count allowed to declare a milestone met.

### Content Complete

- Distinguished from Alpha/Beta in some milestone schemes as its own step:
  **all content — final 3D models, textures, voice acting, music, level
  designs — is integrated**, with remaining work being optimization and QA
  rather than content production (salivity.github.io, accessed 2026, framing
  this as effectively synonymous with "Beta" in their scheme — again showing
  overlapping/non-standard terminology across sources).
- Rami Ismail's practitioner milestone guide ("Levelling The Playing Field")
  reportedly also treats Feature Complete and Content Complete as sequential,
  distinct steps in production, per a WebSearch summary of that guide — but
  the source page returned HTTP 403 on direct fetch in this research pass, so
  **treat this attribution as unverified / could not confirm firsthand**.

### Code Freeze

- Commonly defined as: **the point after which no new code is added**; only
  bug fixes are permitted, and each fix typically requires explicit
  sign-off given the shrinking test surface (WebSearch synthesis, accessed
  2026; Wikipedia "Video game development," accessed 2026, uses the same
  framing).
- One source gives a rough industry rule of thumb: **code freeze occurs
  roughly three to four months before code release** (WebSearch synthesis,
  accessed 2026) — **note: this figure could not be traced to a specific
  named primary source in this pass; treat as a commonly repeated estimate,
  not a verified industry constant.** It will also vary heavily by project
  size, platform count, and certification requirements.

### Gold / Gold Master / Release Candidate (RC)

- **Gold Master**: the final build used as the master for manufacturing/
  distribution (WebSearch synthesis and Wikipedia "Video game development,"
  both accessed 2026).
- **Release Candidate** functions as the build submitted for certification —
  if it passes, it typically *becomes* the gold master. Sources here largely
  treat "RC" and "submission build" as interchangeable with "the build sent
  to cert," though exact terminology again varies by publisher.

### Certification / Cert (console)

- Each console platform holder runs a mandatory technical-compliance review
  before a build can ship, commonly called by different names per platform:
  **TRC** (Technical Requirements Checklist, Sony/PlayStation), **TCR**
  (Technical Certification Requirements, Microsoft/Xbox — covering things
  like Quick Resume behavior, store compliance, networking), and
  **"Lotcheck"** (Nintendo's process, covering areas like Joy-Con input
  behavior, text rendering across character sets, and eShop integration)
  (WebSearch synthesis of multiple console-QA vendor pages, accessed 2026 —
  vendor marketing pages, not platform-holder primary documentation, since
  official TRC/TCR/Lotcheck documents sit behind NDA-gated developer
  portals and are **not accessible to this research pass**).
- Practitioner guidance: **start validating cert-relevant requirements
  during Alpha, not at Feature Freeze** — the earlier a compliance issue is
  caught, the cheaper and faster it is to fix, since late-cycle cert
  failures can bounce a submission and cost a resubmission cycle
  (WebSearch synthesis, accessed 2026; general industry practice, not
  attributed to one named source).

### The one point every source agrees on

Milestone names are a **shared vocabulary, not a shared standard**. The exact
bar for "Alpha" at one publisher can be another publisher's "Beta." Mullich's
explicit advice (Nov 14, 2011): **negotiate exact, unambiguous milestone
definitions — including placeholder-art percentages, the definition of "key
gameplay," and bug-severity gating criteria — before signing the contract**,
specifically to prevent payment disputes and damaged publisher/developer
relationships later.

## Vertical slice vs. horizontal slice

### Definitions

- **Vertical slice**: a small, self-contained, fully playable chunk of the
  game — typically one level or a 10–15 minute segment — built to **final
  quality bar across every discipline at once**: gameplay, art, audio, UI,
  all integrated and polished together, so a player or executive can
  experience "the whole game" in miniature (WebSearch synthesis; Ask A Game
  Dev, "Game Development Glossary: The Vertical Slice," Feb 21, 2014, which
  explicitly equates vertical slice with "first playable" and analogizes it
  to a **TV pilot**: if the pilot is greenlit, the show goes to series; if
  not, the team moves on).
- **Horizontal slice**: the opposite cut — **every system in the game is
  present, but each only shallowly implemented**, i.e., breadth over depth,
  built layer by layer (e.g., get the UI layer working everywhere, then the
  logic layer, then the data layer) rather than feature-by-feature at full
  depth (WebSearch synthesis, accessed 2026). Its documented weakness: it
  "does not show how [systems] work as a whole" and "often misses the vital
  integration aspect that vertical slices allow for" — i.e., a horizontal
  slice can hide integration risk (do the systems actually feel good
  *together*?) precisely because nothing is finished enough to integrate
  meaningfully yet.

### The economics: why publishers specifically want vertical, not horizontal

- Ask A Game Dev (Feb 21, 2014): the vertical slice exists because **"the
  people who write the checks will want to see some sort of demo of the
  product working before they start paying for developers"** — full
  production staffing is the largest cost step in a project, so publishers
  want proof of both *fun* and *feasibility* before authorizing it. The
  vertical slice lets a publisher decide to fully fund, request changes and
  refund conditionally, impose constraints (genre expectations, release
  window, licensing terms), or pass entirely — a real, bounded decision
  point, analogous to picking up or passing on a TV pilot.
- Aakash Gupta (aakashg.com, May 1, 2026) places vertical slices at a
  specific point on a risk-matching ladder: **paper prototypes** test
  rules/comprehension, **clickables** test UI flow, **greyboxes** test feel/
  pacing/spatial mechanics, and **vertical slices** are specifically for
  "proving feasibility to leadership" — i.e., vertical slices are the
  most expensive, most convincing prototype tier, reserved for the
  go/no-go-with-money decision, not for early design exploration.
- **Named real-world example**: per a secondary account of Nintendo's
  *Xenoblade Chronicles* production (Maurice Klimek, "The next thing to aim
  for after an MVP?," The Solo Gamedev Substack, Jul 17, 2023), Nintendo
  reportedly required developers to build **one fully production-quality
  region** before greenlighting the rest, specifically so the team and
  publisher could extrapolate total time/resource cost for all remaining
  regions from that one verified data point. **Caveat: this is a
  secondhand account in an indie devlog, not a primary Nintendo or Monolith
  Soft source — treat as plausible-but-unverified illustrative example, not
  confirmed fact.**
- Klimek's practical sequencing advice (Jul 17, 2023): build an MVP/prototype
  *first* to nail down the game's vision and rough scope, and only build the
  expensive vertical slice *after* that vision is semi-locked — building a
  polished vertical slice too early risks polishing the wrong game.

### Cost/time tradeoff, stated plainly

No source in this pass gave hard numeric cost/time deltas (e.g., "a vertical
slice costs X% of total budget" or "takes Y weeks") for vertical vs.
horizontal slices specifically. The qualitative tradeoff documented across
sources is:

- **Vertical slice**: high cost *per feature shown*, because everything in
  the slice is finished-bar; but low risk of misleading a stakeholder, since
  what they see is representationally honest about final quality and
  integration.
- **Horizontal slice**: lower cost to produce *breadth*, but higher risk of
  hiding real integration and feel problems, since nothing is finished
  enough to reveal how systems interact under real, final-quality
  conditions — the exact failure mode the horizontal-slice definition above
  calls out.

## Scoping heuristics: "cut 50%" / "your game is too big"

This is genuinely difficult to source. Searches for a primary origin (a
specific Jonathan Blow talk, a specific named postmortem coining "cut your
game in half") did not surface a citable primary source in this research
pass, despite targeted attempts (search results returned general references
to Jonathan Blow GDC talks like "Indie Prototyping, Braid, & Making
Innovative Games" and "Truth in Game Design," but no excerpted content tying
either talk to a "cut 50%" rule specifically).

**Explicit call per task instructions: this is folklore/commonly repeated in
game-dev discourse, but a primary source was not verified in this research
pass.** What can be said with sourcing:

- The general pattern — teams chronically over-scope relative to their
  actual capacity, and cutting scope is a recurring, painful, but effective
  corrective — is consistent with Daniel Cook's risk framework (Lostgarden,
  Apr 3, 2006; see `cerny-method-and-preproduction.md`), which explicitly
  warns that adding scope to reduce design/requirements risk tends to
  *increase* execution risk (more communication overhead, more technical
  complexity, more schedule uncertainty) — i.e., there is a sourced
  theoretical basis for "smaller is often more executable," even without a
  sourced "-50%" rule of thumb specifically.
- No before/after postmortem with concrete numbers (e.g., "we cut X feature
  and shipped Y months earlier") was found and verified in this pass. Any
  such example would need targeted follow-up research directly against
  GDC Vault or Game Developer postmortem archives, ideally with search
  budget for names of specific shipped indie titles known for public scope
  discussions (candidates worth checking in a follow-up pass: *Return of the
  Obra Dinn*, *Spelunky*, *Superhot*, *Celeste* — none independently
  confirmed here).
- **Recommendation for whoever picks this up next:** treat "cut your game in
  half" as a real, widely-circulated piece of practitioner folk wisdom (it
  shows up constantly in indie dev Twitter/blog discourse) but do not
  attribute it to a specific person or talk without a verified quote —
  this document could not confirm one.
