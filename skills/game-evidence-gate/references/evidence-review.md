# Evidence Review

Evidence must be observable, reproducible, and tied to a milestone claim.

## Flow

1. List required evidence.
2. Check whether each artifact exists.
3. Classify evidence as implementation, design, player, accessibility, or release evidence.
4. Run deterministic checks when listed.
5. Record manual role checks.
6. Separate missing evidence from failed evidence.

## Output

```text
Verdict:
Evidence checked:
Missing evidence:
Failed evidence:
Manual review checked:
Residual risk:
Next gate:
```

## Decision Rule

Use `NOT_READY` when evidence is missing for the central milestone claim.

Use `CONCERNS` when evidence exists but leaves a bounded risk.
