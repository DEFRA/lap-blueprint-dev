---
layout: "@lap/layouts/BaseLayout.astro"
title: How to add your LAP AI Artefacts to our LAMAI's AI Directory
order: 5
---

# How to add your LAP AI Artefacts to our LAMAI's AI Directory

The AI Directory provides a trusted catalogue of AI agents, skills, prompts, accelerators, templates, and supporting artefacts that can be reused across Defra and, where appropriate, the wider government. To maintain quality, consistency, and security, all submissions must follow the review and assurance process set out below.

## Purpose

The review and assurance process ensures that:

- Artefacts are accurate, reusable, and appropriately documented.
- Content aligns with Defra standards, governance, and best practice.
- Security, compliance, and intellectual property considerations are assessed.
- Users can be confident that published artefacts have been reviewed and approved.
- The AI Directory remains a trusted source of governed AI assets.

## Prerequisites

Please proceed with the links and resources below to first make sure your AI Artefacts are compliant with DEFRA standards

<details>
<summary>Does your AI Agent conform to these DEFRA standards?</summary>

Before adding a LAP-specific AI Agent to the LAMAI Agent Directory, the agent and its supporting solution must comply with DEFRA’s AI Agent Playbook standards and governance requirements.

This includes demonstrating that the agent has been designed using the appropriate AI approach, completed the required AI readiness and assurance checks, follows DEFRA’s Responsible Design Principles, adheres to the Technical Delivery Guidance, and has appropriate governance, ownership, risk management, and oversight arrangements in place.

Teams are responsible for ensuring their agent is lawful, secure, ethical, transparent, and subject to meaningful human oversight before it is registered within LAMAI. Evidence of compliance with these requirements should be available as part of the onboarding and approval process.

**Required DEFRA Guidance**

This below resource could be used to conform to Defra software development standards and generally good coding standards that comply with DDTS code quality standards etc.

- [Software Development Standards](https://defra.github.io/software-development-standards/guides/github_copilot/)

The following guidance documents could also be reviewed and adhered to:

- [Right Approach](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/right-approach.md)
- [AI Checklist](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/ai-checklist.md)
- [Responsible Design Principles](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/responsible-design-principles.md)
- [Technical Delivery Guidance](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/technical-delivery-guidance.md)
- [Governance and Oversight](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/governance-oversight.md)

These standards must be reviewed and satisfied prior to submitting a LAP AI Agent for inclusion in the LAMAI Agent Directory.

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

The pull request acts as the formal review and assurance mechanism for inclusion in the AI Directory.
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
- Can be shared through the AI Directory.

</details>
<details><summary>

### 6. Merge and publish

</summary>

Following approval:

- The pull request may be merged into the repository.
- The artefact becomes available through the AI Directory.
- Associated directory entries and links may be updated to reflect the latest approved version.

The AI Directory will generally signpost users to the approved repository location rather than storing the artefact directly.

</details>

## Ongoing ownership

The submitting team remains responsible for maintaining their artefact, including:

- Updating documentation.
- Addressing defects or issues.
- Managing future enhancements.
- Ensuring continued relevance and accuracy.

Where an artefact is no longer supported or maintained, it may be archived or removed from the directory.

## Access and support

If you require contributor access, assistance with submissions, or support with the review process, please contact:

[LAP AI Enablement Team](mailto:LAP-AIEnablement@defra.gov.uk)

## Review principle

No AI artefact will be published to the AI Directory without an approved pull request review. The pull request process serves as the primary quality assurance, governance, and approval mechanism, ensuring that all published content is trusted, reusable, secure, and aligned with Defra standards.

## Who To Contact

Delivery lead (process coordination), engineering lead (Ai Directory repository contributor), LAP-AIEnablement@defra.gov.uk, AICapabilitiesEnablement@defra.gov.uk

## Related Agent/Tool Links

- [AI Directory - AGENTS](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/)
- [AI Directory - SKILLS](https://defra.github.io/defra-ai-config-examples/pages/skills/lap-gitHub-copilot/)
