---
layout: "@lap/layouts/BaseLayout.astro"
title: "P-003: Access to Sandbox"
---

# Process Page - P-003: How to Request and Provision a Sandbox Environment

**Process ID:** P-003

**Title:** How to request and provision a sandbox environment through the Cloud Centre of Excellence (CCoE)

**What You're Trying To Do:**
Request and provision a non-production Azure sandbox environment to support development, testing, and AI-assisted modernisation activities for your LAP project through the CCoE's standardised provisioning process.

**Who This Is For:**
Project managers, technical leads, delivery leads, finance/cost centre owners, and cloud operations teams responsible for requesting and provisioning sandbox environments through CCoE.

**Scope:**
Applies to any LAP application requiring a non-production sandbox Azure environment provisioned through CCoE. Progression to higher environments (development, test, pre-production, production) requires Cloud Design Review Board (CDRB) approval and follows the standard CDRB governance process.

**Step-by-Step:**

1. **Obtain a Project Code** – Before requesting a sandbox environment, work with PMO to obtain a valid project code (for example, DEFCOOD3P652) to ensure costs can be correctly attributed and tracked.

2. **Complete the Service Registration Form** – Project Manager completes the Service Registration Form (See Template 1 below) with project details, service owner, cost centre, and project code. This form generates the required Service Code.

3. **Wait for Service Code Generation** – CCoE FinOps Finance Team generates a 3-letter Service Code. Typical lead time: ~5 working days. The Service Code is required for the next steps.

4. **Complete the Shopping List** – Technical Lead defines the technical environment requirements using the Shopping List template (See Template 2 below): containers, key vault, storage, database, networking, AI components, monitoring, etc.

5. **Raise MyIT (ServiceNow) Catalogue Request** – Project Manager submits the request in ServiceNow (See Template 3 below), including the Service Code and Shopping List as attachments.

6. **Submit for Sprint Review** – CCoE engineering team reviews and prioritises the request in the next sprint cycle (fortnightly cadence). Lead time: typically 2 weeks for allocation.

7. **Sprint Allocation and Build** – Once allocated to a sprint, CCoE builds the sandbox environment. Typical build time: 1-2 business days.

8. **Receive Provisioning Notification** – Requestor is automatically notified through MyIT (ServiceNow) when the sandbox environment has been provisioned and is ready for use.

**For Higher Environments:**
Progression to development, test, pre-production, or production environments requires a Cloud Design Review Board (CDRB) review and approval to ensure the proposed solution meets architecture, security, governance, and operational standards.

**Decision Tree / Flow Diagram:**

```ascii
Ready to request sandbox environment?
|
Yes
|
Step 1: Obtain Project Code from PMO
    |
Step 2: Complete Service Registration Form
    |
Step 3: Wait for Service Code generation (~5 business days)
    |
Step 4: Complete Shopping List (Technical Definition)
    |
Step 5: Raise ServiceNow catalogue request with Service Code & Shopping List
    |
Step 6: Submit for CCoE sprint review (fortnightly cadence)
    |
Step 7: CCoE allocation and build (1-2 business days after sprint allocation)
    |
Step 8: Receive provisioning notification via MyIT
    |
Sandbox Environment Ready for Use
    |
Higher Environment Needed?
|- No --> Proceed with sandbox-based development
|- Yes --> Initiate CDRB review and approval process
```

**Who To Contact:**

- **Project Code/Finance:** PMO (finance administration)
- **Service Registration:** Project Manager / CCoE FinOps Finance Team
- **Technical Requirements:** Technical Lead (in consultation with CCoE)
- **ServiceNow Request Submission:** Project Manager
- **Sprint Review & Allocation:** CCoE Engineering Team
- **Request Tracking & Status:** MyIT (ServiceNow) ticket system
- **CDRB Review (Higher Environments):** Cloud Design Review Board

**Governance / Approval Gate:**

- **Service Code:** CCoE FinOps Finance Team approval (required before step 5)
- **Shopping List Review:** CCoE Engineering Team approval during sprint review
- **Sandbox Provisioning:** CCoE Engineering Team approval and build (automated notification upon completion)
- **Higher Environments:** Requires formal CDRB review and approval before any provisioning beyond sandbox tier

---

## Supporting Resources

### Lead Time Tracker

| Step                                 | Typical Duration             | Status    |
| ------------------------------------ | ---------------------------- | --------- |
| Obtain Project Code                  | 1-3 business days            | Confirmed |
| Service Registration Form completion | 1-2 business days            | Confirmed |
| Service Code generation              | ~5 business days             | Confirmed |
| Shopping List completion             | 2-3 business days            | Confirmed |
| Sprint Review allocation             | ~2 weeks (fortnightly cycle) | Confirmed |
| Sandbox Build                        | 1-2 business days            | Confirmed |

### RACI Matrix

| Activity                             | Owner               | Responsibility          |
| ------------------------------------ | ------------------- | ----------------------- |
| Obtain Project Code                  | PMO                 | Responsible/Accountable |
| Service Registration Form Completion | Project Manager/PSO | Responsible/Accountable |
| Service Code Generation              | CCoE Finance FinOps | Responsible/Accountable |
| Shopping List Completion             | Technical Lead      | Responsible/Accountable |
| ServiceNow Request Submission        | Project Manager     | Responsible/Accountable |
| Sprint Review & Prioritisation       | CCoE Engineering    | Responsible/Accountable |
| Sandbox Provisioning & Build         | CCoE Engineering    | Responsible/Accountable |

### Template 1 — Service Registration Form

[Access the Service Registration Form](https://defra.sharepoint.com/sites/def-ddts-cloud/_layouts/15/listforms.aspx?cid=YTdmMzhhMTEtMDYzMi00ZjhlLWE5NjktMzI4NDRlOTRlODlk&nav=MTZhNDM5MjgtNmNkZC00ZDk3LTgzNmQtYjc0ZGNhOWE1OWUy&xsdata=MDV8MDJ8fDdiZjNkZDgwY2QxNzQyNGVmODM2MDhkZWUyNmZjZTRlfDc3MGEyNDUwMDIyNzRjNjI5MGM3NGUzODUzN2YxMTAyfDB8MHw2MzkxOTcxNjY5NjM3MTgxOTh8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T20xbFpYUnBibWRmVG5wT2FVMHlSWGhhVkUxMFRWZFZlVnBUTURCYVZGbDNURlJuTkU1cVZYUlpha3BvVGxkU2FscFVSVE5OVkVadFFIUm9jbVZoWkM1Mk1pOXRaWE56WVdkbGN5OHhOemcwTVRFNU9EazFNVGM0fDA4N2Q5OTc2MDU5YjQyMTBmODM2MDhkZWUyNmZjZTRlfGYzNGNmNmRkZmM5ZDRkYWE4Njg1NjYyODA0YzIzZjBi&sdata=YXdpTzhDaGw2WkVqWUlSSWg0dU50bXdiZnBUQmw4Rk0yMkpGNDdvZTBFbz0%3D&ovuser=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61%2Comar.adili%40capgemini.com) - New Cloud Business Service/Application Registration

**Form fields include:**

- Application/Project Name
- Project's Delivery Manager
- Cloud Service Provider
- Official Name of the Business Service
- Service Type (Line of Business or CCOE shared foundational service)
- Service Description
- Business Owner (Defra Group organisation)
- Funding Organisation (Defra Group organisation)
- Agreed Budget for Cloud Costs (Financial Year)
- SOP Project Code for cost recharging
- SOP Task Code for cost allocation
- Cost Management Responsible Owner

### Template 2 — Shopping List (Technical Environment Definition)

[Access the Shopping List Template](https://defra.sharepoint.com/:x:/r/teams/Team1382/Colab_P2/02%20Capgemini%20Collaboration/AI%20Enablement/CCoE%20AI%20Modernisation%20Sandbox%20Shopping%20List%20-%20Standard%20Requirements.xlsx?d=w6dcab77a588542a0967063d75b76bbb9&csf=1&web=1) - CCoE AI Modernisation Sandbox Shopping List

**Template includes components:**

- Application/Project Name and Service Code
- Subscription/Resource Group (network CIDR or /24 assignment)
- GitHub Copilot access and licensing
- Container registry (if using containers)
- Network integration and private access requirements
- Key Vault for secrets and configuration
- Storage account requirements
- App Service or Azure Container Apps (hosting options)
- Integration points (VPN, developer workstations, AVD access)
- Database service requirements
- App Configuration Manager
- Application Registrations (App Regs)

### Template 3 — ServiceNow Catalogue Request

[Access the ServiceNow Request Form](https://defragroup.service-now.com/esc?id=sc_cat_item&table=sc_cat_item&sys_id=cedac95b1b224510adf0eb53b24bcb63&recordUrl=com.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1&sysparm_id=cedac95b1b224510adf0eb53b24bcb63) - CCOE Azure/AWS Non-Production Service Request

**Form fields include:**

- Requested By
- Cloud Platform (Azure/AWS)
- Issue Type
- Project
- Environment (Sandbox, Development, Test, etc.)
- Full Description
- Attachment: Service Code and Shopping List

---

## Additional Notes

**Dependencies:**

- Service Code must be obtained from CCoE FinOps before ServiceNow request submission
- Shopping List must be completed by technical team with CCoE guidance
- Project Code must be valid and verified by PMO before process initiation

**Data Handling:**
Production data cannot be used in sandbox environments before PII sanitisation. Refer to P-001 (Scan Code for PII) and P-002 (Obfuscate and Revalidate) if production data needs to be used in sandbox testing.

**Source:** DEFRA Cloud Centre of Excellence  
**Owner:** AI Enablement Team (Omar Adili, Rinaz Jainudeen)
