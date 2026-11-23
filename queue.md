# Worker queue

What each worker does next, in order. The hub keeps it current. Forward view only: finished work leaves this file; the back view is the status page's update log.
**>>** = being worked on now. Grp = group, lowest runs first; X = blocked, grouped once it is free. Category: Functional, Look and Feel, or Undetermined.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-24 07:52

## Now (from 2026-11-24 02:00)

1. No `make up` for the rest of the night of 2026-11-24: two stack starts were killed for low memory, and a restart needs Muhammed. Stack checks are listed as owed for the end sweep. Board-target runs (artboard server only) are fine.
2. Stack order: ps2 (group 35, then the Preview bypass), then Portfolio Services (OFA-B-219 and its three bugs), then Advisor (the bell item and its six bugs). A worker builds and runs Jest and its own .NET tests without the stack, and asks for it only for business tests, e2e and screen checks.
3. No idle worker: when a worker's next item is blocked (external party, manual testing, keys, design rows), it takes its next unblocked item, including the testing-run bugs, rather than wait. Compliance and Shell have nothing unblocked: they stay parked unless the hub routes work to them.

## Shell (pointer: parked after group 47; queue empty)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|

## Portfolio Services (pointer: parked after group 49; nothing unblocked)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | OFA-F-138 | File the signed renewal in DART; also the real signing-status reader for renewals and Initial OFAs | Functional | 3 | Blocked by your DART retest | - |
| | X | OFA-F-155 | Proof of acceptance for each signer | Functional | 2 | On hold | COMPLIANCE-DASHBOARD-F-004 |
| | X | - | Browser checks owed from groups 36, 45 and 49, on the stack: the Settings report preview (both tables, a wide table scrolls, the empty-Expired line), B-233 opening month, B-235 row menu meets the card edge, B-237 Documents icon whole, B-241 table edges at 1440/1680/1920 (wide tables still scroll), F-189 Overview card | Look and Feel | 0 | Moved to the end sweep: two stack starts were killed for low memory on 2026-11-24 night; a restart needs Muhammed | - |

## Portfolio Services 2 (pointer: group 39 paused on its usage limit, code committed on its branch; then 41, 40)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | OFA-F-116 | Holiday table for the closure clocks: needs 2027 loaded into the warehouse's gov.PublicHolidays | Functional | 1 | IT ticket raised; approval to run expected Wed 2026-11-25 | - |
| | X | OFA-S-005 | Finish the spike: rerun on the unredacted master spreadsheet | Functional | 1 | Blocked: the warehouse refuses both the read-only login and Windows sign-in (2026-11-24 03:2x); resumes when it is back | - |
| | X | OFA-F-120 | Word converter: built; the login works, but Shaw.Word 2.1.0 uploads to an empty drive ID (Drives[""]), so Graph refuses | Functional | - | Parked 2026-11-23 until IT names a drive the app login can write to; then a Shaw.Word DriveId setting (branch, your review) | - |
| | X | OFA-F-032 | Attachment mover: built, waiting on your SharePoint live check | Functional | - | After go-live | - |
| | 40 | OFA-B-107 | Monthly cycle S-Account not cut short: no plugin code (SHELL-F-135 covers it) | Look and Feel | - | Closes at the end-sweep parity look | - |
| >> | 39 | OFA-F-192 | Wording field library, store side: one library of known fields with aliases, the upload check rewritten against it, the slot catalogue fixed (four Initial OFA slots added; InitialOfa, FollowUpEmail, TerminationEmail retired; nothing required), report fields and %TODAY%, working starters for the 16 business slots (migrations 0201-0202) | Functional | 5 | Review passed; merges with OFA-F-194 after the group's Integration; spec docs/hub/wording-field-library.md §5 | - |
| >> | 39 | OFA-F-194 | The emails and notices use the library: one shared fill, subjects filled everywhere, %REPORT_TABLE% placed where the document puts it, the renewal confirmation regains %ADVISERNAME% (0203) | Functional | 3 | In review, then Integration (paused: usage limit); wires %TOTAL_FEES% to the weekly report's Fees column (OFA-F-191 is on main) | OFA-F-192 |
| | X | OFA-F-196 | Initial OFA from Luke's templates: four wording slots (electronic or print-and-sign, Estimate or Fixed), the prepare dialog asks Estimate or Fixed and whether the adviser nominates a Reference Date (design row O38), signing anchors mapped, four starters from Luke's documents (0204) | Functional | 5 | Group 41; blocked: six business questions for Muhammed (Reference Date fill, Authorised Representative number source, client name, per-provider fee, signers above two, a link wording in the print-and-sign templates) | OFA-F-192 |
| | X | OFA-F-190 | Client renewal follow-up with our own wording: Annature's reminder cannot carry our subject or message. Options: (a) Annature's own reminder as is (2), (b) a fresh signing link from Annature in our own email (3, ps2's pick), (c) hold | Functional | 2-3 | Blocked: Muhammed picks a, b or c | OFA-F-130 |
| | 40 | OFA-F-062 | Load test: written, runs once in the end-sweep load window | Functional | - | End sweep | - |

## Compliance (pointer: parked after group 44; F-053 waits on ps2)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | COMPLIANCE-DASHBOARD-F-053 | Wording field library (page side): the Wording page shows the whole field library (each field, what it fills, which slots take it) for anyone building a document, and each slot shows the fields it can fill; the upload check says "every field used will be filled" or refuses and names each field the slot cannot fill | Functional | 5 | Ruled by Muhammed 2026-11-23; spec docs/hub/wording-field-library.md §6; design rows W39-W43 sent to the designer 2026-11-23; builds after ps2's store side | ps2 field library row |
| | 48 | COMPLIANCE-DASHBOARD-B-124 | Wording catalogue matches ps2's new slots (drops InitialOfa, FollowUpEmail, TerminationEmail; adds the four Initial OFA slots); the field check accepts names with a space and the signing marks; the store tests follow the new refusal messages | Bug | 3 | Built and reviewed (0c6ddef9; B-125's plan row 0855ce2d rides with it); merged right after OFA-F-192, then Compliance's .NET suite runs | OFA-F-192 |
| | 48 | COMPLIANCE-DASHBOARD-B-125 | The wording list reads which slots take a subject, and what each is for, from the database; Compliance's own document check knows the field aliases, refuses signing marks where a slot takes none, and reads headers and footers too | Bug | 3 | Builds once OFA-F-192 is on main | OFA-F-192 |
| | 48 | - | Run M28 and M38 on the built app (stack) and drop M38's @not-built-COMPLIANCE-DASHBOARD-F-052 tag; both pass on the board | Functional | 0 | Folds into the next Compliance group | - |

## Advisor (pointer: parked after group 46; B-132 waits for a stack window, F-144 waits on Luke)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | ADVISOR-DASHBOARD-F-144 | The OFA timeline | Functional | 6 | Blocked: waiting on Luke. Asked 2026-11-23 what the Adviser's OFA History tab should show, with the Portfolio Services and Compliance tabs as examples; then the design | - |
| | X | ADVISOR-DASHBOARD-B-132 | OFA questionnaire still stutters after ADVISOR-DASHBOARD-B-130 and SHELL-B-184: each answer edit and Select all block the screen for about 1 s; profile a production build in a real browser and fix it (shared shell code goes to Shell) | Bug | 3 | Blocked: needs a stack (production build in a real browser); no stack tonight |  - |

## Hub

Deployment and testing (from 2026-11-23): the work left is the REL- stack in `docs/leftovers.md`, worked top first. REL-001 to REL-010 are on go.

1. Designer prompt (not yet sent; goes out after this queue round): W38, P92, P93, plus PS O20 (OFA-B-206: the paper-signed upload item on an imported Initial OFA row's menu, and its date hint with no form date), PS O21 (remove the Sync fees button from the Exceptions report board; OFA-F-160 removes it), PS O22 (Upload a paper-signed Initial OFA dialog: render the date field's hint, as the app does), PS O36 (the SOA field in Add an arrangement by hand gets its label), PS O37 (renewal confirmation labels say client: History and Renewal tracker; ps2 edits the repo board in OFA-B-228, the designer's copy needs the same two strings), PS O38 (Initial OFA prepare dialog: Estimate or Fixed, and the adviser nominates a Reference Date), PS O39 (Settings report preview with the new report columns; PS edits the repo board in OFA-F-191, the designer's copy needs the same), plus advisor B92 (F-146 confirmed line on CONFIRMED OFF rows), B93 (F-142 follow-up resend dialog sentence), B94 (Closures S-Account opens the S-Account page) and B95 (the two Closures status lines drawn as the chip's tip, reworded by Advisor), B96 (Account History's Show all events switch reads its own name: hide the thumb icon), plus 6 parity questions: Overview "not fully signed" count slot; Adviser review answers bar placement; read-failure card on six PS screens; scope line for an adviser with several codes; Renewal tracker filter Reset and intro; Arrangements empty/loading/error card; shell: logo width (#12) and collapsed rail width (#21), where the boards disagree; shell states with no board (#20: Keep open on, Notifications with items, Search results and no matches, Search loading); landing empty and bus-unavailable states (#6); shell error and empty states (#4), search panel drawn two ways (#5), Plugin0 buttons and chips (#7); compliance review page "Read only." line and OFA Checklist note chip and Month arrow; PS Import screen in the sidebar has no board; shell (from group 6): cloud_off rail icon and person-icon avatar have no board, search empty state has no glyph on the board; compliance board: drop the empty grid after the filter-dialog fields so the gap above the buttons is 48px like advisor and PS.
2. End sweep: the browser, business-test and board checks skipped during the build, run once at the end.
3. Waiting on you: push main; the SyncFee grant: OFA-F-160 is on main, so the gMSA's EXECUTE on dbo.SyncFee can be dropped on the server (PS removes line 3 of SyncFee-grants.sql in group 10); rerun the OFA-S-005 spike on the unredacted master spreadsheet (scripts in the PS checkout, spikes/OFA-S-005, uncommitted); check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj; the DART retest (another day); the OFA-S-001 owner questions: DART's open-a-document URL and whether staff have DART logins (OFA-F-145 and F-055 are built behind Dart:DocumentLinkTemplate, off until it is set); PS's 8 production settings.
4. 2026-11-24, with the stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database through the Wording page's upload, so each slot shows the business wording, not the [Test data] text. NoOfaFeeAdvisorEmail and RenewalConfirmation wait for ps2's field-library fix.


Push: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin main`
