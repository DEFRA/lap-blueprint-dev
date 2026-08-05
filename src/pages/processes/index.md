---
layout: "@lap/layouts/BaseLayout.astro"
title: "Processes"
group: "Blueprint"
order: 1
---

# Purpose

Use this index to choose the right process before sharing source code, using AI tooling, or moving toward release.

## Processes

| Process                                                                                        | When to follow this process                                                                                                                                            |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [P-001: Check source code for PII](./p-001-scan-code-for-pii/)                                 | Follow this first whenever code may be shared, used in AI-assisted workflows, or reviewed for release readiness, and you need a clear risk decision from scan results. |
| [P-002: Remove or obfuscate PII and revalidate](./p-002-obfuscate-pii-and-revalidate/)         | Follow this after P-001 finds sensitive data or secrets, so you can remediate safely, rescan, and confirm the code is clear before proceeding.                         |
| [P-003: Prepare source code for modernisation](./p-003-prepare-source-code-for-modernisation/) | Follow this when onboarding legacy source into LAP so code is screened, approved, version-controlled, and ready for modernisation work.                                |
| [P-004: How to add your LAP AI Artefacts to our LAMAI's Agent Directory](./p-004-register-lap-ai-definitions/) | Follow this when need to to add your LAP AI Artefacts and Artefacts to the LAMAI's Agent Directory.   
| [P-010: Access to sandbox](./p-010-access-to-sandbox-environment/)                             | Follow this to get access to a sandbox environment.                                                                                                                    |
