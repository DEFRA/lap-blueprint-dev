---
layout: "@lap/layouts/BaseLayout.astro"
title: Virus Isolates Repository modernisation
---

<!-- Provenance: synthesised from the project's PRD, source-based analyses, decomposed
     feature specifications, the legacy source tree and the re-engineered codebase.
     Status: In delivery (proof-of-concept modernisation). Internal note — not rendered. -->

# Virus Isolates Repository modernisation

## Project summary

The Virus Isolates Repository (VIR) is an internal laboratory application used by the Virology
laboratory at the Veterinary Laboratories Agency (part of Defra) to catalogue and manage its
physical bank of frozen virus isolates. It records where each isolate is stored, its scientific
characteristics and nomenclature, its viability over time, and every dispatch of material to
external recipients. The service gives the laboratory an authoritative, auditable inventory of
its holdings and supports the safe, traceable issue of material.

VIR was an ageing desktop-era web application built on a technology stack that is out of
mainstream support. It was modernised to reduce the security and supportability risks of the
legacy stack, to meet current Defra software development, accessibility and security standards,
and to give the laboratory a maintainable platform it can keep improving.

The headline outcome is a like-for-like re-engineering of the service onto a current, supported
platform — .NET 10 and Blazor with Entity Framework Core — with a GOV.UK Design System user
interface and an automated test suite that exceeds the 90% coverage target.

| At a glance | |
|-------------|--|
| Service | Virus Isolates Repository (VIR) |
| Users | Laboratory staff acting as isolate managers, isolate viewers, isolate deleters, look-up data managers, report viewers and system administrators |
| Status | In delivery (proof-of-concept modernisation) |

## Modernisation approach

### As-is

The legacy service was a VB.NET application built on ASP.NET Web Forms, targeting an
out-of-support version of the .NET Framework. It was arranged as two projects: a class library
holding the domain model, business rules, authorisation checks and all data access, and a Web
Forms user interface of server-rendered pages and user controls.

The main characteristics and pain points of the legacy system were:

- **An unsupported, desktop-era web stack.** ASP.NET Web Forms and the legacy .NET Framework are
  no longer part of the mainstream, forward-looking platform, which raises long-term
  supportability and security risk.
- **Tightly coupled data access.** Persistence was handled entirely through hand-written data
  access calling database stored procedures, with the business layer bound closely to the
  database. The database schema itself was not held in the repository, so the data model had to
  be reconstructed from the application code.
- **A bespoke, non-standard user interface.** The screens did not follow the GOV.UK Design
  System, and accessibility to current standards was not assured.
- **Weak secret handling.** Configuration held connection details in plain configuration files
  rather than a managed secret store.
- **No automated tests.** The legacy repository contained no automated test suite, so changes
  could not be verified safely.
- **Dependencies on internal frameworks and tooling.** The application relied on several
  internal shared libraries for its business base, user authorisation and integration with the
  laboratory information management system, plus a proprietary reporting tool — all of which tie
  the service to older infrastructure.

The service authenticated users with Windows authentication and applied role-based
authorisation in code, showing or hiding functionality by role.

### To-be

The target is a cloud-ready web application that preserves the laboratory's workflows while
moving to a modern, supported and well-tested platform. Described as an approach and shape
rather than a deployable design:

- **A single web application** built with .NET 10 and Blazor (interactive server rendering),
  organised using a clean, layered architecture that separates the domain model, the data and
  services layer, and the user interface.
- **A managed relational data approach** using Entity Framework Core as the data access layer,
  with database-independent code so the underlying store can be chosen per environment.
- **A GOV.UK Design System user interface** so the service is consistent with other government
  services and accessible by default.
- **Non-functional goals baked in:** security by design, WCAG 2.2 AA accessibility, automated
  testing above the 90% coverage target, structured logging, a health-check endpoint, and
  deterministic seed data for a useful first-run experience.

The legacy business rules were carried across explicitly — for example AV submission number
validation, isolate nomenclature construction, repository search validation, optimistic
concurrency, and the rules that stop in-use or non-empty records being deleted.

### Steps taken

The modernisation followed the Defra Legacy Application Programme path:

1. **Reverse-engineered the legacy system to a Product Requirements Document.** Because no
   stakeholder interviews, screenshots or database schema were available, the application and
   database were analysed directly from source to produce an evidence-based PRD, with every
   reconstructed actor, screen and entity flagged as code-derived.
2. **Decomposed the service into traceable feature specifications.** The scope was broken into
   14 feature specifications (reference data, characteristic definitions, sender and recipient
   management, submission and sample registration, isolate records and characteristics, dispatch
   history, viability checks, tray relocation, repository search, laboratory-system import,
   operational reports, audit log, authentication and authorisation, and the navigation shell).
3. **Baked in the delivery standards.** Clean architecture, dependency injection,
   configuration-driven connection strings, structured logging, a health check, and the GOV.UK
   Design System were adopted from the start, with authentication skipped in development so the
   application runs on localhost without additional set-up.
4. **Rebuilt the application iteratively** onto .NET 10, Blazor and EF Core, porting the legacy
   business rules into an isolated domain layer and re-creating each screen as a GOV.UK Design
   System page.
5. **Added an automated test suite** using xUnit for the domain and services and bUnit for the
   Blazor components, with end-to-end tests exercising the whole application, and measured
   coverage against the 90% target.

## Tech stack

Grounded in the re-engineered codebase's project and configuration files, and in the legacy
source tree for the "before" column.

| Layer | Legacy (as-is) | Modernised (to-be) |
|-------|----------------|--------------------|
| Language | VB.NET | C# |
| Platform | .NET Framework (out of support) | .NET 10 |
| Front end | ASP.NET Web Forms (`.aspx` / `.ascx`), AjaxControlToolkit, bespoke UI | Blazor (interactive server), GOV.UK Design System Frontend with GDS Transport fonts and the current GOV.UK header and logo |
| Back end / services | VB.NET class library with in-code business rules and authorisation | Layered .NET solution: an isolated domain project, an infrastructure/services project, and a Blazor web project as the composition root |
| Data | Hand-written data access over SQL Server stored procedures | Entity Framework Core with a database-independent context, automatic audit stamping and optimistic concurrency; a file-based store for zero-configuration first run |
| Reporting | Proprietary reporting tool | Operational reports rendered in-application |
| CI/CD & quality | No automated tests | xUnit and bUnit test suite with coverage collection; deterministic, idempotent seed data |
| Security & accessibility | Windows authentication, role checks in code, secrets in plain configuration | Windows (Negotiate) authentication with authentication skipped in development; role-based authorisation; WCAG 2.2 AA accessible GOV.UK components (skip link, correct heading order, accessible tables and error summaries) |

## Benefits, outcomes and success metrics

Evidence-based outcomes of the modernisation are shown below.

| Benefit / outcome | Evidence / metric | Status |
|-------------------|-------------------|--------|
| Moved off an unsupported stack onto a current, supported platform | All projects target .NET 10; the web project is a Blazor web app; persistence uses Entity Framework Core | Achieved |
| Automated test coverage introduced where there was none | Coverage report shows 91.9% line coverage (2,169 of 2,359 lines) across the domain, infrastructure and web assemblies, exceeding the 90% target; the project reports a suite of 147 xUnit and bUnit tests | Achieved |
| Standards-compliant, accessible user interface | GOV.UK Design System Frontend with GDS Transport fonts and the current GOV.UK header verified in the codebase; GDS components provide WCAG 2.2 AA features (skip link, heading order, accessible tables and error summaries) | Achieved |
| Business rules preserved during migration | Legacy rules (AV number validation, nomenclature, search validation, concurrency, deletion guards) ported into an isolated, unit-tested domain layer | Achieved |
| Simpler, safer local development | Authentication is skipped in development and the database is created and seeded automatically on first run | Achieved |

### Lessons for reuse

Other teams modernising a similar legacy application can reuse the following patterns:

- **Reverse-engineer to an evidence-based PRD when knowledge is thin.** Where there are no
  interviews, screenshots or schema, analyse the source directly and flag every reconstructed
  fact as code-derived rather than inventing detail.
- **Decompose into small, traceable features** before building, so scope and coverage can be
  tracked.
- **Isolate the domain and port business rules into it first.** Keeping validation,
  nomenclature and concurrency rules in a dependency-free domain layer makes them easy to
  unit-test and protects them during the UI rewrite.
- **Adopt the GOV.UK Design System from the start** — including the correct fonts, header and
  logo — rather than retrofitting accessibility later.
- **Make local development frictionless** by skipping authentication in development and seeding
  a useful database on first run.
- **Choose a database-independent data layer** so the storage technology can be decided per
  environment without changing application code.
