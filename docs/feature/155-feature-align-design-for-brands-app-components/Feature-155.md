---
type: Feature
figma-link: https://www.figma.com/design/lwNVL3ceJV5Ih2l1QnODI1/AB-UI-Design-System?version-id=2251162652078160692&node-id=0-1&p=f&viewport=491%2C404%2C1.08&t=5sooYvUwRCxVLyIL-0
---

# Feature #155: Align design for brands app components

As a developer, I want to make sure my implementation matches the design in Figma, so that I can deliver a high-quality product with a maintainable design system.

## Acceptance Criteria

- [x] Implement ESLint rules to enforce Storybook stories to have a Figma link
- [x] Ensure pipeline warns / blocks accordingly
- [ ] Update tokens and styles with latest figma design

## Notes


1. Having the ESLint rule failing on the PR seems sufficient, there would be the option add some additional complexity to have the test action to throw a warning instead of an error that fails the job, but this can be configured in GitHub or any other CI/CD platform to allow the merge at the PR level, but not at the dev branch level.
