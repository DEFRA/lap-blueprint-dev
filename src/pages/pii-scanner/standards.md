---
layout: "@lap/layouts/BaseLayout.astro"
title: "Standards"
order: 3
---

# Standards

This page consolidates all standards into a single page.

## On This Page

- [S-001: Mandatory Sensitive Data Scan Before AI or Release Use](#s-001-mandatory-sensitive-data-scan-before-ai-or-release-use)
- [S-002: High and Critical Findings Need Explicit Ownership](#s-002-high-and-critical-findings-need-explicit-ownership)
- [S-003: Controlled Handling of Reports Containing Raw Sensitive Values](#s-003-controlled-handling-of-reports-containing-raw-sensitive-values)
- [S-004: Reversible Remediation Is Required for Automated Replacements](#s-004-reversible-remediation-is-required-for-automated-replacements)
- [S-005: Regulatory Mapping Must Be Maintained](#s-005-regulatory-mapping-must-be-maintained)

## S-001: Mandatory Sensitive Data Scan Before AI or Release Use

| Field                               | Details                                                                                                                             |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| What It Mandates                    | Every project must run a sensitive data scan before source code is processed by AI tooling or prepared for release decision-making. |
| Who Must Comply                     | Project managers, product owners, engineering leads, and delivery teams.                                                            |
| Source / Authority                  | Internal delivery control aligned to UK GDPR integrity and confidentiality principles.                                              |
| Approval Required Before Proceeding | Evidence of a completed scan and reviewed findings.                                                                                 |
| Related Risk Theme                  | R-02: Hidden PII and secret exposure.                                                                                               |

## S-002: High and Critical Findings Need Explicit Ownership

| Field                               | Details                                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| What It Mandates                    | All high and critical findings must have a named owner, target date, and remediation decision. |
| Who Must Comply                     | Product owners, delivery managers, and engineering leads.                                      |
| Source / Authority                  | Internal risk governance and auditability requirements.                                        |
| Approval Required Before Proceeding | Governance review confirms ownership and plan.                                                 |
| Related Risk Theme                  | R-03: Poor visibility and weak audit evidence.                                                 |

## S-003: Controlled Handling of Reports Containing Raw Sensitive Values

| Field                               | Details                                                                                                                      |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| What It Mandates                    | Reports that include full, unmasked values must only be produced when necessary and shared through approved secure channels. |
| Who Must Comply                     | Anyone generating or distributing scanner output.                                                                            |
| Source / Authority                  | UK GDPR and internal data handling policy.                                                                                   |
| Approval Required Before Proceeding | Security/compliance confirmation for any broad distribution.                                                                 |
| Related Risk Theme                  | R-02: Hidden PII and secret exposure.                                                                                        |

## S-004: Reversible Remediation Is Required for Automated Replacements

| Field                               | Details                                                                                                        |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| What It Mandates                    | When obfuscation is applied, a valid backup and rollback path must be retained until verification is complete. |
| Who Must Comply                     | Engineering teams and release managers.                                                                        |
| Source / Authority                  | Internal change safety and service continuity controls.                                                        |
| Approval Required Before Proceeding | Engineering lead confirms rollback readiness.                                                                  |
| Related Risk Theme                  | R-04: Unsafe remediation and accidental code impact.                                                           |

## S-005: Regulatory Mapping Must Be Maintained

| Field                               | Details                                                                                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| What It Mandates                    | Detected data categories should remain mapped to applicable regulation references, and mappings should be reviewed when legal sources change. |
| Who Must Comply                     | Tool maintainers and compliance stakeholders.                                                                                                 |
| Source / Authority                  | Regulatory mapping in repository configuration (UK GDPR and payment regulations).                                                             |
| Approval Required Before Proceeding | Periodic compliance review.                                                                                                                   |
| Related Risk Theme                  | R-06: Regulatory misalignment.                                                                                                                |
