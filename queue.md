# Worker queue

What each worker does next, in order. Forward view only: what is next, never what is behind. Ordered from `docs/leftovers.md` and the PMBooks' open rows; finished work is recorded only in its PMBook.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 2026-11-27 17:09

## Hub

1. Next UAT deploy (UAT 7), waits on SHELL-F-199 and ADVISOR-DASHBOARD-F-176 (Portfolio and Book switch): search finds pages in all three plugins (all merged: OFA-F-243, ADVISOR-DASHBOARD-F-175, COMPLIANCE-DASHBOARD-F-056), the expanded table floor (SHELL-B-216, merged), ps2's account renumber (OFA-F-242), and whatever else merges by then. Release when the last search item merges.
2. Week of 2026-11-30, scheduled (Muhammed 27-11): Muhammed's DART retest (OFA-F-209 part 2) and the February-peak load test (OFA-F-062).
3. Next designer round, once the current sync lands: carry W47 (Field library) and the 1280 x 720 floor on the seven boards; rows owed: OFA-B-345 (next reference date on the record); O53 board fix (Move to cull list offers "Deceased estate, no OFA" only when DART marks the estate, OFA-F-211 A3).
4. Each test-site release: the business changelog (page and PDF) in v2 `changelogs/` with a row in `uat-notes.json`.
5. Code freeze 2026-12-11. Work order: UAT bugs from the OFA Team, then what helps testers, then other functional items, then look and feel. No idle worker.
6. Go-live gate (before prod): only the OFA database reads DataWarehouse and PowerBI (REL-022, code done).
7. With a stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database.
8. At the next switch to Muhammed's account: he uploads the two returned shell boards (NotificationPanel.dc.html, Main.dc.html) into his design project.
9. End sweep, last: after the designer's work is synced, built and hand-tested; every parity check.
10. Not ours: the testers' mailbox cannot receive mail it sends to itself (Mimecast); IT's issue. Annature testing is closed (REL-029 Done, 27-11).

## Shell (pointer: >> SHELL-F-199 sidebar item switch, then SHELL-B-217)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | SHELL-F-199 | A plugin's sidebar item can be switched on or off by a shell setting, and the plugin is told which items it got (for ADVISOR-DASHBOARD-F-176) | Functional | ?? | Urgent, UAT 7 waits on it |
| | 1 | SHELL-B-217 | Plugin0 pinned-columns test: header row scrolled to the end lands at 1418 | Bug | 1 | Same group |
| | X | SHELL-F-176 | Move committed credentials to a secrets store | Functional | 3 | Held until after go-live (Muhammed 2026-11-25) |
| | X | PM-059 | No rate limiting | Functional | - | Kept, not now (Muhammed) |

## Portfolio Services (pointer: waiting for the full browser run's failures)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | X | OFA-F-209 part 2 | Live DART filing check | Functional | - | Week of 2026-11-30, Muhammed's DART retest |
| | X | OFA-F-062 | February-peak load test | Functional | 3 | Week of 2026-11-30 |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | 5 | Blocked: Luke (a or b) |

## Portfolio Services 2 (pointer: >> OFA-B-382 State Manager count)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | OFA-B-382 | Advisor's State Manager scenarios count 14 advisers, matching the Quarantine-list seed (was 10); plus a PS test that pins Marcus's 14 people | Bug | 1 | Ruled by hub 27-11 |
| | 2 | OFA-B-345 | Business scenario for F-215 now; the next reference date on the record after its design row | Functional | 2 | After B-382 |
| | X | OFA-F-032 | Attachment mover | Functional | - | Blocked: SharePoint live check, after go-live |

## Advisor (pointer: >> F-171 DA portfolio, then the Portfolio and Book switch)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | ADVISOR-DASHBOARD-F-176 | Portfolio and the Book of business come back behind one switch: on in Development and UAT, off in Production | Functional | 3 | Needs SHELL-F-199; for UAT 7 |
| >> | 1 | ADVISOR-DASHBOARD-F-171 (P86) | The Dealer's Assistant's portfolio shows the picked Adviser's clients | Functional | 2 | Building |
| | X | PM-114..PM-126, PM-115 | Flaky business tests | Functional | ?? | Could: revisit only if they recur |

## Compliance (pointer: F-008 built cbb382be, merges after the full browser run)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | COMPLIANCE-DASHBOARD-F-008 | Business scenarios for every screen item | Functional | ?? | Built cbb382be; hub merges after the full browser run |
