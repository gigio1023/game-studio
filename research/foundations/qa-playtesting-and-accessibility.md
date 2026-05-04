# QA, Playtesting, and Accessibility Foundations

This report turns external QA, playtesting, usability, accessibility, and release-readiness guidance into operating principles for Game Studio.

## Source Map

| Source | Use in this report | Game Studio application |
| --- | --- | --- |
| [IGDA Game Accessibility SIG guidelines](https://igda-gasig.org/get-involved/sig-initiatives/resources-for-game-developers/sig-guidelines/) | Baseline accessibility topics: remapping, alternative input, sound alternatives, separate volume controls, readable visuals, color alternatives, difficulty, training, and menus. | Add accessibility checks to QA evidence, playtest scenarios, and release promises. |
| [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/) and [Basic guidelines](https://gameaccessibilityguidelines.com/basic/) | Practical severity tiers and early low-cost checks for motor, cognitive, vision, hearing, speech, and general access. | Use as an early milestone checklist before accessibility work becomes expensive. |
| [Xbox Accessibility Guidelines](https://learn.microsoft.com/en-gb/gaming/accessibility/guidelines) | Platform-style guideline structure: goal, scoping questions, implementation guidance, examples, player impact, and resources. | Shape accessibility review templates around impact and evidence, not abstract compliance language. |
| [Microsoft Gaming Accessibility Testing Service](https://learn.microsoft.com/en-us/gaming/accessibility/mgats) | Accessibility report structure: feature-tag testing, highlights, disabled-player feedback, concerns, reproduction steps, media examples, and resources. | Model Codex-led accessibility review artifacts after a test report, not a pass/fail script. |
| [Accessible Games Initiative tags and criteria](https://accessiblegames.com/wp-content/uploads/2025/03/Accessible-Games-Initiative-Tags-and-Criteria-March-2025.pdf) | Public-facing feature language for audio, gameplay, input, and visual accessibility. | Align release claims and store-page promises with player-readable feature criteria. |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | General accessibility principles: perceivable, operable, understandable, and robust. | Apply to launchers, menus, web pages, docs, and any UI-heavy game surface. |
| [ISTQB Certified Tester Game Testing](https://istqb.org/certifications/certified-tester-game-testing-ct-game/) and [CT-GaMe syllabus](https://isqi.org/media/4d/7e/60/1710940922/ISTQB_CT_GaMe_Syllabus_v1.0.1_EN_.pdf) | Game-testing scope: mechanics, graphics, sound, levels, controllers, localization, tools, risk, and lifecycle alignment. | Expand QA Lead authority beyond smoke tests into risk-based test design. |
| [Game Testing: All in One](https://www.degruyterbrill.com/document/doi/10.1515/9781683922858/html?lang=en) | QA role, test design, progress measurement, and practical game-test planning. | Add bug-report, test-plan, and quality-progress templates. |
| [Games User Research](https://academic.oup.com/book/26677) | Playtesting as a production discipline: observation, interviews, think-aloud, RITE, heuristics, analytics, reporting, limited-resource studies, and accessibility participant inclusion. | Treat playtests as designed studies with research questions, scenarios, evidence, and recommendations. |
| [Game Design Workshop, 5th edition](https://www.routledge.com/Game-Design-Workshop-A-Playcentric-Approach-to-Creating-Innovative-Games/Fullerton/p/book/9781032607009) | Playcentric iteration, emotion-focused experience goals, prototyping, playtesting, and revision. | Tie playtest questions to player-experience targets and milestone hypotheses. |
| [A Playful Production Process](https://mitpress.mit.edu/9780262045513/a-playful-production-process/) | Milestones, deliverables, playtesting, iteration, and production process without uncontrolled overwork. | Keep stage gates evidence-based and scoped to achievable milestone proof. |
| [NN/g Usability Testing 101](https://www.nngroup.com/articles/usability-testing-101/) | Observational testing with realistic tasks, realistic participants, neutral facilitation, qualitative vs. quantitative output, and 5-participant qualitative studies. | Make playtest reviews behavior-first and scenario-based. |
| [NN/g severity ratings](https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/) | Severity as frequency, impact, persistence, and market effect. | Use severity dimensions in bug triage and release gates. |
| [Atlassian bug triage](https://www.atlassian.com/agile/software-development/bug-triage) | Bug lifecycle: report, categorize, prioritize, assign, track, verify, and close. | Add a QA-led triage loop that separates evidence, severity, priority, owner, and verification. |

## Principles

**Evidence first**: A review starts with build identifier, scenario, player profile, observed behavior, capture, logs, save state, and reproduction steps. Opinions come after evidence.

**Playable proof beats checklist proof**: Automated checks are necessary, but they do not prove comprehension, feel, accessibility, or release honesty. A milestone needs both deterministic verification and human review when the claim is about player experience.

**Accessibility is part of game design**: Remapping, readable text, subtitles, color alternatives, volume separation, difficulty options, input flexibility, motion comfort, and accessible menus should enter milestone scope early.

**Public promises must be auditable**: A release claim should map to an observed build behavior, an accessibility feature criterion, a known limitation, or a support commitment.

**Severity is multidimensional**: Triage should record player impact, frequency, persistence, workarounds, affected platforms, affected player groups, and release risk. Priority is the decision about when to fix it.

**Qualitative review needs method**: Playtest notes should separate observation, participant quote, facilitator inference, design recommendation, and confidence level. One dramatic session is a signal, not a verdict.

**Representative players matter**: Accessibility and usability cannot be fully reviewed by only the team that made the game. External players and players with relevant disabilities should be included before public release.

**Iteration is the unit of learning**: A useful playtest loop is question, scenario, observation, fix, retest. A large report without a retest path is weak production evidence.

## Codex-Led Review Practices

Codex should act as a disciplined reviewer and evidence clerk, not only as a script runner.

1. **Evidence inventory**: List every artifact claimed by the milestone, then mark each as present, missing, stale, or insufficient.
2. **Scenario replay**: Read the playtest scenario or release promise, then walk through the build path as a player would. Record where the experience diverges from the claim.
3. **Behavioral note synthesis**: Convert raw playtest notes into observations, likely causes, severity, affected roles, and recommended next checks.
4. **Accessibility pass by barrier type**: Review motor, vision, hearing, cognitive, speech, and general settings separately. Note both implemented support and missing access paths.
5. **Bug triage moderation**: For each issue, separate severity from priority, assign an owner, name the verification step, and record whether the bug blocks the current gate.
6. **Release-promise audit**: Compare README, store copy, trailer script, demo page, accessibility claims, localization claims, and support language against the current build.
7. **Contradiction detection**: Flag cases where one artifact says a feature is complete while another marks it as experimental, unsupported, or missing.
8. **Participant-fit review**: Check whether playtest participants match the research question. A controls question needs relevant input-device coverage; an accessibility question needs affected players or expert accessibility review.
9. **Recommendation discipline**: Write recommendations as small decisions: fix now, defer with waiver, retest, gather more evidence, or change the public promise.
10. **Residual-risk log**: Preserve what remains unknown after checks pass, especially around hardware coverage, localization, accessibility, long-session stability, and rare progression states.

## Role Integration

| Role | QA and playtesting responsibility |
| --- | --- |
| Game Director | Confirms that playtest findings support or contradict the player-experience target. |
| Producer | Owns release risk, triage cadence, waiver policy, and whether the team can afford the next gate. |
| Technical Director | Owns reproducibility, crash risk, instrumentation, platform coverage, and deterministic checks. |
| QA Lead | Owns validation plan, bug triage, severity rubric, test evidence, and release-blocker calls. |
| UX Designer | Owns onboarding, comprehension, UI clarity, input comfort, and task-based usability review. |
| Localization Lead | Owns text expansion, font coverage, subtitle readability, translation risk, and language-specific UI failure. |
| Audio Director | Owns subtitle coverage, caption intent, dialogue intelligibility, mix controls, and non-audio alternatives. |
| Release Manager | Owns public feature claims, accessibility tags, known limitations, support language, and release checklist closure. |

## Skill Integration

**`game-evidence-gate`** should require manual evidence categories for playability, accessibility, usability, and release truth when a milestone makes player-facing claims.

**`game-review-council`** should activate UX Designer, Localization Lead, Audio Director, and Release Manager when accessibility, onboarding, text, audio, or public release claims are in scope.

**`game-studio`** should treat playtest and accessibility evidence as stage-advancement inputs from Core Loop Prototype onward, not as late polish.

**`game-execution`** should require bug reports to include scenario, build identifier, reproduction steps, expected result, actual result, evidence link, severity, priority, owner, and verification step.

**`game-director`** should use playtest findings to evaluate whether the game is producing the intended emotion and player behavior, not only whether mechanics are present.

## Template Integration

**Evidence contract**:

- Add evidence type: `playtest report`, `accessibility review`, `bug triage log`, `release promise audit`.
- Add fields: `build id`, `scenario`, `participant profile`, `capture link`, `known limitations`, `retest status`.

**Milestone contract**:

- Add `Research Questions`.
- Add `Player Profiles Needed`.
- Add `Accessibility Scope`.
- Add `Bug Triage Policy`.
- Add `Release Promise Impact`.

**Council review**:

- Add `Evidence Checked`.
- Add `Observed Player Risks`.
- Add `Accessibility Risks`.
- Add `Release Blockers`.
- Add `Waivers Requested`.

**Playtest rubric**:

- Add task success, time or attempt count when useful, hesitation points, workaround discovery, emotion target, frustration threshold, accessibility barriers, and facilitator confidence.

**Work intake**:

- Add required QA artifacts for player-facing changes: test scenario, bug-report expectations, accessibility impact, and retest owner.

**Release gate**:

- Add feature-claim mapping: each store, README, trailer, demo, localization, accessibility, and support claim maps to evidence or is removed.

## Current Repo Gaps

The repository has a strong evidence-gate spine, but the QA layer is still thin.

| Gap | Why it matters | Suggested next surface |
| --- | --- | --- |
| Playtest rubric is short and observational only. | It does not yet define research questions, participant fit, task success, severity, confidence, accessibility barriers, or retest expectations. | Expand `core/rubrics/playtest-rubric.md`. |
| No dedicated accessibility rubric or gate exists. | Release gates mention accessibility promises, but there is no baseline for evaluating accessibility features or player barriers. | Add `core/rubrics/accessibility-rubric.md` or `core/gates/accessibility.md`. |
| No bug triage template exists. | QA Lead owns bug triage, but the repo lacks a shared defect intake and decision format. | Add `core/templates/qa/bug-triage.md`. |
| Evidence contract lacks player-research metadata. | Current evidence fields are generic and do not capture scenario, participant profile, build ID, capture, or retest status. | Extend template and schema with optional QA metadata. |
| Release gate does not require a claim-to-evidence matrix. | Public promises can drift from build truth unless every player-facing claim has proof or a limitation. | Add a release-promise audit template. |
| Accessibility roles are implicit. | UX, localization, audio, QA, and release roles cover parts of accessibility, but no activation rule requires them together. | Add council activation guidance for accessibility review. |
| No qualitative review method is documented. | Codex could summarize notes, but without method it may collapse observation, inference, and recommendation into one opinion. | Add a `skills/game-review-council/references/qualitative-review.md` playbook. |
| No external-player readiness checklist exists. | Public Demo Candidate needs install, start, comprehension, limitation, accessibility, and support checks. | Add `core/templates/release/demo-readiness.md`. |
| No waiver policy exists. | Release readiness needs a controlled way to accept known defects without losing accountability. | Add waiver fields to council review and release gate templates. |

## Recommended Baseline

1. Add an accessibility rubric based on barrier categories, not platform compliance.
2. Add a bug triage template that separates severity, priority, owner, verification, and waiver.
3. Expand playtest evidence to include research question, participant profile, scenario, observation, severity, recommendation, and retest status.
4. Add a release-promise audit that maps every public claim to build evidence.
5. Update council review guidance so Codex activates QA, UX, localization, audio, and release roles for accessibility and release-readiness reviews.
6. Keep scripts for deterministic checks, but require Codex to write human-readable evidence summaries for player-facing claims.
