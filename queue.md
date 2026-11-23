# Worker queue

What each worker does next, in order. The hub keeps it current. Forward view only: finished work leaves this file; the back view is the status page's update log.
**>>** = being worked on now. Grp = group, lowest runs first; X = blocked, grouped once it is free. Category: Functional, Look and Feel, or Undetermined.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-24 09:36

## Now (from 2026-11-24 09:00)

1. Critical path: the test site. Everything on it lives in the Misc database (docs/hub/uat-in-misc.md). Shell, Portfolio Services, ps2 and Advisor build their parts now; Compliance after F-053. The Misc login works with create rights (2026-11-24). External waits: the UAT mailbox, the IIS pools and applications (Muhammed, walked through by the hub).
2. No idle worker: a worker whose next item is blocked takes its next unblocked item.
3. End sweep runs last, in this order: the designer's work synced, the developers have built it, Muhammed has tested by hand, then every parity check runs and each issue found is listed as Look and Feel.

## Shell (group 49 merged 2026-11-24; standing by)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | - | Remove the old test-site check (ThrowIfAnyDatabaseIsNotUat) once every API uses the new rules; full Shell.WebAPI rerun when a stack is down | Functional | - | After PS, Advisor and Compliance merge their test-site parts | - |

## Portfolio Services (pointer: group 50 from 2026-11-24)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 50 | (new PS item) | Test site in Misc, Portfolio Services: its settings point at Misc; its warehouse and job-tracking reads use the Misc sections; mail on the test site comes from and goes to the UAT mailbox only | Functional | 5 | Building; critical path; spec docs/hub/uat-in-misc.md §2.2; the mailbox address comes from Muhammed | - |
| | X | OFA-F-138 | File the signed renewal in DART; also the real signing-status reader for renewals and Initial OFAs | Functional | 3 | Blocked by your DART retest | - |
| | X | OFA-F-155 | Proof of acceptance for each signer | Functional | 2 | On hold | COMPLIANCE-DASHBOARD-F-004 |
| | X | - | Browser checks owed from groups 36, 45 and 49, on the stack: the Settings report preview (both tables, a wide table scrolls, the empty-Expired line), B-233 opening month, B-235 row menu meets the card edge, B-237 Documents icon whole, B-241 table edges at 1440/1680/1920 (wide tables still scroll), F-189 Overview card | Look and Feel | 0 | Moved to the end sweep: two stack starts were killed for low memory on 2026-11-24 night; a restart needs Muhammed | - |

## Portfolio Services 2 (pointer: group 42 from 2026-11-24; then 41, 40)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 42 | OFA-F-198 | Test site in Misc, set-up scripts: build the stand-in warehouse and job tables in their Misc sections, load the test data, seed and reset; public holidays for 2027 included; scripts use the one Misc login and refuse any other database; adds the missing dbo.AddressPostal stand-in | Functional | 3 | Building; critical path; spec docs/hub/uat-in-misc.md §2.3; a live run waits for the Misc login | - |
| | 42 | OFA-B-230 | Test data: leave the Adviser Initial OFA follow-up wording with no version, so Compliance's "offers its first version" check can pass | Functional | 1 | After OFA-F-198 | OFA-F-198 |
| | 42 | OFA-B-232 | Master spreadsheet import accepts a workbook whose only sheet carries the register header (today it needs the sheet named "OFA Master ACTIVE") | Functional | 1 | After OFA-B-230 | OFA-B-230 |
| | X | OFA-F-116 | Holiday table for the closure clocks: needs 2027 loaded into the warehouse's gov.PublicHolidays | Functional | 1 | IT ticket raised; approval to run expected Wed 2026-11-25 | - |
| | X | OFA-F-120 | Word converter: built; the login works, but Shaw.Word 2.1.0 uploads to an empty drive ID (Drives[""]), so Graph refuses | Functional | - | Parked 2026-11-23 until IT names a drive the app login can write to; then a Shaw.Word DriveId setting (branch, your review) | - |
| | X | OFA-F-032 | Attachment mover: built, waiting on your SharePoint live check | Functional | - | After go-live | - |
| | 40 | OFA-B-107 | Monthly cycle S-Account not cut short: no plugin code (SHELL-F-135 covers it) | Look and Feel | - | Closes at the end-sweep parity look | - |
| | X | OFA-F-196 | Initial OFA from Luke's templates: four wording slots (electronic or print-and-sign, Estimate or Fixed), the prepare dialog asks Estimate or Fixed and whether the adviser nominates a Reference Date (design row O38), signing anchors mapped, four starters from Luke's documents (0204) | Functional | 5 | Group 41; blocked: six business questions for Muhammed (Reference Date fill, Authorised Representative number source, client name, per-provider fee, signers above two, a link wording in the print-and-sign templates) | OFA-F-192 |
| | X | OFA-F-190 | Client renewal follow-up with our own wording: Annature's reminder cannot carry our subject or message. Options: (a) Annature's own reminder as is (2), (b) a fresh signing link from Annature in our own email (3, ps2's pick), (c) hold | Functional | 2-3 | Blocked: Muhammed picks a, b or c | OFA-F-130 |
| | 40 | - | End sweep, on the stack: make test-data for migrations 0201-0203, and a look at the Wording page | Functional | 0 | End sweep | - |
| | 40 | OFA-F-062 | Load test: written, runs once in the end-sweep load window | Functional | - | End sweep | - |

## Compliance (pointer: group 50 from 2026-11-24)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 50 | COMPLIANCE-DASHBOARD-F-054 | Test site in Misc, Compliance Dashboard: reads the one Misc login file like the other APIs; settings point at Misc | Functional | 1 | Building; spec docs/hub/uat-in-misc.md §2.5 | - |
| | X | - | Run M28 and M38 on the built app (stack) and drop M38's @not-built-COMPLIANCE-DASHBOARD-F-052 tag; both pass on the board | Functional | 0 | End sweep: needs a stack window | - |

## Advisor (pointer: group 47 from 2026-11-24; B-132 waits for a stack window, F-144 waits on Luke)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 47 | (new Advisor item) | Test site in Misc, Adviser Dashboard: its settings point at Misc; its directory read uses the Misc warehouse section | Functional | 3 | Building; critical path; spec docs/hub/uat-in-misc.md §2.4 | - |
| | X | ADVISOR-DASHBOARD-F-144 | The OFA timeline | Functional | 6 | Blocked: waiting on Luke. Asked 2026-11-23 what the Adviser's OFA History tab should show, with the Portfolio Services and Compliance tabs as examples; then the design | - |
| | X | ADVISOR-DASHBOARD-B-132 | OFA questionnaire still stutters after ADVISOR-DASHBOARD-B-130 and SHELL-B-184: each answer edit and Select all block the screen for about 1 s; profile a production build in a real browser and fix it (shared shell code goes to Shell) | Bug | 3 | Blocked: needs a stack (production build in a real browser); no stack tonight |  - |

## Hub

Deployment and testing (from 2026-11-23): the work left is the REL- stack in `docs/leftovers.md`, worked top first. REL-001 to REL-010 are on go.

1. Designer prompt (being drafted 2026-11-24; goes to Muhammed to send): W38, P92, P93, plus PS O20 (OFA-B-206: the paper-signed upload item on an imported Initial OFA row's menu, and its date hint with no form date), PS O21 (remove the Sync fees button from the Exceptions report board; OFA-F-160 removes it), PS O22 (Upload a paper-signed Initial OFA dialog: render the date field's hint, as the app does), PS O36 (the SOA field in Add an arrangement by hand gets its label), PS O37 (renewal confirmation labels say client: History and Renewal tracker; ps2 edits the repo board in OFA-B-228, the designer's copy needs the same two strings), PS O38 (Initial OFA prepare dialog: Estimate or Fixed, and the adviser nominates a Reference Date), PS O39 (Settings report preview with the new report columns; PS edits the repo board in OFA-F-191, the designer's copy needs the same), plus advisor B92 (F-146 confirmed line on CONFIRMED OFF rows), B93 (F-142 follow-up resend dialog sentence), B94 (Closures S-Account opens the S-Account page) and B95 (the two Closures status lines drawn as the chip's tip, reworded by Advisor), B96 (Account History's Show all events switch reads its own name: hide the thumb icon), plus 6 parity questions: Overview "not fully signed" count slot; Adviser review answers bar placement; read-failure card on six PS screens; scope line for an adviser with several codes; Renewal tracker filter Reset and intro; Arrangements empty/loading/error card; shell: logo width (#12) and collapsed rail width (#21), where the boards disagree; shell states with no board (#20: Keep open on, Notifications with items, Search results and no matches, Search loading); landing empty and bus-unavailable states (#6); shell error and empty states (#4), search panel drawn two ways (#5), Plugin0 buttons and chips (#7); compliance review page "Read only." line and OFA Checklist note chip and Month arrow; PS Import screen in the sidebar has no board; shell (from group 6): cloud_off rail icon and person-icon avatar have no board, search empty state has no glyph on the board; compliance board: drop the empty grid after the filter-dialog fields so the gap above the buttons is 48px like advisor and PS.
2. End sweep, last: after the designer's work is synced, built, and tested by hand by Muhammed; every parity check, each issue listed as Look and Feel.
3. Waiting on you: push main; the SyncFee grant: OFA-F-160 is on main, so the gMSA's EXECUTE on dbo.SyncFee can be dropped on the server (PS removes line 3 of SyncFee-grants.sql in group 10); rerun the OFA-S-005 spike on the unredacted master spreadsheet (scripts in the PS checkout, spikes/OFA-S-005, uncommitted); check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj; the DART retest (another day); the OFA-S-001 owner questions: DART's open-a-document URL and whether staff have DART logins (OFA-F-145 and F-055 are built behind Dart:DocumentLinkTemplate, off until it is set); PS's 8 production settings.
4. 2026-11-24, with the stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database through the Wording page's upload, so each slot shows the business wording, not the [Test data] text. NoOfaFeeAdvisorEmail and RenewalConfirmation wait for ps2's field-library fix.


Push: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin main`
