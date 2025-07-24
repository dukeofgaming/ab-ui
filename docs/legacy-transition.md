# Legacy Transition 

In order to help transition from the current fragmented setup towards a new architecture, the following is proposed:

## Strategy

1. **Step #1: Adopt Vertical Slicing**: this architectural pattern translates to isolating end-to-end, testable and end-user facing functionality across all the layers of the tech-stack / business. 

2. **Step #2: Use Playwright for E2E & API testing**: Using Playwright's test recorder is recommended, since this allows to:

    1) Write tests first and without the learning curve of knowing how to write tests in Playwright.

    2) Not worry about the new technology stack upfront, since there may be conflicting dependencies.

    3) Identify a **vertical slice** of an application from the rest of the codebase.

        > **Note**: It is of **vital** importance that testing doesn't become a distraction for developers or management. Testing is not the goal.
        >
        > The goal is to create ONE and only ONE E2E test to identify the smallest possible vertical slice to isolate.
    
    4) Focus on testing behaviors as opposed to implementation details.

4. **Step #3: Implement Strangler Fig Pattern**: Once we have an E2E test that works for the legacy implementation as well as the new implementation.

    1. Identify and select the smallest testable **vertical slice**. 

        > **Note**: It is very important one vertical slice is selected at a time. Each feature flag will create a branching codebase to maintain.
    
    2. Implement a feature flag for the new implementations; this is important to allow current users to continue undisrupted.

        > **Note**: The first vertical slice will carry the most complexity, as the underlying technology and dependencies will need to be aligned. This is why we should start with the smallest possible.

        > **Note**: It is perfectly OK to create duplicated code as a starting point for a feature flag. 

    2. Use canary releases to enable the new flag to a pilot user group (which can be developers, or internal QA).

    3. Monitor the implementation, preferably using telemetry to understand what portion of users are using the new implementation.

    4. Once there is full confidence on the new feature / slice, retire the the feature flag along with the legacy implementation.

        > **Note**: Progress should only be measured once the feature flag is removed along with the legacy implementation.

5. **Step #4: Contribute back to reusable packages & services (e.g. the design system, back-end libraries, etc.)**: To maximize reusability and code quality, once the new implementation is ready these should be made reusable. For new reusable code, Test-Driven Development is highly-encouraged.

## Validation of Requirements

The plan & strategy addresses the following requirements:

1. **Preserving Business Continuity**: Keep existing operations stable throughout each migration phase.

2. **Consistent Releases**: Show regular progress to instill confidence in both end users and the engineering organization.

Explanation below.

### Preserving Business Continuity

In order to keep existing operations stable throughout each migration phase:

- Feature flags are important to allow current users and existing development to continue undisrupted. The new code is expected to diverge.

- Preserving the old code is perfectly OK. This serves to not halt existing development or prevent bugfixes on legacy code. So existing legacy code is also expected to diverge.
    > **Note**:  This is also why we want to focus on one vertical slice at a time. Maintaining multiple branching codebases can halt both existing development and modernization.

- Vertical slicing can lead to microfrontends (e.g. using iframes, web components or module federation) and/or microservices (e.g. API-only, different scaling requirements, reusable services, etc). 

    > **Note**: Microfrontends and microservices should be approached with caution and tested progressively and organically, and only if the vertical slice is large enough to justify the complexity, maintained by different dedicated teams, etc.

### Consistent Releases

In order to show regular progress to instill confidence in both end users and the engineering organization:

- Fully E2E-tested small vertical slices that can be toggled with feature flags will give peace of mind to both users and engineering about modifying the codebase in production, as it is reversible and it doesn't prevent changes to the legacy code.

- Adding E2E testing upfront sets up the entire organization for success to progressively gain speed to make changes with confidence.

- Reusable code and services that are fully tested with TDD will not only inspire confidence, but also eliminate fear from contributing to the codebase. Eliminating fear is the key goal of TDD: https://www.youtube.com/watch?v=GvAzrC6-spQ

- API testing can help a backend development team to work in parallel and ensure any API changes are communicated to the frontend team.

- A smooth and disruption-free transition is facilitated by the ability to ***focus on one vertical slice at a time***, and have the end goal being to retire the feature flag and legacy code.
    > **Note**: Not retiring feature flags and legacy code will give false confidence of progress and inflate the codebase.