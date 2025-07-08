---
type: ADR
status: proposed
authors:
  - David Vega
---

# ADR 2: Component Based Design

## Context

There is a general desire to have a [component-based design](https://www.componentdriven.org/) system and documentation leading to a library of shared and reusable components, as expressed by the following [[requirements]]:

- **1.2**: *Allow theming or restyling without altering core component logic.*
- **2.1**: *Maintain a single source of truth for design assets (Figma, Sketch, etc.) mapped to frontend component versions.*
- **4.1**: *Use a mechanism (e.g., semantic versioning) to facilitate controlled, incremental upgrades of shared components.*
- **4.2**: *Allow multiple component library versions to coexist without breaking existing applications.*
- **6.2**: *Prevent design drift by enforcing consistency between component implementation and design specifications.*
- **7.2**: *Keep documentation synchronized with each component and its version.*


## Decision

Use [Component Driven Development (CDD)](https://www.chromatic.com/blog/component-driven-development/) in conjunction with [Atomic Design](https://bradfrost.com/blog/atomic-design/) to create a library of shared and reusable components that are documented, traceable to design documentation and with versioned releases.

In order to drive this methodology we will use [Storybook](https://storybook.js.org/) as a tool for documentation, development and testing.

## Consequences

1. Choosing Storybook included [Playwright](https://playwright.dev/) and [Vitest](https://vitest.dev/) as dependencies by default. The choice of Vitest is compatible with [[ADR-1]]
