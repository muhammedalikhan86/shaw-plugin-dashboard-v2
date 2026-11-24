# Worker queue

What each worker does next, in order. The hub keeps it current. Forward view only: finished work leaves this file; the back view is the status page's update log.
**>>** = being worked on now. Grp = group, lowest runs first; X = blocked, grouped once it is free. Category: Functional, Look and Feel, or Undetermined.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-24 11:00

## Now (from 2026-11-24 09:00)

1. Critical path: the test site. Everything on it lives in the Misc database (docs/hub/uat-in-misc.md). Shell, Portfolio Services, ps2 and Advisor build their parts now; Compliance after F-053. The Misc login works with create rights (2026-11-24). External waits: the UAT mailbox, the IIS pools and applications (Muhammed, walked through by the hub).
2. No idle worker: a worker whose next item is blocked takes its next unblocked item.
3. End sweep runs last, in this order: the designer's work synced, the developers have built it, Muhammed has tested by hand, then every parity check runs and each issue found is listed as Look and Feel.

## Shell (group 50 on main 2026-11-24; pointer: group 51)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 51 | SHELL-B-188 and a removal | Remove the old ThrowIfAnyDatabaseIsNotUat check (nothing calls it since REL-011); fix the shared switch test step so a switch's hidden icon is not read into its name (unblocks Advisor's B96 scenarios); the reads step also reads a button's text (unblocks PS's O36) | Bug | - | Building; one stack window at Integration also runs group 50's owed notification-panel e2e check | - |
| | 52 | (new Shell item) | make graph C=<component> rebuilds only that component's graph | Bug | - | After group 51 | - |
| | X | D11, D14 | Shell error and empty states (a)-(f); landing page's needs-a-newer-shell card | Look and Feel | - | Later: the words are placeholders until the business supplies them | - |

## Portfolio Services (group 53 merged 2026-11-24; pointer: group 54)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 54 | OFA-B-253 | Initial OFAs Excel export writes NEW and On paper for an imported row, as the screen does | Functional | 1 | Building; its .NET test waits for a window (after Shell and Compliance) | - |
| | X | OFA-B-251 | Fee check banner: what date "next on" means (the app has no next-sync date; it checks each business day until the month's fees arrive) | Functional | - | Later: Muhammed decides | - |
| | X | O39 | Settings report preview: the new report columns (OFA-F-191) | Functional | - | Later: Muhammed confirms the designer's guessed values (Renewal Notice Due Date = +60 days and others) | - |
| | X | O40, O41, O42 | Remove the separate Adviser review answers card; could-not-load card on six screens; the Import page as drawn | Look and Feel | - | Later: O41's page names and O42's words wait for the business | - |
| | X | OFA-F-138 | File the signed renewal in DART; also the real signing-status reader for renewals and Initial OFAs | Functional | 3 | Blocked by your DART retest | - |
| | X | OFA-F-155 | Proof of acceptance for each signer | Functional | 2 | On hold | COMPLIANCE-DASHBOARD-F-004 |
| | X | - | Browser checks owed from groups 36, 45 and 49, on the stack: the Settings report preview (both tables, a wide table scrolls, the empty-Expired line), B-233 opening month, B-235 row menu meets the card edge, B-237 Documents icon whole, B-241 table edges at 1440/1680/1920 (wide tables still scroll), F-189 Overview card | Look and Feel | 0 | Moved to the end sweep: two stack starts were killed for low memory on 2026-11-24 night; a restart needs Muhammed | - |

## Portfolio Services 2 (group 42 merged 2026-11-24; pointer: group 43; then 41, 40)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 43 | OFA-B-236 | Test site set-up: the job-table script reads ShawCentral's definitions with the read-only database login, then runs live in Misc | Functional | 1 | Building; Misc step 1 (stand-in tables, 2027 holidays) done 2026-11-24 | - |
| | 43 | OFA-B-230 | Test data: leave the Adviser Initial OFA follow-up wording with no version, so Compliance's "offers its first version" check can pass | Functional | 1 | After OFA-F-198 | OFA-F-198 |
| | 43 | OFA-B-232 | Master spreadsheet import accepts a workbook whose only sheet carries the register header (today it needs the sheet named "OFA Master ACTIVE") | Functional | 1 | After OFA-B-230 | OFA-B-230 |
| | X | OFA-F-116 | Holiday table for the closure clocks: needs 2027 loaded into the warehouse's gov.PublicHolidays | Functional | 1 | IT ticket raised; approval to run expected Wed 2026-11-25 | - |
| | X | OFA-F-120 | Word converter: built; the login works, but Shaw.Word 2.1.0 uploads to an empty drive ID (Drives[""]), so Graph refuses | Functional | - | Parked 2026-11-23 until IT names a drive the app login can write to; then a Shaw.Word DriveId setting (branch, your review) | - |
| | X | OFA-F-032 | Attachment mover: built, waiting on your SharePoint live check | Functional | - | After go-live | - |
| | 40 | OFA-B-107 | Monthly cycle S-Account not cut short: no plugin code (SHELL-F-135 covers it) | Look and Feel | - | Closes at the end-sweep parity look | - |
| | X | OFA-F-196 | Initial OFA from Luke's templates: four wording slots (electronic or print-and-sign, Estimate or Fixed), the prepare dialog asks Estimate or Fixed and whether the adviser nominates a Reference Date (design row O38, drawn 2026-11-24), signing anchors mapped, four starters from Luke's documents (0204) | Functional | 5 | Group 41; blocked: six business questions for Muhammed (Reference Date fill, Authorised Representative number source, client name, per-provider fee, signers above two, a link wording in the print-and-sign templates) | OFA-F-192 |
| | X | OFA-F-190 | Client renewal follow-up with our own wording: Annature's reminder cannot carry our subject or message. Options: (a) Annature's own reminder as is (2), (b) a fresh signing link from Annature in our own email (3, ps2's pick), (c) hold | Functional | 2-3 | Blocked: Muhammed picks a, b or c | OFA-F-130 |
| | 40 | - | End sweep, on the stack: make test-data for migrations 0201-0203, and a look at the Wording page | Functional | 0 | End sweep | - |
| | 40 | OFA-F-062 | Load test: written, runs once in the end-sweep load window | Functional | - | End sweep | - |

## Compliance (group 52 merged 2026-11-24; pointer: group 53)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 53 | - | Run M28 and M38 on the built app (stack) and drop M38's @not-built-COMPLIANCE-DASHBOARD-F-052 tag; both pass on the board | Functional | 0 | Preparing; next stack window after Shell's | - |

## Advisor (pointer: group 48 from 2026-11-24; B-132 waits for a stack window, F-144 waits on Luke)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 48 | B92, B93 | Closures: Confirm to the client only once TERMINATED, with the confirmed tip (F-146); the follow-up resend dialog's sentence (F-142) | Functional | - | Designer drew them 2026-11-24 | - |
| >> | 48 | B94, B95, B96 | Closures S-Account opens the S-Account page (B-126); status line as the chip's tip (B-127); Show all events switch reads its name (B-134) | Bug | - | Designer drew them 2026-11-24 | - |
| >> | 48 | B97-B100 | Scope line for several codes; Renewal tracker filter Reset; smaller Arrangements empty card; Closures wording in B92's order | Look and Feel | - | Designer drew them 2026-11-24 | - |
| | 49 | ADVISOR-DASHBOARD-B-142 | Renewal tracker: pick another address for a bounced signing email, as the board draws it (S18471) | Functional | 2 | After group 48; needs an API change | - |
| | X | B101 | Signatory address link tip when the follow-up email failed | Look and Feel | - | Later: design row, goes to the designer next round | - |
| | X | ADVISOR-DASHBOARD-F-144 | The OFA timeline | Functional | 6 | Blocked: waiting on Luke. Asked 2026-11-23 what the Adviser's OFA History tab should show, with the Portfolio Services and Compliance tabs as examples; then the design | - |
| | X | ADVISOR-DASHBOARD-B-132 | OFA questionnaire still stutters after ADVISOR-DASHBOARD-B-130 and SHELL-B-184: each answer edit and Select all block the screen for about 1 s; profile a production build in a real browser and fix it (shared shell code goes to Shell) | Bug | 3 | Blocked: needs a stack (production build in a real browser); no stack tonight |  - |

## Hub

Deployment and testing (from 2026-11-23): the work left is the REL- stack in `docs/leftovers.md`, worked top first. REL-001 to REL-010 are on go.

1. Designer round synced 2026-11-24 and routed. Shell boards (Main, ShellCollapsed, AccountRow, NotificationPanel, SearchPanel, the current landing page) sent to the designer to draw D8-D14 on (Muhammed sends).
2. Test site server set up 2026-11-24 (Muhammed; checked from screenshots): four pools, four applications, Windows sign-in, folder rights. Before the first deploy: Misc job tables (ps2 OFA-B-236), the test mailbox address (Muhammed), then deploy with -Environment UAT.
3. End sweep, last: after the designer's work is synced, built, and tested by hand by Muhammed; every parity check, each issue listed as Look and Feel.
4. Waiting on you: push main; the SyncFee grant: OFA-F-160 is on main, so the gMSA's EXECUTE on dbo.SyncFee can be dropped on the server (PS removes line 3 of SyncFee-grants.sql in group 10); rerun the OFA-S-005 spike on the unredacted master spreadsheet (scripts in the PS checkout, spikes/OFA-S-005, uncommitted); check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj; the DART retest (another day); the OFA-S-001 owner questions: DART's open-a-document URL and whether staff have DART logins (OFA-F-145 and F-055 are built behind Dart:DocumentLinkTemplate, off until it is set); PS's 8 production settings.
5. 2026-11-24, with the stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database through the Wording page's upload, so each slot shows the business wording, not the [Test data] text. NoOfaFeeAdvisorEmail and RenewalConfirmation wait for ps2's field-library fix.


Push: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin main`
