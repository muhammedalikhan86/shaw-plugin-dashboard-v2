# Worker queue

What each worker does next, in order. The hub keeps it current. Forward view only: finished work leaves this file; the back view is the status page's update log.
**>>** = being worked on now. Grp = group, lowest runs first; X = blocked, grouped once it is free. Category: Functional, Look and Feel, or Undetermined.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-24 13:51

## Now (from 2026-11-24 09:00)

1. Critical path: the test site. Everything on it lives in the Misc database (docs/hub/uat-in-misc.md). Server set up, Misc loaded, mailbox and AD group in, every API's settings fixed and merged (2026-11-24). Next: Shell prepares the 9 parts, then Muhammed runs deploy.ps1 from his own PC.
2. No idle worker: a worker whose next item is blocked takes its next unblocked item.
3. End sweep runs last, in this order: the designer's work synced, the developers have built it, Muhammed has tested by hand, then every parity check runs and each issue found is listed as Look and Feel.

## Shell (group 51 on main 2026-11-24; pointer: group 52)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | - | - | Test-site release prepared: all 9 parts with -PrepareOnly -Environment UAT | Functional | 0 | 8 of 9 passed 2026-11-24; Advisor's test fix merged (ADVISOR-DASHBOARD-B-144); advisor-dashboard-api is prepared again after Advisor's .NET run | - |
| >> | 52 | SHELL-F-181, SHELL-F-182, SHELL-B-192 | make graph C=<component> rebuilds one graph (built); the REL-011 docs (ADR-031, leftovers.md, uat.md); the shared demoSetting step stops timing out at sign-in under load (3 scenarios) | Functional | 2 | Nearly done: F-181 built, B-192 proven 12/12, F-182 docs being written; committed before Muhammed's deploy | - |
| | 53 | SHELL-F-184 | Testers see which release they are on: every part stamped with release.json at prepare time (tag, commit, date), GET /release on each API, a Release card on the Profile page with each shell, plugin and API row, marked UAT; board first | Functional | 6 | After group 52; for deploy 2 | - |
| | X | D11, D14 | Shell error and empty states (a)-(f); landing page's needs-a-newer-shell card | Look and Feel | - | Later: the words are placeholders until the business supplies them | - |

## Portfolio Services (groups 54 and 55 merged 2026-11-24; pointer: group 56)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 56 | OFA-B-259, OFA-B-257, OFA-B-260 | Test site: Chrome:Path set (Chrome confirmed on sic2iws1); import messages name the sheet actually read; the letterhead from Muhammed's 2021 Word file for the Chromium path (logo and offices on page 1, Page N after) | Functional | 3 | B-259 and B-257 built and reviewed, waiting for a .NET window; B-260 in review, one ruling with Muhammed (a PDF package for the page-1 footer); the @review-O36 tag drop rides along | - |
| | X | OFA-B-251 | Fee check banner: what date "next on" means (the app has no next-sync date; it checks each business day until the month's fees arrive) | Functional | - | Later: Muhammed decides | - |
| | X | O39 | Settings report preview: the new report columns (OFA-F-191) | Functional | - | Later: Muhammed confirms the designer's guessed values (Renewal Notice Due Date = +60 days and others) | - |
| | X | O40, O41, O42 | Remove the separate Adviser review answers card; could-not-load card on six screens; the Import page as drawn | Look and Feel | - | Later: O41's page names and O42's words wait for the business | - |
| | X | OFA-F-138 | File the signed renewal in DART; also the real signing-status reader for renewals and Initial OFAs | Functional | 3 | Blocked by your DART retest | - |
| | X | OFA-F-155 | Proof of acceptance for each signer | Functional | 2 | On hold | COMPLIANCE-DASHBOARD-F-004 |
| | X | - | Browser checks owed from groups 36, 45 and 49, on the stack: the Settings report preview (both tables, a wide table scrolls, the empty-Expired line), B-233 opening month, B-235 row menu meets the card edge, B-237 Documents icon whole, B-241 table edges at 1440/1680/1920 (wide tables still scroll), F-189 Overview card | Look and Feel | 0 | Moved to the end sweep: two stack starts were killed for low memory on 2026-11-24 night; a restart needs Muhammed | - |

## Portfolio Services 2 (group 43 merged 2026-11-24; pointer: group 44)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 44 | OFA-F-200, OFA-B-238 | Advisor surface: re-send a bounced signing request to another address (advisor.usp_SigningResend_Read, advisor.usp_Signing_Resend), and the bounced envelope is voided on the Adviser's path too | Functional | 5 | Building; Muhammed ruled 2026-11-24 that an Adviser may re-send | - |
| | 45 | OFA-F-202 | The four Initial OFA starters rebuilt on the 2021 letterhead (Muhammed's file, 2026-11-24): each sample line becomes a field; the Adviser's title line dropped and the reference line is the account number (Muhammed, 2026-11-24); the six F-196 fields marked awaiting answer | Functional | 3 | After group 44 | - |
| | owed | - | Full business-test run on the changed shared seed (OFA-B-230, merged 2026-11-24) | Functional | - | Next free stack window | - |
| | X | OFA-F-116 | Holiday table for the closure clocks: needs 2027 loaded into the warehouse's gov.PublicHolidays | Functional | 1 | IT ticket raised; approval to run expected Wed 2026-11-25 | - |
| | X | OFA-F-120 | Word converter: built; the login works, but Shaw.Word 2.1.0 uploads to an empty drive ID (Drives[""]), so Graph refuses | Functional | - | Parked 2026-11-23 until IT names a drive the app login can write to; then a Shaw.Word DriveId setting (branch, your review) | - |
| | X | OFA-F-032 | Attachment mover: built, waiting on your SharePoint live check | Functional | - | After go-live | - |
| | 40 | OFA-B-107 | Monthly cycle S-Account not cut short: no plugin code (SHELL-F-135 covers it) | Look and Feel | - | Closes at the end-sweep parity look | - |
| | X | OFA-F-196 | Initial OFA from Luke's templates: four wording slots (electronic or print-and-sign, Estimate or Fixed), the prepare dialog asks Estimate or Fixed and whether the adviser nominates a Reference Date (design row O38, drawn 2026-11-24), signing anchors mapped, four starters from Luke's documents (0204) | Functional | 5 | Blocked: six business questions for Muhammed (Reference Date fill, Authorised Representative number source, client name, per-provider fee, signers above two, a link wording in the print-and-sign templates) | - |
| | X | OFA-F-190 | Client renewal follow-up with our own wording: Annature's reminder cannot carry our subject or message. Options: (a) Annature's own reminder as is (2), (b) a fresh signing link from Annature in our own email (3, ps2's pick), (c) hold | Functional | 2-3 | Blocked: Muhammed picks a, b or c | - |
| | 40 | - | End sweep, on the stack: make test-data for migrations 0201-0203, and a look at the Wording page | Functional | 0 | End sweep | - |
| | 40 | OFA-F-062 | Load test: written, runs once in the end-sweep load window | Functional | - | End sweep | - |

## Compliance (group 54 merged 2026-11-24; pointer: group 53)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 53 | - | Run M28 and M38 on the built app (stack) and drop M38's @not-built-COMPLIANCE-DASHBOARD-F-052 tag; both pass on the board | Functional | 0 | Third run failed: the shell's stale federation cache, now cleared; retries after Advisor's window | - |
| | 53 | - | Drop @not-built-OFA-B-230 from wording.feature (2 scenarios) now that OFA-B-230 is on main | Functional | 0 | With the M28/M38 run | - |
| | X | W44 | Wording page: the no-version slot says a placeholder is sent; Portfolio Services actually sends the approved built-in email (Adviser Initial OFA follow-up) | Look and Feel | - | Later: design row, goes to the designer next round; words need the business's approval | - |

## Advisor (group 48 and B-143 merged 2026-11-24; pointer: group 49; B-132 waits for a stack window, F-144 waits on Luke)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 49 | ADVISOR-DASHBOARD-B-142 | Renewal tracker: pick another address for a bounced signing email, as the board draws it (S18471) | Functional | 2 | Built, reviewer PASS, front end green; waits for a 6-minute .NET window; group 48's owed built-app checks share a later stack window | OFA-F-200 |
| | X | B101 | Signatory address link: the tip and the re-send dialog when the follow-up email failed (widened 2026-11-24) | Look and Feel | - | Later: design row, goes to the designer next round | - |
| | X | ADVISOR-DASHBOARD-F-144 | The OFA timeline | Functional | 6 | Blocked: waiting on Luke. Asked 2026-11-23 what the Adviser's OFA History tab should show, with the Portfolio Services and Compliance tabs as examples; then the design | - |
| | X | ADVISOR-DASHBOARD-B-132 | OFA questionnaire still stutters after ADVISOR-DASHBOARD-B-130 and SHELL-B-184: each answer edit and Select all block the screen for about 1 s; profile a production build in a real browser and fix it (shared shell code goes to Shell) | Bug | 3 | Blocked: needs a stack (production build in a real browser); no stack tonight |  - |

## Hub

Deployment and testing (from 2026-11-23): the work left is the REL- stack in `docs/leftovers.md`, worked top first. REL-001 to REL-010 are on go.

1. Designer round synced 2026-11-24 and routed. Shell boards (Main, ShellCollapsed, AccountRow, NotificationPanel, SearchPanel, the current landing page) sent to the designer to draw D8-D14 on (Muhammed sends).
2. Test site: server set up and checked, Misc loaded, mailbox and AD group "Shaw Portal UAT Testers" in (testers: Luke, Nick, Muhammed), every API's settings fixed and merged, deploy.ps1 takes each API offline with app_offline.htm (2026-11-24). Next: Shell's -PrepareOnly of all 9 parts, then Muhammed runs the 9 deploy commands from his PC, ps2 runs the register seed, and Muhammed checks one test email arrives. A second PS-only deploy brings notices (Chrome and the letterhead).
3. End sweep, last: after the designer's work is synced, built, and tested by hand by Muhammed; every parity check, each issue listed as Look and Feel.
4. Waiting on you: push main; the SyncFee grant: OFA-F-160 is on main, so the gMSA's EXECUTE on dbo.SyncFee can be dropped on the server (PS removes line 3 of SyncFee-grants.sql in group 10); rerun the OFA-S-005 spike on the unredacted master spreadsheet (scripts in the PS checkout, spikes/OFA-S-005, uncommitted); check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj; the DART retest (another day); the OFA-S-001 owner questions: DART's open-a-document URL and whether staff have DART logins (OFA-F-145 and F-055 are built behind Dart:DocumentLinkTemplate, off until it is set); PS's 8 production settings.
5. After ps2's OFA-F-202 (the starters on the letterhead), with the stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database through the Wording page's upload, so each slot shows the business wording, not the [Test data] text. NoOfaFeeAdvisorEmail and RenewalConfirmation wait for ps2's field-library fix.


Push: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin main`
