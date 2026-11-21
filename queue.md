# Worker queue

What each worker does next, in order. The hub keeps it current.
**>>** = being worked on now. Grp = group, lowest runs first; X = not grouped yet. Category: Functional, Look and Feel, or Undetermined.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-21 19:46

## Shell (pointer: parked after group 18; queue empty)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|

Done 2026-11-21: group 18 SHELL-B-181, SHELL-B-182 (0eefe343). group 17 SHELL-B-179, SHELL-B-180 (86205a06). Group 16 SHELL-B-178 (fbdee3a8).
Done 2026-11-20: group 5 SHELL-F-169, SHELL-B-136, SHELL-F-166, SHELL-F-167, SHELL-B-135, SHELL-F-168, SHELL-B-137, SHELL-B-138, SHELL-B-144 (8fd61171); the parity check (shell, landing-page) Group 6 (5a6651d1): SHELL-B-139..B-143, B-145, B-146, B-148, B-149, B-151..B-154, LANDING-PAGE-B-001..B-005; B-147, B-150 closed (OFA boards). Group 7 (2c911aca): SHELL-B-155, SHELL-B-156, SHELL-F-170. Group 8 (2e2ab1ec): SHELL-B-157..B-162, LANDING-PAGE-B-006.; group 9 SHELL-B-164 to B-170, LANDING-PAGE-B-007, B-163 closed with no change (90b40bf7); group 10 SHELL-B-171 (ac98f9f6); group 11 SHELL-B-172 (bafaa60d); group 12 SHELL-B-173, B-174, B-175 (f19217e8); group 13 SHELL-F-171 (d0f6b0d4); group 14 SHELL-B-176 (7a61338c) Group 15 SHELL-B-177 (ea2ad426).

## Portfolio Services (pointer: parked after group 16; only OFA-B-219 left, waiting on your yes/no)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | - | OFA-F-138 | File the signed renewal in DART; also the real signing-status reader for renewals and Initial OFAs | Functional | 3 | Blocked by your DART retest | - |
| | X | OFA-B-219 | Expired report: an adviser's own fee-off mark should pull the row on, as a client closure's does (query, API, export, screen) | Functional | ?? | Awaiting user: business yes/no (default yes) | - |
| | X | OFA-F-155 | Proof of acceptance for each signer | Functional | 2 | On hold | COMPLIANCE-DASHBOARD-F-004 |

Done 2026-11-21: group 16 (b3925012): OFA-B-227, B-229 fixed (advisor and compliance surface attachment procs, migrations 0186-0187); PMBook history rows v280, v281. group 15 (95e919d4): OFA-B-221, B-223, B-225 fixed; F-075 done. group 14 (b305223c): OFA-B-015 point 7 (row open for point 8), B-217, B-145 fixed; F-087, F-115 done; F-075 in part; SHELL-B-180 follow-up. group 13 (ede59df5): OFA-B-078 parts 1, 10, 11; B-084, B-109, B-125; B-027 (by-hand); B-113, B-127, F-139, F-140, B-115. Group 12 (c82454ea): S9970024 partly-signed seed, OFA-F-133 counter, OFA-B-016, B-060, B-103, B-124, B-126, F-051, F-085, F-093. S19611 paper-copy seed (10406e29). Group 11 (53815a1c): OFA-B-213, B-005, B-006, B-043, B-046, B-059, B-123, B-215, F-052, F-054, F-055.
Done 2026-11-20: OFA-F-172, OFA-F-028 (f259a44e; OFA-B-007 and OFA-B-075 fixed with it). Group 9: OFA-B-206, B-208, B-195, F-163 part 2, F-160, F-169 (43bb6578). Group 10: OFA-B-196, B-197, B-198, B-199, B-203, B-207, B-212; B-200 and B-202 in part (rest OFA-B-215); B-204 in part (Exceptions date wrap to the end-sweep crawl) (55e90b05).

## Portfolio Services 2 (pointer: parked after group 32; nothing unblocked)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | OFA-F-116 | Holiday table for the closure clocks: needs 2027 loaded into the warehouse's gov.PublicHolidays | Functional | 1 | Blocked by you (Monday) | - |
| | X | OFA-S-005 | Finish the spike: rerun on the unredacted master spreadsheet | Functional | 1 | Blocked by you (Monday) | - |
| | X | OFA-B-107 | Monthly cycle S-Account not cut short: no plugin code (SHELL-F-135 covers it) | Look and Feel | - | Closes at the end-sweep parity look | - |
| | X | OFA-F-120, F-032 | Word converter and attachment mover: built, waiting on your end-to-end and SharePoint live checks | Functional | - | Blocked by you (Monday) | - |
| | X | OFA-F-062 | Load test: written, runs once in the end-sweep load window | Functional | - | End sweep | - |
| | X | OFA-F-158 | Swap placeholder emails for Luke's wording | Functional | 1 | Blocked by Luke's templates | - |
| | X | OFA-B-184 | A timeout can send a signing request twice | Functional | 2 | Blocked by a lookup in AnnatureInterfaceWebAPI (no item yet) | - |
Done 2026-11-21: group 32 (f3aa3f95): OFA-B-222, B-144 fixed (PS .NET suite 505 s to about 250 s). group 31 (923f5b3f): OFA-B-220 fixed; B-144 part 1. group 30 (9c83f855): OFA-B-218, F-047; F-120 and F-032 built (not Done); F-062 written. Group 29 (bc9bc985): OFA-B-216, B-026, B-143, F-029. Group 28 (78b599db): OFA-B-129, B-131, B-132, B-133, B-134, B-027 (PS2 parts), F-088. Group 27 (778309e8): OFA-B-024, B-045, B-047, B-071, B-073, B-122, B-128, B-130, B-137, B-078 part 10. Group 26 (a8f32e66): OFA-B-100, B-104, B-105, B-114, B-078 in part (rest routed). Group 25 (65537360): OFA-F-183. Group 24 (96d1df54): OFA-F-181, F-182. Group 23 (cb215b13): OFA-F-180. Group 22 (4c8b3fc9): OFA-F-133, F-083, F-065, B-140, B-049, B-050; B-044 closed (O26), B-135 already fixed.
Done 2026-11-20: OFA-F-173, OFA-F-174 (a733211a); OFA-F-170, OFA-F-171, OFA-B-205, OFA-B-179, OFA-B-182 (6e56c9f9). OFA-F-131, F-176, F-094, F-132, OFA-B-183 (d4b81a3b). Group 19: OFA-B-209, B-201, B-210, F-144, B-211 (c342a0a3). Group 20: OFA-F-177, F-178, F-179, B-214 (3a9578c7). Group 21 sweep (a524e03b): 12 closed, including OFA-B-002, B-003, B-004, B-014, B-089, B-058, B-063, B-064, B-088, B-149, F-070, F-119.

## Compliance (pointer: parked after group 20; the rest waits on design rows)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | (compliance to raise) | Fail closed at startup on bad Attachments settings (ValidateOnStart), as the advisor API does; also fix appsettings.Production.json _comment ("read access", it now writes note files) | Functional | 1 | Next compliance group | SHELL-B-181 (docs) |
| | X | COMPLIANCE-DASHBOARD-F-008 | Business scenarios for every UI item (the rest) | Functional | 3 | In progress: the 24 still off each wait on a design row, a held item or B-091's board | - |
| | X | Design row M39 | The outbox-sent closure confirmation has no file at the source; the board drops that attachment | Look | - | Monday design sync | - |
| | X | Design row M38 | Days colour: the board draws one error band at 30 days or fewer, the row has four bands | Look | - | Monday design sync; its @skip scenario is written now | - |

Done 2026-11-21: group 20 (61f40701): COMPLIANCE-DASHBOARD-F-048 done on the real procs, B-122 fixed. group 19 (2b28cbf4): COMPLIANCE-DASHBOARD-F-047, B-121; S9970024 partly-signed scenario on. Group 16 (c5436b08): COMPLIANCE-DASHBOARD-F-005. Group 17 (defce403): B-120, M38 @skip scenario. Group 18 (289a5c94): F-004, the F-005 paper-copy line, M39 @skip scenario.
Done 2026-11-20: closed with no change: COMPLIANCE-DASHBOARD-B-103 (build matches the board), B-102 (B-078 ruling: list cards fill; M25 has the board follow), B-105 (B-069 already draws it).; fixed COMPLIANCE-DASHBOARD-B-100, B-101, B-104, B-106, B-107, B-108 (merged 5d37d92c); B-095, B-112 fixed, B-111 closed with no change, B-113 moved to SHELL-B-156 (merged 5d7a9563); group 12 end sweep clean, B-115 fixed (merged 1f6dde4c); group 13 B-114, B-117 fixed, F-008 progress (a44de06b); group 14 B-119, F-037; B-116 green with OFA-B-211 (2fdcd937); group 15 B-118, F-008 progress (b005b57b)

## Advisor (pointer: parked after group 22; F-144 blocked on the design)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | X | ADVISOR-DASHBOARD-F-144 | The OFA timeline | Functional | 6 | Blocked by the design, not drawn yet (Luke to show how Complii draws it) | - |

Done 2026-11-21: group 22 (b57b8b44): ADVISOR-DASHBOARD-F-159, F-160 done on the real procs. group 21 (7222bad5): ADVISOR-DASHBOARD-B-125 fixed; F-159, F-160 built on a mock (In Progress). group 20 (69b48a66): ADVISOR-DASHBOARD-F-141 (real read, mock gone), F-158; F-139 scenario on. Group 19 (e8abe824): ADVISOR-DASHBOARD-F-139; F-141 built on a mock. Group 18 (5492c090): ADVISOR-DASHBOARD-F-075; F-139 groundwork.
Done 2026-11-20: ADVISOR-DASHBOARD-F-146 part 2, ADVISOR-DASHBOARD-F-142 part 2 (018d9777). Group 13 (bafb7b09): ADVISOR-DASHBOARD-B-116, B-117, B-118, B-119, five board-target reds. Group 14 (0c46c642): ADVISOR-DASHBOARD-F-151, F-152, B-120, B-121, B-122.; group 15 F-049 part 2, B-123, B-124 (59c7190f); group 16 F-143, F-118, F-153, F-059 part 2, F-117 (bb446a4b); group 17 F-154, F-155, F-156 (808e6eaf)

## Hub

0. Weekend round (20-11 to Monday, unsupervised): workers run their queues end to end and ask only the hub. Warehouse tables and procs that do not exist yet (GridPay and the like) are mocked; Muhammed creates the real ones on Monday. Designer prompts wait for Monday. Resume timer every 5 hours from 18:35; queue upkeep every 30 minutes.

1. Parity run: done 20-11 and routed for every component. Shell and landing-page findings are shell group 6.
2. Next merges: advisor group 12, compliance group 11, shell group 6, PS OFA-F-028 part 2, PS2 group 17. After each one, its own tests run (all-app Jest after shell changes).
3. Designer prompt (not yet sent; goes out after this queue round): W38, P92, P93, plus PS O20 (OFA-B-206: the paper-signed upload item on an imported Initial OFA row's menu, and its date hint with no form date), PS O21 (remove the Sync fees button from the Exceptions report board; OFA-F-160 removes it), PS O22 (Upload a paper-signed Initial OFA dialog: render the date field's hint, as the app does), plus advisor B92 (F-146 confirmed line on CONFIRMED OFF rows) and B93 (F-142 follow-up resend dialog sentence), plus 6 parity questions: Overview "not fully signed" count slot; Adviser review answers bar placement; read-failure card on six PS screens; scope line for an adviser with several codes; Renewal tracker filter Reset and intro; Arrangements empty/loading/error card; shell: logo width (#12) and collapsed rail width (#21), where the boards disagree; shell states with no board (#20: Keep open on, Notifications with items, Search results and no matches, Search loading); landing empty and bus-unavailable states (#6); shell error and empty states (#4), search panel drawn two ways (#5), Plugin0 buttons and chips (#7); compliance review page "Read only." line and OFA Checklist note chip and Month arrow; PS Import screen in the sidebar has no board; shell (from group 6): cloud_off rail icon and person-icon avatar have no board, search empty state has no glyph on the board; compliance board: drop the empty grid after the filter-dialog fields so the gap above the buttons is 48px like advisor and PS.
4. End sweep: the browser, business-test and board checks skipped during the build, run once at the end.
5. Waiting on you: push main; the SyncFee grant: OFA-F-160 is on main, so the gMSA's EXECUTE on dbo.SyncFee can be dropped on the server (PS removes line 3 of SyncFee-grants.sql in group 10); load 2027 into the warehouse's gov.PublicHolidays (OFA-F-116; none there yet, and closure due dates move once it lands); rerun the OFA-S-005 spike on the unredacted master spreadsheet (scripts in the PS checkout, spikes/OFA-S-005, uncommitted); the Adviser Dashboard's "Arrangements that ended" bell lists every ending in a State Manager's scope with no time limit: say whether it should show only recent ones, and how far back; before go-live, approved wording for the renewal notice, covering email and both service-question lists (no placeholder covers them); check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj; the DART retest (another day); the OFA-S-001 owner questions: DART's open-a-document URL and whether staff have DART logins (OFA-F-145 and F-055 are built behind Dart:DocumentLinkTemplate, off until it is set); Luke's templates and Initial OFA envelope title; PS's 8 production settings.

Push: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin main`
