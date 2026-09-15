---
layout: "@lap/layouts/BaseLayout.astro"
title: Frequently Asked Questions
navLabel: FAQs
order: 6
fullWidth: true
---

# Frequently Asked Questions

<details>
<summary>

## What is the LAMAI Blueprint?

</summary>

The LAMAI Blueprint is a practical framework that supports teams in modernising legacy applications. It brings together processes, playbooks, standards, and AI-assisted guidance to help teams at every stage of the modernisation journey.

</details>

<details>
<summary>

## Who is the LAMAI Blueprint for?

</summary>

The LAMAI Blueprint is intended for delivery teams involved in legacy application modernisation, including product managers, delivery managers, architects, engineers, business analysts, and stakeholders.

</details>

<details>
<summary>

## What are the main benefits of using the LAMAI Blueprint?

</summary>

The LAMAI Blueprint helps teams:

- Reduce delivery risk
- Accelerate modernisation activities
- Improve consistency and quality
- Reuse proven approaches and standards
- Make effective use of AI-assisted tooling
- Create better outcomes for users and stakeholders

</details>

<details>
<summary>

## Do I need to follow the entire LAMAI Blueprint?

</summary>

No. The LAMAI Blueprint is designed to be flexible. Teams can use individual guidance, playbooks, or lifecycle stages independently, depending on their project's needs.

</details>

<details>
<summary>

## Does the LAMAI Blueprint replace existing delivery methodologies?

</summary>

No. The LAMAI Blueprint complements existing delivery approaches such as Agile, Scrum, Kanban, and government delivery frameworks by providing modernisation-specific guidance.

</details>

<details>
<summary>

## Can the LAMAI Blueprint be used for applications of any size?

</summary>

Yes. The guidance can be applied to small applications, large enterprise platforms, or portfolios of systems. Teams should tailor the approach proportionally to the complexity and risk of the application.

</details>

<details>
<summary>

## When should I start using the LAMAI Blueprint?

</summary>

The LAMAI Blueprint should be used as early as possible, ideally during discovery or assessment activities, to help teams understand the current application landscape and plan modernisation effectively.

</details>

<details>
<summary>

## How do I know which guidance to use first?

</summary>

If you are new to the LAMAI Blueprint, begin with the introductory guidance and delivery lifecycle content. From there, follow the guidance relevant to your current phase of modernisation.

</details>

<details>
<summary>

## How do I get a supplier connected to the Defra network?

</summary>

Defra uses OpenVPN to give approved supplier personnel a secure, encrypted connection from their own devices into Defra networks. Each supplier user needs to be onboarded individually. See [Open VPN Access](../delivery-management/open-vpn/) for the prerequisites, request steps, and first-time connection guidance.

</details>

<details>
<summary>

## How do I get a supplier access to a Defra-managed desktop?

</summary>

Azure Virtual Desktop (AVD) gives approved supplier users a Defra-managed desktop hosted in Azure, rather than accessing Defra systems directly from their own devices. This is the preferred route when suppliers need access to Defra applications and services rather than just network connectivity. See [Azure Virtual Desktop Access](../delivery-management/azure-virtual-desktop-access/) for the request and provisioning flow.

</details>

<details>
<summary>

## How do I get GitHub access for my team?

</summary>

Before requesting access to the Defra GitHub organisation, each user must have two-factor authentication enabled and their full name set on their GitHub account. Access is then granted either as organisation membership or as an outside collaborator for specific repositories. See [GitHub Access](../delivery-management/github-access/) for the account requirements and access routes.

</details>

<details>
<summary>

## How do I get a GitHub Copilot license or access approved AI tools?

</summary>

[How to access default tools and license](../delivery-management/access-license/) explains how to get a GitHub Copilot licence and access approved AI tools. You can then check [AICE AI Toolkit Links](../standards-and-templates/ai-tooling-standards/) for approved tooling and practical references.

</details>

<details>
<summary>

## How do I request a sandbox environment for a LAP project?

</summary>

Sandbox environments are provisioned by Defra's Cloud Centre of Excellence (CCoE) via a ServiceNow catalogue request. Before you start, make sure you have a valid LAP project code and that your technical lead can define the environment's required components. See [Sandbox Provisioning](../delivery-management/sandbox-provisioning/) for the full request process and what to prepare upfront.

</details>

<details>
<summary>

## How do I get hold of the source code for a legacy application?

</summary>

Source code acquisition is a multi-phase process: you need to identify the application owner, confirm the code is in scope, obtain business and supplier approvals, arrange secure transfer, and get IAO sign-off before modernisation work can begin. See [Source code acquisition](../delivery-management/source-code-acquisition/) for the full process and approval routes.

</details>

<details>
<summary>

## Do I need to run the PII Screener before using AI tooling on source code?

</summary>

Yes. Source code must be scanned for PII and secrets before it is used with AI-assisted tools or shared outside the current team. See [PII scanning](../delivery-management/pii-scanning/) for an overview of the tool and how to run it.

</details>

<details>
<summary>

## What should I do if the scanner finds PII or secrets?

</summary>

Review the findings by severity. For any High or Critical findings you should stop sharing the code or using it with AI tooling until they are resolved. The tool includes an interactive obfuscation workflow that lets you review, preview, and apply replacements file by file, with rollback support. See the [obfuscation guide](https://github.com/DEFRA/lap-pii-screener/blob/main/docs/guides/obfuscation.md) for step-by-step instructions.

</details>

<details>
<summary>

## What is the difference between Reverse Engineering and Re-Engineering?

</summary>

Reverse Engineering focuses on understanding the existing application and generating evidence-based requirements and documentation. Re-Engineering focuses on designing, building, testing, and deploying a modern replacement solution.

</details>

<details>
<summary>

## How can AI help with legacy application modernisation?

</summary>

AI can accelerate activities such as application discovery, reverse engineering, requirements analysis, documentation creation, code understanding, and migration planning. Human review and validation remain essential throughout the process.

</details>

<details>
<summary>

## Is AI-generated output always accurate?

</summary>

No. AI-generated content should be treated as a draft or starting point. Teams must review, validate, and approve all outputs before they are used for decision-making or implementation.

</details>

<details>
<summary>

## How do I register a LAP AI agent in the directory?

</summary>

Follow [How to add your LAP AI Agent to our LAMAI's AI Directory](../delivery-management/ai-directory-contribution/) and browse the [AI Directory](../ai-catalogue/) for existing definitions.

</details>

<details>
<summary>

## Where can I get support or provide feedback?

</summary>

Feedback is encouraged and helps improve the LAMAI Blueprint. Use the project's feedback channels, repository, or contact routes to suggest improvements, report issues, or share lessons learned.

</details>
