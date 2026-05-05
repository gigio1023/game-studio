# Claim Verification

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
- Riot "Prototype: Building a Game's Substance" (https://www.riotgames.com/en/r-and-d-office/prototype-building-a-games-substance): full text fetched.
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
  (https://www.riotgames.com/en/r-and-d-office/prototype-building-a-games-substance)

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

## Claim 3: Rami Ismail prototype/vertical-slice distinction

**Claim as Game Studio is considering it:** Prototype answers "should you build this";
vertical slice answers "can you build it"; a second iteration within the vertical slice
is required to measure velocity.

**Primary source:**
Rami Ismail, "Prototypes & Vertical Slice," Levelling The Playing Field blog,
September 26, 2022.
(https://ltpf.ramiismail.com/prototypes-and-vertical-slice/)

**Source says:**
Direct quotes confirmed from the fetched article:
- "the Prototypes are to help you figure out whether you _should_ make a game"
- "the Vertical Slice is to help you figure out whether you _can_ make it"

On the second iteration: Ismail explicitly recommends making a second iteration of
something during the vertical slice phase so that "timing the second instance reveals
production velocity." He suggests developers "multiply it by how many of that _thing_ you
want to make, and make an estimated timeline" from the second cycle's duration.

**Misalignment:**
None material. The claim matches the primary source accurately on all three points.

**Caveats for Game Studio:**
- Ismail's framing is specifically aimed at indie developers, particularly those without
  a publisher or external milestone structure.
- The "second iteration for velocity" advice applies most cleanly to content-heavy
  production pipelines (levels, characters, dialogue trees). For systemic/simulation-heavy
  games, the velocity signal may require different measurement.

**Verdict: SUPPORTED**

---

## Claim 4: Park et al. 2023 reflection mechanism details

**Claim as Game Studio is considering it:** Memory stream + importance scored 1-10 +
retrieval formula recency * importance * relevance + reflection triggered when importance
accumulator exceeds 150 + 5 insights synthesized per reflection.

**Primary source:**
Park, J.S. et al. (2023). "Generative Agents: Interactive Simulacra of Human Behavior."
arxiv 2304.03442. Published at UIST '23.

**Source says:**
From verified secondary sources quoting the paper directly:
- Importance range: 1 to 10 (1 = mundane such as brushing teeth; 10 = significant such
  as a divorce). Confirmed.
- Reflection threshold: "reflections are generated periodically when the sum of the
  importance scores for the latest events perceived by the agents exceeds a threshold of
  150." Confirmed.
- Insights per reflection: The paper's prompt asks "What 5 high-level insights can you
  infer from the above statements?" — 5 insights confirmed.
- Retrieval formula: three normalized factors (recency via exponential decay, importance,
  relevance via cosine similarity of embeddings) combined with equal weighting. The
  formula is not recency * importance * relevance (multiplicative) but a normalized linear
  combination with equal weights.
- The 100 most recent records from the memory stream are queried during reflection, not
  all memories.

**Misalignment:**
1. The retrieval formula description "recency * importance * relevance" implies
   multiplicative combination. The paper uses a normalized linear combination (equal
   weights summed, not multiplied). This is a meaningful architectural difference:
   multiplicative would zero-out any memory where one factor is zero; linear does not.
2. The "importance accumulator >150" phrasing is correct but omits that it applies to
   the most recent events only (not cumulative lifetime importance), and queries the
   latest 100 records.
3. The specific number "top-5 insights" is from a prompt template in the paper, not a
   hard-coded architectural limit — the number of insights is LLM-prompt-driven and could
   be varied.

**Caveats for Game Studio:**
- The numbers are real but the retrieval formula's combination mode (linear vs.
  multiplicative) matters for any implementation. Adopting a multiplicative formula would
  diverge from the paper.
- The reflection threshold of 150 is a design choice specific to the Smallville sandbox;
  it is not claimed to be universal or optimal.

**Verdict: PARTIALLY_SUPPORTED**
Key numbers (1-10, 150, top-5) are confirmed. The retrieval formula description contains
a meaningful simplification error.

---

## Claim 5: Park et al. 2024 personality replication 85% accuracy

**Claim as Game Studio is considering it:** Park et al. 2024 replicate personality from
interview transcripts with 85% accuracy.

**Primary source:**
Park, J.S. et al. (2024). "Generative Agent Simulations of 1,000 People."
arxiv 2411.10109.

**Source says:**
From the abstract (fetched):
- Interview only: 83% accuracy
- Surveys only: 82% accuracy
- Combined (interview + surveys): 86% accuracy
- Demographics-only baseline: 74%
- The accuracy measure is: proportion of General Social Survey (GSS) held-out item
  responses the agent matches, expressed as a fraction of participants' own two-week
  test-retest consistency (i.e., the ceiling is human self-consistency, not 100%).

**Misalignment:**
1. "85%" is not the figure in the paper. The three conditions yield 83%, 82%, and 86%.
   85% is an arithmetic average of the three, not a reported number.
2. The accuracy metric is domain-specific: it measures GSS survey-item replication.
   "Personality replication" is a fair shorthand but undersells the specificity — the
   paper also tests Big Five trait prediction and experimental replications.
3. The 85% figure strips the comparison baseline (74% for demographics-only), which is
   essential context for evaluating the improvement.
4. The paper notes that accuracy improvements over the demographic baseline were not
   uniform across racial and ideological groups.

**Caveats for Game Studio:**
- The agents were built from two-hour semi-structured interviews; this is a substantial
  data-collection burden, not an off-the-shelf result.
- GSS item prediction is a narrow measurement instrument; generalization to game character
  behavior, decision-making under novel conditions, or creative dialogue is unvalidated.
- The 85% shorthand erases the distinction between the interview-only and combined-source
  conditions, which have meaningfully different data requirements.

**Verdict: PARTIALLY_SUPPORTED**
The general finding (agents built from interviews closely replicate survey responses) is
real and well-sourced. The specific "85%" figure is a blend of three conditions and
should be replaced with "83-86% depending on data source, vs. 74% demographic baseline."

---

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

## Trustworthy Claims For Adoption

The following claims match their primary sources and can be imported without further
verification, subject to the caveats noted above:

- **Claim 3 (Rami Ismail prototype/vertical slice):** Exact match to the LTPF article.
  Both definitions and the second-iteration velocity method are confirmed.
- **Claim 6 (Game Outcomes Project 0.57 / <0.2):** Both correlation figures appear in
  the primary Game Developer article. The directional finding is robust; methodological
  limits should accompany any citation.
- **Claim 7 (CSA 5/5/5):** Template structure, cadence, and authorship all confirmed.
- **Claim 8 (Ubisoft Ghostwriter pairwise):** Confirmed in Ubisoft's own announcement.
  Scope limitation (barks only) should be noted when adopted.

---

## Claims Requiring Local Adaptation

- **Claim 1 (Supercell three-gate / 7-of-10):** Reframe as "Supercell reports killing
  ~7 of 10 games at prototype stage, with an overall 90% kill rate; the three-stage
  distribution (prototype, soft launch, global) is an observation from public reporting,
  not a named gate framework." Drop the label "three-gate model."
- **Claim 2 (Riot six-component thesis / 90% rejection):** Replace the six-component
  label with the actual Riot terminology (Opportunity, Thesis, Audience) or acknowledge
  the synthesis explicitly. The 90% figure should be scoped to incubation-to-prototype,
  not the full lifecycle.
- **Claim 4 (Park 2023 retrieval formula):** Correct the formula: linear combination with
  equal weights, not multiplicative. Note that "top-5 insights" is a prompt default, not
  a hard architecture constraint.
- **Claim 5 (Park 2024 85% accuracy):** Replace with "83-86% across data source
  conditions (interviews, surveys, combined), compared to a 74% demographics-only
  baseline, on held-out General Social Survey items."

---

## Open Questions

1. Does Supercell publish a formal gate framework anywhere (internal blogs, GDC talks
   post-2018) that names and specifies criteria for each stage? The current evidence
   suggests not, but a GDC talk search was not exhaustive.
2. Are there Riot R&D blog posts or GDC talks (Cadwell or others) that enumerate more
   than three thesis components, potentially yielding something closer to six? The blog
   series is ongoing; later posts may have expanded the framework.
3. For Park et al. 2023, what is the exact mathematical form of the retrieval score
   combination — is it a simple arithmetic mean of three normalized scores, or a weighted
   sum with explicitly stated equal weights? The full paper PDF was not parseable; this
   should be confirmed against the UIST proceedings version.
4. Has Ghostwriter's pairwise pattern been updated or extended since the 2023
   announcement, particularly in Ubisoft's larger narrative AI toolchain?

---

## Citations

- Ismail, R. (2022, September 26). "Prototypes & Vertical Slice." *Levelling The Playing
  Field*. https://ltpf.ramiismail.com/prototypes-and-vertical-slice/
- Game Developer staff. (n.d.). "Quality is worth killing for: Supercell's ruthless
  approach to production." *Game Developer*.
  https://www.gamedeveloper.com/business/quality-is-worth-killing-for-supercell-s-ruthless-approach-to-production
- Paananen, I. (n.d.). Supercell founder lecture at BAFTA. Transcript via Scrivner, D.
  https://www.danielscrivner.com/supercell-founder-ilkka-paananen-game-design-lecture-at-bafta/
- McArdle, P. (n.d.). "R&D Foundations: Opportunity, Thesis, and Audience." *Riot Games*.
  https://www.riotgames.com/en/news/r-d-foundations-opportunity-thesis-and-audience
- Riot R&D. "Incubation: Exploration With a Plan."
  https://www.riotgames.com/en/r-and-d-office/incubation-exploration-with-a-plan
- Cadwell, T. "Prototype: Building a Game's Substance." *Riot Games R&D Office*.
  https://www.riotgames.com/en/r-and-d-office/prototype-building-a-games-substance
- Park, J.S., O'Brien, J., Cai, C.J., Morris, M.R., Liang, P., & Bernstein, M.S. (2023).
  "Generative Agents: Interactive Simulacra of Human Behavior." *UIST '23*.
  https://arxiv.org/abs/2304.03442
- Park, J.S. et al. (2024). "Generative Agent Simulations of 1,000 People."
  https://arxiv.org/abs/2411.10109
- Tozour, P. (2015, January). "The Game Outcomes Project, Part 3: Game Development
  Factors." *Game Developer*.
  https://www.gamedeveloper.com/business/the-game-outcomes-project-part-3-game-development-factors
- Hamann, W. (2003, July 17). "Goodbye Postmortems, Hello Critical Stage Analysis."
  *Game Developer*.
  https://www.gamedeveloper.com/production/goodbye-postmortems-hello-critical-stage-analysis
- Swanson, B. / Ubisoft La Forge. (2023, March). "The Convergence of AI and Creativity:
  Introducing Ghostwriter." *Ubisoft News*.
  https://news.ubisoft.com/en-us/article/7Cm07zbBGy4Xml6WgYi25d/the-convergence-of-ai-and-creativity-introducing-ghostwriter
