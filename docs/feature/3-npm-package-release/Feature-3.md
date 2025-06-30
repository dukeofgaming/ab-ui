---
type: Feature
author: "@dukeofgaming"
links:
  - Github Issue: https://github.com/dukeofgaming/ab-ui/issues/3
---


# Feature #3: NPM Package Release

As a developer, I want to release the package to NPM, so that I can use my components in other projects.

## Acceptance Criteria

- [ ] Use a mechanism (e.g., semantic versioning) to facilitate controlled, incremental upgrades of shared components. (see [[requirements#4.1]])

    - [x] Publish UI components package to an NPM registry

- [ ] Automatically generate release notes, highlighting changes, deprecations, and upgrade paths. (see [[requirements#7.1]])

    - [ ] Implement the use of [changesets](https://github.com/changesets/changesets)

- [ ] Tie feature branches and releases directly to specific design documents (see [[requirements#3.2]])

    - [x] Create issue template
    - [ ] Automate generation of Markdown documentation file upon branch creation

- [ ] Maintain a single source of truth for design assets (Figma, Sketch, etc.) mapped to frontend component
versions (see [[requirements#2.1]])

    - [ ] Integrate Storybook to Figma

- [ ] Provide clear lineage between design revisions, code commits, and semantic releases (see [[requirements#2.2]])

    - [ ] Find a way to enforce links to specific Figma revisions


## Notes

- Storybook can be embedded in Figma if published to Chromatic, so there can be bidirectional traceability: 

    - https://storybook.js.org/docs/sharing/design-integrations#embed-storybook-in-figma-with-the-plugin

    - https://www.figma.com/community/plugin/1056265616080331589/storybook-connect

- While having the option to publish Storybook to GH Pages, Chromatic additionally offers the advantage of visual testing.

