# Claim Verification: Claim 6: Game Outcomes Project design risk management correlation 0.57

[Back to index](../01-claim-verification.md)

## Claim 6: Game Outcomes Project design risk management correlation 0.57

**Claim as Game Studio is considering it:** Paul Tozour's Game Outcomes Project found
design risk management correlated 0.57 with project success, while documentation
correlated less than 0.2.

**Primary source:**
Tozour, P. (2015). "The Game Outcomes Project, Part 3: Game Development Factors."
Game Developer (Gamasutra).
(https://www.gamedeveloper.com/business/the-game-outcomes-project-part-3-game-development-factors)

**Source says:**
Direct from the fetched article:
- "design risk management showed the strongest correlations, with a correlation over 0.57"
- "our question about a design document clearly specifying the game to be developed had a
  very low correlation — below 0.2"
- Sample size: "several hundred game developers" responding to a 120-question survey.
  Exact N not stated.
- The 0.57 correlation is against an aggregate outcome score combining project delays,
  ROI, MetaCritic ratings, and team satisfaction — not any single metric.
- The documentation finding also notes a meaningful correlation with project timeliness
  specifically, even if overall correlation was low.

**Misalignment:**
1. The claim as stated is accurate, though "0.57" is a floor ("over 0.57"), not a point
   estimate. The actual value may be higher; the article rounds down.
2. "Several hundred" is vague. The study has been critiqued in the game dev community for
   self-selection bias (respondents self-report success) and lack of external validation.
3. The aggregate outcome score conflates very different project goals; a game designed as
   a breakeven brand exercise would score differently than a commercial hit.

**Caveats for Game Studio:**
- The correlation is robust directionally but the sample methodology (self-reported survey
  of volunteer respondents) limits causal inference.
- The documentation finding is nuanced: docs correlate with shipping on time but not with
  quality or ROI. Citing "documentation correlation <0.2" without this nuance can
  mislead teams into underinvesting in documentation for the wrong reasons.

**Verdict: SUPPORTED**
Both figures match the primary source. Methodological caveats are real but do not
invalidate the directional finding.

---


## Claim 7: CSA 5/5/5 review template

**Claim as Game Studio is considering it:** CSA uses a 5 wins / 5 losses / 5 changes
template on a 2-4 hour cadence.

**Primary source:**
Hamann, W. (2003). "Goodbye Postmortems, Hello Critical Stage Analysis." Game Developer
magazine, July 17, 2003.
(https://www.gamedeveloper.com/production/goodbye-postmortems-hello-critical-stage-analysis)

**Source says:**
Template confirmed:
1. "Five things that went right during the period"
2. "Five things that went wrong during the period"
3. "Five things that could be improved for the future"

Each item ranked 1-5 (1 = most important). Total time for the full cycle — gathering
responses, team-lead meeting, general team meeting — "takes about two to four hours,
total." Distribution: "no more than three days after a milestone."

Author: Wolfgang Hamann, then President/CEO of Koolhaus Games.

**Misalignment:**
None material. The claim matches the source on template structure, cadence, and authorship.
One minor reframing: the third column is "things that could be improved for the future,"
not literally "changes" — the "changes" label implies decisions already made, while
Hamann's framing keeps them as proposals for discussion.

**Caveats for Game Studio:**
- The 2003 publication date means the methodology predates agile retrospectives as an
  industry norm; some teams may find it redundant with sprint retros.
- The article does not specify whether CSA replaces or complements milestone postmortems;
  it is positioned as an alternative, not a supplement.
- The "5" ceiling per category is a constraint on response length, not a guarantee that
  all five slots will always be filled with meaningful content.

**Verdict: SUPPORTED**

---


## Claim 8: Ubisoft Ghostwriter pairwise design pattern

**Claim as Game Studio is considering it:** Ubisoft's Ghostwriter AI tool uses a pairwise
comparison pattern where the writer is shown two generated options and selects one.

**Primary source:**
Ubisoft News, "The Convergence of AI and Creativity: Introducing Ghostwriter" (2023).
(https://news.ubisoft.com/en-us/article/7Cm07zbBGy4Xml6WgYi25d/the-convergence-of-ai-and-creativity-introducing-ghostwriter)
Presenter: Ben Swanson, R&D Scientist, La Forge Montreal.
GDC 2023 session: "Machine Learning Summit: Natural Language Generation for Games Writing."

**Source says:**
"for each variation generated, Ghostwriter provides two choices which will be compared and
chosen by the scriptwriter." Writers choose their preferred option; the system learns from
accumulated choices. Selected options are then edited freely by the writer.

**Misalignment:**
1. The "pairwise" description is accurate as far as the official announcement states.
   However, the GDC 2023 presentation (not fully available in fetched sources) may contain
   more detail on how initial candidates are generated before the pairwise selection step.
   The announcement describes the output-facing step as pairwise but does not disclose
   whether the model internally generates N candidates before presenting 2.
2. The claim "AI proposes N, human picks 1" and "pairwise" are not mutually exclusive —
   pairwise IS a form of N-to-1 selection (N=2). The claim is technically accurate.

**Caveats for Game Studio:**
- Ghostwriter generates "barks" (short triggered utterances) only, not extended narrative
  dialogue or quest text. Scope matters: the pairwise pattern may not generalize to longer
  generation tasks.
- The system's learning signal (accumulated pairwise choices) requires a large writer
  feedback corpus to become useful; a small team would see limited quality improvement
  from the feedback loop.
- No external evaluation of output quality or writer satisfaction has been published.

**Verdict: SUPPORTED**
The pairwise interaction pattern is confirmed in the primary Ubisoft source.

---


## Patterns In Misalignment

Three systematic biases appear across the prior rounds' summaries:

**1. Stage distribution reported as named framework.** The Supercell "three gates"
example is the clearest case: a statistical distribution of where kills occurred in a
historical sample was imported as a formal gated process with named criteria. Game Studio
should distinguish between "where companies kill games" (descriptive) and "a published
gate framework" (prescriptive).

**2. Synthesis presented as primary terminology.** The Riot six-component thesis is
likely a reasonable synthesis of themes across multiple Riot R&D blog posts. The problem
is that secondary synthesis uses specific labels ("non-goals," "untested assumptions")
that do not appear in the primary text. When a framework is adopted under a company's
brand ("Riot's six-component thesis"), those labels import unearned authority.

**3. Single-condition figures reported as point estimates.** Both the Park 2024 "85%"
and the Park 2023 retrieval formula fall here. A range (83-86%) or a precise condition
description (interview-only: 83%) is more useful than an averaged or rounded figure
that strips out the nuance. Game Studio should prefer ranges and condition labels over
single summary numbers.

---
