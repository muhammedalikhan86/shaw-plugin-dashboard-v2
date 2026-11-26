# Worker queue

What each worker does next, in order. Forward view only: what is next, never what is behind. Ordered from `docs/leftovers.md` and the PMBooks' open rows; finished work is recorded only in its PMBook.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 2026-11-26 19:07

## Hub

1. UAT redeploy tomorrow (Muhammed): Portfolio Services (ps2's P0 group), Compliance (B-160, B-162), advisor-dashboard (frozen columns), and whatever else merges by then. After it: update-uat-status.ps1, then update-uat-data.ps1 in v2, then commit and push.
2. Muhammed opens one renewal notice PDF on the test site (the Chrome check, REL-015).
2a. Designer: O57 (no placeholders on any board, 14a-14c questionnaire) and the answers to its questions; sync when the designer says done.
3. Each test-site release: before it, the business changelog (how it works, how it looks, switched off or deferred) as a PDF in v2 `changelogs/<date>-test-site-update.pdf` (and its page `.html`) with a release row in `uat-notes.json` `releases`.
4. Code freeze 2026-12-11. Work order: UAT bugs from the OFA Team, then what helps testers, then other functional items, then look and feel. No idle worker.
5. Advisor's two Power BI pages (Book of business, and the dashboard with the revenue cards) wait until the OFA work is complete (Muhammed, 2026-11-26).
6. Go-live gate (before prod): only the OFA database reads DataWarehouse and PowerBI (REL-022).
7. With the stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database.
8. Overnight (Muhammed, 2026-11-26): workers churn their queues; ONE STACK, windows in order ps2, Compliance, PS, Advisor, Shell. When every queued item is done: full parity check (disparity-checker, all components). Do NOT fix its findings: build the decision artifact (each finding: take in or not, board or code wins, a comment box), and wait for Muhammed to hand it back. Old parity page: https://claude.ai/artifact/HJAEsCkiTKGybrYJPW54AU
8a. Designer done 2026-11-26 evening: O57 board run done (756 passed, 7 failed: 4 expected until B-160 merges, 3 being checked); sync commits next. UAT redeploy tomorrow (Muhammed).
8b. Tonight the low-memory guard stops make up: Compliance and PS wait for Muhammed (restart compliance with CLAUDE_CODE_DISABLE_BG_SHELL_PRESSURE_REAP=1, or run make up himself). dotnet-test windows go on: Advisor A4 now, then Shell.
9. At the next switch to Muhammed's account: he uploads the two returned shell boards (NotificationPanel.dc.html, Main.dc.html) into his design project.
10. Owed: npm run test:business:coverage and make design-checks, in a machine window.
11. Skill feedback for Claude Improvements: DEP-9 overruled (secrets in tracked appsettings); no Now section in the queue, Hub first; status-page shape (2026-11-26); shaw-estate databases-and-querying: the DatabaseReader login cannot see availability-group membership or other server-level facts, so never report one from it.
12. End sweep, last: after the designer's work is synced, built and hand-tested; every parity check.

## Compliance (pointer: parked at 65c22a1b; make up waits on Muhammed, the low-memory guard stops it)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | C4 | OI-003 | Flaky "The list pages at 25" (arrangements.feature, shell target): find the cause, fix the wait or locator | Functional | 1 | Code side now; runs in its window |
| >> | C4 | OI-007 | Flaky under load (P27 export, A14, Closed months, B-068, B4, P38, F-025, "opens to its history"; SQL timeouts): causes and fixes; shared support causes go to Shell | Functional | 3 | In its window |
| >> | C4 | B-158, B-159 | Two more flaky tests found in the run: closed-month card height read once (poll it); cull list "show every column" needs the extra time Advisor got 2026-11-17 | Functional | 2 | In its window |
| | 1 | B-160, B-162 | No-version state removed (2c2fe473); OFA Checklist notes no longer overlap (c177c9e8). Committed; .NET and business runs at the hub's go | Functional | ?? | OFA-B-337 is on main; runs when make up can start |
| >> | C4 | B-161 | Release-build test `AttachmentOptionsValidatorTests.TheHost_FailsAtStartup_OnABadStore("appdata")` fails under load (UAT 2 step 6): cause and fix | Functional | 1 | Now, with C4 |


## Portfolio Services 2 (pointer: group 3, OFA-F-211 + OFA-F-209 part 1)

| # | Grp | ID | Item | Category | Size | Status |
| >> | 3 | OFA-F-211 | Remove the emails Luke ruled out: deceased-estate email to the Back Office, the State Manager's ended / terminated / culled emails; expiry-report.feature lines 11 and 25; Adviser's termination email and the weekly Expired report stay (moved from PS) | Functional | 5 | Code + Jest now; .NET at its window |
| >> | 3 | OFA-F-209 part 1 | Real warehouse signing-status reader replaces the stub, for renewals and Initial OFAs (moved from PS) | Functional | 3 | Code + Jest now; .NET at its window |
|---|---|---|---|---|---|---|
| | X | OFA-F-120 | Word converter: Shaw.Word uploads to an empty drive ID | Functional | - | Blocked: IT drive check after the 2nd UAT release |
| | X | OFA-F-032 | Attachment mover | Functional | - | Blocked: Muhammed's SharePoint live check, after go-live |


## Advisor (pointer: group A6, adopt SHELL-F-192)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | A6 | (raises) | Adopt SHELL-F-192: LocalDB test databases via Shell.TestKit.LocalDbDatabaseFiles | Functional | ?? | Code now; dotnet test in a window |
| | A4 | P68 (full suite 2026-11-26) | Sidebar count with the sidebar open: the app draws the number grey (rgb 64,64,64), the board white on maroon (the step's locator is fixed, 43f3b42e) | Look and Feel | ?? | Next make-up window (built-app check) |
| | A4 | PM-114..PM-126 | 13 flaky business tests: find each cause, fix the wait or locator; shared-support causes go to Shell | Functional | ?? | Next make-up window, with B-161's business run and the H10 scenarios on the built app |
| | A4 | PM-115 | SqlReaderBaseCancellationTests: looped run under load to prove the missed-cancel cause | Functional | ?? | Next make-up window |
| | X | F-171 (P86) | The DA (Dealer's Assistant) seat's portfolio shows the picked Adviser's clients (Tobias, not Hannah); the designer has drawn it (synced 1ebe768e) | Functional | 2 | Waits: Power BI pages hidden until after the OFA work |


## Portfolio Services (pointer: group 70 at b1ed3006 waits on make up; group 71 flake pass now)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | 72 | (raises) | Adopt SHELL-F-192: LocalDB test databases via Shell.TestKit.LocalDbDatabaseFiles (adds a TestKit reference to the tests and the TestData tool) | Functional | ?? | Code now; dotnet test in a window |
| >> | 70 | (PS raises) | OFA-B-313 paperclip on the Settings Notes: files on report notes (migration, procedure file list, trail link) | Functional | 2 | Split from P2 so the release is not held |
| >> | 70 | OFA-F-215 | Accepting an Adviser's answer updates the arrangement | Functional | 4 | After the release |
| >> | 70 | OFA-F-217 | Step code for the P81, P84, P85 scenarios (still @skip), with the loading state's entry in shared business-tests/support | Functional | 2 | After the release |
| >> | 70 | (PS raises) | Production `Chrome:Path` set to the path the test site uses (Chrome is on sic2iws1; REL-015), its comment and `ProductionSettingsTests` | Functional | 1 | After the release |
| >> | 70 | - | Overview "Show every hidden column" times out (key-columns.steps.ts:81): P77 "key columns never cut" and P78 headings at 1280 and 1920 fail on the shell target, alone too (full suite 2026-11-26) | Functional | ?? | After the release |
| >> | 71 | - | 9 flaky tests (AttachmentRegistration, ExpiryRegister, exceptions-report x3, ofa-checklist x2, quarantine, QuarantineReadEndpoint): causes and fixes | Functional | ?? | Code-only pass now; re-runs in the morning window with group 70's business run |
| | 70 | - | Handoff and test runbook: Compliance ("Renewal notice", B-157) and Advisor ("Signed renewal notice") now label OFAREN | Functional | 0 | After B-157 is on main |
| >> | 70 | OFA-B-271 | Send electronically takes the note's attachments, kept on the record, not sent to the signer (migration 0232) | Functional | 2 | Taken in (Muhammed, 2026-11-26); after the release |
| | X | OFA-B-345 | Business scenario for F-215, and the next reference date shown on the record | Functional | ?? | Waits on a design row in the next designer round |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | 5 | Blocked: Luke (a or b) |
| | X | OFA-F-209 part 2 | Live DART filing check (part 1, the signing-status reader, moved to ps2) | Functional | - | Blocked: DART retest after the 2nd UAT release |
| | X | OFA-F-062 | February-peak load test | Functional | 3 | Blocked: test site after the live deploy (Muhammed) |
| | X | - | Rename local databases to `ShawPortal-OngoingFeeArrangements-*` | Functional | - | Blocked: when Muhammed says |


## Shell (pointer: idle; its window checks wait for the morning)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | 6 | - | Board Parity for PLUGIN0-B-004, SHELL-B-210, SHELL-B-212; move-localdb-files.ps1 dry run then move, every stack down | Functional | ?? | Next stack window; the move in Muhammed's window |
| | X | PM-059 | No rate limiting | Functional | - | Kept, not now (Muhammed) |
| | X | SHELL-F-176 | Move committed credentials to a secrets store | Functional | 3 | Held until after go-live (user, 2026-11-25) |
