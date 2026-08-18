---
layout: "@lap/layouts/BaseLayout.astro"
title: Re-Engineering
order: 3
---

# Re-Engineering

Re-Engineering uses a signed-off Product Requirements Document (PRD) to design and build a modern replacement for a legacy application. The PRD is the sole input: it provides the agreed requirements that are decomposed into independently deliverable feature specifications.

Features are implemented one at a time in build-layer order. Each completed implementation is reviewed before the team moves to the next feature.

## Journey at a high level

1. Decompose the PRD into a proposed feature plan and feature specifications.
2. Review the plan, feature scope, dependencies and priorities.
3. Review and approve each feature specification before implementation.
4. Prepare the target project, agent guidance and autonomous-build controls.
5. Implement one approved feature through a sandboxed plan-and-build loop.
6. Review the implementation from technical and product perspectives.

## Guidance sections

- [Process](./process/): feature decomposition, reviews, project setup, autonomous build and implementation review
- [Tooling](./tooling/): feature-decomposition agents, Ralph and the expected project layout

## Source material

This page adapts the [Re-Engineering overview](https://defra.github.io/defra-ai-modernisation-playbook/pages/re-engineering/) from the AI-Enabled Legacy Modernisation Playbook.