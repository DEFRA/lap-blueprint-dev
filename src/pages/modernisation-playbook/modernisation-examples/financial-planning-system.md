---
layout: "@lap/layouts/BaseLayout.astro"
title: Financial Planning System (FPS) modernisation example
---

<!-- Provenance: synthesised from the project PRD and analyses (domain-analysis.md,
     application-analysis.md, database-analysis.md, interaction-analysis.md — all
     produced during the legacy-system analysis phase) and the re-engineered codebase
     (FPSWeb/ directory, FPSWeb.csproj, package.json, FPSWeb.Tests.csproj,
     accessibility/package.json, coverage report dated 09/07/2026).
     Architecture requirements document (architecture-requirements.md) was not
     available at the time of writing; the To-be and Tech stack sections are therefore
     drawn from the PRD, analyses, and actual codebase files.
     Status: In delivery.
     Internal note — not rendered on the page. -->

# Financial Planning System (FPS) modernisation example

## Project summary

The Financial Planning System (FPS), also called MAP (Management Accounting
Planning), is the main financial planning and cost management tool for the Animal and
Plant Health Agency (APHA), a Defra group organisation. It plans the annual cost of
delivering scientific and veterinary services across government and externally funded
programmes — staff time, laboratory tests, animal usage and exceptional spend at
project level — then compares those plans against actuals from the corporate PACT
time-recording and finance system.

FPS began as a Microsoft Access desktop application. It has been modernised into a
.NET 10 Blazor web application that meets Defra software development standards and GDS
design principles. Authorised users now reach the service from any supported browser,
with no desktop install.

The rebuild reproduces all 20 feature areas — project cost planning, programme
management, resource and charge-rate management, laboratory services, plan-vs-actual
reporting, snapshots, audit and administration — with 94.5% line coverage across 122
tests.

| At a glance | |
|---|---|
| Service | Financial Planning System (FPS) / MAP |
| Organisation | Animal and Plant Health Agency (APHA), Defra group |
| Users | Programme Managers, Resource Managers, Lab Services Managers, Finance and Budget Analysts, Management Accountants, Administrators, Standard Users |
| Status | In delivery |

## Modernisation approach

### As-is

FPS was a Microsoft Access desktop application with its business logic embedded in VBA
behind form-based screens. The user interface and the calculations were tightly
coupled, so the application was hard to test, risky to change and impossible to audit
for security or accessibility.

It ran only on managed Windows desktops with Access installed — around 80 screens
across 18 functional areas, covering the full planning lifecycle from creating a
project to programme-level profitability reporting.

Key pain points:

- **Desktop-only** — needed a managed Windows machine with Access; no browser or remote access.
- **No automated testing** — a VBA change could silently break a calculation elsewhere.
- **Poor accessibility** — the form-based desktop UI did not meet WCAG 2.2 AA.
- **Weak access control** — no identity provider or role-based policies; access relied on Windows file permissions.
- **Hard to maintain** — logic tied to UI event handlers, with no separation of concerns.
- **No observability** — no structured logging, telemetry or real audit trail.

### To-be

The target is a cloud-hosted Blazor web application, reached from any supported
browser and backed by a managed relational database. Infrastructure is defined as
code.

- **Accessibility and design** — the GOV.UK Design System (govuk-frontend) is used for every component, so the service meets GDS style and WCAG 2.2 AA. Accessibility is an acceptance criterion, not a retrofit.
- **Security** — authentication uses Microsoft Entra ID (OpenID Connect); authorisation uses ASP.NET Core policy handlers that scope each user to their assigned profit centres, programmes, categories, test owners and project groups. Secrets stay out of the codebase.
- **Testability** — automated coverage exceeds the Defra 90% threshold, across unit, Blazor component and integration tests.
- **Observability** — Application Insights and structured logging are wired in from the start.
- **Resilience** — the app applies database migrations and seed data on startup, so a new environment needs only a connection string.

The domain model and business logic are reproduced faithfully, preserving every
bounded context: project cost planning, programme and contract management, resource
and charge-rate management, laboratory services, plan-vs-actual comparison, snapshots,
access control, reference data, audit, and department income and surveillance
reporting.

### Steps taken

1. **Analysed the legacy system** — reverse-engineered the Access application and database into four analyses (domain, application, database, interaction), capturing every actor, term, entity, screen and business rule.

2. **Produced a PRD** — synthesised the analyses into a Product Requirements Document defining actors, domain model, bounded contexts and acceptance criteria.

3. **Decomposed into features** — broke the PRD into 20 traceable feature tickets (FT-001 to FT-020), each with acceptance criteria mapped to tests, giving a no-silent-loss chain from screen to test.

4. **Re-engineered the application** — rebuilt on .NET 10 Blazor Interactive Server with Entity Framework Core in a layered architecture, converting VBA event logic into testable C# services.

5. **Applied GDS standards** — integrated the GOV.UK Design System (govuk-frontend 6.3.0): Tudor Crown header, GOV.UK footer, service navigation, GDS Transport font, skip link and accessible tables.

6. **Baked in WCAG 2.2 AA** — enforced one `<h1>` per page, ordered headings, labelled controls, error summaries, 24×24 px targets and visible focus styles in the component library.

7. **Built the test suite** — wrote 122 tests with xUnit, bUnit, Moq and `WebApplicationFactory`, reaching 94.5% line coverage.

8. **Added an accessibility audit** — a Playwright + axe-core script runs WCAG 2.2 AA checks across all pages, ready for the delivery pipeline.

9. **Infrastructure as code** — Azure Bicep templates provision the environment consistently.

## Tech stack

Taken from the codebase manifest and configuration files.

| Layer | Technology |
|---|---|
| Front end | Blazor Interactive Server (C# .NET 10), govuk-frontend 6.3.0 (GDS Design System), GDS Transport font |
| Back end / services | C# .NET 10, ASP.NET Core, Entity Framework Core 10 |
| Data | SQL Server, EF Core code-first migrations, ClosedXML (Excel export) |
| CI/CD and quality | Azure Bicep (infrastructure-as-code), xUnit, bUnit, Moq, coverlet (code coverage), Playwright + axe-core (automated accessibility audit) |
| Security and accessibility | Microsoft Entra ID (OpenID Connect), ASP.NET Core policy-based authorisation, Application Insights (observability), structured logging |

## Benefits, outcomes and success metrics

The benefits below are delivered outcomes of the rebuild.

| Benefit / outcome | How it is delivered |
|---|---|
| Reduced business-continuity and key-person risk | An ageing, hard-to-maintain Access/VBA application is replaced by a supported, layered .NET application with 94.5% automated test coverage across 122 tests |
| Lower risk of inappropriate access to financial data | Microsoft Entra ID sign-in with role-based, per-user data scoping replaces reliance on Windows file permissions |
| Stronger financial governance and auditability | A structured audit trail and Application Insights telemetry provide traceability that Access could not |
| No loss of capability | All 20 feature areas reproduced, from project cost planning through to programme profitability |
| Meets the public sector accessibility legal duty | WCAG 2.2 AA met through the GOV.UK Design System, with automated axe-core checks in the repository |
