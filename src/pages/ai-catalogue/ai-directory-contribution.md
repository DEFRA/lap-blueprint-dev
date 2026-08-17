---
layout: "@lap/layouts/BaseLayout.astro"
phase: alpha
title: How to add your LAP AI Artefacts to our LAMAI's AI Directory
order: 5
---

# How to add your LAP AI Artefacts to our LAMAI's AI Directory

**Title:** How to add your LAP AI Artefacts to our LAMAI's AI Directory

**What You're Trying To Do:**
Use this the information below on how to add your LAP AI Artefacts to our LAMAI's AI Directory

**Who This Is For:**
Ai Artefact Developers, Suppliers who are responsible for building Agentic Works, delivery leads, engineers, and anyone who is responsible for developing or using AI Definitions (Agents, Prompts, Instructions, Skills etc...) before modernisation and AI-assisted workflows begin.

**Prerequisites**

Please proceed with the links and resources below to first make sure your AI Artefacst are compliant with DEFRA standards

<details class="govuk-details" data-module="govuk-details">
    <summary class="govuk-details__summary">
        <span class="govuk-details__summary-text">
            does your AI Agent conform to these DEFRA standards?
        </span>
    </summary>
    <div class="govuk-details__text">
Before adding a LAP-specific AI Agent to the LAMAI Agent Directory, the agent and its supporting solution must comply with DEFRA’s AI Agent Playbook standards and governance requirements. 

This includes demonstrating that the agent has been designed using the appropriate AI approach, completed the required AI readiness and assurance checks, follows DEFRA’s Responsible Design Principles, adheres to the Technical Delivery Guidance, and has appropriate governance, ownership, risk management, and oversight arrangements in place.

Teams are responsible for ensuring their agent is lawful, secure, ethical, transparent, and subject to meaningful human oversight before it is registered within LAMAI. Evidence of compliance with these requirements should be available as part of the onboarding and approval process.

 **Required DEFRA Guidance**

Thsi below resource could be used to conform to Defra software development standards and generally good coding standards that comply with DDTS code quality standards etc.
 
- [Software Development Standards](https://defra.github.io/software-development-standards/guides/github_copilot/)

The following guidance documents could also be reviewed and adhered to:

- [Right Approach](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/right-approach.md)
- [AI Checklist](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/ai-checklist.md)
- [Responsible Design Principles](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/responsible-design-principles.md)
- [Technical Delivery Guidance](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/technical-delivery-guidance.md)
- [Governance and Oversight](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/governance-oversight.md)

These standards must be reviewed and satisfied prior to submitting a LAP AI Agent for inclusion in the LAMAI Agent Directory.
    </div>
</details>

**Step-by-Step:**

1. Clone the following repository: 

https://github.com/DEFRA/defra-ai-config-examples

2. Ensure that all new definitions follow the LAP naming convention:

LAP-(your AI definitionname)

    For example:

    - LAP-Casework-Agent
    - LAP-Document-Summariser
    - LAP-Inspection-Skill

3. Following the navigation structure please place your LAP specific AI definitions under relevant sections. Please make sure default.html is updated so navigation updates could take place for your definitions:

    Agents
    ├── ...
    └── LAP Implementations
        ├── GitHub Copilot
                ├── your agent
        ├── Claude
        ├── Speckit
        ├── OpenAI
        └── Other
    - Any other supporting AI configuration files such as images or docs etc...should go in the repo under assets and link accordingly from your definition documentation

    Please follow same structure in case you have other AI definitions such as Instructions, Prompts and Skills

4. Create a Pull Request (PR) and once it is reviewed, please kindly merge your changes into the repository. You may need contributor access to the repo, please contact the Owners/Contributors of this repository (https://github.com/DEFRA/defra-ai-config-examples) or Contact "neil.davies@defra.gov.uk" as the Program Manager for LAP programme or "AICapabilitiesEnablement@defra.gov.uk" for both contributor access to the review and have your PR reviewed.

**Who To Contact:**
Delivery lead (process coordination), engineering lead (Ai Directory repository contributor), AICapabilitiesEnablement@defra.gov.uk

**Governance / Approval Gate:**


**Related Blocker:** -

**Related Agent/Tool Links:**

- [AI Directory - AGENTS](https://defra.github.io/defra-ai-config-examples/pages/agents/)
- [AI Directory - INSTRUCTIONS](https://defra.github.io/defra-ai-config-examples/pages/instructions/)
- [AI Directory - PROMPTS](https://defra.github.io/defra-ai-config-examples/pages/prompts/)
- [AI Directory - SKILLS](https://defra.github.io/defra-ai-config-examples/pages/skills/)

**Status:**
Draft (pending validation or approval by AICE and Defra Stakeholders on LAP Programme)

Use this to find AI Definitions sucha sAgents, Instructions, Prompts, Skills that are being used across LAP and DEFRA

### Agents, Instructions, Skills, Prompts

- [Current available AGENTS conforming to DEFRA standards](https://defra.github.io/defra-ai-config-examples/pages/agents/)

- [Current available INSTRUCTIONS conforming to DEFRA standards](https://defra.github.io/defra-ai-config-examples/pages/instructions/)

- [Current available PROMPTS conforming to DEFRA standards](https://defra.github.io/defra-ai-config-examples/pages/prompts/)

- [Current available SKILLS conforming to DEFRA standards](https://defra.github.io/defra-ai-config-examples/pages/skills/)