---
layout: "@lap/layouts/BaseLayout.astro"
phase: alpha
title: Core AI Project Requirements
order: 4
---

# Core AI project requirements

The Legacy Application Programme (the ‘Programme’) has adopted an ‘AI by Default’ posture, using agentic AI wherever possible, to accelerate delivery timescales and dramatically increase Value for Money in modernising of Defra systems.  

The core requirements that apply to all AI enabled modernisation projects is set out below.  These requirements must be met for a proposal or Statement of Work to be deemed acceptable.  Any deviation will be by exception and at the discretion of the Programme team.

## Core Requirements
When engaged on a project a supplier is expected to design, build, and evidence delivery against the following requirements.

1. **Agentic AI by Default**
The Programme has adopted an ‘Agentic AI by Default’ posture. Suppliers shall demonstrate how AI agents and emerging AI more generally has been considered by default throughout solution design, delivery, testing and operation. Any decision not to use Agentic AI for a relevant use case must be justified. All AI capabilities must comply with DEFRA AI policies, governance requirements, security controls, and responsible AI guardrails.

2. **GDS based Back Office Operational User Interface**
The Supplier must develop a user interface based on a Government Digital Standard (GDS) standard, the style sheet, and optimised and tuned for frequent continual operational use. The interface for should be designed for back office operational users and not the citizen facing standard which is designed for infrequent very occasional use.  The Supplier should produce a UI design that can be reviewed and assured. 
The Programme is currently developing a GDS based Back Office Operational UI standard that will be shared with suppliers at the earliest opportunity.

3. **Accessibility and WCAG 2.2**
All modernised application user interfaces must meet WCAG 2.2 level AA as a minimum, ideally AAA. The Supplier should provide accessibility conformance evidence as part of delivery. 

4. **Modern Architecture**
The Supplier shall propose a modern target-state architecture, not a like-for-like migration or re-platforming of the existing solution.  For example, an n-tier architecture and or Microservices based where sensible to do so. 
The proposed design must align with DEFRA architecture principles, standards, approved technology patterns, and industry best practice.  It must demonstrate how it improves scalability, resilience, security, quality, maintainability, supportability, and reduces technical debt. 
Where legacy components are retained, suppliers must provide a clear rationale and demonstrate how their approach supports progressive modernisation, refactoring, or replacement over time.

5. **Evergreen Continuous Remediation** 
Applications must be designed for an evergreen operating model, using AI-assisted engineering practices from day one. Solutions shall integrate with the Authority's chosen toolchain, including Microsoft services (e.g. GitHub, GitHub Advanced Security, Microsoft Defender) or equivalent AWS capabilities. Traditional patch-and-upgrade approaches are not acceptable and shall be agreed by exception with the Programme. 
The Supplier shall demonstrate how the application will be continuously secured, maintained, monitored, and improved through automated updates, dependency management, and AI-enabled operations from go-live.

6. **AI Security, Risk Management and Assurance**
Suppliers shall demonstrate that AI-assisted and agentic delivery activities are governed through a documented, risk-based assurance process proportionate to the application, data classification, deployment environment and degree of AI autonomy.
The Supplier shall align its approach with applicable Defra security and engineering standards, the UK Government AI Playbook and NCSC Guidelines for Secure AI System Development. The NIST AI Risk Management Framework and, where generative and agentic AI is used, the NIST Generative AI Profile should be used as a supporting structure for identifying, measuring, managing and evidencing AI-specific risks.
The Supplier shall maintain an AI risk and assurance record covering the AI systems, models, agents and tools used in delivery; their permitted use cases and autonomy boundaries; data accessed or processed; model and service providers; hosting and processing locations; human oversight arrangements; security controls; testing and evaluation results; known limitations; residual risks; and accountable risk owners. This risk and assurance record shall be developed in partnership with the Programme’s security team and mutually agreed.

7. **Intellectual Property Rights (IPR) – Project Related IPR Rests with Defra and HMG**
Project Related IPR means any intellectual property developed, built, or created by the supplier during the term of the engagement, in the course of delivering requirements to Defra as outlined in the overarching contract. 

>7.1 **Vesting of IPR**

>Suppliers engaged on the Programme should note that as per the overarching contract all project related IPR vests exclusively in Defra with no limitation, as per the terms of the contract. This includes, but is not limited to:
>-	Code
>-	Software
>-	Documentation
>-	Models
>-	Agents
>-	Prompts
>-	Skills
>-	Any other outputs produced in the course of delivery

>7.2 **Rationale**

>Defra is building a catalogue of assets including reusable skills, agents, and prompts to support agentic AI capability across future delivery. As such, all relevant IPR must be:
>-	Captured,
>-	Clearly outlined, and
>-	detailed as part of the engagement

>7.3 **Use of Pre-Existing or Proprietary Platforms**

>If there is a compelling gain to be made by the Authority by using a Supplier’s proprietary IP the Supplier should make the Programme aware.

>Where a Supplier intends to use a pre-existing or proprietary AI tools to deliver this work, such as a prompt engineering tool, model, or framework, the following applies:
>-	The platform itself must be clearly identified and declared at the outset of the engagement
>-	The underlying platform remains the supplier's own IP
>-	Anything configured, built, or created using that platform for the purposes of this engagement is project related IPR and will vest in Defra

>7.4 **Format of Delivered Outputs**

>To ensure Defra can use and maintain ownership of project related IPR in practice, suppliers must:
>-	Deliver outputs in a Defra usable format (e.g. exported prompts, documented agent configurations)
>-	Avoid delivering outputs that are locked into a supplier's proprietary platform or export format without an accessible equivalent

>7.5 **Subcontractors and Third Parties**

>Suppliers must:
>-	Warrant that all project related IPR vests in Defra
>-	Ensure that any subcontractors or third parties involved are bound by equivalent terms

8. **Knowledge Transfer**

The Supplier shall, as a condition of delivery:
-	Capture and document all AI-derived metrics, methodologies, and operational learning generated during the engagement
-	Package this material, including underlying know-how and intellectual property, for formal handover to the Defra AI Enablement Team
-	Complete this handover prior to final acceptance, in a format and structure specified by the AI Enablement Team
-	Ensure the package supports inclusion in the LAP AI Modernisation Blueprint and integration into the Legacy Application Modernisation AI (LAMAI) tool

9. **AI Modernisation Metrics**
The Programme requires a consistent and evidence-based approach to measuring the benefits of AI enabled application modernisation. 

The objective is to create a portfolio level dataset that enables Defra to understand the relationship between application scale, application complexity, delivery effort and the benefits achieved through the use of AI. This data will be used to benchmark suppliers, compare delivery approaches and improve future effort, duration and cost estimates for application modernisation activities. 

>9.1 **Reporting**

>Suppliers shall provide a standard AI productivity report for each application and delivery phase. As a minimum, reporting shall compare a traditional delivery approach with the AI assisted approach used during delivery and shall demonstrate the resulting savings in effort, duration and cost.

>Reporting shall cover all delivery phases, where applicable:
>-	Discovery
>-	Design
>-	Build
>-	Test
>-	Transition to Live
>-	Support

>Suppliers shall provide:

>9.2 **Application Scale Metrics**
>-	Number of screens
>-	Number of interfaces and integrations
>-	Number of databases
>-	Number of datasets
>-	Number of database objects
>-	Number of application components or files
>-	Number of lines of code
>-	Number of business workflows (where relevant)

>9.3 **Application Complexity Ratings**
>-	Technology Stack setting our all-technology types / versions
>-	Technology Stack Complexity (Low, Medium, High) with rationale for ranking
>-	Overall Application Complexity (Low, Medium, High) with rationale for ranking

>9.4 **Delivery Metrics**
>-	Delivery Effort (Person Days) – Traditional and Agent AI Enabled
>-	Elapsed Time (Days) – Traditional and Agentic AI Enabled
>-	Delivery Costs – Traditional and Agentic AI Enabled
>-	Test Coverage and Testing – Existing and Agentic AI Enabled
>-	Security Vulnerabilities – Existing and Agentic AI Enabled

>9.5 **Benefits Realised**
>-	Effort saving (%)
>-	Time saving (%)
>-	Cost saving (%)
>-	Automated completion rate by (%)

>9.6 **Acceptance Criteria**

>The supplier shall provide sufficient information to enable Defra to:
>-	Understand the scale and complexity of the application being modernised.
>-	Compare AI assisted delivery against a traditional delivery baseline.
>-	Measure savings in effort, duration and cost attributable to AI.
>-	Compare outcomes consistently across suppliers, applications and modernisation projects.

>9.7 **Guidance and Additional Information**

>The Programme recognises that applications vary significantly in size, complexity and risk. Suppliers should therefore apply these measures proportionately and work with the relevant Programme Manager and their team, to agree the most appropriate metrics, level of detail and reporting frequency for each application.

The following additional measures may be used where they are considered relevant to the application or modernisation approach:

**Additional Complexity Indicators**:

-	Integration Complexity (Low, Medium, High) with rationale for ranking
-	Data Complexity (Low, Medium, High) with rationale for ranking
-	Testing [JP1.1][RP1.2]Complexity (Low, Medium, High) with rationale for ranking
-	Architecture Complexity (Low, Medium, High) with rationale for ranking
-	Technical Debt Rating (Low, Medium, High) with rationale for ranking
-	Documentation Quality (Low, Medium, High) with rationale for ranking
-	SME Availability and Knowledge Risk (Low, Medium, High) with rationale for ranking

**Additional Volumetric Measures**:

-	Number of modules
-	Number of APIs
-	Number of external dependencies
-	Database size
-	Number of environments
-	Number of user roles
-	Number of business rules
-	Testing – Coverage, Volume of Defects, Resolution Time
-	Security Vulnerabilities – Existing, at Development Complete, at ITHC

**Reporting Approach**

Suppliers should propose a practical reporting approach that reflects the size and complexity of the application. Reporting requirements, metrics, assumptions, baselines and reporting frequency should be agreed with the Programme Manager and Project Manager at the start of each engagement and reviewed throughout delivery as required.

The intention is not to create unnecessary reporting overhead but to ensure that sufficient data is captured to support consistent measurement of AI productivity, modernisation effort and realised benefits across the Programme portfolio.
