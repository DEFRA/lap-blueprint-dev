---
layout: "@lap/layouts/BaseLayout.astro"
title: Overview
order: 1
---

# Overview

This guidance supports teams using AI-assisted reverse engineering to understand legacy applications and prepare them for modernisation. It brings together the delivery approach, the people involved, and the decisions needed to produce a Product Requirements Document (PRD) that stakeholders can approve.

## What is LAP?

The Legacy Application Programme (LAP) helps Defra understand, document and modernise legacy systems. These systems can be costly to support, difficult to change and increasingly risky to operate. LAP provides a structured route for moving them forward.

## What this playbook covers

The playbook covers two phases of legacy application modernisation:

1. [Reverse Engineering](../reverse-engineering/) uses generative AI to analyse legacy application artefacts, including source code, user interface screenshots and stakeholder interview transcripts. The outcome is a Product Requirements Document (PRD) that describes the application's behaviour, purpose and the capabilities a modern replacement needs to provide.
2. [Re-Engineering](../re-engineering/) uses an approved PRD to design, build and deploy a modern replacement.

The phases can be used independently or together. For example, a team may use reverse engineering to document an application without beginning its replacement, or begin re-engineering when an approved PRD already exists.

## Scope and audience

This guidance covers the modernisation lifecycle from gathering inputs and producing an approved PRD through to building a modern replacement.

It is intended for:

- Defra internal delivery teams working on legacy modernisation
- third-party suppliers delivering modernisation work for Defra

It assumes that readers are familiar with agile delivery practices and have access to the tools needed for the relevant phase.

## How to use this guidance

1. Read this Overview to understand the delivery team, stakeholder roles and approach.
2. Follow the [Reverse Engineering](../reverse-engineering/) or [Re-Engineering](../re-engineering/) guidance that applies to the current stage of work.
3. Use the phase-specific tooling and output reference material when it is needed.
4. Review [Considerations & Caveats](../considerations-and-caveats/) before starting work to understand risks, limitations and practical advice.

## A small, T-shaped delivery team

The reverse engineering approach is designed for a small, T-shaped team. Each person has a primary specialism but can contribute outside it where the work requires. AI tooling performs much of the initial analysis of code, screens and other artefacts; the team focuses on directing the work, validating outputs and engaging stakeholders.

### Delivery Lead

The Delivery Lead coordinates the work and stakeholder engagement. Their responsibilities include:

- planning and scheduling work across the phases
- coordinating with programme product managers and application stakeholders
- managing risks and removing blockers
- ensuring the PRD reaches stakeholder sign-off

### Developer

The Developer operates the AI tooling, reviews technical outputs and investigates issues. Pairing is optional but can support knowledge sharing and technical review.

The Developer is responsible for:

- setting up and configuring AI tools
- running tools against source code and screenshots
- reviewing and correcting outputs for technical accuracy
- escalating outputs that appear incomplete or incorrect

### Business Analyst/User Researcher

The Business Analyst/User Researcher (BA/UR) gathers and validates business context. Their responsibilities include:

- planning and conducting interviews with application users and product owners
- capturing workflows, workarounds, pain points and tacit knowledge
- reviewing curated outputs for business and domain accuracy
- checking that the final PRD reflects how the application is used in practice

### Role activities by phase

| Phase | Delivery Lead | Developer | BA/UR |
| --- | --- | --- | --- |
| Gather inputs | Coordinates access to source code and stakeholders | Sets up tools and ingests source code and screenshots | Conducts and records stakeholder interviews |
| Content curation | Monitors progress | Runs tools and reviews outputs | Not normally involved |
| Review curated outputs | Facilitates review sessions | Reviews technical accuracy | Reviews domain accuracy and business context |
| Analysis and PRD generation | Monitors progress | Runs tools and reviews outputs | Not normally involved |
| PRD review and sign-off | Coordinates stakeholder review | Supports technical queries | Validates business requirements and supports sign-off |

All three roles work together during PRD review and sign-off to ensure the document is accurate, complete and ready for approval.

## Stakeholders outside the delivery team

External stakeholders provide access, context and final approval for reverse engineering outputs.

### Programme Product Managers

Programme Product Managers connect the delivery team with the people who understand the legacy application. They:

- coordinate communication between the delivery team and application stakeholders
- identify product owners and day-to-day users who can provide useful input
- schedule interviews and manage stakeholder availability
- ensure that the appropriate people are involved at the right time

### Application Product Owners

Application Product Owners are the domain subject matter experts for the legacy application. They understand its intended purpose, the reasons for previous decisions and the business outcomes it supports.

They are responsible for:

- reviewing and signing off the PRD
- providing business rules, regulatory requirements and historical context that code and screenshots do not show
- clarifying ambiguities in AI-generated outputs
- confirming that documented requirements represent the application's intended behaviour

### Application Users

Application Users provide the day-to-day context that cannot be reliably inferred from code or screenshots. Interviews should explore:

- workflows used to complete tasks, including differences from the originally designed process
- workarounds for bugs, limitations or missing features
- pain points and opportunities for improvement
- tacit knowledge, such as required field order or reports that matter in practice

This information helps distinguish between what an application technically does and what it needs to do for its users.

### Stakeholder engagement by phase

| Phase | Stakeholder involvement |
| --- | --- |
| Gather inputs | Product owners arrange access to the source code repository. Application users take part in recorded interviews led by the BA/UR. |
| Content curation | No routine stakeholder involvement; the delivery team processes the gathered material. |
| Review curated outputs | No routine stakeholder involvement; the delivery team checks accuracy and completeness. |
| Analysis and PRD generation | No routine stakeholder involvement; the delivery team generates and reviews the PRD. |
| PRD review and sign-off | The Application Product Owner reviews and approves the PRD. The PRD is not complete until they confirm it accurately represents the application. |

## Source material

This page adapts the [AI-Enabled Legacy Modernisation Playbook overview](https://defra.github.io/defra-ai-modernisation-playbook/pages/overview/), [team guidance](https://defra.github.io/defra-ai-modernisation-playbook/pages/overview/the-team/) and [stakeholder guidance](https://defra.github.io/defra-ai-modernisation-playbook/pages/overview/stakeholders/).