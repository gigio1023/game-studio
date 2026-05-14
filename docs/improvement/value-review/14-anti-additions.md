# Anti-Additions

Value reviews tend to recommend additions. This file lists improvements that
look attractive but lower value-per-effort or pull the framework off its
strong shape. Recording them protects the highest-value changes from being crowded out
by plausible but lower-value work.

## Why Explicit Anti-Additions

Adding more roles, profiles, anti-patterns, or templates is easy. Each one
appears useful in isolation. Together they dilute the framework into a
checklist with no center. The single highest-value moves listed in
[Production Failure Protocols](11-production-failure-protocols.md),
[AI-Assisted Design Workflows](12-ai-assisted-design-workflows.md), and
[Craft Curriculum And Beginner Pedagogy](13-craft-curriculum-and-beginner-pedagogy.md) should run
first.

## Anti-Addition List

### Stricter Schemas Beyond Operating Contracts

Tighter schema validation looks helpful but pays back only when an operating
contract is being broken. Tighten only when a real authoring failure repeats.
Avoid changing schemas just for symmetry.

### Equal Depth For All Engine Profiles

Filling Godot, Unity, and Unreal profiles to equal depth costs three times
more than choosing one engine and going deep. Pick one (Godot solo indie is
the strongest current candidate) and prove the deep version first.

### More Anti-Patterns

The [anti-patterns list](../../anti-patterns.md) covers nine real failure
modes. Adding more rarely improves agent behavior. Convert existing
anti-patterns into retrospectives instead.

### Filling Every Empty Lead Playbook

Solo and small-team work does not need community-marketing-lead,
localization-lead, level-designer, or every empty role. Add only when a real
review workflow needs the playbook. Release manager and accessibility lead
remain priorities because they touch active gates.

### Adding A Standalone CLI

A standalone CLI would imply Game Studio is a tool to install globally. The
framework should remain project-local. Add CLI area only when project-local
operation has obvious friction that scripts cannot solve.

### Building A Formal Eval Framework Before The Eval Set Stabilizes

Codex review practice is more important than eval tooling. Keep evals as
Markdown fixtures until the prompt set has stabilized for at least two value
reviews.

### Adding Process For Process

Any added review, gate, or template that does not change a verdict, a stop
condition, or a proof target should be rejected. Process without authority is
the role-empty process anti-pattern wearing a different hat.

## When An Anti-Addition Becomes An Addition

Each item above can graduate to an addition when:

- a real recurring failure proves it is needed
- the highest-value moves from the roadmap are complete
- removing the addition would reduce value, not only process overhead

## Proof Of Improvement

The next value review should compare new additions in this directory against
this list. Any new addition that overlaps an item here without meeting a
graduation condition should be rejected and the rejection recorded as a
decision.
