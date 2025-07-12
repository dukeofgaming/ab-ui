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
    - [x] Automate generation of Markdown documentation file upon branch creation
    - [ ] Create PR template

- [ ] Maintain a single source of truth for design assets (Figma, Sketch, etc.) mapped to frontend componentversions (see [[requirements#2.1]])

    - [x] Integrate Storybook to Figma
    - [x] Integrate Figma to Storybook

- [ ] Provide clear lineage between design revisions, code commits, and semantic releases (see [[requirements#2.2]])

    - [ ] Find a way to enforce links to specific Figma revisions


## Notes

- Storybook can be embedded in Figma if published to Chromatic, so there can be bidirectional traceability: 

    - https://storybook.js.org/docs/sharing/design-integrations#embed-storybook-in-figma-with-the-plugin

    - https://www.figma.com/community/plugin/1056265616080331589/storybook-connect

- While having the option to publish Storybook to GH Pages, Chromatic additionally offers the advantage of visual testing.

- There is a changelog viewer for Storybook: https://storybook.js.org/addons/storybook-addon-changelog-viewer

- The pipeline is turned out as follows:
    
    ![pipeline](pipeline.svg)

    - After creating a Github Action for publishing to NPM it turned out to be better to use the Changesets Github Action for creating a PR for publishing the package to NPM.

    - There are 3 levels for usage of Storybook
        - Local: for feature branches, Storybook runs locally
        - Chromatic: for pre-release versions in dev, to coordinate development
        - GH Pages: for release versions, serves as the official documentation

    - Changesets requires special permissions to create / approve PRs

    - Installed changesets bot: https://github.com/changesets/bot?tab=readme-ov-file

- Refactored publishing to use Changesets Github Action primarily, where:
    - Feature branches with open PRs create snapshot releases (no use of the action, but still using the changeset command)
    - Merges to develop create a PR for a `dev` pre-release version
    - Merges to main create a PR for a stable release
    
- Installed Chromatic's GitHub UI review: https://www.chromatic.com/features/review
    
- Fixed packaging issues that caused SSR problems when trying to use the package in a Next.js app