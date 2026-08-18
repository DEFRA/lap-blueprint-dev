---
layout: "@lap/layouts/BaseLayout.astro"
title: Azure Virtual Desktop Access
order: 4
---

# Azure Virtual Desktop Access

Request Azure Virtual Desktop (AVD) access to provide approved suppliers with a secure DEFRA-managed desktop for delivery work. Prepare the required information and follow the request, review, and provisioning flow below.

## What you're trying to do

Create a repeatable onboarding path so each project can request supplier AVD access without relying on ad hoc handovers.

## Who this is for

Primary audience:

- a project manager, delivery manager, or service owner coordinating supplier access
- a technical lead supporting onboarding into DEFRA delivery environments
- a supplier lead preparing user details for access requests

## What Azure Virtual Desktop (AVD) is

Azure Virtual Desktop (AVD) is DEFRA's managed virtual desktop environment hosted in Microsoft Azure.

Instead of accessing DEFRA systems directly from supplier-owned laptops or corporate environments, approved users work through AVD to reach DEFRA applications, systems, repositories, and services.

## Why DEFRA uses AVD

AVD helps DEFRA:

- protect government data and systems
- control access to sensitive environments
- apply consistent security policies
- support third-party suppliers working on DEFRA programmes
- monitor and audit access to systems
- reduce risk from unmanaged devices

For suppliers, AVD provides a secure environment where approved work can be carried out without direct access from supplier-owned infrastructure.

## When to request AVD access

Request AVD access when supplier personnel need to access:

- DEFRA environments
- DEFRA-hosted applications
- source code repositories
- development platforms
- cloud services
- operational support systems
- shared project resources

Access must be sponsored by a DEFRA programme manager, project manager, or authorised representative. You cannot request AVD access without a named DEFRA sponsor.

## Before you start

Before submitting an AVD request, make sure you have:

- a named DEFRA sponsor (programme manager, project manager, or authorised representative)
- a clear business justification for access
- sponsor confirmation that they will approve sponsorship and business justification
- complete details for every user who needs access
- software requirements listed explicitly (only software requested is installed)
- either a DEFRA email account or an onmicrosoft account for each supplier user

The standard software offering is documented in AZR Foundation Azure Virtual Desktop - Overview. Applications in that standard list can be requested without further approval but are not installed by default.

Typically, users should request an account in the DEFRA tenant and have it guested into DefraDev for resource deployment. To test integrations with Entra ID, a DefraDev account may also be required.

Use Cloud Accounts in MyPortal to request the required accounts.

AVD is not a project environment. It provides a secure desktop to work from, not an environment for build and test. If your team also needs a development or test environment, that is a separate request.

## Process overview

Submit supplier remote access requests using:

- [Supplier Remote Access - MyPortal](https://defragroup.service-now.com/esc?id=sc_cat_item&sys_id=40b5f8791b21f1d0848b8594e34bcb75)

Once preparation is complete, an AVD request follows these steps:

1. A need for access is identified.
2. The supplier access request is completed.
3. The DEFRA sponsor approves the request.
4. The request is submitted.
5. The request is assigned to the DEFRA DevOps Engineering Team.
6. The team reviews the request and provisions access.
7. The supplier receives access.
8. Access is tested and validated.

## Who supports this

AVD requests are reviewed and provisioned by the DEFRA DevOps Engineering Team.

## Information required for the request

Provide the following information in the request form.

| Field                                     | What to provide                                                                                                                                                                                                                                 |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requested by                              | The individual raising the request, typically a project manager, delivery manager, service owner, or team lead.                                                                                                                                 |
| Requested on behalf of                    | The individual(s) who need access. If several users need access, list them under details of users requiring access.                                                                                                                             |
| Staff number                              | The staff number of the person requiring access, where available.                                                                                                                                                                               |
| Telephone number                          | A contact number for the individual requiring access. This may already be pre-populated or provided by the DEFRA sponsor.                                                                                                                       |
| Official location                         | The individual's normal place of work, for example London, York, Bristol, or All Contractual Home Based Workers. Use the home-worker option only where applicable.                                                                              |
| Request type                              | Either New supplier or new access (a new supplier joins, or a user needs AVD access for the first time), or Replacing existing access method (an existing access solution is being retired, or users are moving to AVD from another mechanism). |
| Department                                | The sponsoring DEFRA area, for example DDTS, Environment Agency, or Legacy Application Programme. This identifies who is funding or sponsoring the work.                                                                                        |
| Key DEFRA contact details                 | The primary DEFRA contact for the engagement, typically a project manager, service owner, or delivery manager, including email details.                                                                                                         |
| Supported system or application name      | The application or service needing support, for example Cara or a service in the Legacy Application Programme.                                                                                                                                  |
| Details of users requiring access         | For each user: first name, surname, contact number, corporate email address, and accessibility requirements. Example: Jane Smith, +44 7777 123456, jane.smith@example.com, no accessibility requirements.                                       |
| Frequency of access                       | Expected usage, for example daily, weekly, or monthly.                                                                                                                                                                                          |
| Typical hours of access                   | Office hours (09:00-17:00) or 24 hours. Justify access outside standard hours.                                                                                                                                                                  |
| Source location of users                  | Where users will normally connect from, for example supplier office, home working, or client site.                                                                                                                                              |
| Target system                             | The DEFRA environment or system being accessed, for example Azure Virtual Desktop, a development environment, or a test environment.                                                                                                            |
| Hostnames, IP addresses and subnets       | Relevant technical access details where known, for example target server names, network ranges, or application URLs. If unknown, state to be confirmed by technical lead.                                                                       |
| Type of system access required            | The access protocol, for example RDP, SSH, or FTP, with justification where needed.                                                                                                                                                             |
| Specific tooling or applications required | Applications that must be available in the desktop, for example GitHub, Azure DevOps, or Visual Studio.                                                                                                                                         |
| Key supplier engagement contact           | Supplier lead responsible for users requiring access, typically a supplier delivery lead, project manager, or technical lead.                                                                                                                   |
| DEFRA service owner                       | DEFRA service owner approving the request to confirm sponsorship and business justification.                                                                                                                                                    |

Do not assume standard tooling will be provisioned automatically. If a tool is not listed on the request, do not expect it to be available in the desktop.

## Pre-submission checklist

Before submission, confirm:

- a business justification is in place
- a DEFRA sponsor has been identified
- user information is complete
- required applications are listed
- access frequency is specified
- a service owner has been identified
- contact details are accurate

## After approval

Once approved and provisioned, supplier personnel receive access to a DEFRA-managed Azure Virtual Desktop and can securely reach approved DEFRA systems and services needed for delivery.

## Escalation and queries

For questions about AVD requests, contact the DEFRA DevOps Engineering Team, who review and provision requests.
