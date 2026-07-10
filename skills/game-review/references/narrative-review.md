# Narrative Review

Narrative review checks whether story works as playable design, not as prose.
Use `storylets.md` in this directory when the work contains branching beats,
repeatable narrative units, AI-authored text, or state-dependent delivery.

## Flow

1. State the story promise in one sentence and the player's role in it.
2. List the critical beats and the player verb at each one.
3. Check state changes, branch cost, and content budget.
4. Check localization, accessibility, and content QA risk where content volume
   or text is central.
5. Check AI and canon authority when generated text is involved.
6. Return a verdict.

## Checks

**Narrative promise.** The story promise changes what the player does, reads,
risks, or decides; the emotional arc can be tested in play; narrative
anti-pillars reject generic lore and cinematic overreach.

**Scenario legibility.** Each critical beat has a player verb; player
knowledge before and after the beat is explicit; required clues, state
changes, and failure paths are documented; comprehension and pacing can be
playtested.

**Content scope.** Word count, branch count, VO minutes, strings, and state
flags are estimated; branches have coverage and collapse rules; canon
authority and AI-assisted text boundaries are explicit — generated text does
not change canon without authority and provenance.

## Blocking

- Lore replaces player action.
- Branch claims without coverage and collapse rules.
- A beat the player cannot act on or understand in play.
- Generated text with no provenance, rejection, or review rule.

## Output

```text
Verdict: READY | CONCERNS | NOT_READY | USER_DECISION_NEEDED
Story promise:
Playable beats:
State consequences:
Content budget:
Localization or accessibility risk:
AI or canon boundary:
Required next proof:
```
