---
layout: "@lap/layouts/BaseLayout.astro"
title: "Playbooks"
order: 2
---

# Playbooks

This page consolidates all playbooks into a single page.

## On This Page

- [PB-001: Legacy Application Risk Triage Playbook](#pb-001-legacy-application-risk-triage-playbook)
- [PB-002: Pre-Release Compliance Readiness Playbook](#pb-002-pre-release-compliance-readiness-playbook)

## PB-001: Legacy Application Risk Triage Playbook

### Primary Audience

Project managers, product owners, engineering leads.

### What This Covers End-to-End

This playbook connects setup, scanning, reporting, and remediation into one delivery flow for legacy application modernization. It helps teams quickly identify risk, prioritize actions, and produce evidence for governance.

### Stages

1. Prepare the scanner environment: [Processes P-001](../processes/#p-001-how-to-set-up-the-scanner-for-a-project).
2. Run baseline scan and capture findings: [Processes P-002](../processes/#p-002-how-to-run-a-baseline-sensitive-data-scan).
3. Generate stakeholder-friendly report pack: [Processes P-003](../processes/#p-003-how-to-produce-and-share-decision-ready-reports).
4. Obfuscate approved sensitive values: [Processes P-004](../processes/#p-004-how-to-obfuscate-sensitive-values-safely).
5. Roll back if required and re-validate: [Processes P-005](../processes/#p-005-how-to-roll-back-and-recover-quickly).

### Governance Guardrails

- Do not treat a project as AI-ready until a baseline sensitive data scan is complete.
- Do not apply bulk obfuscation without retaining backup and rollback options.
- High and critical findings must have an owner and target resolution date.

### Common Pitfalls

- Running scans without agreeing report format and audience first.
- Sharing reports with full sensitive values by mistake.
- Approving replacements too quickly without checking business impact.

### Status

Published

## PB-002: Pre-Release Compliance Readiness Playbook

### Primary Audience

Product owners, release managers, governance teams.

### What This Covers End-to-End

This playbook supports release-go/no-go decisions by combining scan evidence, remediation outcomes, and final checks in one repeatable path.

### Stages

1. Re-run full scan on release candidate: [Processes P-002](../processes/#p-002-how-to-run-a-baseline-sensitive-data-scan).
2. Generate release evidence reports: [Processes P-003](../processes/#p-003-how-to-produce-and-share-decision-ready-reports).
3. Complete targeted obfuscation and validation where required: [Processes P-004](../processes/#p-004-how-to-obfuscate-sensitive-values-safely).
4. Verify rollback readiness and backup retention: [Processes P-005](../processes/#p-005-how-to-roll-back-and-recover-quickly).
5. Sign off release risk posture against standards: [Standards](../standards/).

### Governance Guardrails

- No unresolved critical finding should pass into release without formal risk acceptance.
- Evidence artifacts must be stored in the project record.

### Common Pitfalls

- Treating one clean scan as permanently valid.
- Missing the final re-scan after remediation.
- Inconsistent reporting across delivery teams.

### Status

Published
