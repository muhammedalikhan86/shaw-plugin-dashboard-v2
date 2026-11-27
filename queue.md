# Worker queue

What each worker does next, in order. Forward view only: what is next, never what is behind. Ordered from `docs/leftovers.md` and the PMBooks' open rows; finished work is recorded only in its PMBook.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 27-11-2026 16:00

## Hub

1. Next UAT deploy (UAT 5), Shell, Portfolio Services, Compliance Dashboard and Advisor Dashboard: the UAT developer bypass (SHELL-F-195 docs, COMPLIANCE-DASHBOARD-B-163 merged 38b9a693, PS item, ADVISOR-DASHBOARD-F-173) and the bigger notice PDF windows (Compliance, PS). Also the Act As test logins (shell Act As on UAT, advisor F-174, ps2 test logins). Before the Act As check on UAT, Muhammed runs `pwsh -File scripts\uat\uat-warehouse-load.ps1` from main (loads the OFA-F-240 test logins into UAT Misc). RELEASE GATE PASSED locally 27-11 (all 7 logins, screenshots docs/design/screenshots/actas-gate-*.png). RELEASE GATE (Muhammed 27-11): Act As proven before release: in-process UAT-environment tests in shell and advisor, then the hub drives a local stack and Acts As national.seat, vic.sm, nsw.sm, qld.sm, hannah.ilves.da, rowan.achebe.da and briony.glenarvon.da, checking each view, with screenshots. Command with -SkipTests -Y only after that passes and Muhammed has pushed main. Changelog first (item 3). After it: the Word check (Compliance wording preview as Muhammed), then OFA-F-120 Done; update-uat-status.ps1 then update-uat-data.ps1.
2a. Annature test (REL-029): S20338 sent 13:40 (204) but its mail never got past Mimecast. Second send S18577 (Kit Brack, Estimate, "Dear Kit") at 14:30, 204. Neither mail reached the UAT mailbox; Likely cause: sending from the testers mailbox to itself needs an IT setting change (Muhammed, 27-11). Parked; focus moves to releasing and testing the rest. Blocked until IT answers. After that: then the other Annature paths (reminder, remove signer, void, signed PDF). Annature is off on UAT (2ef53e64 reverts 7ffc9fd8); Portfolio Services redeployed to UAT 27-11, so Annature is off there. To resume the test: revert 2ef53e64, then a UAT deploy.
3. Each test-site release: before it, the business changelog (how it works, how it looks, switched off or deferred) as a PDF in v2 `changelogs/<date>-test-site-update.pdf` (and its page `.html`) with a release row in `uat-notes.json` `releases`.
4. Code freeze 2026-12-11. Work order: UAT bugs from the OFA Team, then what helps testers, then other functional items, then look and feel. No idle worker.
5. Advisor's two Power BI pages (Book of business, and the dashboard with the revenue cards) wait until the OFA work is complete (Muhammed, 2026-11-26).
6. Go-live gate (before prod): only the OFA database reads DataWarehouse and PowerBI (REL-022). Done 2026-11-26: the live OFA database on db1 (REL-021, REL-026), the e-signing service live (REL-014), the live web server set-up (REL-025).
7. With the stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database.
8. Overnight (Muhammed, 2026-11-26): workers churn their queues; ONE STACK, windows in order ps2, Compliance, PS, Advisor, Shell. When every queued item is done: full parity check (disparity-checker, all components). Do NOT fix its findings: build the decision artifact (each finding: take in or not, board or code wins, a comment box), and wait for Muhammed to hand it back. Old parity page: https://claude.ai/artifact/HJAEsCkiTKGybrYJPW54AU
8b. Morning window (make up, one stack, the hub starts and stops it): PS OFA-B-347's six on the compliance stack, then the stack moves to the PS checkout for group 70 (P81/P84/P85/P77/P78), then the full suite (with @review-O53, @review-O54, and @review-C131|C161|C163 x5 for SHELL-B-213), then Advisor's A4 stack checks and Shell's parity checks. make up was stopped overnight by the low-memory guard: Muhammed frees memory first.
8c. Next designer round, rows owed: OFA-B-345 (next reference date on the record); O53 board fix (Move to cull list offers "Deceased estate, no OFA" only when DART marks the estate, per OFA-F-211 A3).
9. At the next switch to Muhammed's account: he uploads the two returned shell boards (NotificationPanel.dc.html, Main.dc.html) into his design project.
10. Notice windows 90% tall with the title beside the PDF: compliance e21dd12e and ps OFA-B-381 e4b009c2 merged; @review-M40 and @review-O63 x2 on the shell passed (8/0), board 4/0. Compliance raises the "Dear Elio" salutation red as an X item after the release.
12. End sweep, last: after the designer's work is synced, built and hand-tested; every parity check.

## Compliance (pointer: >> Field library dialog)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | (new) | Field library: frozen header sits flush at the top (build bug), header frozen on the board too, dialog wider, Used by column twice as wide | Look | ?? | Muhammed's direct ask 27-11 |


## Portfolio Services 2 (pointer: artboard account-number clash; OFA-F-240 merged 0ef84c17)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | (raising) | Move the 2 artboard account numbers that now clash with live (make test-data-check, 22 cells) | Functional | ?? | Go 27-11 |
| | X | OFA-F-032 | Attachment mover | Functional | - | Blocked: Muhammed's SharePoint live check, after go-live |


## Advisor (pointer: parked; F-174 with the F-240 cases merged dbe566ea)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | X | PM-114..PM-126 | 13 flaky business tests: find each cause, fix the wait or locator; shared-support causes go to Shell | Functional | ?? | Open, Could: not reproduced in A4 (evidence in the PMBook); revisit only if it recurs |
| | X | PM-115 | SqlReaderBaseCancellationTests: looped run under load to prove the missed-cancel cause | Functional | ?? | Open, Could: not reproduced in A4 (evidence in the PMBook); revisit only if it recurs |
| | X | F-171 (P86) | The DA (Dealer's Assistant) seat's portfolio shows the picked Adviser's clients (Tobias, not Hannah); the designer has drawn it (synced 1ebe768e) | Functional | 2 | Waits: Power BI pages hidden until after the OFA work |


## Portfolio Services (pointer: idle, all left is blocked)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | | X | OFA-B-345 | Business scenario for F-215, and the next reference date shown on the record | Functional | ?? | Waits on a design row in the next designer round |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | 5 | Blocked: Luke (a or b) |
| | X | OFA-F-209 part 2 | Live DART filing check (part 1, the signing-status reader, moved to ps2) | Functional | - | Blocked: DART retest after the 2nd UAT release |
| | X | OFA-F-062 | February-peak load test | Functional | 3 | Blocked: test site after the live deploy (Muhammed) |
| | 1 | - | Rename local databases to `ShawPortal-OngoingFeeArrangements-*` | Functional | ?? | Go after UAT 5 (Muhammed 27-11); hub sends the go on "released" |


## Shell (pointer: >> minimum page width)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | SHELL-F-197 | Minimum page size 1280px wide (confirmed) by 720px high (confirmed): below it the page scrolls instead of squashing | Look | ?? | Muhammed's direct ask 27-11 |
| | X | PM-059 | No rate limiting | Functional | - | Kept, not now (Muhammed) |
| | X | SHELL-F-176 | Move committed credentials to a secrets store | Functional | 3 | Held until after go-live (user, 2026-11-25) |
