---
layout: "@lap/layouts/BaseLayout.astro"
title: How to access default tools and licences
order: 4
---

# How to access default tools and licences

Request access to DEFRA-approved AI tools for modernisation work, including GitHub Copilot, Microsoft 365 Copilot, and Claude Code. Follow the governance requirements for using Claude Code with legacy application source code.

## What you're trying to do

You need to obtain licences and access to the default AI tools used in DEFRA modernisation workflows before delivery begins.

## Who this is for

Primary audience:

- an AI artefact developer or engineer responsible for building agentic works
- a delivery lead coordinating tool access for a project team
- a supplier involved in AI-assisted modernisation workflows
- anyone responsible for developing or using AI definitions (agents, prompts, instructions, or skills)

## Available AI tools

The [AI Tools Radar](https://digital.defra.gov.uk/ai-toolkit/tools/diagram) shows all tools across three adoption tiers:

- **Using** — actively adopted across DEFRA teams
- **Trialling** — being evaluated and piloted
- **Exploring** — under investigation, not yet recommended for general use

For a full list of tools in each tier, see the [AI Toolkit tools catalogue](https://digital.defra.gov.uk/ai-toolkit/tools).

## GitHub Copilot

A project, programme, or delivery team that needs GitHub Copilot licences should follow the existing Cloud Centre of Excellence (CCoE) process:

1. Request an Azure subscription service code through [New Cloud Business Service/Application Registration](https://defra.sharepoint.com/:l:/s/def-ddts-cloud/FBGK86cyBo5PqWkyhE6U6J0B7Uw9ZoSO7feq3S9sCoypRg?nav=MTZhNDM5MjgtNmNkZC00ZDk3LTgzNmQtYjc0ZGNhOWE1OWUy).
2. Raise a [CCoE Azure/AWS Non-Production Service Request](https://defragroup.service-now.com/esc?id=sc_cat_item&sys_id=cedac95b1b224510adf0eb53b24bcb63&table=sc_cat_item) in MyPortal to create a new GitHub cost centre linked to the service code. Include the Azure subscription service code and the GitHub handle of each person who needs a licence in the description field.

See the [GitHub Copilot guidance on the AI Toolkit](https://digital.defra.gov.uk/ai-toolkit/tools/github-copilot) for the full process and usage guidance.

### Get help with GitHub Copilot

Ask the AI Capability and Enablement team about setup, security, or how to get the most out of it.

Email: [AICapabilityAndEnablement@defra.gov.uk](mailto:AICapabilityAndEnablement@defra.gov.uk)

## Microsoft 365 Copilot

Current guidance for Microsoft 365 Copilot is available through the Microsoft Copilot Community of Interest:

- [Full Copilot licences for business areas](https://defra.sharepoint.com/sites/mve-defra-m365copilotexperimenttrialmembersonly/SitePages/2%20M365%20Copilot%20Licences.aspx?e=N1DWgI&isSPOFile=1&TeamsCID=ea9c3f99-0144-4970-b070-a9310b6c0600&OR=Teams-HL&CT=1783439164966) — for teams outside DDTS
- [Full Copilot for DDTS](https://defra.sharepoint.com/:u:/r/teams/Team177/SitePages/Full-Copilot-for-DDTS.aspx?d=w13f94698414e47b69b31b16d3175a4ec&csf=1&web=1&e=MceRBw&isSPOFile=1) — for DDTS staff only

## Claude Code

### Supplier-owned licences

Suppliers may use their own Claude Code licences and devices, provided they comply with DEFRA's existing AI, security, and data-handling guidance.

This aligns with the existing DEFRA position that the determining factor is **not the AI tool itself**, but the **classification and sensitivity of the information, data, or code being processed**. The default position is:

- **OFFICIAL** data — permitted with a public consumer tool such as Claude Code, provided privacy settings are on (model training and chat history disabled)
- **OFFICIAL-SENSITIVE** — not permitted in a public consumer tool; use only within an approved enterprise or Defra-hosted platform
- **Personal data** — must be removed before processing; a DPIA is required if building a service designed to process it
- **SECRET or above** — never permitted in any AI tool

For the full data classification matrix, see [Using data with AI](https://digital.defra.gov.uk/ai-toolkit/guidance/using-data-with-ai) and [Keeping data safe](https://digital.defra.gov.uk/ai-toolkit/guidance/keeping-data-safe).

### Legacy application source code

Before using Claude Code with legacy application source code, confirm that all of the following apply:

- Any PII or personal data has been identified and removed prior to processing.
- No credentials, secrets, connection strings, or sensitive configuration information are exposed.
- The source code is **not** classified as **OFFICIAL-SENSITIVE**, **SECRET**, or **TOP SECRET**.
- Generated outputs will continue to pass normal security assurance such as vulnerability testing and ITHC activities before deployment.

Refer to the [using data with AI](https://digital.defra.gov.uk/ai-toolkit/guidance/using-data-with-ai) and [keeping data safe](https://digital.defra.gov.uk/ai-toolkit/guidance/keeping-data-safe) guidance before processing.

### US-based inference models

The [AI Toolkit guidance](https://digital.defra.gov.uk/ai-toolkit) is clear: the inference model location and whether the source code is legacy are irrelevant for data classified below OFFICIAL-SENSITIVE.

Anthropic's Claude inference models currently operate outside the UK/EU and are predominantly hosted in the US. If EU-based inference is required, suppliers could utilise Claude models through platforms such as **AWS Bedrock**, which provides an EU-hosted inference option.
