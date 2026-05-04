# Evidence Review

Evidence must be observable, reproducible, and tied to a milestone claim.

## Flow

1. List required evidence.
2. Check whether each artifact exists.
3. Run deterministic checks.
4. Record manual checks.
5. Separate missing evidence from failed evidence.

## Output

```text
Verdict:
Evidence checked:
Missing evidence:
Failed evidence:
Residual risk:
Next gate:
```

## Decision Rule

Use `NOT_READY` when evidence is missing for the central milestone claim.

Use `CONCERNS` when evidence exists but leaves a bounded risk.
