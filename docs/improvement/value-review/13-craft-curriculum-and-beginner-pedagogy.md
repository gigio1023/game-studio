# Craft Curriculum And Beginner Pedagogy

[Game Craft Reference Index](../../../core/references/game-craft-reference-index.md) is
one of the strongest assets in the repository. It cites the right canon: MDA,
Game Feel, Rules of Play, Game Mechanics, A Playful Production Process,
storylets, Game Sound, Valve Level Flow. The next step is to convert the most
decision-critical sources from a reading list into operational guides.

## Why Syllabus Is Not Curriculum

A syllabus says "here is the canon to read". Senior reviewers spot
`NOT_READY` patterns in seconds because they have internalized hundreds of
worked cases. Today an agent can cite MDA but cannot apply it to a brief.
Worked examples turn rules into cases, and cases into recognizable patterns.

This is the highest value-per-effort move in the value review. Each
operational guide costs roughly the same and unlocks a different review
area.

## Priority Sources To Convert

Convert four sources first.

| Source | Review Area It Strengthens |
| --- | --- |
| MDA | Director and systems review, mechanic-dynamic-experience chain. |
| Game Feel (Swink) | Moment-to-moment review, primary verb feel. |
| Storylets (Emily Short) | Narrative review, branch and content scope. |
| Valve Level Flow | Level design and player walkthrough review. |

## Operational Guide Shape

Each operational guide should hold:

```text
Source:
Source claim in one sentence:
Operating moves:
- Move 1 with worked example
- Move 2 with worked example
- Move 3 with worked example
Decision template:
Failure mode that this source helps catch:
Anti-pattern that this source rejects:
```

Worked examples should use small, generic game fragments. They should not
copy the source author's examples directly.

## MDA Operational Guide

The guide should show:

- A taste statement transformed into a candidate mechanic.
- The dynamic the mechanic should produce.
- The aesthetic the dynamic should create.
- The check question for each step.
- A failure example where the mechanic does not produce the dynamic.

## Game Feel Operational Guide

The guide should show:

- Primary verb input and response budget.
- Camera, animation, and audio response choices for one verb.
- Recovery state after failure.
- A failure example where polish hides a missing recovery state.

## Storylets Operational Guide

The guide should show:

- A small storylet model with two preconditions, one effect, and one
  consequence.
- Branch coverage rule.
- A failure example where branches grow without coverage.

## Level Flow Operational Guide

The guide should show:

- A short room or section with landmark, choice, and recovery.
- Pacing budget for the section.
- A failure example where teaching arrives after the rule is needed.

## Files To Add

- `core/references/operational/mda.md`
- `core/references/operational/game-feel.md`
- `core/references/operational/storylets.md`
- `core/references/operational/level-flow.md`

Update [Game Craft Reference Index](../../../core/references/game-craft-reference-index.md)
to link operational guides next to source citations. Update relevant role
playbooks and review references to point to operational guides when the
review workflow matches.

## Baseline Added

The repository now has the four baseline operational guides above, and the
game director, systems designer, narrative director, UX/art/audio playbook, and
review-council references point to them. The next improvement should add eval
prompts that compare an agent using only a rubric against an agent using the
operational guide.

## Proof Of Improvement

A reviewer should be able to:

- read an operational guide in five minutes
- apply it to a fictional brief in ten minutes
- name one failure mode the guide catches that the rubric alone would miss

If a guide cannot pass these three checks, it is still a syllabus, not a
curriculum.

## Beginner Craft Pedagogy

This section turns the expanded pedagogy research into a repo plan. It supports
[Entry Mode Proofs](04-entry-mode-proofs.md).

Source:
[Teaching And Curriculum](../../../research/landscape/round4-design-pedagogy/01-teaching-and-curriculum.md).

### Core Thesis

Beginner design education should become an artifact ladder:

```text
taste -> moment -> action -> feedback -> formal element -> dynamic ->
experience -> prototype question -> observed player behavior -> revision
```

The agent teaches by making taste legible, not by replacing taste with expert
genre defaults.

### Teaching Rule

When a beginner says "I like this," the agent should not jump to feature lists.
It should ask:

- What exact moment matters?
- What was the player doing?
- What changed in the system or world?
- What did the player perceive?
- What feeling or thought followed?
- What must not be copied?
- What must not be normalized away?
- What small proof would reveal whether the interpretation is true?

### Missing Modules

Add small exercise templates rather than one large course document:

- reference decomposition
- formal elements lab
- experience chain
- primary verb and feel lab
- level as lesson
- playtest interpretation
- critique without authorial collapse
- beginner design portfolio

### Proposed Templates

Add:

- `core/templates/intake/reference-constraint-sheet.md`
- `core/templates/intake/auteur-systems-first-intake.md`
- `core/templates/direction/formal-elements-map.md`
- `core/templates/direction/experience-chain.md`
- `core/templates/direction/primary-verb-feel-sheet.md`
- `core/templates/direction/level-teaching-plan.md`
- `core/templates/direction/taste-preservation-decision.md`
- `core/templates/evidence/beginner-playtest-report.md`

Update:

- `core/templates/intake/beginner-taste-interview.md`
- `docs/entry-model.md#taste-to-game-workflow`
- `docs/anti-patterns.md`
- `core/references/game-craft-reference-index.md`

### Skill Changes

`skills/game-director` should add beginner teaching mode:

```text
preserve -> clarify -> compare -> prototype -> test -> decide
```

`skills/game-onboarding` should route:

- taste references to reference constraint sheets
- formal constraints or toy systems to auteur/systems-first intake
- carried direction to direction audit
- unknown brownfield work to proof audit

### Quality Check

The proof path should show authorial preservation:

- the selected proof preserves the user's stated taste center
- the agent lists at least one decision it did not make
- the proof tests behavior, not only a pitch
- the review separates observation, inference, and taste judgment

### Beginner Proof Of Improvement

A fresh agent should take a vague beginner preference and produce:

- one reference constraint sheet
- two concept interpretations
- one human-only decision log
- one first proof question
- one playtest or observation plan

No long theory essay should be required before the user can make progress.
