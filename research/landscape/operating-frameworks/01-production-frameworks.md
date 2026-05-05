# Game Production Framework Survey

## Research Question

1. Which production frameworks have explicit pre-direction-lock discovery phases (before milestone planning)? Cite by name.
2. Which have explicit concept death, scope crisis, or parallel risk rituals? Get specific.
3. What published production templates (milestone contracts, gate documents, vision docs, scope-cut logs) are publicly available to compare against?
4. What do successful "agile for games" practitioners critique about generic scrum-for-games?
5. Are there frameworks built specifically for solo or 2-3 person teams that scale up sensibly?
6. What lifecycle models exist beyond the typical concept/preprod/prod/release timeline?

---

## Sources Surveyed

- https://www.riotgames.com/en/r-and-d-office/incubation-exploration-with-a-plan — First-party documentation of Riot's R&D lifecycle. High authority; describes named phases with gate criteria.
- https://www.riotgames.com/en/r-and-d-office/prototype-building-a-games-substance — First-party Riot documentation of prototype phase exit criteria. High authority; specific deliverables listed.
- https://gameproductionalchemist.substack.com/p/scope-management-for-game-development — Practitioner substack on scope types. Moderate authority; part 1 of a series with detail deferred to part 2.
- https://www.gamedeveloper.com/production/death-march-crunches-10-causes-and-solutions — Game Developer magazine. High authority; named causes and solutions taxonomy for crunch.
- https://www.gamedeveloper.com/production/goodbye-postmortems-hello-critical-stage-analysis — Game Developer magazine. High authority; named methodology (CSA) with template structure.
- https://www.gamedeveloper.com/production/do-lean-startup-methods-make-for-a-better-game-development-model- — Game Developer magazine. Moderate authority; practitioner critique of Lean Startup applicability.
- https://ltpf.ramiismail.com/milestones/ — Rami Ismail's LTPF (Levelling the Playing Field). High authority for indie; four-phase milestone model with forced decisions.
- https://tonogameconsultants.com/death-spiral/ — Tono Game Consultants. Moderate authority; death spiral stage model, Scrum-adjacent solutions.
- https://www.gamedeveloper.com/production/organization-and-time-management-as-an-indie-studio — Game Developer magazine. Moderate authority; Multi-Level-Tasking framework for small studios.
- https://clintonkeith.com/ — Clinton Keith's official site. Low detail at page level; points to book content not surfaced publicly.
- https://www.routledge.com/The-Game-Production-Toolbox/Chandler/p/book/9781138341708 — Routledge product page for Heather Chandler's toolbox. Low detail; chapter structure confirmed, templates not publicly available.
- https://amazon.com/Games-Design-Play-detailed-iterative/dp/0134392078 — Macklin/Sharp "Games, Design and Play." Book description only; methodology is Conceptualize-Prototype-Playtest-Evaluate loop. Not a production framework per se.

---

## Framework Comparison Table

| Framework | Pre-Direction Discovery? | Concept Death? | Scope Crisis Ritual? | Parallel Risk? | Solo-Friendly? |
|---|---|---|---|---|---|
| Riot R&D Lifecycle (Incubation/Prototype/Pre-prod/Production) | Yes — explicit Incubation phase with sensemaking before any milestone | Partial — ~10% of pitches pass gate; no formalized kill metrics | Not explicit | Not documented | No — built for multi-team AAA |
| Clinton Keith Agile Game Development (Scrum for Games) | Partial — preproduction sprint exists but no named discovery phase | No | Prioritized backlog as implicit crisis buffer | Not documented | Moderate — scales down but biased to larger team ceremony |
| Rami Ismail LTPF Milestone Model | Yes — Ideation + Prototype as Research Phase before any production gate | Yes — "Fail Fast" strategy in ideation forces early kill decision | Yes — Feature Complete gate forces scope/resource decision | No | Yes — designed explicitly for indie/small teams |
| Critical Stage Analysis (CSA, Game Developer magazine) | No — operates within production, not before it | No — retrospective tool, not a gate mechanism | Yes — monthly milestone review catches scope drift in-flight | No | Yes — scales to any team size |
| Multi-Level-Tasking (indie studio framework) | No — starts from tasks, not discovery | No | No | No | Yes — explicitly designed for solo/small |
| Lean Startup / Build-Measure-Learn for games | Yes — MVP hypothesis formation is a discovery act | Partial — "pivot or persevere" decision after validation | Partial — scope implied by MVP constraints | No | Yes — low ceremony, but no game-specific formalization |
| Macklin/Sharp Iterative Design (Games, Design and Play) | Yes — Conceptualize phase with design values and brainstorming | No explicit kill gate | No | No | Yes — academic/small studio oriented |
| Heather Chandler Game Production Toolbox | Partial — prototype creation is distinct step before requirements | No — not documented | No | No | No — enterprise/publisher model |
| Tono Game Consultants Death Spiral Model | No — intervention framework, not lifecycle | No | No — describes spiral but no ritual to exit it | No | No |
| Scope Management Alchemist (three-scope types) | No | No | Partial — WBS + user story mapping as decomposition | No | Moderate |

---

## Key Findings

1. **Riot's R&D Lifecycle is the clearest public example of a pre-direction-lock discovery phase with named gates.** The Incubation phase (sensemaking, thesis formation) explicitly precedes Prototype, which precedes Pre-production. The gate between Incubation and Prototype rejects roughly 90% of pitches — a structural concept-death mechanism — but the kill criteria are qualitative ("thesis clarity") rather than metric-based. A thesis is defined as "specific problems or new opportunities that might exist in a given genre and the strategy to solve them," which is structurally distinct from a vision statement. No pitch passes the gate on its first submission. This 10% pass rate means Riot treats Incubation as a high-throughput idea-kill machine, not a development phase. Source: https://www.riotgames.com/en/r-and-d-office/incubation-exploration-with-a-plan

2. **Rami Ismail's LTPF is the most explicit solo/indie framework with a "Fail Fast" kill convention.** The Research Phase (Ideation + Prototype) precedes any production commitment and is the only public framework that treats early concept abandonment as a named, expected outcome rather than a failure. The four phases — Research, Pre-Production, Production, Wrap-Up — each contain named milestones with explicit forced decisions. At the Research/Pre-Production gate (the Vertical Slice milestone), the team must confirm full-scale production is feasible and secure funding if needed. This is a hard stop, not a soft checkpoint. The framework explicitly scales to solo developers. Source: https://ltpf.ramiismail.com/milestones/

3. **Critical Stage Analysis (CSA) is the clearest named alternative to postmortems that addresses scope crisis in-flight.** Monthly milestone reviews using a structured 5/5/5 template (five things right, five wrong, five needing improvement, each rated 1-5 on importance) create a recurring scope-check ritual. Critically, the CSA cycle requires problem responses within 3 days of a milestone, leadership review within 2 days of collection, and team discussion within one week — the entire cycle costs 2-4 hours. The key differentiator from generic retrospectives is the ownership-and-timeline requirement on every identified problem. Without ownership, retrospective outputs disappear. Source: https://www.gamedeveloper.com/production/goodbye-postmortems-hello-critical-stage-analysis

4. **No surveyed framework has an explicit "parallel risk" ritual.** Parallel development risk (e.g., simultaneous narrative and systems tracks diverging) appears only in risk management literature as a logistics/version-control problem, not as a production ceremony. The closest analog is Riot's prototype exit criterion requiring "depth of understanding on the team" of all key innovations — but this is a shared-understanding check, not a track-coherence gate. The absence of a named parallel risk ritual in all surveyed frameworks is a confirmed gap that this framework is positioned to fill from scratch.

5. **Clinton Keith's critique of generic Scrum centers on premature production start.** The core failure mode he identifies is beginning art and asset production before mechanics are validated, which locks in rework costs. His adaptation pushes for a dedicated preproduction sprint before any production sprint, with increasing-fidelity prototypes used to measure asset production cost during preproduction. Specifically, he recommends test-driven development and iterative delivery of potentially shippable builds. However, his public-facing materials do not describe a named discovery phase before even preproduction — the earliest phase in his documented approach is already assuming a game direction exists. Sources: https://clintonkeith.com/ and https://www.mountaingoatsoftware.com/books/agile-game-development-build-play-repeat

6. **The Lean Startup methodology offers concept death logic ("pivot or persevere") but requires game-specific translation.** Eric Ries developed the method at a game company (IMVU), but practitioners surveyed report that the validated-learning loop works well for mobile/service games and poorly for single-purchase narrative games where the feedback loop is months long. The "MVP" concept maps awkwardly onto a vertical slice: a vertical slice proves pipeline capability, while an MVP proves a product-market hypothesis. These are different questions. The most honest practitioner assessment found was that Lean Startup provides useful vocabulary ("validated learning," "pivot") but no published game-native adaptation of its core loop exists. Source: https://www.gamedeveloper.com/production/do-lean-startup-methods-make-for-a-better-game-development-model-

7. **Scope crisis literature identifies "Design Debt" as a distinct debt type** separate from technical debt and content debt. Design debt occurs when gameplay viability is only discovered after tech and assets are already committed — a sequencing failure that directly relates to the absence of a proof-gated pre-direction phase. The full taxonomy from the "Death March Crunches" article is: (1) technical debt from deferred bug fixes and optimization, (2) content debt from polished-asset demands after mechanics settle, (3) design debt from late gameplay validation. All three compound under fixed-scope/fixed-schedule constraints. The proposed solution — prioritized scope with a derived schedule, not a fixed schedule — is the clearest published statement of scope management philosophy in the surveyed literature. Source: https://www.gamedeveloper.com/production/death-march-crunches-10-causes-and-solutions

8. **The Heather Chandler Game Production Toolbox and Bryan Cashman materials are behind paywalls** with no meaningful public template extraction possible. Chapter outlines confirm that Chandler covers prototyping as a distinct phase before requirements-setting, and the six-part structure (Overview, Creating the Prototype, Establishing Requirements, Assembling the Team, Making the Game, Launching the Game) reflects a pre-direction-lock model where prototype precedes schedule. But the actual process templates, gate checklists, and milestone contracts are proprietary to the book. No leaked or shared versions were found. Source: https://www.routledge.com/The-Game-Production-Toolbox/Chandler/p/book/9781138341708

9. **No surveyed framework addresses LLM-native generative leverage or AI-agent production workflows.** All existing frameworks assume human-authored assets and human decision-makers. The closest structural analog is the Lean Startup MVP concept — proving the smallest generative loop before scaling it — but the operational mechanics of AI-assisted production are entirely unaddressed. The Supercell cell structure (5 people, full creative autonomy) is the closest organizational model for a Codex+Claude team, but Supercell's methodology beyond "small team with full control" is not publicly documented.

10. **"Vision Lock" exists in industry practice (department locks: Art Lock, Design Lock, Audio Lock) but has no published formal checklist.** These are described as late-production mechanisms to prevent scope expansion near launch, not as pre-direction discovery gates. They manage the tail of production, not the head. The distinction matters: the framework needs a Direction Lock at the beginning of production (before assets commit) as well as department locks at the end. Neither has a publicly available template.

11. **The "death spiral" as a named progressive failure model has five stages** confirmed across multiple sources: initial misstep, reactive fixes accumulating debt, mounting crunch pressure, quality sacrifices, and morale/vision collapse. The death spiral model is descriptive but not interventional — no surveyed source provides a ritual or gate for detecting spiral entry before stage 3 (crunch pressure). This is a specific sub-gap within gap (b): the framework needs an early-warning trip-wire for spiral detection, not just a crisis-response protocol.

12. **Supercell's game-killing mechanism is organizational, not processual.** Small cells (5 people) have full creative authority including the authority to kill their own game when they judge it not fun. This is reported but not documented in any methodology detail. It is the most radical concept-death structure found: the team itself acts as both creator and judge with no external review board. The mechanism works because the cells are trusted, experienced, and small enough to maintain shared judgment. Whether this scales to a Codex+Claude agent team is an open architectural question.

---

## Canonical vs. Hype Assessment

This section applies the skepticism filter: frameworks are assessed on whether they specify the decisions a team must make, not on whether they have book sales or conference presence.

**Canonical (methodology is specific and forces decisions):**
- Riot R&D Lifecycle — specific gate criteria, named phases, documented exit requirements, first-party source
- Rami Ismail LTPF — named forced decisions at each milestone gate, explicitly scaled to solo teams, publicly detailed
- Critical Stage Analysis — specific template structure, time constraints, ownership requirements, replicable from article alone
- Death March / Design Debt taxonomy (Clinton Keith + Game Developer) — specific named debt types, specific sequencing failures identified

**Methodologically substantive but paywalled:**
- Heather Chandler Game Production Toolbox — chapter structure confirms methodology exists; templates proprietary
- Clinton Keith Agile Game Development — critiques are specific; ceremonies and artifacts require book access

**Useful vocabulary, thin operational detail:**
- Lean Startup applied to games — "pivot or persevere" and "validated learning" are useful framings; no game-native mechanics
- Macklin/Sharp iterative design loop — strong conceptual model; no production milestone bridge

**Promotional or generic:**
- Most "game development lifecycle" content from studios-for-hire (Room 8, N-iX, etc.) — describes standard phases without specifying decisions, gate criteria, or failure modes
- Generic "scrum for games" without named adaptations — fails the decision-specificity test entirely
- Death spiral model (Tono Consultants) — describes failure stages usefully but proposes only generic Scrum/Agile remediation

---

## Notable Templates Found

- **Rami Ismail LTPF Milestone Worksheet** (inline at https://ltpf.ramiismail.com/milestones/) — Phase-by-phase forced-decision checklist for indie teams. Not a downloadable template but fully detailed inline.
- **Critical Stage Analysis Form** (described at https://www.gamedeveloper.com/production/goodbye-postmortems-hello-critical-stage-analysis) — 5/5/5 ranking template (1-5 scale), submitted within 3 days of each milestone. Two-to-four hours total per cycle. Not available as a download but fully reconstructable from the article.
- **ClickUp Game Design Document Template** — https://clickup.com/blog/game-design-document-templates/ — Public, free, covers core vision, features, mechanics, timeline. No milestone contract logic.
- **Nuclino GDD Template** — https://www.nuclino.com/articles/game-design-document-template — Structured GDD template, publicly accessible. No scope-cut or gate logic.
- **Indie Game Academy Free GDD Template** — https://indiegameacademy.com/free-game-design-document-template-how-to-guide/ — Includes concept, mechanics, and production sections. No milestone contract.
- **IdeaPlan GDD Template** — https://www.ideaplan.io/templates/game-design-document-template — Design document template with collaborative editing focus.
- **vitalzigns itch.io GDD Template** — https://vitalzigns.itch.io/gdd — Community-shared GDD. Free download. Production-oriented, includes team roles and schedule fields.

No publicly available milestone contract, gate verdict document, or scope-cut log template was found. These appear to be entirely proprietary to individual studios.

---

## Relevance To Game Studio

### Gap (a): Reference-moment to design-constraint translation method

**Finding 1 (Riot Incubation / Sensemaking)** maps most directly. Riot's "thesis vs. vision" distinction is the clearest published analog for translating a reference moment (genre observation, player problem, taste signal) into a falsifiable design constraint. The thesis must state: what specific player problem exists in this genre, and what specific design hypothesis addresses it. The vision (what the game feels like) is insufficient to enter prototype. Proposed change: formalize a Thesis Document as the first gate artifact in the Game Studio framework, distinct from a Vision Document. The Thesis Document must contain a stated problem, a stated hypothesis, and a named set of player behaviors that would confirm or falsify the hypothesis.

**Finding 6 (Lean Startup)** provides the translation grammar: "We believe [player type] experiences [specific friction/desire] when [situation]. Building [specific design element] will resolve it, which we will measure by [observable player behavior]." This is a design constraint, not a vision.

### Gap (b): Production dark rituals (concept death, scope crisis, parallel risk, deadline mode)

**Concept death:** Finding 2 (Rami Ismail Fail Fast) provides a viable structure. The Research Phase has an explicit go/no-go before any production resource commitment. The framework should adopt a Concept Viability Gate at the end of the Intake phase, with explicit kill criteria: e.g., "the core mechanic hypothesis cannot be demonstrated playably within a fixed prototype budget." The gate must be hard — not a review that can result in "continue with reservations."

**Scope crisis:** Finding 3 (Critical Stage Analysis) provides a viable ritual. Monthly CSA cycles during production sprints, using the 5/5/5 template with mandatory ownership and timeline for every problem. The specific time constraint (2-4 hours total) makes this viable for small teams. The framework should standardize CSA as the scope-crisis detection mechanism, not a generic sprint retrospective.

**Parallel risk:** Finding 4 confirms this is genuine white space. The framework should define a Parallel Track Sync Gate: a checkpoint when two simultaneous workstreams (narrative and systems, art direction and mechanics) must demonstrate coherent integration before either proceeds to the next milestone. This is a net-new contribution; no existing framework names it.

**Deadline mode:** Finding 7 (Design Debt taxonomy) provides the input signal. When all three debt types (technical, content, design) are simultaneously accumulating, deadline mode is active. The framework should define a Debt Audit as a named event triggered when any two debt types reach a threshold in the same sprint, with a mandated scope-cut decision before the next sprint begins.

### Gap (c): LLM-native generative leverage

Finding 9 confirms no existing framework covers this territory. The framework occupies original ground. Structural inputs from adjacent frameworks: Lean Startup MVP logic (prove the smallest generative loop before scaling it), Riot's prototype exit criteria (audience definition, playable experience, shared team understanding — all directly applicable to LLM-assisted production), and Supercell's small-cell autonomy model (agents as cell members with full creative and kill authority). The key open question is how a human producer gate-checks LLM agent output at milestone cadence when agents operate at a faster cycle than human review can sustain.

### Gap (d): Converting source-map citations into operational worked guides

Findings 1 and 2 demonstrate the principle: operationally useful frameworks specify the forced decision at each gate, not just the phase name. The Riot Prototype exit criteria are a list of four specific deliverables with observable evidence requirements. The LTPF milestone model states explicitly what decision is forced at each checkpoint. Proposed change for the Game Studio framework: every source-map citation should resolve to a named forced decision. The citation format should be: [Source] → [Specific decision it forces] → [Evidence required to pass gate]. This is what converts a reference into an operational guide.

---

## Lifecycle Models Beyond Standard Concept/Preprod/Production/Release

This addresses research question 6 directly. The surveyed landscape shows three distinct expansions beyond the four-stage standard:

**Riot's Five-Phase Model (Pitch/Incubation/Prototype/Pre-prod/Production)** inserts two stages before the standard "pre-production" — a lightweight pitch/sensemaking phase (Incubation) and a substantive proof-of-concept phase (Prototype) that both precede the team-staffing and roadmap work that most frameworks call pre-production. The practical effect is that direction is proven before headcount is committed, which changes the cost structure of early-stage risk.

**Rami Ismail's Four-Phase Research Model** reframes the standard phases by naming the pre-production work "Research" and subdividing it into Ideation and Prototype sub-milestones. The Wrap-Up phase (Release Candidate through launch) is treated as a separate phase from Production, not as the tail end of production. This is an underappreciated distinction: release preparation has a different risk profile from feature production and deserves its own named phase.

**The Death Spiral Model (Tono Game Consultants)** is an inverse lifecycle — a five-stage progressive failure escalation from initial misstep through vision collapse. It operates as a parallel track to the production lifecycle: a project can be simultaneously in "Production" and in "Stage 2 of Death Spiral." No existing framework provides a mechanism to detect which spiral stage a project is in during normal production.

**Iterative Loop Models (Macklin/Sharp, Lean Startup)** reject phase-based lifecycles entirely in favor of recursive loops: Conceptualize → Prototype → Playtest → Evaluate repeats at multiple scales (day, week, month, project). The limitation is that loop models do not prescribe when to exit the loop into full production, which makes them design methodology rather than production framework.

**Critical Stage Analysis** implies a lifecycle of recurring micro-cycles (monthly) nested within macro-phases, closer to a heartbeat model than a phase model. The production lifecycle becomes the aggregate of monthly CSA cycles rather than a set of named phases. This is operationally appropriate for small teams where a phase transition ceremony is excessive overhead.

---

## Open Questions

1. Clinton Keith's specific game-adapted Scrum ceremonies (sprint structure, backlog conventions, definition of "done" for a game feature) are not publicly detailed. The book content is paywalled. What specifically does he change about sprint rituals to accommodate playtesting? The core question is whether his definition of "done" for a game feature includes playtest validation or only implementation completion.
2. Riot's kill criteria during Incubation are described as qualitative ("thesis clarity"). What does internal Riot review actually measure? Are there documented cases of what a failing thesis looks like versus a passing one? The 90% rejection rate implies consistent judgment criteria that are not publicly articulated.
3. The Supercell "cell" structure (5-person teams with full creative control) implies an implicit concept death mechanism: games are killed when the cell decides they are not fun. Is there a documented decision framework for this or is it purely subjective leadership judgment? If subjective, how is it calibrated across different cells?
4. No framework surveyed addresses the specific challenge of LLM agents as production contributors rather than tools. How does a human producer gate-check output from an AI agent that operates faster than milestone cadence? Does gate cadence need to change, or does the gate need a different kind of evidence?
5. The Macklin/Sharp Conceptualize-Prototype-Playtest-Evaluate loop is described as a design methodology, not a production framework. Is there a documented bridge between this design loop and production milestone planning? At what loop iteration does the team transition from design methodology to production framework?
6. Narrative production at BioWare/Obsidian reportedly uses story-beat lock documents and narrative milestone gates separate from engineering milestones. No public documentation was found. This is a significant gap for narrative-heavy game frameworks. A targeted search for GDC presentations from BioWare/Obsidian narrative directors may surface this.
7. DiGRA papers on production methodology were not retrieved in this sweep. A targeted academic database search (ACM Digital Library, DiGRA proceedings) may surface formalized models not present in practitioner literature, particularly around indie team studies and AI-assisted production.
8. The scope management substack (Game Production Alchemist) explicitly deferred its process, ceremonies, and artefact detail to Part 2. That part was not available or not yet published at time of research. It may contain the most practically detailed scope crisis ritual in the surveyed landscape once published.
9. The "deadline mode" dark ritual has no named framework analog in any surveyed source. It is distinct from scope crisis (which is a chronic drift) and from death spiral (which is a compounding failure). Deadline mode is an acute state where known scope cannot be completed in available time. No surveyed framework prescribes a specific response protocol for this state beyond generic "cut scope" advice.
10. A Pugh-style concept selection matrix has been proposed for game design decisions in engineering-adjacent literature but was not found applied to game production gates in any surveyed source. A follow-up search targeting engineering design methodology applied to games may surface a decision-matrix template applicable to the Concept Viability Gate.

---

## Citations

1. https://www.riotgames.com/en/r-and-d-office/incubation-exploration-with-a-plan
2. https://www.riotgames.com/en/r-and-d-office/prototype-building-a-games-substance
3. https://ltpf.ramiismail.com/milestones/
4. https://www.gamedeveloper.com/production/goodbye-postmortems-hello-critical-stage-analysis
5. https://www.gamedeveloper.com/production/death-march-crunches-10-causes-and-solutions
6. https://www.gamedeveloper.com/production/do-lean-startup-methods-make-for-a-better-game-development-model-
7. https://www.gamedeveloper.com/production/organization-and-time-management-as-an-indie-studio
8. https://gameproductionalchemist.substack.com/p/scope-management-for-game-development
9. https://tonogameconsultants.com/death-spiral/
10. https://clintonkeith.com/
11. https://www.mountaingoatsoftware.com/books/agile-game-development-build-play-repeat
12. https://www.routledge.com/The-Game-Production-Toolbox/Chandler/p/book/9781138341708
13. http://www.gamesdesignandplay.com/
14. https://ptgmedia.pearsoncmg.com/images/9780134392073/samplepages/9780134392073.pdf
15. https://clickup.com/blog/game-design-document-templates/
16. https://www.nuclino.com/articles/game-design-document-template
17. https://indiegameacademy.com/free-game-design-document-template-how-to-guide/
18. https://www.ideaplan.io/templates/game-design-document-template
19. https://vitalzigns.itch.io/gdd
20. https://gameproductionalchemist.substack.com/p/agile-risk-management-in-the-game
21. https://www.gamedeveloper.com/business/managing-risk-in-video-game-development
22. https://pressstartleadership.com/mastering-the-game-risk-management-strategies-for-video-game-production-leaders/
23. https://book.leveldesignbook.com/process/preproduction
24. https://whimsygames.co/blog/game-development-insights-the-discovery-phase/
25. https://www.pocketgamer.biz/the-lean-approach-to-game-development/
