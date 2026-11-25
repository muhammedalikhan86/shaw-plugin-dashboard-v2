# Worker queue

What each worker does next, in order. The hub keeps it current. Forward view only: finished work leaves this file; the back view is the status page's update log.
**>>** = being worked on now. Grp = group, lowest runs first; X = blocked, grouped once it is free. Category: Functional, Look and Feel, or Undetermined.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-25 13:39

## Go-live gate (before prod)

Only the OFA database talks to the warehouse and PowerBI; the APIs keep no DW/PBI connection strings. PS2 builds M1–M6 and the PS readers; Advisor switches its readers after M5/M6. Plan: docs/hub/analysis/dw-procedures-plan.md. Size: 48 points PS2 + Advisor's switch (size to come).

## Now (from 2026-11-24, UAT started)

1. UAT is running on the test site. The critical-path hold is lifted: every worker builds all unblocked work in parallel, ordered by business value:
   1. bugs the OFA Team finds in UAT, first;
   2. anything that helps testers (release card, data refresh);
   3. other functional items;
   4. look and feel.
2. One stack or .NET window at a time on the machine. Order: PS, then PS2, then Compliance, then Advisor's short run. All five workers are parked at a safe spot (2026-11-25: the 5-hour usage window is near).
3. Parity sweep (queued after those windows; run again at the very end): each worker runs the disparity-checker on its own component in its own window, in this order: Compliance, Portfolio Services, Advisor, Shell. For every disparity, save a small actual-vs-expected screenshot pair (about 480 px wide, cropped to the difference) under docs/design/screenshots/parity/<component>/, and give each finding its breadcrumb path (e.g. Portfolio Services › Renewals › S19630 › Notice) and state. The hub gathers them on one private page for Muhammed to prioritise; each one is then queued as Look and Feel or Functional.
4. No idle worker: a worker whose next item is blocked takes its next unblocked item.
5. After each test-site deploy: update-uat-status.ps1, then update-uat-data.ps1 in v2, then commit and push.

## Shell (pointer: parked, queue empty; SHELL-B-206 and SHELL-F-187 on main 4dd7be29)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | Shell 2 | Filter dialog copies the column's info tip onto the ASF fields | Look and Feel | - | Later (Muhammed) | - |
| | X | B103-B106 | Shell 4 (user card seat line), 7 ("Seconds" label), 8 (Act As 4px gap), 9 (empty notifications' Mark all as read): the build is right, the boards change | Look and Feel | - | Design rows, later | - |
| | X | D11, D14 | Shell error and empty states (a)-(f); landing page's needs-a-newer-shell card | Look and Feel | - | Later: the words are placeholders until the business supplies them | - |

## Portfolio Services (pointer: parked f0911374, group 64)

Group 64: OFA-F-143, OFA-F-141 (Reference Date part), OFA-B-251 (the banner's next 1st of the month), the gridpay move, migrations 0220, 0221, 0223; 0222 held for F-141 option a (waits on Muhammed). Next, in its machine window, one at a time: .NET, the PS business project, Jest; then one finalize (PS architecture v229, PMBook v318, Platform Architecture pointers to v168); then ready-to-merge.

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 64 | OFA-F-143 | Record a reviewed finding's follow-up steps | Functional | 3 | Built (parked); tests in the window | - |
| >> | 64 | OFA-F-141 | Correct a Reference Date or product, logged in the compliance trail (Reference Date part; 0222 held for option a) | Functional | 5 | Built (parked); tests in the window | - |
| >> | 64 | - | The gridpay move (0223); SyncFee-grants.sql deleted, docs drop grant lines | Functional | 0 | Built (parked); tests in the window | - |
| | 64 | OFA-B-251 | Exceptions report banner: 'next on' shows the next 1st of the month | Functional | 1 | To build when PS resumes | - |
| | P1 | B-137 | Arrangement record: Platform and Platform account number already two columns, nowrap, nothing cut (OFA-B-111) | Look and Feel | 0 | Not applicable: already built; B112 checks the PS board | - |
| | X | - | Rename the local databases to `ShawPortal-OngoingFeeArrangements-*` (dev, warehouse and test databases; scripts, Makefile, tests, docs in every OFA component), to match the live name | Functional | - | Later: Muhammed says when; raised as a sized item then | - |
| | X | O41, O42 | Could-not-load card on six screens; the Import page as drawn | Look and Feel | - | Later: O41's page names and O42's words wait for the business | - |
| | X | OFA-F-138 | File the signed renewal in DART; also the real signing-status reader for renewals and Initial OFAs | Functional | 3 | Blocked by your DART retest | - |
| | X | - | Browser checks owed from groups 36, 45 and 49, on the stack: the Settings report preview (both tables, a wide table scrolls, the empty-Expired line), B-233 opening month, B-235 row menu meets the card edge, B-237 Documents icon whole, B-241 table edges at 1440/1680/1920 (wide tables still scroll), F-189 Overview card | Look and Feel | 0 | Moved to the end sweep: two stack starts were killed for low memory on 2026-11-24 night; a restart needs Muhammed | - |
| | X | - | Parity backlog from ps2 window 2026-11-24: O38 checkbox label colour (#404040) and radio-to-checkbox gap (56px); OFA-F-108 dialog frame: dashed 120px wording box, "Add attachments (optional)" row, 110px notched Note label | Look and Feel | - | End sweep; raise as rows then | - |

## Portfolio Services 2 (pointer: parked d5ba3d5a)

Groups A+B built and reviewed; next: one joint Integration in its window, then finalizers, then ready-to-merge. Group C is uncommitted in the detached worktree C:\Users\muhammedali.khan\source\repos\ps2c: production code builds, tests left. Group D after C.

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | P2 | O47, OFA-F-206 | Initial OFA prepare: tick the signers on the letter, set the salutation (design row first, then build) | Functional | ?? | Design row now; build blocked on the designer | O47 drawn |
| >> | A | OFA-F-208 | M1 (migration 0214): the datawarehouse, powerbi and shawcentral schemas, list types and synonyms | Functional | 3 | Built; joint Integration in the window | - |
| >> | A | OFA-F-210 | M2 (migration 0215): PS scope, calendar and directory reads as procedures | Functional | 5 | Built; joint Integration in the window | - |
| >> | A | OFA-F-220 | PS readers 1–3 and 14–20 switch to the procedures (ShawCentral 15, 16, 19, 20 via shawcentral.*) | Functional | 5 | Built; joint Integration in the window | - |
| >> | B | OFA-F-216 | M5 (migration 0216): Advisor's DataWarehouse reads as procedures | Functional | 8 | Built; joint Integration in the window | - |
| >> | B | OFA-F-218 | M6 (migration 0217): Advisor's PowerBI reads as procedures | Functional | 8 | Built; joint Integration in the window | - |
|  | C | OFA-F-212 | M3 (migration 0218): master-list, document, signing and postal reads as procedures (adds GetAdvisorArNumber) | Functional | 5 | In progress in ps2c (parked) | - |
|  | C | OFA-F-222 | PS readers 4–13 switch to the M3 procedures | Functional | 5 | In progress in ps2c (parked) | - |
|  | C | OFA-F-214 | M4 (migration 0219): fee reads as procedures | Functional | 3 | In progress in ps2c (parked) | - |
|  | C | OFA-F-224 | The main fee reader reads through the OFA database | Functional | 3 | In progress in ps2c (parked) | - |
|  | D | OFA-F-226 | Drop DataWarehouse from PS Production and UAT settings (ruled exception: dev-up.ps1, the shared Development settings, docs/deployment) | Functional | 3 | After group C | - |
| | X | OFA-F-116 | Holiday table for the closure clocks: needs 2027 loaded into the warehouse's gov.PublicHolidays | Functional | 1 | IT ticket raised; approval to run expected Wed 2026-11-25 | - |
| | X | OFA-F-120 | Word converter: built; the login works, but Shaw.Word 2.1.0 uploads to an empty drive ID (Drives[""]), so Graph refuses | Functional | - | Parked 2026-11-23 until IT names a drive the app login can write to; then a Shaw.Word DriveId setting (branch, your review) | - |
| | X | OFA-F-032 | Attachment mover: built, waiting on your SharePoint live check | Functional | - | After go-live | - |
| | 40 | OFA-B-107 | Monthly cycle S-Account not cut short: no plugin code (SHELL-F-135 covers it) | Look and Feel | - | Closes at the end-sweep parity look | - |
| | 40 | - | End sweep, on the stack: make test-data for migrations 0201-0203, and a look at the Wording page | Functional | 0 | End sweep | - |
| | 40 | OFA-F-062 | Load test: written, runs once in the end-sweep load window | Functional | - | End sweep | - |

## Compliance (pointer: parked a51ce2d4: B-152, B-153, design row B117)

Held until its window runs the ComplianceDashboard.WebAPI .NET tests and the layout check (which also proves SHELL-B-206).

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | - | Drop @not-built-OFA-F-143 on "The latest step is a tip on the finding's chip" | Functional | 0 | Blocked | OFA-F-143 merged |
| >> | P2 | COMPLIANCE-DASHBOARD-B-152, B-153, B117 | Quarantine Extension and Last prompt adopt minWidth 250 (grow to fit, up to 500); B-153; design row B117 | Look and Feel | ?? | Built a51ce2d4 (parked); .NET tests and layout check in the window | - |
| | X | B109-B111 | B-132 (Expired platform columns), B-135 (Arrangements filter State), B-138 (Wording fields gap): the build is right, the boards change; the bugs are withdrawn | Look and Feel | - | Design rows, later | - |
| | X | W44 | Wording page: the no-version slot says a placeholder is sent; Portfolio Services actually sends the approved built-in email (Adviser Initial OFA follow-up) | Look and Feel | - | Later: design row, goes to the designer next round; words need the business's approval | - |

## Advisor (pointer: parked; ADVISOR-DASHBOARD-B-159 fix on main 3f31aabe)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | - | ADVISOR-DASHBOARD-B-159 | One real business run of the advisor project in its window (proves the 72 B116 scenarios' runtime skip) | Functional | 0 | Owed, in its short window | - |
| | X | (ID to come) | Switch the 20 readers to the OFA-db procedures; drop DW/PBI connection strings; Development money tiles need the LocalDB warehouse copy. Notes: a-18 is two procedures; a-9 Newest is powerbi.GetGrossRevenueNewest; GetAccountDocuments built in 0216; the switch item decides where Development's EstateDatabases:PowerBI points | Functional | ?? | Blocked | PS2 groups A+B merged; go-live gate |
| | X | B107, B108 | Adviser 7 (paginator hidden on one page), 10 ("Reported by" without the team): the build is right, the boards change | Look and Feel | - | Design rows, later | - |
| | X | B101 | Signatory address link: the tip and the re-send dialog when the follow-up email failed | Look and Feel | - | Later: design row, next designer round | - |
| | X | ADVISOR-DASHBOARD-F-144 | The OFA timeline | Functional | 6 | Blocked: waiting on Luke | - |

## Hub

Parity round 2: unscheduled. Muhammed says when, after every P1 fix is in. Portfolio Services is checked this time (missed in round 1); compare B102's Mark as reviewed dialog. The page gets a notes field per finding.


Parity page for Muhammed's picks: https://claude.ai/artifact/HJAEsCkiTKGybrYJPW54AU (34 findings; PS sweep still to come).

Deployment and testing (from 2026-11-23): the work left is the REL- stack in `docs/leftovers.md`, worked top first. REL-001 to REL-010 are on go.

1. Designer round synced 2026-11-24 and routed. Shell boards (Main, ShellCollapsed, AccountRow, NotificationPanel, SearchPanel, the current landing page) sent to the designer to draw D8-D14 on (Muhammed sends).
2. Test site: deploy 1 complete 2026-11-24. All nine parts up; portfolio-services-api on e1c85b26 (OFA-B-261); compliance-dashboard-api redeployed with B-128; the register's test data loaded. Status on the test site page of the demo site (update-uat-status.ps1, then update-uat-data.ps1). Next deploy: PS group 58 (notices) and deploy 2 (SHELL-F-184, rollback rehearsal).
3. End sweep, last: after the designer's work is synced, built, and tested by hand by Muhammed; every parity check, each issue listed as Look and Feel.
4. Waiting on you (also D-04 and D-05 in `docs/leftovers.md`): rerun the OFA-S-005 spike on the unredacted master spreadsheet (scripts in the PS checkout, spikes/OFA-S-005, uncommitted); the DART retest (another day); the OFA-S-001 owner questions: DART's open-a-document URL and whether staff have DART logins (OFA-F-145 and F-055 are built behind Dart:DocumentLinkTemplate, off until it is set); PS's 8 production settings.
5. After ps2's OFA-F-202 (the starters on the letterhead), with the stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database through the Wording page's upload, so each slot shows the business wording, not the [Test data] text. NoOfaFeeAdvisorEmail and RenewalConfirmation wait for ps2's field-library fix.
6. Later, large (after the OFA Team has the test site): the OFA APIs stop connecting to DataWarehouse, ShawCentral and PowerBI. Procedures in the OFA database read the warehouse instead, and fees come GridPay → DataWarehouse → an OFA-database procedure, never copied in. Ruling and plan: `docs/hub/dw-through-stored-procs.md`. The test site stays as it is.

Waiting on Muhammed: the OFA-F-141 product choice (a or b); option a releases PS migration 0222.
