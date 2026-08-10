---
layout: "@lap/layouts/BaseLayout.astro"
title: "P-09: Access to Azure Virtual Desktop"
order: 9
---

# P-09: How to Access to Azure Virtual Desktop

**Process ID:** P-09

**Title:** How to Access to Azure Virtual Desktop

**What You're Trying To Do:**
How do we create a repeatable sandbox onboarding process per project that any future LAP delivery team can follow without needing DEFRA colleagues to walk through it personally?

**Who This Is For:**
This is guidance for project managers, delivery managers, service owners, technical leads, and suppliers supporting DEFRA applications. This guidance explains how suppliers request access to the DEFRA Azure Virtual Desktop (AVD ) environment, what you need in place before you start, and the information to gather before submitting a request.


**What is Azure Virtual Desktop (AVD)**
Azure Virtual Desktop (AVD) is DEFRA's managed virtual desktop environment, hosted within Microsoft Azure.
Rather than accessing DEFRA systems directly from their own laptops or corporate environments, suppliers use AVD as a secure, DEFRA controlled desktop from which approved users can reach DEFRA applications, systems, repositories and services.

**Why DEFRA uses AVD**

AVD helps DEFRA:

- protect government data and systems
- control access to sensitive environments
- apply consistent security policies
- support third-party suppliers working on DEFRA programmes
- monitor and audit access to systems
- reduce the risks associated with unmanaged devices

For suppliers, AVD is a secure working environment where approved work can be carried out without needing direct access from supplier-owned infrastructure.

**When to request AVD access**

Request AVD access when supplier personnel need to access:

- DEFRA environments
- DEFRA hosted applications
- Source code repositories
- Development platforms
- Cloud services
- Operational support systems
- Shared project resources

Access must be sponsored by a DEFRA programme manager, project manager, or authorised representative. You cannot request AVD access without a named DEFRA sponsor.

**What you need before you start**

Before you submit an AVD access request, make sure you have the following in place:

- A named DEFRA sponsor: a programme manager, project manager, or authorised representative. You cannot request access without one.
- A clear business justification for the access.
- A DEFRA sponsor to approve the request and confirm the sponsorship and business justification.
- The details of every user who needs AVD access. 
- The standard software offering is detailed in AZR Foundation Azure Virtual Desktop - Overview the listed applications can be requested without further approval but are not provided by default. Only the software specifically requested will be installed.
- Suppliers must have either a Defra email account or an onmicrosoft account before AVD (Supplier RAS) access can be provisioned. If a supplier does not already have a Defra email account, they can request a cloud account (onmicrosoft). 
- Typically, users should request an account be created in the Defra tenant and have this guested into DefraDev for the deployment of resources. However, to test integrations with Entra ID, they may also require a DefraDev account. Here is the MyIT link to request both: Cloud Accounts - MyPortal.

AVD is not a project environment. It gives you a secure desktop to work from, not somewhere to build and test. If your team also needs a development or test environment, that's a separate request.
	
**Process overview**

AVD Request Form: [Supplier Remote Access - MyPortal](https://defragroup.service-now.com/esc?id=sc_cat_item&sys_id=40b5f8791b21f1d0848b8594e34bcb75)

Once you've gathered what you need, an AVD access request follows these steps:

1.	A need for access is identified.
2.	The supplier access request is completed.
3.	The DEFRA sponsor approves the request.
4.	The request is submitted.
5.	The request is assigned to the DEFRA DevOps Engineering Team.
6.	The team reviews the request and provisions access.
7.	The supplier receives access.
8.	Access is tested and validated.

**Who supports this**

AVD access requests are reviewed and provisioned by the DEFRA DevOps Engineering Team.

**Information you'll need for your request**

Provide the following information when you submit a request.

| Field<br> | What to provide<br> |
| --- | --- |
| Requested by<br> | The name of the individual raising the request, typically a project manager, delivery manager, service owner, or team lead.<br> |
| Requested on behalf of<br> | The individual(s) who needs access. If several users need access, list them under “Details of users requiring access” below.<br> |
| Staff number<br> | The staff number of the person requiring access, where available.<br> |
| Telephone number<br> |	A contact telephone number for the individual requiring access. This may already be pre-populated or provided by DEFRA Sponsor.<br> |
| Official location<br> |	The individual's normal place of work, for example, London, York, Bristol, or “All Contractual Home Based Workers.” Use the home-worker option only if it applies.<br> |
| Request type<br> |	Either “New supplier or new access” (a new supplier joins, or a user needs AVD access for the first time), or “Replacing existing access method” (an existing access solution is being retired, or users are moving to AVD from another mechanism).<br> |
| Department<br> |	The sponsoring DEFRA area, for example, DDTS, Environment Agency, or Legacy Application Programme. This identifies who is funding or sponsoring the work.<br> |
| Key DEFRA contact details<br> |	The primary DEFRA contact for the engagement. Typically a project manager, service owner, or delivery manager. Include email details.<br> |
| Supported system / application name<br> |	The application or service that needs support. For example, Cara, or an application within the Legacy Application Modernisation Programme.<br> |
| Details of users requiring access<br> |	For each user: first name, surname, contact number, corporate email address, and any accessibility requirements.<br>Example: Jane Smith, +44 7777 123456, jane.smith@example.com, no accessibility requirements.<br> |
| Frequency of access<br> |	The expected usage: daily, weekly, or monthly.<br> |
| Typical hours of access<br> |	Office hours (09:00–17:00) or 24 hours. Justify any requirement outside standard hours.<br> |
| Source location of users<br> |	Where users will normally connect from. For example, supplier office, home working, or client site.<br> |
| Target system<br> |	The DEFRA environment or system being accessed. For example, Azure Virtual Desktop, a development environment, or a test environment.<br> |
| Hostnames, IP addresses and subnets<br> |	Relevant technical access details where known. For example, target server names, network ranges, or application URLs. If unknown, state “to be confirmed by technical lead.”<br> |
| Type of system access required<br> |	The access protocol. For example, RDP, SSH, or FTP. Provide justification where special access is needed.<br> |
| Specific tooling or applications required<br> |	The applications that must be available in the virtual desktop. For example, GitHub, Azure DevOps, or Visual Studio.<br> |
| Key supplier engagement contact<br> |	The supplier lead responsible for the users requiring access. Typically, a supplier delivery lead, project manager, or technical lead.<br> |
| DEFRA service owner<br> |	The DEFRA service owner approving the request. This is required to confirm sponsorship and business justification.<br>|

Don't assume standard tooling will be provisioned automatically. If a tool isn't listed on your request, don't expect it to be available in the desktop.

**Before you submit: checklist**

Before submitting, confirm that:

- a business justification exists
- a DEFRA sponsor has been identified
- user information is complete
- the required applications are listed
- the access frequency has been specified
- a service owner has been identified
- contact details are accurate

**Escalation and queries**

For questions about AVD access requests, contact the DEFRA DevOps Engineering Team, who review and provision the requests.

**What happens once your request is approved**
Once your request is approved and provisioned, supplier personnel receive access to a DEFRA-managed Azure Virtual Desktop. From there, they can securely reach the approved DEFRA systems and services needed for delivery.

