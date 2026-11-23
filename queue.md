# Worker queue

What each worker does next, in order. The hub keeps it current. Forward view only: finished work leaves this file; the back view is the status page's update log.
**>>** = being worked on now. Grp = group, lowest runs first; X = not grouped yet. Category: Functional, Look and Feel, or Undetermined.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-23 11:45

## Shell (pointer: parked after group 18; queue empty)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 1 | REL-001 | Decision record for the test site | Functional | 2 | Go 2026-11-23 | - |
| | 1 | REL-003 | Test-site settings pattern and start-up guard (Shell.WebAPI file) | Functional | 5 | Go | REL-001 |
| | 1 | REL-008 | Test-site build of the six front ends | Functional | 3 | Go | REL-001 |
| | 1 | REL-009 | Deploy script: test-site target | Functional | 3 | Go | REL-003, REL-008 |
| | 1 | REL-010 | Test-site runbook | Functional | 1 | Go | REL-002, REL-009 |

## Portfolio Services (pointer: parked after group 16; only OFA-B-219 left, waiting on your yes/no)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 1 | REL-002 | Database scripts for the test site | Functional | 5 | Go 2026-11-23 | REL-001 |
| | 1 | REL-004 | Testers see the whole test data set; PS test-site settings file | Functional | 1 | Go | REL-003 |
| | - | OFA-F-138 | File the signed renewal in DART; also the real signing-status reader for renewals and Initial OFAs | Functional | 3 | Blocked by your DART retest | - |
| | X | OFA-B-219 | Expired report: an adviser's own fee-off mark should pull the row on, as a client closure's does (query, API, export, screen) | Functional | ?? | Awaiting user: business yes/no (default yes) | - |
| | X | OFA-F-155 | Proof of acceptance for each signer | Functional | 2 | On hold | COMPLIANCE-DASHBOARD-F-004 |

## Portfolio Services 2 (pointer: group 33, REL-007; then Luke's templates)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 1 | REL-007 | Every email to one inbox on the test site | Functional | 3 | Go 2026-11-23 | REL-003 |
| | X | OFA-F-116 | Holiday table for the closure clocks: needs 2027 loaded into the warehouse's gov.PublicHolidays | Functional | 1 | Blocked by you (Monday) | - |
| | X | OFA-S-005 | Finish the spike: rerun on the unredacted master spreadsheet | Functional | 1 | Blocked by you (Monday) | - |
| | X | OFA-B-107 | Monthly cycle S-Account not cut short: no plugin code (SHELL-F-135 covers it) | Look and Feel | - | Closes at the end-sweep parity look | - |
| | X | OFA-F-120, F-032 | Word converter and attachment mover: built, waiting on your end-to-end and SharePoint live checks | Functional | - | Blocked by you (Monday) | - |
| | X | OFA-F-062 | Load test: written, runs once in the end-sweep load window | Functional | - | End sweep | - |
| | 2 | OFA-F-158 + new items | Luke's templates in (renewal reminders, weekly Initial OFA, No OFA fee, closure/termination); State Manager emails 4 and 5 off; deceased-estate Back Office email off; client renewal follow-up (7) keeps its placeholder until Luke's template | Functional | 1+ (ps2 sizes) | Go 2026-11-23, after REL-007 | REL-007 |
| | X | OFA-B-184 | A timeout can send a signing request twice | Functional | 2 | Blocked by a lookup in AnnatureInterfaceWebAPI (no item yet) | - |

## Compliance (pointer: parked after group 22; the rest waits on design rows)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | COMPLIANCE-DASHBOARD-F-008 | Business scenarios for every UI item (the rest) | Functional | 3 | In progress: the 24 still off each wait on a design row, a held item or B-091's board | - |
| | X | Design row M39 | The outbox-sent closure confirmation has no file at the source; the board drops that attachment | Look | - | Monday design sync | - |
| | X | Design row M38 | Days colour: the board draws one error band at 30 days or fewer, the row has four bands | Look | - | Monday design sync; its @skip scenario is written now | - |

## Advisor (pointer: parked after group 23; F-144 blocked on the design; may get the closure personal-message screen item from ps2)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | ADVISOR-DASHBOARD-F-144 | The OFA timeline | Functional | 6 | Blocked by the design, not drawn yet (Luke to show how Complii draws it) | - |

## Hub

Deployment and testing (from 2026-11-23): the work left is the REL- stack in `docs/leftovers.md`, worked top first. REL-001 to REL-010 are on go.

1. Designer prompt (not yet sent; goes out after this queue round): W38, P92, P93, plus PS O20 (OFA-B-206: the paper-signed upload item on an imported Initial OFA row's menu, and its date hint with no form date), PS O21 (remove the Sync fees button from the Exceptions report board; OFA-F-160 removes it), PS O22 (Upload a paper-signed Initial OFA dialog: render the date field's hint, as the app does), plus advisor B92 (F-146 confirmed line on CONFIRMED OFF rows) and B93 (F-142 follow-up resend dialog sentence), plus 6 parity questions: Overview "not fully signed" count slot; Adviser review answers bar placement; read-failure card on six PS screens; scope line for an adviser with several codes; Renewal tracker filter Reset and intro; Arrangements empty/loading/error card; shell: logo width (#12) and collapsed rail width (#21), where the boards disagree; shell states with no board (#20: Keep open on, Notifications with items, Search results and no matches, Search loading); landing empty and bus-unavailable states (#6); shell error and empty states (#4), search panel drawn two ways (#5), Plugin0 buttons and chips (#7); compliance review page "Read only." line and OFA Checklist note chip and Month arrow; PS Import screen in the sidebar has no board; shell (from group 6): cloud_off rail icon and person-icon avatar have no board, search empty state has no glyph on the board; compliance board: drop the empty grid after the filter-dialog fields so the gap above the buttons is 48px like advisor and PS.
2. End sweep: the browser, business-test and board checks skipped during the build, run once at the end.
3. Waiting on you: push main; the SyncFee grant: OFA-F-160 is on main, so the gMSA's EXECUTE on dbo.SyncFee can be dropped on the server (PS removes line 3 of SyncFee-grants.sql in group 10); load 2027 into the warehouse's gov.PublicHolidays (OFA-F-116; none there yet, and closure due dates move once it lands); rerun the OFA-S-005 spike on the unredacted master spreadsheet (scripts in the PS checkout, spikes/OFA-S-005, uncommitted); the Adviser Dashboard's "Arrangements that ended" bell lists every ending in a State Manager's scope with no time limit: say whether it should show only recent ones, and how far back; before go-live, approved wording for the renewal notice, covering email and both service-question lists (no placeholder covers them); check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj; the DART retest (another day); the OFA-S-001 owner questions: DART's open-a-document URL and whether staff have DART logins (OFA-F-145 and F-055 are built behind Dart:DocumentLinkTemplate, off until it is set); the Initial OFA envelope title; Luke's address for the test-site mail redirect (REL-007); PS's 8 production settings.

Push: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin main`
