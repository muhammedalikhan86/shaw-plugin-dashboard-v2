# Worker queue

What each worker does next, in order. Forward view only: what is next, never what is behind. Ordered from `docs/leftovers.md` and the PMBooks' open rows; finished work is recorded only in its PMBook.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 27-11-2026 16:56

## Hub

1. Next UAT deploy (UAT 7): search finds pages in all three plugins (PS OFA-F-243 merged; advisor F-175 and compliance F-056 building), the expanded table floor (SHELL-B-216), ps2's account renumber (OFA-F-242), and whatever else merges by then. Release when the last search item merges.
2. Week of 2026-11-30, scheduled (Muhammed 27-11): Muhammed's DART retest (OFA-F-209 part 2) and the February-peak load test (OFA-F-062).
3. Next designer round, once the current sync lands: carry W47 (Field library) and the 1280 x 720 floor on the seven boards; rows owed: OFA-B-345 (next reference date on the record); O53 board fix (Move to cull list offers "Deceased estate, no OFA" only when DART marks the estate, OFA-F-211 A3).
4. Each test-site release: the business changelog (page and PDF) in v2 `changelogs/` with a row in `uat-notes.json`.
5. Code freeze 2026-12-11. Work order: UAT bugs from the OFA Team, then what helps testers, then other functional items, then look and feel. No idle worker.
6. Go-live gate (before prod): only the OFA database reads DataWarehouse and PowerBI (REL-022, code done).
7. With a stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database.
8. At the next switch to Muhammed's account: he uploads the two returned shell boards (NotificationPanel.dc.html, Main.dc.html) into his design project.
9. End sweep, last: after the designer's work is synced, built and hand-tested; every parity check.
10. Not ours: the testers' mailbox cannot receive mail it sends to itself (Mimecast); IT's issue. Annature testing is closed (REL-029 Done, 27-11).

## Shell (pointer: >> SHELL-B-216 expanded table floor)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | SHELL-B-216 | The expanded table view keeps 1280 x 720 and scrolls, like the page | Look | ?? | Building |
| | X | SHELL-F-176 | Move committed credentials to a secrets store | Functional | 3 | Held until after go-live (Muhammed 2026-11-25) |
| | X | PM-059 | No rate limiting | Functional | - | Kept, not now (Muhammed) |

## Portfolio Services (pointer: >> REL-029 closed, test dates, date style)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | REL-029 | Close the Annature test: Done; the mailbox issue noted as IT's | Doc | 1 | Muhammed 27-11 |
| >> | 1 | - | Every date in the engineering docs written YYYY-MM-DD (business documents keep DD-MM-YYYY) | Doc | 2 | Muhammed 27-11 |
| >> | 1 | OFA-F-209 part 2, OFA-F-062 | Mark both scheduled for the week of 2026-11-30 | Doc | - | Muhammed 27-11 |
| | X | OFA-F-209 part 2 | Live DART filing check | Functional | - | Week of 2026-11-30, Muhammed's DART retest |
| | X | OFA-F-062 | February-peak load test | Functional | 3 | Week of 2026-11-30 |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | 5 | Blocked: Luke (a or b) |

## Portfolio Services 2 (pointer: >> OFA-F-242 account renumber)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | OFA-F-242 | Move the 2 board account numbers that clash with live data (S20338 to S9970032, S18577 to S9970033) | Functional | ?? | Final test run |
| | 2 | OFA-B-345 | Business scenario for F-215 now; the next reference date on the record after its design row | Functional | 2 | After F-242 |
| | X | OFA-F-032 | Attachment mover | Functional | - | Blocked: SharePoint live check, after go-live |

## Advisor (pointer: >> F-175 search finds pages)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | ADVISOR-DASHBOARD-F-175 | Search finds the OFA Dashboard's five pages; data search removed; plus the governance doc fixes | Functional | 3 | Building |
| | 2 | ADVISOR-DASHBOARD-F-171 (P86) | The Dealer's Assistant's portfolio shows the picked Adviser's clients | Functional | 2 | Queued (Muhammed 27-11) |
| | X | PM-114..PM-126, PM-115 | Flaky business tests | Functional | ?? | Could: revisit only if they recur |

## Compliance (pointer: >> F-056 search finds pages)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | COMPLIANCE-DASHBOARD-F-056 | Search finds pages; data search removed; plus the governance doc fixes | Functional | ?? | Building |
| | 2 | COMPLIANCE-DASHBOARD-F-008 | Business scenarios for every screen item | Functional | ?? | After F-056 |
