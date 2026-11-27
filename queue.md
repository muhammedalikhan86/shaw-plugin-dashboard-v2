# Worker queue

What each worker does next, in order. Forward view only: what is next, never what is behind. Ordered from `docs/leftovers.md` and the PMBooks' open rows; finished work is recorded only in its PMBook.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 2026-11-27 18:03

## Hub

1. Next UAT deploy (UAT 7), hub releases it (Muhammed's go 27-11). Waits on: ADVISOR-DASHBOARD-F-176 (Portfolio and Book switch), ps2's OFA-B-382 and OFA-B-345, shell's SHELL-B-217, every fix for the full browser run's failures, then one more full run. A stuck item is left out rather than holding the release. Already in: search finds pages in all three plugins (all merged: OFA-F-243, ADVISOR-DASHBOARD-F-175, COMPLIANCE-DASHBOARD-F-056), the expanded table floor (SHELL-B-216, merged), ps2's account renumber (OFA-F-242), and whatever else merges by then. Release when the last search item merges.
2. Week of 2026-11-30, scheduled (Muhammed 27-11): Muhammed's DART retest (OFA-F-209 part 2) and the February-peak load test (OFA-F-062). Monday 2026-11-30: Muhammed sends Luke the product-correction re-ask (OFA-F-141).
3. Next designer round, once the current sync lands: carry W47 (Field library) and the 1280 x 720 floor on the seven boards; rows owed: the board's Q13 margin note (a declined notice is not a close, Luke 27-11) to drop; OFA-B-345 (next reference date on the record); O53 board fix (Move to cull list offers "Deceased estate, no OFA" only when DART marks the estate, OFA-F-211 A3).
4. Each test-site release: the business changelog (page and PDF) in v2 `changelogs/` with a row in `uat-notes.json`.
5. Code freeze 2026-12-11. Work order: UAT bugs from the OFA Team, then what helps testers, then other functional items, then look and feel. No idle worker.
6. Go-live gate (before prod): only the OFA database reads DataWarehouse and PowerBI (REL-022, code done).
7. With a stack up: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database.
8. At the next switch to Muhammed's account: he uploads the two returned shell boards (NotificationPanel.dc.html, Main.dc.html) into his design project.
9. End sweep, last: after the designer's work is synced, built and hand-tested; every parity check.
10. Not ours: the testers' mailbox cannot receive mail it sends to itself (Mimecast); IT's issue. Annature testing is closed (REL-029 Done, 27-11).

## Shell (pointer: >> SHELL-B-217)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | SHELL-B-218 | Business tests: one plugin's test clock no longer moves another plugin's mid-scenario (compliance "10 days left") | Bug | ?? | Same group; UAT 7 |
| >> | 1 | SHELL-B-217 | Plugin0 pinned-columns test: header row scrolled to the end lands at 1418 | Bug | 1 | Building; UAT 7 |
| | X | SHELL-F-176 | Move committed credentials to a secrets store | Functional | 3 | Held until after go-live (Muhammed 2026-11-25) |
| | X | PM-059 | No rate limiting | Functional | - | Kept, not now (Muhammed) |

## Portfolio Services (pointer: >> full-run reds)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | (raising) | Full-run reds: the monthly cycle page under the test clock lacks Cull list / Quarantine list / Publish and send (x14); S9970004 not at 28 Sep Released; exceptions-report month (flaky) | Bug | ?? | UAT 7 |
| | X | OFA-F-209 part 2 | Live DART filing check | Functional | - | Week of 2026-11-30, Muhammed's DART retest |
| | X | OFA-F-062 | February-peak load test | Functional | 3 | Week of 2026-11-30 |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | 5 | Blocked: Luke (his 27-11 reply answered the date, not the product; re-ask) |

## Portfolio Services 2 (pointer: idle, nothing doable until a design row or a routed red)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| | X | OFA-B-345 | The next reference date on the record (scenario part merged) | Functional | 1 | Waits on its design row |
| | X | OFA-F-032 | Attachment mover | Functional | - | Blocked: SharePoint live check, after go-live |

## Advisor (pointer: F-171 + F-176 built fb2b45ab, merge after the full run)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | ADVISOR-DASHBOARD-F-176 | Portfolio and the Book of business come back behind one switch: on in Development and UAT, off in Production | Functional | 3 | Built fb2b45ab with F-171; hub merges after the full run; advisor runs its business tests |
| >> | 1 | ADVISOR-DASHBOARD-F-171 (P86) | The Dealer's Assistant's portfolio shows the picked Adviser's clients | Functional | 2 | Building |
| | 2 | (raising) | Version-2 scenarios on the built app: 18 Portfolio/Book scenarios tagged not-built, then triaged (rewrite to test data, or a bug per real defect); plus the questionnaire column order (Platform accounts before Status) | Functional | ?? | After group 1; what's done before the final full run goes into UAT 7 |
| | X | PM-114..PM-126, PM-115 | Flaky business tests | Functional | ?? | Could: revisit only if they recur |

## Compliance (pointer: idle, stand by for the final full run)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
