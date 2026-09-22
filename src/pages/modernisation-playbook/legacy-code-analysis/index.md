---
layout: "@lap/layouts/BaseLayout.astro"
title: Legacy code analysis
order: 3
group: The process
---

# Legacy code analysis

Legacy code analysis takes a legacy application and produces a Product Requirements Document (PRD) that explains the application's behaviour, purpose and the capabilities a modern replacement must provide. The [LAP Innovation agents for GitHub Copilot](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/) support the analysis of source code, user interface screenshots and stakeholder knowledge, while the delivery team directs the work, validates outputs and engages stakeholders.

## Inputs and outcome

The phase needs some input types:

- complete source code for the application

These inputs are optional, but can improve the results drastically:

- screenshots of the application's user interface
- transcripts from interviews with application users and product owners

The outcome is a PRD that stakeholders have reviewed and signed off, ready for [Modern rebuild](../modern-rebuild/).

## The process

1. **Gather inputs**: collect the source code, screenshots and stakeholder interview transcripts.
2. **Content curation**: transform screenshots and transcripts into structured formats suitable for analysis, using the [Digital Content Curator](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-digital-content-curator.agent) agent.
3. **Review curated outputs**: check the curated material for quality and completeness.
4. **Analysis and PRD generation**: analyse the curated material and source code with the analyst agents, then synthesise a PRD with the [Product Manager](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-product-manager.agent) agent.
5. **PRD review and sign-off**: review the PRD with stakeholders and obtain approval.

## Guidance sections

- [Process](./process/): the five-phase journey, inputs, review gates and final outcome
- [Tooling](./tooling/): the LAP Innovation agents, GitHub Copilot setup and project structure
- [Output Reference](./output-reference/): artefacts produced during legacy code analysis
