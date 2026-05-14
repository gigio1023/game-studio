# Production Gate Templates: Deep Dive: Relevance To Game Studio

[Back to index](../r2-02-gate-templates.md)

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
