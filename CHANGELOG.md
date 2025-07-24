## 0.3.0-dev.0

## 0.3.0-dev.2

### Patch Changes

- ff2036d: Committing pre exit if in stable release

## 0.3.0-dev.1

### Minor Changes

- 09dd92d: Simplifying changeset-release action to handle snapshot logic as release

### Patch Changes

- aa788bd: Adding pre-exit mode for edge case when in dev and snapshot
- 46ee9b1: Correcting logic to handle only releases / PRs for dev and main (no 📸)
- 16d9b97: Fixing missing check for stable keyword in custom changeset action
- ac7ccec: Adding branch to snapshot input param validation
- ff1c632: Fixing bad substitution in GH action
- d5eeeda: Avoiding dev / main snapshot for temporary debugging (may revert)
- 6a4bee3: Entering pre-release only when not in snapshot mode

### Minor Changes

- 643b05b: Adding missing age verification callbacks
- f24cd82: Added Typescript components from Brands app with Storybook stories, fixed eslint for typescript, and ensured design tokens were included in example app
- d1dfcec: Refactoring to not use default exports and improving legibility

### Patch Changes

- 4515557: Added DataTable, DataForm and DataManager components from other project
- 59790ac: Removing unnecessary types from composite action
- e109abc: Refactored old components to TypeScript
- a848937: Configuring typescript to emit types as part of the build script

## 0.2.0

### Minor Changes

- bbbe4e6: Creating composite action called changeset-release to Refactor and simplify package/storybook publishing
- b3a6ad5: Loaded themes dynamically into Storybook from tokens.json

### Patch Changes

- eeb2cfd: Forcing non-shallow clone from job to test if that is affecting the step summary output
- 24cf0bc: Ensure full fetch in Github composite action context for changesets-is-release-merge
- e3d1d8c: Improving summary output, refactored to create an action for branch-docs avoiding a separate workflow
- abf6040: Fixing pre-release logic in action
- 1c0ae5e: Paralelizing test jobs
- aeb77e0: Externalizing changesets-is-release-merge into portable script to test locally
- f32ccd6: Fixing forgotten checkout while action is referred to locally
- 168394f: Adding support to Storybook action to publish an artifacto in GitHub
- f092325: Removing unneeded chore commit to exit pre mode
- c27d67f: Adding tokens & themes to build script and package.

  For CSS:

  ```css
  @import "@dukeofgaming/ab-ui/css/themes";
  @import "@dukeofgaming/ab-ui/css/tokens";
  ```

  For JS (ESM) / TS:

  ```ts
  import "@dukeofgaming/ab-ui/css/themes";
  import "@dukeofgaming/ab-ui/css/tokens";
  ```

- c733fb4: Limiting devcontainer builds to develop and main, adding concurrency blocking to workflow
- 8e68877: Setting tests as initial step for pr and regular pipeline
- 05ecc41: Significant refactor to pipeline to simplify release logic
- 7efe680: Adding debug and summary output for release parameters setting
- b475697: Adding ESLint configuration with Vitest plugin
- eb6a329: Fixing issues with ESLint
- fd44471: Configuring Style Dictionary, Tailwind, and Storybook with Tailwind
- 85b4b0f: Fixing missing commit step for github-branch-md action
- d7525b1: Attempting fix on pre-mode publishing and release PR
- 9b0f255: Refactoring out redundant logic
- 70f2099: Cancelling previous devcontainer workflow if in the same concurrency group
- bdf9b21: Fixing faulty guard for pre enter
- 8c00995: Refactoring changeset snapshot into composite action
- c733fb4: Tee-ing echoes in action/changesets-is-release-merge instead of redirecting to GITHUB_OUTPUT and GITHUB_STEP_SUMMARY for easier debugging
- 70f3f7a: Fixing to push to the source PR branch, not the hidden PR branch provided by the GitHub Action context
- a04a56c: Adding style dictionary formats / filters for Figma theme token sets
- 57e9953: Adding branch issue number validation and figma link validation to the template and issue check for github-branch-md composite action
- ae5bd8f: Refactoring Storybook publishing to reusable Workflow + Github Action
- 9896e6a: Updated ESLint to not complain about Storybook
- 334ff6b: Created workflow for publishing devcontainer image
- f4311fc: Refactoring to reusable test workflow
- 4b826fb: Adding ESLint to reccomended VSCode extensions
- 6b981ab: Fixing issue when publishing to chromatic with shallow-clone
- ceef6a7: Refactoring changesets merge detection job into action
- ca3118a: Fixing missing build step that takes care of the tokens with Storybook

## 0.1.3

### Patch Changes

- e3d1d8c: Improving summary output, refactored to create an action for branch-docs avoiding a separate workflow
- 8e68877: Setting tests as initial step for pr and regular pipeline

### Patch Changes

## 0.1.2

### Patch Changes

- f45e1ad: Removing prop-types from devDependencies
- 4ca36b6: Wiring jobs and dependencies, ensuring non-shallow clones are used for certain cases
- 3dafdcc: Fixing issue with dev and main snapshots
- e61726b: Fixes for promotion PR creation, adding comment on updated run
- d712df6: Upgrading to React 19
- 7ba2316: Fixing PR creation by adding missing installation o f node packages
- d7a060b: Included prop-types as an external dependency, which was causing issues with SSR in NextJS
- f2a325c: Adding graceful handling of no changesets when creating promotional PR from dev to main
- 6924298: Fixing faulty permission for git pushes from workflow (permissions: contents: write)
- 94d4142: Removing branch protection rules to test workflow
- 27dc146: Improved robustness of Changesets merge commit detection
- fa8d3ff: Making pre-exit commit in the develop branch as chore commit for promotion PR
- 4f8ed92: Installed Changesets bot for repository: https://github.com/changesets/bot?tab=readme-ov-file
- 5878484: Added snapshots for regular merges, but skipping for changeset-release/\* PR merges
- 88d860a: Adding missing build step to workflow
- 9427a4b: Adding develop & main snapshots on regular merges (non changeset-release/\*)
- 76d0383: Exiting pre mode as part of changeset-release/main branch
- 239d3c1: Added missing builkd step in PR workflow
- 9229fcd: Adding pre exit commit on main release job
- 13d49d9: Externalized react/jsx dependencies in Vite's config for rollup, added build:clean script
- 0b29592: Improving pipeline
- 8e2f717: Fixing typo in pipeline, adding is_changeset_release dependency to main
- f9ca08a: Adding prop-types as a peerDependency
- e1fbbe5: Adding develop -> main promotional PR
- 2d63a48: Adding job to check if a changeset-release/ branch is an ancestor to verify if jobs should run on a Changesets release commit (coming from a Changesets PR)
- 02f4756: Using Changesets to publish pre-release package
- 214a79a: Fixed edge case where changeset-release/\* merge is found, but not at the tip for one of the parents of a merge commit
- 10cc383: Only publishing storybook on changeset-release/\* PRs, fixing publishing to Github Pages
- a3c3fd9: Using Changeset's snapshot package for feature branches, pre enter for dev and pre exit for stable/main releases
- e6d7d30: Updating to latest checkout and setup-node actions, node 24
- f5f5b0f: Splitting run for testing components and storybook
- 1e69138: Adding links to published packages for dev (pre) and main
- 52fbff5: Only flagging true direct merges from the tip of a changeset-release branch, adding verbosity, improving job name
- bdac02c: Fixing missing pull-request write permission
- b69ab1d: Improving format of verbosity

## 0.1.2-dev.9

### Patch Changes

- 7ba2316: Fixing PR creation by adding missing installation o f node packages

## 0.1.2-dev.8

### Patch Changes

- fa8d3ff: Making pre-exit commit in the develop branch as chore commit for promotion PR

## 0.1.2-dev.7

### Patch Changes

- 94d4142: Removing branch protection rules to test workflow

## 0.1.2-dev.6

### Patch Changes

- 9229fcd: Adding pre exit commit on main release job

## 0.1.2-dev.5

### Patch Changes

- 8e2f717: Fixing typo in pipeline, adding is_changeset_release dependency to main

## 0.1.2-dev.4

### Patch Changes

- 76d0383: Exiting pre mode as part of changeset-release/main branch
- 214a79a: Fixed edge case where changeset-release/\* merge is found, but not at the tip for one of the parents of a merge commit

## 0.1.2-dev.3

### Patch Changes

- 27dc146: Improved robustness of Changesets merge commit detection

## 0.1.2-dev.2

### Patch Changes

- 4ca36b6: Wiring jobs and dependencies, ensuring non-shallow clones are used for certain cases
- e61726b: Fixes for promotion PR creation, adding comment on updated run
- e1fbbe5: Adding develop -> main promotional PR
- 2d63a48: Adding job to check if a changeset-release/ branch is an ancestor to verify if jobs should run on a Changesets release commit (coming from a Changesets PR)

## 0.1.2-dev.1

### Patch Changes

- 3dafdcc: Fixing issue with dev and main snapshots
- 5878484: Added snapshots for regular merges, but skipping for changeset-release/\* PR merges
- 9427a4b: Adding develop & main snapshots on regular merges (non changeset-release/\*)
- 1e69138: Adding links to published packages for dev (pre) and main

## 0.1.2-dev.0

### Patch Changes

- 4f8ed92: Installed Changesets bot for repository: https://github.com/changesets/bot?tab=readme-ov-file
- 0b29592: Improving pipeline
- 02f4756: Using Changesets to publish pre-release package
- a3c3fd9: Using Changeset's snapshot package for feature branches, pre enter for dev and pre exit for stable/main releases
- e6d7d30: Updating to latest checkout and setup-node actions, node 24
- f5f5b0f: Splitting run for testing components and storybook

## 0.1.1

### Patch Changes

- First test revision
