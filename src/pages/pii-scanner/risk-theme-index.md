---
layout: "@lap/layouts/BaseLayout.astro"
title: "Risk Theme Index"
order: 7
---

# Risk Theme Index

This index mirrors the blueprint cross-reference mechanism by tagging content against common delivery risk themes, rather than creating a separate disconnected tracker.

## On This Page

- [R-01: Tool readiness and onboarding delay](#r-01-tool-readiness-and-onboarding-delay)
- [R-02: Hidden PII and secret exposure](#r-02-hidden-pii-and-secret-exposure)
- [R-03: Poor visibility and weak audit evidence](#r-03-poor-visibility-and-weak-audit-evidence)
- [R-04: Unsafe remediation and accidental code impact](#r-04-unsafe-remediation-and-accidental-code-impact)
- [R-05: Delivery disruption due to failed remediation](#r-05-delivery-disruption-due-to-failed-remediation)
- [R-06: Regulatory misalignment](#r-06-regulatory-misalignment)

## R-01: Tool readiness and onboarding delay

- [Processes P-001](../processes/#p-001-how-to-set-up-the-scanner-for-a-project)
- [PB-001](../playbooks/#pb-001-legacy-application-risk-triage-playbook)

## R-02: Hidden PII and secret exposure

- [Processes P-002](../processes/#p-002-how-to-run-a-baseline-sensitive-data-scan)
- [Standards S-001](../standards/#s-001-mandatory-sensitive-data-scan-before-ai-or-release-use), [Standards S-003](../standards/#s-003-controlled-handling-of-reports-containing-raw-sensitive-values)
- [Tool Catalogue](../tool-catalogue/): Gitleaks, Presidio-Based PII Scanner

## R-03: Poor visibility and weak audit evidence

- [Processes P-003](../processes/#p-003-how-to-produce-and-share-decision-ready-reports)
- [Standards S-002](../standards/#s-002-high-and-critical-findings-need-explicit-ownership)
- [PB-002](../playbooks/#pb-002-pre-release-compliance-readiness-playbook)

## R-04: Unsafe remediation and accidental code impact

- [Processes P-004](../processes/#p-004-how-to-obfuscate-sensitive-values-safely)
- [Standards S-004](../standards/#s-004-reversible-remediation-is-required-for-automated-replacements)
- [Tool Catalogue](../tool-catalogue/): Obfuscation Engine

## R-05: Delivery disruption due to failed remediation

- [Processes P-005](../processes/#p-005-how-to-roll-back-and-recover-quickly)
- [PB-001](../playbooks/#pb-001-legacy-application-risk-triage-playbook)
- [PB-002](../playbooks/#pb-002-pre-release-compliance-readiness-playbook)

## R-06: Regulatory misalignment

- [Standards S-005](../standards/#s-005-regulatory-mapping-must-be-maintained)
- [Reusable Assets](../reusable-assets/): Regulatory Mapping Configuration
