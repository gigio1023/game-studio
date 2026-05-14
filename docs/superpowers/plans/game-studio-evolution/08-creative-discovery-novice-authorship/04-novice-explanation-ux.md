# 08 Creative Discovery And Novice Authorship: Novice Explanation UX

[Back to index](../08-creative-discovery-novice-authorship.md)

## Novice Explanation UX

- [ ] Create `docs/plain-language-game-design-glossary.md`.

Explanation format:

```text
What you said -> Game Studio term -> Why it matters -> First proof
```

Examples:

- "I like feeling lost but safe" -> exploration tension -> level structure must
  create curiosity without punishing confusion -> first proof tests one room
  transition and one reversible risk.
- "I hate grinding" -> low repetition tolerance -> progression must avoid
  repeated filler actions -> first proof tests whether one loop is meaningful
  without upgrades.

Rules:

- Explain only the term needed for the next decision.
- Do not teach a full game-design course during onboarding.
- Prefer choices with consequences over open-ended lectures.
- Let the user stay at novice fluency while the artifacts become professional.


## AI Authorship Control

AI can:

- ask taste questions
- propose concepts
- compare tradeoffs
- recommend rejection
- draft a creative brief
- plan the first prototype
- implement bounded playable builds
- review the result
- recommend next proof

AI must not:

- own the user's taste
- silently select the final concept
- lock direction without a decision record
- change stage without a decision record
- make public promises
- claim a concept is original, marketable, or fun without proof
- turn a parked idea into active scope without approval

Decision records are required for:

- selected concept
- Direction Lock
- stage advancement
- public promise changes
- major scope expansion
- replacement of the core player fantasy


## Adapter Behavior

- [ ] Update `adapters/codex/bootstrap.md`.
- [ ] Update `adapters/claude/bootstrap.md`.

Both adapters should begin with:

```text
Are we adopting an existing game direction, turning taste/references into a game
direction, or auditing an ambiguous existing project?
```

Codex behavior:

- prefer explicit project intake before file changes
- propose concise concept slates when in `taste-to-game`
- require first prototype contract before implementation
- stop at user decision points

Claude behavior:

- read `.game-studio/project-state.md` and `entryMode` at session start
- preserve concept slate and creative brief across compaction
- use optional hooks only for continuity warnings
- do not let hook output replace review gates


## Acceptance

- The framework can start from blank taste without forcing a thesis first.
- The framework can also preserve an existing team direction without rewriting
  it.
- Public copy says milestone-gated playable validation, not audit-heavy.
- Concept generation outputs a small, comparable slate, not idea spam.
- Every selected concept has a first playable build.
- AI authorship boundaries are explicit.
- Direction Lock remains a gate, not a persuasive document.
