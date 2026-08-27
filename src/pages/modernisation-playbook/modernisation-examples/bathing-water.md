---
layout: "@lap/layouts/BaseLayout.astro"
title: Bathing Water Quality Forecasting System modernisation example
---

<!-- Provenance: synthesised from the project's PRD, domain analysis, application analysis,
     database analysis, gap analysis, and re-engineered codebase (api/, web/, db_migration/).
     Status: Proof of concept.
     Note: output/architecture-requirements.md was not available; the To-be and Tech stack
     sections are drawn from the codebase (api/requirements.txt, api/pyproject.toml,
     web/package.json, README.md) and PRD alone.
     Internal note — not rendered on the page. -->

# Bathing Water Quality Forecasting System modernisation example

## Project summary

The Bathing Water Quality Forecasting System (BWQFS) — formerly the Pollution Risk
Forecasting system — is an Environment Agency (EA) environmental prediction service. It
issues a daily pollution risk forecast for each of approximately 415 designated bathing
waters in England during the bathing season (1 May to 30 September). Each forecast
indicates whether a site is expected to exceed the health risk threshold for intestinal
enterococci (a faecal indicator bacterium), producing a "warning" or "no warning" result
that is published to data.gov.uk for public information.

The legacy system combined a licensed desktop statistical application, Microsoft Access
databases, Excel VBA workbooks, and a specialist operational forecasting platform. The
annual model-build cycle was largely manual and depended on locally installed software.
There was no web interface. The modernisation re-engineers the statistical modelling
pipeline in Python, migrates all data from Access to PostgreSQL, and delivers a
GOV.UK-standard web interface so that the model-build cycle can eventually be operated
entirely from a browser.

As a proof of concept, the project demonstrates that the statistical model-building
workflow previously carried out in proprietary desktop software can be reproduced in
Python against migrated data, achieving comparable results for a test site. The full
production replacement is still in delivery.

| At a glance | |
|-------------|--|
| Service | Bathing Water Quality Forecasting System (BWQFS) |
| Users | EA Marine Modellers; EA FEWS Administrators |
| Status | Proof of concept |

## Modernisation approach

### As-is

The legacy system was not a single application but a collection of loosely coupled
desktop tools held together by manual processes.

- **Statistical modelling.** IBM SPSS Statistics built stepwise multiple linear
  regression (MLR) models for each bathing water site. It is a licensed desktop
  application and cannot be embedded in an automated pipeline. The model-build cycle
  ran once a year and required a specialist to operate it manually.
- **Model data storage.** Microsoft Access databases held the pre-computed predictor
  matrix, water quality samples, bivariate regression results, model coefficients, and
  site configuration. More than a dozen biennial Access files stored the raw
  environmental time-series data (radar rainfall, wind, tide, and river flow). The only
  integration mechanism between these files was Access linked tables.
- **Data processing.** Excel VBA workbooks formatted and post-processed the statistical
  output before results were stored.
- **Operational forecasting.** A specialist hydrological forecasting platform ran the
  automated daily forecast using a rainfall-threshold method. Overriding an automated
  forecast required direct access to the EA file system and a manual file transfer.
- **No web interface.** All analytical work required desktop software access. There was
  no browser-based view of model results or forecast outputs.

The main pain points driving modernisation were:

- the dependency on a licensed desktop statistical application created a single point of
  failure for the annual modelling cycle and made it difficult to bring in new team
  members
- the Access databases had no version control, schema history, or reproducible migration
  path
- the model-build workflow was manual and not auditable
- 20 newly designated freshwater bathing water sites required methodology changes that
  were difficult to implement within the existing desktop tooling

The MLR modelling approach itself was already proven before the modernisation began:
prior statistical analysis had demonstrated a 35% improvement in forecast accuracy over
the rainfall-threshold method that MLR models are intended to replace (source: BWQFS
PRD, Section 1).

### To-be

The target is a cloud-ready web application that allows an EA Marine Modeller to run the
full annual model-build cycle — data readiness check, predictor computation, MLR model
build, and forecast validation — from a browser, with no dependency on licensed desktop
software.

The application separates a REST API (which contains the MLR engine and data access
layer) from a server-rendered GOV.UK-standard web frontend. A managed relational
database replaces the Access file store, with migration scripts handling the initial
transfer of all legacy data.

Key non-functional goals are:

- removing the SPSS licence dependency so the model-build pipeline is self-contained
- making the pipeline auditable, reproducible, and runnable without specialist software
- meeting GOV.UK accessibility and security standards from the outset
- providing a structured data readiness check before the modelling cycle is triggered

### Steps taken

1. **Reverse-engineering to a PRD.** The legacy system had no formal specification. The
   team produced a product requirements document, domain analysis, application analysis,
   database analysis, and interaction analysis from the available artefacts (system
   specification documents, Access database schemas, and exported VBA source code)
   before writing any application code.

2. **Database schema export and analysis.** The Access database schemas were exported to
   SQL and markdown so the PostgreSQL target schema could be designed from accurate
   source data rather than assumptions.

3. **Column name normalisation.** A deterministic normalisation function was written and
   BDD-tested to convert Access column names (mixed case, special characters, bare
   integers) to valid unquoted PostgreSQL identifiers. This was a prerequisite for every
   subsequent migration step.

4. **Access to PostgreSQL data migration.** Migration scripts transferred all 11 MLR
   modelling and site configuration tables from Access into PostgreSQL. Acceptance tests
   verify row counts and idempotency.

5. **Python stepwise MLR engine.** The SPSS stepwise ordinary least squares algorithm
   was re-implemented in Python using statsmodels. The engine applies the same
   p-to-enter threshold and minimum sample size guard as the legacy system. For the test
   site, the Python implementation reproduces the SPSS variable selection and produces
   an adjusted R² within tolerance of the stored SPSS value.

6. **Forecast validation.** The Python model's 2025 bathing season forecasts were
   compared against stored SPSS results to quantify reproducibility before any claim
   could be made that the legacy statistical software output could be retired.

7. **GOV.UK web interface.** A site selection page, per-site model comparison page, and
   per-site forecast page were built using GOV.UK Frontend and Nunjucks templates,
   conforming to GOV.UK Design System patterns.

8. **Data readiness page.** A GOV.UK task list page was built to give modellers a
   structured view of which input datasets are present in the database before triggering
   the model build. The call-to-action to start the model build is only enabled when all
   tasks are complete.

9. **Raw data migration scripts and predictor computation.** Scripts were written and
   tested to load the raw environmental time-series data (radar rainfall, wind, tide,
   river flow) into PostgreSQL, and to compute the aggregated predictor variables from
   those raw data. The scripts are complete but the full data load for all historical
   years has not yet been run.

## Tech stack

Stack drawn from `api/requirements.txt`, `api/pyproject.toml`, `web/package.json`, and
`README.md`.

| Layer | Technology |
|-------|-----------|
| Front end | Node.js 20, Hapi.js, Nunjucks, GOV.UK Frontend |
| Back end / services | Python 3.12, FastAPI, Uvicorn, SQLAlchemy, pandas, statsmodels, numpy |
| Data | PostgreSQL 16; pyodbc for the Access-to-PostgreSQL migration |
| CI/CD and quality | pytest (BDD-style acceptance tests); Jest (frontend unit tests); Ruff (Python linting with flake8-bandit security rules); Docker Compose (local development) |
| Security and accessibility | HTTP security headers (Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy); CSRF protection via @hapi/crumb; GOV.UK Design System (WCAG 2.1 AA target) |

No CI/CD pipeline exists at proof-of-concept stage. The test suite is run manually on a
developer machine. Establishing an automated pipeline is a prerequisite for production
deployment.

## Benefits, outcomes and success metrics

| Benefit / outcome | Evidence / metric | Status |
|-------------------|-------------------|--------|
| MLR models give a 35% improvement in forecast accuracy over the rainfall-threshold method | Evidenced in BWQFS PRD Section 1, from prior statistical analysis | Achieved (methodology); the Python pipeline is intended to operationalise this benefit at scale |
| Python MLR engine reproduces SPSS model for the test bathing water site | Python adjusted R² and variable selection compared against stored SPSS values in BDD acceptance tests; adjusted R² is within tolerance for the test site | Achieved for the test site; cross-site result not yet established |
| All 11 MLR modelling and site configuration tables migrated from Access to PostgreSQL | Row count and schema acceptance tests pass; confirmed by gap analysis | Achieved |
| BDD acceptance test suite covers migration, MLR engine, forecast validation, and data readiness | pytest suite present in the re-engineered codebase | Achieved |
| SPSS licence dependency removed from the model-build pipeline | Depends on cross-site reproducibility report confirming acceptable agreement across all sites — not yet complete | Expected |
| Annual model-build cycle operable from a browser without desktop software | Demonstrated for proof-of-concept scope; authentication, async job management, and CI/CD remain as gaps | Expected |
| GOV.UK-standard accessible web interface for modellers | GOV.UK Design System applied; no formal WCAG 2.1 AA audit has been performed | To be confirmed |
| Full raw environmental time-series data migrated to PostgreSQL | Migration scripts complete and tested; full data load for all historical years not yet run | To be confirmed |

### Lessons for reuse

- **Start with a PRD even for internal tools.** The legacy system had no formal
  specification. Producing one first — from documents, database schemas, and source
  code — revealed scope and constraints before any code was written and prevented
  significant rework.

- **Export database schemas before writing migration scripts.** Exporting Access schemas
  to SQL gave the team accurate column names, types, and row counts to design the
  PostgreSQL schema from, rather than discovering them by trial and error during
  migration.

- **Normalise identifiers as a first, tested step.** Writing and BDD-testing a
  column-name normalisation function before any data was written prevented a whole class
  of identifier errors from reaching the migration scripts. This pattern transfers
  directly to any Access-to-relational migration.

- **Use BDD scenarios to pin legacy behaviour.** Writing acceptance scenarios against
  the stored legacy output made the reproducibility requirement concrete and testable,
  and gave a clear definition of done for the re-implemented engine.

- **Separate the proof of concept from production.** Explicitly documenting what the
  demo does and does not cover prevented the team from overstating readiness and gave a
  clear, prioritised list of gaps that must be resolved before production deployment.

- **Embed GOV.UK Design System and security headers from the first sprint.** Both are
  much easier to bake in early than retrofit. The GOV.UK task list pattern was also a
  natural fit for surfacing data readiness before a long-running compute job is
  triggered.

## Open items / to be confirmed

| Item | What is needed |
|------|----------------|
| Cross-site MLR reproducibility report | A systematic comparison of Python versus SPSS adjusted R², variable selection, and coefficients across all sites is needed before the legacy statistical software can be retired. For the test site the Python adjusted R² is below the SPSS value; the cause and whether this is typical across all sites is not yet established. |
| WCAG 2.1 AA accessibility audit | No formal audit has been performed. The GOV.UK Design System is applied but independent validation against WCAG 2.1 AA is still required. |
| Benefits metrics — quantified | The 35% forecast accuracy improvement is evidenced from prior analysis. Benefits from the operational Python pipeline (modeller time saved, licence cost avoided) are not yet measured and should be captured once the production service is live. |
| Full raw data load into PostgreSQL | Migration scripts for radar rainfall, wind, tide, and river flow are complete and tested. The physical load of all historical years' data from the archive has not yet been run. |
| Production readiness | A formal gap analysis has been completed. Key items requiring resolution before production deployment include: authentication and role-based access control, a CI/CD pipeline, asynchronous job management for long-running compute, database schema versioning, and a defined deployment target. |
| Freshwater site coverage | The proof of concept covers coastal and estuarine sites only. Extension of the Python MLR pipeline to cover 20 newly designated freshwater bathing water sites (which require physicochemical predictor variables) is out of scope for the current phase. |
