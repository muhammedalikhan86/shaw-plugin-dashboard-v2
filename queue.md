# Worker queue

What each worker does next, in order. Forward view only: what is next, never what is behind. Ordered from `docs/leftovers.md` and the PMBooks' open rows; finished work is recorded only in its PMBook.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 27-11-2026 16:51

## Hub

1. Next UAT deploy (UAT 7): the search-finds-pages change in all three plugins (PS OFA-F-243 merged fe376096; advisor ADVISOR-DASHBOARD-F-175 and compliance COMPLIANCE-DASHBOARD-F-056 building), plus whatever else the workers merge by then. Release when the last of the three merges. UAT 6 released 27-11 16:47 (test-login fix SHELL-B-215, 1280 x 720 floor SHELL-F-197, Field library B-166, B-165, local DB rename OFA-F-241, Annature off).
2a. Annature test (REL-029): S20338 sent 13:40 (204) but its mail never got past Mimecast. Second send S18577 (Kit Brack, Estimate, "Dear Kit") at 14:30, 204. Neither mail reached the UAT mailbox; Likely cause: sending from the testers mailbox to itself needs an IT setting change (Muhammed, 27-11). Parked; focus moves to releasing and testing the rest. Blocked until IT answers. After that: then the other Annature paths (reminder, remove signer, void, signed PDF). Annature is off on UAT (2ef53e64 reverts 7ffc9fd8); Portfolio Services redeployed to UAT 27-11, so Annature is off there. To resume the test: revert 2ef53e64, then a UAT deploy.
3. Each test-site release: before it, the business changelog (how it works, how it looks, switched off or deferred) as a PDF in v2 `changelogs/<date>-test-site-update.pdf` (and its page `.html`) with a release row in `uat-notes.json` `releases`.
4. Code freeze 2026-12-11. Work order: UAT bugs from the OFA Team, then what helps testers, then other functional items, then look and feel. No idle worker.
5. Advisor's two Power BI pages (Book of business, and the dashboard with the revenue cards) wait until the OFA work is complete (Muhammed, 2026-11-26).
6. Go-live gate (before prod): only the OFA database reads DataWarehouse and PowerBI (REL-022). Done 2026-11-26: the live OFA database on db1 (REL-021, REL-026), the e-signing service live (REL-014), the live web server set-up (REL-025).
7. With the stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database.
8c. Next designer round, rows owed: OFA-B-345 (next reference date on the record); O53 board fix (Move to cull list offers "Deceased estate, no OFA" only when DART marks the estate, per OFA-F-211 A3).
9. At the next switch to Muhammed's account: he uploads the two returned shell boards (NotificationPanel.dc.html, Main.dc.html) into his design project.
12. End sweep, last: after the designer's work is synced, built and hand-tested; every parity check.

## Compliance (pointer: >> F-056 search finds pages)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | COMPLIANCE-DASHBOARD-F-056 | Shell search finds pages: names, card titles and subtitles; existing data search removed | Functional | ?? | Building |


## Portfolio Services 2 (pointer: artboard account-number clash; OFA-F-240 merged 0ef84c17)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | (raising) | Move the 2 artboard account numbers that now clash with live (make test-data-check, 22 cells) | Functional | ?? | Go 27-11 |
| | X | OFA-F-032 | Attachment mover | Functional | - | Blocked: Muhammed's SharePoint live check, after go-live |


## Advisor (pointer: parked; F-174 with the F-240 cases merged dbe566ea)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | (new) | Shell search finds pages (OFA Dashboard's five): names, card titles and subtitles; existing data search removed | Functional | ?? | Muhammed 27-11 |
| | X | PM-114..PM-126 | 13 flaky business tests: find each cause, fix the wait or locator; shared-support causes go to Shell | Functional | ?? | Open, Could: not reproduced in A4 (evidence in the PMBook); revisit only if it recurs |
| | X | PM-115 | SqlReaderBaseCancellationTests: looped run under load to prove the missed-cancel cause | Functional | ?? | Open, Could: not reproduced in A4 (evidence in the PMBook); revisit only if it recurs |
| | X | F-171 (P86) | The DA (Dealer's Assistant) seat's portfolio shows the picked Adviser's clients (Tobias, not Hannah); the designer has drawn it (synced 1ebe768e) | Functional | 2 | Waits: Power BI pages hidden until after the OFA work |


## Portfolio Services (pointer: parked, OFA-F-243 merged fe376096)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | | X | OFA-B-345 | Business scenario for F-215, and the next reference date shown on the record | Functional | ?? | Waits on a design row in the next designer round |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | 5 | Blocked: Luke (a or b) |
| | X | OFA-F-209 part 2 | Live DART filing check (part 1, the signing-status reader, moved to ps2) | Functional | - | Blocked: DART retest after the 2nd UAT release |
| | X | OFA-F-062 | February-peak load test | Functional | 3 | Blocked: test site after the live deploy (Muhammed) |
| | 1 | - | Rename local databases to `ShawPortal-OngoingFeeArrangements-*` | Functional | ?? | Go after UAT 5 (Muhammed 27-11); hub sends the go on "released" |


## Shell (pointer: >> docs fixes, then expanded table floor)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | (new) | Docs: landing change log and handoff for B-008, old DB name in the ADRs, two dates | Doc | 1 | Hub governance check 27-11 |
| | 2 | SHELL-B-(new) | The expanded table view keeps 1280 x 720 and scrolls, like the page | Look | ?? | Muhammed 27-11 |
| | X | PM-059 | No rate limiting | Functional | - | Kept, not now (Muhammed) |
| | X | SHELL-F-176 | Move committed credentials to a secrets store | Functional | 3 | Held until after go-live (user, 2026-11-25) |
