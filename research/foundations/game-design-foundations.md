# Game Design Foundations

This report maps durable game-design foundations into repo docs, roles, skills, and templates.

## Source Map

| Source | Use in this repo |
| --- | --- |
| [The Art of Game Design: A Book of Lenses](https://www.routledge.com/The-Art-of-Game-Design-A-Book-of-Lenses-Third-Edition/Schell/p/book/9781138632059), Jesse Schell | Convert review from pass/fail checking into lens-based questioning across experience, player, mechanics, interface, story, world, balance, playtesting, and team communication. |
| [Game Design Workshop](https://www.routledge.com/Game-Design-Workshop-A-Playcentric-Approach-to-Creating-Innovative-Games/Fullerton/p/book/9781032607009), Tracy Fullerton | Anchor the operating model in playcentric iteration: define player experience goals, prototype, playtest, revise, and document only what guides decisions. |
| [Rules of Play](https://mitpress.mit.edu/9780262240451/rules-of-play/), Katie Salen Tekinbas and Eric Zimmerman | Add a theory vocabulary for rules, play, interactivity, systems, meaningful play, emergence, information, narrative, social play, and cultural meaning. |
| [MDA: A Formal Approach to Game Design and Game Research](https://aaai.org/papers/ws04-04-001-mda-a-formal-approach-to-game-design-and-game-research/), Robin Hunicke, Marc LeBlanc, Robert Zubek | Require a causal chain from mechanics to dynamics to intended aesthetics, and review the chain from the player side as well as the designer side. |
| [Characteristics of Games](https://mitpress.mit.edu/9780262542692/characteristics-of-games/), George Skaff Elias, Richard Garfield, K. Robert Gutschera | Add comparative design dimensions: player count, rules, luck, skill, effort, reward, downtime, interaction, and balance. |
| [Game Mechanics: Advanced Game Design](https://www.informit.com/store/game-mechanics-advanced-game-design-9780132946704), Ernest Adams and Joris Dormans | Treat mechanics as systems with feedback loops, resources, economies, emergence, progression, friction, and tunable balance. |
| [Flow in Games](https://www.jenovachen.com/flowingames/thesis.htm), Jenova Chen | Add challenge-skill fit, learning ramp, self-adjustment, and player-controlled difficulty as playtest concerns. |
| [A Theory of Fun for Game Design](https://www.oreilly.com/library/view/theory-of-fun/9781449363208/), Raph Koster | Treat fun as learning, pattern mastery, surprise, and boredom avoidance rather than a vague approval word. |

## Distilled Principles

- **Experience first**: A game design starts with what the player should do, notice, feel, learn, and decide.
- **Rules create meaning**: Choices matter when the player can read the outcome and the outcome changes future play.
- **Mechanics are causes**: A proposed mechanic must name the dynamic behavior it should produce and the player experience it should support.
- **Fun is not one thing**: Use explicit aesthetic goals such as challenge, discovery, expression, fellowship, fantasy, narrative, sensation, and relaxation.
- **Iteration is the method**: Direction is a hypothesis until a prototype and playtest expose player behavior.
- **Balance is contextual**: Difficulty, luck, skill, pacing, reward, and friction are tuned against a target audience and session shape.
- **Learning is design**: Onboarding, feedback, affordances, failure recovery, and escalating complexity are core game design work.
- **Documents must decide**: A useful design doc rejects tempting alternatives, names tuning knobs, and gives reviewers enough evidence to say no.
- **Code checks are supporting evidence**: Passing tests can prove implementation integrity, but they do not prove that a game works as play.

## Encoding Into Skills, Roles, And Templates

### Skills

- `skills/game-director/SKILL.md`: Add a design-foundation pass before verdicts: player role, core choice, intended aesthetic, mechanic-dynamic-experience chain, and rejected alternatives.
- `skills/game-director/references/director-review.md`: Add a short lens set instead of a generic review flow: player, core loop, meaningful choice, feedback, challenge, onboarding, fantasy, and anti-pillar.
- `skills/game-review-council/SKILL.md`: Require each active role to judge the playable experience, not only artifacts checked.
- `skills/game-execution/references/work-packages.md`: Add an `Experience Intent` field for every gameplay work package: player action, expected feedback, target feeling, and evidence.
- `skills/game-evidence-gate/SKILL.md`: Keep deterministic checks, but make play evidence first-class: observed player behavior, playtest task completion, confusion points, and mismatch between intent and result.

### Roles

- `game-director`: Owns player experience, pillars, intended aesthetics, and rejected directions.
- `systems-designer`: Owns mechanics, resources, feedback loops, skill/luck balance, emergence, progression, and tuning knobs.
- `ux-designer`: Owns player learning, input clarity, feedback readability, accessibility, and confusion boundaries.
- `qa-lead`: Owns evidence quality, including whether a playtest demonstrates behavior rather than preference.
- Recommended addition: `game-designer` or `lead-designer` as a standing role for formal elements, core loop integrity, and MDA causality when the council is larger than the lean default.

### Templates

- `core/templates/direction/game-thesis.md`: Add target player, core decision, core feedback, intended aesthetic palette, and the first thing the player must learn.
- `core/templates/direction/player-experience-targets.md`: Add `Mechanics`, `Dynamics`, `Aesthetics`, `Learning`, `Failure`, and `Observed Evidence` rows for each time window.
- `core/templates/direction/creative-pillars.md`: Add `Design lens question` and `Mechanic proof` under each pillar.
- `core/templates/production/milestone-contract.md`: Add `Experience Hypothesis`, `Prototype Question`, and `Playtest Scenario`.
- `core/templates/review/council-review.md`: Add `Design Judgment` before role verdicts: what worked in play, what failed in play, what is still only a claim.

## Concrete Repo File Changes Recommended

- `docs/philosophy.md`: Add a principle that a game is judged by playable experience, not document volume or code health alone.
- `docs/director-layer.md`: Add a compact "Design Foundations" section that names lenses, MDA, meaningful play, and playcentric iteration.
- `docs/evidence-gates.md`: Split evidence into `Implementation Evidence`, `Design Evidence`, and `Player Evidence`.
- `docs/anti-patterns.md`: Add anti-patterns for "mechanic without dynamic", "aesthetic without evidence", "fun as a verdict", and "playtest as opinion poll".
- `core/gates/direction.md`: Strengthen `GS-PLAYER-EXPERIENCE` with MDA causality, meaningful choice, challenge-skill fit, and onboarding proof.
- `core/gates/production.md`: Require each gameplay milestone to name the player behavior it proves.
- `core/rubrics/game-design-doc-rubric.md`: Expand from completeness to design judgment: formal elements, core choice, feedback loop, dynamics, aesthetic target, tuning knobs, playtest plan, and rejected alternatives.
- `core/rubrics/playtest-rubric.md`: Add observation prompts for learning, decision quality, feedback readability, difficulty fit, recovery from failure, and emotional target.
- `core/roles/leads.yaml`: Add or expand design-role authority so systems, UX, level, narrative, and audio leads have explicit design questions.
- `tools/check-project.mjs` and `tools/check-repository.mjs`: Keep structural checks, but label them as repository health checks. Do not let them imply game design readiness.

## Gaps In The Current Repo

- The repo has strong production language, but it lacks an explicit foundation page for game-design theory.
- The direction templates ask what the player feels and does, but they do not require a causal path from mechanic to player experience.
- The role roster lists authorities, but it rarely gives roles concrete design questions to ask.
- The playtest rubric records issues, but it does not yet separate observed behavior from player preference.
- The game-design doc rubric checks for required fields, but it does not evaluate meaningful choice, feedback legibility, challenge-skill fit, or system dynamics.
- The evidence model includes playtest reports, but deterministic checks still read as the most concrete proof type.
- The skills protect milestone order well, but they need more craft judgment: lenses, formal elements, MDA, learning curve, tuning, and player-facing consequences.

## Recommended Direction

Make the framework more opinionated about game design craft while keeping the production model lean. The best next change is a small foundation patch across the director skill, player experience template, playtest rubric, game-design doc rubric, and direction gates. That would shift the repo from "agents check that a project has the right artifacts" to "agents ask whether the artifacts describe a game that can create the intended play."
