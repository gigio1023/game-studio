# Judgment Rubric

This rubric complements [Value Assessment](01-value-assessment.md). The value
assessment scores Game Studio by surface area: thesis, beginner usefulness,
existing-project usefulness, agent skill design, role judgment, proof
discipline, adoption. The judgment rubric scores it by whether the framework
carves at joints a working creator would recognize.

Use both. Area scoring tells you which surface to improve. The judgment rubric
tells you whether the framework will actually change agent behavior in the
hands of a senior reviewer.

## Six Judgment Dimensions

Each dimension asks one question. The verdict is one of `load-bearing`,
`decorative`, or `harmful`.

### 1. Philosophy

Does the philosophy carve at joints a working creator would recognize, or does
it list "be careful and have taste"?

Strong evidence the dimension is load-bearing:

- An agent could pattern-match the rule and still ship better work.
- A senior reviewer would defend the rule under pressure.
- Anti-patterns include lived consequences, not only symptom-correction pairs.

Weak evidence:

- Rules read as principles without lived consequence.
- No project, real or fictional, is named as a corpse for any rule.

### 2. Operating Model Fit

Does the proof-gated loop reflect how good games actually get made, including
the dark moments?

Strong evidence:

- The stage order resists pressure to skip ahead.
- Production crises (concept death, scope crisis, parallel risk, deadline
  mode) have explicit rituals.
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

- Templates collect data but do not surface taste edges.
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

- The source map cites the canon and the canon's lessons appear in operational
  moves, not only in headers.
- Production scope arithmetic exists.
- Retrospective stories ground the rules in real failure.

Weak evidence:

- The source map is a reading list without operational guides.
- No retrospective converts rules into recognizable patterns.

### 6. LLM-Native Leverage

Is Game Studio using AI for what AI is uniquely good at, or only disciplining
AI to act like a producer?

Strong evidence:

- Concept slates include intentional failure variants for human reaction.
- Naive-player walkthroughs are generated from design docs.
- Anti-pillars and next-proof candidates can be auto-proposed and reviewed.
- Cross-session memory probes for contradictions before agents act.

Weak evidence:

- The framework treats the LLM as a form-filler.
- Generative moves are not first-class skill outputs.

## Verdict Taxonomy

| Verdict | Meaning |
| --- | --- |
| Load-bearing | The dimension materially changes outcomes. Strong source of value. |
| Decorative | The dimension is plausible but does not change agent or human behavior. |
| Harmful | The dimension creates false confidence, ceremony without authority, or drift. |

A dimension can change verdicts as the framework evolves. Re-score during each
value review.

## Application

1. Read the load-bearing files for each dimension: philosophy, operating
   model, entry templates, every `SKILL.md` plus its references, source map,
   key rubrics, and recent skill outputs from a real project if available.
2. Run at least two of the four [Stress Scenarios](10-stress-scenarios.md).
3. Score each dimension as `load-bearing`, `decorative`, or `harmful`.
4. Name one concrete move that would change each verdict toward `load-bearing`,
   plus the cost of that move.
5. Record the result in this directory and link it from the index.

## Output Shape

```text
Reviewer:
Date:
Dimensions:
- Philosophy: <verdict>, ceiling move: <move>, cost: <effort>.
- Operating model: <verdict>, ceiling move: <move>, cost: <effort>.
- Onramps: <verdict>, ceiling move: <move>, cost: <effort>.
- Skill weight: <verdict>, ceiling move: <move>, cost: <effort>.
- Craft depth: <verdict>, ceiling move: <move>, cost: <effort>.
- LLM-native leverage: <verdict>, ceiling move: <move>, cost: <effort>.
Highest value per effort: <one move>.
Anti-additions to refuse: <list>.
```

## Proof Of Improvement

After applying the rubric twice, at least one dimension verdict should change
toward `load-bearing`. If no verdicts move, either the work between reviews did
not change behavior or the rubric is being scored too generously.
