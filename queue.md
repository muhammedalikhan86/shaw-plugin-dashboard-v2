# Worker queue

What each worker does next, in order. Forward view only: finished work leaves this file; the back view is the status page's update log.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 2026-11-26 09:19

## Now

1. Code freeze 2026-12-11. Everything still to build lands before it.
2. Hub and all five workers run on lachlan since the 16:30 switch.
3. Overnight, unsupervised, one machine window at a time, the hub merging on delegation: the list is in *Overnight* below. Morning, with Muhammed: he picks from the parity page; the picks go to the designer as design rows; then sync.
4. Go-live gate (before prod): only the OFA database reads DataWarehouse and PowerBI; the APIs keep no DW/PBI connection strings. PS2's procedures are on main (46ed7123); Advisor's warehouse switch merged 7351f973 (ADVISOR-DASHBOARD-ADR-009). Plan: docs/hub/analysis/dw-procedures-plan.md.
5. Work order: UAT bugs from the OFA Team, then what helps testers, then other functional items, then look and feel. No idle worker: a blocked worker takes its next unblocked item.
6. Machine: one stack or .NET window at a time. Today (2026-11-26), release-first: Compliance frees the window at a safe point (C4 rest after the release); PS P2 parity check of the 5 unchecked screens and its fixes; Advisor A3 check; Shell F-188 (full suite after merge); then the UAT release (Muhammed deploys). PM-058 (PS2) is code only. After the release: Compliance C4 rest, PS 70, Advisor A4. Others write code only meanwhile.
10. Queue rule (Muhammed, 2026-11-26): get everything that can be done out of the way. Advisor's two Power BI pages (Book of business, and the dashboard with the revenue cards) are hidden in this release and wait until the OFA work is complete: data security and user segregation come first.
11. After the second UAT release: the DART retest (tomorrow, likely; production test account S110438; document type OFAREN made by Middle Office through Muhammed; a least-impact type until then), the IT drive check, the SharePoint check.
7. Parity sweep, after those windows: each worker runs the disparity-checker on its own component (Compliance, Portfolio Services, Advisor, Shell), with small actual-vs-expected screenshot pairs under docs/design/screenshots/parity/<component>/ and a breadcrumb per finding. The hub gathers them on one page for Muhammed.
8. After each test-site deploy: update-uat-status.ps1, then update-uat-data.ps1 in v2, then commit and push.
9. Grouped 2026-11-25 evening: every unblocked item has a group; only blocked items stay X. Design rows of prompt 2026-11-25 (2) are back and grouped.

## Overnight (2026-11-25 into 2026-11-26)

One machine window at a time, in this order. Code-only work runs alongside.

| # | Worker | Grp | Items | Starts when |
|---|---|---|---|---|
| 1 | Shell | 1 | SHELL-B-207, SHELL-B-208 | Done, on main 0133fb50 |
| 2 | Advisor | WS | F-166, F-167, F-168, F-169, B-159 (warehouse switch) | Done, merged 7351f973 |
| 3 | Compliance | P2+P3 | B-152, B-153, B117, OI-002 | Done, merged 14660477 |
| 4 | Portfolio Services | 65+66 | OFA-B-098, B-099, B-107, B-015, F-143 seed, browser checks owed, F-116 close; O38, F-108 frame | Done, merged 9d588115 |
| 5 | Compliance | C2 | F-143 follow-up, F-008, OI-001/OI-009 close; design rows B109-B112, B117, Q23, Q24, M25, W44 and the stale test at quarantine-signing-expiry.feature:153/172 | Done, merged bf5925e2 (OI-001/OI-009 stay open) |
| 6 | Portfolio Services 2 | 40 | make test-data 0200-0203, Wording page look, REL-014 Annature tests; O47 / OFA-F-206 Initial OFA prepare | Done, merged 2568a959 |
| 7 | Advisor | A2 | Parity backlog, PM-113 close, ASF tip off 3 fields; design rows P86, P87, P91, B101, B107, B108, B116, B118, B119 and the stale test at renewal-tracker.feature:110 | Done, merged 9f388f33 |
| 8 | Shell | 2 | SHELL-B-209 (B104, B105); B103, B106, B113 closed with no build | Done, on main acfc536d |
| 8b | Portfolio Services 2 | 41 | OFA-F-228 print dialog note (migration 0225): full PortfolioServices .NET, intake business tests, print dialog look | Done, merged 2ac26530 |
| 9 | Portfolio Services | P | REL-012 full parity check (about 1 to 1.5 hours) | Done, merged 5aa51d57 (findings 2026-11-26-all.md) |
| 10 | Portfolio Services | 68+69 | OFA-B-279, B-281, findings intake, designer rows O25-O35, O43, O48, B114; OFA-B-283 seed | Done, merged 1be7dd22 |

Design sync ran 2026-11-25 18:46 (3acbeee0): the designer built all 38 rows of prompt 2026-11-25 (2). Each worker has its rows in its next group. Questions the designer asked back go to the next round (Hub item 9).

## Compliance (pointer: C4 part 1 merged 91e5b316; rest of C4 after the release)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | C4 | OI-003 | Flaky "The list pages at 25" (arrangements.feature, shell target): find the cause, fix the wait or locator | Functional | 1 | After the release |
| | C4 | OI-007 | Flaky under load (P27 export, A14, Closed months, B-068, B4, P38, F-025, "opens to its history"; SQL timeouts): causes and fixes; shared support causes go to Shell | Functional | 3 | In its window |
| | C4 | B-158, B-159 | Two more flaky tests found in the run: closed-month card height read once (poll it); cull list "show every column" needs the extra time Advisor got 2026-11-17 | Functional | 2 | In its window |
| | C4 | OI-006 | Move the closed row out of Open Items (docs tidy) | Functional | 0 | Same group |
| | X | B-156 (W44) | No-version slot line and subtitle: the board has placeholder words only | Look and Feel | 1 | Held: the business's words (next round) |

Done 2026-11-25: COMPLIANCE-DASHBOARD-B-152, B-153, OI-002, OI-011 (B117 stays a design row).
Done 2026-11-26: COMPLIANCE-DASHBOARD-B-157 Renewal notice label (merged 91e5b316).
Done 2026-11-26: COMPLIANCE-DASHBOARD-OI-001, OI-009, B-150 reason (merged ad1eff9b).
Done 2026-11-25: COMPLIANCE-DASHBOARD-B-154, B-155, F-008 part (B102, B110, B111, B112, M25 scenarios on), OFA-F-143 follow-up, Q23, Q24, B117 (merged bf5925e2).

## Portfolio Services 2 (pointer: group 42, PM-058 across the APIs)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 42 | PM-058 | Every API answers only to its UAT and Prod host names (Development keeps any); must never block UAT or Prod | Functional | 5 | Code only; before the UAT release |
| | X | - | Parity backlog from O47: "Signers" label in sentence case; "Salutation" label floats on the outline before typing | Look and Feel | ?? | Rows in parity-backlog.md; for triage |
| | X | OFA-F-120 | Word converter: Shaw.Word uploads to an empty drive ID | Functional | - | Blocked: IT drive check after the 2nd UAT release |
| | X | OFA-F-032 | Attachment mover | Functional | - | Blocked: Muhammed's SharePoint live check, after go-live |

Done 2026-11-25: OFA-F-206 (O47), make test-data to 0224, Wording page look, REL-014 Annature tests 127/127 (merged 2568a959).
Done 2026-11-26: OFA-F-228 (merged 2ac26530).

## Advisor (pointer: A3 building; browser check after Compliance C4)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | A3 | B101 | Signer chip reads "Email not delivered" when a follow-up email bounces, as for a signing request (board draws it on S18515) | Look and Feel | ?? | Code now; checked in a short window after PS's parity check |
| >> | A3 | P87 / B112 | S-Account Product cell wraps again at 1440px, so the table never scrolls sideways (as the board draws) | Look and Feel | ?? | Same group |
| >> | A3 | new B | S-Account page and Add signatory send no DA (Dealer's Assistant) pick, so a DA working for any Adviser but the first is refused there; send the pick, server still checks the mapping | Functional | 3 | Same group, before the release |
| | X | P86 | The DA (Dealer's Assistant) seat's portfolio shows the picked Adviser's clients (Tobias, not Hannah) | Functional | ?? | Waits: Power BI pages hidden until after the OFA work |
| | X | - | Parity backlog lines from the A2 board check: OFA questionnaire filter (board: ASF (excl. GST) from/to); S-Account ASF heading info icon after "past 12 months" | Look and Feel | ?? | For triage |
| | A4 | - | card-looks.steps.ts reads card height once and never retries (same cause as Compliance B-158): poll it | Functional | ?? | With A4 |
| | A4 | PM-114..PM-126 | 13 flaky business tests: find each cause, fix the wait or locator; shared-support causes go to Shell | Functional | ?? | Window after PS's flaky group |
| | X | F-144 | The OFA timeline | Functional | 6 | Blocked: Luke |

Done 2026-11-25: ADVISOR-DASHBOARD-F-166, F-167, F-168, F-169, B-159.
Done 2026-11-26: A2 parity backlog, PM-113, design rows P86, P87 (built app; board still wraps), P91, B101, B107, B108, B116, B118, B119 (merged 9f388f33).

## Portfolio Services (pointer: P2 parity check, UAT release blocker)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | P2 | REL-012 rest | Parity check of the 5 unchecked screens (Renewal tracker, Exceptions report, Arrangement record with B-015 pts 7-9, Outbox, Settings and dialogs) at 1920 and 1440, then fix its findings | Look and Feel | ?? | UAT release blocker; window after Compliance frees it |
| | P2 | OFA-F-209 b | DART live filing check step list for Muhammed (S110438; least-impact document type until OFAREN exists) | Functional | 0 | Prep now, code-free |
| | 70 | OFA-F-211 | Remove the emails Luke ruled out: the deceased-estate email to the Back Office (the tool only reads it from DART) and the State Manager's ended / terminated / culled emails (PRD and PMBook corrected at P2 finalize); one design row owed | Functional | ?? | First in group 70; resizing |
| | 70 | - | 9 flaky tests (AttachmentRegistration, ExpiryRegister, exceptions-report x3, ofa-checklist x2, quarantine, QuarantineReadEndpoint): causes and fixes | Functional | ?? | Window after Advisor A3's check |
| | 70 | - | Handoff and test runbook: Compliance ("Renewal notice", B-157) and Advisor ("Signed renewal notice") now label OFAREN | Functional | 0 | After B-157 is on main |
| | X | OFA-B-271 | Send electronically takes the note's attachments (board draws the row; API takes no files) | Functional | 2 | Held for Muhammed's intake |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | 5 | Blocked: Luke (a or b) |
| | X | OFA-F-209 | Real signing-status reader (renewals and Initial OFAs) + live DART filing check (split from F-138, which is Done) | Functional | 3 | Blocked: DART retest after the 2nd UAT release (likely 2026-11-27) |
| | X | OFA-F-062 | February-peak load test | Functional | 3 | Blocked: test site after the live deploy (Muhammed) |
| | X | - | Rename local databases to `ShawPortal-OngoingFeeArrangements-*` | Functional | - | Blocked: when Muhammed says |

Done 2026-11-25: OFA-B-099, OFA-F-116, OFA-F-143 seed, TD-119, browser checks (F-189, B-233, B-235, B-237, B-241, Settings report preview), O38, OFA-F-108 frame. B-098, B-107, B-015 close at the parity check. O38 sifted at the parity check (56px vs board 55px).
Done 2026-11-25: OFA-B-273, OFA-B-275, OFA-B-277 (merged 37347b65).
Done 2026-11-26: REL-012 parity check (merged 5aa51d57); owed shell-target scenarios and layout views 8/8 passed.
Done 2026-11-26: OFA-B-107 (merged ce436203).
Done 2026-11-26: OFA-B-279, B-281, B-283; F-051, B-005 (width, date), B-006, B-007, F-055 closed by the parity check; design rows O25-O35, O43, O48, B114 (O33 board-only: Act As gap, Shell list) (merged 1be7dd22).

## Shell (pointer: SHELL-F-188 building; before the UAT release only if the UAT-manifest check passes)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 3a | SHELL-F-188 (PM-056) | Plugins load only from trusted server addresses (an allowed list, checked by the API and the browser) | Functional | 3 | Now: approach and size first; lands before today's UAT release only if safe |
| | 3b | SHELL-F-189 (PM-055) | Profile page: a person never sees their own security groups; only the development team (diagnostics) and Act As (UAT testers included) do; plugins get the same trimmed list | Functional | 3 | After PM-056 |
| | 3b | SHELL-F-190 (PM-057) | Shell API refuses the test sign-in outside the test host; each plugin API adopts it in its own item | Functional | 3 | After PM-056 |
| | X | PM-059 | No rate limiting | Functional | - | Kept, not now (Muhammed) |
| | 3b | PM-113 | Plugin0 extended FAB padding to the board (22/22) | Look and Feel | ?? | After F-188, code only |
| | 3 | B106 | Notification frames: Mark all as read and the close X as mat-button / mat-icon-button in every frame | Look and Feel | ?? | After the designer redraws the frames |
| | X | - | Act As on a plugin API looks people up in real AD, so a test-data person (Corinne Abbott, PS O33) cannot be acted as; a dev-only directory that knows the test-data people (SHELL-ADR-020 seam) | Functional | ?? | Held: Muhammed (identity seam) |
| | X | SHELL-F-176 | Move committed credentials to a secrets store | Functional | 3 | Held until after go-live (user, 2026-11-25) |

Done 2026-11-25: SHELL-B-207, SHELL-B-208, SHELL-B-209.

## Hub

1. Waiting on Muhammed: rerun scripts/uat/grant-misc-rights.sql on Misc at the next deploy (datawarehouse_gridpay added); the OFA-S-005 spike rerun on the unredacted spreadsheet; the DART retest; DART's open-a-document URL and staff DART logins (OFA-S-001); PS's 8 production settings.
2. Waiting on Luke: OFA-F-141 (a or b; a releases migration 0222); Advisor F-144.
3. OI-001 and OI-009 closed 2026-11-26 (Compliance C3, ad1eff9b).
4. Next test-site deploy: PS group 58 (notices) and deploy 2 (SHELL-F-184, rollback rehearsal). Deployment and testing work is the REL- stack in `docs/leftovers.md`.
5. With the stack up, after OFA-F-202: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database.
6. Parity round 2: when Muhammed says, after every P1 fix. Parity page: https://claude.ai/artifact/HJAEsCkiTKGybrYJPW54AU
7. Designer prompt 2026-11-25 (2): all four parts sent 2026-11-25 from Lachlan's account; the Shell part (B103-B106, B113) in a new designer chat with docs/design/artboards/shell/NotificationPanel.dc.html and Main.dc.html attached. At the next switch to Muhammed's account: he uploads the two returned shell boards (from the repo, after the sync) into his design project, so its copies are current.
8. End sweep, last: after the designer's work is synced, built and hand-tested; every parity check.
9. Next designer round: answers from Muhammed 2026-11-26: P86 yes (the DA (Dealer's Assistant) seat shows the picked Adviser's clients); P87/B112 Adviser yes, Product wraps again; B112 Portfolio, sideways scroll is right; Q23 yes, Corinne Abbott everywhere, the OFA Dashboard included; O27 yes, .38; B106 yes, Material buttons in every frame; B101 yes, same label; W44 leave the placeholder (B-156 stays held). Prompt to the designer: P86, Q23, B106 redraws, B112/P87 confirmations, O44 carry-back, and rule P96 (DA = Dealer's Assistant). Token finding: .38 is Material's disabled opacity; 250px and 500px stay as Q24 widths.
10. Owed after the sync: npm run test:business:coverage and make design-checks (machine busy tonight); demo refresh in v2 done.
