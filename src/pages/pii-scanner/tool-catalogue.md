---
layout: "@lap/layouts/BaseLayout.astro"
title: "Tool Catalogue"
order: 6
---

# Tool Catalogue

## On This Page

- [Gitleaks](#gitleaks)
- [Presidio-Based PII Scanner](#presidio-based-pii-scanner)
- [Semgrep](#semgrep)
- [SonarQube (Optional Deep Analysis)](#sonarqube-optional-deep-analysis)
- [Obfuscation Engine](#obfuscation-engine)

## Gitleaks

| Field                       | Details                                                                    |
| --------------------------- | -------------------------------------------------------------------------- |
| What It Is                  | A specialized scanner for leaked secrets such as API keys and tokens.      |
| Who Can Access It           | All scanner users; binary is auto-managed by setup.                        |
| How To Access It            | Included in default scanner runs once setup is complete.                   |
| How It Works (Process Flow) | Scans files and optionally git history against known secret patterns.      |
| What It Produces            | Secret findings with severity and location.                                |
| Governance and Approval     | Critical findings should trigger immediate remediation ownership.          |
| Ownership and Support       | Open source upstream with local integration maintained in this repository. |
| Reuse Guidance              | Use as a baseline in nearly all scans.                                     |
| Status                      | Published                                                                  |

## Presidio-Based PII Scanner

| Field                       | Details                                                                                           |
| --------------------------- | ------------------------------------------------------------------------------------------------- |
| What It Is                  | The repository's custom PII scanner for structured and optional NLP-based detection.              |
| Who Can Access It           | All scanner users; NLP enhancements are optional.                                                 |
| How To Access It            | Enabled in default scanning. Additional NLP setup can be applied for expanded detection.          |
| How It Works (Process Flow) | Checks files for PII patterns, applies validations, and optionally detects unstructured entities. |
| What It Produces            | PII findings, confidence values, and category-based regulatory mapping.                           |
| Governance and Approval     | Supports compliance evidence but does not replace human governance review.                        |
| Ownership and Support       | Repository maintainers.                                                                           |
| Reuse Guidance              | Use for GDPR-focused risk discovery, especially in legacy code and test data.                     |
| Status                      | Published                                                                                         |

## Semgrep

| Field                       | Details                                                                                       |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| What It Is                  | A code-pattern scanner that identifies common security weaknesses and secret handling issues. |
| Who Can Access It           | All users with Semgrep dependency available.                                                  |
| How To Access It            | Install optional Semgrep extras during setup, then include in scan configuration.             |
| How It Works (Process Flow) | Parses code structure and applies community security rulesets.                                |
| What It Produces            | Security findings and code-quality risks with rule metadata.                                  |
| Governance and Approval     | Use findings for risk triage and remediation planning.                                        |
| Ownership and Support       | Open source upstream with local integration maintained in this repository.                    |
| Reuse Guidance              | Use alongside Gitleaks and Presidio for broader coverage.                                     |
| Status                      | Published                                                                                     |

## SonarQube (Optional Deep Analysis)

| Field                       | Details                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------- |
| What It Is                  | An optional deep-analysis scanner for data-flow and complex security patterns.         |
| Who Can Access It           | Teams that have SonarQube prerequisites in place.                                      |
| How To Access It            | Enable SonarQube during setup and include it in scanner selection.                     |
| How It Works (Process Flow) | Runs deeper language-aware analysis and feeds mapped findings into the unified report. |
| What It Produces            | Additional vulnerability and hotspot findings for advanced risk coverage.              |
| Governance and Approval     | Use for high-assurance projects or when governance requires deeper analysis evidence.  |
| Ownership and Support       | Repository maintainers for integration; SonarSource for scanner platform.              |
| Reuse Guidance              | Apply when project risk profile justifies the extra setup and runtime.                 |
| Status                      | Published                                                                              |

## Obfuscation Engine

| Field                       | Details                                                                                               |
| --------------------------- | ----------------------------------------------------------------------------------------------------- |
| What It Is                  | A controlled replacement workflow that can redact or fake sensitive values and keep rollback backups. |
| Who Can Access It           | Teams running remediation activities.                                                                 |
| How To Access It            | Use the obfuscate workflow from the CLI after scanning.                                               |
| How It Works (Process Flow) | Creates review session, captures user decisions, applies approved replacements, and stores backups.   |
| What It Produces            | Updated files, decision session file, backup set, and optional obfuscation report.                    |
| Governance and Approval     | Should be used with change-control oversight for high-impact code paths.                              |
| Ownership and Support       | Repository maintainers and delivery engineering leads.                                                |
| Reuse Guidance              | Use to accelerate remediation while preserving control and reversibility.                             |
| Status                      | Published                                                                                             |
