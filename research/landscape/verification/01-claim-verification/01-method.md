# Claim Verification: Method

[Back to index](../01-claim-verification.md)

## Method

Each claim was verified against its named primary source or closest available primary
source. Where primary sources are behind binary PDFs or paywalls, secondary sources that
quote the primary material verbatim were used and flagged accordingly. Verification
proceeded in three passes:

1. Parallel web searches for each claim's named source.
2. Direct page fetches of official URLs (Riot R&D blog, Rami Ismail LTPF, Ubisoft news,
   Game Developer articles, arxiv abstract pages, paper review excerpts).
3. Targeted follow-up searches for specific numbers and gate terminology that were absent
   or ambiguous after the first two passes.

Total distinct queries executed: 12 WebSearch, 14 WebFetch.

---


## Sources Surveyed

- Riot Games R&D Office hub (https://www.riotgames.com/en/r-and-d-office): landing page only.
- Riot "R&D Foundations: Opportunity, Thesis, and Audience" (https://www.riotgames.com/en/news/r-d-foundations-opportunity-thesis-and-audience): full text fetched.
- Riot "Incubation: Exploration With a Plan" (https://www.riotgames.com/en/r-and-d-office/incubation-exploration-with-a-plan): full text fetched.
- Riot "Prototype: Building a Game's Substance" (https://www.riotgames.com/en/r-and-d-office/prototype-building-a-games-game quality): full text fetched.
- Rami Ismail LTPF "Prototypes & Vertical Slice" (https://ltpf.ramiismail.com/prototypes-and-vertical-slice/): full text fetched.
- Game Developer "Quality is worth killing for: Supercell's ruthless approach" (https://www.gamedeveloper.com/business/quality-is-worth-killing-for-supercell-s-ruthless-approach-to-production): full text fetched.
- Daniel Scrivner transcript of Paananen BAFTA lecture (https://www.danielscrivner.com/supercell-founder-ilkka-paananen-game-design-lecture-at-bafta/): full text fetched.
- Game Developer "The Game Outcomes Project, Part 3: Game Development Factors" (https://www.gamedeveloper.com/business/the-game-outcomes-project-part-3-game-development-factors): full text fetched.
- Game Developer "Goodbye Postmortems, Hello Critical Stage Analysis" (https://www.gamedeveloper.com/production/goodbye-postmortems-hello-critical-stage-analysis): full text fetched.
- Ubisoft news "The Convergence of AI and Creativity: Introducing Ghostwriter" (https://news.ubisoft.com/en-us/article/7Cm07zbBGy4Xml6WgYi25d/): full text fetched.
- arxiv 2304.03442 abstract page: fetched; full PDF binary, not readable.
- ACM UIST 2023 full HTML version of Park et al. 2023: returned 403.
- GonzoML Substack review of Park et al. 2023 (https://gonzoml.substack.com/p/generative-agents-interactive-simulacra): full text fetched; quotes paper figures.
- Medium paper review by Andrew Lukyanenko (https://artgor.medium.com/paper-review-generative-agents-interactive-simulacra-of-human-behavior-cc5f8294b4ac): full text fetched.
- arxiv 2411.10109 abstract page and PDF attempt: abstract accessible; PDF binary only.
- Park 2024 scispace summary (https://scispace.com/papers/generative-agent-simulations-of-1000-people-31sj9byjex26): accessed via search result excerpt.
- Game Outcomes Project GDC 2016 slides (https://ubm-twvideo01.s3.amazonaws.com/o1/vault/gdc2016/Presentations/Tozour_Paul_GameOutcomesProject.pdf): not directly fetched.
- Deconstructoroffun Supercell analysis (https://www.deconstructoroffun.com/blog/2023/04/12/supercells-transformation): full text fetched, no gate details.

---


## Claim 1: Supercell three-gate kill model with 7-of-10 prototype kill rate

**Claim as Game Studio is considering it:** Supercell uses three named development gates
as decision points for killing games, and 7 out of 10 prototypes are killed — i.e. a 70%
kill rate at the prototype gate specifically.

**Primary source:**
- Game Developer article: "Quality is worth killing for: Supercell's ruthless approach to
  production" (https://www.gamedeveloper.com/business/quality-is-worth-killing-for-supercell-s-ruthless-approach-to-production)
- Paananen BAFTA lecture transcript (https://www.danielscrivner.com/supercell-founder-ilkka-paananen-game-design-lecture-at-bafta/)

**Source says:**
"Of the last 10 games, seven were killed in prototype, two were killed at soft launch, and
one — Clash Royale — actually launched globally." (Game Developer)

Paananen at BAFTA: "in the last two years we released one game called Clash Royale and I
think we've killed nine games during that same time, so one out of ten made it." He
described metrics-based kill criteria — retention, engagement, monetization targets set
before beta — not named gates with specific qualitative criteria.

**Misalignment:**
1. "Three gates" is an inference, not Supercell's own terminology. The article describes
   three stages where games were killed in a specific historical sample (prototype,
   soft launch, global) — this is a distribution of where kills occurred, not a formal
   named gate framework.
2. The "7-of-10" figure is accurate for the prototype-stage kill count in that sample,
   but the overall kill rate across all stages is 9-of-10 (90%). Framing 7/10 as the
   kill rate understates total attrition.
3. No official Supercell source names the gates or specifies formal named criteria at
   each gate. Kill decisions at each stage appear to follow different criteria
   (fun/direction at prototype, retention/monetization metrics at soft launch) but these
   are not published as a framework.

**Caveats for Game Studio:**
- The 7/10 figure applies to a single historical window (post-Clash Royale era). Newer
  published lists of killed Supercell games (Rush Wars, Clash Quest, Clash Mini, etc.)
  suggest kill decisions continue at varying stages; the exact split may differ.
- Adopting "Supercell three-gate model" as a named framework adds structure that
  Supercell's own communications do not claim. If the framework is useful, it should be
  attributed as an inference from public reporting, not a Supercell-published model.

**Verdict: PARTIALLY_SUPPORTED**
The kill statistics are directionally real (7 prototypes killed in a cited sample, ~90%
total attrition). The "three named gates" framing is an analyst construction, not a
primary Supercell source.

---


## Claim 2: Riot R&D Lifecycle "six-component thesis" structure with ~90% rejection rate

**Claim as Game Studio is considering it:** Riot's R&D lifecycle uses a six-component
thesis (genre problem, strategy, innovations, non-goals, differentiation, untested
assumptions), and approximately 90% of pitches are rejected.

**Primary sources:**
- Riot "R&D Foundations: Opportunity, Thesis, and Audience"
  (https://www.riotgames.com/en/news/r-d-foundations-opportunity-thesis-and-audience)
- Riot "Incubation: Exploration With a Plan"
  (https://www.riotgames.com/en/r-and-d-office/incubation-exploration-with-a-plan)
- Riot "Prototype: Building a Game's Substance"
  (https://www.riotgames.com/en/r-and-d-office/prototype-building-a-games-game quality)

**Source says:**
The Foundations article identifies **three** core elements, not six: Opportunity, Thesis,
and Audience. The Thesis sub-element addresses "how you'll address the Opportunity through
specific solutions and innovations," but this is not decomposed into six named sub-items in
the published text.

The Incubation article states: "Games that move through Incubation into Prototype have a
very clear thesis (problems or new opportunities that might exist in a given genre and the
strategy to solve them)." This is a **two-element** description of the thesis.

Rejection rate: The Incubation article explicitly states "approximately 10% ever make it
into Prototype," confirming a ~90% rejection rate from incubation to prototype. No
overall lifecycle rejection rate is given.

The Prototype article names four prototype deliverables: Audience, Gameplay
Innovations, Team Understanding, and Playtesting Validation.

**Misalignment:**
1. No published Riot source uses the phrase "six-component thesis" or lists those six
   items (genre problem, strategy, innovations, non-goals, differentiation, untested
   assumptions) as an official framework.
2. The six components appear to be a synthesis drawn from reading across multiple Riot
   R&D blog posts and possibly third-party GDC summaries. The synthesis is plausible —
   elements of genre problem, strategy, and innovations are present across articles — but
   "non-goals," "differentiation," and "untested assumptions" as named thesis components
   are not found in the primary sources reviewed.
3. The 90% rejection rate is real but applies specifically to incubation-to-prototype
   stage, not the whole lifecycle.

**Caveats for Game Studio:**
- The six-component framing is a useful pedagogical synthesis but must not be presented
  as Riot's own published terminology.
- The 90% rejection rate is well-sourced for the incubation gate; labeling it a
  "lifecycle" rate overstates the evidence.

**Verdict: OVERSTATED**
The ~90% incubation rejection rate is confirmed. The six-component thesis structure is
not found in any primary Riot source; it is a secondary synthesis.

---
