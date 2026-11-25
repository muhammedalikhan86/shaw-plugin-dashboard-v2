# Worker queue

What each worker does next, in order. Forward view only: finished work leaves this file; the back view is the status page's update log.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 2026-11-26 03:26

## Now

1. Code freeze 2026-12-11. Everything still to build lands before it.
2. Hub and all five workers run on lachlan since the 16:30 switch.
3. Overnight, unsupervised, one machine window at a time, the hub merging on delegation: the list is in *Overnight* below. Morning, with Muhammed: he picks from the parity page; the picks go to the designer as design rows; then sync.
4. Go-live gate (before prod): only the OFA database reads DataWarehouse and PowerBI; the APIs keep no DW/PBI connection strings. PS2's procedures are on main (46ed7123); Advisor's warehouse switch merged 7351f973 (ADVISOR-DASHBOARD-ADR-009). Plan: docs/hub/analysis/dw-procedures-plan.md.
5. Work order: UAT bugs from the OFA Team, then what helps testers, then other functional items, then look and feel. No idle worker: a blocked worker takes its next unblocked item.
6. Machine: one stack or .NET window at a time. Overnight order: Advisor WS; Compliance P2+P3 (after SHELL-B-207 merges); PS 65+66; Compliance C2; PS2 40; Advisor A2; last, alone, PS's parity check. Others write code only meanwhile.
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

Design sync ran 2026-11-25 18:46 (3acbeee0): the designer built all 38 rows of prompt 2026-11-25 (2). Each worker has its rows in its next group. Questions the designer asked back go to the next round (Hub item 9).

## Compliance (pointer: C2 merged bf5925e2; parked until B-156 words come)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | C3 | OI-001, OI-009 | Close on paper once the empty-library scenario is checked by name; fix B-150's stale reason (Q24 Done) | Functional | 0 | Next Compliance group |
| | X | B-156 (W44) | No-version slot line and subtitle: the board has placeholder words only | Look and Feel | 1 | Held: the business's words (next round) |

Done 2026-11-25: COMPLIANCE-DASHBOARD-B-152, B-153, OI-002, OI-011 (B117 stays a design row).
Done 2026-11-25: COMPLIANCE-DASHBOARD-B-154, B-155, F-008 part (B102, B110, B111, B112, M25 scenarios on), OFA-F-143 follow-up, Q23, Q24, B117 (merged bf5925e2).

## Portfolio Services 2 (pointer: group 41 merged 2ac26530; parked, only blocked items left)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | X | - | Parity backlog from O47: "Signers" label in sentence case; "Salutation" label floats on the outline before typing | Look and Feel | ?? | Rows in parity-backlog.md; for triage |
| | X | OFA-F-120 | Word converter: Shaw.Word uploads to an empty drive ID | Functional | - | Blocked: IT drive, Muhammed's check |
| | X | OFA-F-032 | Attachment mover | Functional | - | Blocked: Muhammed's SharePoint live check, after go-live |

Done 2026-11-25: OFA-F-206 (O47), make test-data to 0224, Wording page look, REL-014 Annature tests 127/127 (merged 2568a959).
Done 2026-11-26: OFA-F-228 (merged 2ac26530).

## Advisor (pointer: A2 merged 9f388f33; parked)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | X | - | Parity backlog lines from the A2 board check: OFA questionnaire filter (board: ASF (excl. GST) from/to); S-Account ASF heading info icon after "past 12 months" | Look and Feel | ?? | For triage |
| | X | F-144 | The OFA timeline | Functional | 6 | Blocked: Luke |

Done 2026-11-25: ADVISOR-DASHBOARD-F-166, F-167, F-168, F-169, B-159.
Done 2026-11-26: A2 parity backlog, PM-113, design rows P86, P87 (built app; board still wraps), P91, B101, B107, B108, B116, B118, B119 (merged 9f388f33).

## Portfolio Services (pointer: parity check merged 5aa51d57; group 68 code only, no stack)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | X | OFA-B-271 | Send electronically takes the note's attachments (board draws the row; API takes no files) | Functional | 2 | Held for Muhammed's intake |
| >> | 68 | - | Findings Intake of findings/2026-11-26-all.md: close OFA-F-051, B-007, B-006, B-005, F-055 (their KNOWN entries no longer show; remove PS's own KNOWN lines in parity.spec); raise Quarantine list wrap at 1920 (High, Bug) and Separate initial OFAs first column weight 500 (Medium) | Look and Feel | ?? | Code now; board run in a window when Muhammed is back |
| >> | 68 | O25-O35, O43, O48, B114 | Designer's rows back 2026-11-25, and switch on the two @review-O48 Outbox scenarios (O27 tips and B114's "Follow-up step recorded." are the designer's words, to be confirmed) | Look and Feel | ?? | Code now, with group 68 |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | 5 | Blocked: Luke (a or b) |
| | X | OFA-F-138 | File the signed renewal in DART; real signing-status reader | Functional | 3 | Blocked: Muhammed's DART retest |
| | X | OFA-F-062 | February-peak load test | Functional | 3 | Blocked: test site after the live deploy (Muhammed) |
| | X | - | Rename local databases to `ShawPortal-OngoingFeeArrangements-*` | Functional | - | Blocked: when Muhammed says |

Done 2026-11-25: OFA-B-099, OFA-F-116, OFA-F-143 seed, TD-119, browser checks (F-189, B-233, B-235, B-237, B-241, Settings report preview), O38, OFA-F-108 frame. B-098, B-107, B-015 close at the parity check. O38 sifted at the parity check (56px vs board 55px).
Done 2026-11-25: OFA-B-273, OFA-B-275, OFA-B-277 (merged 37347b65).
Done 2026-11-26: REL-012 parity check (merged 5aa51d57); owed shell-target scenarios and layout views 8/8 passed.

## Shell (pointer: parked; group 2 on main acfc536d)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | X | SHELL-F-176 | Move committed credentials to a secrets store | Functional | 3 | Held until after go-live (user, 2026-11-25) |

Done 2026-11-25: SHELL-B-207, SHELL-B-208, SHELL-B-209.

## Hub

1. Waiting on Muhammed: rerun scripts/uat/grant-misc-rights.sql on Misc at the next deploy (datawarehouse_gridpay added); the OFA-S-005 spike rerun on the unredacted spreadsheet; the DART retest; DART's open-a-document URL and staff DART logins (OFA-S-001); PS's 8 production settings.
2. Waiting on Luke: OFA-F-141 (a or b; a releases migration 0222); Advisor F-144.
3. OI-001 and OI-009 were already fixed (SHELL-B-097, SHELL-B-120); Compliance closes them in C2.
4. Next test-site deploy: PS group 58 (notices) and deploy 2 (SHELL-F-184, rollback rehearsal). Deployment and testing work is the REL- stack in `docs/leftovers.md`.
5. With the stack up, after OFA-F-202: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database.
6. Parity round 2: when Muhammed says, after every P1 fix. Parity page: https://claude.ai/artifact/HJAEsCkiTKGybrYJPW54AU
7. Designer prompt 2026-11-25 (2): all four parts sent 2026-11-25 from Lachlan's account; the Shell part (B103-B106, B113) in a new designer chat with docs/design/artboards/shell/NotificationPanel.dc.html and Main.dc.html attached. At the next switch to Muhammed's account: he uploads the two returned shell boards (from the repo, after the sync) into his design project, so its copies are current.
8. End sweep, last: after the designer's work is synced, built and hand-tested; every parity check.
9. Next designer round (when Muhammed resumes): the designer's questions in the review files: P86 (Tobias's book in the Delegated Access seat?), Q23 (sample mover Hannah or Corinne Abbott?), B112 (Adviser S-Account and PS Platform accounts tables scroll sideways: right, or Product wraps?); P87 with it: the board's nowrap on the S-Account Product cells does not take effect (S18490, 1440px, 4 cells wrap), O27 (disabled Open file at .38 opacity?), B106 (Mark all as read and close X as Material buttons in every frame? also a contract finding). Carry O44 back to the designer's copy (it lost it). B101: should the signatory chip read "Email not delivered" when a follow-up bounces (the board draws it on S18515; not built)? W44 words for the no-version slot line and subtitle (Compliance B-156 holds on them). Token finding: ofa-frame.css adds 250px, 500px and .38 that are not tokens.
10. Owed after the sync: npm run test:business:coverage and make design-checks (machine busy tonight); demo refresh in v2 done.
