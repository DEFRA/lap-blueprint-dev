---
layout: "@lap/layouts/BaseLayout.astro"
title: How to add your LAP AI artefacts to our Artefact Directory
order: 13
group: Reuse and contribution
---

# How to add your LAP AI artefacts to our Artefact Directory

The Artefact Directory provides a trusted catalogue of AI agents, skills, prompts, accelerators, templates, and supporting artefacts that can be reused across Defra and, where appropriate, the wider government. To maintain quality, consistency, and security, all submissions must follow the review and assurance process set out below.

## Purpose

The review and assurance process ensures that:

- Artefacts are accurate, reusable, and appropriately documented.
- Content aligns with Defra standards, governance, and best practice.
- Security, compliance, and intellectual property considerations are assessed.
- Users can be confident that published artefacts have been reviewed and approved.
- The Artefact Directory remains a trusted source of governed AI assets.

## Prerequisites

Please proceed with the links and resources below to first make sure your AI Artefacts are compliant with Defra standards

<details>
<summary>Does your AI Agent conform to these Defra standards?</summary>

Before adding a LAP-specific AI Agent to the Artefact Directory, the agent and its supporting solution must comply with Defra’s AI Agent Playbook standards and governance requirements.

This includes demonstrating that the agent has been designed using the appropriate AI approach, completed the required AI readiness and assurance checks, follows Defra’s Responsible Design Principles, adheres to the Technical Delivery Guidance, and has appropriate governance, ownership, risk management, and oversight arrangements in place.

Teams are responsible for ensuring their agent is lawful, secure, ethical, transparent, and subject to meaningful human oversight before it is registered within the Artefact Directory. Evidence of compliance with these requirements should be available as part of the onboarding and approval process.

**Required Defra Guidance**

This below resource could be used to conform to Defra software development standards and generally good coding standards that comply with DDTS code quality standards etc.

- [Software Development Standards](https://defra.github.io/software-development-standards/guides/github_copilot/)

The following guidance documents could also be reviewed and adhered to:

- [Right Approach](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/right-approach.md)
- [AI Checklist](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/ai-checklist.md)
- [Responsible Design Principles](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/responsible-design-principles.md)
- [Technical Delivery Guidance](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/technical-delivery-guidance.md)
- [Governance and Oversight](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/governance-oversight.md)

These standards must be reviewed and satisfied prior to submitting a LAP AI Agent for inclusion in the Artefact Directory.

</details>

## Review and assurance process

<details><summary>

### 1. Clone the repository

</summary>

Clone the [DEFRA AI config examples repository](https://github.com/DEFRA/defra-ai-config-examples). If you are not already a contributor, you will first need to fork the repository and clone your fork instead.

When you are adding your content to this repository you must place the content in the appropriate places.
Please make sure **default.html** is updated so navigation updates could take place for your definitions:

```ascii
Agents
├── ...
└── LAP Implementations
    ├── GitHub Copilot
    ├────── your agents links to the correct file
    ├── Claude
    ├── Speckit
    ├── OpenAI
    └── Other
```

3.2 Follow existing folder structure in the repository to place your agents

```ascii
Agents
├── ...
  ├── lap-gitHub-copilot
  ├────── your agents files go here
  ├── lap-claude
  ├── lap-speckit
  ├── lap-openAI
  └── lap-other
```

**Please follow same structure in case you have other AI definitions such as Instructions, Prompts and Skills**

Any other supporting AI configuration files such as images or docs etc...should go in the repo under assets and link accordingly from your definition documentation

</details>
<details><summary>

### 2. Prepare your artefact

</summary>

Before submission, contributors should ensure the artefact includes:

- A clear name and description.
- Its intended purpose and use case.
- Any prerequisites or dependencies.
- Usage instructions.
- Relevant prompts, skills, or configuration details.
- Repository documentation, where applicable.
- Appropriate licensing and ownership information.

Contributors should also remove any sensitive, confidential, or environment-specific information prior to submission.

</details>
<details><summary>

### 3. Submit a pull request

</summary>

All new artefacts, updates, and enhancements must be submitted through a pull request (PR) to the approved repository.

The pull request should include:

- A summary of the artefact.
- Its purpose and business value.
- Any dependencies or prerequisites.
- Details of testing undertaken.
- Any known limitations or considerations.

The pull request acts as the formal review and assurance mechanism for inclusion in the Artefact Directory.
Please contact the Owners/Contributors of the [DEFRA AI config examples repository](https://github.com/DEFRA/defra-ai-config-examples) or contact the Program Manager for LAP programme or LAP-AIEnablement@defra.gov.uk to have your PR reviewed.

</details>
<details><summary>

### 4. Review and assurance

</summary>

Submitted pull requests will be reviewed by repository contributors and designated reviewers. Reviews may consider:

- Does the artefact perform its intended purpose?
- Is the documentation clear and complete?
- Can another team reuse the artefact successfully?
- No sensitive information is published.
- Content aligns with Defra security and governance requirements.
- Similar artefacts do not already exist within the directory.

</details>
<details><summary>

### 5. Approval

</summary>

Once review comments have been addressed, an approved reviewer may sign off the pull request. Approval confirms that the artefact:

- Meets minimum quality standards.
- Is suitable for publication.
- Can be shared through the Artefact Directory.

</details>
<details><summary>

### 6. Merge and publish

</summary>

Following approval:

- The pull request may be merged into the repository.
- The artefact becomes available through the Artefact Directory.
- Associated directory entries and links may be updated to reflect the latest approved version.

The Artefact Directory will generally signpost users to the approved repository location rather than storing the artefact directly.

</details>

## Ownership and approval

Every artefact must have a named owner team. The owner team:

- keeps the artefact and its documentation up to date
- responds to issues and change requests
- tells the LAP AI Enablement Team if they can no longer support it

New artefacts are approved by Defra's AI Capability and Enablement (AICE) team before they appear in the Artefact Directory.

## Versions

Give every artefact a version number in the format major.minor.patch, for example 1.2.0.

- Major (2.0.0) – a change that works differently or could affect how teams already use it
- Minor (1.3.0) – a new feature that does not affect existing use
- Patch (1.2.1) – a small fix

Record what changed in each pull request. The Artefact Directory always links to the latest approved version.

## Ask for a change or report a problem

Raise an issue in the [DEFRA AI config examples repository](https://github.com/DEFRA/defra-ai-config-examples). Say which artefact it is about, what you need and why. The owner team reviews the issue and decides whether to make the change. If you do not get a reply within 10 working days, email [LAP-AIEnablement@defra.gov.uk](mailto:LAP-AIEnablement@defra.gov.uk).

## Contributions from suppliers

Suppliers can submit new artefacts and improve existing ones. They follow the same review and assurance process as Defra teams. Suppliers must:

- submit through a pull request from a fork of the repository
- show their organisation as the creator in the Artefact Directory
- declare any of their own tools or platforms the artefact depends on
- remove any client or commercially sensitive information

Anything a supplier builds for a Defra project belongs to Defra. See [Intellectual Property Rights in Core AI project requirements](~/standards-and-templates/core-ai-project-requirements/). Changes to an artefact owned by another team must be approved by that owner team.

## Using and contributing from other departments

Teams in other departments can reuse any artefact in the directory. Before you do:

- check the licence in the artefact's repository
- remember it was built and tested for Defra's tools and standards, so test it in your own environment
- follow your own department's AI policies and the [AI Playbook for the UK Government](https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government)

You are welcome to contribute your own artefacts or improvements. Follow the same process as above and show your department as the creator.

## Artefact lifecycle

Each artefact has a status in the Artefact Directory:

- Pilot – being tested on a live project. Use with care
- Approved – reviewed and approved for reuse in Defra
- Deprecated – replaced or no longer recommended. A link points to the replacement
- Archived – removed from the directory. It stays in the repository history

Owner teams should review their artefacts every 6 months to confirm they still work and are still needed.

## Access and support

If you require contributor access, assistance with submissions, or support with the review process, please contact:

[LAP AI Enablement Team](mailto:LAP-AIEnablement@defra.gov.uk)

## Review principle

No AI artefact will be published to the Artefact Directory without an approved pull request review. The pull request process serves as the primary quality assurance, governance, and approval mechanism, ensuring that all published content is trusted, reusable, secure, and aligned with Defra standards.

## Who to contact

Delivery lead (process coordination), engineering lead (Artefact Directory repository contributor), LAP-AIEnablement@defra.gov.uk, AICapabilitiesEnablement@defra.gov.uk

## Related agent/tool links

- [Artefact Directory - AGENTS](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/)
- [Artefact Directory - SKILLS](https://defra.github.io/defra-ai-config-examples/pages/skills/lap-gitHub-copilot/)
