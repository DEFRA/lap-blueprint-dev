---
layout: "@lap/layouts/BaseLayout.astro"
title: Output reference
order: 3
---

# Output reference

Reverse engineering produces intermediate artefacts, four analysis outputs, a Product Requirements Document (PRD) and a consolidated Open Items Register. Together, they create an evidence trail from supplied legacy application material to the requirements that stakeholders review and approve, and can be shared as a single offline documentation pack.

Use this reference with the [Process](../process/) guidance when reviewing generated outputs.

## Output lifecycle

| Category          | Artefact                      | Location                         | Purpose                                                         |
| ----------------- | ----------------------------- | -------------------------------- | --------------------------------------------------------------- |
| Intermediate      | HTML mock-ups                 | `output/html/`                   | Machine-readable representations of legacy application screens  |
| Intermediate      | Curated transcripts           | `output/transcripts/`            | Focused stakeholder evidence with off-topic content removed     |
| Analysis          | Domain analysis               | `output/domain-analysis.md`      | Domain language, boundaries, actors and rules                   |
| Analysis          | Interaction analysis          | `output/interaction-analysis.md` | Screens, workflows and navigation                               |
| Analysis          | Application analysis          | `output/application-analysis.md` | Architecture, application behaviour and integrations            |
| Analysis          | Database analysis             | `output/database-analysis.md`    | Schema, database logic and data constraints                     |
| Final deliverable | Product Requirements Document | `output/PRD.md`                  | Stakeholder-facing requirements for the replacement application |
| Register          | Open Items Register           | `output/open-questions.md`       | Document-versus-code discrepancies, findings, functionality-loss risks, open questions and deferred sources |
| Shareable pack    | Documentation pack            | `output/documentation-pack.html` | A single self-contained, offline interactive pack of every output for reviewers |

## Intermediate artefacts

### HTML mock-ups

HTML mock-ups are semantic, unstyled HTML files representing the legacy application's interface. Each source screenshot produces one HTML file. They give later analysis stages a structured representation of visible screens and user interactions.

The `image-to-html` skill produces these files, directly or through the [`digital-content-curator`](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-digital-content-curator.agent) agent. Each mock-up should:

- use appropriate semantic HTML elements such as `header`, `nav`, `main`, `form` and `table`
- include all visible text from the source screen
- replace visible personal data with realistic fictional equivalents
- have no CSS, inline styles or other presentational markup
- use appropriate input types and correctly structured data tables

Review each file against its source screenshot. Confirm that the screen is represented faithfully, visible text is correct, PII has been replaced and forms, tables and navigation are complete.

### Curated transcripts

Curated transcripts are cleaned stakeholder interview transcripts. The `curate-transcript` skill removes content that does not contribute to analysis while preserving relevant evidence verbatim. Files are written to `output/transcripts/` using the naming convention `<name>_curated.txt`.

Keep:

- domain terminology and definitions
- application walkthroughs and screen descriptions
- business rules and process explanations
- technical details, roles, permissions, pain points and workarounds

Remove:

- project management, scheduling and meeting logistics
- social conversation and unrelated tangents
- any remaining personally identifiable information

Check that domain knowledge and walkthroughs remain intact, off-topic content has been removed, no PII remains, and important context has not been lost.

## Analysis outputs

The four analysis outputs are created from the curated artefacts and source code. They provide the evidence base for the PRD and should be retained with the project deliverables.

### Domain analysis

The [`business-analyst`](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-business-analyst.agent) agent uses curated transcripts and HTML mock-ups to produce a strategic Domain-Driven Design view of the problem domain, without relying on implementation detail.

The analysis should contain:

- an evidenced, alphabetised ubiquitous-language glossary
- bounded contexts and their responsibilities
- a classification of subdomains as core, supporting or generic, with rationale
- a context map showing relationships between bounded contexts
- actors and stakeholders
- numbered domain rules and invariants, with source references

All domain terms and rules must be traceable to transcripts or mock-ups. Bounded contexts should reflect genuine business boundaries, and any Mermaid diagrams must render correctly.

### Interaction analysis

The [`interaction-analyst`](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-interaction-analyst.agent) agent cross-references HTML mock-ups and curated transcripts to describe the application's user-facing behaviour.

The analysis should contain:

- a screen inventory, including each screen's purpose, fields, actions, navigation, access restrictions and evidence references
- user workflows with triggers, outcomes, Mermaid diagrams and step-by-step detail
- documented workarounds used to overcome system limitations
- a navigation map showing how screens connect
- a mapping between transcripts and screens, including unmatched references

Check that every mock-up appears in the inventory, workflows are supported by transcripts, navigation matches the mock-ups and there are no orphaned screens.

### Application analysis

The [`application-developer`](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-application-developer.agent) agent reads the complete application codebase, including source, configuration and project files, to build a technical picture of the system.

The analysis should cover:

- application purpose, technology stack, solution structure, dependencies and configuration
- user roles, authentication and authorisation
- features, capabilities, workflows and behaviours
- numbered business rules, their source locations and criticality
- the domain model, including entities, properties, enumerations and relationships
- integrations, file handling, notifications and external systems
- reports and their data sources, parameters and formats
- cross-references between application concepts and database structures

Confirm that all source files are accounted for, business rules are numbered with criticality, integration points are documented, and application-to-database mappings are present.

### Database analysis

The [`database-analyst`](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-database-analyst.agent) agent reads SQL files, stored procedures, views and inline SQL in application code to document the legacy data architecture.

The analysis should cover:

- tables, columns, types, nullability, indexes and lookup tables
- relationships, foreign keys, unique and check constraints, and defaults
- views, their purpose, base tables and source definitions
- stored procedures and functions, including parameters, purpose and whether they are called by the application
- triggers and the events that invoke them
- numbered database-level business rules with criticality
- cross-references between application code and database structures, including inline SQL

Confirm that all SQL and inline SQL is accounted for, stored procedures are classified, orphaned procedures are identified, and business rules are numbered with a criticality rating.

## Product requirements document

The [`product-manager`](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-product-manager.agent) agent synthesises the four analysis outputs into `output/PRD.md`. The PRD is the final reverse engineering deliverable and describes the system to be rebuilt without prescribing implementation choices.

Where the analysis provides sufficient evidence, the PRD can cover:

- system overview, actors, domain model and key screens
- business rules, processes and end-to-end workflows
- computed fields, reports and analytics
- behaviour scenarios in Given/When/Then format
- roles, permissions, security constraints and integrations
- API contracts, data migration and non-functional requirements
- open questions, known limitations and a domain glossary

Before stakeholder review, verify that all four analysis files are used as sources, requirements are traceable to evidence, domain terms are consistent, open questions record genuine ambiguities and all Mermaid diagrams render correctly. The Application Product Owner approves the PRD at the end of the [PRD review and sign-off](../process/) stage.

The `product-manager` agent also records a consolidated Open Items Register in `output/open-questions.md`, capturing document-versus-code discrepancies, findings, functionality-loss risks, open questions and deferred sources. The `html-pack` skill renders every output into a single self-contained, offline documentation pack at `output/documentation-pack.html` for sharing with reviewers.
