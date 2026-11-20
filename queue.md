# Worker queue

What each worker does next, in order. The hub keeps it current.
**>>** = being worked on now. Grp = group, lowest runs first; X = not grouped yet. Category: Functional, Look and Feel, or Undetermined.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-20 18:49

## Shell (pointer: group 6)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 6 | SHELL-B-143 | Table headers stay frozen when the page scrolls down (they scroll away today) | Functional | 3 | First: user-reported | - |
| >> | 6 | SHELL-B-145 | Profile and Preferences with Keep open on: the plugins card scrolls sideways and clips Notifications by 46px | Functional | 2 | Building | - |
| >> | 6 | LANDING-PAGE-B-001 | Greeting wording as the board | Functional | 1 | Building | - |
| >> | 6 | SHELL-B-146 | Keep-open switch sits 6px left | Look and Feel | 1 | Building | - |
| >> | 6 | SHELL-B-149 | Avatar initials size and weight | Look and Feel | 1 | Building | - |
| >> | 6 | SHELL-B-148 | Act As chip: size, icon and type | Look and Feel | 1 | Building | - |
| >> | 6 | SHELL-B-151 | Act As panel labels colour | Look and Feel | 1 | Building | - |
| >> | 6 | LANDING-PAGE-B-002 | Landing card icon 8px off | Look and Feel | 1 | Building | - |
| >> | 6 | SHELL-B-139 | Plugins-unavailable message fits the rail | Functional | 1 | Building | - |
| >> | 6 | SHELL-B-140 | Failed identity read: Try again, no blank area | Functional | 2 | Building | - |
| >> | 6 | SHELL-B-141 | Search empty state says "dashboards" | Functional | 1 | Building | - |
| >> | 6 | SHELL-B-142 | Profile and Preferences: black labels, page position as drawn | Look and Feel | 1 | Building | - |
| >> | 6 | SHELL-B-152 | Keep open switch off-state, as drawn | Look and Feel | 1 | Building | - |
| >> | 6 | SHELL-B-153 | Toolbar icons white, as drawn | Look and Feel | 1 | Building | - |
| >> | 6 | SHELL-B-154 | Bell badge 18px weight 500 | Look and Feel | 1 | Building | - |
| >> | 6 | LANDING-PAGE-B-003 | Card source line type | Look and Feel | 1 | Building | - |
| >> | 6 | LANDING-PAGE-B-004 | Card title regular weight | Look and Feel | 1 | Building | - |
| >> | 6 | LANDING-PAGE-B-005 | Card footer type | Look and Feel | 1 | Building | - |
| | 7 | SHELL-B-155 | Theme badge default 18px weight 500 for every plugin, as the boards draw it | Look and Feel | 1 | First in group 7 | - |
| | 7 | SHELL-F-170 | Shared "built app only" test step in business-tests/support/steps; the component copies go | Undetermined | 1 | Group 7 | - |
Done 2026-11-20: group 5 SHELL-F-169, SHELL-B-136, SHELL-F-166, SHELL-F-167, SHELL-B-135, SHELL-F-168, SHELL-B-137, SHELL-B-138, SHELL-B-144 (8fd61171); the parity check (shell, landing-page)

## Portfolio Services (pointer: group 9)

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | - | OFA-F-138 | File the signed renewal in DART | Functional | 3 | Blocked by your DART retest | - |
| >> | 9 | OFA-B-206 | A sent Initial OFA takes its signing status from its envelopes (today it can only be declined) | Functional | 5 | Building (first) | - |
| >> | 9 | OFA-F-169 | Cull notes: attach a file | Functional | 2 | Building | - |
| >> | 9 | OFA-B-195 | Settings: the page scrolls sideways by 11px | Functional | 1 | Building, with OFA-F-163 part 2 | - |
| >> | 9 | OFA-F-163 | Overview: the two tracks fold with the rest | Functional | ?? | Building | - |
| >> | 9 | OFA-F-160 | Remove the manual fee sync | Functional | 2 | Group 9; SyncFee mocked until your grant script | - |
| | 10 | OFA-B-196 | Settings: the four cards in two columns, as drawn | Look and Feel | 2 | After group 9 | - |
| | 10 | OFA-B-197 | Settings dialogs: board width, Add attachments row, change request and Preview as drawn | Look and Feel | 3 | After group 9 | - |
| | 10 | OFA-B-198 | Overview: the counts move into the board's cards | Look and Feel | 2 | After group 9 | - |
| | 10 | OFA-B-199 | Overview: "Entity type" heading on one line | Look and Feel | 1 | After group 9 | - |
| | 10 | OFA-B-200 | Row and Actions menus at board widths; Exceptions menu in board order | Look and Feel | 2 | After group 9 | - |
| | 10 | OFA-B-201 | Monthly cycle: Take off dialog, cycle select status line, Issuance badge and icon | Look and Feel | 3 | After group 9 | - |
| | 10 | OFA-B-202 | Empty Initial OFAs and Exceptions: only Add and expand in the toolbar | Look and Feel | 1 | After group 9 | - |
| | 10 | OFA-B-203 | Initial OFAs Accept dialog: board width, no hint under the date | Look and Feel | 1 | After group 9 | - |
| | 10 | OFA-B-204 | Renewal tracker cells and Exceptions date wrap at 1440 (re-run first) | Look and Feel | 1 | After group 9 | - |
| | 10 | OFA-B-207 | Quarantine list tab count colour, as drawn | Look and Feel | 1 | After group 9 | - |
| | X | OFA-F-155 | Proof of acceptance for each signer | Functional | 2 | On hold | COMPLIANCE-DASHBOARD-F-004 |
| | 11 | OFA-F-144 | Test data that stands apart from the warehouse | Functional | 3 | Group 11, after group 10 | - |

Done 2026-11-20: OFA-F-172, OFA-F-028 (f259a44e; OFA-B-007 and OFA-B-075 fixed with it).

## Portfolio Services 2

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 17 | OFA-F-170 | Adviser asks Back Office for a missing email or signer | Functional | ?? | After group 16 | - |
| >> | 17 | OFA-F-171 | Attachments on a correction request | Functional | ?? | After group 16 | - |
| >> | 17 | OFA-B-205 | Hold the signing-request email when the covering email wording has no approved version, instead of sending it blank | Functional | 3 | In group 17, after F-170 and F-171; before go-live | - |
| | 17 | OFA-B-179 | Expired report wrong when the State Manager email is off | Functional | 1 | Group 17 (group 18 first if 17 is in Integration) | - |
| | 17 | OFA-B-182 | Fee status column missing from show/hide, sort, export | Functional | 1 | Group 17 (group 18 first if 17 is in Integration) | - |
| | 18 | OFA-F-094 | Each history event says who can see it; the adviser side reads its own | Functional | 3 | After group 17 | - |
| | 18 | OFA-F-131 | Adviser side reads ended arrangements and the account's history | Functional | 2 | After group 17 | - |
| | 18 | OFA-F-132 | Adviser side records a request to Back Office | Functional | 3 | After group 17 | - |
| | X | OFA-F-158 | Swap placeholder emails for Luke's wording | Functional | 1 | Blocked by Luke's templates | - |
| | 18 | OFA-B-183 | A notice stuck as "send outcome unknown": label and release | Functional | 2 | Group 18, with F-094, F-131, F-132 | - |
| | X | OFA-B-184 | A timeout can send a signing request twice | Functional | 2 | Blocked by a lookup in AnnatureInterfaceWebAPI (no item yet) | - |
Done 2026-11-20: OFA-F-173, OFA-F-174 (merged a733211a)

## Compliance

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 11 | COMPLIANCE-DASHBOARD-B-095 | Quarantine: Extension and Last prompt start at 250px | Look and Feel | 1 | Building | - |
| >> | 11 | COMPLIANCE-DASHBOARD-B-111 | Load a new approved version: Check column sits about 60px left of the board | Look and Feel | 1 | Closed, no change: build matches the board at 1440 | - |
| >> | 11 | COMPLIANCE-DASHBOARD-B-112 | Platform full names in the 8 other places the board draws them | Look and Feel | 1 | Building | - |
| >> | 11 | COMPLIANCE-DASHBOARD-B-113 | Closed months notes tab: the Note column stays within 500px and the note wraps | Look and Feel | 1 | Building | - |
| | 12 | COMPLIANCE-DASHBOARD-F-037 | Faster .NET tests, part 2 | Functional | 2 | Group 12, after group 11; once OFA-F-144 is on main | OFA-F-144 |

Done 2026-11-20: closed with no change: COMPLIANCE-DASHBOARD-B-103 (build matches the board), B-102 (B-078 ruling: list cards fill; M25 has the board follow), B-105 (B-069 already draws it).; fixed COMPLIANCE-DASHBOARD-B-100, B-101, B-104, B-106, B-107, B-108 (merged 5d37d92c)

## Advisor

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 12 | ADVISOR-DASHBOARD-F-146 | Closures: send and record the closure confirmation (part 2) | Functional | ?? | Building (main merged) | - |
| >> | 12 | ADVISOR-DASHBOARD-F-142 | Send follow-up email to clients (part 2) | Functional | ?? | Building (main merged) | - |
| | 13 | ADVISOR-DASHBOARD-B-116 | Closures: add the Filter and Export buttons | Functional | 2 | After group 12 | - |
| | 13 | ADVISOR-DASHBOARD-B-117 | Closures default columns and the two column choosers, as drawn | Functional | 2 | After group 12 | - |
| | 13 | ADVISOR-DASHBOARD-B-118 | "Fees as at · Signing as at" line on Renewal tracker and Closures | Functional | 1 | After group 12 | - |
| | 13 | ADVISOR-DASHBOARD-B-119 | Product field in the Questionnaire and Initial OFAs filters | Functional | 1 | After group 12 | - |
| | 14 | ADVISOR-DASHBOARD-B-120 | Test scenarios for the board's empty, reading, failed and few-row states | Functional | 2 | After group 13 | - |
| | 14 | ADVISOR-DASHBOARD-B-121 | Termination wording dialog: the sentence before the wording | Look and Feel | 1 | After group 13 | - |
| | 14 | ADVISOR-DASHBOARD-B-122 | Required asterisks on Start-an-OFA and No OFA obligations | Look and Feel | 1 | After group 13 | - |
| | X | ADVISOR-DASHBOARD-F-049 | Back Office change request (part 2) | Functional | ?? | Waiting | OFA-F-170, OFA-F-171 |
| | X | ADVISOR-DASHBOARD-F-059 | S-Account page: the arrangement, OFA History tab, renewals (part 2) | Functional | ?? | Waiting | OFA-F-094 |
| | X | ADVISOR-DASHBOARD-F-141 | The arrangement record | Functional | 3 | Blocked by a Portfolio Services adviser documents read (no item yet) | - |
| | X | ADVISOR-DASHBOARD-F-143 | History events | Functional | 5 | Waiting | OFA-F-094 |
| | X | ADVISOR-DASHBOARD-F-144 | The OFA timeline | Functional | 6 | Blocked by the design, not drawn yet (Luke to show how Complii draws it) | - |
| | X | ADVISOR-DASHBOARD-F-117 | Adviser told on screen when a hold is extended | Functional | 2 | Waiting | OFA-F-131 |
| | X | ADVISOR-DASHBOARD-F-118 | Ask Back Office to add a signer or a missing email | Functional | 3 | Waiting | OFA-F-132 |
| | 14 | (no ID yet) | Use the shared status track | Look and Feel | 1 | Group 14 (SHELL-F-163 done); advisor raises the ID | - |

## Hub

0. Weekend round (20-11 to Monday, unsupervised): workers run their queues end to end and ask only the hub. Warehouse tables and procs that do not exist yet (GridPay and the like) are mocked; Muhammed creates the real ones on Monday. Designer prompts wait for Monday. Resume timer every 5 hours from 18:35; queue upkeep every 30 minutes.

1. Parity run: done 20-11 and routed for every component. Shell and landing-page findings are shell group 6.
2. Next merges: advisor group 12, compliance group 11, shell group 6, PS OFA-F-028 part 2, PS2 group 17. After each one, its own tests run (all-app Jest after shell changes).
3. Designer prompt (not yet sent; goes out after this queue round): W38, P92, P93, plus advisor B92 (F-146 confirmed line on CONFIRMED OFF rows) and B93 (F-142 follow-up resend dialog sentence), plus 6 parity questions: Overview "not fully signed" count slot; Adviser review answers bar placement; read-failure card on six PS screens; scope line for an adviser with several codes; Renewal tracker filter Reset and intro; Arrangements empty/loading/error card; shell: logo width (#12) and collapsed rail width (#21), where the boards disagree; shell states with no board (#20: Keep open on, Notifications with items, Search results and no matches, Search loading); landing empty and bus-unavailable states (#6); shell error and empty states (#4), search panel drawn two ways (#5), Plugin0 buttons and chips (#7); compliance review page "Read only." line and OFA Checklist note chip and Month arrow; PS Import screen in the sidebar has no board; compliance board: drop the empty grid after the filter-dialog fields so the gap above the buttons is 48px like advisor and PS.
4. End sweep: the browser, business-test and board checks skipped during the build, run once at the end.
5. Waiting on you: push main; the SyncFee grant script (drop the gMSA's EXECUTE on dbo.SyncFee, OFA-F-160); before go-live, approved wording for the renewal notice, covering email and both service-question lists (no placeholder covers them); check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj; the DART retest (another day); Luke's templates and Initial OFA envelope title; PS's 8 production settings.

Push: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin main`
