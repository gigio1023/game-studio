# External Game Agent Repo Review

This folder records what Game Studio should learn from two MIT-licensed game
agent workflow repositories cloned under `/Users/naem1023/git/harenss`.

## Source Snapshot

| Repo | Local path | Commit reviewed | License | Godot files found |
| --- | --- | --- | --- | --- |
| Claude Code Game Studios | `/Users/naem1023/git/harenss/Claude-Code-Game-Studios` | `984023d` | MIT | none |
| gstack-game | `/Users/naem1023/git/harenss/gstack-game` | `ea4a93a` | MIT | none |

Search covered `project.godot`, `*.gd`, `*.tscn`, and `*.tres`. Neither repo
contains a runnable Godot project. Do not copy either repo into Game Studio as a
Godot example. The useful material is workflow design, skill routing, review
language, and engine-specific guardrails.

## Report Sections

- Claude Code Game Studios
- gstack-game
- Synthesis For Game Studio

## Adoption Rule

Use these repos as reference designs, not dependencies. Game Studio should stay
smaller, stricter about playable validation, and clearer about human authorship.

## Claude Code Game Studios Review

Source: `/Users/naem1023/git/harenss/Claude-Code-Game-Studios` at commit
`984023d` (`Release v1.0.0`, 2026-05-13).

### What It Is

Claude Code Game Studios is a Claude Code template that installs a large studio
hierarchy into a game repo: 49 agents, 73 skills, 12 hooks, 11 rules, and 41
templates. It presents itself as a full AI team with directors, leads,
specialists, phase gates, and engine specialists for Godot, Unity, and Unreal.

Its strongest idea is not the number of agents. Its strongest idea is that each
agent has an explicit job, file ownership expectations, escalation path, and
stage-aware workflow.

### Strong Patterns

#### 1. Start By Classifying The User State

`/start` asks whether the user has no idea, a vague idea, a clear concept, or
existing work. It detects engine config, concept docs, source files, prototypes,
and production files before routing.

Game Studio already has entry modes, but the current user experience still
depends on the agent remembering which skill to run. The repo confirms that
Game Studio needs a navigator skill or routing reference that chooses the first
workflow step before any review or implementation begins.

#### 2. Prototype And Vertical Slice Mean Different Things

The repo splits:

- `/prototype`: a throwaway concept build that asks whether one interaction is
  worth designing around.
- `/vertical-slice`: a near-production build that asks whether one full loop can
  be built at representative quality and speed.

This is directly useful. Game Studio already says not to call a first playable a
vertical slice too early, but the external repo gives a sharper operational rule:
the first build tests desire and feel; the later slice tests pipeline, schedule,
quality, and production rate.

#### 3. Godot Needs Engine-Specific Review Before Code

The Godot specialist files enforce:

- scene and node composition before inheritance
- typed GDScript
- resources for reusable data
- signals for ownership-boundary communication
- sparse autoloads
- import, scene-load, and visual checks before claiming success
- current engine reference docs before using version-sensitive APIs

This is better than saying "use Godot best practices." It names concrete code
and project checks that a Godot implementation agent can follow.

#### 4. Brownfield Adoption Is A Format Audit, Not A File Count

The brownfield example does not merely ask whether design files exist. It checks
whether rough notes can be used by later skills. It infers systems from code,
builds a systems index, and keeps existing work instead of replacing it.

Game Studio should adopt this stance for Godot repos. A `project.godot` file and
a few `.gd` scripts do not mean the project has a usable production state.

#### 5. Gate Checks Carry Forward Work

Its gate examples show low-severity concerns being carried into ADRs rather than
blocking all progress. This matters for solo creators. A strict framework that
blocks every imperfection becomes unusable.

Game Studio should distinguish:

- missing playable validation: blocks the claim
- known design concern: can advance if recorded with next build or retest
- human-owned direction decision: stops for the user

### Risks To Avoid

#### 1. Too Many Roles Can Hide The Real Question

The repo's breadth is impressive, but it risks turning every problem into
department routing. A solo creator usually needs the smallest role set that
protects the current risk, not a simulated studio meeting.

Game Studio should not compete by adding more roles. It should compete by making
the next playable question clearer.

#### 2. Hook And Template Volume Can Become Theater

Hooks, rules, and templates help only if they change a decision. Game Studio
should not copy hook lists or template counts. It should copy the idea that each
check must name the claim it supports.

#### 3. It Does Not Provide Godot Example Projects

No `project.godot`, `.gd`, `.tscn`, or `.tres` files were found. The repo is a
workflow reference, not a Godot sample library.

### Adoption Decisions

| Adopt | Target | Reason |
| --- | --- | --- |
| Prototype vs vertical-slice distinction | `docs/`, `core/templates/production/`, skills | Prevents early builds from being overnamed. |
| Godot code and scene checks | `profiles/engines/godot.yaml`, operational references | Gives agents concrete Godot review behavior. |
| Brownfield format audit | future navigator and examples | Helps existing Godot repos enter the workflow without rewriting everything. |
| Review mode idea | future skill navigator | Lets solo users pick lighter review without losing gates. |

| Do not adopt | Reason |
| --- | --- |
| 49-agent studio hierarchy | Too broad for Game Studio's narrower promise. |
| Copying repo files wholesale | No runnable Godot example exists, and copying would add maintenance cost. |
| Phase gates as the public story | Game Studio should lead with playable validation, not project bureaucracy. |

## gstack-game Review

Source: `/Users/naem1023/git/harenss/gstack-game` at commit `ea4a93a`
(`Refine spark lens co-creation language`, 2026-05-13).

### What It Is

gstack-game is a Claude Code skill pack for game development. It has 29 skills
that cover spark exploration, design review, prototype planning, handoff, game
feel review, playability review, QA, and release. It is not a code generator.
Its strongest claim is better judgment, not automatic implementation.

### Strong Patterns

#### 1. Separate Spark Protection From Critique

`/spark-lens` protects early, fragile ideas. It explicitly avoids scoring,
market language, feasibility checks, and forced deliverables. Its method stack
keeps generation and evaluation separate.

Game Studio's taste-to-game path should keep this separation. Early taste work
should not be punished by production review language too soon. The first job is
to find charged material, then translate it into a playable question.

#### 2. Each Skill Has A Clear Next Step

gstack-game routes from one skill to the next:

```text
spark -> think -> plan -> review -> slice -> handoff -> build -> feel
-> playability -> test -> ship -> reflect
```

The useful part is not the exact chain. The useful part is that every skill has
a stop condition and a next skill. Game Studio should make the same rule visible
in its active skills.

#### 3. Review Voice Names The Player Consequence

The better gstack-game files push against vague review language. Instead of
"this could be improved," they ask for the specific player effect: dead time,
missed tutorial, unclear failure, weak hit confirmation, no return hook.

Game Studio should adopt this expectation in role-led game reviews. A role
review is valuable only when it names what the player will see, miss, feel, or
misread.

#### 4. Design Intent Must Survive Implementation

The gameplay implementation review adds a "Design Intent Survival" pass before
normal code review. It checks whether acceptance criteria, soul of the mechanic,
scope boundaries, gameplay values, and silent behavior changes survived the code.

This is highly aligned with Game Studio. The repo should make this a standard
part of implementation handoff review, especially for Godot where a clean script
can still produce the wrong scene timing, collision behavior, or feedback chain.

#### 5. Playability Is A Build Review, Not A Document Review

`/build-playability-review` scores loop closure, session viability, onboarding
clarity, failure recovery, retention signal, and peak moment. It refuses to judge
from documents alone.

This is the closest match to Game Studio's value. The dimensions are not perfect,
but they point to the right question: does the build create an experience worth
continuing?

#### 6. Shared Artifact Storage Is Useful, But Not Project-Local Enough

gstack-game stores outputs under `~/.gstack/projects/{slug}` so skills can read
prior work across sessions. The idea is useful. The location is less suitable for
Game Studio, which already prefers `.game-studio/` inside the target repo.

Game Studio should keep project-local state so collaborators, commits, and
review records share the same truth.

### Risks To Avoid

#### 1. Scoring Can Become False Precision

Scores like 7.8 or 10/12 are useful when tied to observable player behavior.
They become harmful when they replace the actual finding. Game Studio should
allow compact verdicts, but the main artifact must remain the player-facing
reason and next build or retest.

#### 2. Aggressive Voice Can Clash With Discovery

Direct review is useful after the user asks for judgment. It is bad during early
taste work. Game Studio should keep warm discovery and hard review as separate
modes.

#### 3. No Godot Example Projects

No `project.godot`, `.gd`, `.tscn`, or `.tres` files were found. The repo offers
Godot-adjacent implementation review concepts, not runnable Godot samples.

### Adoption Decisions

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

## Synthesis For Game Studio

This synthesis turns the two external repo reviews into concrete Game Studio
changes.

### Core Judgment

Game Studio should not become a bigger skill bundle. Its value should be that it
turns taste, direction, or existing Godot work into the next playable build, then
judges that build with the right roles.

The external repos show two different strengths:

- Claude Code Game Studios is strong at role and phase structure.
- gstack-game is strong at sharp review voice and player-centered scoring.

Game Studio should combine neither wholesale. It should use both to make a
smaller production framework with stricter playable validation.

### Godot Finding

Neither repo includes a runnable Godot project. There is nothing worth copying as
example code. The right adoption is a Godot playable-build reference that tells
agents how to plan, implement, and verify a Godot prototype without pretending
that text inspection proves the game works.

### Changes Made From This Review

| Change | File |
| --- | --- |
| Added external repo analysis index | `research/repo-review/external-game-agent-repos/README.md` |
| Added CCGS review | `research/repo-review/external-game-agent-repos/README.md#claude-code-game-studios-review` |
| Added gstack-game review | `research/repo-review/external-game-agent-repos/README.md#gstack-game-review` |
| Added this synthesis | `research/repo-review/external-game-agent-repos/README.md#synthesis-for-game-studio` |
| Added Godot playable-build guide | `core/references/operational/godot-playable-build.md` |
| Strengthened Godot profile | `profiles/engines/godot.yaml` |
| Connected execution skill to Godot guide | `skills/game-execution/SKILL.md` |
| Added Godot eval fixture | `evals/prompts/godot-playable-build-claim.md` and expected output |

### Product-Level Lessons

#### 1. Routing Is A Product Feature

The user should not need to know whether they need onboarding, director review,
execution handoff, or gate review. A navigator should pick the first step,
state the stop condition, and refuse human-owned decisions.

#### 2. First Playable And Vertical Slice Need Different Contracts

A first playable proves one player action and response. A vertical slice proves
one complete loop at representative quality and gives a production-rate signal.
These should never share the same artifact template.

#### 3. Godot Completion Requires Runtime Checks

For Godot, "files changed" is not enough. A claim needs at least one of:

- import or syntax check
- scene load or smoke script
- gameplay capture or walkthrough note
- playtest note tied to the proof target

If those are absent, the gate should ask for the next smallest runtime check.

#### 4. Role Reviews Need A Player Consequence

A review finding should name the player-facing effect. Examples:

- "The player has no failure recovery after damage."
- "The first meaningful action arrives after 90 seconds."
- "The hit reaction has impact but no resolution beat."
- "The build shows movement and combat, but no spend path, so the loop does not close."

If a finding cannot name a player consequence, it is probably repository hygiene,
not game-quality review.

#### 5. Generated Material Is Not Progress

Both external repos generate many documents. Game Studio must treat generated
material as a liability until it helps a playable decision. More docs are useful
only when they reduce uncertainty, preserve a decision, or enable a build check.

### Next Adoption Work

1. Add `skills/game-navigator/` so routing stops depending on memory.
2. Add a Godot first-playable example with small `.gd`, `.tscn`, and report files
   only if a real runnable sample is built and checked.
3. Add a brownfield Godot adoption example that infers systems from existing
   `.gd` and `.tscn` files.
4. Add a design-intent-survival section to implementation handoff review.
