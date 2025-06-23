---
type: ADR
---

# ADR 5: Component Testing

## Context

Frontend components should be trusted and reliable, therefore it is important that both behavior and design are tested.

## Decision

We will use Vitest & jsdom for unit-testing logic and behavior, and Storybook with Playwright for visual / design testing.

## Consequences

1. Addressed behavior testing through Vitest & jsdom (see [[requirements#Context]], [[Feature-1]]).
