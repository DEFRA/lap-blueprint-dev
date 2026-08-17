---
layout: "@lap/layouts/BaseLayout.astro"
phase: alpha
title: Source code acquisition
order: 1
---

# Source code acquisition

Acquire source code for legacy DEFRA applications through coordinated ownership checks, approvals, secure transfer, sanitisation, and sign-off. Because legacy applications vary in age, technology, ownership, and hosting, follow the phases and approval routes in this process.

## What you're trying to do

You need to obtain access to or a copy of source code from a legacy application you're planning to modernise. This involves:

- identifying the application owner and confirming it is in scope for modernisation
- obtaining business and supplier approvals
- arranging secure transfer of the code
- receiving and storing the code safely
- sanitising the code to remove sensitive data
- preparing it for modernisation work to begin

## Who this is for

Primary audience:

- a legacy application owner or project manager coordinating code acquisition
- an engineer preparing to receive and onboard legacy source code
- a governance or security reviewer approving source code access
- an IAO (Information Asset Owner) reviewing the code for sensitive data

## The journey at a high level

Source code acquisition follows these broad phases:

1. **Identify and validate**: Confirm the application exists, who owns it, and that modernisation is approved
2. **Obtain approvals**: Secure business and supplier management consent to release the code
3. **Transfer securely**: Agree on a transfer method and receive the code safely
4. **Receive and store**: Download the code and store it according to governance requirements
5. **Sanitise**: Remove sensitive data using the [LAP PII Screener](./pii-scanning/)
6. **Get IAO sign-off**: Confirm the code is clean and ready for modernisation

The exact steps and people involved depend on who currently hosts and supports the application, but the overall shape remains the same.

## Before you start

Make sure the following are in place:

- The current source code owner has been identified and located
- The application has been identified and prioritised for modernisation
- A DEFRA GitHub repository is ready to receive the source code
- You have appropriate access to DEFRA GitHub (see [GitHub Access](./github-access/) for details)
- You have access to a dedicated LAP SharePoint for secure code storage
- You have a DEFRA laptop or dev container available to run the [PII Screener](./pii-scanning/) (screening must be done locally on DEFRA infrastructure)

## Identify and validate the application

**Who leads this:** Project Manager or application owner

Confirm the following with the current application owner or their manager:

- **Application name and scope**: what is the system, and which business area does it serve?
- **Current hosting and support**: is it hosted by AMS, another supplier, DEFRA, or on-premises?
- **Current source code location**: where is the repository or codebase currently stored?
- **Modernisation business case**: why is modernisation being pursued, and what outcomes are expected?
- **Delivery timeline**: when does modernisation need to begin?

If the application is hosted by AMS (Application Management Services), proceed through the AMS validation route below. If it's hosted elsewhere, the approval structure differs, but the overall journey remains similar. Identify a single point of contact with authority to release the code, and obtain their sign-off.

### AMS validation (if applicable)

If the application is hosted by AMS:

1. Submit a "Request for a Minor Enhancement" through the Microsoft Form available to DEFRA users
2. Ask for confirmation that the application is in-scope for AMS
3. Request AMS support for source code acquisition in the same submission
4. This typically takes 1–2 working days

Only proceed to seeking formal approvals after AMS confirms the application is in scope. Approval timelines vary, so submit your request early.

## Key principles for flexible acquisition

Legacy applications vary widely. These principles help navigate that variability:

- Ask, don't assume. Different applications have different hosting, approval chains, and data sensitivities. Confirm requirements with the code owner and your security or IAO team.
- Identify blockers early. If access is difficult, approvals are delayed, or the code contains extensive hardcoded secrets, raise these as project risks immediately.
- Plan for divergence. If you receive an offline snapshot and the application is still in production, document the lag and plan how to handle future production changes.
- Govern properly. Store code securely, restrict access, and obtain all required approvals before modernisation begins.

## Obtain approvals

**Who leads this:** Project Manager

Two separate approval routes run in parallel:

| Approval type           | Led by                          | What's needed                                                                                                  | Timeline         |
| ----------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------- |
| **Business approval**   | Project Manager or Programme PM | The business owner, ALB representative, or programme manager confirms the modernisation is approved and funded | 1–5 working days |
| **Supplier management** | Project Manager                 | DEFRA DDTS Supplier Management confirms consent to share the source code with the modernisation team           | 1–3 working days |

Both approvals must be in place before code transfer begins. Because business approval timelines vary significantly, submit it early.

Document both approvals in your project file. They form a required governance gate.

## Arrange secure transfer

**Who leads this:** Project Manager (coordination) and current code owner (technical delivery)

The current code owner (or their hosting team SME) will:

- Locate the repository
- Prepare the approved source code package
- Agree a secure transfer method with you

Common transfer methods include:

| Method                   | How it works                                                                          | Advantages                                         | Considerations                                                    |
| ------------------------ | ------------------------------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------- |
| **Repository access**    | You receive read-only access to the live repository; you create a branch to work on   | Always on the latest code; easier to merge updates | Requires VPN/network setup; access must be provisioned in advance |
| **Offline snapshot**     | You receive a one-off export of the code (usually as a ZIP file) via secure transfer  | Faster to set up; no ongoing access to manage      | Code can diverge from production; document this as a project risk |
| **Secure file transfer** | Code is transferred via a DEFRA-approved secure transfer tool (e.g., ShareFile, SFTP) | Auditable and compliant; suitable for large files  | Requires coordination with both teams on timing                   |

**Agree the method with the code owner before transfer begins.** Different applications use different infrastructure, so flexibility is important.

Once transfer is agreed:

- **If receiving a snapshot**, the code holder uploads it as a ZIP file to a designated secure location (such as LAP SharePoint). You must download and store this immediately, as some secure transfer tools have limited retention periods (for example, 3 days).
- **If receiving repository access**, confirm you have the necessary network and VPN access in place
- Confirm data residency and security requirements with your security team

## Receive and store the code

**Who leads this:** Engineer (technical), Project Manager (governance)

When you receive the code:

1. Download and store it in an approved secure location (typically a dedicated SharePoint or secure file share)
2. If you received a ZIP snapshot, extract it to a secure DEFRA laptop
3. Delete any `.git` folder or other version history. This ensures historic versions containing sensitive data are not carried forward into the new clean repository
4. Restrict access to named team members only
5. Document who has access and apply governance controls
6. Do not yet commit it to the main GitHub repository. Wait until it has been sanitised

If you received a repository snapshot (not live access), note the date and version you received. Document any lag between the snapshot date and the current production version as a project risk.

## Sanitise the code

**Who leads this:** Engineer with IAO input

Before the code can be moved into your GitHub repository or used in modernisation, it must be scanned for sensitive data (secrets, API keys, personally identifiable information).

### Run the LAP PII Screener

Use the [LAP PII Screener](./pii-scanning/) tool to scan the code locally:

1. Run the PII Screener according to its documentation
2. If needed, use the Obfuscate PII feature to remove personal data
3. Review all findings and generate a report

The tool will find:

- API keys, passwords, tokens, and connection strings
- Structured PII (email addresses, phone numbers, financial data, national insurance numbers)
- Unstructured PII (person names and addresses in code comments or strings)
- Known security vulnerabilities

### Remediate findings

For each finding:

1. Determine whether the sensitive value is still needed in the code (e.g., a hardcoded test email) or can be removed
2. Remove the value, replace it with a placeholder or environment variable, or redact it using the [PII Screener's obfuscation feature](./pii-scanning/)
3. Re-run the scanner to confirm the finding is resolved
4. Document what was found and how it was remediated

Some findings may require discussion with the original code owner (e.g., "is this hardcoded API key still in use?"). Don't guess. Ask.

Non-plaintext files (Word, Excel, PDF, images) require manual review; the [PII Screener](./pii-scanning/) does not analyse these.

### Obtain IAO sign-off

**Who signs off:** Information Asset Owner (IAO)

Before committing the cleaned code to GitHub:

1. Provide the IAO with the PII Screener report and your remediation summary
2. The IAO must confirm in writing that the code is free of sensitive data and safe to store in GitHub
3. This is a required gate, not a formality. Unreviewed code must not proceed

Document the IAO sign-off in your project file.

## Commit to GitHub and begin modernisation

Once IAO approval is in place, set up the new clean repository:

1. Initialise a local repository with the cleaned code:
   ```
   git init
   ```
2. Add your DEFRA GitHub repository as the remote:
   ```
   git remote add origin https://github.com/DEFRA/<your-repo>.git
   ```
3. Commit the cleaned source code:
   ```
   git add .
   git commit -m "Initialise repository with personal-data-free legacy source"
   ```
4. Push to your GitHub repository:
   ```
   git push -u origin main
   ```

Once the clean code is successfully in GitHub:

5. Mark the original legacy code as read-only (this is done by the owner of the original code) unless a critical issue is discovered that requires returning to the original
6. Delete the ZIP file from the LAP SharePoint
7. Modernisation work can now begin

## Key governance rules

- **Screen on DEFRA infrastructure.** Download and scan the code on a DEFRA laptop so you can run the [personal data screener](./pii-scanning/) locally.
- **Remove version history.** Always delete the `.git` folder and other version history so historic versions containing sensitive data are not carried into the new repository.
- **Create a clean repository.** Initialise a new repository and push the sanitised source code. Do not reuse the legacy repository or its history.
- **Screening and IAO approval first.** Both must be complete before the code is used for modernisation or shared more widely.
- **Secure the original.** Once the clean copy is in place, mark the original legacy code as read-only and delete the ZIP from the LAP SharePoint.
- **Document everything.** Keep records of approvals, transfer methods, sanitisation findings, and risks.

## Known risks to plan for

- **Unclear ownership.** Service records can be out of date. Confirm the current owner directly and expect to chase through more than one contact sometimes.
- **Approval delays.** Business approval varies significantly by area and can take time. Submit requests early so they don't hold up the transfer.
- **Code divergence.** If you receive an offline snapshot and the application is still in production, the code can drift. You may miss production changes and face a difficult merge. Prefer repository access where the code is actively changing, and always document this as a project risk when using snapshots.
- **Limited retention on secure transfers.** Some secure transfer tools have limited file retention periods (for example, 3 days). Download the package immediately and move it to your approved secure location.

## Key principles for flexible acquisition

Legacy applications vary widely. These principles help navigate that variability:

- **Ask, don't assume.** Different applications have different hosting, approval chains, and data sensitivities. Confirm requirements with the code owner and your security/IAO team.
- **Identify blockers early.** If access is difficult, if approvals are delayed, or if the code contains extensive hardcoded secrets, raise these as project risks immediately.
- **Plan for divergence.** If you receive an offline snapshot and the application is still in production, document the lag and plan how to handle future production changes.
- **Govern properly.** Store code securely, restrict access, and obtain all required approvals before modernisation begins.

## Where to get help

- To confirm ownership or which route applies: your project leads and DEFRA PMO
- For the AMS route: submit a Request for a Minor Enhancement using the Microsoft Form available to DEFRA users
- For approvals: the application's business owner and DEFRA DDTS Supplier Management
- For personal data sign-off: the Information Asset Owner (IAO)
- For repository setup: your engineering lead and [DEFRA's GitHub access standards](https://defra.github.io/software-development-standards/processes/github_access/)
