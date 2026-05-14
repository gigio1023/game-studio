# 04 Adapters, Install, And Contribution Hygiene: Security Policy

[Back to index](../04-adapters-install-contribution.md)

## Security Policy

- [ ] Create `SECURITY.md`.

Required sections:

```markdown
# Security Policy


## Reporting

## Scope

## Out Of Scope

## What To Include

## Maintainer Response
```

In scope:

- unsafe file mutation during install or upgrade
- secret exposure
- command injection
- malicious adapter behavior
- misleading install or upgrade behavior
- documentation that instructs unsafe credential handling

Out of scope:

- low-quality game advice
- contributor checks failing to judge game quality
- optional hooks that were not installed
- unsupported local modifications

Reports should include:

- reproduction steps
- affected version or commit
- adapter
- production framework
- redacted logs
- target-repo file shape when relevant


## Acceptance

- README does not imply repository scripts validate game quality.
- Contributor docs clearly explain hygiene checks.
- Adapter hooks are optional and runtime-specific.
- Install docs distinguish framework-owned and project-owned files.
- Security policy separates private vulnerability reporting from public support
  and game-quality critique.
