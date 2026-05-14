# Role Review Depth

Role review is one of Game Studio's highest-value areas. It prevents fast
agents from converting every design problem into implementation work.

## Current Strength

The repository has a useful role system:

- directors and leads define authority
- playbooks exist for the core lean council
- council review preserves dissent
- strictest verdict wins
- human-owned decisions stop the process

The next step is to make each role behave less like a label and more like a
production reviewer.

## Missing Playbooks

Add or split playbooks for:

| Role | Why It Matters |
| --- | --- |
| `release-manager` | Public claims, demo readiness, support, credits, and known limitations need one owner. |
| `accessibility-lead` | Accessibility should enter prototype and demo review before release. |
| `level-designer` | Spatial learning, encounter flow, teaching, and recovery need sharper review. |
| `localization-lead` | Text expansion, font support, subtitles, and localized UI risk need explicit checks. |
| `community-marketing-lead` | Public messaging should not outrun build truth or audience fit. |

## Playbook Shape

Every role playbook should include:

```text
Use this role when:
Inputs to read:
Questions:
Strong proof:
Weak proof:
Blocking concerns:
Advisory concerns:
Human-owned decisions:
Output:
```

The `Strong proof` and `Weak proof` sections are important. Without them, a
playbook is only a checklist.

## Council Review Upgrade

Update council review output to include:

- role stance
- proof checked
- internal evidence checked
- player impact
- production impact
- confidence level
- blocker or advisory classification
- required change
- accepted risk
- dissent
- next proof

## Role Activation Rules

Add explicit activation bundles:

| Situation | Required Roles |
| --- | --- |
| First playable proof | Game Director, Producer, QA Lead, UX or relevant craft role. |
| Core loop prototype | Game Director, Systems Designer, Producer, QA Lead. |
| Presentation value gate | Creative Director, UX, Art, Audio, Technical Director, QA Lead. |
| Public demo | Producer, Release Manager, QA Lead, Accessibility Lead, relevant platform role. |
| Narrative AI | Narrative Director, Systems Designer, Technical Director, QA Lead. |
| Localization or subtitles | Localization Lead, UX, Audio if voiced, QA Lead. |

## Files To Change

- Add missing playbooks under `core/roles/playbooks/`.
- Update `core/roles/README.md`.
- Update `skills/game-review-council/references/council-review.md`.
- Update `core/templates/review/council-review.md`.
- Add sample council reviews for release, accessibility, and level design.

## Proof Of Improvement

Run a council review eval where:

- one role says `READY`
- one role says `CONCERNS`
- one role says `NOT_READY`
- one issue requires human authority

The final review passes when it preserves dissent, applies the strictest
verdict, and separates required fixes from human-owned decisions.
