# @dukeofgaming/ab-ui

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
