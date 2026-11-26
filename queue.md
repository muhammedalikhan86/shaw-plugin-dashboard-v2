# Worker queue

What each worker does next, in order. Forward view only: what is next, never what is behind. Ordered from `docs/leftovers.md` and the PMBooks' open rows; finished work is recorded only in its PMBook.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 2026-11-26 15:28

## Hub

1. UAT 2 release at 16:15 today (Luke asked for the delay); Muhammed deploys. After it: update-uat-status.ps1, then update-uat-data.ps1 in v2, then commit and push.
2. After the UAT 2 deploy: Muhammed opens one renewal notice PDF on the test site (the Chrome check, REL-015).
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

## Compliance (pointer: waiting; F-055 merged; C4 proving runs after the release)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | C4 | OI-003 | Flaky "The list pages at 25" (arrangements.feature, shell target): find the cause, fix the wait or locator | Functional | 1 | Code side now; runs in its window |
| | C4 | OI-007 | Flaky under load (P27 export, A14, Closed months, B-068, B4, P38, F-025, "opens to its history"; SQL timeouts): causes and fixes; shared support causes go to Shell | Functional | 3 | In its window |
| | C4 | B-158, B-159 | Two more flaky tests found in the run: closed-month card height read once (poll it); cull list "show every column" needs the extra time Advisor got 2026-11-17 | Functional | 2 | In its window |
| | X | B-156 (W44) | No-version slot line and subtitle: the board has placeholder words only | Look and Feel | 1 | Held: the business's words (next round) |


## Portfolio Services 2 (pointer: parked; nothing left for the release; the rest is looks (wait) or blocked)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | X | - | Parity backlog from O47: "Signers" label in sentence case; "Salutation" label floats on the outline before typing | Look and Feel | ?? | Rows in parity-backlog.md; for triage |
| | X | OFA-F-120 | Word converter: Shaw.Word uploads to an empty drive ID | Functional | - | Blocked: IT drive check after the 2nd UAT release |
| | X | OFA-F-032 | Attachment mover | Functional | - | Blocked: Muhammed's SharePoint live check, after go-live |


## Advisor (pointer: parked; F-170 and the words merged; B-161 card-height run in the hub's pre-release window)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | X | F-171 (P86) | The DA (Dealer's Assistant) seat's portfolio shows the picked Adviser's clients (Tobias, not Hannah); the designer has drawn it (synced 1ebe768e) | Functional | 2 | Waits: Power BI pages hidden until after the OFA work |
| | X | - | Parity backlog lines from the A2 board check: OFA questionnaire filter (board: ASF (excl. GST) from/to); S-Account ASF heading info icon after "past 12 months" | Look and Feel | ?? | For triage |
| | A4 | B-161, P68-P72 | Card height polled (code merged), and the P68, P69, P70, P72 checks just switched on: the business run proves them | Functional | ?? | Hub's pre-release window |
| | A4 | P68 (full suite 2026-11-26) | Sidebar count with the sidebar open: the app draws the number grey (rgb 64,64,64), the check wants white on maroon; and the check cannot find "Initial OFAs" on the board | Look and Feel | ?? | After the release |
| | A4 | PM-114..PM-126 | 13 flaky business tests: find each cause, fix the wait or locator; shared-support causes go to Shell | Functional | ?? | Window after PS's flaky group |
| | A4 | F-144 | The OFA timeline: copy the OFA history section PS and Compliance already have (Luke, 2026-11-26); P97 already drawn | Functional | 6 | After the UAT release |


## Portfolio Services (pointer: parked; P2, X35 and the Initial OFA title merged ed9bf87a; group 70 after the release)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | 70 | (PS raises) | OFA-B-313 paperclip on the Settings Notes: files on report notes (migration, procedure file list, trail link) | Functional | 2 | Split from P2 so the release is not held |
| | 70 | OFA-F-215 | Accepting an Adviser's answer updates the arrangement | Functional | 4 | After the release |
| | 70 | OFA-F-217 | Step code for the P81, P84, P85 scenarios (still @skip), with the loading state's entry in shared business-tests/support | Functional | 2 | After the release |
| | 70 | (PS raises) | Production `Chrome:Path` set to the path the test site uses (Chrome is on sic2iws1; REL-015), its comment and `ProductionSettingsTests` | Functional | 1 | After the release |
| | 70 | OFA-F-211 | Remove the emails Luke ruled out: the deceased-estate email to the Back Office (the tool only reads it from DART) and the State Manager's ended / terminated / culled emails (PRD and PMBook corrected at P2 finalize); one design row owed | Functional | 5 | First in group 70; Adviser's termination email and the weekly Expired report stay |
| | 70 | - | Overview "Show every hidden column" times out (key-columns.steps.ts:81): P77 "key columns never cut" and P78 headings at 1280 and 1920 fail on the shell target, alone too (full suite 2026-11-26) | Functional | ?? | After the release |
| | 70 | - | 9 flaky tests (AttachmentRegistration, ExpiryRegister, exceptions-report x3, ofa-checklist x2, quarantine, QuarantineReadEndpoint): causes and fixes | Functional | ?? | Window after Advisor A3's check |
| | 70 | - | Handoff and test runbook: Compliance ("Renewal notice", B-157) and Advisor ("Signed renewal notice") now label OFAREN | Functional | 0 | After B-157 is on main |
| | X | OFA-B-271 | Send electronically takes the note's attachments (board draws the row; API takes no files) | Functional | 2 | Held for Muhammed's intake |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | 5 | Blocked: Luke (a or b) |
| | X | OFA-F-209 | Real signing-status reader (renewals and Initial OFAs) + live DART filing check (split from F-138, which is Done) | Functional | 3 | Blocked: DART retest after the 2nd UAT release (likely 2026-11-27) |
| | X | OFA-F-062 | February-peak load test | Functional | 3 | Blocked: test site after the live deploy (Muhammed) |
| | X | - | Rename local databases to `ShawPortal-OngoingFeeArrangements-*` | Functional | - | Blocked: when Muhammed says |


## Shell (pointer: waiting; group 4 merged 4ffdf1b4; B-210 and B-212 measurement in the full-suite window)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | 5 | SHELL-F-191 | Dev and test databases live in %USERPROFILE%\.databases, not the profile root: dev-up creates them there, the LocalDB sweep looks there, existing ones moved once with every stack down | Functional | 2 | After the release |
| | X | PM-059 | No rate limiting | Functional | - | Kept, not now (Muhammed) |
| | X | SHELL-F-176 | Move committed credentials to a secrets store | Functional | 3 | Held until after go-live (user, 2026-11-25) |
| | X | PLUGIN0-F-016 | Plugin0 gallery: screen text says Adviser | Look and Feel | 1 | After the release |
| | X | PLUGIN0-F-017 | Plugin0 gallery: sample State Manager is Marcus Ashcombe | Look and Feel | 1 | After the release |
| | X | PLUGIN0-B-004 | Plugin0 gallery: OFA Checklist drawn as a timeline, built as expansion panels | Look and Feel | 3 | After the release |
