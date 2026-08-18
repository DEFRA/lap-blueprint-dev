---
layout: "@lap/layouts/BaseLayout.astro"
title: Process
---

# Process

The Re-Engineering process takes an approved PRD and turns it into reviewed, implemented features for a modern replacement application. It begins by creating feature specifications and then repeats an autonomous build and review cycle for each approved feature.

## Input and outputs

| Type | Location | Purpose |
| --- | --- | --- |
| Input | `output/PRD.md` | The approved requirements for the legacy application |
| Intermediate output | `output/features/FT-*.md` | One feature specification for each independently deliverable unit of work |
| Delivery output | Target application repository | Implemented, tested and reviewed features |

## The six phases

```mermaid
flowchart TD
	PRD["Signed-off PRD"]
	Decomposition["1. Feature decomposition"]
	PlanReview["2. Feature plan review"]
	FeatureSignOff["3. Feature specification review and sign-off"]
	ProjectSetup["4. Project setup"]
	AutonomousBuild["5. Autonomous build per feature"]
	ImplementationReview["6. Implementation review per feature"]
	NextFeature{"Another approved feature?"}
	Complete["Modernised application"]

	PRD --> Decomposition
	Decomposition --> PlanReview
	PlanReview --> FeatureSignOff
	FeatureSignOff --> ProjectSetup
	ProjectSetup --> AutonomousBuild
	AutonomousBuild --> ImplementationReview
	ImplementationReview --> NextFeature
	NextFeature -- Yes --> AutonomousBuild
	NextFeature -- No --> Complete

	classDef startPoint stroke:#2e7d32
	classDef termination stroke:#c62828
	class PRD startPoint
	class Complete termination
```

### 1. Feature decomposition

Use the `prd-to-features` agent to analyse the signed-off PRD and propose a breakdown into feature specifications. The agent first presents a feature plan for review, then generates individual specification files after the plan is confirmed.

Each feature should:

- be self-contained and independently deliverable
- represent a coherent unit of user value rather than a technical layer
- preferably remain within one bounded context
- make shared infrastructure, such as authentication, navigation or reference data, explicit where it needs its own feature

Order features from the bottom up:

| Build layer | Typical content |
| --- | --- |
| Lowest | Shared reference data, core entities and data models |
| Middle | Domain screens, workflows and business capabilities |
| Highest | Authentication, authorisation, navigation shells, landing pages and dashboards |

The feature plan records identifiers, titles, priorities, build layers and dependencies. A feature's build layer is one greater than the highest layer of its upstream dependencies, or zero when it has none. Confirm the plan before feature specifications are generated.

### 2. Feature plan review

The product manager and stakeholders should review the plan before the agent creates specifications. Check:

- feature IDs are sequential, titles are clear and each description is appropriately scoped
- MoSCoW priorities reflect business criticality
- PRD sections are mapped to the appropriate features
- foundation features appear in lower layers and navigation or dashboard features in higher layers
- each feature represents a coherent, independently deliverable unit of user value
- all upstream dependencies are in lower layers, no circular dependencies exist, and shared dependencies are explicit
- all bounded contexts, screens, workflows, business rules and common infrastructure are covered

Describe any required adjustments to the agent and obtain a revised plan before confirmation.

### 3. Feature specification review and sign-off

Review each file in `output/features/` individually. Different team members can review different files, but the set must also be checked collectively for coverage.

For each feature, confirm:

- user stories cover happy, alternative and error paths
- in-scope, out-of-scope and boundary statements match the confirmed feature plan
- business rules, data entities and dependencies agree with the PRD and plan
- acceptance criteria are specific and testable
- wireframes agree with the PRD's screen descriptions and field lists
- every claim is traceable to the PRD, with no invented rules or requirements
- open questions are resolved, accepted or escalated before they block development

The product manager, business analyst and relevant stakeholders approve the feature specifications. The outcome is a set of independently buildable, signed-off features.

### 4. Project setup

Prepare the target project before autonomous build begins. The AI agent needs clear operational instructions, project-specific rules and an isolated execution environment.

Set up:

- approved AI tooling, Docker and the devcontainer command-line tooling required for the sandbox
- an `AGENTS.md` or `CLAUDE.md` file that explains project purpose, commands, ports and environment, Git workflow, and non-obvious gotchas
- a `rules/` directory containing focused guidance for architecture, languages, frameworks, testing, infrastructure and design systems relevant to the project

Keep the agent instruction file concise. Include information the agent cannot infer from the codebase; place detailed standards in the `rules/` files. Validate installation, build, test, lint and type-check commands before the autonomous loop is allowed to use them.

### 5. Autonomous build

Use an approved autonomous loop runner to implement one signed-off feature at a time. The loop separates planning from implementation:

1. Initialise the workspace and copy the next approved feature specification into the target project's `specs/` directory.
2. Enter the isolated devcontainer sandbox.
3. Run the planning loop to compare the feature specification with the codebase and produce `IMPLEMENTATION_PLAN.md`.
4. Run the build loop. Each iteration takes the highest-priority incomplete item, implements it, runs checks, commits the result and records progress.
5. Review the implementation before continuing.
6. Archive loop artefacts before preparing the next feature.

`IMPLEMENTATION_PLAN.md` is the shared plan between fresh agent sessions. `PROGRESS.md` is an append-only record of work completed, learning, failures and unresolved items. If an iteration is interrupted, restart the loop from the existing implementation plan rather than recreating project state.

The sandbox is a required control. Autonomous agents may run with elevated tool permissions; do not run an unattended build loop directly on the host machine.

### 6. Implementation review

After each build loop, the product manager and a software engineer review the feature before integration and before work begins on the next feature.

Review:

- whether the implementation matches the approved feature specification
- whether tests are meaningful and cover acceptance criteria
- code quality, project conventions, dead code, placeholders and incomplete work
- workflow behaviour, usability and unanticipated edge cases
- `PROGRESS.md` for recurring failures, unresolved work, useful learning and commands that did not run as expected

If issues are found, improve the implementation or update the relevant specification before continuing. When the feature is accepted, archive the loop artefacts and move to the next feature in build-layer order.

## Source material

This page adapts the [Re-Engineering process overview](https://defra.github.io/defra-ai-modernisation-playbook/pages/re-engineering/process/) and its guidance for [feature decomposition](https://defra.github.io/defra-ai-modernisation-playbook/pages/re-engineering/process/feature-decomposition/), [feature plan review](https://defra.github.io/defra-ai-modernisation-playbook/pages/re-engineering/process/feature-plan-review/), [feature specification review and sign-off](https://defra.github.io/defra-ai-modernisation-playbook/pages/re-engineering/process/feature-review-and-signoff/), [project setup](https://defra.github.io/defra-ai-modernisation-playbook/pages/re-engineering/process/project-setup/), [autonomous build](https://defra.github.io/defra-ai-modernisation-playbook/pages/re-engineering/process/autonomous-build/) and [implementation review](https://defra.github.io/defra-ai-modernisation-playbook/pages/re-engineering/process/implementation-review/).