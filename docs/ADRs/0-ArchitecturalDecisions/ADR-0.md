---
type: ADR
status: proposed
authors:
  - David Vega
---
# ADR 0: Architectural Decisions

## Context

It is expressed in the [[requirements]] that there is a need to provide clarity on architectural decisions.


## Decision
Use markdown-based Lightweight ADRs (Architecture Decision Records).

See [Lightweight ADRs](https://adr.github.io/adr-spec/adr/0000-lightweight-adr-spec.md) for more details.

## Consequences

1. Architectural decisions are documented alongside the evolution of the codebase.

2. Partially addresses the business concern *"Documentation is limited due to staff turnover"* from the [[requirements]] document.

3. This approach is consistent with the [Cointunous Architecture manifesto](https://continuous-architecture.org/docs/manifest/manifesto.html), which advocates for an incremental approach to decision-making. While we may have a future-state as a target and true north, avoiding prescriptive decisions does maximize the number of options and agility for the business.