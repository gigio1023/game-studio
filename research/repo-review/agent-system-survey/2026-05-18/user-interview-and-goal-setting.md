# User Interview and Goal Setting Patterns

Research lane C. This note studies agent interview, preference, and decision workflows from the source repos listed below. Source references use repo-relative paths only.

## Sources Read

### Ouroboros interview and seed flow

- `ouroboros/skills/interview/SKILL.md:15-34`
  - Evidence note: defines the core interview capabilities: ask only human judgment questions, inspect code for factual answers, refine free-text answers, maintain an ambiguity ledger, run a closure gate, restate the goal, and require explicit approval before seed generation.
- `ouroboros/skills/interview/SKILL.md:106-119`
  - Evidence note: separates the MCP question generator, the main session answerer/router, and the user. The user answers only goals, acceptance criteria, business logic, preferences, and other human decisions.
- `ouroboros/skills/interview/SKILL.md:134-216`
  - Evidence note: gives a routing taxonomy for code facts, code confirmation, human judgment, code plus judgment, and external research. This is directly transferable to game direction interviews: the agent can read existing project state, but taste and player promise decisions must go to the human.
- `ouroboros/skills/interview/SKILL.md:267-390`
  - Evidence note: free-text answers that carry decisions must be preserved as structured payloads with decision, reasoning, constraints, out of scope, and codebase context. This prevents lossy compression of taste and scope.
- `ouroboros/skills/interview/SKILL.md:392-420`
  - Evidence note: keeps multiple ambiguity tracks visible, treats seed-ready as an audit trigger, and uses a one-sentence restate gate before seed generation.
- `ouroboros/skills/interview/SKILL.md:497-519`
  - Evidence note: explicitly prefers stopping over over-interviewing and adds a dialectic rhythm guard so code or research auto-answers do not crowd out human judgment.
- `ouroboros/src/ouroboros/agents/socratic-interviewer.md:5-49`
  - Evidence note: the interviewer is only a question generator, asks one focused question, keeps breadth across ambiguity tracks, and stops once scope, non-goals, outputs, and verification are explicit enough.
- `ouroboros/src/ouroboros/agents/seed-closer.md:1-53`
  - Evidence note: closure is good enough to execute, not exhaustive. It closes only after unresolved decisions that would change execution are exposed.
- `ouroboros/src/ouroboros/bigbang/ambiguity.py:1-54`
  - Evidence note: clarity is scored by goal, constraints, success criteria, and brownfield context, with explicit floors before auto-completion.
- `ouroboros/docs/auto-interview-convergence-contract.md:12-67`
  - Evidence note: convergence requires each required section to be a user fact, bounded repo fact, safe auto assumption, or explicit blocker. Broad benign goals may use local reversible assumptions, but authority-requiring gaps must block.
- `ouroboros/src/ouroboros/bigbang/pm_interview.py:1-15`
  - Evidence note: PM interview composes over the generic interview engine, adding question classification, PM-friendly reframing, deferred item tracking, product seed generation, and scan-once brownfield context.
- `ouroboros/src/ouroboros/bigbang/pm_interview.py:59-89`
  - Evidence note: PM-specific scope is goal, user stories, constraints, success criteria, assumptions, deferred items, and decide-later items.
- `ouroboros/src/ouroboros/bigbang/pm_interview.py:306-343`
  - Evidence note: the opening prompt asks what the user wants to build, who it is for, what problem it solves, and initial ideas. Empty answers are rejected instead of silently defaulted.
- `ouroboros/src/ouroboros/bigbang/question_classifier.py:1-12`
  - Evidence note: generated questions are classified as planning, development, or decide-later; technical questions are reframed into user or product language where possible.
- `ouroboros/src/ouroboros/bigbang/question_classifier.py:131-183`
  - Evidence note: planning questions cover business goals, user needs, success metrics, user stories, scope, and constraints; development questions are reframed around the need behind the technical choice; premature questions become explicit later decision points.
- `ouroboros/src/ouroboros/bigbang/pm_seed.py:1-7`
  - Evidence note: PMSeed captures product-level requirements before they are translated into development specs.
- `ouroboros/src/ouroboros/bigbang/pm_seed.py:35-80`
  - Evidence note: the durable product seed fields are product name, goal, user stories, constraints, success criteria, assumptions, decide-later items, interview id, codebase context, and brownfield repos.

### Career-ops preference, profile, and decision workflows

- `career-ops/DATA_CONTRACT.md:1-24`
  - Evidence note: user-owned data and personalization are explicitly separated from updatable system logic.
- `career-ops/DATA_CONTRACT.md:67-71`
  - Evidence note: user-layer files are not auto-updated; system-layer files can be replaced. This supports a game-studio split between creator taste/state and reusable interview mechanics.
- `career-ops/AGENTS.md:11-23`
  - Evidence note: customization belongs in user files such as `modes/_profile.md` or `config/profile.yml`, never shared system rules.
- `career-ops/AGENTS.md:72-138`
  - Evidence note: onboarding is staged. It first checks required files, then collects basics, then asks a short "get to know the user" set: uniqueness, exciting or draining work, deal-breakers, best achievement, and published projects. It persists learned preferences.
- `career-ops/AGENTS.md:156-166`
  - Evidence note: the system is designed for direct customization when the user asks to change archetypes, scoring, or profile.
- `career-ops/AGENTS.md:228-235`
  - Evidence note: the ethical stance favors quality over quantity and strongly discourages low-fit applications. For game work, this maps to rejecting low-signal concepts or unplayable scope instead of producing lots of docs.
- `career-ops/modes/_shared.md:11-23`
  - Evidence note: source of truth loading always reads shared rules first, then profile overrides, and user customization wins.
- `career-ops/modes/_shared.md:27-44`
  - Evidence note: weighted dimensions and blunt score interpretation turn vague fit into a clear proceed or avoid decision.
- `career-ops/modes/_shared.md:89-116`
  - Evidence note: global rules enforce no invented metrics, line-level evidence, direct actionability, and tracker persistence.
- `career-ops/modes/_shared.md:138-180`
  - Evidence note: writing-style calibration extracts tone, sentence structure, punctuation, vocabulary, structure, and voice only when needed, and caches it to avoid repeated questioning.
- `career-ops/modes/project.md:1-33`
  - Evidence note: project ideas are judged by signal, uniqueness, demo ability, metrics potential, time to MVP, and story potential, then receive BUILD, SKIP, or PIVOT verdicts. This is a compact model for game-slice selection.

### Other preference and deep-interview mechanisms

- `gstack/bin/gstack-question-preference:1-21`
  - Evidence note: per-question preferences are durable and explicit: always ask, never ask, or ask only for one-way decisions. Writes require a user-origin source to prevent profile poisoning.
- `gstack/bin/gstack-question-preference:60-88`
  - Evidence note: one-way questions override "never ask" for safety, while two-way questions can be auto-decided if the user configured that preference.
- `gstack/bin/gstack-question-preference:129-184`
  - Evidence note: preference writes require allowed sources, reject tool or file originated values, sanitize optional free text, and append audit events.
- `oh-my-codex/src/question/deep-interview.ts:17-29`
  - Evidence note: deep-interview question state records pending, satisfied, and cleared obligations with lifecycle outcome `askuserQuestion`.
- `oh-my-codex/src/question/deep-interview.ts:75-122`
  - Evidence note: pending questions become explicit obligations and can be satisfied or cleared with a reason.
- `oh-my-codex/src/question/deep-interview.ts:189-228`
  - Evidence note: if a deep interview is blocked on a user question, state is updated to `blocked_on_user` and inactive until the obligation is answered.
- `oh-my-codex/docs/contracts/autoresearch-ux-deep-interview-review.md:24-34`
  - Evidence note: a bad guided flow asked for a raw evaluator command, lacked a canonical draft artifact, lacked a confirm/refine launch gate, and launched immediately. These are anti-patterns for game onboarding too.
- `oh-my-codex/docs/contracts/autoresearch-ux-deep-interview-review.md:57-97`
  - Evidence note: the review checklist treats vague-goal novice intake, explicit refine-vs-launch confirmation, placeholder rejection, and regression coverage as required behavior.
- `oh-my-claudecode/skills/self-improve/si-goal-clarifier.md:11-31`
  - Evidence note: goal clarification asks one question per round and scores objective, metric, target, and scope.
- `oh-my-claudecode/skills/self-improve/si-goal-clarifier.md:33-57`
  - Evidence note: the goal clarifier silently scans the repo, fast-paths fully formed goals, asks the weakest-dimension question, and exits at 20 percent ambiguity or round caps.
- `oh-my-claudecode/skills/self-improve/si-goal-clarifier.md:59-94`
  - Evidence note: the output artifact includes objective, target metric, scope, out of scope, milestones, and experiment ideas, with constraints to never assume and ask only one question per round.

## Interview Patterns

The strongest reusable pattern is not "ask many questions"; it is "route the right question to the right authority."

1. Pre-read existing state before asking.
   - The agent should inspect project state, direction docs, current prototype, proof ledger, and existing game notes before asking the creator to restate facts already present.
   - Transfer from Ouroboros: factual code/project questions can be answered from files; decisions about goals, acceptance criteria, player promise, taste, or desired behavior go to the human.

2. Separate facts from decisions.
   - A file can prove that the current slice is a small sample cell. It cannot decide whether the whole game should feel bureaucratic, intimate, comic, hostile, dreamlike, or procedural.
   - Agent answers should be tagged internally as user fact, bounded repo fact, safe assumption, or explicit blocker. This prevents "the repo says X" from silently becoming "the user wants X."

3. Ask one focused question per round.
   - Ouroboros and the self-improve goal clarifier both prefer one targeted question. This prevents the game-direction interview from becoming a questionnaire.
   - A good round should target the weakest unresolved dimension: philosophy, game feel, whole-game frame, target player experience, playable slice, non-goals, or proof criteria.

4. Preserve free-text answers structurally.
   - When the user answers with taste or philosophy, do not reduce it to a label. Store the decision, reasoning, constraints, out-of-scope items, and observed project context.
   - Example for a game interview:
     - Decision: The player is examined by NPC institutions, not framed as the investigator.
     - Reasoning: The danger starts in text and social record formation.
     - Constraints: Small playable proof first; no broad economy model.
     - Out of scope: Detective UI, quest log mystery solving, abstract lore docs.
     - Project context: current proof cell is a small social-sim sample.

5. Maintain an ambiguity ledger.
   - The interview should track multiple lanes:
     - Creator philosophy
     - Desired game feel
     - Whole-game frame
     - Current proof slice
     - Non-goals
     - Acceptance criteria
     - Proof method
   - If one lane dominates, the interviewer should zoom out and ask whether the other lanes are already settled or still need clarification.

6. Use "decide later" as a real output, not a dodge.
   - PM interview code tracks deferred and decide-later items. Game interviews need the same move for premature questions such as engine architecture, monetization, meta-progression, map size, full economy, or content volume.
   - The deferred item should remain visible with a reason and prerequisite.

7. Add a closure gate before producing a spec.
   - Low ambiguity or a confident summary is only permission to audit closure. The agent should check whether any unresolved decision would materially change implementation.
   - If the remaining uncertainty would only polish wording, stop.

8. Restate the playable goal in one sentence.
   - The final gate should ask whether another agent could read one sentence and build the same next slice.
   - For game work, the sentence should include the player-visible consequence and proof target, not just the feature noun.

9. Do not over-interview.
   - Once philosophy, feel, whole-game frame, slice, non-goals, and acceptance criteria are sufficient for the next playable proof, the next step is implementation/proof, not a larger design document.
   - Career-ops adds a useful analogue: quality over quantity. Fewer better questions beat a long generic interview.

10. Persist the right kind of memory.
   - Persistent taste/preferences should live in a user/project layer, not in shared system rules.
   - Question preferences should be user-originated and auditable. The agent should not learn "never ask this" from tool output, file content, or inferred annoyance.

## Game Direction Questions

These should be used as a small adaptive bank, not a fixed form. Ask at most one or two at a time, and stop when the next playable proof is clear.

### Philosophy

- What human or social situation must this game keep returning to, even when the mechanics change?
- What should the game refuse to become, even if that would make it easier to explain?
- Who has authority in the world: the player, NPCs, institutions, records, language, or something else?
- What should remain deterministic product authority rather than LLM improvisation?
- What kind of player misunderstanding would be fatal to the game direction?

### Desired game feel

- When a player finishes the first ten minutes, what should they feel happened to them?
- Should the dominant feeling be suspicion, social pressure, obligation, embarrassment, curiosity, dread, intimacy, absurdity, or something else?
- What should text feel like in play: conversation, evidence, trap, memory, ritual, bureaucracy, gossip, or weapon?
- What should NPC reactions make the player do differently on the next line of dialogue?
- What kind of feedback should be visible immediately without a tutorial?

### Whole-game frame

- In one sentence, what is the whole game about beyond the current sample cell?
- Is the current sample setup a thesis, a test cell, or a disposable proof environment?
- What is the reusable social-sim unit: role action, record, relationship, institution, prop, queue, favor, accusation, repair, or something else?
- What player fantasy are we not selling?
- What must scale from the prototype into the larger game: NPC-to-NPC action, record creation, authority escalation, conversation danger, repair, or session termination?

### Spec and target slice

- What is the smallest playable result that would make the intended game more real in the running build?
- What one NPC decision should visibly change because of the new rule, record, or player action?
- What can the player do, see, and explain after the slice?
- What existing scene, prop, route, HUD fact, ledger entry, or NPC action should prove the slice?
- What is the narrowest target environment where this can be proven without inventing a larger game?

### Non-goals

- What tempting feature should we explicitly not build in this slice?
- What would create docs or scaffolding without making the game more playable?
- What mechanic is too large until one visible NPC decision needs it?
- What should remain a later decision because current evidence cannot settle it?
- What old runtime, archive, or proof path should not be revived?

### Acceptance criteria

- What must happen in the running build for this slice to count?
- What should Codex gameplay QA be able to do through the action catalog and snapshot path?
- What would a fresh player be able to report without reading source or docs?
- What should be recorded in the proof or verification ledger?
- What failure would prove the slice is not ready even if tests pass?

## Spec Convergence Method

Recommended convergence loop for Game Studio onboarding or a target-game slice definition:

1. Inventory existing signals.
   - Read current project state, active goal prompt, playable proof notes, design rails, prototype status, and any prior direction doc.
   - Classify facts as user-provided, repo-bounded, assumption, or blocker.

2. Choose entry mode.
   - Direction-carry-in: existing thesis or prototype is authoritative enough to preserve first.
   - Taste-to-game: user has references, feelings, hard noes, or scenes but no stable direction.
   - Brownfield-unknown: files exist but authority, stage, or current direction is unclear.

3. Build a seven-slot interview ledger.
   - Philosophy
   - Desired game feel
   - Whole-game frame
   - Current target slice
   - Non-goals
   - Acceptance criteria
   - Proof method

4. Pre-fill from repo facts.
   - Do not ask what is already explicit in tracked files. Present it as "I found X; should this still be controlling?" only if it affects a human decision.

5. Ask the weakest-dimension question.
   - Use one focused question. Prefer questions whose answer changes the next playable slice.
   - Avoid asking for genre, thesis, monetization, engine, or complete roadmap before taste and proof appetite are clear.

6. Refine any taste or scope answer.
   - Convert free text into:
     - Decision
     - Reasoning
     - Constraints
     - Out of scope
     - Project context checked
   - Confirm that nothing was lost.

7. Use safe assumptions only for reversible local details.
   - Safe assumption example: use the current proof cell unless user says otherwise.
   - Blocker example: Which player fantasy is the game promising? Is the current sample representative or disposable?

8. Reframe premature questions.
   - If a question asks "Which economy system?", reframe to "What single visible burden, favor, trust, or authority change should happen in this slice?"
   - If it cannot be reframed, record it as decide-later with the prerequisite.

9. Run closure audit.
   - Do not close if an unresolved decision would change the implementation or proof.
   - Close when remaining uncertainty would only improve wording or future planning.

10. Restate as a playable proof sentence.
   - Shape: "Build/prove [one playable consequence] in [current environment] so [NPC/player-visible change], with [non-goal] excluded and [proof method] passing."
   - Ask the user whether that sentence would lead another agent to the intended result.

11. Produce only the next-useful spec.
   - The artifact should be brief enough to drive implementation. It should not become a full design bible.
   - A useful target spec includes: goal, player-facing consequence, environment, changed role/NPC behavior, records/state touched, non-goals, acceptance criteria, proof commands or playtest route, and decide-later list.

## Target Game Interview Skill Proposal

Name: `target-game-direction-interview`

Purpose: Interview the user just enough to convert target-game direction, taste, and current proof state into the next playable slice contract.

### When to use

- The user asks what the target game is, should be, or should prove next.
- The active proof cell has drifted into helper tooling or docs without a player-visible consequence.
- A proposed feature is too broad and needs reduction to one playable social-sim result.
- The user brings references, feelings, hard noes, or a whole-game statement that must become a small proof.

### Inputs

- Current user request.
- Project state and active proof files from the target game repo.
- Existing Game Studio routing and direction state.
- Current playable proof/gate status.
- Any provided references, hard noes, or taste notes.

### Required pre-read

- Repo agent instructions.
- Current Game Studio project state.
- Active goal prompt.
- Playable goal reference.
- Goal loop state.
- Current task list.
- Verification ledger.
- Current scene/runtime data files only when needed to answer factual context questions.

### Interview ledger

The skill should maintain this visible ledger during the interview:

| Slot | Closure test |
| --- | --- |
| Philosophy | The central social situation and authority model are clear enough to reject wrong features. |
| Desired game feel | The target first-session feeling is concrete enough to shape UI, dialogue, feedback, and pacing. |
| Whole-game frame | The current slice is connected to the larger social-sim promise without overfitting to a sample cell. |
| Target slice | One smallest playable consequence is named. |
| Non-goals | At least three tempting exclusions are explicit. |
| Acceptance criteria | A running-build proof and Codex gameplay QA proof are named. |
| Decide later | Premature questions are parked with prerequisites. |

### Question policy

- Ask one question per round.
- Never ask the user to restate repo facts. Confirm controlling authority only when stale or ambiguous.
- Ask human-only questions for taste, philosophy, player promise, non-goals, and acceptance criteria.
- Use code/project reads only for factual context.
- After three agent-supplied facts or confirmations, force a direct user-judgment question.
- Stop when the restated playable proof sentence is accepted.

### Output

The skill should write or return a short "next playable slice contract" with:

- One-sentence playable proof goal.
- Philosophy guardrail.
- Desired feel guardrail.
- Whole-game relation.
- Target environment and player action.
- NPC/social consequence.
- Records/state/economy value touched, if any.
- Non-goals.
- Acceptance criteria.
- Codex gameplay QA requirements.
- Human/fresh-player validation requirement, if applicable.
- Decide-later list.

### Example output shape

```markdown
## Playable Proof Goal
Build one small-environment interaction where a player line creates a shared record that changes one NPC's authority-backed response, so the player can see that text produced social consequence.

## Guardrails
- Philosophy: NPCs and local institutions examine the player; the player is not an investigator.
- Feel: text should feel dangerous because it can become record, suspicion, or obligation.
- Whole-game relation: the sample environment is a thin proof cell for reusable NPC social action, not the product fantasy.

## Non-goals
- No full economy model.
- No detective quest UI.
- No new broad map or institution system.

## Acceptance Criteria
- Running build exposes the action through the Codex gameplay action catalog.
- Snapshot/report shows the player-visible record, NPC decision, and resulting consequence.
- Verification ledger records the route and proof command.
- A fresh player can explain who acted differently and why.

## Decide Later
- Whether this same authority pattern belongs to formal intake or later adjudication.
- What long-term social memory format replaces the proof-cell record.
```

## Risks/Anti-patterns

1. Over-interviewing instead of building.
   - Risk: the agent keeps asking philosophy questions after the next playable consequence is already clear.
   - Mitigation: closure asks whether another question would change implementation or only polish wording.

2. Turning taste into docs instead of proof.
   - Risk: the output becomes a design bible, not a slice contract.
   - Mitigation: every accepted direction statement must map to one running-build consequence or a decide-later item.

3. Asking for formal game-design vocabulary too early.
   - Risk: the user is forced into genre, core loop, thesis, market, engine, or monetization language before taste is clear.
   - Mitigation: start with situations, feelings, refusals, references, and player-visible consequences.

4. Letting repo facts become creator decisions.
   - Risk: "a sample cell exists" becomes "the game is about that sample."
   - Mitigation: distinguish bounded repo fact from human decision. Ask whether a current proof cell is representative or disposable.

5. Losing nuance in summary.
   - Risk: user says a detailed taste/scope answer, agent stores "social sim" and loses the actual constraints.
   - Mitigation: refine free-text answers into decision, reasoning, constraints, out of scope, and project context.

6. Deferring too much.
   - Risk: "decide later" becomes avoidance of necessary direction.
   - Mitigation: only defer questions that are premature or unknowable; block on human decisions that would materially change the slice.

7. Premature technical depth.
   - Risk: interviewer asks about architecture, economy, persistence, or LLM provider before the player-facing consequence is known.
   - Mitigation: reframe technical questions into the visible need behind them.

8. Unsafe preference learning.
   - Risk: an agent infers "do not ask this again" from logs, tool output, or stale docs.
   - Mitigation: persistent question preferences require explicit user-originated source and should be auditable.

9. Immediate launch without confirm/refine.
   - Risk: a vague goal flows straight into execution, repeating the anti-pattern where guided setup launched without a canonical draft or confirmation gate.
   - Mitigation: require a restated playable proof sentence and explicit acceptance before implementation.

10. Test/proof displacement.
    - Risk: the interview produces acceptance criteria for tests, ledgers, or scripts while no playable result improves.
    - Mitigation: acceptance criteria must include a player-visible consequence and a route through Codex gameplay QA or human play.

