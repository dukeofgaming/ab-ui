---
type: ADR
status: proposed
authors:
  - David Vega
---

# ADR 1: Javascript Component Framework

## Context
In order to meet the reusable component library requirement, we need to choose a Javascript component framework.

Options to consider are [React](https://react.dev/), [Vue](https://vuejs.org/), and [Svelte](https://svelte.dev/).

## Decision

React has been chosen fro this prototype for the following reasons:

- Strong community and ecosystem, which translate to:

  - More available talent.
  - Abundant and updated documentation.
  - Compatibility with other tools, increasing optionality.

- As opposed to Vue, React is a library, not a framework, which provides more flexibility and ability to migrate to other libraries / frameworks in the future.

- While Svelte shows promise, talent is not as available as for React.

## Consequences

1. Given the choice of React and that this prototype is greenfield, [Vite](https://vite.dev/) has been chosen as the build tool due to build speed and support for HMR. However, if current codebases use other tools such as Webpack, this decision may need to be revisited or just supported for the component library, therefore an ADR was not created yet.

2. There is a requirement to support multiple component library versions to coexist without breaking existing applications. This is a challenge for React, but no so much for Svelte.