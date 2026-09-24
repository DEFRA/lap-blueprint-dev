---
layout: "@lap/layouts/BaseLayout.astro"
title: Frequently asked questions
navLabel: FAQs
order: 6
fullWidth: true
---

# Frequently asked questions

## Get help and give feedback

The AI Modernisation (AIM) Blueprint is looked after by the LAP AI Enablement Team at Defra. Each page and agent also has a named owner who keeps it up to date. Anyone in government can contact us.

### Ask a question or report a problem

Email [LAP-AIEnablement@defra.gov.uk](mailto:LAP-AIEnablement@defra.gov.uk). Tell us:

- which page or agent your question is about
- what you need help with
- which department or organisation you work for

We aim to reply within 5 working days. If we cannot answer your question, we will pass it to the page owner and let you know.

### Give feedback

Tell us if something is wrong, out of date or hard to understand. We review all feedback every 2 weeks and use it to improve the Blueprint. We add common questions to this page.

<details>
<summary>

## What is the AIM Blueprint?

</summary>

The AIM Blueprint is a practical framework that supports teams in modernising legacy applications. It brings together processes, playbooks, standards, and AI-assisted guidance to help teams at every stage of the modernisation journey.

</details>

<details>
<summary>

## Who is the AIM Blueprint for?

</summary>

The AIM Blueprint is intended for delivery teams involved in legacy application modernisation, including product managers, delivery managers, architects, engineers, business analysts, and stakeholders.

</details>

<details>
<summary>

## What are the main benefits of using the AIM Blueprint?

</summary>

The AIM Blueprint helps teams:

- Reduce delivery risk
- Accelerate modernisation activities
- Improve consistency and quality
- Reuse proven approaches and standards
- Make effective use of AI-assisted tooling
- Create better outcomes for users and stakeholders

</details>

<details>
<summary>

## Do I need to follow the entire AIM Blueprint?

</summary>

No. The AIM Blueprint is designed to be flexible. Teams can use individual guidance, playbooks, or lifecycle stages independently, depending on their project's needs.

</details>

<details>
<summary>

## Does the AIM Blueprint replace existing delivery methodologies?

</summary>

No. The AIM Blueprint complements existing delivery approaches such as Agile, Scrum, Kanban, and government delivery frameworks by providing modernisation-specific guidance.

</details>

<details>
<summary>

## Can the AIM Blueprint be used for applications of any size?

</summary>

Yes. The guidance can be applied to small applications, large enterprise platforms, or portfolios of systems. Teams should tailor the approach proportionally to the complexity and risk of the application.

</details>

<details>
<summary>

## When should I start using the AIM Blueprint?

</summary>

The AIM Blueprint should be used as early as possible, ideally during discovery or assessment activities, to help teams understand the current application landscape and plan modernisation effectively.

</details>

<details>
<summary>

## How do I know which guidance to use first?

</summary>

If you are new to the AIM Blueprint, begin with the introductory guidance and delivery lifecycle content. From there, follow the guidance relevant to your current phase of modernisation.

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

## What is the difference between legacy code analysis and modern rebuild?

</summary>

Legacy code analysis focuses on understanding the existing application and generating evidence-based requirements and documentation. Modern rebuild focuses on designing, building, testing, and deploying a modern replacement solution.

</details>

<details>
<summary>

## How can AI help with legacy application modernisation?

</summary>

AI can accelerate activities such as application discovery, legacy application analysis, requirements analysis, documentation creation, code understanding, and migration planning. Human review and validation remain essential throughout the process.

</details>

<details>
<summary>

## Is AI-generated output always accurate?

</summary>

No. AI-generated content should be treated as a draft or starting point. Teams must review, validate, and approve all outputs before they are used for decision-making or implementation.

</details>

<details>
<summary>

## How do I register a LAP AI artefact in the directory?

</summary>

Follow [How to add your LAP AI artefacts to our Artefact Directory](../delivery-management/ai-directory-contribution/) and browse the [Artefact Directory](../artefact-directory/) for existing definitions.

</details>

<details>
<summary>

## Where can I get support or provide feedback?

</summary>

Feedback is encouraged and helps improve the AIM Blueprint. Use the project's feedback channels, repository, or contact routes to suggest improvements, report issues, or share lessons learned.

</details>

<details>
<summary>

## Can I use the Blueprint if I do not work in Defra?

</summary>

Yes. The Blueprint is written for Defra but anyone in government can use it. All content is available under the Open Government Licence v3.0, unless stated otherwise. Some pages describe processes that only apply to Defra, such as getting access to Defra systems. These pages say so at the top.

</details>

<details>
<summary>

## Does 'approved' mean my department has approved these tools?

</summary>

No. Approved means approved for use in Defra. Before you use any AI tool or agent, check your own department's policies and follow the [AI Playbook for the UK Government](https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government).

</details>

<details>
<summary>

## Who looks after the AIM Blueprint?

</summary>

The LAP AI Enablement Team at Defra owns the Blueprint as a whole. Each page and agent also has a named owner who keeps it accurate. If you are not sure who to ask, email [LAP-AIEnablement@defra.gov.uk](mailto:LAP-AIEnablement@defra.gov.uk).

</details>

<details>
<summary>

## Can I contribute if I do not work in Defra?

</summary>

Yes. Follow [How to contribute to the AIM Blueprint](~/delivery-management/blueprint-contribution/). You do not need Defra GitHub access.

</details>

<details>
<summary>

## How do I suggest new content or report something out of date?

</summary>

Email [LAP-AIEnablement@defra.gov.uk](mailto:LAP-AIEnablement@defra.gov.uk). You can check whether it is already planned on the [Blueprint content roadmap](~/delivery-management/content-roadmap/).

</details>

<details>
<summary>

## How do I share my project's artefacts?

</summary>

Follow [How to publish your project artefacts](~/delivery-management/project-artefact-publication/). It explains how to remove sensitive information, choose who can see your artefacts and get them approved.

</details>

<details>
<summary>

## How do I ask for a change to an agent or report a problem with one?

</summary>

Raise an issue in the [DEFRA AI config examples repository](https://github.com/DEFRA/defra-ai-config-examples). See [How to add your LAP AI artefacts to our Artefact Directory](~/delivery-management/ai-directory-contribution/) for how changes to agents are managed.

</details>
