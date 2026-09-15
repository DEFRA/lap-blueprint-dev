---
layout: "@lap/layouts/BaseLayout.astro"
title: Reverse Engineering
order: 2
---

# Reverse Engineering

Reverse engineering takes a legacy application and produces a Product Requirements Document (PRD) that explains the application's behaviour, purpose and the capabilities a modern replacement must provide. Generative AI supports the analysis of source code, user interface screenshots and stakeholder knowledge, while the delivery team directs the work, validates outputs and engages stakeholders.

## Inputs and outcome

The phase needs some input types:

- complete source code for the application

These inputs are optional, but can improve the results drastically:

- screenshots of the application's user interface
- transcripts from interviews with application users and product owners

The outcome is a PRD that stakeholders have reviewed and signed off, ready for [Re-Engineering](../re-engineering/).

## The process

1. **Gather inputs**: collect the source code, screenshots and stakeholder interview transcripts.
2. **Content curation**: transform screenshots and transcripts into structured formats suitable for analysis.
3. **Review curated outputs**: check the curated material for quality and completeness.
4. **Analysis and PRD generation**: analyse the curated material and source code, then produce a PRD.
5. **PRD review and sign-off**: review the PRD with stakeholders and obtain approval.

## Guidance sections

- [Process](./process/): the five-phase journey, inputs, review gates and final outcome
- [Tooling](./tooling/): AI coding assistants, plugins and project structure
- [Output Reference](./output-reference/): artefacts produced during reverse engineering
