---
layout: "@lap/layouts/BaseLayout.astro"
title: How to add your LAP AI Agent to our LAMAI's Agent Directory
order: 3
group: Tools
---

# Purpose

Use this the information below on how to add your LAP AI Agent to our LAMAI's Agent Directory

## Pre-requisites (does your AI Agent conform to these DEFRA standards)

Before adding a LAP-specific AI Agent to the LAMAI Agent Directory, the agent and its supporting solution must comply with DEFRA’s AI Agent Playbook standards and governance requirements. This includes demonstrating that the agent has been designed using the appropriate AI approach, completed the required AI readiness and assurance checks, follows DEFRA’s Responsible Design Principles, adheres to the Technical Delivery Guidance, and has appropriate governance, ownership, risk management, and oversight arrangements in place.

Teams are responsible for ensuring their agent is lawful, secure, ethical, transparent, and subject to meaningful human oversight before it is registered within LAMAI. Evidence of compliance with these requirements should be available as part of the onboarding and approval process.

### Required DEFRA Guidance

Thsi below resource could be used to conform to Defra software development standards and generally good coding standards that comply with DDTS code quality standards etc.
 
- [Software Development Standards](https://defra.github.io/software-development-standards/guides/github_copilot/)

The following guidance documents could also be reviewed and adhered to:

- [Right Approach](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/right-approach.md)
- [AI Checklist](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/ai-checklist.md)
- [Responsible Design Principles](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/responsible-design-principles.md)
- [Technical Delivery Guidance](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/technical-delivery-guidance.md)
- [Governance and Oversight](https://github.com/DEFRA/defra-ai-agents/blob/main/playbook/pages/getting-started/governance-oversight.md)

These standards must be reviewed and satisfied prior to submitting a LAP AI Agent for inclusion in the LAMAI Agent Directory.

## Step-by-Step Guide: Adding Your LAP AI Agent to the Agent Directory

Follow the steps below to register your LAP-specific AI Agent in the Agent Directory:

1. Afetr pre-requisites is completed, please proceed with the remaining steps below
2. Clone the following repository: 

https://github.com/DEFRA/defra-ai-config-examples

3. Ensure that all new definitions follow the LAP naming convention:

LAP-(your AI definitionname)

    For example:

    - LAP-Casework-Agent
    - LAP-Document-Summariser
    - LAP-Inspection-Skill

4. Following the navigation structure please place your LAP specific AI definitions under relevant sections. Please make sure default.html is updated so navigation updates could take place for your definitions:

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

5. Create a Pull Request (PR) and once it is reviewed, please kindly merge your changes into the repository. You may need contributor access to the repo, please contact the Owners/Contributors of this repository (https://github.com/DEFRA/defra-ai-config-examples) or Contact "neil.davies@defra.gov.uk" as the Program Manager for LAP programme or "AICapabilitiesEnablement@defra.gov.uk" for both contributor access to the review and have your PR reviewed.

Please ensure that all submitted definitions are clearly documented, follow the agreed naming standards, and align with the prerequisites and governance requirements outlined earlier.