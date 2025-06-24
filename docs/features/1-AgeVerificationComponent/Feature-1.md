---
type: Feature
---

# Feature 1: Age Verification Component

As a developer, I want to create a component that verifies a user's age, so that I can add it to a brand site.

## Acceptance Criteria

- [x] Implement component that verifies a user's age.
    - [x] Implement subcomponent for number type inputs.
    - [x] Implement subcomponent for a button.
- [x] Add unit testing for the components.
- [x] Add stories for the components.
- [x] Parametrize age for the age verification component.
- [x] Add tests to pipeline
- [x] Publish Storybook to GitHub Pages
- [x] Enforce pull request & code reviews

## Notes

- After creating a few basic components and using Storybook to test them, it seems that the optimal setup is:
    - Use Vitest & jsdom for unit-testing logic and behavior
    - Storybook with Playwright for visual / design testing
        
        - Chromatic for visual testing is the recommended way but it costs
        - Visual testing with diff can be accomplished with Playwright: 
        
        https://markus.oberlehner.net/blog/running-visual-regression-tests-with-storybook-and-playwright-for-free
    
    - Storybook also a good way to test accessibility and design drift
- Design drift can be prevented and detected by using design tokens #TODO:

    https://medium.com/towkns/creating-a-design-tokens-library-advanced-strategies-for-streamlined-design-systems-91a96e35b640

- Refactored tests to use the Arrange Act Assert and Given When Then conventions.

- Design / style tests should be moved to Storybook with Playwright #TODO

- Added pull request & code review request from Copilot