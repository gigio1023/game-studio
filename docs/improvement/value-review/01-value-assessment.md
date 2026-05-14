# Value Assessment

Game Studio should be valued by whether it makes AI-assisted game production
more likely to finish small, coherent, playable work.

## Current Value Score

| Area | Current Score | Target Score | Reason |
| --- | ---: | ---: | --- |
| Product thesis | 8 | 9 | The milestone-gated playable validation, discovery-driven positioning is clear. |
| Beginner usefulness | 8 | 10 | Taste-to-game is strong, but needs more end-to-end proof. |
| Existing-project usefulness | 6 | 9 | Direction carry-in and brownfield paths need examples. |
| Agent skill design | 8 | 9 | Skills are short and reference-driven, but routing overlaps. |
| Role judgment | 7 | 9 | Role prompts ask good questions, but need sharper blocker examples. |
| Proof discipline | 8 | 9 | Proof language is strong; concrete artifact standards need tightening. |
| Adoption confidence | 5 | 9 | No real installed target project yet proves the workflow. |

Overall current value is about `8/10` as a framework and `6/10` as a proven
production system. The target is `9+/10` by adding routing, examples, evals, and
adoption proof.

## Highest-Value Promise

Game Studio should help a creator or team answer:

```text
What should we build next, why is it small enough, what will prove it, and who
has authority to approve or stop?
```

This is more valuable than generating more game ideas or more implementation
tasks. The repo should optimize for better production judgment under agentic
speed.

## Value Risks

| Risk | Why It Lowers Value | Required Improvement |
| --- | --- | --- |
| Plausible process without live adoption | Users cannot tell whether the system changes agent behavior. | Add installed examples and eval prompts. |
| Skill overlap | Agents may choose the wrong entry point or run reviews too early. | Add a navigator and routing matrix. |
| Role-name review | Role names can replace real critique. | Add role blocker patterns and proof standards. |
| Evidence-heavy public language | The product can sound like audit software instead of game production help. | Keep proof language public and evidence language internal. |
| Single-path sample | Taste-to-game is demonstrated, but other entry modes are not. | Add direction carry-in and brownfield examples. |
| Loose schemas | Operating contracts become advice instead of enforceable state. | Align schema required fields with templates. |

## Value Metrics

Use these metrics for future review:

- A new target repo can install the framework without global dependencies.
- An agent can classify entry mode without asking for a full game thesis first.
- A novice creator gets a small concept slate, not an idea dump.
- An existing direction is preserved before improvement.
- A milestone names one proof target and a proof budget.
- A review cites playable proof or calls out missing proof.
- Human-owned decisions stop with `USER_DECISION_NEEDED`.
- Public claims map to build truth before publication.
