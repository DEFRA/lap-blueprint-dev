---
layout: "@lap/layouts/BaseLayout.astro"
title: Frequently Asked Questions
order: 1
---

# Frequently Asked Questions

<details>
<summary>How do I get a GitHub Copilot license or access approved AI tools?</summary>

[How to access default tools and license](../delivery-processes/access-license/) explains how to get a GitHub Copilot licence and access approved AI tools. You can then check [AICE AI Toolkit Links](../standards-patterns-and-templates/standards/ai-tooling-standards/) for approved tooling and practical references.

</details>

<details>
<summary>How do I register a LAP AI agent in the directory?</summary>

Follow [How to add your LAP AI Agent to our LAMAI's AI Directory](../ai-catalogue/ai-directory-contribution/) and browse the [AI Directory](../ai-catalogue/ai-directory/) for existing definitions.

</details>

<details>
<summary>Do I need to run the PII Screener before using AI tooling on source code?</summary>

Yes. Source code must be scanned for PII and secrets before it is used with AI-assisted tools or shared outside the current team. See [PII scanning](./delivery-processes/pii-scanning/) for an overview of the tool and how to run it.

</details>

<details>
<summary>What should I do if the scanner finds PII or secrets?</summary>

Review the findings by severity. For any High or Critical findings you should stop sharing the code or using it with AI tooling until they are resolved. The tool includes an interactive obfuscation workflow that lets you review, preview, and apply replacements file by file, with rollback support. See the [obfuscation guide](https://github.com/DEFRA/lap-pii-screener/blob/main/docs/guides/obfuscation.md) for step-by-step instructions.

</details>

<details>
<summary>How do I get hold of the source code for a legacy application?</summary>

Source code acquisition is a multi-phase process: you need to identify the application owner, confirm the code is in scope, obtain business and supplier approvals, arrange secure transfer, and get IAO sign-off before modernisation work can begin. See [Source code acquisition](./delivery-processes/source-code-acquisition/) for the full process and approval routes.

</details>

<details>
<summary>How do I get a supplier connected to the DEFRA network?</summary>

DEFRA uses OpenVPN to give approved supplier personnel a secure, encrypted connection from their own devices into DEFRA networks. Each supplier user needs to be onboarded individually. See [Open VPN Access](./delivery-processes/open-vpn/) for the prerequisites, request steps, and first-time connection guidance.

</details>

<details>
<summary>How do I request a sandbox environment for a LAP project?</summary>

Sandbox environments are provisioned by DEFRA's Cloud Centre of Excellence (CCoE) via a ServiceNow catalogue request. Before you start, make sure you have a valid LAP project code and that your technical lead can define the environment's required components. See [Sandbox Provisioning](./delivery-processes/sandbox-provisioning/) for the full request process and what to prepare upfront.

</details>

<details>
<summary>How do I get GitHub access for my team?</summary>

Before requesting access to the DEFRA GitHub organisation, each user must have two-factor authentication enabled and their full name set on their GitHub account. Access is then granted either as organisation membership or as an outside collaborator for specific repositories. See [GitHub Access](./delivery-processes/github-access/) for the account requirements and access routes.

</details>

<details>
<summary>How do I get a supplier access to a DEFRA-managed desktop?</summary>

Azure Virtual Desktop (AVD) gives approved supplier users a DEFRA-managed desktop hosted in Azure, rather than accessing DEFRA systems directly from their own devices. This is the preferred route when suppliers need access to DEFRA applications and services rather than just network connectivity. See [Azure Virtual Desktop Access](./delivery-processes/azure-virtual-desktop-access/) for the request and provisioning flow.

</details>

<details>
<summary>How do I check that a project environment is ready before delivery starts?</summary>

Before modernisation delivery begins, a number of environment and access prerequisites need to be in place across the team and tooling. See [Environment Readiness](./delivery-processes/environment-readiness/) for the checks and steps to work through.

</details>
