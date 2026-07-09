---
layout: "@lap/layouts/BaseLayout.astro"
title: "Reusable Assets"
order: 4
---

# Reusable Assets

## On This Page

- [Scanner Configuration Template](#scanner-configuration-template)
- [Suppression Rules File](#suppression-rules-file)
- [Regulatory Mapping Configuration](#regulatory-mapping-configuration)
- [Report Templates](#report-templates)
- [Setup and User Guides](#setup-and-user-guides)

## Scanner Configuration Template

| Field                    | Details                                                                                                                                                                                                                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type                     | Template                                                                                                                                                                                                                               |
| What It Is For           | Defining scan defaults (scanner selection, exclusions, report output) at project level.                                                                                                                                                |
| Download / Link          | [sensitive-scanner.yaml](https://github.com/DEFRA/lap-pii-screener/blob/main/sensitive-scanner.yaml)                                                                                                                                   |
| Who Maintains It         | Repository maintainers.                                                                                                                                                                                                                |
| Related Process/Playbook | [Processes P-001](../processes/#p-001-how-to-set-up-the-scanner-for-a-project), [Processes P-002](../processes/#p-002-how-to-run-a-baseline-sensitive-data-scan); [PB-001](../playbooks/#pb-001-legacy-application-risk-triage-playbook). |

## Suppression Rules File

| Field                    | Details                                                                                                                                                                 |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type                     | Template                                                                                                                                                                |
| What It Is For           | Managing accepted false positives consistently across scan runs.                                                                                                        |
| Download / Link          | [src/config/suppress.txt](https://github.com/DEFRA/lap-pii-screener/blob/main/src/config/suppress.txt)                                                                  |
| Who Maintains It         | Security/compliance and engineering leads.                                                                                                                              |
| Related Process/Playbook | [Processes P-002](../processes/#p-002-how-to-run-a-baseline-sensitive-data-scan), [Processes P-003](../processes/#p-003-how-to-produce-and-share-decision-ready-reports). |

## Regulatory Mapping Configuration

| Field                    | Details                                                                                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type                     | Reference configuration                                                                                                                               |
| What It Is For           | Mapping detected categories to regulatory references used in remediation and reporting.                                                               |
| Download / Link          | [src/config/regulations.yaml](https://github.com/DEFRA/lap-pii-screener/blob/main/src/config/regulations.yaml)                                        |
| Who Maintains It         | Tool maintainers with compliance input.                                                                                                               |
| Related Process/Playbook | [Standards S-005](../standards/#s-005-regulatory-mapping-must-be-maintained); [PB-002](../playbooks/#pb-002-pre-release-compliance-readiness-playbook). |

## Report Templates

| Field                    | Details                                                                                                                                                                                                                          |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type                     | Template                                                                                                                                                                                                                         |
| What It Is For           | Producing consistent HTML and Markdown reports for leadership and governance.                                                                                                                                                    |
| Download / Link          | [src/templates/report.html.j2](https://github.com/DEFRA/lap-pii-screener/blob/main/src/templates/report.html.j2)<br>[src/templates/report.md.j2](https://github.com/DEFRA/lap-pii-screener/blob/main/src/templates/report.md.j2) |
| Who Maintains It         | Reporting and tooling maintainers.                                                                                                                                                                                               |
| Related Process/Playbook | [Processes P-003](../processes/#p-003-how-to-produce-and-share-decision-ready-reports); [PB-002](../playbooks/#pb-002-pre-release-compliance-readiness-playbook).                                                                  |

## Setup and User Guides

| Field                    | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type                     | Runbook                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| What It Is For           | Step-by-step onboarding, usage guidance, and operational support.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Download / Link          | [docs/setup/setup.md](https://github.com/DEFRA/lap-pii-screener/blob/main/docs/setup/setup.md)<br>[docs/setup/QUICKSTART.md](https://github.com/DEFRA/lap-pii-screener/blob/main/docs/setup/QUICKSTART.md)<br>[docs/guides/scanning.md](https://github.com/DEFRA/lap-pii-screener/blob/main/docs/guides/scanning.md)<br>[docs/guides/reports.md](https://github.com/DEFRA/lap-pii-screener/blob/main/docs/guides/reports.md)<br>[docs/guides/obfuscation.md](https://github.com/DEFRA/lap-pii-screener/blob/main/docs/guides/obfuscation.md) |
| Who Maintains It         | Repository maintainers and contributors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Related Process/Playbook | All processes and playbooks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
