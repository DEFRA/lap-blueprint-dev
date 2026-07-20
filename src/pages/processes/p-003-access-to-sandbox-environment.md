---
layout: "@lap/layouts/BaseLayout.astro"
title: "P-003: Access to Sandbox - Defra Operating Model"
---

**Sandbox Provisioning Operating Model**
**Source:** DEFRA
**Owner:** AI Enablement Team (Omar Adili, Rinaz Jainudeen)

# 1. What This Document Is

This is the single, self-contained operating model for how any LAP project teams engage with the Cloud Centre of Excellence (CCoE) to request and provision a sandbox environment.

It shows the process, ownership, timing, and templates that were previously spread across several processes.

This is the objective:

Create a standardised sandbox provisioning process, templates, governance pathway and reusable environment specification that enables any LAP project team to  provision a sandbox environment through the CCoE efficiently and consistently, without awaiting further requiring additional guidance or intervention from stakeholders*.*

# **2. Reframing: What This Blocker Actually Is**

How do we create a repeatable sandbox onboarding process per project that any future LAP delivery team can follow without needing DEFRA colleagues to walk through it personally?

# **3. Scope**

Applies to any of the LAP applications requiring a    non-production Sandbox Azure environment provisioned through the Cloud Centre of Excellence (CCoE) to support the development , test and execution  AI-assisted modernisation activities. Progression to any higher environment requires Cloud Design Review Board (CDRB) approval and is governed by the standard CDRB process.
It sits within the wider Source Code to Production delivery chain.

# **4. The Step by Step Provisioning Process**

Delivery Team/Project Created

**Step 1** – Before requesting a sandbox environment, obtain a valid project code (for example, **DEFCOOD3P652**) to ensure costs can be correctly attributed and tracked.
**Owner:** PMO.

**Step 2** — Complete the Service Registration Form _(See 7.1 Template 1)_
**Owner:** Project Manager. Project details, service owner,  cost centre and project code.
This Service Registration Form generates the Service Code.
**Step 3** —  The Service Code is generated
**Owner:** CCoE FinOps Finance Team . ~5 working day lead time.
Produces a 3-letter Service Code. This is required in step 5.

**Step 4:** Complete the Shopping List _(See 7.2 Template 2)_
**Owner:** Technical Lead
The technical definition of the environment: containers, key vault, storage, database, networking, AI components, monitoring.

**Step 5** — Raise MyIT (ServiceNow) Catalogue Request _(See 7.3 link)_
**Owner:** Project Manager
Include the Service Code and attach the Shopping List _(See 7.3 Template 3) to the request._

**Step 6** – Sprint Review with Engineering Prioritisation**Owner:** Cloud Centre of Excellence (CCoE)
Lead time: Fortnightly sprint cadence
Submit the request to the CCoE for inclusion in the next sprint review. The CCoE engineering team will review and prioritise in the next sprint cycle.

**Step 7** — Sprint Allocation
**Owner:** Cloud Centre of Excellence (CCoE)Approved → Queued → Allocated to Sprint → Built.

**Step 8** — Sandbox Provisioned
The requestor is automatically notified through **MyIT (ServiceNow)** when the sandbox environment has been provisioned and is ready for use. The notification will reference the associated request number.

**CDRB Review (Higher Environments Only)**

For environments beyond the sandbox (for example, development, test, pre-production, or production), a **Cloud Design Review Board (CDRB)** review and approval is required to ensure the proposed solution meets architecture, security, governance, and operational standards before provisioning can proceed.

# **5. RACI Matrix**

| **Activity**<br>                                         | **Owner**<br>                 | **RACI**<br> |
| -------------------------------------------------------- | ----------------------------- | ------------ |
| Obtain Project Code<br>                                  | PMO<br>                       | R/A<br>      |
| Completion of Registration Form<br>                      | Project Manager/ PMO/ PSO<br> | R/A<br>      |
| Service Code generation<br>                              | CCoE Finance FinOps<br>       | R/A<br>      |
| Shopping List<br>                                        | Tech Lead<br>                 | R/A<br>      |
| Raising Request in Service Now (incl. Shopping List)<br> | PM<br>                        | R/A<br>      |
| Sandbox Provisioning<br>                                 | CCoE Engineering<br>          | R/A<br>      |

# **6. Lead Time Tracker**

| **Step**<br>          | **Typical Duration**<br> | **Status**<br> |
| --------------------- | ------------------------ | -------------- |
| Service Code<br>      | ~5 business days<br>     | Confirmed<br>  |
| Sprint Allocation<br> | 2 weeks<br>              | Confirmed<br>  |
| Build<br>             | 1-2 business days<br>    | Confirmed<br>  |

Tracking table (to be populated as real requests go through the process):
| **Application**<br> | **Project Code obtained**<br> | **Service Registration Form completed**<br> | **Service Code issued**<br> | **Shopping List completed**<br> | **ServiceNow Request reference**<br> | **Sprint Review planned**<br> | **Sprint allocated**<br> | **Sandbox provisioned**<br> |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| <br><br> | <br><br> | <br><br> | <br><br> | <br><br> | <br><br> | <br><br> | <br><br> | <br><br> |

# **7. The Three Templates**

## **7.1 Template 1 — Service Registration Form (used at Step 2)**

**Application / Project Name:**
**Project’s Delivery Manager:**
**Cloud Service Provider:**
**Official Name of the Business Service being delivered:**
**Is this a line of business service or a CCOE shared foundational service:**
**Description of the cloud business service or application:**
**Which Defra Group organisation will be the owner:**
**Which Defra Group organisation is funding the project:**
**The amount the budget holder has agreed is available to fund the cloud related costs this service is expected to incur this financial year:**
**SOP Project Code that CCoE should use to recharge cloud consumption costs to:**
**SOP Task Code to be used when recharging to the SOP Project Code:**
**Responsible owner for managing the costs incurred by this Service:**

_For access to this template, please follow this link:_ [_New Cloud Business Service/Application Registration_](https://defra.sharepoint.com/sites/def-ddts-cloud/_layouts/15/listforms.aspx?cid=YTdmMzhhMTEtMDYzMi00ZjhlLWE5NjktMzI4NDRlOTRlODlk&nav=MTZhNDM5MjgtNmNkZC00ZDk3LTgzNmQtYjc0ZGNhOWE1OWUy&xsdata=MDV8MDJ8fDdiZjNkZDgwY2QxNzQyNGVmODM2MDhkZWUyNmZjZTRlfDc3MGEyNDUwMDIyNzRjNjI5MGM3NGUzODUzN2YxMTAyfDB8MHw2MzkxOTcxNjY5NjM3MTgxOTh8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T20xbFpYUnBibWRmVG5wT2FVMHlSWGhhVkUxMFRWZFZlVnBUTURCYVZGbDNURlJuTkU1cVZYUlpha3BvVGxkU2FscFVSVE5OVkVadFFIUm9jbVZoWkM1Mk1pOXRaWE56WVdkbGN5OHhOemcwTVRFNU9EazFNVGM0fDA4N2Q5OTc2MDU5YjQyMTBmODM2MDhkZWUyNmZjZTRlfGYzNGNmNmRkZmM5ZDRkYWE4Njg1NjYyODA0YzIzZjBi&sdata=YXdpTzhDaGw2WkVqWUlSSWg0dU50bXdiZnBUQmw4Rk0yMkpGNDdvZTBFbz0%3D&ovuser=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61%2Comar.adili%40capgemini.com)

## **7.2 Template 2 — Shopping List (used at Step 4)**

| **Component**<br>                                                                | **Required?**<br>                                                                                                                    | **Notes**<br>                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Application / Project Name:**<br>                                              | Yes<br>                                                                                                                              | <br><br>                                                                                                                                                                                                                                                                                                                                                                               |
| **Service Code:**<br>                                                            | Yes<br>                                                                                                                              | <br><br>                                                                                                                                                                                                                                                                                                                                                                               |
| Subscription/resource group (network space requirement)<br>                      | Require a CIDR or /24<br>                                                                                                            | <br><br>                                                                                                                                                                                                                                                                                                                                                                               |
| GitHub Copilot access and licensing<br>                                          | Yes<br>                                                                                                                              | LAP Projects to request<br>                                                                                                                                                                                                                                                                                                                                                            |
| Container registry if using containers<br>                                       | Require CCoE to create 1 Azure container registry<br>                                                                                | LAP to create with contributor rights<br><br><br>                                                                                                                                                                                                                                                                                                                                      |
| Network integration if private access is needed<br>                              | No peering initially, address space would need to be assigned from the spreadsheet to avoid a clash if requested at a later date<br> | Need to connect AVD to access<br><br><br>                                                                                                                                                                                                                                                                                                                                              |
| Key Vault for secrets/config.<br>                                                | Yes<br>                                                                                                                              | LAP Projects can deploy<br>                                                                                                                                                                                                                                                                                                                                                            |
| Storage account if the app needs files etc<br>                                   | Yes<br>                                                                                                                              | LAP Projects can create own account & containers. Can use service endpoints to restrict.<br>                                                                                                                                                                                                                                                                                           |
| App Service or Azure Container Apps depending on how the refactored app runs<br> | Yes. 1x sandbox environment <br>ACA & App Service isolated <br>General purpose workload for ACA<br>                                  | Request onboarding to the supplier CCoE RAS service or whitelist the supplier service <br>Need to know if the supplier will use their own RAS service as need to whitelist<br><br><br>                                                                                                                                                                                                 |
| Any integration points e.g. developer workstations to Azure, VPN access<br>      | Need permission to create private endpoints and approve <br>AVD required<br>                                                         | <br><br>                                                                                                                                                                                                                                                                                                                                                                               |
| Databases requirements?<br>                                                      | Need permission to create database services<br>                                                                                      | LAP projects to create<br><br><br>                                                                                                                                                                                                                                                                                                                                                     |
| App Config manager linked to KV?<br>                                             | Yes<br>                                                                                                                              | <br><br>                                                                                                                                                                                                                                                                                                                                                                               |
| App Regs etc.?<br>                                                               | Requested from CCoE<br>                                                                                                              | Defra Dev has MyIT so LAP projects can request<br>DefraDev App Reg: [https://defragroup.service-now.com/esc?id=sc_cat_item&table=sc_cat_item&sys_id=496b9d931b2cce90848b8594e34bcbe5&searchTerm=application%20registration](https://defragroup.service-now.com/esc?id=sc_cat_item&table=sc_cat_item&sys_id=496b9d931b2cce90848b8594e34bcbe5&searchTerm=application%20registration)<br> |

_For access to this template, please follow this link:_ [_CCoE AI Modernisation Sandbox Shopping List – Standard Requirements_](https://defra.sharepoint.com/:x:/r/teams/Team1382/Colab_P2/02%20Capgemini%20Collaboration/AI%20Enablement/CCoE%20AI%20Modernisation%20Sandbox%20Shopping%20List%20-%20Standard%20Requirements.xlsx?d=w6dcab77a588542a0967063d75b76bbb9&csf=1&web=1)

## **7.3 Template 3 — ServiceNow Request (used at Step 5)**

**Requested By:**
**Cloud Platform:**
**Issue Type:**
**Project:**
**Environment:**
**Full Description:**

_For access to this template, please follow this link:_ [_CCOE Azure/AWS Non-Production Service Request - MyPortal_](https://defragroup.service-now.com/esc?id=sc_cat_item&table=sc_cat_item&sys_id=cedac95b1b224510adf0eb53b24bcb63&recordUrl=com.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1&sysparm_id=cedac95b1b224510adf0eb53b24bcb63)

# **8. Dependencies and Risks**

## **Data Cleaning Environment (not yet formally agreed)**

Production data cannot go straight into a sandbox before PII sanitisation.
This sits between the PII blocker, Private GitHub and this blocker
