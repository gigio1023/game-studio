# Claude Code Game Studios Review

Source: `/Users/naem1023/git/harenss/Claude-Code-Game-Studios` at commit
`984023d` (`Release v1.0.0`, 2026-05-13).

## What It Is

Claude Code Game Studios is a Claude Code template that installs a large studio
hierarchy into a game repo: 49 agents, 73 skills, 12 hooks, 11 rules, and 41
templates. It presents itself as a full AI team with directors, leads,
specialists, phase gates, and engine specialists for Godot, Unity, and Unreal.

Its strongest idea is not the number of agents. Its strongest idea is that each
agent has an explicit job, file ownership expectations, escalation path, and
stage-aware workflow.

## Strong Patterns

### 1. Start By Classifying The User State

`/start` asks whether the user has no idea, a vague idea, a clear concept, or
existing work. It detects engine config, concept docs, source files, prototypes,
and production files before routing.

Game Studio already has entry modes, but the current user experience still
depends on the agent remembering which skill to run. The repo confirms that
Game Studio needs a navigator skill or routing reference that chooses the first
workflow step before any review or implementation begins.

### 2. Prototype And Vertical Slice Mean Different Things

The repo splits:

- `/prototype`: a throwaway concept build that asks whether one interaction is
  worth designing around.
- `/vertical-slice`: a near-production build that asks whether one full loop can
  be built at representative quality and speed.

This is directly useful. Game Studio already says not to call a first playable a
vertical slice too early, but the external repo gives a sharper operational rule:
the first build tests desire and feel; the later slice tests pipeline, schedule,
quality, and production rate.

### 3. Godot Needs Engine-Specific Review Before Code

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

### 4. Brownfield Adoption Is A Format Audit, Not A File Count

The brownfield example does not merely ask whether design files exist. It checks
whether rough notes can be used by later skills. It infers systems from code,
builds a systems index, and keeps existing work instead of replacing it.

Game Studio should adopt this stance for Godot repos. A `project.godot` file and
a few `.gd` scripts do not mean the project has a usable production state.

### 5. Gate Checks Carry Forward Work

Its gate examples show low-severity concerns being carried into ADRs rather than
blocking all progress. This matters for solo creators. A strict framework that
blocks every imperfection becomes unusable.

Game Studio should distinguish:

- missing playable validation: blocks the claim
- known design concern: can advance if recorded with next build or retest
- human-owned direction decision: stops for the user

## Risks To Avoid

### 1. Too Many Roles Can Hide The Real Question

The repo's breadth is impressive, but it risks turning every problem into
department routing. A solo creator usually needs the smallest role set that
protects the current risk, not a simulated studio meeting.

Game Studio should not compete by adding more roles. It should compete by making
the next playable question clearer.

### 2. Hook And Template Volume Can Become Theater

Hooks, rules, and templates help only if they change a decision. Game Studio
should not copy hook lists or template counts. It should copy the idea that each
check must name the claim it supports.

### 3. It Does Not Provide Godot Example Projects

No `project.godot`, `.gd`, `.tscn`, or `.tres` files were found. The repo is a
workflow reference, not a Godot sample library.

## Adoption Decisions

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
