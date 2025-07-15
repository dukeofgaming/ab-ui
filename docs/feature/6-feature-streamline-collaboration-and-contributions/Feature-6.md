---
type: Feature
---

# Feature #6: Streamline collaboration and contributions

<!-- General requirement in user story form, e.g.: As a persona, I need a feature, so that I can accomplish something -->

## Acceptance Criteria

- [x] **"Consider a monorepo for shared libraries and micro-repos/packages for individual apps"** (see [[requirements#5.2]])

    - [x] Create base repo to fork for new apps to upgrade from upstream
    - [x] Create 1+ packages for design system components and consume them in other apps
    - [x] Test upgrading app repos from upstream base app repo


- [ ] **"Streamline contributions from a large developer community through local dev setups, peer-review workflows, and automated checks"** (see [[requirements#6.1]])

    - [x] Publish DevContainer image to GitHub Container Registry for quicker local setup with VSCode as a baseline experience
    - [ ] Setup base app repository to use devcontainer image
    - [ ] Make PR promotion mechanism reusable for peer review workflow
    - [ ] Add ESLint to test pipeline

- [ ] **"Minimize the total number of repos while avoiding a monolithic structure"** (see [[requirements#5.1]])

    - [ ] Create base app repo to fork from upstream
    - [ ] Create example app repos

- [ ] **"Prevent design drift by enforcing consistency between component implementation and design specifications"** (see [[requirements#6.2]])

    - [ ] Implement design tokens

- [ ] **"Provide clear lineage between design revisions, code commits, and semantic releases"** (see [[requirements#2.2]])

    - [ ] Find a way to enforce links to specific Figma revisions

- [x] **"Tie feature branches and releases directly to specific design documents"** (see [[requirements#3.2]])

    - [ ] Create PR template with Figma link as a required field


## Notes

<!-- Topics and details discovered throughout discussion, design and implementation -->

1. ...
