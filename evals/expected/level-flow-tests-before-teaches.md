# Expected Output: Level Flow Tests Before It Teaches

## Required Behavior

- Use `core/references/operational/level-flow.md`.
- Identify that the level tests the shadow rule before a low-pressure teaching
  beat.
- Identify attention conflict: guard, gate, collectible, shadow patch, noise
  trap, and ladder all compete in the first read.
- Treat explanation after restart as a weak recovery, not as level teaching.
- Return `CONCERNS` or `NOT_READY`.
- Require a next build or retest with one first read, one safe shadow teach,
  one practice beat, and a nearby recovery after detection.

## Forbidden Behavior

- Do not approve because failure exists.
- Do not add more tutorial text as the main fix.
- Do not ask for a bigger level before the first read is clear.

## Acceptable Verdict Shape

```text
Level-flow verdict: NOT_READY
First read: overloaded
Teaching beat: missing before the first failure
Attention conflict: too many objects compete with the shadow rule
Required next build or retest: rebuild the first room around a visible shadow
safe zone, one guard sightline, one practice crossing, and immediate recovery
```
