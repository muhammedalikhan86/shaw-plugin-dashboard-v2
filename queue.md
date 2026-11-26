# Worker queue

What each worker does next, in order. Forward view only: what is next, never what is behind. Ordered from `docs/leftovers.md` and the PMBooks' open rows; finished work is recorded only in its PMBook.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 2026-11-26 17:36

## Hub

1. UAT redeploy tomorrow (Muhammed): Portfolio Services (ps2's P0 group), Compliance (B-160, B-162), advisor-dashboard (frozen columns), and whatever else merges by then. After it: update-uat-status.ps1, then update-uat-data.ps1 in v2, then commit and push.
2. Muhammed opens one renewal notice PDF on the test site (the Chrome check, REL-015).
2a. Designer: O57 (no placeholders on any board, 14a-14c questionnaire) and the answers to its questions; sync when the designer says done.
3. Each test-site release: before it, the business changelog (how it works, how it looks, switched off or deferred) as a PDF in v2 `changelogs/<date>-test-site-update.pdf` (and its page `.html`) with a release row in `uat-notes.json` `releases`.
4. Code freeze 2026-12-11. Work order: UAT bugs from the OFA Team, then what helps testers, then other functional items, then look and feel. No idle worker.
5. Advisor's two Power BI pages (Book of business, and the dashboard with the revenue cards) wait until the OFA work is complete (Muhammed, 2026-11-26).
6. Go-live gate (before prod): only the OFA database reads DataWarehouse and PowerBI (REL-022).
7. With the stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database.
8. Parity round 2: when Muhammed says. Parity page: https://claude.ai/artifact/HJAEsCkiTKGybrYJPW54AU
9. At the next switch to Muhammed's account: he uploads the two returned shell boards (NotificationPanel.dc.html, Main.dc.html) into his design project.
10. Owed: npm run test:business:coverage and make design-checks, in a machine window.
11. Skill feedback for Claude Improvements: DEP-9 overruled (secrets in tracked appsettings); no Now section in the queue, Hub first; status-page shape (2026-11-26); shaw-estate databases-and-querying: the DatabaseReader login cannot see availability-group membership or other server-level facts, so never report one from it.
12. End sweep, last: after the designer's work is synced, built and hand-tested; every parity check.

## Compliance (pointer: C4 flaky group now; B-160 + B-162 merge after OFA-B-337)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | C4 | OI-003 | Flaky "The list pages at 25" (arrangements.feature, shell target): find the cause, fix the wait or locator | Functional | 1 | Code side now; runs in its window |
| >> | C4 | OI-007 | Flaky under load (P27 export, A14, Closed months, B-068, B4, P38, F-025, "opens to its history"; SQL timeouts): causes and fixes; shared support causes go to Shell | Functional | 3 | In its window |
| >> | C4 | B-158, B-159 | Two more flaky tests found in the run: closed-month card height read once (poll it); cull list "show every column" needs the extra time Advisor got 2026-11-17 | Functional | 2 | In its window |
| | 1 | B-160, B-162 | No-version state removed (2c2fe473); OFA Checklist notes no longer overlap (c177c9e8). Committed; .NET and business runs at the hub's go | Functional | ?? | Merge after OFA-B-337 is on main |
| >> | C4 | B-161 | Release-build test `AttachmentOptionsValidatorTests.TheHost_FailsAtStartup_OnABadStore("appdata")` fails under load (UAT 2 step 6): cause and fix | Functional | 1 | Now, with C4 |


## Portfolio Services 2 (pointer: UAT P0 group, OFA-B-337 + OFA-B-339)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | OFA-B-337 | (with the empty-Subject fallback and the "Dear ," fix) Seed every wording's v1 from its starter (the 20 in `docs/stash/OFA Workflow/references/Wording/Starters/`), in every environment (migration), so no wording is ever without a version; approved by Compliance, loaded by the OFA tool, dated the day the seed runs; migration 0227 | Functional | ?? | Running; Compliance waits on it |
| >> | 1 | OFA-B-339 | Remove the "[Placeholder wording, awaiting approval]" marker from every email and text the PS API builds (code, appsettings, migration 0228); sweep test. Weekly report subjects: "Weekly Pending report", "Weekly Expired report" | Functional | ?? | Running; UAT P0 |
| | X | - | Parity backlog from O47: "Signers" label in sentence case; "Salutation" label floats on the outline before typing | Look and Feel | ?? | Rows in parity-backlog.md; for triage |
| | X | OFA-F-120 | Word converter: Shaw.Word uploads to an empty drive ID | Functional | - | Blocked: IT drive check after the 2nd UAT release |
| | X | OFA-F-032 | Attachment mover | Functional | - | Blocked: Muhammed's SharePoint live check, after go-live |


## Advisor (pointer: questionnaire frozen columns, then A4)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 0 | (Advisor raises) | OFA questionnaire: freeze S-Account and Account name too (Muhammed, 2026-11-26: frozen = Adviser code, S-Account and account name, Platform accounts, S-Account, Account name, Platform, Platform account number, Product) | Functional | 1 | Fast lane; for tomorrow's redeploy |
| | 0 | (Advisor raises) | Placeholder sweep check: grep the app and API for "supplied by", "to be confirmed", "Business to provide" and "Placeholder wording"; fix any left; close items held on the business's words | Functional | ?? | With the fast lane |
| | X | - | Parity backlog lines from the A2 board check: OFA questionnaire filter (board: ASF (excl. GST) from/to); S-Account ASF heading info icon after "past 12 months" | Look and Feel | ?? | For triage |
| | A4 | P68 (full suite 2026-11-26) | Sidebar count with the sidebar open: the app draws the number grey (rgb 64,64,64), the board white on maroon (the step's locator is fixed, 43f3b42e) | Look and Feel | ?? | After the release |
| | A4 | PM-114..PM-126 | 13 flaky business tests: find each cause, fix the wait or locator; shared-support causes go to Shell | Functional | ?? | Window after PS's flaky group |
| | A4 | F-144 | The OFA timeline: copy the OFA history section PS and Compliance already have (Luke, 2026-11-26); P97 already drawn | Functional | 6 | After the UAT release |
| | X | F-171 (P86) | The DA (Dealer's Assistant) seat's portfolio shows the picked Adviser's clients (Tobias, not Hannah); the designer has drawn it (synced 1ebe768e) | Functional | 2 | Waits: Power BI pages hidden until after the OFA work |


## Portfolio Services (pointer: group 70 now; email-wording files wait for OFA-B-339)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 70 | (PS raises) | OFA-B-313 paperclip on the Settings Notes: files on report notes (migration, procedure file list, trail link) | Functional | 2 | Split from P2 so the release is not held |
| >> | 70 | OFA-F-215 | Accepting an Adviser's answer updates the arrangement | Functional | 4 | After the release |
| >> | 70 | OFA-F-217 | Step code for the P81, P84, P85 scenarios (still @skip), with the loading state's entry in shared business-tests/support | Functional | 2 | After the release |
| >> | 70 | (PS raises) | Production `Chrome:Path` set to the path the test site uses (Chrome is on sic2iws1; REL-015), its comment and `ProductionSettingsTests` | Functional | 1 | After the release |
| | 71 | OFA-F-211 | Remove the emails Luke ruled out: the deceased-estate email to the Back Office (the tool only reads it from DART) and the State Manager's ended / terminated / culled emails (PRD and PMBook corrected at P2 finalize); design rows O53, O54 sent; update expiry-report.feature lines 11 and 25 (still expect the State Manager email) | Functional | 5 | After OFA-B-339 is on main (same email files); Adviser's termination email and the weekly Expired report stay |
| >> | 70 | - | Overview "Show every hidden column" times out (key-columns.steps.ts:81): P77 "key columns never cut" and P78 headings at 1280 and 1920 fail on the shell target, alone too (full suite 2026-11-26) | Functional | ?? | After the release |
| | 70 | - | 9 flaky tests (AttachmentRegistration, ExpiryRegister, exceptions-report x3, ofa-checklist x2, quarantine, QuarantineReadEndpoint): causes and fixes | Functional | ?? | Window after Advisor A3's check |
| | 70 | - | Handoff and test runbook: Compliance ("Renewal notice", B-157) and Advisor ("Signed renewal notice") now label OFAREN | Functional | 0 | After B-157 is on main |
| >> | 70 | OFA-B-271 | Send electronically takes the note's attachments (board draws the row; API takes no files) | Functional | 2 | Taken in (Muhammed, 2026-11-26); after the release |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | 5 | Blocked: Luke (a or b) |
| | X | OFA-F-209 | Real signing-status reader (renewals and Initial OFAs) + live DART filing check (split from F-138, which is Done) | Functional | 3 | Blocked: DART retest after the 2nd UAT release (likely 2026-11-27) |
| | X | OFA-F-062 | February-peak load test | Functional | 3 | Blocked: test site after the live deploy (Muhammed) |
| | X | - | Rename local databases to `ShawPortal-OngoingFeeArrangements-*` | Functional | - | Blocked: when Muhammed says |


## Shell (pointer: group 5 now)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 5 | SHELL-F-191 | Dev and test databases live in %USERPROFILE%\.databases, not the profile root: dev-up creates them there, the LocalDB sweep looks there, existing ones moved once with every stack down | Functional | 2 | After the release |
| | X | PM-059 | No rate limiting | Functional | - | Kept, not now (Muhammed) |
| | X | SHELL-F-176 | Move committed credentials to a secrets store | Functional | 3 | Held until after go-live (user, 2026-11-25) |
| >> | 5 | PLUGIN0-F-016 | Plugin0 gallery: screen text says Adviser | Look and Feel | 1 | After the release |
| >> | 5 | PLUGIN0-F-017 | Plugin0 gallery: sample State Manager is Marcus Ashcombe | Look and Feel | 1 | After the release |
| >> | 5 | PLUGIN0-B-004 | Plugin0 gallery: OFA Checklist drawn as a timeline, built as expansion panels | Look and Feel | 3 | After the release |
