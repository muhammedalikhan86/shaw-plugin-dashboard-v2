# Worker queue

What each worker does next, in order. Forward view only: what is next, never what is behind. Ordered from `docs/leftovers.md` and the PMBooks' open rows; finished work is recorded only in its PMBook.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 27-11-2026 14:08

## Hub

1. UAT redeploy today, 2026-11-27 (Muhammed), after the morning window: Portfolio Services hold lifted: PS groups 70-72 merged (a2b449d0) (ps2's P0 group, OFA-F-211, OFA-F-209 part 1), Compliance (B-158 to B-162, merged 470dbac4), advisor-dashboard (F-144 timeline, A5), and PS groups 70-72 if their business run passes. After it: update-uat-status.ps1, then update-uat-data.ps1 in v2, then commit and push.
2a. Annature and Chrome test (REL-029): Initial OFA S20338 SENT to Annature on UAT at 13:40 (204) after the loopback fix and the gMSA_Intranet allow-list. Annature allow-list change pushed (AnnatureInterfaceWebAPI e704501). UAT mailbox: a misconfigured Mimecast block held the mail; IT is clearing it. Next: Muhammed sees the held mail arrive and checks the Annature site; then the other Annature paths (reminder, remove signer, void, signed PDF). Closing step when Muhammed ends the test: revert 7ffc9fd8, then a UAT deploy.
2b. Next UAT deploy (UAT 4), ready on main 13275c7a (after the push): Portfolio Services and Compliance Dashboard, with ps2 group 6 (OFA-F-238 preview salutation), ps2 group 5 (B-369, B-371, B-373, B-375) and the UAT Word converter on (d8fe2aa2). Changelog ready (v2 123ff35, UAT 4). After it: one ShawWord notice on UAT, then OFA-F-120 Done; update-uat-status.ps1 then update-uat-data.ps1.
2. Muhammed opens one renewal notice PDF on the test site (the Chrome check, REL-015).
3. Each test-site release: before it, the business changelog (how it works, how it looks, switched off or deferred) as a PDF in v2 `changelogs/<date>-test-site-update.pdf` (and its page `.html`) with a release row in `uat-notes.json` `releases`.
4. Code freeze 2026-12-11. Work order: UAT bugs from the OFA Team, then what helps testers, then other functional items, then look and feel. No idle worker.
5. Advisor's two Power BI pages (Book of business, and the dashboard with the revenue cards) wait until the OFA work is complete (Muhammed, 2026-11-26).
6. Go-live gate (before prod): only the OFA database reads DataWarehouse and PowerBI (REL-022). Done 2026-11-26: the live OFA database on db1 (REL-021, REL-026), the e-signing service live (REL-014), the live web server set-up (REL-025).
7. With the stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database.
8. Overnight (Muhammed, 2026-11-26): workers churn their queues; ONE STACK, windows in order ps2, Compliance, PS, Advisor, Shell. When every queued item is done: full parity check (disparity-checker, all components). Do NOT fix its findings: build the decision artifact (each finding: take in or not, board or code wins, a comment box), and wait for Muhammed to hand it back. Old parity page: https://claude.ai/artifact/HJAEsCkiTKGybrYJPW54AU
8b. Morning window (make up, one stack, the hub starts and stops it): PS OFA-B-347's six on the compliance stack, then the stack moves to the PS checkout for group 70 (P81/P84/P85/P77/P78), then the full suite (with @review-O53, @review-O54, and @review-C131|C161|C163 x5 for SHELL-B-213), then Advisor's A4 stack checks and Shell's parity checks. make up was stopped overnight by the low-memory guard: Muhammed frees memory first.
8c. Next designer round, rows owed: OFA-B-345 (next reference date on the record); O53 board fix (Move to cull list offers "Deceased estate, no OFA" only when DART marks the estate, per OFA-F-211 A3).
9. At the next switch to Muhammed's account: he uploads the two returned shell boards (NotificationPanel.dc.html, Main.dc.html) into his design project.
10. Owed: npm run test:business:coverage and make design-checks, in a machine window.
12. End sweep, last: after the designer's work is synced, built and hand-tested; every parity check.

## Compliance (pointer: idle, queue empty; W46 done in the 27-11 round)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|


## Portfolio Services 2 (pointer: parked b2dfc738, group 6 merged 13275c7a; rest of the queue blocked)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | X | OFA-F-032 | Attachment mover | Functional | - | Blocked: Muhammed's SharePoint live check, after go-live |


## Advisor (pointer: parked 1759b4e1; F-171 held by Muhammed, nothing else queued)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | X | PM-114..PM-126 | 13 flaky business tests: find each cause, fix the wait or locator; shared-support causes go to Shell | Functional | ?? | Open, Could: not reproduced in A4 (evidence in the PMBook); revisit only if it recurs |
| | X | PM-115 | SqlReaderBaseCancellationTests: looped run under load to prove the missed-cancel cause | Functional | ?? | Open, Could: not reproduced in A4 (evidence in the PMBook); revisit only if it recurs |
| | X | F-171 (P86) | The DA (Dealer's Assistant) seat's portfolio shows the picked Adviser's clients (Tobias, not Hannah); the designer has drawn it (synced 1ebe768e) | Functional | 2 | Waits: Power BI pages hidden until after the OFA work |


## Portfolio Services (pointer: parked 8765b6c3, group 77 merged d8fe2aa2; rest of the queue blocked)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | | X | OFA-B-345 | Business scenario for F-215, and the next reference date shown on the record | Functional | ?? | Waits on a design row in the next designer round |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | 5 | Blocked: Luke (a or b) |
| | X | OFA-F-209 part 2 | Live DART filing check (part 1, the signing-status reader, moved to ps2) | Functional | - | Blocked: DART retest after the 2nd UAT release |
| | X | OFA-F-062 | February-peak load test | Functional | 3 | Blocked: test site after the live deploy (Muhammed) |
| | X | - | Rename local databases to `ShawPortal-OngoingFeeArrangements-*` | Functional | - | Blocked: when Muhammed says |


## Shell (pointer: parked afa9189a, localdb move done)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | X | PM-059 | No rate limiting | Functional | - | Kept, not now (Muhammed) |
| | X | SHELL-F-176 | Move committed credentials to a secrets store | Functional | 3 | Held until after go-live (user, 2026-11-25) |
