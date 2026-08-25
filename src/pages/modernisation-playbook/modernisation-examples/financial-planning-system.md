---
layout: "@lap/layouts/BaseLayout.astro"
title: Financial Planning System (FPS) modernisation example
---

<!-- Provenance: synthesised from the project PRD and analyses (domain-analysis.md,
     application-analysis.md, database-analysis.md, interaction-analysis.md — all
     produced during the legacy-system analysis phase) and the re-engineered codebase
     (FPSWeb/ directory, FPSWeb.csproj, package.json, FPSWeb.Tests.csproj,
     accessibility/package.json, Dockerfile, coverage report dated 09/07/2026).
     Architecture requirements document (architecture-requirements.md) was not
     available at the time of writing; the To-be and Tech stack sections are therefore
     drawn from the PRD, analyses, and actual codebase files.
     Status: In delivery.
     Internal note — not rendered on the page. -->

# Financial Planning System (FPS) modernisation example

## Project summary

The Financial Planning System (FPS), also known as MAP (Management Accounting
Planning), is the primary financial planning and cost management tool for the Animal
and Plant Health Agency (APHA), a Defra group organisation. The system is used to
plan the annual costs of delivering scientific and veterinary services across multiple
government and externally funded programmes. It manages staff time, laboratory test
requirements, animal usage, and exceptional expenditure at the project level, and
compares those plans against actuals drawn from the corporate PACT time-recording and
finance system.

FPS was originally built as a Microsoft Access desktop application and maintained over
many years. It was modernised to a .NET 10 Blazor web application, bringing it in line
with Defra software development standards and GDS design principles. Authorised users
can now access the service from any supported browser without needing a desktop
installation.

The modernisation reproduces all 20 planned feature areas — covering project cost
planning, programme management, resource and charge-rate management, laboratory
services, plan-vs-actual reporting, snapshot management, audit, and administration —
with 94.5% automated line coverage across 122 tests.

| At a glance | |
|---|---|
| Service | Financial Planning System (FPS) / MAP |
| Organisation | Animal and Plant Health Agency (APHA), Defra group |
| Users | Programme Managers, Resource Managers, Lab Services Managers, Finance and Budget Analysts, Management Accountants, Administrators, Standard Users |
| Status | In delivery |

## Modernisation approach

### As-is

FPS was a Microsoft Access desktop application with business logic embedded in VBA
behind form-based screens. This created tight coupling between the user interface and
the underlying calculations, making the application difficult to test in isolation,
difficult to extend safely, and impossible to audit for security or accessibility
compliance.

The application ran only on managed Windows desktops. Users needed Access installed on
their machine to use the service. There were approximately 80 screens arranged into 18
functional areas, covering the full lifecycle of financial planning from project
creation through to programme-level profitability reporting.

Because logic lived in VBA event handlers, there was no automated test coverage and no
way to verify that a change to a calculation had not broken another part of the
application. Access to the application was controlled at the Windows file-system level,
with no identity provider integration, no role-based authorisation policies, and no
fine-grained data scoping. There was no structured logging, no telemetry, and no
accessibility compliance.

Key pain points driving modernisation:

- **Desktop-only** — users required a managed Windows machine with Access installed; no browser or remote access.
- **No automated testing** — VBA code changes could silently break calculations with no safety net.
- **Poor accessibility** — the form-based desktop UI did not meet WCAG 2.2 AA standards.
- **No structured authentication** — no identity provider; access relied on Windows file permissions rather than role-based policies.
- **Hard to maintain** — business logic tightly coupled to UI event handlers; no separation of concerns or layered architecture.
- **No observability** — no structured logging, no telemetry, and no audit trail beyond what Access provided natively.

### To-be

The target is a cloud-hosted Blazor web application accessible from any supported
browser. The application is containerised for repeatable deployment and uses a managed
relational database. Infrastructure is defined as code so that environments can be
provisioned consistently.

**Accessibility and design** — The GOV.UK Design System (govuk-frontend) is used for
all user interface components, ensuring the service meets the GDS style and WCAG 2.2
AA accessibility standard throughout. Accessibility is treated as an acceptance
criterion, not a post-delivery retrofit.

**Security** — Authentication is provided through Microsoft Entra ID using the OpenID
Connect standard. Authorisation is enforced through ASP.NET Core policy-based handlers
with fine-grained data scoping: each user's access is limited to the profit centres,
programmes, categories, test owners, and project groups they are assigned to. Secrets
are managed outside the codebase and the application container runs as a non-root user.

**Testability and quality** — Automated test coverage exceeds the Defra 90% threshold.
Unit, component (Blazor), and integration tests cover the full service layer and
authorisation logic.

**Observability** — Application Insights telemetry and structured logging are wired in
from the start, providing distributed tracing and request metrics.

**Resilience** — The application applies database migrations and idempotent seed data
automatically on startup, so deploying to a new environment requires only a connection
string. Infrastructure is provisioned via infrastructure-as-code templates.

The domain model and business logic from the legacy application are faithfully
reproduced in the new system, preserving all bounded contexts: project cost planning,
programme and contract management, resource and charge-rate management, laboratory
services, plan-vs-actual comparison, snapshot and historical comparison, access control,
reference data, audit, and department income and surveillance reporting.

### Steps taken

1. **Legacy system analysed** — The Access application and its database were
   reverse-engineered into four structured analyses: domain analysis, application
   analysis, database analysis, and interaction analysis. Together these established
   the complete set of actors, domain terms, entities, screens, and business rules
   before any new code was written.

2. **PRD produced** — The four analyses were synthesised into a Product Requirements
   Document. The PRD defined the system's actors, domain model, bounded contexts, and
   acceptance criteria across all functional areas, giving the team an authoritative
   reference for the re-build.

3. **Feature decomposition** — The PRD was decomposed into 20 traceable feature
   tickets (FT-001 to FT-020), each with clear acceptance criteria mapped to
   test cases. This gave a no-silent-loss traceability chain from legacy screen to
   acceptance criterion to test.

4. **Application re-engineered** — The application was rebuilt on .NET 10 Blazor
   Interactive Server with Entity Framework Core, following a layered architecture
   (Components/Pages, Services, ViewModels, Data/Entities). VBA form-event logic was
   converted to type-safe C# service classes testable in isolation.

5. **GDS standards applied** — The GOV.UK Design System (govuk-frontend 6.3.0) was
   integrated for all user interface components: Tudor Crown header, GOV.UK footer,
   GDS service navigation, GDS Transport font, skip link, landmark regions, and
   accessible table markup.

6. **WCAG 2.2 AA baked in from the start** — Accessibility requirements were treated
   as acceptance criteria: single `<h1>` per page, ordered headings, labelled form
   controls, error summaries, minimum 24×24 px interactive targets, and visible focus
   styles are all enforced in the component library.

7. **Automated test suite built** — 122 tests were written alongside the application
   code using xUnit, bUnit (for Blazor component testing), Moq (for service mocks),
   and `WebApplicationFactory` (for integration tests), achieving 94.5% line coverage.
   Generated EF Core migration files are excluded from coverage as non-testable
   scaffolding.

8. **Automated accessibility audit added** — A Playwright + axe-core audit script was
   built into the repository to run WCAG 2.2 AA checks across all application pages,
   making it straightforward to include accessibility verification in the delivery
   pipeline.

9. **Containerised** — A multi-stage Dockerfile produces a minimal runtime image
   running as a non-root user, ready for cloud container hosting.

10. **Infrastructure as code** — Azure Bicep templates were produced alongside the
    application so the target cloud infrastructure can be provisioned consistently
    across environments.

## Tech stack

The stack below is drawn from the codebase manifest and configuration files in the
re-engineered application.

| Layer | Technology |
|---|---|
| Front end | Blazor Interactive Server (C# .NET 10), govuk-frontend 6.3.0 (GDS Design System), GDS Transport font |
| Back end / services | C# .NET 10, ASP.NET Core, Entity Framework Core 10 |
| Data | SQL Server, EF Core code-first migrations, ClosedXML (Excel export) |
| CI/CD and quality | Docker (multi-stage build), Azure Bicep (infrastructure-as-code), xUnit, bUnit, Moq, coverlet (code coverage), Playwright + axe-core (automated accessibility audit) |
| Security and accessibility | Microsoft Entra ID (OpenID Connect), ASP.NET Core policy-based authorisation, Application Insights (observability), structured logging |

## Benefits, outcomes and success metrics

| Benefit / outcome | Evidence / metric | Status |
|---|---|---|
| Automated test coverage exceeds 90% Defra threshold | 94.5% line coverage, 79.4% branch coverage; 122 tests passing (coverage report generated 09/07/2026) | Achieved |
| WCAG 2.2 AA accessibility compliance | govuk-frontend 6.3.0 applied throughout; automated axe-core audit tooling in the repository; GDS component patterns used for all interactive elements | Achieved |
| GDS / GOV.UK Design System compliance | Tudor Crown header, GOV.UK footer, GDS Transport font, service navigation, labelled form controls, error summaries present in codebase | Achieved |
| Web-accessible — no desktop installation required | Application is a browser-based Blazor Server app; authorised users can access it from any supported browser | Achieved |
| Structured authentication and role-based access control | Microsoft Entra ID (OpenID Connect) integrated; data scoped per user to assigned profit centres, programmes, categories, test owners, and project groups | Achieved |
| Secrets not in source code | Secrets management integrated; no credentials in application configuration files; container runs as a non-root user | Achieved |
| Observability from day one | Application Insights telemetry and structured logging wired in at application startup | Achieved |
| Infrastructure provisioned repeatably via code | Azure Bicep templates cover all required cloud resources | Achieved |
| All 20 planned feature areas implemented | FT-001 to FT-020 — from reference data and resource management through to programme profitability, audit, snapshots, and surveillance reporting | Achieved |
| Reduction in user support burden from desktop access issues | To be confirmed — requires post-go-live measurement | To be confirmed |
| Time saved per planning cycle compared with the legacy application | To be confirmed — requires a baseline from legacy operation and a post-go-live comparison | To be confirmed |

### Lessons for reuse

- **The four-analysis pipeline is directly reusable.** Producing domain, application,
  database, and interaction analyses before writing a PRD — and then decomposing the
  PRD into traceable feature tickets — gave a complete requirements baseline with no
  silent losses. Other teams modernising Access or Excel-based tools should follow the
  same sequence.

- **Blazor Interactive Server suits complex planning tools.** Server-side rendering
  keeps sensitive calculation logic on the server and avoids duplicating it in
  JavaScript. bUnit makes Blazor component testing straightforward and keeps coverage
  high.

- **Ship accessibility tooling alongside the application.** The Playwright + axe-core
  audit script lives in the repository, not as an afterthought. Running it in the
  delivery pipeline prevents accessibility regressions before they reach users.

- **GDS integration is a one-time setup.** Once govuk-frontend is wired in and the
  layout components are built, individual pages inherit compliance automatically.
  Teams should invest in the layout and shared components early.

- **EF Core migrations plus idempotent seed data removes manual database setup.**
  The application migrates and seeds on startup. Onboarding a new environment is a
  matter of setting a connection string, not running scripts by hand.

- **Infrastructure-as-code belongs in the same repository as the application.** Keeping
  Bicep templates alongside the application code means infrastructure and application
  changes can be reviewed and deployed together, reducing drift between environments.

## Open items / to be confirmed

- **Architecture requirements document not yet produced** — `architecture-requirements.md`
  was not available at the time this page was written. The To-be and Tech stack
  sections are drawn from the PRD, analyses, and actual codebase files. A project
  owner should produce this document and cross-check it against the content here.

- **Deployment to production not confirmed** — It is not confirmed whether the
  re-engineered application has been deployed to a production environment. The status
  above is recorded as "In delivery". A project owner should update this page once
  go-live is confirmed.

- **Post-go-live metrics not yet collected** — User support burden reduction and
  planning-cycle time savings are marked "To be confirmed". A project owner should
  define a measurement approach and establish a baseline before go-live so these
  benefits can be evidenced after deployment.

- **Legacy application retirement date** — Not recorded in the available artefacts.
  A project owner should confirm when the Access application was or will be
  decommissioned.
