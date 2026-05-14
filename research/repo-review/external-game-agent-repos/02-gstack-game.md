# gstack-game Review

Source: `/Users/naem1023/git/harenss/gstack-game` at commit `ea4a93a`
(`Refine spark lens co-creation language`, 2026-05-13).

## What It Is

gstack-game is a Claude Code skill pack for game development. It has 29 skills
that cover spark exploration, design review, prototype planning, handoff, game
feel review, playability review, QA, and release. It is not a code generator.
Its strongest claim is better judgment, not automatic implementation.

## Strong Patterns

### 1. Separate Spark Protection From Critique

`/spark-lens` protects early, fragile ideas. It explicitly avoids scoring,
market language, feasibility checks, and forced deliverables. Its method stack
keeps generation and evaluation separate.

Game Studio's taste-to-game path should keep this separation. Early taste work
should not be punished by production review language too soon. The first job is
to find charged material, then translate it into a playable question.

### 2. Each Skill Has A Clear Next Step

gstack-game routes from one skill to the next:

```text
spark -> think -> plan -> review -> slice -> handoff -> build -> feel
-> playability -> test -> ship -> reflect
```

The useful part is not the exact chain. The useful part is that every skill has
a stop condition and a next skill. Game Studio should make the same rule visible
in its active skills.

### 3. Review Voice Names The Player Consequence

The better gstack-game files push against vague review language. Instead of
"this could be improved," they ask for the specific player effect: dead time,
missed tutorial, unclear failure, weak hit confirmation, no return hook.

Game Studio should adopt this expectation in role-led game reviews. A role
review is valuable only when it names what the player will see, miss, feel, or
misread.

### 4. Design Intent Must Survive Implementation

The gameplay implementation review adds a "Design Intent Survival" pass before
normal code review. It checks whether acceptance criteria, soul of the mechanic,
scope boundaries, gameplay values, and silent behavior changes survived the code.

This is highly aligned with Game Studio. The repo should make this a standard
part of implementation handoff review, especially for Godot where a clean script
can still produce the wrong scene timing, collision behavior, or feedback chain.

### 5. Playability Is A Build Review, Not A Document Review

`/build-playability-review` scores loop closure, session viability, onboarding
clarity, failure recovery, retention signal, and peak moment. It refuses to judge
from documents alone.

This is the closest match to Game Studio's value. The dimensions are not perfect,
but they point to the right question: does the build create an experience worth
continuing?

### 6. Shared Artifact Storage Is Useful, But Not Project-Local Enough

gstack-game stores outputs under `~/.gstack/projects/{slug}` so skills can read
prior work across sessions. The idea is useful. The location is less suitable for
Game Studio, which already prefers `.game-studio/` inside the target repo.

Game Studio should keep project-local state so collaborators, commits, and
review records share the same truth.

## Risks To Avoid

### 1. Scoring Can Become False Precision

Scores like 7.8 or 10/12 are useful when tied to observable player behavior.
They become harmful when they replace the actual finding. Game Studio should
allow compact verdicts, but the main artifact must remain the player-facing
reason and next build or retest.

### 2. Aggressive Voice Can Clash With Discovery

Direct review is useful after the user asks for judgment. It is bad during early
taste work. Game Studio should keep warm discovery and hard review as separate
modes.

### 3. No Godot Example Projects

No `project.godot`, `.gd`, `.tscn`, or `.tres` files were found. The repo offers
Godot-adjacent implementation review concepts, not runnable Godot samples.

## Adoption Decisions

| Adopt | Target | Reason |
| --- | --- | --- |
| Spark before critique | taste-to-game docs and onboarding | Protects early creator authorship. |
| Skill next-step contract | navigator and skills | Stops skills from ending in generic advice. |
| Design Intent Survival pass | execution handoff and role review | Keeps implemented code aligned with player experience. |
| Playability dimensions | validation gates and evals | Keeps build review focused on the player. |
| Shared artifact idea | `.game-studio/` project state | Maintains continuity without global hidden state. |

| Do not adopt | Reason |
| --- | --- |
| Global `~/.gstack` state as source of truth | Game Studio needs project-local records. |
| Raw score as final verdict | Game Studio should require next build, retest, or human decision. |
| One voice for all phases | Discovery and review need different tones. |
