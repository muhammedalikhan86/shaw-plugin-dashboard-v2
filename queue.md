# Worker queue

What each worker does next, in order. The hub keeps it current.
**>>** = being worked on now. Grp = group, lowest runs first; X = not grouped yet. Category: Functional, Look and Feel, or Undetermined.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-20 20:56

## Shell (pointer: group 9)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 9 | SHELL-B-163 | Toolbar inline padding 20px, as drawn | Look and Feel | 1 | Closed: already matches the OFA boards (16px), 0 pts built | - |
| >> | 9 | SHELL-B-164 | Preferences delay row inline padding | Look and Feel | 1 | Building | - |
| >> | 9 | SHELL-B-165 | Plugins card title-row inset | Look and Feel | 1 | Building | - |
| >> | 9 | SHELL-B-166 | Profile card sized to content, roles box max 156px | Look and Feel | 1 | Building | - |
| >> | 9 | SHELL-B-167 | Plugins table edge 13px while scrolling | Look and Feel | 1 | Building | - |
| >> | 9 | SHELL-B-168 | Date toggle icon 15px in | Look and Feel | 1 | Building | - |
| >> | 9 | SHELL-B-169 | Toolbar pickers' edges | Look and Feel | 1 | Building | - |
| >> | 9 | SHELL-B-170 | Picker outline notch closed | Look and Feel | 2 | Building | - |
| >> | 9 | LANDING-PAGE-B-007 | Landing card body text 14/20 | Look and Feel | 1 | Building | - |
| | 10 | (shell raises it) | A plain table can set one column's greatest width through the public table-tools API (from COMPLIANCE-DASHBOARD-B-114: the Load dialog's Field column at 560) | Functional | 1 | Group 10, after group 9 | - |

Done 2026-11-20: group 5 SHELL-F-169, SHELL-B-136, SHELL-F-166, SHELL-F-167, SHELL-B-135, SHELL-F-168, SHELL-B-137, SHELL-B-138, SHELL-B-144 (8fd61171); the parity check (shell, landing-page) Group 6 (5a6651d1): SHELL-B-139..B-143, B-145, B-146, B-148, B-149, B-151..B-154, LANDING-PAGE-B-001..B-005; B-147, B-150 closed (OFA boards). Group 7 (2c911aca): SHELL-B-155, SHELL-B-156, SHELL-F-170. Group 8 (2e2ab1ec): SHELL-B-157..B-162, LANDING-PAGE-B-006.

## Portfolio Services (pointer: group 9)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | - | OFA-F-138 | File the signed renewal in DART; also the real signing-status reader for renewals and Initial OFAs | Functional | 3 | Blocked by your DART retest | - |
| >> | 9 | OFA-B-206 | A sent Initial OFA takes its signing status from its envelopes (today it can only be declined) | Functional | 5 | Review passed | - |
| >> | 9 | OFA-B-208 | Electronic Initial OFA: refuse the send when the covering email has no approved wording (empty message today; same gap as OFA-B-205) | Functional | 1 | Built, in review | - |
| >> | 9 | OFA-F-169 | Cull notes: attach a file | Functional | 2 | Built, in review | - |
| >> | 9 | OFA-B-195 | Settings: the page scrolls sideways by 11px | Functional | 1 | Building, with OFA-F-163 part 2 | - |
| >> | 9 | OFA-F-163 | Overview: the two tracks fold with the rest | Functional | ?? | Building | - |
| >> | 9 | OFA-F-160 | Remove the manual fee sync | Functional | 2 | Built, in review | - |
| | 10 | OFA-B-196 | Settings: the four cards in two columns, as drawn | Look and Feel | 2 | After group 9 | - |
| | 10 | OFA-B-197 | Settings dialogs: board width, Add attachments row, change request and Preview as drawn | Look and Feel | 3 | After group 9 | - |
| | 10 | OFA-B-198 | Overview: the counts move into the board's cards | Look and Feel | 2 | After group 9 | - |
| | 10 | OFA-B-199 | Overview: "Entity type" heading on one line | Look and Feel | 1 | After group 9 | - |
| | 10 | OFA-B-200 | Row and Actions menus at board widths; Exceptions menu in board order | Look and Feel | 2 | After group 9 | - |
| | 10 | OFA-B-201 | Monthly cycle: Take off dialog, cycle select status line, Issuance badge and icon | Look and Feel | 3 | After group 9 | - |
| | 10 | OFA-B-209 | Issuance: friendly label and Release button for a notice held by an unknown outcome (front end of OFA-B-183) | Functional | 1 | Group 10, after PS2 group 18 is on main | OFA-B-183 |
| | 18 | OFA-F-176 | Adviser Renewal tracker read returns the account name (advisor.usp_RenewalTracker_Read has no AccountName; advisor mocks it today) | Functional | 1 | Group 18, right after OFA-F-131; from advisor | - |
| | 10 | OFA-B-202 | Empty Initial OFAs and Exceptions: only Add and expand in the toolbar | Look and Feel | 1 | After group 9 | - |
| | 10 | OFA-B-203 | Initial OFAs Accept dialog: board width, no hint under the date | Look and Feel | 1 | After group 9 | - |
| | 10 | OFA-B-204 | Renewal tracker cells and Exceptions date wrap at 1440 (re-run first) | Look and Feel | 1 | After group 9 | - |
| | 10 | OFA-B-207 | Quarantine list tab count colour, as drawn | Look and Feel | 1 | After group 9 | - |
| | X | OFA-F-155 | Proof of acceptance for each signer | Functional | 2 | On hold | COMPLIANCE-DASHBOARD-F-004 |
| | 11 | OFA-F-144 | Test data that stands apart from the warehouse | Functional | 3 | Group 11, after group 10 | - |

Done 2026-11-20: OFA-F-172, OFA-F-028 (f259a44e; OFA-B-007 and OFA-B-075 fixed with it).

## Portfolio Services 2 (pointer: group 18)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 18 | OFA-F-094 | Each history event says who can see it; the adviser side reads its own | Functional | 3 | Built (migrations 0150-0154), in review | - |
| >> | 18 | OFA-F-131 | Adviser side reads ended arrangements and the account's history | Functional | 2 | Built (migrations 0150-0154), in review | - |
| >> | 18 | OFA-F-132 | Adviser side records a request to Back Office | Functional | 3 | Built (migrations 0150-0154), in review | - |
| | X | OFA-F-158 | Swap placeholder emails for Luke's wording | Functional | 1 | Blocked by Luke's templates | - |
| >> | 18 | OFA-B-183 | A notice stuck as "send outcome unknown": label and release | Functional | 2 | Built (migrations 0150-0154), in review | - |
| | X | OFA-B-184 | A timeout can send a signing request twice | Functional | 2 | Blocked by a lookup in AnnatureInterfaceWebAPI (no item yet) | - |
Done 2026-11-20: OFA-F-173, OFA-F-174 (a733211a); OFA-F-170, OFA-F-171, OFA-B-205, OFA-B-179, OFA-B-182 (6e56c9f9).

## Compliance (pointer: group 12, end sweep)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 12 | End sweep | Board check and business scenarios on the built app for every screen groups 3 to 11 touched; remaining scenarios of F-008 | Look and Feel | ?? | Go 2026-11-20; one browser run allowed, look only | - |
| >> | 12 | COMPLIANCE-DASHBOARD-F-008 | Business scenarios for every UI item (the rest) | Functional | 3 | Go 2026-11-20, with the end sweep | - |
| | 12 | COMPLIANCE-DASHBOARD-B-114 | Load dialog: Check column 60px left of the board | Look and Feel | 1 | Moved to the shell (shell group 10); the plugin adopts it after | - |
| | 13 | COMPLIANCE-DASHBOARD-F-037 | Faster .NET tests, part 2 | Functional | 2 | Group 13, once OFA-F-144 is on main | OFA-F-144 |

Done 2026-11-20: closed with no change: COMPLIANCE-DASHBOARD-B-103 (build matches the board), B-102 (B-078 ruling: list cards fill; M25 has the board follow), B-105 (B-069 already draws it).; fixed COMPLIANCE-DASHBOARD-B-100, B-101, B-104, B-106, B-107, B-108 (merged 5d37d92c); B-095, B-112 fixed, B-111 closed with no change, B-113 moved to SHELL-B-156 (merged 5d7a9563)

## Advisor (pointer: group 15)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 15 | ADVISOR-DASHBOARD-F-049 | Back Office change request (part 2) | Functional | ?? | Building | OFA-F-170, OFA-F-171 |
| >> | 15 | ADVISOR-DASHBOARD-B-123 | Renewal tracker: account name as the S-Account column's second line, as drawn | Functional | 1 | Building last; waits for OFA-F-176 on main | OFA-F-176 |
| >> | 15 | ADVISOR-DASHBOARD-B-124 | Empty Renewal tracker and Initial OFAs cards: task_alt icon as drawn (folder_open today) | Look and Feel | 1 | Building | - |
| | 16 | ADVISOR-DASHBOARD-F-059 | S-Account page: the arrangement, OFA History tab, renewals (part 2) | Functional | ?? | Group 16, after PS2 group 18 is on main (advisor proposes the order) | OFA-F-094 |
| | X | ADVISOR-DASHBOARD-F-141 | The arrangement record | Functional | 3 | Blocked by a Portfolio Services adviser documents read (no item yet) | - |
| | 16 | ADVISOR-DASHBOARD-F-143 | History events | Functional | 5 | Group 16, after PS2 group 18 is on main (advisor proposes the order) | OFA-F-094 |
| | X | ADVISOR-DASHBOARD-F-144 | The OFA timeline | Functional | 6 | Blocked by the design, not drawn yet (Luke to show how Complii draws it) | - |
| | 16 | ADVISOR-DASHBOARD-F-117 | Adviser told on screen when a hold is extended | Functional | 2 | Group 16, after PS2 group 18 is on main (advisor proposes the order) | OFA-F-131 |
| | 16 | ADVISOR-DASHBOARD-F-118 | Ask Back Office to add a signer or a missing email | Functional | 3 | Group 16, after PS2 group 18 is on main (advisor proposes the order) | OFA-F-132 |

Done 2026-11-20: ADVISOR-DASHBOARD-F-146 part 2, ADVISOR-DASHBOARD-F-142 part 2 (018d9777). Group 13 (bafb7b09): ADVISOR-DASHBOARD-B-116, B-117, B-118, B-119, five board-target reds. Group 14 (0c46c642): ADVISOR-DASHBOARD-F-151, F-152, B-120, B-121, B-122.

## Hub

0. Weekend round (20-11 to Monday, unsupervised): workers run their queues end to end and ask only the hub. Warehouse tables and procs that do not exist yet (GridPay and the like) are mocked; Muhammed creates the real ones on Monday. Designer prompts wait for Monday. Resume timer every 5 hours from 18:35; queue upkeep every 30 minutes.

1. Parity run: done 20-11 and routed for every component. Shell and landing-page findings are shell group 6.
2. Next merges: advisor group 12, compliance group 11, shell group 6, PS OFA-F-028 part 2, PS2 group 17. After each one, its own tests run (all-app Jest after shell changes).
3. Designer prompt (not yet sent; goes out after this queue round): W38, P92, P93, plus PS O20 (OFA-B-206: the paper-signed upload item on an imported Initial OFA row's menu, and its date hint with no form date), PS O21 (remove the Sync fees button from the Exceptions report board; OFA-F-160 removes it), PS O22 (Upload a paper-signed Initial OFA dialog: render the date field's hint, as the app does), plus advisor B92 (F-146 confirmed line on CONFIRMED OFF rows) and B93 (F-142 follow-up resend dialog sentence), plus 6 parity questions: Overview "not fully signed" count slot; Adviser review answers bar placement; read-failure card on six PS screens; scope line for an adviser with several codes; Renewal tracker filter Reset and intro; Arrangements empty/loading/error card; shell: logo width (#12) and collapsed rail width (#21), where the boards disagree; shell states with no board (#20: Keep open on, Notifications with items, Search results and no matches, Search loading); landing empty and bus-unavailable states (#6); shell error and empty states (#4), search panel drawn two ways (#5), Plugin0 buttons and chips (#7); compliance review page "Read only." line and OFA Checklist note chip and Month arrow; PS Import screen in the sidebar has no board; shell (from group 6): cloud_off rail icon and person-icon avatar have no board, search empty state has no glyph on the board; compliance board: drop the empty grid after the filter-dialog fields so the gap above the buttons is 48px like advisor and PS.
4. End sweep: the browser, business-test and board checks skipped during the build, run once at the end.
5. Waiting on you: push main; the SyncFee grant: drop the gMSA's EXECUTE on dbo.SyncFee once OFA-F-160 ships (the repo's services/PortfolioServices.WebAPI/.../Sql/Warehouse/SyncFee-grants.sql line 3 still grants it; PS left it for you); before go-live, approved wording for the renewal notice, covering email and both service-question lists (no placeholder covers them); check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj; the DART retest (another day); Luke's templates and Initial OFA envelope title; PS's 8 production settings.

Push: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin main`
