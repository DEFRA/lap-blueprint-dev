---
layout: "@lap/layouts/BaseLayout.astro"
title: Considerations & Caveats
order: 4
---

# Considerations & Caveats

Review these considerations before starting AI-assisted reverse engineering or re-engineering work. They help teams handle information responsibly, maintain evidence quality, control costs and respond to common operational issues.

## Before you begin

Confirm the following before uploading, processing or sharing application material:

- the information classification and the organisation's approved use of the selected AI tool are understood
- the data-routing arrangements for the AI service have been reviewed
- relevant team members have completed required information-governance training
- source code, screenshots and transcripts have been checked for personal data and secrets
- delivery roles, review gates and evidence storage locations are agreed

If the classification, data handling route or tool approval is unclear, stop and seek guidance through the appropriate organisational route before continuing.

## Information governance

The source playbook is intended for material classified as OFFICIAL only. Do not assume that an AI tool approved for one classification, service or delivery context is approved for another.

Generative AI tools may route prompts and files to externally hosted models or cloud platforms. Before use, understand:

- which provider and hosting route will process the material
- what project data will leave the local environment
- the retention, access and audit arrangements for the selected tool
- any restrictions on suppliers, repositories, devices or locations

Follow current organisational information-governance policies throughout the work. Record decisions, approvals and any exceptions in the project's governance evidence.

## Personal data and secrets

Personal data must be removed before transcripts enter the processing pipeline. Treat this as a mandatory entry gate, not a clean-up activity after analysis.

The team must also verify that personal data and secrets do not remain in:

- curated transcripts
- HTML mock-ups generated from screenshots
- source code, including configuration files, connection strings, comments and test data
- analysis outputs, PRDs and feature specifications
- files committed to version control

Automated transformations can replace visible personal data with fictional equivalents, but this remains a best-effort control. Review the output yourself. If personal data or secrets are found, remove them, rerun the relevant processing activity and repeat the check before proceeding.

Use the local [PII Screener guidance](../delivery-management/pii-scanning/) to scan code before it is shared, used with AI tooling or committed to a wider-access repository.

## AI output quality and hallucination risk

AI-generated content can sound plausible while not being supported by the source material. Human review is required at every stage.

Apply these controls:

- check that each factual statement can be traced to source code, screenshots, transcripts or an approved analysis output
- investigate unsupported claims rather than treating them as requirements
- use open questions to record genuine contradictions, gaps and ambiguities for stakeholder follow-up
- review Mermaid diagrams, workflow steps, business rules and cross-references for accuracy
- check completeness across all supplied material, not only the most visible or recent files

Output quality depends on input quality. Incomplete screenshots can leave workflows undocumented, limited interviews can produce thin domain understanding, and partial source code can lead to incorrect technical analysis. Address gaps in the inputs before relying on the resulting PRD or feature specifications.

## Cost and token use

AI processing cost varies with the amount and type of material processed. The main drivers are:

- the number and size of screenshots
- the length and number of stakeholder interview transcripts
- the size and complexity of the source codebase
- the selected model and its pricing
- repeated processing caused by incomplete or poor-quality inputs

Manage cost by working incrementally, reviewing intermediate outputs before launching full analysis, and avoiding repeated end-to-end runs when only a small input set has changed. Keep a record of significant processing runs and their purpose so that the delivery team can explain and control consumption.

Do not rely on historic cost estimates for planning or approval. Provider pricing, model availability and token usage can change; use current organisation-approved pricing information.

## Model selection

Choose a model that is approved for the project and proportionate to the task.

| Task type                                    | Selection consideration                                                                    |
| -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Routine curation and standard analysis       | A mid-tier model may provide an appropriate balance of quality, speed and cost.            |
| Complex or high-risk analysis                | A higher-capability model may be justified where evidence quality is especially important. |
| High-volume, straightforward transformations | Prefer a capable but cost-effective option, then sample and review outputs for quality.    |

Model names, capabilities, pricing and availability change over time. Confirm the current options with the provider documentation and organisational AI-tooling guidance before making a project-wide choice.

## Troubleshooting

| Situation                                                    | Action                                                                                                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Content curation does not finish for a large number of files | Process the work in smaller, resumable batches. Preserve completed outputs and verify the expected output count before moving to analysis. |
| A Mermaid diagram does not render                            | Validate the affected output, correct the syntax and rerun the page or output validation.                                                  |
| An analysis agent stops before completion                    | Rerun the analysis from the original inputs. Review the regenerated output for completeness before accepting it.                           |
| A plugin or extension is unavailable                         | Check its installation and configuration, then start a new AI assistant session so configuration changes can be recognised.                |
| Generated output is incomplete or inaccurate                 | Return to the relevant source material, improve the inputs or evidence, rerun the affected stage and repeat human review.                  |

For issues that affect information security, personal data, source-code access or operational safety, stop automated processing and follow the appropriate project escalation route.
