# Narrative and Scenario Design Foundations: Review Questions Agents Should Ask

[Back to index](../narrative-and-scenario-design.md)

## Review Questions Agents Should Ask

### Direction

- What is the player role in the story?
- What does the player want, and what does the game make them do to pursue it?
- Which story promise can the current milestone actually prove?
- Which parts of the story are pillars, and which are optional flavor?
- What generic genre move should the project avoid?

### Scenario and Quest Design

- What is the playable verb for each story beat?
- What does the player know before the scenario starts?
- What must the player understand before the scenario can end?
- What changes in the world, character state, inventory, relationship, or objective state?
- Can the player fail, misunderstand, skip, sequence-break, or solve the beat in an unexpected order?
- Which clues are mandatory, optional, redundant, or decorative?
- What is the shortest path through the scenario?
- What is the most likely path through the scenario?
- What evidence proves the intended path is legible?

### Dialogue and Text

- What job does each line perform?
- Can a line be removed without losing character, goal, clue, feedback, or pacing?
- Does the speaker have enough context and motive to say it?
- Does the line expose a gameplay affordance or hide it?
- Is the text readable at target distance, speed, and screen size?
- Does every voiced line have subtitle support?
- Does every variable line have enough localization context?

### Branching and State

- Which branches create real downstream consequences?
- Which branches only change flavor?
- Which branches can collapse back to a shared state?
- What state variables encode the consequence?
- What content becomes unreachable after each decision?
- How will QA cover the branch matrix?
- What is the production cost of one more branch?

### Environmental Story

- What happened here?
- What evidence lets the player infer it?
- What is the player supposed to do differently after noticing it?
- Does the scene still read without text?
- Does lighting, camera, prop placement, or traversal obscure the beat?
- Can players inspect the clue from the expected distance and angle?

### AI-Assisted Narrative

- What may the agent generate?
- What may the agent never decide?
- What canon, tone, safety, and world rules constrain the output?
- What provenance is recorded for generated text?
- What deterministic system validates consequences?
- What human role approves canon changes?
- How are rejected generations stored or discarded?

### Production and QA

- What is the content inventory for this milestone?
- What is the word count, line count, branch count, VO count, and string count?
- Which content requires localization, sensitivity, legal, or accessibility review?
- What is the regression test for narrative continuity?
- What evidence proves player comprehension?
- What narrative bugs block the gate?


## Current Repo Gaps

- **Narrative role depth**: The role roster activates `narrative-director`, but there is no detailed authority, checklist, or skill equivalent to the existing game direction and evidence skills.
- **Narrative gate**: Existing gates cover direction, production, release, and evidence, but there is no narrative-specific gate for story, scenario, dialogue, lore, branch budget, or content QA.
- **Narrative templates**: Direction templates cover thesis, pillars, player experience targets, and release strategy. They do not yet include narrative brief, scenario brief, quest brief, dialogue brief, lore ledger, or branch budget templates.
- **Evidence coverage**: Evidence types include playable builds, captures, telemetry, fixtures, tests, playtest reports, decisions, and asset lists. They do not explicitly include narrative state logs, dialogue transcripts, branch coverage, lore diffs, subtitle proof, or localization screenshots.
- **Council review rows**: The review template defaults to Game Director, Producer, Technical Director, and QA Lead. It does not include conditional rows for Narrative Director, Systems Designer, Level Designer, Localization Lead, or Accessibility Lead.
- **Narrative AI policy**: The narrative AI genre profile asks what AI can generate and what it can never decide, but the repo does not yet provide a concrete policy template for canon authority, provenance, rejection, deterministic validation, or content locks.
- **Content QA matrix**: There is no template for testing dialogue conditions, branch reachability, repeated lines, missing speaker metadata, sequence breaks, localization overflow, subtitle behavior, or lore contradictions.
- **Scenario production metrics**: Milestone templates do not yet capture word count, branch count, string count, VO minutes, cinematic minutes, content dependencies, or scenario map count.
- **Accessibility and localization hooks**: Lead roles exist, but narrative-heavy workflows do not yet force early checks for subtitles, text sizing, non-audio equivalents, variable text, context metadata, or translation expansion.
- **Research index**: The repo has philosophy and operating model docs, but no from the craft reference index foundation page for narrative and scenario design until this report.


## Recommended Next Changes

- Add a `narrative-director` skill with review prompts for story, scenario, dialogue, lore, content scope, and AI-assisted text.
- Add `core/gates/narrative.md` with `READY | CONCERNS | NOT_READY` verdicts and required evidence.
- Add narrative templates for brief, quest, scenario, dialogue, lore, branch budget, content QA, and narrative AI policy.
- Extend milestone and evidence schemas with optional narrative fields.
- Update council review and workflow catalog activation rules so narrative review is required when story content is in scope.
- Add a sample project narrative brief and scenario brief to show the expected artifact size and evidence level.
