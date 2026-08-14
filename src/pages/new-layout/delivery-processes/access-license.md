---
layout: "@lap/layouts/BaseLayout.astro"
phase: alpha
title: How to access default tools and license
order: 4
---

# How to access default tools and licens

**Title:** How to access default tools and licens

**What You're Trying To Do:**
Use this information to learn about how to access default tools and license

**Who This Is For:**
Ai Artefact Developers, Suppliers who are responsible for building Agentic Works, delivery leads, engineers, and anyone who is responsible for developing or using AI Definitions (Agents, Prompts, Instructions, Skills etc...) before modernisation and AI-assisted workflows begin.

Use this link to view the current state of AI tools available within DEFRA, including guidance on approved tools and how to request access.

AI Tools Radar Diagram : https://digital.defra.gov.uk/ai-toolkit/tools/diagram

## Github Copilot Request Access Information

A project, programme or delivery team that needs GitHub Copilot licences should follow the existing Cloud Centre of Excellence (CCoE) process. Please follow the link below under "Requesting GitHub Copilot licences" section for access information

see https://digital.defra.gov.uk/ai-toolkit/tools/github-copilot.

## Microsoft 365 Copilot Request Access Information

Currently, there is no information available on the AI Toolkit reference. The only guidance currently available for Microsoft 365 Copilot is through the Microsoft Copilot Community of Interest, which can be accessed using the link below,please visit this page if you are outside DDTS:

- [FULL Copilot Licences for Business Areas](https://defra.sharepoint.com/sites/mve-defra-m365copilotexperimenttrialmembersonly/SitePages/2%20M365%20Copilot%20Licences.aspx?e=N1DWgI&isSPOFile=1&TeamsCID=ea9c3f99-0144-4970-b070-a9310b6c0600&OR=Teams-HL&CT=1783439164966)

Full Copilot Licence for DDTS (if you are DDTS Staff only):

- [Full Copilot for DDTS](https://defra.sharepoint.com/:u:/r/teams/Team177/SitePages/Full-Copilot-for-DDTS.aspx?d=w13f94698414e47b69b31b16d3175a4ec&csf=1&web=1&e=MceRBw&isSPOFile=1)


## Claude Code Governance and Assurance

### Supplier Owned Claude Code Licences

Suppliers may use their own Claude Code licences and devices, provided they comply with DEFRA's existing AI, security and data-handling guidance.

This aligns with the existing DEFRA position that the determining factor is **not the AI tool itself**, but the **classification and sensitivity of the information, data, or code being processed**.

- see <https://digital.defra.gov.uk/ai-toolkit/guidance/using-data-with-ai>
- see <https://digital.defra.gov.uk/ai-toolkit/guidance/keeping-data-safe>

### Legacy Application Source Code

- Any PII or personal data has been identified and removed prior to processing.
- No credentials, secrets, connection strings, or sensitive configuration information are exposed.
- The source code is **not** classified as **OFFICIAL-SENSITIVE**, **SECRET**, or **TOP SECRET**.
- Generated outputs continue to pass normal security assurance such vulnerability testing and ITHC activities before deployment. 
- Adheres to following guidance:
  see https://digital.defra.gov.uk/ai-toolkit/guidance/using-data-with-ai
  see https://digital.defra.gov.uk/ai-toolkit/guidance/keeping-data-safe

### US-Based Inference Models

The guidance from AI Toolkit is quite straight forward. The inference model location, source code whether it is legacy or not is irrelevant for data that is below Offical Sensitive. https://digital.defra.gov.uk/ai-toolkit

Also given that Anthropic's Claude inference models currently operate outside the UK/EU and are predominantly hosted within the US, if EU-based inference models are required, suppliers could potentially utilise Claude models through platforms such as **AWS Bedrock**, which should provide an EU-hosted inference option.

## Get help with GitHub Copilot

Ask the AI Capability and Enablement team about setup, security or how to get the most out of it.

Email: AICapabilityAndEnablement@defra.gov.uk