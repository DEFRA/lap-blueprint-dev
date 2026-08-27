---
layout: "@lap/layouts/BaseLayout.astro"
title: D2R2 (Surveillance Profiles) modernisation
---

<!-- Provenance: synthesised from the project's Product Requirements Document
     (docs/specs/PRD.md), the legacy parity gap analysis and gap-closure iteration
     spec, the PDF-rendering note, and the re-engineered codebase (README, the .NET
     project files and the web project's package.json).
     The legacy source tree was not available in this workspace; the As-is is
     reconstructed from the PRD and the parity gap analysis rather than read from
     legacy code.
     An architecture requirements document was not available at the time of writing;
     the To-be and Tech stack are drawn from the PRD, README and the actual codebase
     files, and deliberately exclude service-tier and infrastructure detail.
     Status: In delivery (PDF pipeline is a working proof of concept; identity
     integration is deferred to a later iteration; feature-parity gaps remain).
     Internal note — not rendered on the page. -->

# D2R2 (Surveillance Profiles) modernisation

## Project summary

D2R2 — Disease Briefing, Decision Support, Risk Assessment and Ranking, also known as
Surveillance Profiles — is Defra's authoritative store of standardised information
about exotic and endemic animal diseases. Managed by the Animal and Plant Health
Agency (APHA), it holds each disease as a structured profile and lets users explore how
changing any scoring criterion or weighting affects a disease's ranking, so government
can prioritise and manage animal-disease risk on a consistent evidence base.

The service is used by internal APHA and Defra staff who author, prioritise and publish
profiles, by external specialist contributors and reviewers who add and check content
for the profiles assigned to them, and by a public, read-only audience who view
published profiles, species data and reports. D2R2 was modernised because its legacy
platform relied on out-of-support and end-of-life technologies, which raised
supportability, security and accessibility risk and made the service hard to change
safely.

The headline outcome is a like-for-like re-engineering of the core service onto a
current, supported platform — .NET 10 and Blazor with Entity Framework Core — with a
GOV.UK Design System interface and an automated test suite whose line coverage
exceeds the 90% Defra target.

| At a glance | |
|-------------|--|
| Service | D2R2 (Surveillance Profiles) |
| Organisation | Animal and Plant Health Agency (APHA), Defra group |
| Users | Internal profile editors and policy users, external technical, policy and veterinary-advice authors and reviewers, administrators, and public read-only visitors |
| Status | In delivery |

## Modernisation approach

### As-is

The legacy D2R2 was a mixed VB.NET and C# web application built on ASP.NET Web Forms,
running on an out-of-support version of the .NET Framework. Its business logic sat in a
CSLA business-object layer, it exposed services over older service technologies, and it
used a proprietary third-party user-interface toolkit and a proprietary reporting
component to produce its disease reports. The data lived in a large SQL Server database
of around 50 tables with roughly 137 stored procedures, so a great deal of the
behaviour was held in the database rather than in testable application code.

> The legacy source was not available in this workspace. This "before" picture is
> reconstructed from the project's Product Requirements Document and parity analysis
> rather than read directly from the legacy code.

The main characteristics and pain points of the legacy system were:

- **An unsupported, desktop-era web stack.** ASP.NET Web Forms and the legacy .NET
  Framework are no longer part of the forward-looking platform, raising long-term
  supportability and security risk.
- **End-of-life third-party components.** The service depended on proprietary
  components for its user interface, business objects and PDF reporting that are at or
  past end of life and are no longer a safe basis for a supported service.
- **Logic spread across the database.** With much of the behaviour held in stored
  procedures, the rules were hard to test in isolation and harder to change with
  confidence.
- **A bespoke, non-standard user interface.** The screens did not follow the GOV.UK
  Design System, so consistency with other government services and accessibility to
  current standards were not assured.
- **Legacy authentication.** External users signed in through forms-based
  authentication and internal users through Windows authentication, neither of which
  aligns with the current cross-government identity approach.

### To-be

The target is a cloud-ready web application that preserves D2R2's workflows, user and
role model and business logic, while moving to a modern, supported and well-tested
platform. It is described here as an approach and shape rather than a deployable
design:

- **A single web application** built with .NET 10 and Blazor (interactive server
  rendering), organised as a clean, layered architecture that separates the domain
  model, the application services, the data and infrastructure layer, and the user
  interface.
- **A managed relational data approach** using Entity Framework Core with code-first
  migrations, so the schema is versioned in the codebase and applied automatically, and
  the behaviour that used to live in stored procedures is moved into testable
  application and domain code.
- **A GOV.UK Design System user interface** so the service is consistent with other
  government services and accessible by default, targeting WCAG 2.2 AA with a published
  accessibility statement.
- **Modern identity as a strategic goal.** External sign-in is intended to use Gov.UK
  One Login brokered through Defra Customer Identity Management, and internal sign-in to
  use Defra Entra ID, replacing the legacy forms and Windows authentication. This
  identity integration is not yet built (see *Steps taken*).
- **Non-functional goals baked in:** security by design, accessibility as an acceptance
  criterion, automated testing above the 90% coverage target, structured logging, and
  deterministic seed data for a useful first-run experience.
- **A restyleable reporting pipeline** that reuses the GDS web styling to produce
  print-accurate disease reports, replacing the end-of-life proprietary PDF component.

### Steps taken

The modernisation followed the Defra Legacy Application Programme path:

1. **Reverse-engineered the legacy system to a Product Requirements Document.** The
   domain, screens, application code and database were analysed to produce an
   evidence-based PRD describing the behaviour needed to rebuild the service with
   feature parity, using a shared ubiquitous language.
2. **Decomposed the service into traceable feature specifications** covering profile
   authoring and versioning, species and surveillance data, prioritisation and ranking,
   the multi-stream review and approval workflow, publishing and reporting, user and
   role administration, notifications, reference data and identity.
3. **Baked in the delivery standards from the start** — clean architecture with domain
   invariants in the entities and orchestration in application services, dependency
   injection, configuration-driven connection strings, the GOV.UK Design System, and
   accessibility to WCAG 2.2 AA. Authentication is bypassed in development so the
   application runs on localhost without additional set-up, with a banner making the
   bypass explicit.
4. **Rebuilt the application iteratively** onto .NET 10, Blazor and EF Core, porting the
   metadata-driven profile content model, the species prioritisation and ranking maths,
   and the review workflow into an isolated domain and application layer, and
   re-creating each screen as a GOV.UK Design System page. Iterations are driven by a
   gap-closure specification that works remaining parity items in priority order.
5. **Replaced the end-of-life PDF reporting component with a pluggable renderer.** A
   proof-of-concept pipeline composes GDS-styled HTML and converts it to PDF with
   headless Chromium, embedding GDS Transport fonts, and degrades gracefully to a
   built-in text renderer where a browser is not available.
6. **Added an automated test suite** using xUnit for the domain and application services
   and bUnit for the Blazor components, and measured coverage against the 90% target.

Remaining delivery work, tracked in the gap-closure specification, includes building the
Gov.UK One Login, Customer Identity Management and Entra ID identity integration
(deferred this iteration because the identity providers were not yet available), and
closing known feature-parity gaps — most notably the depth of the profile section
editor (scientific and legislative references, further-information sources,
contributions and author-facing revision dates), richer profile search and
version comparison, and the disease-characteristic and saved-filter options on disease
ranking.

## Tech stack

Grounded in the re-engineered codebase's project and configuration files, and in the
PRD and parity analysis for the "before" column.

| Layer | Legacy (as-is) | Modernised (to-be) |
|-------|----------------|--------------------|
| Language | Mixed VB.NET and C# | C# |
| Platform | .NET Framework (out of support) | .NET 10 |
| Front end | ASP.NET Web Forms with a proprietary UI toolkit and bespoke screens | Blazor (interactive server) with the GOV.UK Design System Frontend, GDS Transport fonts and the current GOV.UK header |
| Back end / services | CSLA business objects and older service technologies | Layered .NET solution: an isolated domain project, an application services project, an infrastructure project and a Blazor web project as the composition root |
| Data | SQL Server with much behaviour in stored procedures (around 50 tables and 137 stored procedures) | Entity Framework Core over SQL Server with code-first migrations applied on startup and deterministic seed data |
| Reporting | Proprietary end-of-life PDF component | Pluggable report renderer: GDS-styled HTML converted to PDF with headless Chromium, with a built-in text renderer as a graceful fallback |
| CI/CD & quality | No automated tests | xUnit and bUnit test suite with coverage collection via coverlet; migrations and startup glue excluded from coverage |
| Security & accessibility | Forms authentication (external) and Windows authentication (internal), non-standard UI | Authentication bypassed in development, with Gov.UK One Login / Customer Identity Management (external) and Entra ID (internal) as the target; role-based access; WCAG 2.2 AA accessible GOV.UK components with a published accessibility statement |

## Benefits, outcomes and success metrics

Only benefits that are achieved and evidenced are listed below.

| Benefit / outcome | Evidence / metric | Status |
|-------------------|-------------------|--------|
| Moved the core service off an unsupported stack and off end-of-life third-party components onto a current, supported platform | All projects target .NET 10; the web project is a Blazor web app using Entity Framework Core; the end-of-life proprietary PDF component is replaced by a pluggable renderer | Achieved |
| Automated test coverage introduced where the legacy system had none | Reported line coverage of about 96% overall, with every assembly at or above the 90% Defra target, across a large xUnit and bUnit test suite spanning the domain, application, infrastructure and web assemblies | Achieved |
| Standards-compliant, accessible user interface | GOV.UK Design System Frontend (govuk-frontend 6.x) with GDS Transport fonts and the current GOV.UK header, built to WCAG 2.2 AA with a published accessibility statement | Achieved |
| Database behaviour moved into testable code | The metadata-driven profile content model, species prioritisation and ranking maths, and the review workflow are implemented as unit-tested domain and application code rather than stored procedures | Achieved |
| Restyleable, print-accurate reporting proven | A working proof-of-concept pipeline renders GDS-styled HTML to PDF with headless Chromium and embedded GDS Transport fonts, replacing the legacy proprietary PDF component | Achieved |
| Simpler, safer local development | Authentication is bypassed in development and the database schema is migrated and seeded automatically on first run, so a new environment needs only a connection string | Achieved |

### Lessons for reuse

Other teams modernising a similar legacy application can reuse the following patterns:

- **Reverse-engineer to an evidence-based PRD first**, especially where much of the
  legacy behaviour lives in the database, so the rules can be re-expressed in testable
  code rather than carried across as opaque stored procedures.
- **Isolate the domain and port the business rules into it early** — the profile content
  model, prioritisation maths and review workflow — so they can be unit-tested and
  protected during the user-interface rewrite.
- **Adopt the GOV.UK Design System from the start**, including the correct fonts and
  header, rather than retrofitting accessibility later.
- **Make reporting pluggable and degrade gracefully.** Composing GDS-styled HTML and
  converting it to PDF reuses the web styling and avoids a proprietary reporting
  dependency, while a built-in fallback keeps report generation working when the browser
  is unavailable.
- **Defer high-dependency work explicitly.** Where an external dependency such as an
  identity provider is not yet available, keep a development bypass behind a stable
  abstraction and track the real integration as remaining work, rather than blocking the
  rest of the build.
- **Make local development frictionless** by bypassing authentication in development and
  applying migrations and seed data automatically on first run.
