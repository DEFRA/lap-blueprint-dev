---
layout: "@lap/layouts/BaseLayout.astro"
title: Animal health case management modernisation example
---

<!-- Provenance: synthesised from the project's PRDs (four clean-room capability
     specifications) and the re-engineered .NET codebase in the workspace.
     Status: In delivery — runnable reference slice. No architecture-requirements
     document or delivery manifest was present, so the To-be and tech stack are
     drawn from the codebase and PRDs alone. Internal note — not rendered on the page. -->

# Animal health case management modernisation example

## Project summary

This project modernises a set of animal-health regulatory case-management capabilities for the
Animal &amp; Plant Health Agency. The service supports the day-to-day work of regulatory staff:
registering customers (the farmers, keepers and businesses the agency deals with), planning and
scheduling field work, recording bovine-tuberculosis (bTB) skin tests, and reviewing those test
results to decide the follow-on regulatory action.

The capabilities were previously delivered on an ageing, proprietary low-code business process
management (BPM) rules platform, where the user interface, data model, business rules and workflow
were tightly coupled to the platform. That made the service costly to change, dependent on
specialist skills, and difficult to test. The modernisation re-engineers the same behaviour on a
mainstream, open, well-supported technology stack using clean architecture, so the service can be
maintained by a wider pool of engineers and evolved safely.

The headline outcome: four business capabilities have been rebuilt as an independently testable
web application, with the legacy behaviour captured as clean-room specifications so functionality is
not lost in the move.

| At a glance | |
|-------------|--|
| Service | Animal health case management (customer registration, work scheduling, bTB testing and result review) |
| Users | Regulatory staff — caseworker, supervisor, regulatory officer, and official veterinarian role types |
| Status | In delivery — runnable reference slice |

## Modernisation approach

### As-is

The legacy service ran on a proprietary low-code BPM and case-management rules platform. Its
defining characteristics — and the pain points that drove modernisation — were:

- **Tightly coupled design.** Screens, validation, decision tables and decision trees, workflow
  flows, service-level rules and the data model were all expressed as platform-specific rule
  artefacts, with no clean separation between presentation, business logic and data.
- **Scale and complexity.** The capabilities in scope were built from thousands of individual rule
  artefacts (for example, the work-scheduling slice alone was reverse-engineered from around 1,750
  rule files and the test-recording slice from around 1,940), making the true behaviour hard to see
  and hard to change with confidence.
- **Change and skills constraints.** Making changes required specialist platform knowledge, and
  much of the important logic (status transitions, work routing, identifier generation, correspondence
  generation) was embedded in engine-coupled constructs that were difficult to test in isolation.
- **Vendor lock-in.** The service was dependent on a single proprietary platform for its entire
  runtime, UI and data layer.

The legacy technology and its weaknesses are described here in general terms only, because the legacy
system may still be live.

### To-be

The target state is a conventional, cloud-hostable web application built to mainstream enterprise
patterns, described here as an approach and shape rather than a deployable design:

- A **layered clean architecture** — Domain, Application, Infrastructure and Web — so business rules
  are independent of the UI, the database and any external service.
- A **web application** presenting the guided caseworker journeys, backed by **REST APIs** for the
  same capabilities.
- A **managed relational database** accessed through an object-relational mapper, with the schema and
  reference data owned by the application rather than an external platform.
- **External dependencies behind ports** — customer registry synchronisation, correspondence,
  address lookup and duplicate matching are all abstracted so the transport (HTTP, messaging) is an
  implementation detail that can be provisioned for the target environment.
- Non-functional goals baked in from the start: **security by design** (authentication, permission-based
  authorisation, input handling and safe error responses), **accessibility to WCAG 2.2 AA**,
  **automated testing**, and **observability** through structured logging.

### Steps taken

The delivery followed a repeatable, clean-room modernisation path:

1. **Reverse-engineer to specifications.** The legacy rule export was read only as a statement of
   required behaviour and abstracted into four technology-neutral clean-room specifications — customer
   registration, start work schedule, conduct test, and review bTB skin results — with no legacy
   platform construct, naming or architecture carried over.
2. **Preserve traceability.** Every requirement, business rule, validation rule and data entity in the
   specifications cites the originating legacy artefact, so nothing is silently dropped and each rebuilt
   behaviour can be traced back to its source.
3. **Record the gaps honestly.** Items that could not be confirmed from the export (for example large
   interpretation matrices, integration contracts and exact message wording) were recorded as explicit
   open questions rather than guessed.
4. **Rebuild on clean architecture.** The behaviour was re-implemented as a layered .NET solution with
   the domain model at the core, application services for each capability, infrastructure for
   persistence and integrations, and a web layer for the UI and APIs.
5. **Bake in the standards.** Permission-based authorisation, validation at the boundary, safe error
   handling and structured logging were built in as the capabilities were delivered, not added later.
6. **Prove it end to end.** The capabilities are covered by an automated test suite and packaged as a
   runnable reference slice with seeded reference data, so reviewers can exercise the journeys.

## Tech stack

Grounded in the re-engineered codebase's project and configuration files.

| Layer | Technology |
|-------|-----------|
| Front end | Blazor interactive server components, Razor, Bootstrap CSS |
| Back end / services | ASP.NET Core on .NET 10, C#; REST API controllers; clean-architecture layering (Domain, Application, Infrastructure, Web) with dependency injection |
| Data | Entity Framework Core with SQL Server; database migrations and reference-data seeding; SQLite used for tests |
| CI/CD &amp; quality | xUnit test framework; Coverlet code-coverage collection; .NET SDK test tooling |
| Security &amp; accessibility | Cookie-based authentication; permission-based authorisation; anti-forgery protection; HTTPS redirection and HSTS; centralised problem-details error handling |

## Benefits, outcomes and success metrics

Evidence-based only. Intended benefits that have not yet been measured are marked "To be confirmed".

| Benefit / outcome | Evidence / metric | Status |
|-------------------|-------------------|--------|
| Removed dependence on a proprietary low-code platform for the runtime, UI and data layer | Capabilities rebuilt on a mainstream, open .NET stack with a clean-architecture solution | Achieved |
| Business logic separated from UI and data, making the service testable and maintainable | Layered Domain/Application/Infrastructure/Web solution; domain rules implemented as plain code | Achieved |
| Automated regression safety net for the rebuilt behaviour | 95 automated tests across 7 test suites (xUnit), covering business rules, registration, work schedules and TB testing/review | Achieved |
| No silent loss of legacy functionality | Four clean-room specifications with per-requirement citations back to the originating legacy artefacts | Achieved |
| External dependencies decoupled from the domain | Registry sync, correspondence, address lookup and duplicate matching implemented behind transport-agnostic ports | Achieved |
| Test coverage of at least 90% (line and branch) | Coverage collection is configured (Coverlet); a measured figure was not available in the workspace | To be confirmed |
| Accessibility to WCAG 2.2 AA | Intended and designed for; no automated accessibility evidence was present in the workspace | To be confirmed |
| Continuous integration with automated quality gates | No CI pipeline was present in the workspace | To be confirmed |
| Reduced licensing and change costs versus the legacy platform | Qualitatively expected from removing the proprietary platform; not yet quantified | To be confirmed |

### Lessons for reuse

Other teams modernising a legacy rules-platform service can reuse the following patterns:

- **Treat the legacy export as a specification, not a design.** Read the old rules only for *what*
  the system must do, and rebuild with conventional patterns — do not port platform constructs.
- **Make traceability the guardrail against silent loss.** Cite the source artefact for every rule,
  field and entity, and keep an explicit register of what could not be confirmed.
- **Put external systems behind ports.** Abstracting registry sync, correspondence and lookups keeps
  the domain clean and lets the target environment choose the transport later.
- **Slice by business capability.** Delivering independent, traceable capabilities (registration,
  scheduling, testing, review) keeps each one testable and independently evolvable.
- **Package a runnable reference slice.** Seeded data and an in-memory identity store let reviewers
  exercise the journeys without a full environment.

## Open items / to be confirmed

A project owner still needs to supply or verify:

- **Measured test coverage** against the 90% line-and-branch target (collection is configured but no
  measured figure was available).
- **Accessibility evidence** — automated and manual WCAG 2.2 AA testing results.
- **CI/CD status** — whether a continuous integration pipeline with quality gates exists.
- **Quantified benefits** — any cost, effort or cycle-time savings versus the legacy platform.
- **Outstanding domain open questions** carried in the specifications — for example the full
  interpretation and next-test matrices, integration contracts, and exact validation message wording —
  which are pending subject-matter-expert confirmation.
- **Delivery status** — confirmation of which capabilities are considered complete versus still in
  progress, and the official service name.
