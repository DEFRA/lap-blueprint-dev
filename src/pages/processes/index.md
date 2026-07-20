---
layout: "@lap/layouts/BaseLayout.astro"
title: "Processes"
group: "Blueprint"
order: 1
---

# Purpose

Use this index to choose the right process before sharing source code, using AI tooling, or moving toward release.

## Processes

| Process                                                                            | When to follow this process                                                                                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [P-001: Check source code for PII](./p-001-scan-code-for-pii/)                     | Follow this first whenever code may be shared, used in AI-assisted workflows, or reviewed for release readiness, and you need a clear risk decision from scan results. |
| [P-002: Remove or obfuscate PII and revalidate](./p-002-obfuscate-and-revalidate/) | Follow this after P-001 finds sensitive data or secrets, so you can remediate safely, rescan, and confirm the code is clear before proceeding.                         |
| [P-003: Access to sandbox](./p-003-access-to-sandbox-envrionment/) | Follow this to get access to a sandbox environment. |
