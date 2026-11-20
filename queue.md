# Worker queue

What each worker does next, in order. The hub keeps it current.
**>>** = being worked on now. Grp = group, lowest runs first; X = not grouped yet. Category: Functional, Look and Feel, or Undetermined.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-20 15:25

## Shell

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 5 | SHELL-F-169 | Tables: a starting width per column; Reset goes back to it | Look and Feel | 2 | Building | - |
| >> | 5 | SHELL-B-136 | Deploy script leaves out each API's .dll.config | Functional | ?? | Building | - |
| >> | 5 | SHELL-F-166 | Tables: a filter dialog can carry its own title | Look and Feel | ?? | Building | - |
| >> | 5 | SHELL-F-167 | Tables: a status track with no title, inside a page | Look and Feel | ?? | Building | - |
| >> | 5 | SHELL-B-135 | Tables: frozen columns see-through when scrolling sideways | Look and Feel | ?? | Building | - |
| >> | 5 | SHELL-F-168 | Tables: the page can fold or unfold the status track | Functional | ?? | Building | - |
| >> | 5 | SHELL-B-137 | Tables: header text grey, the board draws black | Look and Feel | 1 | Building | - |
| >> | 5 | SHELL-B-138 | Filter dialog: a drop-down left on "All" looks greyed out | Look and Feel | 1 | Building | - |
| | 5 | (parity) | Finish the cut-short parity check: shell leftovers and landing-page | Undetermined | ?? | Done 20-11; findings intake after group 5 | - |
| >> | 5 | SHELL-B-144 | Layout check: Expired report route, stale KNOWN entries struck | Functional | 1 | Building | - |

## Portfolio Services

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | F-028 | OFA-F-028 | Go-live prep: release packages for each part | Functional | 10 | Parts 4, 4b merged ; part 2 building, then 1, 3 | - |
| | - | OFA-F-138 | File the signed renewal in DART | Functional | 3 | Blocked by your DART retest | - |
| | 9 | OFA-F-169 | Cull notes: attach a file | Functional | 2 | After OFA-F-028; first in group 9 with OFA-B-195 | - |
| | 9 | OFA-B-195 | Settings: the page scrolls sideways by 11px | Functional | 1 | After OFA-F-028; PS2 group 16 merged | - |
| | 9 | OFA-B-196 | Settings: the four cards in two columns, as drawn | Look and Feel | 2 | After go-live | - |
| | 9 | OFA-B-197 | Settings dialogs: board width, Add attachments row, change request and Preview as drawn | Look and Feel | 3 | After go-live | - |
| | 9 | OFA-B-198 | Overview: the counts move into the board's cards | Look and Feel | 2 | After go-live | - |
| | 9 | OFA-B-199 | Overview: "Entity type" heading on one line | Look and Feel | 1 | After go-live | - |
| | 9 | OFA-B-200 | Row and Actions menus at board widths; Exceptions menu in board order | Look and Feel | 2 | After go-live | - |
| | 9 | OFA-B-201 | Monthly cycle: Take off dialog, cycle select status line, Issuance badge and icon | Look and Feel | 3 | After go-live | - |
| | 9 | OFA-B-202 | Empty Initial OFAs and Exceptions: only Add and expand in the toolbar | Look and Feel | 1 | After go-live | - |
| | 9 | OFA-B-203 | Initial OFAs Accept dialog: board width, no hint under the date | Look and Feel | 1 | After go-live | - |
| | 9 | OFA-B-204 | Renewal tracker cells and Exceptions date wrap at 1440 (re-run first) | Look and Feel | 1 | After go-live | - |
| | X | OFA-F-163 | Overview: the two tracks fold with the rest | Functional | ?? | Waiting | SHELL-F-168 |
| | X | OFA-F-160 | Remove the manual fee sync | Functional | 2 | After go-live | - |
| | X | OFA-F-155 | Proof of acceptance for each signer | Functional | 2 | On hold | COMPLIANCE-DASHBOARD-F-004 |
| | X | OFA-F-144 | Test data that stands apart from the warehouse | Functional | 3 | After go-live | - |

Done 2026-11-20: OFA-F-172 (merged with OFA-F-028 parts 4 and 4b).

## Portfolio Services 2

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| >> | 17 | OFA-F-170 | Adviser asks Back Office for a missing email or signer | Functional | ?? | After group 16 | - |
| >> | 17 | OFA-F-171 | Attachments on a correction request | Functional | ?? | After group 16 | - |
| >> | 17 | OFA-B-205 | Hold the signing-request email when the covering email wording has no approved version, instead of sending it blank | Functional | 3 | In group 17, after F-170 and F-171; before go-live | - |
| | 18 | OFA-F-094 | Each history event says who can see it; the adviser side reads its own | Functional | 3 | After group 17 | - |
| | 18 | OFA-F-131 | Adviser side reads ended arrangements and the account's history | Functional | 2 | After group 17 | - |
| | 18 | OFA-F-132 | Adviser side records a request to Back Office | Functional | 3 | After group 17 | - |
| | X | OFA-F-158 | Swap placeholder emails for Luke's wording | Functional | 1 | Blocked by Luke's templates | - |
| | X | OFA-B-183 | A notice stuck as "send outcome unknown": label and release | Functional | 2 | After go-live | - |
| | X | OFA-B-184 | A timeout can send a signing request twice | Functional | 2 | Blocked by a lookup in AnnatureInterfaceWebAPI (no item yet) | - |
| | X | OFA-B-182 | Fee status column missing from show/hide, sort, export | Functional | 1 | After go-live | - |
| | X | OFA-B-179 | Expired report wrong when the State Manager email is off | Functional | 1 | After go-live | - |
Done 2026-11-20: OFA-F-173, OFA-F-174 (merged a733211a)

## Compliance

| # | Grp | ID | Item | Category | Size | Status | Depends on |
|---|---|---|---|---|---|---|---|
| | 11 | COMPLIANCE-DASHBOARD-B-095 | Quarantine: Extension and Last prompt start at 250px | Look and Feel | 1 | After SHELL-F-169 (group 10 merged) | SHELL-F-169 |
| | 11 | COMPLIANCE-DASHBOARD-B-111 | Load a new approved version: Check column sits about 60px left of the board | Look and Feel | 1 | After SHELL-F-169 (group 10 merged) | SHELL-F-169 |
| | 11 | COMPLIANCE-DASHBOARD-B-112 | Platform full names in the 8 other places the board draws them | Look and Feel | 1 | After SHELL-F-169 (group 10 merged) | SHELL-F-169 |
| | X | COMPLIANCE-DASHBOARD-F-037 | Faster .NET tests, part 2 | Functional | 2 | After go-live | OFA-F-144 |

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
| | X | (no ID yet) | Use the shared status track | Look and Feel | 1 | After go-live | SHELL-F-163 |

## Hub

1. Parity run: done 20-11. Compliance, PS and advisor routed; shell and landing-page intake after shell group 5.
2. Weekend queue: built with you once the parity run ends.
3. Designer prompt (not yet sent; goes out after this queue round): W38, P92, P93, plus advisor B92 (F-146 confirmed line on CONFIRMED OFF rows), plus 6 parity questions: Overview "not fully signed" count slot; Adviser review answers bar placement; read-failure card on six PS screens; scope line for an adviser with several codes; Renewal tracker filter Reset and intro; Arrangements empty/loading/error card; compliance board: drop the empty grid after the filter-dialog fields so the gap above the buttons is 48px like advisor and PS.
4. End sweep: the browser, business-test and board checks skipped during the build, run once at the end.
5. Waiting on you: push main; check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj; the DART retest; Luke's templates and Initial OFA envelope title.

Push: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin main`
