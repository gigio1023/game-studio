# Production Gate Templates: Deep Dive

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

## Game Outcomes Project Findings

### Survey Scope

Paul Tozour with David Wegbreit, Lucien Parsons, and others. October-November 2014. 273 completed valid projects. Approximately 120 questions per respondent. The linear regression model achieved 0.82 correlation with project outcomes. 85% of questions showed statistical significance.

### Outcome Dimensions

Success was measured across four dimensions: financial ROI, schedule adherence, critical reception, and achievement of internal project goals. These correlated strongly with each other and were combined into a single outcome score.

### Top Predictive Factors (Ranked by Correlation)

| Factor | Correlation |
|---|---|
| Design risk management — guarding against disruptive redesigns | 0.57 |
| Team focus — shared vision and alignment on direction | 0.50 |
| Avoiding mandatory crunch | 0.44 |
| Team stability — minimizing turnover and reorganizations | 0.36-0.39 |
| Communication and feedback regularity | 0.36-0.39 |
| Organizational failure culture — psychological safety | 0.36-0.39 |
| Mutual respect between leads and contributors | 0.36-0.39 |
| Project planning accuracy and accountability | 0.36-0.39 |
| Technology risk management | 0.36-0.39 |

### Verbatim Finding on Design Documents

"Our question about a design document clearly specifying the game to be developed had a very low correlation — below 0.2 — with product success, though it correlated with schedule adherence."

This finding is operationally significant: a design document predicts whether you will ship on time but does not predict whether the shipped game will succeed. Direction quality is not captured by documentation completeness.

### Verbatim Finding on Crunch

"Even in the area where you might expect crunch would improve things — project delays — crunch still showed a significant negative correlation."

### Factors That Did Not Predict Outcomes

Production methodology (Waterfall vs. Agile vs. Scrum, p = 0.46), game genre, platform target, team size, cross-functional team structure, outsourcing percentage. Team-based incentives showed no impact; individual performance incentives showed meaningful positive impact.

### Behavioral Profile of Top Teams

Top teams shared a clear game design vision and development plan, resolved design disagreements swiftly, avoided letting conflicts fester, maintained consistent communication from leadership, worked the least overtime of any cohort, maintained psychological safety for honest communication, and celebrated experimental failure as information rather than as personal failure.

---

## Falsifiable Thesis Examples

### Vision Statement vs. Falsifiable Thesis: Operational Difference

A vision statement describes how the game should feel or what experience it creates. It cannot be falsified by evidence because it is an aspiration, not a claim.

A falsifiable thesis states a specific player problem in a specific genre, proposes a specific design approach to address it, and names observable player behaviors that would confirm or refute the approach within a prototype budget.

### Structural Template (From UX/Product Design Literature, Applicable to Games)

> "We believe [target player type] experiences [specific friction or unmet desire] when [specific situation in genre]. Building [specific design element or system] will resolve it. We will confirm this if [observable player behavior] occurs during playtesting within [prototype scope constraint]."

This grammar forces four components that a vision statement omits: player specificity, situation specificity, mechanism specificity, and a falsification condition.

### Representative Examples by Type

**Thesis (falsifiable):**
"We believe that players of 4X strategy games lose engagement in the mid-game because macro-scale decisions become legible too slowly. Adding a compressed visual feedback layer on empire health metrics will sustain engagement. We will confirm this if playtest sessions show players voluntarily continuing past the 45-minute mark without prompting."

**Vision (not falsifiable):**
"We want to build a sweeping 4X strategy game that captures the grand arc of civilization with moment-to-moment tactical depth."

The vision describes the desired experience; the thesis describes a hypothesis about the mechanism producing that experience, with an observable test.

### Riot's Structural Requirement

Riot explicitly requires teams to name "what they are NOT going to do" as part of the thesis. Stated non-goals are a falsifiability mechanism: they create a boundary around the claim so that scope expansion cannot indefinitely defer a verdict on whether the thesis was validated.

---

## Verbatim Templates Found

### CSA 5/5/5 Template (Reconstructed From Published Article, Hamann)

```
MILESTONE REVIEW — [Project] — [Date]

For each section, list five items ranked 1 (most important) to 5 (least important).
Submit within 3 days of milestone. Responses are anonymous if preferred.

SECTION A: Five things that went right during this period
1.
2.
3.
4.
5.

SECTION B: Five things that went wrong during this period
1.
2.
3.
4.
5.

SECTION C: Five things that could be improved going forward
1.
2.
3.
4.
5.
```

After compilation by project manager:

```
ACTION REGISTER — [Project] — [Date]

For each item in Section B and Section C rated 1-2:
- Problem:
- Owner:
- Resolution target date:
- Status at next review:
```

### Riot Prototype Exit Checklist (Reconstructed From Published Criteria)

```
PROTOTYPE EXIT REVIEW

1. Audience definition
   [ ] Target player segment is named and described
   [ ] Core, growth, and breakout audiences are segmented

2. Playable experience
   [ ] Representative gameplay demonstrating key innovations is playable by external testers
   [ ] All key innovations from the thesis are present in the playable build

3. Team understanding
   [ ] All team members can articulate the innovations and why they address the thesis
   [ ] Design tensions have been explicitly resolved or documented as open decisions

4. External validation
   [ ] Playtesting with target audience has been completed
   [ ] Audience response data is documented with specific behavioral observations
```

### Rami Ismail Vertical Slice Completion Criteria (Reconstructed)

```
VERTICAL SLICE COMPLETE when:
[ ] One full content unit exists at near-shipping quality
[ ] Every production pipeline step has been executed at least once on this unit
[ ] All blocking pipeline issues are documented with resolution plans
[ ] A second iteration of equivalent scope has been completed
[ ] Velocity per pipeline step is measured and documented
[ ] Funding status is confirmed or explicitly deferred with deadline
```

---

## Relevance To Game Studio

### milestone.schema.json

`experienceHypothesis` exists but lacks sub-structure. Riot's framework requires a thesis with four components: targetPlayer, specificFriction, designMechanism, and falsificationCondition. Without this decomposition, the field will be filled with vision statements. `nonGoals` (already present as a string array) is load-bearing per Riot — stated non-goals create a falsifiability boundary, not optional boilerplate.

Missing field: `velocityBaseline`. Rami Ismail's vertical slice gate requires a documented production velocity from a second iteration. Without this field, the gate cannot enforce the "can we build this at scale" evidence requirement.

### gate-verdict.schema.json

`missingEvidence` and `proofChecked` arrays map to CSA's action register, but neither field carries a deadline or owner. CSA requires every identified problem to have a named owner and a resolution target date. Adding `evidenceOwners` and `evidenceDeadlines` parallel arrays would close this gap.

The Riot prototype exit criteria require `playerBehaviorObservations` — specific behavioral evidence from external playtesting, not just a checkbox that playtesting occurred. This is absent from the schema.

### direction-quality-rubric.md

Game Outcomes Project finding: design risk management (correlation 0.57) is the single strongest predictor of shipped success — ahead of team composition, production methodology, and documentation completeness. A direction that is frequently revised predicts failure more strongly than a direction that is thinly documented. A rubric should weight direction stability and thesis falsifiability over document length.

---

## Open Questions

1. Riot's thesis failure language is not public. The 90% rejection rate implies consistent internal judgment criteria, but no published Riot postmortem or GDC talk describes what a rejected thesis contained. A targeted search for GDC Riot talks from 2018-2025 may area case material not in blog form.

2. The Game Outcomes Project survey was conducted in 2014 with 273 respondents. It has not been replicated at scale. The factors identified are correlational, not causal. Whether these findings hold for solo or two-person teams — the primary scale of this framework — is not established.

3. Rami Ismail's LTPF articles do not specify how the "should you build this" decision at Prototype end is actually made for solo developers with no external reviewer. The forced decision exists in the framework but the decision process (who evaluates, what counts as a pass) is left to the practitioner.

4. CSA's anonymous submission option is potentially in tension with mandatory ownership of every identified problem. If contributors submit anonymously, how does ownership get assigned? The article does not resolve this.

5. The Lean Startup "we believe" hypothesis grammar used in the Falsifiable Thesis section above was drawn from UX/product literature, not game-native sources. A direct game-context example of a passed incubation thesis — from Riot, an indie postmortem, or any GDC talk — was not found in this research round. This remains the primary open gap.

6. The Game Outcomes Project series ran to at least five installments on gamedeveloper.com. Parts 6 and 7 (if they exist) were not retrieved. A targeted search for Tozour's later installments may contain design-process-specific findings beyond the teamwork and culture factors identified here.

---

## Citations

1. https://www.riotgames.com/en/r-and-d-office/incubation-exploration-with-a-plan
2. https://www.riotgames.com/en/news/r-d-foundations-opportunity-thesis-and-audience
3. https://www.riotgames.com/en/r-and-d-office/prototype-building-a-games-game quality
4. https://www.riotgames.com/en/r-and-d-office/game-over-good-game
5. https://ltpf.ramiismail.com/prototypes-and-vertical-slice/
6. https://ltpf.ramiismail.com/milestones/
7. https://www.gamedeveloper.com/production/goodbye-postmortems-hello-critical-stage-analysis
8. https://www.gamedeveloper.com/business/the-game-outcomes-project-part-1-the-best-and-the-rest
9. https://www.gamedeveloper.com/business/the-game-outcomes-project-part-3-game-development-factors
10. https://www.gamedeveloper.com/business/the-game-outcomes-project-part-5-what-great-teams-do
11. https://uxdesign.cc/how-to-create-rock-solid-product-design-hypotheses-a-step-by-step-guide
