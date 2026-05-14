# Production Gate Templates: Deep Dive: Research Questions

[Back to index](../r2-02-gate-templates.md)

## Research Questions

1. Riot R&D Lifecycle — specific gate criteria for Incubation; what does a "falsifiable thesis" actually look like at Riot?
2. Rami Ismail LTPF — find the canonical version; area specific gate templates, not just framework names.
3. Critical Stage Analysis 5/5/5 — find the actual review template; who developed it; what does the published version look like?
4. Game Outcomes Project (Paul Tozour) — specific findings: what factors predicted shipped success, what factors predicted failure?
5. Falsifiable thesis at incubation — find published examples; what is the difference between a vision statement and a falsifiable thesis in practice?
6. Vertical Slice gate criteria — what does a real vertical slice look like versus the polished prototype trap?

---


## Sources Surveyed

- https://www.riotgames.com/en/r-and-d-office/incubation-exploration-with-a-plan — First-party Riot documentation of Incubation phase; gate rejection rate and thesis definition.
- https://www.riotgames.com/en/news/r-d-foundations-opportunity-thesis-and-audience — First-party Riot on thesis structure; audience segmentation model; inside-out vs. outside-in opportunity framing.
- https://www.riotgames.com/en/r-and-d-office/prototype-building-a-games-game quality — First-party Riot prototype phase; four exit deliverables including audience validation via playtesting.
- https://www.riotgames.com/en/r-and-d-office/game-over-good-game — First-party Riot on project cancellation; Game Zebra reboot case. No verbatim thesis-fail criteria published.
- https://ltpf.ramiismail.com/prototypes-and-vertical-slice/ — Rami Ismail LTPF; canonical distinction between prototype (should you build it?) and vertical slice (can you build it?).
- https://ltpf.ramiismail.com/milestones/ — Rami Ismail LTPF; full eight-milestone model across four phases; forced decision at each gate.
- https://www.gamedeveloper.com/production/goodbye-postmortems-hello-critical-stage-analysis — Wolfgang Hamann's CSA; full 5/5/5 template structure and process cadence. Published in Game Developer magazine.
- https://www.gamedeveloper.com/business/the-game-outcomes-project-part-1-the-best-and-the-rest — Paul Tozour; survey methodology, 273 projects, 120 questions, four outcome dimensions.
- https://www.gamedeveloper.com/business/the-game-outcomes-project-part-3-game-development-factors — Tozour; ranked correlation values for specific production practices.
- https://www.gamedeveloper.com/business/the-game-outcomes-project-part-5-what-great-teams-do — Tozour; behavioral profile of top-performing teams.
- https://uxdesign.cc/how-to-create-rock-solid-product-design-hypotheses-a-step-by-step-guide — "We believe..." hypothesis template grammar from UX/product design literature.

---


## Riot R&D Lifecycle Operational Detail

### Phase Structure

Riot uses four named phases: Incubation, Prototype, Pre-Production, Production. Incubation precedes all code writing.

### Incubation Gate Criteria

The gate between Incubation and Prototype rejects approximately 90% of pitches. No pitch has ever passed on its first submission. The stated gate criterion is thesis clarity — specifically whether the team can articulate:

1. A specific problem or unserved opportunity within a named genre
2. A strategy for solving it
3. Which key innovations are critical to success
4. What the game will explicitly NOT do (stated non-goals)
5. Competitive differentiation — what is different or better that audiences want and competitors do not or cannot offer
6. Core risks and untested assumptions

Riot distinguishes thesis from vision: "a vision might be compelling and unifying but by itself does not provide enough clarity or direction for teams to efficiently approach prototyping." A thesis must be falsifiable by prototype outcomes.

### Prototype Exit Deliverables (Four Required)

1. A clear definition of the anticipated player audience
2. A representative playable gameplay experience demonstrating key innovations
3. Team-wide shared depth of understanding of those innovations
4. Proof that the audience responds positively to the experience via external playtesting

### Decision Authority

The Incubation articles do not specify formal review bodies or named decision-makers. The "Game Over, Good Game" article describes the decision as combining deliverables review, past milestone progress, thesis evaluation, and organizational resource needs. One case (Game Zebra) shows a team reduced from 50 to 12 and thesis revised rather than project cancelled — indicating partial thesis failure can result in structured restart rather than kill.

### Opportunity Framing

Riot describes two entry postures:
- Inside-out: start from an existing product category and identify under-served player needs within it (example: DOTA → League of Legends)
- Outside-in: start from an untapped audience or capability gap and work toward product (example: Minecraft as gaming equivalent of Legos)

No verbatim thesis statement examples are published. The framework describes structure and requirements without releasing actual thesis documents.

---


## Rami Ismail LTPF Operational Detail

### Framework Name

LTPF stands for Levelling The Playing Field. It is published as a free newsletter and article series at ltpf.ramiismail.com.

### Phase Structure (Four Phases, Eight Milestones)

**Research Phase**
- Milestone 1 — Ideation: "Forming a clear intention for the game, with some ideas about the style, gameplay, and purpose." No code. Forced decision: is there a concept worth prototyping?
- Milestone 2 — Prototyping: Testing viability and versatility through rapid disposable iterations. Forced decision: should this game be made at all?

**Pre-Production Phase**
- Milestone 3 — Vertical Slice: Running the full production pipeline at near-shipping quality on one complete thin segment. Forced decision: can this game actually be made at the required fidelity?
- Milestone 4 — Production Start: Implementing lessons from the vertical slice with clear timelines and documentation.

**Production Phase**
- Milestone 5 — Feature Complete: All core features and systems implemented (alpha equivalent). Forced decision: scope vs. timeline.
- Milestone 6 — Content Complete: Full playable state from start to finish with all final assets (beta equivalent).

**Wrap-Up Phase**
- Milestone 7 — Release Candidate: Submission-ready build for all target platforms.
- Milestone 8 — Release Build: Final shipped product.

### Prototype vs. Vertical Slice: The Core Gate Distinction

Ismail's canonical statement:

> Prototypes answer whether you *should* make the game by testing design assumptions through quick disposable experiments. Vertical Slice answers whether you *can* make the game by running the full production pipeline at shipping-quality fidelity on a thin segment.

This is the primary anti-confusion gate the framework enforces. Teams that treat a prototype as a near-shippable demo are spending vertical-slice resources before the "should we build this" question is answered.

### Vertical Slice Gate Requirements (Must Contain)

- One complete piece of content at near-shipping quality from concept through implementation
- One full pass through every production pipeline step (art, code, audio, design, QA)
- Identification of all blocking production issues and their documented solutions
- A second iteration of the same segment to establish production velocity and confirm the pipeline is repeatable

The velocity measurement from iteration two is the evidence that answers "can we build this at scale."

### Funding Gate

Ismail explicitly positions the end of the Vertical Slice as the funding gate for indie projects: "Funding often has to be completed by the end of the vertical slice, or the team will likely run out of resources or motivation within several months." This makes the vertical slice simultaneously a technical gate and a business viability gate.

### Solo Scaling

Ismail specifies stricter prototype discipline for solo developers: faster iterations, narrower scope tests, and earlier stakeholder feedback because the months-long vertical slice investment carries higher personal risk with no team to absorb cost overruns.

---


## Critical Stage Analysis (5/5/5) Operational Detail

### Origin

Developed by Wolfgang Hamann, presented at the Game Developers Conference. Published in Game Developer magazine.

### Template Structure (Verbatim Prompt Language)

At each milestone, every team member responds in writing to three prompts:

1. "Five things that went right during the period"
2. "Five things that went wrong during the period"
3. "Five things that could be improved for the future"

Each list of five is ranked 1-5 by importance (1 = most important, 5 = least important).

### Process Cadence

| Step | Who | When | Duration |
|---|---|---|---|
| Response collection | All team members | Within 3 days of milestone | 10-15 min per person |
| Data compilation | Project manager | After collection closes | — |
| Solutions discussion | Team leads | Within 2 days of compilation | — |
| Full team presentation | Producer or manager | Within one week of milestone | — |
| Status update on unresolved items | Producer or manager | Next team meeting | — |

Total cycle time: 2-4 hours for the full team.

### Decision Authority

- Project manager compiles data
- Team leads own solution assignment with specific resolution timelines attached to each identified problem
- Producer presents to full team with transparency about unresolved problems

### Key Structural Feature

Every problem identified must receive an assigned owner and a deadline. Without this, retrospective outputs disappear. Anonymous submission is available as an option. Responses are archived in a central repository for cross-project knowledge sharing.

### Distinction from Standard Retrospectives

A standard retrospective produces observations. CSA produces owned action items with deadlines per problem and public tracking of unresolved issues at the next review cycle. The accountability loop is closed within the same two-week window rather than deferred indefinitely.

---
