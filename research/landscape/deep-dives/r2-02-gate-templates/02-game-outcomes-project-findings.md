# Production Gate Templates: Deep Dive: Game Outcomes Project Findings

[Back to index](../r2-02-gate-templates.md)

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
