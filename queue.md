# Worker queue

What each worker does next, in order. The hub keeps it current.
**>>** = being worked on now. Grp = group, lowest runs first; X = not grouped yet. Category: Functional, Look and Feel, or Undetermined.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-21 01:58

## Shell (pointer: group 11)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 11 | SHELL-B-(new) | Notifications bell: group heading, empty line and an entry's second line and date, as the advisor board M18 draws (for ADVISOR-DASHBOARD-F-117) | Look and Feel | ?? | Go 2026-11-21 | - |

Done 2026-11-20: group 5 SHELL-F-169, SHELL-B-136, SHELL-F-166, SHELL-F-167, SHELL-B-135, SHELL-F-168, SHELL-B-137, SHELL-B-138, SHELL-B-144 (8fd61171); the parity check (shell, landing-page) Group 6 (5a6651d1): SHELL-B-139..B-143, B-145, B-146, B-148, B-149, B-151..B-154, LANDING-PAGE-B-001..B-005; B-147, B-150 closed (OFA boards). Group 7 (2c911aca): SHELL-B-155, SHELL-B-156, SHELL-F-170. Group 8 (2e2ab1ec): SHELL-B-157..B-162, LANDING-PAGE-B-006.; group 9 SHELL-B-164 to B-170, LANDING-PAGE-B-007, B-163 closed with no change (90b40bf7); group 10 SHELL-B-171 (ac98f9f6)

## Portfolio Services (pointer: group 10)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | - | OFA-F-138 | File the signed renewal in DART; also the real signing-status reader for renewals and Initial OFAs | Functional | 3 | Blocked by your DART retest | - |
| >> | 10 | OFA-B-196 | Settings: the four cards in two columns, as drawn | Look and Feel | 2 | Go 2026-11-21 | - |
| >> | 10 | OFA-B-197 | Settings dialogs: board width, Add attachments row, change request and Preview as drawn | Look and Feel | 3 | Go 2026-11-21 | - |
| >> | 10 | OFA-B-198 | Overview: the counts move into the board's cards | Look and Feel | 2 | Go 2026-11-21 | - |
| >> | 10 | OFA-B-199 | Overview: "Entity type" heading on one line | Look and Feel | 1 | Go 2026-11-21 | - |
| >> | 10 | OFA-B-200 | Row and Actions menus at board widths; Exceptions menu in board order | Look and Feel | 2 | Go 2026-11-21 | - |
| >> | 10 | OFA-B-202 | Empty Initial OFAs and Exceptions: only Add and expand in the toolbar | Look and Feel | 1 | Go 2026-11-21 | - |
| >> | 10 | OFA-B-203 | Initial OFAs Accept dialog: board width, no hint under the date | Look and Feel | 1 | Go 2026-11-21 | - |
| >> | 10 | OFA-B-204 | Renewal tracker cells and Exceptions date wrap at 1440 (re-run first) | Look and Feel | 1 | Go 2026-11-21 | - |
| >> | 10 | OFA-B-207 | Quarantine list tab count colour, as drawn | Look and Feel | 1 | Go 2026-11-21 | - |
| >> | 10 | OFA-B-212 | Initial OFAs spec "keeps each tab its own size when the other tab is opened and left" times out at 5000 ms on main (seen by PS2, group 19 Integration) | Functional | 1 | Go 2026-11-21 | - |
| | X | OFA-B-213 | Settings dialogs: the Add attachments row (the API takes files, then the picker, as drawn) | Functional | 3 | Next group, after group 10 | - |
| | X | OFA-F-155 | Proof of acceptance for each signer | Functional | 2 | On hold | COMPLIANCE-DASHBOARD-F-004 |

Done 2026-11-20: OFA-F-172, OFA-F-028 (f259a44e; OFA-B-007 and OFA-B-075 fixed with it). Group 9: OFA-B-206, B-208, B-195, F-163 part 2, F-160, F-169 (43bb6578).

## Portfolio Services 2 (pointer: group 20)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 20 | OFA-F-177 | A compliance view of client closures (S-Account, requested on, adviser, recorded by, due date from the closure clock, fee marked off), for COMPLIANCE-DASHBOARD-B-118 | Functional | 2 | Go 2026-11-21 | - |
| >> | 20 | OFA-F-178 | Adviser side withdraws an open Back Office ask (proc; the reminder email skips withdrawn asks), for ADVISOR-DASHBOARD-F-154 | Functional | 1 | Go 2026-11-21 | - |
| >> | 20 | OFA-F-179 | Adviser side reads the account's DART parties (mock where the warehouse table is missing), for ADVISOR-DASHBOARD-F-155 | Functional | 2 | Go 2026-11-21 | - |
| >> | 20 | OFA-B-214 | Migration 0152's refusal text says "Adviser" (new migration) | Functional | 1 | Go 2026-11-21 | - |
| | X | OFA-F-158 | Swap placeholder emails for Luke's wording | Functional | 1 | Blocked by Luke's templates | - |
| | X | OFA-B-184 | A timeout can send a signing request twice | Functional | 2 | Blocked by a lookup in AnnatureInterfaceWebAPI (no item yet) | - |
Done 2026-11-20: OFA-F-173, OFA-F-174 (a733211a); OFA-F-170, OFA-F-171, OFA-B-205, OFA-B-179, OFA-B-182 (6e56c9f9). OFA-F-131, F-176, F-094, F-132, OFA-B-183 (d4b81a3b). Group 19: OFA-B-209, B-201, B-210, F-144, B-211 (c342a0a3).

## Compliance (pointer: waiting on PS2 group 20 for group 15)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | COMPLIANCE-DASHBOARD-F-008 | Business scenarios for every UI item (the rest) | Functional | 3 | In progress: 31 scenarios on (group 13); the rest wait on built screens and design rows M34-M37 | - |
| | 15 | COMPLIANCE-DASHBOARD-B-118 | S19780's record shows no closure summary (OFA-F-044 data) | Functional | 3 | Waits on the PS2 compliance closure view | OFA-F-177 |

Done 2026-11-20: closed with no change: COMPLIANCE-DASHBOARD-B-103 (build matches the board), B-102 (B-078 ruling: list cards fill; M25 has the board follow), B-105 (B-069 already draws it).; fixed COMPLIANCE-DASHBOARD-B-100, B-101, B-104, B-106, B-107, B-108 (merged 5d37d92c); B-095, B-112 fixed, B-111 closed with no change, B-113 moved to SHELL-B-156 (merged 5d7a9563); group 12 end sweep clean, B-115 fixed (merged 1f6dde4c); group 13 B-114, B-117 fixed, F-008 progress (a44de06b); group 14 B-119, F-037; B-116 green with OFA-B-211 (2fdcd937)

## Advisor (pointer: waiting on PS2 group 20 for group 17)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | ADVISOR-DASHBOARD-F-141 | The arrangement record | Functional | 3 | Blocked by a Portfolio Services adviser documents read (no item yet) | - |
| | X | ADVISOR-DASHBOARD-F-144 | The OFA timeline | Functional | 6 | Blocked by the design, not drawn yet (Luke to show how Complii draws it) | - |
| | 17 | ADVISOR-DASHBOARD-F-154 | Remove a signatory from an open Back Office ask | Functional | 2 | Group 17, after PS2 group 20 | OFA-F-178 |
| | 17 | ADVISOR-DASHBOARD-F-155 | Add signatory: pick from the account's DART parties | Functional | 2 | Group 17, after PS2 group 20 | OFA-F-179 |

Done 2026-11-20: ADVISOR-DASHBOARD-F-146 part 2, ADVISOR-DASHBOARD-F-142 part 2 (018d9777). Group 13 (bafb7b09): ADVISOR-DASHBOARD-B-116, B-117, B-118, B-119, five board-target reds. Group 14 (0c46c642): ADVISOR-DASHBOARD-F-151, F-152, B-120, B-121, B-122.; group 15 F-049 part 2, B-123, B-124 (59c7190f); group 16 F-143, F-118, F-153, F-059 part 2, F-117 (bb446a4b)

## Hub

0. Weekend round (20-11 to Monday, unsupervised): workers run their queues end to end and ask only the hub. Warehouse tables and procs that do not exist yet (GridPay and the like) are mocked; Muhammed creates the real ones on Monday. Designer prompts wait for Monday. Resume timer every 5 hours from 18:35; queue upkeep every 30 minutes.

1. Parity run: done 20-11 and routed for every component. Shell and landing-page findings are shell group 6.
2. Next merges: advisor group 12, compliance group 11, shell group 6, PS OFA-F-028 part 2, PS2 group 17. After each one, its own tests run (all-app Jest after shell changes).
3. Designer prompt (not yet sent; goes out after this queue round): W38, P92, P93, plus PS O20 (OFA-B-206: the paper-signed upload item on an imported Initial OFA row's menu, and its date hint with no form date), PS O21 (remove the Sync fees button from the Exceptions report board; OFA-F-160 removes it), PS O22 (Upload a paper-signed Initial OFA dialog: render the date field's hint, as the app does), plus advisor B92 (F-146 confirmed line on CONFIRMED OFF rows) and B93 (F-142 follow-up resend dialog sentence), plus 6 parity questions: Overview "not fully signed" count slot; Adviser review answers bar placement; read-failure card on six PS screens; scope line for an adviser with several codes; Renewal tracker filter Reset and intro; Arrangements empty/loading/error card; shell: logo width (#12) and collapsed rail width (#21), where the boards disagree; shell states with no board (#20: Keep open on, Notifications with items, Search results and no matches, Search loading); landing empty and bus-unavailable states (#6); shell error and empty states (#4), search panel drawn two ways (#5), Plugin0 buttons and chips (#7); compliance review page "Read only." line and OFA Checklist note chip and Month arrow; PS Import screen in the sidebar has no board; shell (from group 6): cloud_off rail icon and person-icon avatar have no board, search empty state has no glyph on the board; compliance board: drop the empty grid after the filter-dialog fields so the gap above the buttons is 48px like advisor and PS.
4. End sweep: the browser, business-test and board checks skipped during the build, run once at the end.
5. Waiting on you: push main; the SyncFee grant: OFA-F-160 is on main, so the gMSA's EXECUTE on dbo.SyncFee can be dropped on the server (PS removes line 3 of SyncFee-grants.sql in group 10); the Adviser Dashboard's "Arrangements that ended" bell lists every ending in a State Manager's scope with no time limit: say whether it should show only recent ones, and how far back; before go-live, approved wording for the renewal notice, covering email and both service-question lists (no placeholder covers them); check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj; the DART retest (another day); Luke's templates and Initial OFA envelope title; PS's 8 production settings.

Push: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin main`
