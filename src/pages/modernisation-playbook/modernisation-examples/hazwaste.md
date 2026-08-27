---
layout: "@lap/layouts/BaseLayout.astro"
title: Hazardous Waste Consignee Returns modernisation example
---

<!-- Provenance: synthesised from the project's PRD, code-derived analyses and the
     re-engineered codebase (Node + hapi + PostgreSQL). Status: In delivery.
     Internal note — not rendered on the page. -->

# Hazardous Waste Consignee Returns modernisation example

## Project summary

The Hazardous Waste Consignee Returns service (internally known as HWOR) receives, validates and stores the quarterly returns that waste-site operators are obliged to submit, raises invoices and credit notes for the consignments declared, chases overdue returns, and exports the resulting billing to the Environment Agency's central billing system. It is used by internal Environment Agency support staff through a web application; operators themselves do not log in — they submit returns as structured email attachments that the system authenticates and processes.

The service was modernised because the legacy system was an ageing Java Enterprise Edition application running on a proprietary application server over a proprietary relational database. That stack was costly to license and support, hard to change, and did not meet current government accessibility and delivery standards. The modernisation reverse-engineers the legacy behaviour into an authoritative specification and rebuilds the staff-facing operational core on a modern, open-source, standards-based stack.

The headline outcome: the operational returns-and-billing core has been rebuilt as a cloud-ready web application on Node.js, hapi and PostgreSQL with a GOV.UK Design System front end, with the legacy business rules ported rule-for-rule and backed by a high-coverage automated test suite. Delivery is in progress — the internal back-office is substantially complete, while boundary integrations and a new operator self-service capability remain to be built.

| At a glance | |
|-------------|--|
| Service | Hazardous Waste Consignee Returns (HWOR) |
| Users | Environment Agency hazardous-waste support staff (internal); waste-site operators submit returns by email but do not log in |
| Status | In delivery |

## Modernisation approach

### As-is

The legacy service was a Java Enterprise Edition application hosted on a proprietary Java application server, backed by a proprietary relational database with a large operational schema (dozens of tables, materialised views, sequences and database triggers) and a separate reporting data warehouse feeding a commercial business-intelligence tool. Staff used a thin-client web front end rendered by the application server; operators submitted returns as structured XML attachments to a monitored mailbox, which were picked up, authenticated per message, validated and processed through an internal messaging pipeline. Documents such as acknowledgement and rejection letters were produced through a separate print-formatting pipeline, and billing was exported as files to a central billing system.

The main pain points that drove modernisation were:

- **An ageing, tightly coupled technology stack** — an end-of-life application-server and proprietary-database combination that was expensive to license and increasingly hard to recruit for and maintain.
- **Business logic spread across layers** — rules embedded in application code, database triggers, stored procedures and inline SQL, making the true behaviour hard to see and safe change difficult.
- **No automated test safety net**, so every change carried regression risk.
- **A front end that pre-dated current government accessibility and design standards.**
- **Tight coupling to shared platform components and external services**, which made the service hard to evolve independently.

### To-be

The target is a cloud-ready web application, not a like-for-like re-hosting. Its shape is:

- A **server-rendered web application** for internal staff, built to the GOV.UK Design System so it meets government accessibility standards.
- A **managed relational database** (PostgreSQL) holding the operational data, with schema managed as versioned migrations rather than hand-applied scripts.
- **Background workflows** — return intake, overdue-return reminders, document generation and billing export — expressed as services that can be run on a schedule or on demand, replacing the legacy messaging and print pipelines.
- **Integrations described at the boundary** — inbound operator submissions, outbound billing files, notifications and reference-data lookups — kept behind clear seams so each can be implemented and evolved on its own.

The non-functional goals baked into the rebuild are: secure by design (OWASP Top 10 addressed, parameterised data access, no plain-text shared secrets, pluggable authentication), accessible to WCAG 2.2 AA, observable through structured logging, and demonstrably correct through at least 90% automated test coverage. Business behaviour is preserved, not reinvented — the legacy business rules are carried across as named, individually tested rules.

### Steps taken

1. **Reverse-engineered the legacy system into an authoritative specification.** AI-assisted analysis agents read the legacy Java source and database SQL to extract the workflows, domain model and business rules, and synthesised them into a Product Requirements Document plus supporting application and database analyses. This became the contract for the rebuild. Because no screenshots or stakeholder interviews were available, the specification is explicitly code-grounded, with inferred points recorded as open questions.
2. **Reviewed the specification** at a human gate before any build began.
3. **Rebuilt the operational core iteratively** on the target stack using an agentic build loop, implementing the specification in coherent slices — return intake and validation, cancellation and extract, quarterly reminders, tariff-based invoicing, billing export, document generation, and consignee and user administration — and porting each legacy business rule with a matching test.
4. **Baked in the delivery standards** from the start: GOV.UK Design System UI, structured configuration and logging conventions, parameterised database access, seed data for first run, and a Jest test suite run in continuous integration.
5. **Tracked parity against the legacy specification** with a running gap analysis and a descope register, so what is done, what is outstanding and what has been deliberately deferred are all visible. No requirements have been formally descoped.

## Tech stack

Grounded in the re-engineered codebase's manifest and configuration files. Technologies are named at a high level; versions are given only where they signal a standards baseline.

| Layer | Technology |
|-------|-----------|
| Front end | GOV.UK Frontend (GDS Design System, v5) with GDS Transport font; Nunjucks server-side templates; accessible-autocomplete; WCAG 2.2 AA target |
| Back end / services | Node.js (20+); hapi web framework; Joi request validation; Convict configuration-as-code; background services for return intake, reminders, billing export and document generation, runnable as scheduled jobs |
| Data | PostgreSQL; Knex query builder with versioned migrations and seed data; native `pg` driver; parameterised queries throughout |
| CI/CD & quality | Jest automated tests (unit and integration) with a 90% coverage gate; ESLint; Docker Compose for a local PostgreSQL server; npm scripts for build, migrate, seed and job execution |
| Security & accessibility | Pluggable authentication strategy (external directory / OIDC in production, disabled for local development); OWASP Top 10 addressed; PDF document generation; optional GOV.UK Notify email notifications; structured logging for observability |

## Benefits, outcomes and success metrics

Evidence-based. Intended benefits that have not yet been measured are marked "To be confirmed".

| Benefit / outcome | Evidence / metric | Status |
|-------------------|-------------------|--------|
| Moved off an end-of-life, proprietary application-server and database stack onto a supported open-source stack | Re-engineered codebase runs on Node.js, hapi and PostgreSQL (project manifest and configuration) | Achieved |
| Legacy business rules preserved and made testable | Business rules ported rule-for-rule (intake authentication and validation, invoicing, cancellation/extract, reminders, billing export) each with a matching automated test | Achieved |
| High automated test safety net where the legacy system had none | Jest suite of around 195 tests across 21 suites; measured coverage of 95.7% of statements, 94.3% of functions and 83.2% of branches, against a 90% gate (project coverage report) | Achieved |
| Accessible, standards-based user interface | Front end built on the GOV.UK Design System (v5) with GDS Transport font | Achieved |
| Formal WCAG 2.2 AA conformance | Independent accessibility audit not yet recorded | To be confirmed |
| Operational back-office parity with the legacy service | Gap analysis records approximately 76% parity against the legacy specification; core returns, billing, reminders, documents and administration implemented | Expected |
| Reduced licensing and hosting cost from retiring proprietary components | No measured cost figure available | To be confirmed |
| Improved maintainability and change safety | Business logic consolidated into readable service and rule modules with tests, replacing logic spread across code, triggers and inline SQL | Expected |

### Lessons for reuse

- **Reverse-engineer to a specification first.** Turning legacy code and SQL into a Product Requirements Document plus application and database analyses gives the rebuild an auditable contract and a clear parity target.
- **Port business rules as named, individually tested units.** Carrying each legacy rule across with its own test preserves behaviour and creates the safety net the legacy system lacked.
- **Bake the standards in from the first slice** — GDS UI, structured config and logging, parameterised data access, seed data and a coverage gate in CI — rather than retrofitting them.
- **Track parity openly** with a gap analysis and a descope register, so outstanding boundary integrations and any deferrals stay visible instead of being lost.
- **Separate the operational core from boundary integrations.** Rebuilding the staff back-office first, behind clear seams for inbound submissions, billing files and reference data, let the team deliver value before every external dependency was reconnected.

## Open items / to be confirmed

The following need a project owner to supply or verify before this page is treated as final:

- **Boundary integrations still outstanding** — real inbound email intake of operator submissions, secure file transfer of billing exports, reconnection to shared party/site, address-lookup, registrations and postcode reference services, and reinstatement of management reporting.
- **Forward operator self-service capability** (online submission and related features) is planned but not yet built; the gap analysis estimates roughly 46% of the full target vision delivered.
- **Cost and performance benefits are unmeasured** — no confirmed figures for licensing, hosting or throughput savings.
- **Formal WCAG 2.2 AA accessibility audit and a security penetration test** are not yet recorded.
- **Architecture and non-functional requirements document** (including cloud service-tier requirements) had not been produced at the time of writing; the To-be and tech stack here are drawn from the codebase and the Product Requirements Document.
- **Delivery and sign-off status** — confirm the current phase and owner before publication.
