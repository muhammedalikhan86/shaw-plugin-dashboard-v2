# Worker queue

What each worker does next, in order. The hub keeps it current.
**>>** = being worked on now. Grp = group, lowest runs first; X = not grouped yet.
**Depends on** = items in a worker's queue that must land first. "Blocked by" in Status = what stops it starting: a person, a missing design, or an item no worker has queued.

Updated: 2026-11-20 16:20

## Shell

| # | Grp | ID | Item | Size | Status | Depends on |
|---|---|---|---|---|---|---|
| >> | - | (parity run) | Compare every component's screens with the design boards | - | PS done; shell and landing now | - |
| | 5 | SHELL-F-169 | Tables: a starting width per column; Reset goes back to it | 2 | After the parity run | - |
| | 5 | SHELL-B-136 | Deploy script leaves out each API's .dll.config | ?? | After the parity run | - |
| | 5 | SHELL-F-166 | Tables: a filter dialog can carry its own title | ?? | After the parity run | - |
| | 5 | SHELL-F-167 | Tables: a status track with no title, inside a page | ?? | After the parity run | - |
| | 5 | SHELL-B-135 | Tables: frozen columns see-through when scrolling sideways | ?? | After the parity run | - |
| | 5 | SHELL-F-168 | Tables: the page can fold or unfold the status track | ?? | After the parity run | - |
| | 5 | SHELL-B-137 | Tables: header text grey, the board draws black | 1 | After the parity run | - |
| | 5 | SHELL-B-138 | Filter dialog: a drop-down left on "All" looks greyed out | 1 | After the parity run | - |

## Portfolio Services

| # | Grp | ID | Item | Size | Status | Depends on |
|---|---|---|---|---|---|---|
| >> | F-028 | OFA-F-028 | Go-live prep: release packages for each part | 10 | Parts 1-4 done; part 4b building | - |
| | F-028 | OFA-F-172 | First weekly Expired report goes only to the OFA Team mailbox | ?? | With OFA-F-028 | - |
| | - | OFA-F-138 | File the signed renewal in DART | 3 | Blocked by your DART retest | - |
| | X | OFA-F-169 | Cull notes: attach a file | 2 | Next | - |
| | X | OFA-F-163 | Overview: the two tracks fold with the rest | ?? | Waiting | SHELL-F-168 |
| | X | OFA-F-160 | Remove the manual fee sync | 2 | After go-live | - |
| | X | OFA-F-155 | Proof of acceptance for each signer | 2 | On hold | COMPLIANCE-DASHBOARD-F-004 |
| | X | OFA-F-144 | Test data that stands apart from the warehouse | 3 | After go-live | - |

## Portfolio Services 2

| # | Grp | ID | Item | Size | Status | Depends on |
|---|---|---|---|---|---|---|
| >> | 16 | OFA-F-173 | Outbox: hold every email until the OFA Team approves or bins it; a switch turns the hold off | 5 | Building; release 1 | - |
| >> | 16 | OFA-F-174 | Outbox: signing envelopes wait for approval too | 5 | Building; release 1 | OFA-F-173 |
| | 17 | OFA-F-170 | Adviser asks Back Office for a missing email or signer | ?? | After group 16 | - |
| | 17 | OFA-F-171 | Attachments on a correction request | ?? | After group 16 | - |
| | 18 | OFA-F-094 | Each history event says who can see it; the adviser side reads its own | 3 | After group 17; release 2 | - |
| | 18 | OFA-F-131 | Adviser side reads ended arrangements and the account's history | 2 | After group 17; release 2 | - |
| | 18 | OFA-F-132 | Adviser side records a request to Back Office | 3 | After group 17; release 2 | - |
| | X | OFA-F-158 | Swap placeholder emails for Luke's wording | 1 | Blocked by Luke's templates | - |
| | X | OFA-B-183 | A notice stuck as "send outcome unknown": label and release | 2 | After go-live | - |
| | X | OFA-B-184 | A timeout can send a signing request twice | 2 | Blocked by a lookup in AnnatureInterfaceWebAPI (no item yet) | - |
| | X | OFA-B-182 | Fee status column missing from show/hide, sort, export | 1 | After go-live | - |
| | X | OFA-B-179 | Expired report wrong when the State Manager email is off | 1 | After go-live | - |

## Compliance

| # | Grp | ID | Item | Size | Status | Depends on |
|---|---|---|---|---|---|---|
| >> | 10 | COMPLIANCE-DASHBOARD-B-100 | OFA Checklist: loading state shows no card or Month field | 1 | Next | - |
| >> | 10 | COMPLIANCE-DASHBOARD-B-101 | Load a new approved version: Check column and calendar button off by a few px | 1 | Next | - |
| >> | 10 | COMPLIANCE-DASHBOARD-B-102 | List screens: the could-not-be-read card stretches to the window foot | 1 | Next | - |
| >> | 10 | COMPLIANCE-DASHBOARD-B-103 | OFA Checklist rows: note-count chip and Month arrow differ from the board | 1 | Next; may become a design question | - |
| >> | 10 | COMPLIANCE-DASHBOARD-B-104 | Closed months: tab strip, card position, tab label weight and colour, Removed chip, loading dim, picker label | 2 | Next | - |
| >> | 10 | COMPLIANCE-DASHBOARD-B-105 | Quarantine: the "Fees as at · Signing as at" header block | 1 | Next | - |
| >> | 10 | COMPLIANCE-DASHBOARD-B-106 | Closed months Quarantine: a long move reason widens the deadline cell | 1 | Next | - |
| >> | 10 | COMPLIANCE-DASHBOARD-B-107 | Wording: "brought in at go-live" under v1's Loaded cell | 1 | Next | - |
| >> | 10 | COMPLIANCE-DASHBOARD-B-108 | Platform shown by full name ("Shaw Managed Accounts", not "SMA") | 1 | Next | - |
| | X | COMPLIANCE-DASHBOARD-B-095 | Quarantine: Extension and Last prompt start at 250px | 1 | Waiting | SHELL-F-169 |
| | X | COMPLIANCE-DASHBOARD-F-037 | Faster .NET tests, part 2 | 2 | After go-live | OFA-F-144 |

## Advisor (release 2)

| # | Grp | ID | Item | Size | Status | Depends on |
|---|---|---|---|---|---|---|
| >> | 11 | ADVISOR-DASHBOARD-F-057 | Search finds S-Accounts and arrangements | ?? | Built; in review | - |
| | 11 | ADVISOR-DASHBOARD-F-149 | Landing Page: Gross Revenue and Funds Under Advice cards removed | 1 | Code merged; tidy-up in group 11 | - |
| | 11 | ADVISOR-DASHBOARD-B-115 | Master list reads the real ASF figures (test red) | 1 | Next | - |
| | 11 | ADVISOR-DASHBOARD-F-150 | OFA Questionnaire: five columns hidden by default | ?? | Next | - |
| | 11 | ADVISOR-DASHBOARD-F-145 | Hide "Fee turned off" once it is recorded | 1 | Next | - |
| | 11 | ADVISOR-DASHBOARD-F-146 | Closures: send and record the closure confirmation | 3 | Next | - |
| | 11 | ADVISOR-DASHBOARD-F-142 | Send follow-up email to clients | 4 | Next | - |
| | 11 | ADVISOR-DASHBOARD-F-049 | Back Office change request | 3 | Next | OFA-F-170, OFA-F-171 |
| | 11 | ADVISOR-DASHBOARD-F-059 | S-Account page: the arrangement, OFA History tab, renewals | 2 | Next | - |
| | X | ADVISOR-DASHBOARD-F-141 | The arrangement record | 3 | Blocked by a Portfolio Services adviser documents read (no item yet) | - |
| | X | ADVISOR-DASHBOARD-F-143 | History events | 5 | Waiting | OFA-F-094 |
| | X | ADVISOR-DASHBOARD-F-144 | The OFA timeline | 6 | Blocked by the design, not drawn yet (Luke to show how Complii draws it) | - |
| | X | ADVISOR-DASHBOARD-F-117 | Adviser told on screen when a hold is extended | 2 | Waiting | OFA-F-131 |
| | X | ADVISOR-DASHBOARD-F-118 | Ask Back Office to add a signer or a missing email | 3 | Waiting | OFA-F-132 |
| | X | (no ID yet) | Use the shared status track | 1 | After go-live | SHELL-F-163 |

## Hub

1. Parity run findings: routed to each worker once the run ends.
2. Weekend queue: built with you once the parity run ends.
3. Designer prompt (not yet sent; goes out after this queue round): W38 (Wording: CAT 1 and CAT 2 rows), P92 (Cull list Status column), P93 (Compliance review "Read only."). More rows join from the parity findings.
4. End sweep: the browser, business-test and board checks skipped during the build, run once at the end.
5. Waiting on you: push main; check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj; the DART retest; Luke's templates and Initial OFA envelope title.

Push: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin main`
