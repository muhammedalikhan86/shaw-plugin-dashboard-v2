# Worker queue

What each worker does next, in order. The hub keeps it current. Forward view only: finished work leaves this file; the back view is the status page's update log.
**>>** = being worked on now. Grp = group, lowest runs first; X = not grouped yet. Category: Functional, Look and Feel, or Undetermined.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-23 22:15

## Shell (pointer: group 19 done; in-place Shell.WebAPI test window, then parked; queue empty)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|

## Portfolio Services (pointer: parked after OFA-B-231; the rest is blocked, on hold or waiting on you)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | - | OFA-F-138 | File the signed renewal in DART; also the real signing-status reader for renewals and Initial OFAs | Functional | 3 | Blocked by your DART retest | - |
| | X | OFA-F-155 | Proof of acceptance for each signer | Functional | 2 | On hold | COMPLIANCE-DASHBOARD-F-004 |
| | X | OFA-B-219 | Expired report: an adviser's own fee-off mark should pull the row on, as a client closure's does (query, API, export, screen) | Functional | ?? | Awaiting user: business yes/no (default yes) | - |

## Portfolio Services 2 (pointer: group 35 paused 2026-11-23 at weekly usage 95%; resumes 2026-11-24, then OFA-S-005)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | OFA-F-116 | Holiday table for the closure clocks: needs 2027 loaded into the warehouse's gov.PublicHolidays | Functional | 1 | IT ticket raised; approval to run expected Wed 2026-11-25 | - |
| | X | OFA-S-005 | Finish the spike: rerun on the unredacted master spreadsheet | Functional | 1 | Spreadsheet received 2026-11-23 (hub checkout, docs/stash/OFA Workflow/references/OFA Master Data.xlsx, gitignored). Runs 2026-11-24, after the weekly usage reset; before go-live | - |
| | X | OFA-F-120 | Word converter: built; the login works, but Shaw.Word 2.1.0 uploads to an empty drive ID (Drives[""]), so Graph refuses | Functional | - | Parked 2026-11-23 until IT names a drive the app login can write to; then a Shaw.Word DriveId setting (branch, your review) | - |
| | X | OFA-F-032 | Attachment mover: built, waiting on your SharePoint live check | Functional | - | After go-live | - |
| | 35 | - | Test runbook OFA-F-099: the Act As account named has left the directory; name a current Compliance Team member instead | Functional | - | Go 2026-11-23 | - |
| | X | OFA-B-107 | Monthly cycle S-Account not cut short: no plugin code (SHELL-F-135 covers it) | Look and Feel | - | Closes at the end-sweep parity look | - |
| >> | 35 | OFA-F-188 | AnnatureInterfaceWebAPI: a lookup route, so a timed-out request can be checked before it is sent again (mock Annature only) | Functional | 3 | Paused; resumes 2026-11-24 | - |
| | 35 | OFA-B-184 | A timeout can send a signing request twice | Functional | 2 | Go 2026-11-23 | OFA-F-188 |
| | X | (to raise) | Wording page Preview fails on make up: POST /notices/preview answers 403 to a developer (ComplianceTeam policy has no development bypass); add one, Development only, like OfaTeam's, and check the page says why on a 403 | Functional | ?? | Raised by Muhammed 2026-11-23; ps2 raises, sizes and builds it 2026-11-24 after group 35 | - |
| | X | (to raise) | Renewal confirmation goes to the client, not the adviser: the business template (OFA Renewal Confirmation) thanks the client, so OFA-F-140 sends the RenewalConfirmation slot to the account's client email; fields %ACCOUNT_NAME% and %S_ACCOUNT% | Functional | ?? | Ruled by Muhammed 2026-11-23; ps2 raises, sizes and builds it 2026-11-24 after the Preview item | - |
| | X | (to raise) | Wording field library (store side): one library of known fields; each slot lists the fields it can fill, all optional (a document may use some or all); an upload with a field the slot cannot fill, or an unknown one, is refused and names it; otherwise the check says every used field will be filled. The library also gains the fields Luke's Initial OFA templates use: the adviser's Authorised Representative number, the client's name and address block, each provider's fee (%PROVIDER_FEE%), the fee frequency; Luke's spellings map to ours (%ACCOUNT NAME% is %ACCOUNTNAME%). The Pending and Expired report emails gain fields so Portfolio Services' own emails fit (starters in the stash): %STATE_MANAGER_NAME%, %STATE%, %PERIOD_START%, %PERIOD_END%, %ROW_COUNT%, %TOTAL_FEES% (body and subject), and %REPORT_TABLE% placing the table where the document puts it (else it goes at the end, as today). Retires the old FollowUpEmail slot (nothing uses it; the client renewal follow-up is ClientRenewalFollowUp). Fixes the wrong lists (No OFA fee email requires %PLATFORM%/%PLATFORM_ACCOUNT%; RenewalConfirmation has none). Plus a fully working starter Word document for every slot in the test data: the business wording where we have it (Muhammed's 15 starters in docs/stash/OFA Workflow/references/Wording starters, including both service-question lists and the two report emails); a plain file marked TEST listing the slot's fields for the rest (InitialOfa, FollowUpEmail, ClientRenewalFollowUp, the old TerminationEmail; leftovers W-13, W-20, D-04) | Functional | ?? | Ruled by Muhammed 2026-11-23; artboard first (Wording page), then ps2 builds the store side 2026-11-24 after the renewal confirmation item; replaces "required" fields | Compliance page row |
| | X | (to raise) | Initial OFA from Luke's templates (`docs/stash/OFA Workflow/references/ForReview2311`, never commit its spreadsheet): four wording slots, ruled by Muhammed 2026-11-23: electronic Estimate, electronic Fixed, print-and-sign Estimate, print-and-sign Fixed; the OFA Team pick Estimate or Fixed when preparing; the print-and-sign slots feed the adviser's download; fields the templates use that the tool lacks (adviser's Authorised Representative number, client name and address block, per-provider fee %PROVIDER_FEE%, fee frequency, optional nominated Reference Date paragraph); signing anchors {{signature}}/{{signature2}}/{{date}}/{{name}} against the tool's {{signature_1}}/{{date_1}}; envelope title is the renewal's (replaces the placeholder in EnvelopeNames) | Functional | ?? | Raised by Muhammed 2026-11-23; ps2 sizes it 2026-11-24 with the field library; open choices go to Muhammed | Field library row |
| | X | (to raise) | Client renewal follow-up goes through Annature as a reminder on the client's existing envelope (through AnnatureInterfaceWebAPI), so the 'here' signing link works; wording is the ClientRenewalFollowUp starter (covering email + Muhammed's follow-up line, subject '[Follow-Up] ' + the envelope title). ps2 first checks what Annature's API offers for a reminder with our own message and subject; if it cannot carry them, back to Muhammed | Functional | ?? | Ruled by Muhammed 2026-11-23; ps2 sizes it 2026-11-24 | OFA-F-130 |
| | X | OFA-F-062 | Load test: written, runs once in the end-sweep load window | Functional | - | End sweep | - |

## Compliance (pointer: parked after group 23; the rest waits on design rows)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | (to raise) | Wording field library (page side): the Wording page shows the whole field library (each field, what it fills, which slots take it) for anyone building a document, and each slot shows the fields it can fill; the upload check says "every field used will be filled" or refuses and names each field the slot cannot fill | Functional | ?? | Ruled by Muhammed 2026-11-23; artboard changes first; builds after ps2's store side | ps2 field library row |
| | X | COMPLIANCE-DASHBOARD-F-008 | Business scenarios for every UI item (the rest) | Functional | 3 | In progress: the 24 still off each wait on a design row, a held item or B-091's board | - |
| | X | Design row M39 | The outbox-sent closure confirmation has no file at the source; the board drops that attachment | Look | - | Monday design sync | - |
| | X | Design row M38 | Days colour: the board draws one error band at 30 days or fewer, the row has four bands | Look | - | Monday design sync; its @skip scenario is written now | - |

## Advisor (pointer: parked after group 24; F-144 blocked on the design)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | ADVISOR-DASHBOARD-F-144 | The OFA timeline | Functional | 6 | Blocked by the design, not drawn yet (Luke to show how Complii draws it) | - |

## Hub

Deployment and testing (from 2026-11-23): the work left is the REL- stack in `docs/leftovers.md`, worked top first. REL-001 to REL-010 are on go.

1. Designer prompt (not yet sent; goes out after this queue round): W38, P92, P93, plus PS O20 (OFA-B-206: the paper-signed upload item on an imported Initial OFA row's menu, and its date hint with no form date), PS O21 (remove the Sync fees button from the Exceptions report board; OFA-F-160 removes it), PS O22 (Upload a paper-signed Initial OFA dialog: render the date field's hint, as the app does), plus advisor B92 (F-146 confirmed line on CONFIRMED OFF rows) and B93 (F-142 follow-up resend dialog sentence), plus 6 parity questions: Overview "not fully signed" count slot; Adviser review answers bar placement; read-failure card on six PS screens; scope line for an adviser with several codes; Renewal tracker filter Reset and intro; Arrangements empty/loading/error card; shell: logo width (#12) and collapsed rail width (#21), where the boards disagree; shell states with no board (#20: Keep open on, Notifications with items, Search results and no matches, Search loading); landing empty and bus-unavailable states (#6); shell error and empty states (#4), search panel drawn two ways (#5), Plugin0 buttons and chips (#7); compliance review page "Read only." line and OFA Checklist note chip and Month arrow; PS Import screen in the sidebar has no board; shell (from group 6): cloud_off rail icon and person-icon avatar have no board, search empty state has no glyph on the board; compliance board: drop the empty grid after the filter-dialog fields so the gap above the buttons is 48px like advisor and PS.
2. End sweep: the browser, business-test and board checks skipped during the build, run once at the end.
3. Waiting on you: push main; the SyncFee grant: OFA-F-160 is on main, so the gMSA's EXECUTE on dbo.SyncFee can be dropped on the server (PS removes line 3 of SyncFee-grants.sql in group 10); rerun the OFA-S-005 spike on the unredacted master spreadsheet (scripts in the PS checkout, spikes/OFA-S-005, uncommitted); the Adviser Dashboard's "Arrangements that ended" bell lists every ending in a State Manager's scope with no time limit: say whether it should show only recent ones, and how far back; check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj; the DART retest (another day); the OFA-S-001 owner questions: DART's open-a-document URL and whether staff have DART logins (OFA-F-145 and F-055 are built behind Dart:DocumentLinkTemplate, off until it is set); the Initial OFA envelope title; PS's 8 production settings.
4. 2026-11-24, with the stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording starters/`) into Muhammed's local database through the Wording page's upload, so each slot shows the business wording, not the [Test data] text. NoOfaFeeAdvisorEmail and RenewalConfirmation wait for ps2's field-library fix.

Push: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin main`
