---
type: Feature
---

# Feature 0: Turnkey Local Dev Environments

As a developer, I want a streamlined local dev environment that flattens my learning curve for the technical stack, so that I can contribute to the project more easily.

This feature story addresses [[requirements#6.1]].

## Acceptance Criteria

The developer environment should accomplish the following:

- [x] Support VSCode as a baseline experience for an IDE

- [ ] Be turnkey and allow developers to build, test and release applications with minimal setup or previous knowledge about the project.

    - [x] Start development servers
    - [x] Run tests in watch-mode
    - [x] Enable writing documentation
    - [x] Enable live-collaboration
    - [x] Run relevant automated checks
    - [x] Install necessary project dependencies
    - [ ] Recommend necessary IDE extensions

- [ ] Optional: Be portable across Windows, MacOS and Linux.

- [ ] Optional: Run locally and not require a remote dependencies.

## Notes

- Used NVM despite caveats to stick with the official method and enable optionality for using multiple Node versions. This also has better developer experience than potentially having to rebuild the DevContainer image.

- Added default JRE for local SonarQube.

- Vitest thinks Storybook stories are tests, we will revisit this later. #TODO

- Added D2 (with Tala) and Marp for documentation. 