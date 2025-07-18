---
type: Feature
---

# Feature #6: Streamline collaboration and contributions



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

    - [x] Create base app repo to fork from upstream
    - [x] Create example app repos

- [ ] **"Prevent design drift by enforcing consistency between component implementation and design specifications"** (see [[requirements#6.2]])

    - [x] Export design tokens from Figma using Tokens Studio
    - [x] Implement design tokens with Style Dictionary
    - [x] Integrate Storybook with Tailwind themes and tokens

- [ ] **"Provide clear lineage between design revisions, code commits, and semantic releases"** (see [[requirements#2.2]])

    - [x] Integrated Figma Tokens Studio with GitHub

- [x] **"Tie feature branches and releases directly to specific design documents"** (see [[requirements#3.2]])

    - [ ] Create PR template with Figma link as a required field


## Notes


1. Created a base app repo to fork from upstream to serve as a base app implementation: https://github.com/dukeofgaming/ab-app

    - NextJS was chosen since it provides a turnkey experience with Tailwind: https://tailwindcss.com/docs/installation/framework-guides/nextjs

    - Created an app to CRUD brands base off that repository: https://github.com/ab-internal/ab-app-brands

2. Generated a few test tokens and integrated Figma with Github through Tokens Studio using the  GitHub sync provider: https://docs.tokens.studio/token-storage/remote/sync-git-github

    - Created new design branch as the point of integration
    - Designers can create pull requests from Figma, allowing them to merge from the design branch to the develop branch, creating an async communication channel with developers

3. After getting Tokens Studio to work to build tokens as css variables, went to implement switchable themes with Tailwind in the brands app: https://github.com/ab-internal/ab-app-brands/tree/1-implement-design

    - Refactored the app into a set of Typescript components called DataManager, DataTable and DataForm to simplify understanding of color schemes.

    - Reverse engineered a basic token structure from the app.

    - Implemented switchable themes with Tailwind.

    - Imported the tokens into Tokens Studio and reexported to the design branch

4. Added [[ADR-6]] to reflect the design tokens system implementation, which will help with collaboration between designers using Figma and developers.

5. Implementing theme switcher with Tailwind:

    - Started by following this guide: https://storybook.js.org/recipes/tailwindcss
    - Loaded themes dynamically from design/tokens/tokens.json



    
