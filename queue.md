# Worker queue

What each worker does next, in order. The hub keeps it current. Forward view only: finished work leaves this file; the back view is the status page's update log.
**>>** = being worked on now. Grp = group, lowest runs first; X = blocked, grouped once it is free. Category: Functional, Look and Feel, or Undetermined.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-24 03:48

## Now (from 2026-11-24 02:00)

1. One stack up at a time, across every checkout. The hub hands the stack out and takes it back; a worker asks the hub before `make up` and says when it has run `make down`.
2. Stack order: ps2 (group 35, then the Preview bypass), then Portfolio Services (OFA-B-219 and its three bugs), then Advisor (the bell item and its six bugs). A worker builds and runs Jest and its own .NET tests without the stack, and asks for it only for business tests, e2e and screen checks.
3. No idle worker: when a worker's next item is blocked (external party, manual testing, keys, design rows), it takes its next unblocked item, including the testing-run bugs, rather than wait. Compliance and Shell have nothing unblocked: they stay parked unless the hub routes work to them.

## Shell (pointer: parked after group 47; queue empty)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|

## Portfolio Services (pointer: group 48 from 2026-11-24)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | OFA-F-138 | File the signed renewal in DART; also the real signing-status reader for renewals and Initial OFAs | Functional | 3 | Blocked by your DART retest | - |
| | X | OFA-F-155 | Proof of acceptance for each signer | Functional | 2 | On hold | COMPLIANCE-DASHBOARD-F-004 |
| >> | 48 | OFA-B-245 | Three more stamps still show the login, not the name: Expired report Confirmed off "ConfirmedBy", report closure "RecordedBy", and the arrangement record's closure RecordedBy / FeeMarkedOffBy; same lookup as OFA-B-239 | Bug | 1 | Building | OFA-B-239 |
| | 48 | - | Browser checks owed from groups 36 and 45, on the stack: B-233 opening month, B-235 row menu meets the card edge, B-237 Documents icon whole, B-241 table edges at 1440/1680/1920 (wide tables still scroll), F-189 Overview card | Look and Feel | 0 | After OFA-B-245; needs the stack | - |

## Portfolio Services 2 (pointer: group 37 running since 2026-11-24; then 39, 40)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | OFA-F-116 | Holiday table for the closure clocks: needs 2027 loaded into the warehouse's gov.PublicHolidays | Functional | 1 | IT ticket raised; approval to run expected Wed 2026-11-25 | - |
| | X | OFA-S-005 | Finish the spike: rerun on the unredacted master spreadsheet | Functional | 1 | Blocked: the warehouse refuses both the read-only login and Windows sign-in (2026-11-24 03:2x); resumes when it is back | - |
| | X | OFA-F-120 | Word converter: built; the login works, but Shaw.Word 2.1.0 uploads to an empty drive ID (Drives[""]), so Graph refuses | Functional | - | Parked 2026-11-23 until IT names a drive the app login can write to; then a Shaw.Word DriveId setting (branch, your review) | - |
| | X | OFA-F-032 | Attachment mover: built, waiting on your SharePoint live check | Functional | - | After go-live | - |
| | 40 | OFA-B-107 | Monthly cycle S-Account not cut short: no plugin code (SHELL-F-135 covers it) | Look and Feel | - | Closes at the end-sweep parity look | - |
| >> | 37 | OFA-B-226 | Wording page Preview answers 403 to a developer: Development-only ComplianceTeam bypass, like OfaTeam's; the page says why on a 403 | Bug | 1 | Building | - |
| >> | 37 | OFA-B-228 | Renewal confirmation goes to the client, not the adviser (DART preferred address, migration 0200; no address means nothing is sent); changes OFA-F-140 | Bug | 2 | Building | - |
| | 39 | (to raise) | Wording field library (store side): one library of known fields; each slot lists the fields it can fill, all optional (a document may use some or all); an upload with a field the slot cannot fill, or an unknown one, is refused and names it; otherwise the check says every used field will be filled. The library also gains the fields Luke's Initial OFA templates use: the adviser's Authorised Representative number, the client's name and address block, each provider's fee (%PROVIDER_FEE%), the fee frequency; Luke's spellings map to ours (%ACCOUNT NAME% is %ACCOUNTNAME%). The Pending and Expired report emails gain fields so Portfolio Services' own emails fit (starters in the stash): %STATE_MANAGER_NAME%, %STATE%, %PERIOD_START%, %PERIOD_END%, %ROW_COUNT%, %TOTAL_FEES% (body and subject), and %REPORT_TABLE% placing the table where the document puts it (else it goes at the end, as today). Retires the old FollowUpEmail slot (nothing uses it; the client renewal follow-up is ClientRenewalFollowUp). Fixes the wrong lists (No OFA fee email requires %PLATFORM%/%PLATFORM_ACCOUNT%; RenewalConfirmation has none). Plus a fully working starter Word document for every slot in the test data: the business wording where we have it (Muhammed's starters in docs/stash/OFA Workflow/references/Wording/Starters, including both service-question lists and the two report emails); a plain file marked TEST listing the slot's fields for the rest (InitialOfa, FollowUpEmail, ClientRenewalFollowUp, the old TerminationEmail; leftovers W-13, W-20, D-04) | Functional | ?? | Ruled by Muhammed 2026-11-23; spec docs/hub/wording-field-library.md (§5 is the store side); artboard first (Wording page, W39-W43), then ps2 builds the store side 2026-11-24 after the renewal confirmation item; replaces "required" fields | Compliance page row |
| | 39 | (to raise) | Report emails match Portfolio Services' own: the Pending table's columns become S Account, Account Name, Client Class, Adviser, Remuneration Source, Branch, Reference Date, Expiry Date, Renewal Status, Provider No., Fees, Comments; the Expired table's become Account No., Account Name, Adviser, Remuneration Source, Anniversary Day, Renewal Notice Due Date, Fee Cessation Date, Renewal Status, Branch, Client Class; the agreed fees for the past 12 months and the state's total lost stay on the Expired report. The app adds "No action is required." only when the Expired report is empty. %STATE_MANAGER_NAME% needs a rule when a state has several recipients | Functional | ?? | Ruled by Muhammed 2026-11-23; ps2 2026-11-24 with the field library item | W-20 |
| | 39 | (to raise) | Initial OFA from Luke's templates (`docs/stash/OFA Workflow/references/Wording/Initial OFA`, never commit its spreadsheet): four wording slots, ruled by Muhammed 2026-11-23: electronic Estimate, electronic Fixed, print-and-sign Estimate, print-and-sign Fixed; the OFA Team pick Estimate or Fixed when preparing; the print-and-sign slots feed the adviser's download; fields the templates use that the tool lacks (adviser's Authorised Representative number, client name and address block, per-provider fee %PROVIDER_FEE%, fee frequency, optional nominated Reference Date paragraph); signing anchors {{signature}}/{{signature2}}/{{date}}/{{name}} against the tool's {{signature_1}}/{{date_1}}; envelope title is the renewal's (replaces the placeholder in EnvelopeNames); letter date is a new today's-date field in the library; the nominated Reference Date paragraph appears only when the OFA Team marks that the adviser nominates one (beside Estimate/Fixed), and the template's bracketed note is never sent | Functional | ?? | Raised by Muhammed 2026-11-23; ps2 sizes it 2026-11-24 with the field library; open choices go to Muhammed | Field library row |
| | X | OFA-F-190 | Client renewal follow-up with our own wording: Annature's reminder cannot carry our subject or message. Options: (a) Annature's own reminder as is (2), (b) a fresh signing link from Annature in our own email (3, ps2's pick), (c) hold | Functional | 2-3 | Blocked: Muhammed picks a, b or c | OFA-F-130 |
| | 40 | OFA-F-062 | Load test: written, runs once in the end-sweep load window | Functional | - | End sweep | - |
| >> | 37 | (to raise) | Reference paths: the business's emails and the starters moved on 2026-11-23 into `docs/stash/OFA Workflow/references/Wording/` (index in its README.md). Update the old paths in the Portfolio Services handoff (`...references\Email Templates\` becomes `...references\Wording\Email Templates\`) and PMBook (OFA-F-016 sources and OFA-F-187, `references/Email Templates/` becomes `references/Wording/Email Templates/`); the hub left them because ps2 has uncommitted edits in both | Docs | 0 | Fold into the next group's finalizers | - |

## Compliance (pointer: parked after group 44; F-053 waits on ps2)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | COMPLIANCE-DASHBOARD-F-053 | Wording field library (page side): the Wording page shows the whole field library (each field, what it fills, which slots take it) for anyone building a document, and each slot shows the fields it can fill; the upload check says "every field used will be filled" or refuses and names each field the slot cannot fill | Functional | 5 | Ruled by Muhammed 2026-11-23; spec docs/hub/wording-field-library.md §6; design rows W39-W43 sent to the designer 2026-11-23; builds after ps2's store side | ps2 field library row |
| | 48 | - | Run M28 and M38 on the built app (stack) and drop M38's @not-built-COMPLIANCE-DASHBOARD-F-052 tag; both pass on the board | Functional | 0 | Folds into the next Compliance group | - |

## Advisor (pointer: group 46 running since 2026-11-24; F-144 waits on Luke)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | ADVISOR-DASHBOARD-F-144 | The OFA timeline | Functional | 6 | Blocked: waiting on Luke. Asked 2026-11-23 what the Adviser's OFA History tab should show, with the Portfolio Services and Compliance tabs as examples; then the design | - |
| >> | 46 | (to raise) | 4 older board-run failures: Closures (1), S-Account history (3); folded into 41 if they touch its Closures files | Bug | ?? | Building | - |
| >> | 46 | ADVISOR-DASHBOARD-B-132 | OFA questionnaire still stutters after ADVISOR-DASHBOARD-B-130 and SHELL-B-184: each answer edit and Select all block the screen for about 1 s; profile a production build in a real browser and fix it (shared shell code goes to Shell) | Bug | 3 | Building | - |
| >> | 46 | ADVISOR-DASHBOARD-B-133 | OFA questionnaire Notes cell shows a raw login ("Entered by the OFA Team · TESTDATA\corinne.abbott"), not the name; check first whether only the test data is at fault | Bug | 1 | Building | - |

## Hub

Deployment and testing (from 2026-11-23): the work left is the REL- stack in `docs/leftovers.md`, worked top first. REL-001 to REL-010 are on go.

1. Designer prompt (not yet sent; goes out after this queue round): W38, P92, P93, plus PS O20 (OFA-B-206: the paper-signed upload item on an imported Initial OFA row's menu, and its date hint with no form date), PS O21 (remove the Sync fees button from the Exceptions report board; OFA-F-160 removes it), PS O22 (Upload a paper-signed Initial OFA dialog: render the date field's hint, as the app does), PS O36 (the SOA field in Add an arrangement by hand gets its label), PS O37 (renewal confirmation labels say client: History and Renewal tracker; ps2 edits the repo board in OFA-B-228, the designer's copy needs the same two strings), plus advisor B92 (F-146 confirmed line on CONFIRMED OFF rows), B93 (F-142 follow-up resend dialog sentence), B94 (Closures S-Account opens the S-Account page) and B95 (the line under a Closures status chip becomes its tip), plus 6 parity questions: Overview "not fully signed" count slot; Adviser review answers bar placement; read-failure card on six PS screens; scope line for an adviser with several codes; Renewal tracker filter Reset and intro; Arrangements empty/loading/error card; shell: logo width (#12) and collapsed rail width (#21), where the boards disagree; shell states with no board (#20: Keep open on, Notifications with items, Search results and no matches, Search loading); landing empty and bus-unavailable states (#6); shell error and empty states (#4), search panel drawn two ways (#5), Plugin0 buttons and chips (#7); compliance review page "Read only." line and OFA Checklist note chip and Month arrow; PS Import screen in the sidebar has no board; shell (from group 6): cloud_off rail icon and person-icon avatar have no board, search empty state has no glyph on the board; compliance board: drop the empty grid after the filter-dialog fields so the gap above the buttons is 48px like advisor and PS.
2. End sweep: the browser, business-test and board checks skipped during the build, run once at the end.
3. Waiting on you: push main; the SyncFee grant: OFA-F-160 is on main, so the gMSA's EXECUTE on dbo.SyncFee can be dropped on the server (PS removes line 3 of SyncFee-grants.sql in group 10); rerun the OFA-S-005 spike on the unredacted master spreadsheet (scripts in the PS checkout, spikes/OFA-S-005, uncommitted); check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj; the DART retest (another day); the OFA-S-001 owner questions: DART's open-a-document URL and whether staff have DART logins (OFA-F-145 and F-055 are built behind Dart:DocumentLinkTemplate, off until it is set); PS's 8 production settings.
4. 2026-11-24, with the stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database through the Wording page's upload, so each slot shows the business wording, not the [Test data] text. NoOfaFeeAdvisorEmail and RenewalConfirmation wait for ps2's field-library fix.


Push: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin main`
