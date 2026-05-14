# Claim Verification: Claim 3: Rami Ismail prototype/vertical-slice distinction

[Back to index](../01-claim-verification.md)

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
