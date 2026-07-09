---
layout: "@lap/layouts/BaseLayout.astro"
title: Home
order: -1
---

# **DEFRA AI Blueprint - Content Template**

For: Engineers building the live Blueprint website
Owner: PM maintains this alongside the Blueprint itself

# **Purpose and How to Use This**

The Blueprint currently exists as a set of working content files. This document is the content model for turning it into an interactive website, it defines, page-type by page-type, exactly what fields and sections belong on each page, so a new delivery team member with no technical background can land on any page and know: what this is, what to do, and who to ask if it's not enough.

# **How to use this as an engineer:**

1. Each "Page Template" in Section 3 becomes one page type / content type on the site.
1. Every template includes at least one worked example using content already learnt on this engagement. Build the site so a real page looks like the worked example, not the abstract field list.
1. Do not invent a 7th navigation section for "the 7 blockers or specific to backlog items". These blockers once resolved and documented will feed into the sitemap and pages below which in turn keeps the site's structure identical to the Blueprint's existing 5/6 part structure.
1. The Agent & Tool Catalogue page type has a recommended structure set out in Section 3E. Check whether an entry template already exists before building it, and use the structure in Section 3E if not. Example Agent B (PII Scanner) is the reference example.

# **Section 2 — Sitemap**

This matches the existing Blueprint structure exactly. No new top-level sections have been added.

```ascii
Home
├─ Processes (Part 1 — step-by-step "how do I do X" guides)
├─ Playbooks (Part 2 — end-to-end guides spanning multiple processes)
├─ Standards (Part 3 — minimum requirements, including governance)
├─ Reusable Assets (Part 4 — templates, scripts, prompt libraries)
└─ Agent & Tool Catalogue (Part 5/6 — AI agents and approved tools)
```

## **Home Page Template**

The homepage is not a new navigation tier, it's a landing page that routes people into the 5 sections above. It should include:

- Mission statement (one sentence summarising the Blueprint's purpose)
- "Common Tasks" quick-link box — the 4 tasks a non-technical new joiner most often needs, linking straight into the relevant page below:
  - "I need source code for my application" → Process P-001
  - "I need a sandbox to build and test in" → Process P-004
  - "I need to check my code for personal data (PII)" → Agent Catalogue, Agent B
  - "I need to use an AI tool or agent" → Agent & Tool Catalogue
- Section tiles for Processes / Playbooks / Standards / Reusable Assets / Agent & Tool Catalogue, each with a one-line description
- Search bar — search should match on title, Related Blocker tag, and plain-English task descriptions (e.g. searching "personal data" should surface Agent B and Process P-002)

# **Section 3 — Page Templates**

## **A. Process Page Template (Part 1)**

| **Field**                        | **Description**                                                       |
| -------------------------------- | --------------------------------------------------------------------- |
| **Process ID**                   | e.g. P-001                                                            |
| **Title**                        | Plain-English, phrased as a task — "How to..."                        |
| **What You're Trying To Do**     | 1-2 sentences, no jargon                                              |
| **Who This Is For**              | Role(s) who'd typically need this                                     |
| **Step-by-Step**                 | Numbered steps, plain English                                         |
| **Decision Tree / Flow Diagram** | Include where one already exists for the process                      |
| **Who To Contact**               | Named person(s), not just a team                                      |
| **Governance / Approval Gate**   | Anything that must be signed off before proceeding, if applicable     |
| **Related Blocker**              | Which of the 7 blockers this process resolves                         |
| **Related Agent/Tool Links**     | Any Agent Catalogue or Tool Catalogue entries this process depends on |
| **Status**                       | Draft / Published / Needs Review                                      |

### **Worked Example 1 — P-001: How to Get Source Code for Your Application**

**What You're Trying To Do:** Get hold of the legacy source code for the application you're modernising, so your team can start work.

**Who This Is For:** Any new engineer or PM joining a LAP delivery project who needs source code for the first time.

**Step-by-Step:**

1. Find out who owns the code for your application, it will be one of three groups: Accenture directly, an Accenture subcontractor, or an ALB (Arm's Length Body, e.g. Environment Agency, RPA, APHA).
1. If you don't know which group owns your code, ask the project governance lead, who holds project-level context on which applications sit in which scenario.
1. Follow the route for your scenario (see flow diagram below).
1. Once code is received, store it securely, do not put it on personal laptops. Confirm the secure storage location with your team lead.
1. Before any AI tool touches this code, it must go through Process P-002 (PII scanning) — see the Agent Catalogue, Agent B.

**Decision Tree / Flow Diagram:**

```ascii
Need source code for a legacy application?
├─ Held by Accenture directly?
│    → Process A — contact via the source code relationship owner and the Accenture delivery contact
├─ Held by an Accenture subcontractor?
│    → Process B — contact via the source code relationship owner (subcontractor route)
└─ Held by an ALB (Environment Agency, RPA, APHA, etc.)?
     → Process C — contact via the Project Manager responsible for that application
```

**Who To Contact:** Source code relationship owner, Accenture contact, and project governance lead for application-level context

**Governance / Approval Gate:** None to receive the code itself, but the code cannot be used by any AI tool until it has passed PII scanning (Process P-002 / Agent B).

**Related Blocker:** Blocker 1 — Source Code Access

**Related Agent/Tool Links:** Agent Catalogue → Agent B (PII Scanner) — mandatory next step after receiving code

**Status:** Draft — Processes A, B, and C need full write-up once confirmed with the source code relationship owner (in progress as of 2 July 2026)

### **Worked Example 2 — P-004: How to Provision a Sandbox Environment**

**What You're Trying To Do:** Get a safe, isolated cloud environment to build and test your AI-modernised application, without risking any live service.

**Who This Is For:** Any engineer who needs somewhere to build and test.

**Step-by-Step:** 10. Confirm you actually need a new sandbox — check with your team lead whether one already exists for your project. 11. Request a service code for your project (needed before the form can be completed). 12. Complete the onboarding form (this already exists — ask the onboarding coordinator for the current version). 13. Submit the completed form to CCoE (Cloud Centre of Excellence). 14. CCoE provisions the sandbox. 15. Validate the environment works before relying on it (e.g. deploy a small test application).

**Decision Tree / Flow Diagram:**

```ascii
Need Sandbox
   ↓
Request Service Code
   ↓
Complete Form (ABC's onboarding form)
   ↓
Submit To CCoE
   ↓
Provision Sandbox
   ↓
Validate Environment
```

**Who To Contact:** Onboarding coordinator (form and templates), programme sandbox lead (programme-level context), and CCoE representative

**Governance / Approval Gate:** None beyond the standard CCoE provisioning approval — this blocker is "largely resolved but not industrialised," per the 2 July 2026 stakeholder review, not a governance-heavy process.

**Related Blocker:** Blocker 4 — Sandbox Environment

**Related Agent/Tool Links:** None directly — but any code brought into the sandbox still needs to have passed Process P-002 (PII scanning) first if it hasn't already.

**Status:** Draft — full write-up pending review of the current onboarding form

## **B. Playbook Page Template (Part 2)**

| **Field**                       | **Description**                                               |
| ------------------------------- | ------------------------------------------------------------- |
| **Playbook ID**                 | e.g. PB-001                                                   |
| **Title**                       | End-to-end activity name                                      |
| **Primary Audience**            | Role(s) this is written for                                   |
| **What This Covers End-to-End** | 2-3 sentences summarising the full journey                    |
| **Stages**                      | Ordered list, each stage linking to the relevant Process page |
| **Governance Guardrails**       | Callout box — anything that must never be skipped             |
| **Common Pitfalls**             | What typically goes wrong, and how to avoid it                |

### **Worked Example — PB-001: Legacy Application Modernisation Playbook**

**Primary Audience:** Engineers, Architects

**What This Covers End-to-End:** Everything needed to take one legacy application from "we have access to nothing" through to a modernised, live service — stringing together the individual Processes into one guided journey.

**Stages:** 16. Get the source code → Process P-001 17. Scan and clear PII → Process P-002 (Agent Catalogue: Agent B, then Agent C) 18. Get a sandbox to build and test in → Process P-004 19. Modernise the application → Agent Catalogue: Agent A (LAMA), once access confirmed 20. Move from sandbox to live → Process P-005 (pipeline) 21. Get the service through Service Readiness → Process P-007

**Governance Guardrails:** No source code may reach an AI tool before it has passed Process P-002. No modernised service may go live without completing Process P-007 (Service Readiness).

**Common Pitfalls:** Starting AI-assisted modernisation before PII clearance is confirmed; assuming a sandbox exists when it hasn't been requested; underestimating how long the source code access step (P-001) can take depending on which of the 3 ownership scenarios applies.
_(Full stage-by-stage content to be completed once each linked Process page is written.)_

## **C. Standard Page Template (Part 3 — includes Governance)**

| **Field**                               | **Description**                                                                         |
| --------------------------------------- | --------------------------------------------------------------------------------------- |
| **Standard ID**                         | e.g. S-006                                                                              |
| **Title**                               | What is being mandated                                                                  |
| **What It Mandates**                    | Plain-English description of the rule                                                   |
| **Who Must Comply**                     | Role(s) bound by this standard                                                          |
| **Source / Authority**                  | Where the standard comes from — e.g. a link to the relevant GDS, OWASP or DDTS standard |
| **Approval Required Before Proceeding** | Any sign-off required before the standard can be met, if applicable                     |
| **Related Blocker**                     | Which of the 7 blockers this standard supports                                          |

### **Worked Example — S-006: PII Handling Standard for AI Tool Use**

**What It Mandates:** No source code may be processed by any AI tool until it has been scanned for PII and, if PII is found, anonymised and security-approved.

**Who Must Comply:** All engineers and any AI tool used on LAP delivery.

**Source / Authority:** UK GDPR / Data Protection Act; DEFRA Data Protection team (DPO).

**Approval Required Before Proceeding:** Security sign-off from the designated security approver — see Agent Catalogue, Agent B, "Governance & Approval" section for the full detail. Do not duplicate that content here — link to it.

**Related Blocker:** Blocker 2 — PII in Source Code

## **D. Reusable Asset Page Template (Part 4)**

| **Field**                    | **Description**                                           |
| ---------------------------- | --------------------------------------------------------- |
| **Asset Name**               | What it's called                                          |
| **Type**                     | Template / script / prompt library / runbook / agent pack |
| **What It's For**            | Plain-English purpose                                     |
| **Download / Link**          | Where to get it                                           |
| **Who Maintains It**         | Name/role                                                 |
| **Related Process/Playbook** | What this asset supports                                  |

### **Worked Example — Legacy Modernisation Prompt Library**

**Type:** Prompt library

**What It's For:** A curated, version-controlled set of prompts engineers use with the approved AI coding tools to analyse, document and refactor legacy application code in a consistent way — so every team starts from proven prompts rather than writing their own from scratch each time.

**Download / Link:** Reusable Assets repository → prompt-libraries/legacy-modernisation

**Who Maintains It:** AI Enablement Team

**Related Process/Playbook:** Supports the Legacy Application Modernisation Playbook (PB-001), particularly the "Modernise the application" stage.

## **E. Agent & Tool Catalogue Entry Template (Part 5/6)**

**Before building this page type, check whether an entry template already exists for the Agent Catalogue and use it if so.** If nothing suitable is already in place, build from the structure below. Each catalogue entry should use the following 8 sections, plus a Status line:
| **Field** | **Description** |
| --- | --- |
| **What It Is** | Plain-English description of the agent or tool |
| **Who Can Access It** | Roles or teams cleared to use it |
| **How To Access It** | The steps to request or gain access |
| **How It Works (Process Flow)** | What the agent or tool does, step by step |
| **What It Produces** | The outputs it generates |
| **Governance & Approval** | Any sign-off or controls required, and any open governance gaps |
| **Ownership & Support** | Who owns it and where to get help |
| **Reuse Guidance** | When and how to reuse it on other applications |
| **Status** | Draft / Published / Needs Review — and flag any live gaps (e.g. approval pending) |

**Worked Example:** use Agent B — PII Scanner as the reference. It's the most complete entry and shows what a "finished" catalogue page looks like, including how a live governance gap (security approval pending) should be surfaced clearly rather than buried.
The Tool Catalogue (Part 6, currently a single table) should eventually be upgraded to use this same 8-section structure per tool, once each tool's access process is confirmed — a future task, not required for initial site launch.

# **Section 4 — Cross-Reference Mechanism (How the 7 Blockers Surface Without a Separate Tab/Navigation Area)**

Every Process, Standard, and Agent/Tool page template above includes the documentation or resolved backlog Blocker (e.g. "Solves: Blocker 4 — Sandbox Environment").

**Build recommendation for engineers:** rather than manually maintaining a "7 or XYZ Blockers" page, auto-generate a blocker index from these tags, a page per blocker that lists every Process/Standard/Agent tagged with it. This keeps a single source of truth (the tag on each page) instead of two places to update. This is a recommendation for the build, not something this document produces by hand.
