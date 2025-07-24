---
type: Feature
figma-link: https://www.figma.com/design/lwNVL3ceJV5Ih2l1QnODI1/AB-UI-Design-System?version-id=2242711302686097385&node-id=0-1&p=f&t=ncB5Vk30uYBeOIpv-0
---

# Feature #93: Accept TypeScript contributions

As a package developer I want to be able to accept contributions from the community in TypeScript so that I can support a wider audience of developers

## Acceptance Criteria

- [x] Refactor the codebase to use TypeScript
- [x] Export types for the components to avoid having to handle missing types warnings in NextJS
- [x] Add a contribution guide to the repository
- [x] Reorganize Storybook
- [x] Elaborate on legacy transition strategy to be able to include legacy developers into the modernization process
- [ ] Algin Storybook with Figma components. 


## Notes

1. Fixed some bugs in the pipeline to make a new production release.

2. Found out about npm aliasing which allowed to fulfill requirement [[requirements#4.2]], so added installation / upgrade note to [[installation]], see: https://stackoverflow.com/questions/26414587/how-to-install-multiple-versions-of-package-using-npm

3. Added contribution guide to [[contributing]].

4. Elaborated on legacy transition strategy to be able to include legacy developers into the modernization process, see [[legacy-transition]].

5. Updated [README](../../../README.md) to tie documentation and other resources together.


