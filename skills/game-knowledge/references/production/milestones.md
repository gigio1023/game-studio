# Milestones and Slices

- **There is no industry-standard milestone definition.** Every source consulted says so directly. One publisher's "Alpha" is another's "Beta". Names are a shared vocabulary, not a shared bar.
- The practical consequence, from a producer who wrote the contracts: **negotiate exact definitions before signing** — including what counts as "key gameplay", the allowed placeholder-art percentage, and the bug-severity gate (Mullich, 2011-11-14).
- Commonly repeated shape: **Alpha** = all core systems implemented, playable start to finish, placeholder art acceptable, no new features after this. **Beta** = feature and asset complete, only bug fixes. **Code freeze** = no new code, each fix individually signed off.
- Mullich's contract numbers, as an example of what "exact" looks like: placeholder art capped at roughly **50%** at Alpha, roughly **90% replaced** by Beta.
- Bug gating in contracts uses three categories: **A** = game or feature inoperable, **B** = other functional bugs, **C** = cosmetic. Contracts commonly cap allowed A/B counts for a milestone to be declared met.
- **Vertical slice** = one level or a **10–15 minute** segment at final quality across every discipline at once. **Horizontal slice** = every system present, all shallow. The horizontal cut hides integration risk precisely because nothing is finished enough to integrate.
- A vertical slice exists to answer a funding question: "the people who write the checks will want to see some sort of demo of the product working before they start paying for developers" (Ask A Game Dev, 2014-02-21). It is the **go/no-go-with-money** tier, not early exploration.
- The risk-matching ladder: **paper prototypes** test rules and comprehension, **clickables** test UI flow, **greyboxes** test feel, pacing, and space, **vertical slices** prove feasibility to whoever funds it.
- Build the cheap prototype **first** and the expensive slice only after the vision is semi-locked — a polished slice built too early polishes the wrong game.
- **"Cut your game in half" is folklore.** No primary source was found for it. The sourced version of the idea is Cook's risk framework: adding scope to reduce design risk *increases* execution risk.
- Console certification (**TRC** on PlayStation, **TCR** on Xbox, **Lotcheck** on Nintendo) should be validated starting at Alpha, not at feature freeze — a late bounce costs a resubmission cycle.

## Basics

### The commonly repeated milestone ladder

Treat this as the vocabulary most people mean, while remembering that no
contract is bound by it.

| Milestone | Common bar | Where sources disagree |
| --- | --- | --- |
| Prototype / kickoff | Greybox demonstrating the core loop, plus updated design docs and a schedule, to verify the concept before committing | Sometimes folded into pre-production entirely |
| First Playable | First build with representative gameplay and assets, major elements functional, not polished | One source equates it outright with the vertical slice — a far more demanding bar |
| Alpha | All core systems implemented, playable start to finish, placeholder art acceptable, feature-locked | Mullich's contract version is softer: "key gameplay functionality implemented, assets partially finished", ~50% placeholder |
| Beta | Feature and asset complete; bug fixing only | Mullich: ~90% of placeholder replaced |
| Content complete | All final content integrated; remaining work is optimization and QA | Some schemes treat this as synonymous with Beta |
| Code freeze | No new code; each fix signed off individually | A "three to four months before release" rule of thumb circulates but **could not be traced to a named primary source** |
| Release candidate | The build submitted for certification; becomes gold master if it passes | "RC" and "submission build" used interchangeably |
| Gold master | Final build used as the manufacturing and distribution master | — |

The disagreement is the point. When a plan says "we're at alpha", the useful
next question is which of these definitions is meant.

### Vertical versus horizontal

A **vertical slice** cuts through every layer at once: one level or a 10–15
minute segment where gameplay, art, audio, UI, and integration all sit at the
final quality bar, so someone can experience the whole game in miniature. The
standard analogy is a TV pilot — greenlit to series, or the team moves on.

A **horizontal slice** builds breadth: every system present but shallow, layer
by layer. Its documented weakness is that it "does not show how [systems] work
as a whole" and "often misses the vital integration aspect". It can look like
progress across the whole game while hiding whether any of it feels good
together.

Cost profile, stated qualitatively because no source produced hard numbers:

- Vertical — high cost per feature shown, low risk of misleading anyone,
  because what is on screen is honest about final quality and integration.
- Horizontal — cheap breadth, high risk of concealing integration and feel
  problems until late.

## Advanced

### Match the prototype tier to the risk

Each tier answers a different question, and using an expensive tier for a cheap
question wastes the budget that the expensive question will need later:

| Tier | Answers |
| --- | --- |
| Paper prototype | Do the rules work? Can a player understand them? |
| Clickable | Does the UI flow hold together? |
| Greybox | Does it feel right? Is the pacing and space correct? |
| Vertical slice | Is this feasible, and worth funding? |

The sequencing advice that follows: prototype to lock the vision, then build the
slice. Reversing that order buys polish on a design that has not been settled.

### What a slice is actually being used to extrapolate

Beyond "is it fun", a finished-quality slice gives a measured unit of cost. A
secondary account describes Nintendo requiring one fully production-quality
region of *Xenoblade Chronicles* before greenlighting the rest, so total time
and resource cost for the remaining regions could be extrapolated from one
verified data point. *(Secondhand from an indie devlog, not a primary Nintendo
or Monolith Soft source — treat as illustrative, not confirmed.)*

For a solo developer with no publisher, that use survives intact: the slice is
how you learn what one unit of your game actually costs you, before you promise
thirty of them.

### Certification is an earlier problem than it looks

Platform holders run mandatory technical-compliance review — TRC (Sony), TCR
(Microsoft, covering things like Quick Resume behavior and store compliance),
Lotcheck (Nintendo, covering Joy-Con input behavior, text rendering across
character sets, eShop integration). The practitioner guidance is to validate
cert-relevant requirements from Alpha onward, because a late failure bounces the
submission and costs a full resubmission cycle.

*(Compliance details here come from console-QA vendor pages, not platform-holder
documentation — the official checklists sit behind NDA-gated developer portals.)*

### Scope cutting, honestly sourced

The "cut your game in half" rule is repeated constantly and attributed to no
one. Targeted searching for a primary source — a specific Blow talk, a specific
postmortem — produced nothing citable. What *is* sourced is Daniel Cook's risk
framework: adding scope in order to reduce design and requirements risk tends to
increase execution risk through communication overhead, technical complexity,
and schedule uncertainty. That gives a defensible reason to prefer the smaller
plan without inventing a provenance for the slogan.

## Cases

- **Publisher payment disputes** — Mullich's stated reason for writing exact
  definitions into contracts: vague milestone language is a recurring source of
  disputes and damaged relationships, not a paperwork preference.
- **The TV pilot** — the framing behind the vertical slice: a bounded decision
  point where the funder fully funds, requests changes, imposes constraints, or
  passes.
- **Xenoblade Chronicles** — one production-quality region as the unit of
  extrapolation (secondary, unverified).

## Checklist

- [ ] When someone names a milestone, is the bar written down anywhere, or is
      the name doing the work?
- [ ] Does the current milestone have a stated placeholder-art tolerance?
- [ ] Is there a bug-severity gate, and does "done" account for it?
- [ ] Is this slice vertical or horizontal, and does that match the question
      being asked?
- [ ] Is the vision settled enough to justify final-quality work on it?
- [ ] Which cheaper tier — paper, clickable, greybox — could answer this
      question instead?
- [ ] For a console target, have cert requirements been checked since Alpha?
- [ ] If scope is being cut, is the reason execution risk rather than a slogan?

The Game Studio milestone ladder in the game-production skill is a finer-grained
solo-developer sequence that sits alongside these industry labels rather than
replacing them.

## Sources

- David Mullich, "Milestone ABC's: Alpha, Beta and Contract," 2011-11-14 —
  contract-specific Alpha/Beta definitions, the ~50% and ~90% placeholder-art
  figures, the Category A/B/C bug taxonomy, and the advice to negotiate exact
  definitions before signing.
- Ask A Game Dev, "Game Development Glossary: The Vertical Slice," 2014-02-21 —
  the 10–15 minute final-quality definition, the TV-pilot analogy, and the
  "people who write the checks" framing.
- Aakash Gupta, aakashg.com, 2026-05-01 — the prototype-tier risk ladder
  (paper / clickable / greybox / vertical slice).
- Maurice Klimek, "The next thing to aim for after an MVP?," The Solo Gamedev,
  2023-07-17 — prototype-before-slice sequencing, and the Xenoblade account
  (secondhand).
- Daniel Cook, Lostgarden, 2006-04-03 — risk framework; scope added to reduce
  design risk raises execution risk.
- Wikipedia, "Video game development" (accessed 2026) — code freeze, gold
  master, and the explicit statement that definitions vary.
- Console certification (TRC / TCR / Lotcheck): synthesized from console-QA
  vendor pages, accessed 2026. **Not platform-holder primary documentation.**

Unverified items carried forward from the corpus: the "code freeze three to four
months before release" rule of thumb; Rami Ismail's treatment of Feature
Complete and Content Complete as distinct steps (source returned HTTP 403); the
Xenoblade region requirement; and any primary attribution for "cut your game in
half".

Corpus source for this page: `references/corpus/production-business-live/milestones-and-slices.md`
(accessed 2026-07-26).
