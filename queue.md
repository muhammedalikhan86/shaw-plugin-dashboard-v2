# Worker queue

What each worker does next, in order. Forward view only: what is next, never what is behind. Ordered from `docs/leftovers.md` and the PMBooks' open rows; finished work is recorded only in its PMBook.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 2026-11-26 09:59

## Now

Release, waiting-on-people and go-live work: `docs/leftovers.md`. This file orders the workers only.

1. Code freeze 2026-12-11. Everything still to build lands before it.
2. Today, release-first, one machine window at a time: PS P2 (parity of the 5 unchecked screens and its fixes); Advisor A3 browser check; then the hub's full suite (SHELL-F-188, PM-058, F-189, F-190, B-210 and OFA-F-213 are on main) with B-210's browser measurement; then the UAT release (Muhammed deploys). Everyone else writes code only meanwhile. After the release: Compliance C4 rest, PS 70, Advisor A4.
3. Work order: UAT bugs from the OFA Team, then what helps testers, then other functional items, then look and feel. No idle worker: a blocked worker takes its next unblocked item.
4. Advisor's two Power BI pages (Book of business, and the dashboard with the revenue cards) wait until the OFA work is complete: data security and user segregation come first (Muhammed, 2026-11-26).
5. Go-live gate (before prod): only the OFA database reads DataWarehouse and PowerBI (REL-022).
6. After each test-site deploy: update-uat-status.ps1, then update-uat-data.ps1 in v2, then commit and push.

## Compliance (pointer: C4 rest, after the UAT release)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | C4 | (Compliance raises) | The Compliance API refuses the test sign-in outside the test host, as SHELL-F-190 does (PM-057) | Functional | ?? | Code only |
| | C4 | OI-003 | Flaky "The list pages at 25" (arrangements.feature, shell target): find the cause, fix the wait or locator | Functional | 1 | After the release |
| | C4 | OI-007 | Flaky under load (P27 export, A14, Closed months, B-068, B4, P38, F-025, "opens to its history"; SQL timeouts): causes and fixes; shared support causes go to Shell | Functional | 3 | In its window |
| | C4 | B-158, B-159 | Two more flaky tests found in the run: closed-month card height read once (poll it); cull list "show every column" needs the extra time Advisor got 2026-11-17 | Functional | 2 | In its window |
| | X | B-156 (W44) | No-version slot line and subtitle: the board has placeholder words only | Look and Feel | 1 | Held: the business's words (next round) |


## Portfolio Services 2 (pointer: group 44, the test sign-in guard on the PS API)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 44 | (PS2 raises) | The PS API refuses the test sign-in outside the test host, as SHELL-F-190 does for the shell (PM-057) | Functional | ?? | Code only; merges before the UAT release if ready |
| | X | - | Parity backlog from O47: "Signers" label in sentence case; "Salutation" label floats on the outline before typing | Look and Feel | ?? | Rows in parity-backlog.md; for triage |
| | X | OFA-F-120 | Word converter: Shaw.Word uploads to an empty drive ID | Functional | - | Blocked: IT drive check after the 2nd UAT release |
| | X | OFA-F-032 | Attachment mover | Functional | - | Blocked: Muhammed's SharePoint live check, after go-live |


## Advisor (pointer: A3 built; browser check after PS P2)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | A4 | (Advisor raises) | The Advisor API refuses the test sign-in outside the test host, as SHELL-F-190 does (PM-057) | Functional | ?? | Code only, after A3 |
| >> | A3 | B101 | Signer chip reads "Email not delivered" when a follow-up email bounces, as for a signing request (board draws it on S18515) | Look and Feel | ?? | Code now; checked in a short window after PS's parity check |
| >> | A3 | P87 / B112 | S-Account Product cell wraps again at 1440px, so the table never scrolls sideways (as the board draws) | Look and Feel | ?? | Same group |
| >> | A3 | new B | S-Account page and Add signatory send no DA (Dealer's Assistant) pick, so a DA working for any Adviser but the first is refused there; send the pick, server still checks the mapping | Functional | 3 | Same group, before the release |
| | X | P86 | The DA (Dealer's Assistant) seat's portfolio shows the picked Adviser's clients (Tobias, not Hannah) | Functional | ?? | Waits: Power BI pages hidden until after the OFA work |
| | X | - | Parity backlog lines from the A2 board check: OFA questionnaire filter (board: ASF (excl. GST) from/to); S-Account ASF heading info icon after "past 12 months" | Look and Feel | ?? | For triage |
| | A4 | - | card-looks.steps.ts reads card height once and never retries (same cause as Compliance B-158): poll it | Functional | ?? | With A4 |
| | A4 | PM-114..PM-126 | 13 flaky business tests: find each cause, fix the wait or locator; shared-support causes go to Shell | Functional | ?? | Window after PS's flaky group |
| | A4 | F-144 | The OFA timeline: copy the OFA history section PS and Compliance already have (Luke, 2026-11-26) | Functional | 6 | After the UAT release, with A4 |


## Portfolio Services (pointer: P2 parity check, UAT release blocker)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | P2 | REL-012 rest | Parity check of the 5 unchecked screens (Renewal tracker, Exceptions report, Arrangement record with B-015 pts 7-9, Outbox, Settings and dialogs) at 1920 and 1440, then fix its findings | Look and Feel | ?? | UAT release blocker; window after Compliance frees it |
| | P2 | OFA-F-209 b | DART live filing check step list for Muhammed (S110438; least-impact document type until OFAREN exists) | Functional | 0 | Prep now, code-free |
| | 70 | OFA-F-211 | Remove the emails Luke ruled out: the deceased-estate email to the Back Office (the tool only reads it from DART) and the State Manager's ended / terminated / culled emails (PRD and PMBook corrected at P2 finalize); one design row owed | Functional | 5 | First in group 70; Adviser's termination email and the weekly Expired report stay |
| | 70 | - | 9 flaky tests (AttachmentRegistration, ExpiryRegister, exceptions-report x3, ofa-checklist x2, quarantine, QuarantineReadEndpoint): causes and fixes | Functional | ?? | Window after Advisor A3's check |
| | 70 | - | Handoff and test runbook: Compliance ("Renewal notice", B-157) and Advisor ("Signed renewal notice") now label OFAREN | Functional | 0 | After B-157 is on main |
| | X | OFA-B-271 | Send electronically takes the note's attachments (board draws the row; API takes no files) | Functional | 2 | Held for Muhammed's intake |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | 5 | Blocked: Luke (a or b) |
| | X | OFA-F-209 | Real signing-status reader (renewals and Initial OFAs) + live DART filing check (split from F-138, which is Done) | Functional | 3 | Blocked: DART retest after the 2nd UAT release (likely 2026-11-27) |
| | X | OFA-F-062 | February-peak load test | Functional | 3 | Blocked: test site after the live deploy (Muhammed) |
| | X | - | Rename local databases to `ShawPortal-OngoingFeeArrangements-*` | Functional | - | Blocked: when Muhammed says |


## Shell (pointer: group 4, avatar photo bug then Act As test directory; B-210 measurement in the full-suite window)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 4 | (Shell raises) | BUG: Muhammed's Microsoft display picture no longer shows in the avatar (suspect F-188 CSP or F-189) | Functional | ?? | First; before the UAT release if today's changes caused it |
| | X | PM-059 | No rate limiting | Functional | - | Kept, not now (Muhammed) |
| | 3 | B106 | Notification frames: Mark all as read and the close X as mat-button / mat-icon-button in every frame | Look and Feel | ?? | After the designer redraws the frames |
| >> | 4 | (Shell raises) | Act As on a plugin API looks people up in real AD, so a test-data person (Corinne Abbott, PS O33) cannot be acted as; a dev-only directory that knows the test-data people (SHELL-ADR-020 seam) | Functional | ?? | Scheduled by Muhammed 2026-11-26; code only; can follow the release |
| | X | SHELL-F-176 | Move committed credentials to a secrets store | Functional | 3 | Held until after go-live (user, 2026-11-25) |


## Hub

1. Next test-site deploy: PS group 58 (notices) and deploy 2 (SHELL-F-184, rollback rehearsal).
2. With the stack up, after OFA-F-202: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database.
3. Parity round 2: when Muhammed says, after every P1 fix. Parity page: https://claude.ai/artifact/HJAEsCkiTKGybrYJPW54AU
4. At the next switch to Muhammed's account: he uploads the two returned shell boards (NotificationPanel.dc.html, Main.dc.html, from the repo) into his design project.
5. Next designer round: P86, Q23, B106 redraws, B112/P87 confirmations, O44 carry-back, rule P96 (DA = Dealer's Assistant), P97 (Advisor board gets the OFA history section). Muhammed's answers to the designer's questions are in docs/hub/rulings.md (2026-11-26).
6. Owed: npm run test:business:coverage and make design-checks, in a machine window.
7. End sweep, last: after the designer's work is synced, built and hand-tested; every parity check.
