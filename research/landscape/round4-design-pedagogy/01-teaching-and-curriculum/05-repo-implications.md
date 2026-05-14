# Teaching And Curriculum Canon For Beginner Design Judgment: Repo Implications

[Back to index](../01-teaching-and-curriculum.md)

## Repo Implications

### What The Repo Already Has

- A strong craft reference index in `core/references/game-craft-reference-index.md`.
- A beginner entry route in `docs/beginner-taste-to-game.md`.
- Taste intake fields in `core/templates/intake/beginner-taste-interview.md`.
- Good recognition that playtest evidence matters in
  `research/foundations/qa-playtesting-and-accessibility.md`.
- A useful next-step insight in
  `docs/improvement/value-review/13-craft-reference-curriculum.md`: syllabus is
  not curriculum, and operational guides need worked examples.
- Prior research already names MDA's limits and the need for DDE/Sicart/Lantz
  critique in `research/landscape/synthesis.md`.

### What Is Still Missing

- The repo has canonical citations, but not enough beginner exercises that
  convert taste into practiced judgment.
- The taste interview captures references, feelings, and boundaries, but it
  does not yet force reference decomposition into verbs, objects, resistance,
  feedback, and "what not to copy."
- The existing craft reference index lists *Game Design Workshop*, *Rules of Play*, MDA,
  *Characteristics of Games*, and *Game Feel*, but it does not encode the
  classroom sequence: non-digital exercise, prototype, critique, playtest,
  revise, postmortem.
- The repo has review rubrics, but beginner pedagogy needs assignment templates
  that produce evidence before formal review.
- MDA is present, and DDE critique is present in research, but beginner-facing
  prompts need a safe way to use MDA without turning the eight aesthetics into a
  restrictive taste menu.
- Anthropy/Sicart/Lantz are present as philosophical references, but their
  operational role should be clearer: protect authorial voice, player
  appropriation, and aesthetic meaning from overly procedural review.
- Level design appears as a review workflow, but not enough as a teaching
  module: level as lesson, path as argument, first room as tutorial, flow as
  player need.
- Playtesting guidance exists, but beginner-facing templates should more
  aggressively separate observation from interpretation and player preference
  from behavioral evidence.

### Core Thesis

The repo should treat beginner design education as a ladder:

```text
taste -> moment -> action -> feedback -> formal element -> dynamic ->
experience -> prototype question -> observed player behavior -> revision
```

At every step, the agent should preserve a visible author decision. The agent
may structure, compare, question, and propose, but the user should remain the
source of taste and final selection.


## Concrete Changes To Propose

No files beyond this research note were edited in this round. Proposed future
changes:

1. Add `core/templates/direction/reference-constraint-sheet.md`.
   Include reference moment, player action, feedback, emotional response,
   verbs/objects/resistance, what not to copy, inferred design constraint, and
   user-confirmed priority.

2. Expand `core/templates/intake/beginner-taste-interview.md`.
   Add fields for "Specific Moment," "Player Action," "Perceived Consequence,"
   "What Not To Copy," "Design Dimension Inference," and "Author Must Preserve."

3. Add `core/references/operational/beginner-design-pedagogy.md`.
   Use the module structure above. Keep it exercise-led, not essay-led.

4. Add `core/references/operational/mda-dde-for-beginners.md`.
   Teach MDA as a causal scaffold and DDE/Sicart/Lantz as the reopening pass.
   Include one example where MDA helps and one where MDA is insufficient.

5. Add `core/references/operational/primary-verb-feel.md`.
   Translate *Game Feel* into a beginner lab: input, response, camera,
   animation, audio, recovery, and "content removed" test.

6. Add `core/references/operational/level-as-lesson.md`.
   Teach first-room design, flow, landmarks, affordance introduction, test,
   variation, recovery, and blind playtest.

7. Add `core/templates/evidence/beginner-playtest-report.md`.
   Fields: research question, participant fit, scenario, facilitator notes,
   observed behavior, player quote, designer inference, severity, change,
   retest condition.

8. Update `skills/game-director/references/design-foundations.md`.
   Add a "beginner teaching mode" that asks lenses as coaching questions rather
   than issuing expert verdicts too early.

9. Update `skills/game-review-council/references/level-design-review.md`.
   Add a teaching subsection: "What does this level teach, where does it test,
   and where can the player recover?"

10. Update `core/references/game-craft-reference-index.md`.
    Add a "Pedagogy And Curriculum" section that points to MIT OCW, NYU Game
    Center course pages, Anthropy/Clark, Sicart, Lantz, Totten, and playtesting
    sources. Keep the existing design foundation section intact.

11. Add a beginner critique protocol to `docs/beginner-taste-to-game.md`.
    Suggested shape: preserve, clarify, compare, prototype, test, decide. The
    user owns selection; the agent owns making tradeoffs legible.

12. Add a new anti-pattern to `docs/anti-patterns.md`.
    Proposed name: "canon flattening." Definition: using design theory to
    normalize a beginner's unusual taste into a conventional genre solution
    before the strange part has been tested.

13. Add a proof gate criterion to the first playable path.
    Criterion: "The proof preserves the author-stated taste center, not only a
    mechanically cleaner substitute."

14. Add worked examples before more rubric expansion.
    A beginner needs cases more than criteria: one cozy reference, one horror
    reference, one precision-platformer reference, one personal-story reference,
    each translated into a different prototype question.

15. Keep creativity protected by explicit option sets.
    Any agent recommendation that changes the user's taste center should present
    at least two viable directions and name the authorial cost of each.
