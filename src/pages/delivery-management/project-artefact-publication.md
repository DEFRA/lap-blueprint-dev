---
layout: "@lap/layouts/BaseLayout.astro"
title: How to publish your project artefacts
order: 12
group: Reuse and contribution
---

# How to publish your project artefacts

Project artefacts are the documents and outputs your project produced that other teams could reuse. Sharing them saves time for future projects, in Defra and across government. Before anything is published, it must be made safe to share and approved.

## Who this is for

- project and delivery managers
- technical leads
- suppliers delivering Defra projects
- teams in other departments who want to share a modernisation project

Suppliers on Defra's Legacy Application Programme must hand over their project knowledge in a form that can go into the Blueprint. See [Knowledge Transfer in Core AI project requirements](~/standards-and-templates/core-ai-project-requirements/).

## What counts as a project artefact

- a modernisation example – project summary, current system, target system, steps taken and lessons for reuse
- product requirements and feature specifications
- architecture decisions and designs
- test approaches and test packs
- lessons learned

## Step by step

### 1. Choose what to share — Owner: Delivery lead

Agree with your project or service owner which artefacts can be shared. Start with a modernisation example, as every completed project should have one.

### 2. Remove sensitive information — Owner: Technical lead

Remove or replace:

- personal data, including names in test data
- names of individual staff, unless they have agreed
- passwords, keys and other secrets
- server names, IP addresses and network details
- security weaknesses and security test results, including IT Health Check findings
- commercially sensitive information

Defra teams must run the LAP PII Screener on any code or files before sharing them. See [PII scanning](~/delivery-management/pii-scanning/). Other departments can use it or their own approved tool.

### 3. Choose who can see it — Owner: Delivery lead

Pick one access level for each artefact:

- Public – published on the Blueprint for anyone to read
- Defra only – kept on Defra SharePoint. The Blueprint shows a summary. People in other departments can ask for a copy by email
- Restricted – not published. The Blueprint says the artefact exists and who to contact

If you are not sure, choose Defra only. Teams in other departments should follow their own department's rules for publishing information.

### 4. Write it up — Owner: Delivery lead

Follow the layout of the existing [modernisation examples](~/modernisation-playbook/modernisation-examples/). You can use the [Modernisation Example Writer agent](https://defra.github.io/defra-ai-config-examples/pages/agents/lap-gitHub-copilot/lap-innovation-modernisation-example-writer.agent) to create a first draft from your project evidence. Explain acronyms and anything specific to your department.

### 5. Submit for review — Owner: Delivery lead

Follow [How to contribute to the AIM Blueprint](~/delivery-management/blueprint-contribution/). Say which access level you chose and confirm that step 2 is complete.

### 6. Review and approve — Owner: Blueprint content owner

A reviewer checks that the artefact is safe to share, useful and has the right access level. The Blueprint content owner then approves it for publishing.

## Ownership and versions

- Each artefact has a named owner, usually the project's delivery lead.
- Show the version number and the date it was last updated at the top of each page.
- Make all changes through a pull request, so there is a record of what changed and why.
- Only the latest version stays on the live page. Older versions stay in the repository history.
- If an owner moves role, the project must name a new owner. If no one takes ownership, the artefact may be archived.

## Who to contact

LAP AI Enablement Team, Defra: [LAP-AIEnablement@defra.gov.uk](mailto:LAP-AIEnablement@defra.gov.uk)
