---
type: ADR
status: proposed
authors:
  - David Vega
---

# ADR-6: Design Tokens System

## Context

Managing design tokens (colors, fonts, spacing, etc.) with support for multiple business domain themes is a core requirement for our UI library. We need a scalable, maintainable, and automated workflow that integrates with our existing stack (Tailwind, Storybook, React, Vite) and works with the free version of Figma.

## Decision

We will use the following approach for design tokens and theming:

- **Figma Tokens Studio**: Source of truth for design tokens. We use token sets (e.g., `global`, `theme/orders`, `theme/logistics`, etc.) to represent global and theme-specific values. This allows us to maintain multiple themes in the free version of Figma (which does not support native theme mode).
- **Style Dictionary**: Used as the build tool to transform/export tokens from Figma JSON into CSS custom properties. We use custom formats and filters to output:
  - `tokens.css`: Global tokens as CSS variables under `:root`.
  - `themes.css`: Theme tokens as CSS variables under `.theme-<name>` classes.
- **Tailwind CSS**: Consumes the generated CSS variables for utility-based styling and supports theme switching via class toggling.

## Consequences

1. Enables scalable, automated theme token management with free Figma.
2. Design tokens are single-source-of-truth, versioned, and can be updated by designers/devs.
3. Theming is runtime-switchable via CSS classes, compatible with Tailwind and Storybook.
4. Approach is extensible for future token categories (spacing, shadows, etc.).
