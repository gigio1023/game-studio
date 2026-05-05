# Curriculum From Source Map

[Game Craft Source Map](../../../core/references/game-craft-source-map.md) is
one of the strongest assets in the repository. It cites the right canon: MDA,
Game Feel, Rules of Play, Game Mechanics, A Playful Production Process,
storylets, Game Sound, Valve Level Flow. The next step is to convert the most
load-bearing sources from a reading list into operational guides.

## Why Syllabus Is Not Curriculum

A syllabus says "here is the canon to read". Senior reviewers spot
`NOT_READY` patterns in seconds because they have internalized hundreds of
worked cases. Today an agent can cite MDA but cannot apply it to a brief.
Worked examples turn rules into cases, and cases into recognizable patterns.

This is the highest value-per-effort move in the value review. Each
operational guide costs roughly the same and unlocks a different review
surface.

## Priority Sources To Convert

Convert four sources first.

| Source | Surface It Strengthens |
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

Update [Game Craft Source Map](../../../core/references/game-craft-source-map.md)
to link operational guides next to source citations. Update relevant role
playbooks and review references to point to operational guides when the
review surface matches.

## Proof Of Improvement

A reviewer should be able to:

- read an operational guide in five minutes
- apply it to a fictional brief in ten minutes
- name one failure mode the guide catches that the rubric alone would miss

If a guide cannot pass these three checks, it is still a syllabus, not a
curriculum.
