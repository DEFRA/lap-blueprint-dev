---
layout: "@lap/layouts/BaseLayout.astro"
title: Animal Disease Testing Service modernisation example
---

<!-- Provenance: synthesised from the project's PRD, architecture requirements and
     re-engineered codebase, with the legacy PHP/Laravel source read to ground the
     As-is. Status: In delivery. Internal note — not rendered on the page. -->

# Animal Disease Testing Service modernisation example

## Project summary

The Animal Disease Testing Service (ADTS, known internally as "VICTOR") is the digital front door through which private veterinary practices build, price, submit and track animal disease-testing submissions to the national laboratory service. Practice users work through an eight-step submission wizard — client details, animal details, clinical history and samples, test selection, basket review, delivery, review and confirm, and print documents — before the completed submission is sent to an external laboratory information management system (LIMS). The service also lets administrators manage practices, users, reference data and security policy.

The service was modernised because it ran on an ageing PHP web framework backed by MySQL, with several maintainability and security constraints: submission state was stored as a serialised code object rather than as structured data, the database declared no foreign-key constraints, and security controls and secrets were woven into bespoke application code. These made the system costly to change and hard to assure.

The headline outcome is a like-for-like rebuild on a modern, supported stack — Node.js with the Hapi framework and PostgreSQL — that preserves every catalogued function, is built to the GOV.UK Design System, and demonstrates high automated test coverage with full traceability from requirement to test.

| At a glance | |
|-------------|--|
| Service | Animal Disease Testing Service (ADTS / "VICTOR") |
| Users | Veterinary-practice users, practice administrators, and central system administrators |
| Status | In delivery |

## Modernisation approach

### As-is

The legacy service was a server-rendered web application built on an out-of-support version of the PHP Laravel framework, using the framework's model-view-controller pattern and backed by a MySQL database. Authentication and authorisation used a third-party role-and-permission library, and integration with the external laboratory system used a PHP HTTP client across a set of laboratory API endpoints.

The main constraints that drove modernisation were:

- **An ageing, out-of-support framework and runtime**, increasing security and maintenance risk.
- **Fragile data persistence** — an in-progress submission was stored as a single serialised code object in one column, rather than as structured, queryable data.
- **Weak data integrity** — the database declared no foreign-key constraints, so referential integrity depended entirely on application code.
- **Bespoke, tightly-coupled security logic** — the password policy, login throttling and impersonation auditing were custom application code, and secrets were held in application configuration.
- **Reference-data-heavy behaviour** — 14 seeded lookup tables and an avian/non-avian branching model ran throughout the submission form, making the rules hard to follow and change.

The legacy source was available and was read directly to establish this picture. The service handles submissions between veterinary practices and the national laboratory, so avoiding any loss of function during the rebuild was the primary constraint.

### To-be

The target is a cloud-hosted web application built on a modern, supported stack, with the same user journeys and administrative capability as the legacy service but with the constraints above removed. The shape of the target state is:

- A **Node.js/Hapi web application** rendering GOV.UK Design System pages, replacing the PHP monolith.
- A **managed PostgreSQL relational database** with a proper, migrated schema and enforced integrity, replacing MySQL and the serialised-object persistence.
- The **laboratory (LIMS) integration** preserved as a dedicated service layer over the external API.
- Non-functional goals baked in from the start: **secure by design** (OWASP-aligned), **WCAG 2.2 AA accessibility**, **observability**, and **resilience** appropriate to the service, with application secrets held in a managed secrets vault rather than in code.

The target is described here as an approach and shape rather than a deployable design.

### Steps taken

The rebuild followed the Defra Legacy Application Programme (LAP) modernisation pipeline, so that functionality was traceable and nothing was silently lost:

1. **Reverse-engineered the legacy system** from its source code and database into an evidence-cited Product Requirements Document, with headline counts (for example 117 routes, 58 controllers, 22 tables) and every business rule, workflow and screen catalogued and grounded to the code.
2. **Applied the delivery and architecture standards** — Defra/GDS software development standards, the ≥90% test-coverage rule, WCAG 2.2 AA, secure-by-design and observability — as cross-cutting requirements.
3. **Decomposed the PRD into 18 individually deliverable features** (71 user stories, 143 acceptance criteria), each mapped back to the requirements it satisfies in a traceability manifest.
4. **Rebuilt the application feature by feature** on Node.js/Hapi and PostgreSQL, re-creating the reference-data model, the eight-step wizard, paired (second-of-pair) submissions, reporting and print outputs, and the full administration capability.
5. **Wrote tests to the acceptance criteria** in Jest, including automated accessibility scans, and enforced a traceability check that fails the build if any acceptance criterion has no mapped test.
6. **Ran a completeness audit** against the traceability manifest to confirm every feature, story and acceptance criterion was implemented and covered, and recorded the single explicit descope (development-only mock endpoints that were never part of production behaviour).

## Tech stack

Grounded in the re-engineered codebase's manifest and configuration files.

| Layer | Technology |
|-------|-----------|
| Front end | GOV.UK Frontend (GOV.UK Design System), Nunjucks server-side templates, GDS Transport typography, built to WCAG 2.2 AA |
| Back end / services | Node.js (v20+), Hapi web framework, Joi for request validation, a dedicated laboratory (LIMS) integration service layer |
| Data | PostgreSQL, accessed via the `pg` driver, with scripted schema migrations and first-run seed data |
| CI/CD & quality | GitHub Actions pipeline running ESLint, Jest with coverage, an acceptance-criteria-to-test traceability check, dependency vulnerability audit, and CodeQL static analysis |
| Security & accessibility | Cookie-based session authentication, CSRF protection, bcrypt password hashing, an input-sanitisation layer, secrets held in a managed vault, and automated accessibility scanning with jest-axe in the pipeline |

Authentication is automatically bypassed in a local development environment (localhost defaults to development) so the service can be run and explored without a login, while remaining enforced everywhere else.

## Benefits, outcomes and success metrics

Evidence-based outcomes only. Intended benefits that have not yet been measured in production are marked "To be confirmed".

| Benefit / outcome | Evidence / metric | Status |
|-------------------|-------------------|--------|
| No loss of function in the rebuild | 143 of 143 acceptance criteria implemented and traceable; 71 of 71 user stories and 18 of 18 features complete; a single, justified descope (development-only mock endpoints), with the genuine integration fully delivered | Achieved |
| High automated test coverage | Statements 96.75%, lines 97.49%, functions 98.57% (all above the ≥90% target); branch coverage 87.96%, enforced at ≥85%, per the project's coverage report | Achieved |
| Requirement-to-test traceability enforced | A traceability check in the pipeline fails the build if any acceptance criterion has no mapped test | Achieved |
| Accessibility built in | Automated WCAG 2.2 AA scanning (jest-axe) runs on every build; the service is built to the GOV.UK Design System | Achieved |
| Security hardened over the legacy system | Secrets moved out of application code into a managed vault; CSRF protection, session authentication, bcrypt hashing and input sanitisation in place; dependency audit and static analysis (CodeQL) in the pipeline | Achieved |
| Improved data integrity and maintainability | Serialised-object persistence replaced with a structured PostgreSQL schema; supported, current runtime and framework | Achieved |
| Reduced maintenance effort and running cost | Not yet measured against the legacy service | To be confirmed |
| Improved performance and user satisfaction | Not yet measured | To be confirmed |

### Lessons for reuse

- **Reverse-engineer to an evidence-cited PRD first.** Grounding every rule, workflow and screen in the legacy code and database gives a defensible baseline and prevents functionality being lost.
- **Make traceability a build gate.** Mapping each acceptance criterion to a named test, and failing the build when the mapping is missing, keeps "done" honest.
- **Bake in standards as cross-cutting requirements**, not afterthoughts — coverage, accessibility, security and observability applied to every feature.
- **Replace fragile persistence patterns deliberately.** Moving from a serialised code object to a structured relational schema is a high-value change, but needs an explicit data-migration plan.
- **Record the single sanctioned way to drop scope.** A descope register with rationale, risk and owner keeps deliberate omissions visible and everything else in scope.

## Open items / to be confirmed

- **Operational benefits are not yet measured.** Maintenance-effort, running-cost, performance and user-satisfaction improvements are expected but need to be confirmed once the service is live.
- **UI and domain detail was not fully validated against the legacy service.** No legacy screenshots or stakeholder interview transcripts were available, so screen-level interaction detail and the business intent behind some rules were inferred from code; a project owner should confirm these against users.
- **Live status.** The build is complete against its acceptance criteria but is recorded here as "In delivery" — a project owner should confirm the current live status before publication.
