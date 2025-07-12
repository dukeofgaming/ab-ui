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
