---
layout: "@lap/layouts/BaseLayout.astro"
title: "Agent Catalogue"
order: 5
---

# Agent Catalogue

## On This Page

- [Sensitive Code Scanner (Copilot Agent)](#sensitive-code-scanner-copilot-agent)

## Sensitive Code Scanner (Copilot Agent)

| Field                       | Details                                                                                                                                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| What It Is                  | A chat-based helper that runs LAP PII Screener checks from within VS Code using plain language prompts.                                                                                                |
| Who Can Access It           | Teams using GitHub Copilot Chat with the custom agent file installed.                                                                                                                                  |
| How To Access It            | 1. Install the agent definition in your workspace or VS Code user prompts.<br>2. Open Copilot Chat.<br>3. Select Sensitive Code Scanner from the agent picker.<br>4. Ask for a scan in plain language. |
| How It Works (Process Flow) | 1. Locates scanner CLI.<br>2. Identifies target path.<br>3. Runs scan with selected options.<br>4. Returns summary and remediation priorities.                                                         |
| What It Produces            | Chat summary of findings and optional report files.                                                                                                                                                    |
| Governance and Approval     | Same governance rules as direct CLI use apply, including safe handling of reports with sensitive content.                                                                                              |
| Ownership and Support       | Repository maintainers and project support channels.                                                                                                                                                   |
| Reuse Guidance              | Best for teams that prefer guided, conversational workflows over command-line usage.                                                                                                                   |
| Status                      | Published                                                                                                                                                                                              |
