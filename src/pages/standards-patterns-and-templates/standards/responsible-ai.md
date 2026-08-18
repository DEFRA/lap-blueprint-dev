---
layout: "@lap/layouts/BaseLayout.astro"
title: Responsible AI
order: 4
---

## Responsible AI

**Responsible AI** is the practice of designing, developing, deploying, and operating AI systems in a way that is ethical, trustworthy, transparent, secure, and accountable. It ensures that AI solutions deliver value while minimising risks such as bias, discrimination, misinformation, privacy breaches, security vulnerabilities, and unintended harmful outcomes. Responsible AI should be embedded throughout the entire AI lifecycle, from discovery and design through to deployment, monitoring, and retirement.

For legacy application modernisation initiatives using Agentic AI, Responsible AI should be treated as a non-functional requirement alongside security, accessibility, and performance. AI capabilities must be governed, monitored, and continuously assessed to ensure they remain aligned with business objectives, legal obligations, and user expectations.

#### Core Responsible AI Principles

The following principles should guide the design and implementation of all AI-enabled solutions:

- **Fairness** – AI systems should treat people equitably and minimise bias.
- **Reliability & Safety** – AI systems should operate safely and perform consistently.
- **Privacy & Security** – Data must be protected and processed responsibly.
- **Inclusiveness** – AI should be accessible and beneficial to all users.
- **Transparency** – Users should understand when and how AI is being used.
- **Accountability** – Human oversight and governance must remain in place.

#### AI Governance Requirements

All AI-enabled solutions should:

- Clearly identify where AI is used within the system.
- Maintain human oversight for business-critical decisions.
- Document model purpose, limitations, assumptions, and risks.
- Implement monitoring, logging, and audit capabilities.
- Perform risk assessments before production deployment.
- Regularly review outputs for bias, accuracy, and harmful content.
- Establish escalation and remediation processes for AI failures.
- Ensure compliance with organisational, regulatory, and legal requirements.

#### Agentic AI Considerations

Agentic AI systems introduce additional governance requirements because they can independently plan, reason, and perform actions. When implementing AI agents:

- Clearly define the agent's scope, permissions, and operating boundaries.
- Apply the principle of least privilege to tools and data access.
- Require approval checkpoints for high-risk or irreversible actions.
- Maintain traceability of agent decisions and actions.
- Implement safeguards against hallucinations, prompt injection, and misuse.
- Continuously monitor agent behaviour and performance in production.
- Ensure humans can intervene, override, or disable agent actions when necessary.

#### Responsible AI Assessment Checklist

Before deployment, teams should be able to answer:

- What problem is the AI solving?
- What are the potential harms and risks?
- How is bias identified and mitigated?
- What data is being used and how is it governed?
- What level of human oversight exists?
- How are AI decisions explained to users?
- How will the solution be monitored and audited?
- What happens if the AI produces an incorrect or harmful output?

#### References

- [Microsoft AI principles and approach](https://www.microsoft.com/ai/principles-and-approach)
- [What is responsible AI? (Microsoft Support)](https://support.microsoft.com/privacy/what-is-responsible-ai)
- [Microsoft Responsible AI](https://www.microsoft.com/ai/responsible-ai)
- [Microsoft Responsible AI Standard reference guide (PDF)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/bade/documents/products-and-services/en-us/ai/RAIS-Reference-Guide-v2.pdf)
