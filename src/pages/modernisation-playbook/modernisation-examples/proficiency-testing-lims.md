---
layout: "@lap/layouts/BaseLayout.astro"
title: Proficiency Testing LIMS (PT-LIMS) modernisation
---

<!-- Provenance: synthesised from the project's Product Requirements Document, the
     legacy-system analyses (domain, application, database and interaction) and the
     re-engineered .NET 10 codebase (verified from the solution's project files,
     the bundled GOV.UK Design System assets and the test projects).
     Facts verified directly from the repository: target framework net10.0; Blazor
     Interactive Server; Entity Framework Core 10 for SQL Server; govuk-frontend 6.4.0;
     476 xUnit/bUnit test methods counted across the test projects; ~94.5% line
     coverage as reported by the project README and delivery log; 17 feature
     specifications (FT-001 to FT-017).
     Status: In delivery (completed greenfield rebuild, now in iterative improvement).
     Internal note — not rendered on the page. -->

# Proficiency Testing LIMS (PT-LIMS) modernisation

## Project summary

The Proficiency Testing Laboratory Information Management System (PT-LIMS) runs Defra's
proficiency-testing programme, delivered by the Animal and Plant Health Agency (APHA)
under its VETQAS brand. Participating laboratories worldwide receive test samples,
analyse them and submit their results. APHA compares each submission against the
expected result, scores it, signs it off and publishes an evaluation. Participation is
voluntary and paid, so the system also manages customers, contracts, pricing and
invoicing.

PT-LIMS was an ageing web application built on an older Microsoft web-forms framework,
with its business logic spread across a large number of hand-written pages and
data-access components. It has been rebuilt as a modern .NET 10 Blazor web application
that meets Defra software development standards and the GOV.UK Design System (GDS),
using a layered "clean" architecture that separates the domain, application, data and
user-interface concerns.

The rebuild reproduces all 17 feature areas — from reference data and the customer or
participant registry, through scheme definition, distributions, result capture,
assessment, sign-off and publication, to the external participant portal, notifications,
data retention and audit — with around 94.5% line coverage across more than 470
automated tests.

| At a glance | |
|---|---|
| Service | Proficiency Testing LIMS (PT-LIMS) / VETQAS |
| Organisation | Animal and Plant Health Agency (APHA), Defra group |
| Users | Internal APHA staff (contracts, scheme, scheduling, assessor, results sign-off, test consultant, support and administrator roles) and external participating laboratories (participant and viewer roles) |
| Status | In delivery |

## Modernisation approach

### As-is

PT-LIMS was a pair of web portals — an internal portal for APHA staff and an external
portal for participating laboratories — built on an older Microsoft web-forms
framework. The business logic was written in a mix of languages and held in
page-behind code and a bespoke business-object layer, talking to a SQL Server database
through hand-written stored procedures. Four separate background Windows services
handled email dispatch and the seven-year data-retention cleansing of attachments,
consultant records and customer or participant data.

Key pain points that drove the modernisation:

- **Ageing, hard-to-support platform** — the web-forms framework and its patterns are
  well past their prime, making the application costly to change and to keep secure.
- **Tightly coupled logic** — business rules were entwined with the user-interface
  pages and a hand-rolled data-access layer, so changes were risky and hard to test.
- **No automated testing** — there was no meaningful automated test safety net, so a
  change in one area could silently break another.
- **Accessibility gaps** — the older interface did not meet current WCAG 2.2 AA
  standards.
- **End-of-life dependencies** — the reporting and document stack relied on
  third-party components that had reached, or were approaching, end of life.
- **Fragmented background processing** — separate Windows services for email and
  retention added operational overhead and were awkward to observe.

### To-be

The target is a cloud-hosted Blazor web application, reached from a supported browser
and backed by a managed relational database. The domain and business rules are
reproduced faithfully but re-expressed as isolated, testable services.

- **Layered clean architecture** — a strict dependency direction (web depends on
  application, which depends on the domain; infrastructure depends on the application
  and domain) keeps the business rules free of framework and database concerns.
- **Accessibility and design** — every screen uses the GOV.UK Design System, so the
  service meets GDS style and WCAG 2.2 AA. An in-app accessibility statement is
  included and automated accessibility checks run in the test suite.
- **Security** — authentication uses Microsoft Entra ID for internal staff and GOV.UK
  One Login for external participants, over OpenID Connect. Role-based authorisation
  guards each page, security-header middleware applies the recommended GOV.UK and NCSC
  baseline, and antiforgery and HTTPS protections are on by default.
- **Testability** — automated coverage exceeds the Defra 90% threshold across unit,
  Blazor component and repository tests.
- **Operability** — the application exposes liveness and readiness health probes,
  applies its database migrations and seed data on startup, and folds the former
  background Windows services into a single, observable background retention worker.

### Steps taken

1. **Analysed the legacy system** — reverse-engineered the two portals, the
   business-object layer, the database and the background services into four structured
   analyses (domain, application, database and interaction), capturing every actor,
   term, entity, screen and business rule.

2. **Produced a Product Requirements Document** — synthesised the analyses and the
   High Level Design into a PRD defining the actors, domain model, bounded contexts and
   acceptance criteria.

3. **Decomposed into features** — broke the PRD into 17 traceable feature
   specifications (FT-001 to FT-017), each with acceptance criteria, giving a
   no-silent-loss chain from legacy screen to test.

4. **Re-engineered the application** — rebuilt on .NET 10 Blazor Interactive Server
   with Entity Framework Core in a layered clean architecture, converting page-behind
   and business-object logic into testable C# services.

5. **Applied GDS standards** — integrated the GOV.UK Design System (govuk-frontend
   6.4.0): the GOV.UK header with the Tudor Crown, phase banner, footer, GDS Transport
   font and accessible tables.

6. **Baked in WCAG 2.2 AA** — enforced accessible page structure and controls, added an
   accessibility statement page, and ran automated accessibility assertions in the web
   test project.

7. **Built the test suite** — wrote more than 470 tests with xUnit and bUnit (using
   SQLite and in-memory providers for repository tests), reaching around 94.5% line
   coverage.

8. **Consolidated background processing** — replaced the separate email and retention
   Windows services with in-application services and a single background retention
   worker that runs the four cleansing jobs and writes an auditable record for each.

9. **Iterative hardening** — worked a prioritised gap analysis against the legacy
   behaviour, deepening the testing lifecycle, approval workflows, notifications,
   retention and audit so each feature meets its acceptance criteria.

## Tech stack

Grounded in the re-engineered codebase's project and configuration files, and in the
legacy-system analyses for the "before" column.

| Layer | Legacy (as-is) | Modernised (to-be) |
|-------|----------------|--------------------|
| Language | VB.NET, with some C# for the background services | C# |
| Platform | An older Microsoft web-forms framework on the .NET Framework | .NET 10 |
| Front end | Two server-rendered web-forms portals (internal and external) | Blazor Interactive Server, govuk-frontend 6.4.0 (GOV.UK Design System) with GDS Transport font, Tudor Crown header, phase banner and footer |
| Back end / services | Business logic in page-behind code and a bespoke business-object layer; SOAP web services; four background Windows services for email and retention | Layered clean architecture (domain, application, infrastructure, web); business rules re-expressed as testable C# services; a single background retention worker |
| Data | SQL Server accessed through hand-written stored procedures and a hand-rolled data-access layer | SQL Server with Entity Framework Core 10 code-first migrations and idempotent startup seed data |
| CI/CD & quality | No automated test suite | xUnit and bUnit tests with SQLite and in-memory providers; coverlet code coverage; startup migrations and seed for reproducible environments |
| Security & accessibility | Role and folder-based access control on the older framework; interface not meeting WCAG 2.2 AA; end-of-life reporting and document components | Microsoft Entra ID (internal) and GOV.UK One Login (external) over OpenID Connect; role-based page authorisation; GOV.UK and NCSC baseline security headers, HSTS and antiforgery; health probes; WCAG 2.2 AA GOV.UK components with an accessibility statement |

## Benefits, outcomes and success metrics

The outcomes below are evidenced from the re-engineered codebase and the project's
delivery records.

| Benefit / outcome | Metric / evidenced result |
|-------------------|---------------------------|
| Moved off an ageing web-forms platform onto a supported, modern stack | The service is a .NET 10 Blazor Interactive Server application using Entity Framework Core 10, verified from the solution's project files |
| No loss of capability | All 17 legacy feature areas reproduced as feature specifications FT-001 to FT-017, each with acceptance criteria |
| Automated test coverage introduced where there was none | More than 470 xUnit and bUnit test methods, with around 94.5% line coverage — above the 90% Defra target |
| Standards-compliant, accessible user interface | GOV.UK Design System (govuk-frontend 6.4.0) with the Tudor Crown header, phase banner, footer and GDS Transport font, an accessibility statement page, and automated WCAG 2.2 AA checks in the test suite |
| Stronger, standards-based access control | Microsoft Entra ID and GOV.UK One Login sign-in over OpenID Connect, with role-based authorisation applied to every routable page |
| Hardened by default | GOV.UK and NCSC baseline security headers, HSTS, HTTPS redirection and antiforgery are enabled in the web application |
| More operable service | Liveness and readiness health probes are exposed, and the application applies its database migrations and seed data on startup |
| Simplified background processing | The four separate retention and email Windows services are consolidated into in-application services and a single background retention worker, each cleansing job writing an auditable record |

### Lessons for reuse

Other teams modernising a similar legacy application can reuse the following patterns:

- **Analyse the legacy system into structured analyses first.** Reverse-engineering the
  portals, business objects, database and background services into domain, application,
  database and interaction analyses captured every actor, entity, screen and rule
  before any rebuild began.
- **Decompose into small, traceable features.** Breaking the PRD into 17 feature
  specifications with acceptance criteria gives a no-silent-loss chain from legacy
  screen to test.
- **Adopt a layered clean architecture.** Keeping the domain and business rules free of
  framework and database concerns makes the logic unit-testable and protects it during
  the user-interface rewrite.
- **Convert page-behind logic into isolated services.** Moving business rules out of the
  web-forms pages and the hand-rolled data layer into C# services makes them testable
  and reusable.
- **Adopt the GOV.UK Design System from the start** — header, footer, fonts and
  accessible components — rather than retrofitting accessibility later.
- **Consolidate background workers.** Replacing several standalone Windows services with
  in-application services and a single observable background worker reduces operational
  overhead.
- **Make environments reproducible.** Applying migrations and seed data on startup means
  a new environment needs only a connection string to become useful.
