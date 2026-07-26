# Description Micro-Test — 2026-07

T9 of `.plans/game-studio-v3-stage1.md`. Tests whether the four skill
frontmatter descriptions (as rewritten by T1 and T7) are enough, by
themselves, for a fresh-context agent to route a realistic prompt to the
right skill — without ever loading any skill body.

## Method

- 20 prompts total, drawn from `evals/triggers.md` (5 per skill: 3 positive
  + 2 near-miss per skill section, except game-knowledge which used 3
  positive + 2 near-miss from its own section). Every game-knowledge-section
  prompt and the critical "continue or pivot or kill" cross-routing case
  (I5/T7 requirement) are included.
- **Round A (with listing):** a fresh `general-purpose` subagent per prompt,
  given ONLY the four skills' verbatim `name` + `description` frontmatter
  (no bodies, no other files) plus one prompt, instructed not to use any
  tools, and asked which one skill (or none) it would invoke. Scope note:
  the listing contained only the four game-studio skills, so a routing loss
  to an out-of-pack competitor (e.g. a general judgment skill — the exact
  failure the redesign's audit diagnosed) is structurally outside this
  measurement; Round A measures intra-pack disambiguation only.
- **Round B (no-guidance control):** the same 20 prompts, fresh subagents,
  no skill listing at all — recording what an ungrounded agent does instead
  (asks a clarifying question vs. answers directly vs. starts implementing).
- Each prompt ran in its own isolated subagent context (no shared memory
  between prompts or between rounds).
- Real measured evaluator subagents throughout — not self-simulated.

### Control-round contamination caveat

This environment has the four game-studio skills actually installed, so a
`general-purpose` subagent's own system prompt may surface a skill listing
independent of what this test explicitly hands it. Two of 20 Round B
transcripts show leakage despite the explicit instruction not to reference
any named skill:

- D3 control: "...before applying the **game-direction skill's**
  unresolved-decision checklist..." — named the skill directly.
- K5 control: "...since this is clearly game-development territory with an
  **available specialized routing signal**..." — referenced routing
  machinery without naming it.

Treat Round B as directionally informative (it still shows the dominant
control behavior is "ask a clarifying question first," not "invoke a
skill") but not a fully blank-slate baseline. A truly clean control would
need an environment with no game-studio skills installed at all.

## Round A — with skill listing (20/20 correct)

| # | Skill section | Type | Prompt (abridged) | Expected | Evaluator answer | Result |
|---|---|---|---|---|---|---|
| D1 | game-direction | positive | "...only know the feelings I'm chasing — interview me..." | game-direction | game-direction | PASS |
| D2 | game-direction | positive | "...stalled six months ago. Should I continue or pivot or kill it..." | game-direction | game-direction | PASS |
| D3 | game-direction | positive | "Review this creative brief and pillars for unresolved direction decisions." | game-direction | game-direction | PASS |
| D4 | game-direction | near-miss | "Plan the next milestone for my platformer." | game-production | game-production | PASS |
| D5 | game-direction | near-miss | "Review whether my demo is ready for the store page." | game-review | game-review | PASS |
| P1 | game-production | positive | "Direction is locked. Plan the smallest milestone that proves the core loop." | game-production | game-production | PASS |
| P2 | game-production | positive | "Implement the dash mechanic from the brief in my Godot project." | game-production | game-production | PASS |
| P3 | game-production | positive | "Map the whole-game release scope and cut line before we plan milestones." | game-production | game-production | PASS |
| P4 | game-production | near-miss | "What game should I even make?" | game-direction | game-direction | PASS |
| P5 | game-production | near-miss | "Is this vertical slice actually a vertical slice?" | game-review | game-review | PASS |
| R1 | game-review | positive | "The agent says the build is playable — verify that claim." | game-review | game-review | PASS |
| R2 | game-review | positive | "Review the first playable: does the level teach before it tests?" | game-review | game-review | PASS |
| R3 | game-review | positive | "Can we honestly call this game fully accessible based on these checks?" | game-review | game-review | PASS |
| R4 | game-review | near-miss | "Help me pick between these three game concepts." | game-direction | game-direction | PASS |
| R5 | game-review | near-miss | "Break this milestone into work packages." | game-production | game-production | PASS |
| K1 | game-knowledge | positive | "...hits still feel flat even with screen shake and hit-stop... real juice..." | game-knowledge | game-knowledge | PASS |
| K2 | game-knowledge | positive | "How should I price my indie game on Steam — what's a normal range?" | game-knowledge | game-knowledge | PASS |
| K3 | game-knowledge | positive | "...contractor composer starts next week — do I need an IP assignment..." | game-knowledge | game-knowledge | PASS |
| K4 | game-knowledge | near-miss (critical) | "Should I continue or pivot or kill this project?" | game-direction | game-direction | PASS |
| K5 | game-knowledge | near-miss | "Plan the milestone that gets us to a vertical slice." | game-production | game-production | PASS |

**Sign-off per skill (Round A, selected-correctly rate on its own positives,
plus false-fire check on prompts that should route elsewhere):**

- **game-direction** — 3/3 own positives selected correctly; also correctly
  won 2 near-misses from other sections (P4, R4) and the K4 critical case.
  No false fires. No description-loses-its-own-positives failure observed.
- **game-production** — 3/3 own positives selected correctly; correctly won
  3 near-misses (D4, R5, K5). No false fires.
- **game-review** — 3/3 own positives selected correctly; correctly won 2
  near-misses (D5, P5). No false fires.
- **game-knowledge** — 3/3 own positives selected correctly; correctly
  deferred on both its own near-misses (K4, K5), including the K4 case the
  plan flagged by name (I5/T7: "continue or pivot or kill" must route to
  game-direction, not game-knowledge or a generic decision skill). No false
  fires — the addition of game-knowledge did not steal any positive from
  the other three.

No description lost its own positives and no near-miss produced a false
fire in this run. 20/20 (100%) correct routing.

## Round B — no-guidance control (same 20 prompts, no skill listing)

| # | Prompt (abridged) | Evaluator's default action (no skill loaded) |
|---|---|---|
| D1 | "...interview me and help me figure out what it is." | Asks concrete clarifying questions about the target feelings/references. |
| D2 | "...continue or pivot or kill it..." | Asks about current milestone, why it stalled, budget/motivation before advising. |
| D3 | "Review this creative brief and pillars..." | Asks which brief/pillars doc to review — **named "game-direction skill" directly (contamination, see caveat)**. |
| D4 | "Plan the next milestone for my platformer." | Asks which project/repo and current state before proposing scope. |
| D5 | "Review whether my demo is ready for the store page." | Asks what platform and what "ready" means before assessing. |
| P1 | "Plan the smallest milestone that proves the core loop." | Gives general milestone-scoping advice, asks what the core loop is. |
| P2 | "Implement the dash mechanic..." | Asks to see the brief/project files before writing any code. |
| P3 | "Map the whole-game release scope and cut line..." | Asks for stage, platform/audience, ship date/budget constraints. |
| P4 | "What game should I even make?" | Asks clarifying questions about constraints, taste, skill level, time budget. |
| P5 | "Is this vertical slice actually a vertical slice?" | Asks which project/build and what spec it's being checked against. |
| R1 | "The agent says the build is playable — verify that claim." | Asks what "playable" was claimed to mean and whether a build/repo exists. |
| R2 | "Review the first playable: does the level teach before it tests?" | Attempts the task directly — says it would load and play through the build. |
| R3 | "Can we honestly call this game fully accessible...?" | Flags "fully accessible" as an unverifiable absolute, asks what checks were run. |
| R4 | "Help me pick between these three game concepts." | Asks what matters most for the decision (audience, scope, personal excitement). |
| R5 | "Break this milestone into work packages." | Asks for the milestone's scope, deliverable, and deadline first. |
| K1 | "...screen shake and hit-stop... real juice..." | Gives general advice directly (hit-pause timing, impact flash, knockback, particles, audio layering). |
| K2 | "How should I price my indie game on Steam...?" | Gives general advice directly (rough $5–25 range, factors that narrow it). |
| K3 | "...do I need an IP assignment before they touch anything?" | Gives general advice directly (yes, get a written assignment; adds "not legal advice"). |
| K4 | "Should I continue or pivot or kill this project?" | Asks for project specifics, status, metrics, goals before recommending. |
| K5 | "Plan the milestone that gets us to a vertical slice." | Asks scope/what-exists/what-must-be-proven — **flagged "an available specialized routing signal" (contamination, see caveat)**. |

**Observation:** absent any skill listing, the dominant default behavior
(15/20) is to ask a clarifying question before acting — consistent with
generic agent caution, not with any Game Studio method. Four prompts
(R2, K1, K2, K3 — direct-answer/action without first checking the
plan's evidence-before-opinion or field-knowledge routing rules) show the
concrete cost of missing the skill layer: R2 jumps straight into "playing"
the build without the review skill's evidence protocol, and K1–K3 give
plausible-sounding but unsourced field advice instead of the pricing/
legal/feel numbers the corpus and distilled docs carry with sources. This
is the expected contrast the control round exists to surface: the skill
descriptions don't just pick a name, they gate whether sourced method is
applied at all.

## Summary

- Round A: 20/20 (100%) correct skill selection from description text
  alone, across all four skills' positives and all cross-skill near-misses,
  including the plan's named critical case (K4).
- No description lost its own positives; no near-miss produced a false
  fire; game-knowledge's addition did not erode routing to the other three.
- No deviation entry needed — no failing phrase found requiring a fix.
- Round B: no-guidance control shows agents default to asking clarifying
  questions (15/20) rather than acting, and where they do act without
  guidance (K1–K3) they give unsourced advice instead of applying the
  field-knowledge corpus — the qualitative gap the skill exists to close.
  Two of 20 control transcripts leaked skill-system awareness despite
  instruction not to (see caveat above); this weakens Round B's claim to
  being a fully blank-slate baseline but does not affect Round A's result.

## Post-run description edits

Two descriptions changed after this run, during the vocabulary pass that
replaced coined terms with trade usage:

- `game-review`: "ready for a verdict" → "ready for a sign-off"
- `game-production`: "detached from a playable production proof" → "detached
  from a playable build"

Both edits sit in the trailing clause, not in a quoted symptom phrase — every
match target this run exercised ("is this fun", "ready to ship", "playable",
"vertical slice", "done", "milestone plan", "how much before the demo") is
byte-identical. The 20/20 result is therefore reported as still standing for
the phrases under test, and unverified for the two edited clauses. Re-run
Round A before treating the descriptions as re-validated.
