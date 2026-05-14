# Game Production and Direction Foundations

Game Studio should treat game development as staged evidence, not as feature
accumulation. Direction defines the promise, production chooses the proof, and
execution produces a playable artifact that can be reviewed by the right roles.

## Source Map

| Source | Use in this report |
| --- | --- |
| [The Game Production Toolbox](https://www.routledge.com/The-Game-Production-Toolbox/Chandler/p/book/9781138341708) | Production phases, prototypes, requirements, teams, QA, launch, marketing, and release work. |
| [The Game Production Handbook](https://books.google.com/books/about/The_Game_Production_Handbook.html?id=MUOG6CE08ucC) | Producer-facing lifecycle from concept through release-ready work, including pre-production, testing, localization, and project management. |
| [A Playful Production Process](https://mitpress.mit.edu/9780262045513/a-playful-production-process/) | Playcentric phase model with milestones, deliverables, communication, collaboration, and post-production. |
| [Agile Game Development with Scrum](https://www.mountaingoatsoftware.com/books/agile-game-development-with-scrum) | Iterative planning, teams, faster feedback loops, and discipline-specific agile practices for game work. |
| [Game Design Workshop](https://www.oreilly.com/library/view/game-design-workshop/9781003858447/) | Player advocacy, player experience goals, prototyping, playtesting, iteration, production, and QA. |
| [MDA: A Formal Approach to Game Design and Game Research](https://www.cs.northwestern.edu/~hunicke/MDA.pdf) | Translation between mechanics, runtime dynamics, and player experience. |
| [Unity: A game development process](https://learn.unity.com/tutorial/a-game-development-process-1) | Ideation, pre-production, production, and post-release framing. |
| [Unity: Production and Post-release](https://learn.unity.com/course/unity-for-humanity-guide-for-creators/unit/game-development-in-a-nutshell/tutorial/production-and-post-release?version=6.0) | Vertical slice framing, milestone cadence, external feedback, and post-release maintenance planning. |
| [IGDA Production SIG](https://igda.org/sigs/production/) | Production as a professional discipline around support, empowerment, and advancement of game producers. |
| [IGDA Game Crediting Guide 10.1](https://igda.org/wp-content/uploads/2021/11/IGDA-Game-Crediting-Guidelines-10.1-March-2023.pdf) | Formal role attribution, credit policy timing, contributor inclusion, and credits as release scope. |
| [Game Producers Guide: Milestone template](https://www.gameproducersguide.com/TEMPLATE%20-%20Milestone.pdf) | Milestone facts, deliverable definitions, quality criteria, missing-scope notes, QA walkthroughs, and expected media. |
| [Steamworks: Release Process](https://partner.steamgames.com/doc/store/releasing) | Store and build review checklists, coming-soon timing, release permissions, and release control. |
| [Steamworks: Steam Next Fest](https://partner.steamgames.com/doc/marketing/upcoming_events/nextfest?language=english) | Demo eligibility, public store page dependency, registration, and workback timing. |
| [itch.io: Limited Playtests and Releases](https://itch.io/docs/creators/limited-releases) | Limited access, closed playtests, staged distribution, community feedback, and early-access risk. |

## Principles

- **Start with player experience**: Name the desired player response before naming features. MDA supports moving from desired experience back to dynamics and mechanics.
- **Use prototypes to answer questions**: A prototype should prove one risk or hypothesis. It should not be judged as a small version of the final game.
- **Do not skip pre-production**: Pre-production should produce a playable design, technical feasibility evidence, production assumptions, and known risks.
- **Reserve vertical slice for target-quality proof**: A vertical slice represents final-quality intent across gameplay, content, UI, audio, visual direction, and stability. It is not just a polished prototype.
- **Make milestones evidence contracts**: A milestone should define the goal, non-goals, deliverables, quality criteria, owner roles, review roles, and QA walkthrough.
- **Treat external feedback as a gate input**: Playtests, community checks, and stakeholder reviews should be attached to milestones, not saved for the end.
- **Plan release as production work**: Store pages, demo eligibility, build review, trailer assets, credits, localization, support, and post-release maintenance are release scope.
- **Protect the team model**: Production leadership should clarify authority, dependencies, communication, and contributor attribution before the release phase.

## Proof Terminology

| Term | Meaning | Gate question |
| --- | --- | --- |
| Concept | A game idea with audience, promise, and constraints. | Is this worth exploring? |
| Prototype | A disposable or partial proof for one design, technical, or production question. | Did it answer the question? |
| Proof of concept | A feasibility proof for a risky mechanic, pipeline, platform, or production assumption. | Can this work at all? |
| First playable | The earliest integrated build that demonstrates the basic play path. | Can someone play the intended loop? |
| Core loop prototype | A repeatable loop with feedback, success, failure, and motivation. | Is the game activity compelling enough to repeat? |
| Presentation proof | Evidence that the chosen format earns its cost. | Does the look, camera, input, audio, or UI add player value? |
| Vertical slice | A short, production-representative section at intended quality. | Does this prove the shipped quality bar? |
| Public demo | A public or semi-public build with clear promise boundaries. | Can outside players understand and judge the game? |
| Release candidate | A build and public docs ready for final release review. | Can the team ship this honestly? |

## Agent Operating Model Changes

- **Require a stage before work starts**: The agent should identify the current stage and refuse to label work as vertical slice unless earlier proof exists.
- **Record the hypothesis first**: Every plan should state what the next artifact must prove before listing implementation tasks.
- **Separate discovery from production**: Discovery tasks can be rough and disposable. Production tasks need scope control, quality targets, verification, and rollback plans.
- **Attach evidence to every milestone**: The agent should ask for build evidence, playtest notes, screenshots or video, verification output, and known missing scope.
- **Activate roles by risk**: Direction changes need director review. Release material changes need release review. Systems, UX, art, audio, localization, accessibility, and QA activate when their area is touched.
- **Track public promise drift**: Any change to screenshots, store text, trailer claims, demo copy, platform support, or release scope should trigger a promise check.
- **Treat playtests as scheduled work**: The agent should plan who plays, what question is being tested, what data is captured, and what decision follows.
- **Close the loop after release**: The agent should preserve source, assets, build notes, known issues, credits, support expectations, and post-release measurement.

## Role Responsibilities

| Role | Primary responsibility | Approval authority |
| --- | --- | --- |
| Game Director | Game identity, audience promise, player role, pillars, and final creative tradeoffs. | Direction Lock, identity changes, vertical-slice readiness. |
| Producer | Scope, schedule, milestone contracts, dependencies, communication, and release workback. | Milestone readiness, production start, release readiness. |
| Technical Director | Architecture, engine constraints, build pipeline, technical feasibility, and risk retirement. | Protocol proof, production technical gates, release build risk. |
| Systems Designer | Rules, progression, economy, combat, simulation, and feedback loops. | Core loop prototype and balancing evidence. |
| UX Designer | Onboarding, input, UI clarity, accessibility areas, and player comprehension. | First playable, demo candidate, public release materials. |
| Art Director | Visual target, asset pipeline, style guide, and production value. | Presentation proof and vertical slice. |
| Audio Director | Music, sound effects, ambience, mix, and implementation standards. | Presentation proof and vertical slice. |
| QA Lead | Test plan, defect triage, acceptance checks, playtest protocol, and evidence quality. | All evidence gates and release candidate. |
| Release Manager | Store readiness, demo packaging, platform review, credits, localization status, and support plan. | Demo candidate and release candidate. |
| Community or Marketing Lead | Audience messaging, press kit, demo timing, external feedback, and launch communication. | Public demo and release promise. |

## Milestone Gates

| Gate | Required evidence | Exit decision |
| --- | --- | --- |
| Direction Lock | Thesis, pillars, anti-pillars, target player, experience targets, release strategy, and risk list. | The team can start proof work without redefining the game each sprint. |
| Protocol Proof | Minimal rule loop, observable success and failure, technical feasibility notes, and captured evidence. | The central rule is real enough to prototype the repeatable loop. |
| Core Loop Prototype | Repeatable play session, feedback cycle, player motivation, failure state, and playtest notes. | The core activity is worth broader production planning. |
| Presentation Value Gate | Camera, input, UI, audio, visual target, performance risk, asset cost, and player value rationale. | The chosen presentation format earns its production cost. |
| Pre-production Exit | Production scope, schedule assumptions, team roles, budget or timebox, pipeline, content plan, and risk retirement. | The project can enter production without open-ended discovery. |
| Vertical Slice | Target-quality short section, final-quality criteria, content boundary, external playtest, stability evidence, and missing-scope list. | The quality bar is credible and repeatable. |
| Public Demo Candidate | Demo build, onboarding, bug triage, store or page copy, screenshots, trailer, feedback plan, and known limitations. | Outside players can receive an honest promise. |
| Release Candidate | Approved store presence, reviewed build, credits, localization, accessibility claims, support plan, archive plan, and release checklist. | The team can release and support the game honestly. |
| Post-release Learning | Metrics, player feedback, patch notes, support issues, archive status, and retrospective. | The team can decide whether to patch, expand, pause, or start the next project. |

## Current Repo Gaps

- **No production-direction foundation**: The repository lacked a research scope that maps its stage model to external production references for production, milestones, and release.
- **Missing formal glossary**: Prototype, proof of concept, first playable, demo, vertical slice, alpha, beta, and release candidate need stable definitions.
- **Pre-production exit is implicit**: The stage model jumps from early proof toward presentation and vertical slice without a named pre-production exit gate.
- **Milestone contracts are thin**: Current templates do not require due date, deliverable-level acceptance, dependency inputs, QA walkthroughs, expected media, or quality criteria.
- **Release gates are too narrow**: The release gate does not yet encode store review, build review, demo eligibility, coming-soon timing, platform permissions, support, or archive requirements.
- **Marketing and community ownership is absent**: Role files have release management but no explicit owner for press kit, audience messaging, wishlist strategy, community checks, or demo feedback.
- **Credits are not modeled**: Release planning should include credit policy, contributor records, review timing, and in-game credit access.
- **Playtest cadence is not connected to stages**: Playtest requirements exist conceptually, but stage gates should require playtest questions, target players, results, and decision records.
- **Schemas allow weak milestones**: The milestone schema does not enforce hypothesis, non-goals, owner roles, review roles, acceptance criteria, verification, dates, or exit decision.
- **Post-release is under-specified**: The framework names post-release learning but lacks concrete archive, support, patch, telemetry, community, and retrospective artifacts.

## Recommended Next Changes

1. Add a production glossary under `core/reference/` or `docs/`.
2. Add a `GS-PREPRODUCTION-EXIT` gate.
3. Expand the milestone schema and template with quality criteria, due date, deliverables, QA walkthrough, dependencies, review roles, and exit decision.
4. Add release-manager references for Steam, itch.io, demo, credits, support, and archive checks.
5. Add a community or marketing role profile for public demo and release-stage work.
6. Make playtest evidence a required field for core loop, vertical slice, and demo gates.
7. Add a credits template based on IGDA timing and attribution guidance.
8. Add post-release templates for archive checklist, support plan, patch ledger, and retrospective.
