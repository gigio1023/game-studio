# Value Judgment Method

Use this page when a value review needs more than structural consistency
checks. It combines the judgment rubric and stress scenarios because the two
methods are meant to be run together: the rubric asks whether the framework's
ideas are decision-critical, and the scenarios show whether those ideas help
real creator situations.

This method complements [Value Assessment](01-value-assessment.md). The value
assessment scores Game Studio by area: thesis, beginner usefulness,
existing-project usefulness, agent skill design, role judgment, proof
discipline, adoption. This page scores it by whether the framework carves at
joints a working creator would recognize.

Use both. Area scoring tells you which area to improve. The judgment rubric
tells you whether the framework will actually change agent behavior in the
hands of a senior reviewer.

## Judgment Rubric

### Six Judgment Dimensions

Each dimension asks one question. The verdict is one of `decision-critical`,
`decorative`, or `harmful`.

### 1. Philosophy

Does the philosophy carve at joints a working creator would recognize, or does
it list "be careful and have taste"?

Strong evidence the dimension is decision-critical:

- An agent could pattern-match the rule and still ship better work.
- A senior reviewer would defend the rule under pressure.
- Anti-patterns include lived consequences, not only symptom-correction pairs.

Weak evidence:

- Rules read as principles without lived consequence.
- No project, real or fictional, shows the failure case behind the rule.

### 2. Operating Model Fit

Does the playable-validation loop reflect how good games actually get made,
including the hard production moments?

Strong evidence:

- The stage order resists pressure to skip ahead.
- Production crises (concept death, scope crisis, parallel risk, deadline
  mode) have explicit response protocols.
- Cut decisions have stated criteria, not only candidate lists.

Weak evidence:

- The model only describes clean progression.
- `cutCandidates` is an item field, not a decision math.

### 3. Onramps And Authorship

Does taste-to-game feel like a thoughtful interview, or a form? Does
direction-carry-in respect creators? Does brownfield audit know what to ask?

Strong evidence:

- Beginner taste interview includes follow-up moves, not only fields.
- Brownfield audit teaches how to read someone else's prototype.
- Reference-moment translation has worked examples.

Weak evidence:

- Templates collect data but do not identify taste edges.
- "Translate references into constraints" is a step name without method.

### 4. Skill Weight

Do the agent skills materially change Codex or Claude Code behavior, or describe
attitude?

Strong evidence:

- Each skill returns a stop condition that prevents premature action.
- Each skill has trigger prompts and worked verdict examples.
- Reference files include both rules and recognizable cases.

Weak evidence:

- Skill files are short essays without trigger cases.
- Reference files describe what to do without showing what a verdict looks like.

### 5. Craft Depth

Are rubrics, playbooks, and references grounded in real game-craft knowledge a
practitioner would respect?

Strong evidence:

- The craft reference index cites the canon and the canon's lessons appear in
  operating moves, not only in headers.
- Production scope arithmetic exists.
- Retrospective stories ground the rules in real failure.

Weak evidence:

- The craft reference index is a reading list without operational guides.
- No retrospective converts rules into recognizable patterns.

### 6. AI-Assisted Design Workflows

Is Game Studio using AI for what AI is uniquely good at, or only disciplining
AI to act like a producer?

Strong evidence:

- Concept slates include intentional failure variants for human reaction.
- Naive-player walkthroughs are generated from design docs.
- Anti-pillars and next-proof candidates can be auto-proposed and reviewed.
- Cross-session memory probes for contradictions before agents act.

Weak evidence:

- The framework treats the LLM as a form-filler.
- Generative moves are not explicit skill outputs.

### Verdict Taxonomy

| Verdict | Meaning |
| --- | --- |
| Decision-critical | The dimension materially changes outcomes. Strong source of value. |
| Decorative | The dimension is plausible but does not change agent or human behavior. |
| Harmful | The dimension creates false confidence, process overhead without authority, or drift. |

A dimension can change verdicts as the framework evolves. Re-score during each
value review.

### Rubric Application

1. Read the decision-critical files for each dimension: philosophy, operating
   model, entry templates, every `SKILL.md` plus its references, craft reference index,
   key rubrics, and recent skill outputs from a real project if available.
2. Run at least two of the four stress scenarios below.
3. Score each dimension as `decision-critical`, `decorative`, or `harmful`.
4. Name one concrete move that would change each verdict toward `decision-critical`,
   plus the cost of that move.
5. Record the result in this directory and link it from the index.

### Rubric Output Shape

```text
Reviewer:
Date:
Dimensions:
- Philosophy: <verdict>, highest-value change: <move>, cost: <effort>.
- Operating model: <verdict>, highest-value change: <move>, cost: <effort>.
- Onramps: <verdict>, highest-value change: <move>, cost: <effort>.
- Skill weight: <verdict>, highest-value change: <move>, cost: <effort>.
- Craft depth: <verdict>, highest-value change: <move>, cost: <effort>.
- AI-assisted design workflows: <verdict>, highest-value change: <move>, cost: <effort>.
Highest value per effort: <one move>.
Anti-additions to refuse: <list>.
```

### Rubric Proof Of Improvement

After applying the rubric twice, at least one dimension verdict should change
toward `decision-critical`. If no verdicts move, either the work between reviews did
not change behavior or the rubric is being scored too generously.

## Stress Scenarios

Rubrics test rules. Scenarios test fit. Use four canonical user states to
stress-test Game Studio in any value review. Each scenario reveals a different
weakness when the framework is incomplete.

### Why Four

Game Studio claims to serve creators across three entry modes plus a range of
fluencies. Four scenarios cover the typical cross-section: novice taste-only,
pre-vertical-slice indie team, deadline-pressed studio, and total beginner with
references only.

### The Four Scenarios

#### S1: Solo Indie, Short Visual Novel

- Engine: Godot.
- Team: solo creator.
- Direction: short visual novel, tone undecided.
- Constraint: one-week first prototype.
- Mode: `taste-to-game`.

What this tests:

- Whether taste-to-game compresses to a real one-week proof.
- Whether the narrative-design workflow helps with content authoring time.
- Whether constraint ladder predicts content-volume risk.

#### S2: Two-Person Team, Mixed Demo Reactions

- Team: two people.
- Direction: existing 3-minute itch demo with mixed feedback.
- Decision: next milestone is vertical slice or another short prototype.
- Mode: `brownfield-unknown`, escalating to `direction-carry-in`.

What this tests:

- Whether brownfield audit teaches diagnosis of mixed feedback.
- Whether the production model resists premature vertical slice.
- Whether the gate set distinguishes "iterate prototype" from "advance".

#### S3: Studio, Publisher Demo Deadline

- Team: four people.
- Direction: existing core loop, weak `why are we making this`.
- Constraint: publisher demo in eight weeks.
- Mode: `direction-carry-in` plus deadline pressure.

What this tests:

- Whether director review forces re-commitment to the thesis under pressure.
- Whether the framework has a deadline-mode compressed gate path.
- Whether scope-cut reasoning is supported during release pressure.

#### S4: Total Game-Dev Beginner

- Team: solo, never shipped a game.
- Direction: a list of five favorite games and reference moments.
- Mode: `taste-to-game` from absolute zero.

What this tests:

- Whether the intake avoids genre, engine, loop, and monetization too early.
- Whether reference moments are translated into design constraints, not
  mirrored into reference-mimicking concept slates.
- Whether the concept slate respects scope realism for a true beginner.

### Scenario Application Protocol

1. Read the scenario context out loud or in writing.
2. Predict what the framework should do in the first session and the next two
   sessions.
3. Run the prediction against the framework's actual outputs (route,
   artifacts, gates, stop conditions).
4. Score how much the framework helps versus how much the user must figure out
   alone.
5. Record one specific shortfall and one specific strength.

### Current Scenario Scores

These scores are a baseline for the next value review. They reflect the
framework as of the first value review and are estimates, not measurements.

| Scenario | Current Helpfulness | Strongest Move | Shortfall |
| --- | --- | --- | --- |
| S1 | About 60 percent | Constraint ladder compresses scope to one week. | Narrative-design area lacks content-time math. |
| S2 | About 50 percent | Premature-vertical-slice trap is well prevented. | Brownfield audit names symptoms but not diagnosis. |
| S3 | About 55 percent | Director review resists thesis drift. | No deadline-mode compressed gate set. |
| S4 | About 40 to 50 percent | Intake meets the user where they are. | Reference-moment translation lacks worked method. |

### What Each Scenario Reveals

- S1 reveals weak content-volume estimation in narrative work.
- S2 reveals weak audit-diagnosis depth in brownfield review.
- S3 reveals missing deadline-mode rituals.
- S4 reveals missing reference-translation method.

Three of the four shortfalls cluster around the same root cause: the framework
is structurally complete but lacks the move set that turns templates into
guided expert behavior. See
[Craft Curriculum And Beginner Pedagogy](13-craft-curriculum-and-beginner-pedagogy.md).

### Scenario Proof Of Improvement

After improvement work, re-run the scenarios and update the helpfulness
estimates. A dimension is improving when at least one scenario score increases
by 10 percent or more and the shortfall changes to a different problem. If
the shortfall stays the same, the fix did not address the underlying weakness.
