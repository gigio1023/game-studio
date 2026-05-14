# Round 5 Implementation Translation: Gate Changes

[Back to index](../01-template-and-schema-translation.md)

## Gate Changes

### Direction Gates

Update `GS-ENTRY-ROUTE`.

New questions:

- Is `auteur-systems-first` the correct route because the creator starts from
  a formal constraint, toy, system, visual rule, or personal statement rather
  than taste references or carried direction?
- Is the next step blocked by a human-owned decision?

Add `GS-REFERENCE-CONSTRAINT`.

Question: Has a reference moment been translated into constraints without
copying or normalizing away the creator's taste?

Review:

- Moment, action, resistance, consequence, and response are separated.
- What not to copy is explicit.
- Agent interpretations are marked as inferences.
- Creator priority is recorded.
- Contradictions are preserved until the creator resolves them.

Add `GS-AUTEUR-SYSTEMS-FIRST`.

Question: Is the project allowed to begin from a system, constraint, toy,
personal statement, or aesthetic rule without forcing a generic player
experience target too early?

Review:

- Starting material is concrete.
- The agent names what must not be normalized.
- The next proof is a small playable study.
- The creator owns the direction decision after the study.

Update `GS-TASTE-CLARITY`.

New questions:

- What exact reference moment matters?
- What player action and perceived consequence created the response?
- What part of the user's personal taste must not be normalized away?
- Is the ambiguity productive, expressive roughness, missing decision, missing
  craft, incoherence, or overreach?

Update `GS-CONCEPT-SLATE`.

New questions:

- Could this artifact be recreated from genre tags without losing its identity?
- What human-authored choice makes each concept specific?
- What generated material was pruned before presentation?
- What did the slate subtract?
- Does every concept name one first proof before more generation?

Update `GS-CREATIVE-BRIEF`.

New questions:

- What decisions did AI propose, the human accept, and the human reject?
- What is AI not allowed to decide?
- Is the brief short enough to reduce ambiguity without elaborating an
  unproven idea into false precision?

Update `GS-PROTOTYPE-QUESTION`.

New questions:

- What proof budget exists before any generation or implementation?
- What is the cut criterion if the prototype gets a tepid response?
- What player behavior would disprove the assumption?
- Would the owner be proud to keep developing this if the proof technically
  works?


## Gate Changes

### Production Gates

Update `GS-PROTOCOL-PROOF`.

New questions:

- Is generated material tied to a player action, system response, visible
  consequence, capture, QA note, or playtest observation?
- What does the proof not prove?

Update `GS-CORE-LOOP`.

New questions:

- Did players understand but not want another run?
- If yes, is the next action cut, pivot diagnosis, or a smaller proof instead
  of feature expansion?

Update `GS-PREPRODUCTION-EXIT`.

New questions:

- Are kill, pivot, and reboot triggers predeclared?
- Is any required overtime recorded as a sustainability blocker?
- Are temporary work groups named with decision owners and dissolve
  conditions?

Update `GS-PRESENTATION-VALUE`.

New questions:

- Is presentation proving gameplay value, or hiding a missing core loop?
- What input, camera, animation, audio, feedback, and recovery variables are
  being tested for the primary verb?

Update `GS-VERTICAL-SLICE`.

New questions:

- What second repeatable unit was produced?
- How long did the second unit take compared with the first?
- What tooling, pipeline, approval, localization, accessibility, QA, and
  release workflows were exercised?
- What invisible deliverables remain unproven?
