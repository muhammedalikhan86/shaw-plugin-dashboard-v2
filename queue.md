# Worker queue

What each worker does next, in order. Forward view only: finished work leaves this file; the back view is the status page's update log.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 2026-11-25 17:35

## Now

1. Code freeze 2026-12-11. Everything still to build lands before it.
2. Hub and all five workers run on lachlan since the 16:30 switch.
3. Overnight, unsupervised, one machine window at a time, the hub merging on delegation: the list is in *Overnight* below. Morning, with Muhammed: he picks from the parity page; the picks go to the designer as design rows; then sync.
4. Go-live gate (before prod): only the OFA database reads DataWarehouse and PowerBI; the APIs keep no DW/PBI connection strings. PS2's procedures are on main (46ed7123); Advisor's warehouse switch merged 7351f973 (ADVISOR-DASHBOARD-ADR-009). Plan: docs/hub/analysis/dw-procedures-plan.md.
5. Work order: UAT bugs from the OFA Team, then what helps testers, then other functional items, then look and feel. No idle worker: a blocked worker takes its next unblocked item.
6. Machine: one stack or .NET window at a time. Overnight order: Advisor WS; Compliance P2+P3 (after SHELL-B-207 merges); PS 65+66; Compliance C2; PS2 40; Advisor A2; last, alone, PS's parity check. Others write code only meanwhile.
7. Parity sweep, after those windows: each worker runs the disparity-checker on its own component (Compliance, Portfolio Services, Advisor, Shell), with small actual-vs-expected screenshot pairs under docs/design/screenshots/parity/<component>/ and a breadcrumb per finding. The hub gathers them on one page for Muhammed.
8. After each test-site deploy: update-uat-status.ps1, then update-uat-data.ps1 in v2, then commit and push.
9. Grouped 2026-11-25 evening: every unblocked item has a group; only blocked items stay X. Every waiting design row went to the designer on 2026-11-25 (prompt 2026-11-25 (2)).

## Overnight (2026-11-25 into 2026-11-26)

One machine window at a time, in this order. Code-only work runs alongside.

| # | Worker | Grp | Items | Starts when |
|---|---|---|---|---|
| 1 | Shell | 1 | SHELL-B-207, SHELL-B-208 | Done, on main 0133fb50 |
| 2 | Advisor | WS | F-166, F-167, F-168, F-169, B-159 (warehouse switch) | Done, merged 7351f973 |
| 3 | Compliance | P2+P3 | B-152, B-153, B117, OI-002 | Now, window 2 |
| 4 | Portfolio Services | 65+66 | OFA-B-098, B-099, B-107, B-015, F-143 seed, browser checks owed, F-116 close; O38, F-108 frame | After Compliance P2+P3 |
| 5 | Compliance | C2 | F-143 follow-up, F-008, OI-001/OI-009 close | After PS group 65 merges |
| 6 | Portfolio Services 2 | 40 | make test-data 0200-0203, Wording page look, REL-014 Annature tests | After Compliance C2 |
| 7 | Advisor | A2 | Parity backlog, PM-113 close, ASF tip off 3 fields | After PS2 40 (code after WS) |
| 8 | Portfolio Services | P | REL-012 full parity check (about 1 to 1.5 hours) | Last, alone on the machine |

Design sync at 18:02 tonight (unattended): takes whatever the designer built and hands it to each worker's next group. It unblocks Compliance B109-B111, W44; Advisor B101, B107, B108, + 2 new; Shell B103-B106; PS2 O47; PS the O48 scenarios. Rows still open, or only questions back, go to the next designer round on 2026-11-26.

## Compliance (pointer: in its window, P2+P3: make up, layout check, business tests, Integration, finalize)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | P2 | B-152, B-153, B117 | Quarantine Extension and Last prompt minWidth 250 (grow up to 500); fix the 7 layout reds | Look and Feel | ?? | Window after Advisor (SHELL-B-207 on main) |
| >> | P3 | OI-002 | Business scenarios: Arrangements Empty, Loading, Data unavailable; Wording Loading, Failed | Functional | ?? | Same window as P2 |
| | C2 | - | Follow-up to PS's OFA-F-143 seed: SqlComplianceReviewStoreTests.cs:112 asserts the two follow-up steps; drop @not-built-OFA-F-143 at compliance-review.feature:81 | Functional | ?? | After PS group 65 merges, then make test-data |
| | C2 | F-008 | Business scenarios still off whose boards are drawn (M38, M39 back 2026-11-23) | Functional | 3 | With the C2 follow-up, one window |
| | C2 | OI-001, OI-009 | Close on paper: fixed by SHELL-B-097 and SHELL-B-120 | Functional | 0 | At C2 finalize |
| | X | B109-B111, W44 | Expired platform columns, Arrangements filter State, Wording fields gap; no-version slot wording | Look and Feel | - | Sent to the designer 2026-11-25; built when back |

## Portfolio Services 2 (pointer: parked 294c5dff, merged; next = group 40 in a window after Compliance C2)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | 40 | - | make test-data for 0200-0203; look at the Wording page | Functional | 0 | Window after Compliance C2 |
| | 40 | REL-014 | AnnatureInterfaceWebAPI 38fff52 (route 6, OFA-F-190): run its tests on this machine before Muhammed's review | Functional | 0 | Same window |
| | X | O47, OFA-F-206 | Initial OFA prepare: tick the signers, set the salutation | Functional | 5 | Blocked: designer (O47) |
| | X | OFA-F-120 | Word converter: Shaw.Word uploads to an empty drive ID | Functional | - | Blocked: IT drive, Muhammed's check |
| | X | OFA-F-032 | Attachment mover | Functional | - | Blocked: Muhammed's SharePoint live check, after go-live |

## Advisor (pointer: parked 4da0a987; A2 coded, Review PASS; board check in a short window after PS2 40)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | A2 | - | Parity backlog: loading bar sits low; dead CSS line in app.scss; F-169 12px column width (heading shade is the shell theme: parity pick); close PM-113 on paper; drop `tip: ASF_TIP` from 3 filter fields and their specs | Look and Feel | 1 | Code after WS; checked in a short window after PS2 40 |
| | X | B101, B107, B108, + 2 new | Signatory link tip; paginator; "Reported by"; "Done for the month" filtered; questionnaire row height | Look and Feel | - | Sent to the designer 2026-11-25; built when back |
| | X | F-144 | The OFA timeline | Functional | 6 | Blocked: Luke |

Done 2026-11-25: ADVISOR-DASHBOARD-F-166, F-167, F-168, F-169, B-159.

## Portfolio Services (pointer: F-143 seed done 89fcf9eb; group 65+66 in the window after Compliance P2+P3)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 65 | OFA-B-098, B-099, B-107, B-015 | Exceptions report and Anniversary list at 1440/1680/1920: Adviser and Product on one line, S-Account never cut, side-by-side parity | Look and Feel | 5 | Built; board run in its window |
| >> | 65 | OFA-F-143 seed | Follow-up steps seeded (S9970002 Adviser told, S20412 Initial OFA sent); TD-119 | Functional | 1 | Done 89fcf9eb; tested in the window |
| | 65 | - | Browser checks owed from groups 36, 45, 49 (Settings report preview, B-233, B-235, B-237, B-241, F-189) | Look and Feel | 0 | Same window, stack already up |
| | 65 | OFA-F-116 | Close on paper: 2027 holidays loaded and checked (106 rows, ruling 2026-11-25) | Functional | 1 | At finalize |
| | 66 | - | Parity backlog: O38 checkbox colour and gap; OFA-F-108 dialog frame | Look and Feel | ?? | Coded e9180683; Note notch measured in the window |
| | P | REL-012 | Full Portfolio Services parity check (disparity-checker), findings and screenshot pairs on the parity page | Look and Feel | - | Last tonight, alone on the machine |
| | X | OFA-B-271 | Send electronically takes the note's attachments (board draws the row; API takes no files) | Functional | 2 | Held for Muhammed's intake |
| | X | - | Switch on the two @review-O48 Outbox scenarios | Functional | 0 | Blocked: designer (O48) |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | 5 | Blocked: Luke (a or b) |
| | X | OFA-F-138 | File the signed renewal in DART; real signing-status reader | Functional | 3 | Blocked: Muhammed's DART retest |
| | X | OFA-F-062 | February-peak load test | Functional | 3 | Blocked: test site after the live deploy (Muhammed) |
| | X | - | Rename local databases to `ShawPortal-OngoingFeeArrangements-*` | Functional | - | Blocked: when Muhammed says |

## Shell (pointer: parked; group 1 on main 0133fb50)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | X | SHELL-F-176 | Move committed credentials to a secrets store | Functional | 3 | Held until after go-live (user, 2026-11-25) |
| | X | B103-B106 | User card seat line, "Seconds" label, Act As gap, empty notifications | Look and Feel | - | Sent to the designer 2026-11-25; built when back |

Done 2026-11-25: SHELL-B-207, SHELL-B-208.

## Hub

1. Waiting on Muhammed: rerun scripts/uat/grant-misc-rights.sql on Misc at the next deploy (datawarehouse_gridpay added); the OFA-S-005 spike rerun on the unredacted spreadsheet; the DART retest; DART's open-a-document URL and staff DART logins (OFA-S-001); PS's 8 production settings.
2. Waiting on Luke: OFA-F-141 (a or b; a releases migration 0222); Advisor F-144.
3. OI-001 and OI-009 were already fixed (SHELL-B-097, SHELL-B-120); Compliance closes them in C2.
4. Next test-site deploy: PS group 58 (notices) and deploy 2 (SHELL-F-184, rollback rehearsal). Deployment and testing work is the REL- stack in `docs/leftovers.md`.
5. With the stack up, after OFA-F-202: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database.
6. Parity round 2: when Muhammed says, after every P1 fix. Parity page: https://claude.ai/artifact/HJAEsCkiTKGybrYJPW54AU
7. Designer prompt 2026-11-25 (2): all four parts sent 2026-11-25 from Lachlan's account; the Shell part (B103-B106, B113) in a new designer chat with docs/design/artboards/shell/NotificationPanel.dc.html and Main.dc.html attached. At the next switch to Muhammed's account: he uploads the two returned shell boards (from the repo, after the sync) into his design project, so its copies are current.
8. End sweep, last: after the designer's work is synced, built and hand-tested; every parity check.
