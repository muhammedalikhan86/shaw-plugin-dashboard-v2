# Worker queue (the hub's direction)

The hub's current direction for each worker. The hub updates this file every time it directs or
adjusts a worker. Grp = group: items that run together, lowest first. X = not grouped yet.
**>>** = the item the worker is on now.

Updated: 18-11-2026 22:00

## Now: Lachlan's account (from 18-11-2026 20:10), running unsupervised

1. All four workers reopened on Lachlan's account and briefed. Each merges main first.
2. SHELL-F-144 part 2 is merged (8bce346d). Each checkout runs `make down` then `make test-data` once, in its own app turn. App turns go one at a time, scheduled by the hub: shell now.
3. PS2 opened 18-11 for group 3, code only.
4. Functionality first (user, 18-11): no full design checks; only the screens a change touches; look gaps wait for the end parity sweep.
5. Unsupervised: nobody answers prompts. The hub rules on workers' defaults; anything only the user may decide waits on its default (marked "awaiting user" in the rulings). One app stack at a time (memory).

## Shell (pointer: parked 5cc52d11, nothing functional queued)

| # | Grp | ID | Item | Size | Status / depends on |
|---|-----|----|------|------|---------------------|
| 3 | X | (owed runs) | F-084/F-145 look runs (sweep); B-128 waits for a plugin to opt in | - | F-144 parts 1+2 and B-130 proved 18-11 |
| 2 | X | SHELL-B-022 | Table card stays full height when a search finds nothing (theme half) | 3 | Look gap: end parity sweep (functionality first) |
| 4 | X | SHELL-F-089 | Take off the temporary "Expired report" sidebar item | 1 | Blocked on OFA-F-056 (PS) |

Done 18-11: F-144 part 2 (8bce346d), F-144 part 1, F-145, F-084, F-151, F-107, F-114, F-116, B-085, B-119, B-122, B-130, F-160.

## Portfolio Services (pointer: group 1b)

| # | Grp | ID | Item | Size | Status / depends on |
|---|-----|----|------|------|---------------------|
| 2a | 1b | (triage) | Two reds the shell saw: back-office-requests (missing not-built tag); issue-the-month (3, being triaged) | - | In ps's window |
| 2b | 1b | OFA-B-167 | One seeded record gets a fixed time, not the load time (S19630) | 1 | Found in ps's window |
| 3 | 1b | OFA-B-155 | Bug from today's merge | - | Look check waits for a turn with the running app |
| >> | 1b | OFA-B-153 (reopened) | Seed OFA-B-153 data for 6 compliance scenarios: closed-months M2, compliance-review B5, cull-list S20012, S20244, single note, S20120 | 1 | From compliance's window |
| >> | 1b | OFA-B-165, OFA-B-149 (reopened) | O17, O18 Done on the board: Expired report and Platform accounts tables' columns to content width, no fixed widths. O19 Done: draw the signing outage strip and banner from `sources.signingUnavailable` (reopen OFA-B-149 or a new item; then swap the O19 scenario's tag) | 2 | From the 18-11 design sync (f9cf27ce) |
| >> | 1b | OFA-F-153 | compliance.SourceTimes view: fees/signing as at and failed, for COMPLIANCE-DASHBOARD-B-069 | 1 | Raised 18-11 for compliance |
| 6 | 1b | (follow-up) | Merge main (shell architecture v147, move pointers); drop the now-repeated `autoFocus: 'dialog'` at arrangement-record.ts:727, :759, exceptions-report.ts:620 | 1 | From SHELL-F-116 |
| 5 | 2 | OFA-F-042 | Compliance notes | 3 | - |
| 5a | 2 | OFA-B-166 | Test fixtures use the checkout's own LocalDB (LocalDbTestDatabase.cs:24) | 1 | From SHELL-F-144 part 2 |
| 6 | 2 | OFA-F-128 | A view of an account's documents for the Compliance tool | 2 | - |
| 7 | 2 | OFA-F-136 | The client's acceptance evidence for the Compliance tool | 2 | - |
| 8 | 2 | OFA-F-046 | Who a pending renewal is with | 3 | - |
| 9 | 3 | OFA-F-146 | Only the OFA Team quarantines (adviser's own move removed) | 3 | - |
| 10 | 3 | OFA-F-150 | OFA Team moves a single account into quarantine | 3 | F-146; design row C163 |
| 11 | 3 | OFA-F-147 | Quarantine email dropped; weekly follow-up from the quarantine date | 3 | OFA-F-016, F-146 |
| 12 | 3 | OFA-F-148 | Email wording store takes Luke's merge fields | 3 | OFA-F-016, F-147 |
| 13 | 3 | OFA-F-149 | End-of-day email also for accounts quarantined at the deadline | 2 | F-147 |
| 14 | X | OFA-F-144 | Test data: a register-only data set over a shared warehouse | 3 | - |
| 15 | X | OFA-S-001 | Spike: how a document is filed in DART and opened | 3 | - |
| 16 | X | OFA-F-145 | The Compliance tool can open an OFA document | 2 | OFA-S-001 |
| 17 | X | OFA-F-044 | The closure confirmation | 3 | OFA-F-010 (in progress) |
| 18 | X | OFA-B-154 | Test user for a state manager who sees every adviser | 2 | - |

Done 18-11 (group 1): OFA-B-152, OFA-B-149, OFA-F-084; then OFA-F-151, OFA-B-156 (seed 2026-11-19.2: run make test-data before the next make up).
Also queued in PS's handoff: triage rows OFA-B-157+ / OFA-F-152, G6.
Parity list (looks only, at the end): "Add a platform account" menu width (by-hand-dialog.html:72).

## Portfolio Services 2 (pointer: opening; group 3 code-only)

Second PS checkout, approved by Muhammed 18-11: `../shaw-plugin-dashboard-portfolio-services-2`, branch `portfolio-services-2`, port offset 40, artboard port 8799.

| # | Grp | ID | Item | Size | Status / depends on |
|---|-----|----|------|------|---------------------|
| 1 | - | (setup) | In hub.json and opened 18-11 on Lachlan's account | - | Done |
| >> | 3 | OFA-F-146 → F-147 → F-148 → F-149 → F-150 | PS group 3, Luke's quarantine changes, serial | 14 | Merges in one window with ADVISOR-DASHBOARD-F-124 and a compliance fix (F-146: advisor surface version 2). Owns seed lines RegisterSeed.cs:926 and :1416-1429 |

Collision rules (hub ruling 18-11):
1. Migration numbers: PS uses 0086-0099, PS2 uses 0100-0119.
2. Test data and seed: PS only. PS2 asks PS through the hub.
3. PMBook and handoff: each edits only its own items' rows; PS2 writes its notes in its own handoff section.
4. No `make test-data` or `make up` in PS2 until SHELL-F-144 part 2 lands (the OFA test database is still shared).
5. App turns: one at a time, scheduled by the hub.
6. PS2 skips the graph rebuild; PS does it. New IDs come from the hub.

## Compliance (pointer: group 1 docs + group 2 code; app turn after SHELL-F-144 part 2)

| # | Grp | ID | Item | Size | Status / depends on |
|---|-----|----|------|------|---------------------|
| 1 | 1 | (owed) | PMBook F-040 row: one-line update (NW-53110 keeps its tag: master status uses the database's own day, risk A8) | - | Docs only |
| 2 | X | (owed) | Board Parity F-028/F-033/F-035/F-036; M-448120 on the board; B-048 re-measure | - | Moved to the end parity sweep (user, 18-11) |
| 3 | 2 | COMPLIANCE-DASHBOARD-B-069 | Quarantine: Fees as at / Signing as at in the header | 1 | Blocked on OFA-F-153 (PS 1b) |
| >> | 2 | COMPLIANCE-DASHBOARD-F-020 | Load dialog's Email subject; subject on the Wording page | 2 | W23 Done; ready |
| >> | 2 | COMPLIANCE-DASHBOARD-F-041 | Drop repeated `autoFocus: 'dialog'` (compliance-review-section.ts:270, cull-list-section.ts:261, quarantine-section.ts:292); check load-wording-dialog.ts:132 focus spec; `.doc-link` for arrangements.scss:371-400 and Wording | 1 | From SHELL-F-116 |
| >> | 2 | COMPLIANCE-DASHBOARD-B-080 | Q13 Done: keep each date on one line in the Quarantine details dialog (`quarantine.scss`, nowrap) | 1 | From the 18-11 design sync |
| 5b | 3 | COMPLIANCE-DASHBOARD-F-042 | Fix its quarantine test fixture and S20187 scenario for OFA-F-146 | 1 | Merges in one window with PS2's group 3 and advisor F-124 |
| >> | 2 | COMPLIANCE-DASHBOARD-B-081 | Arrangement history shows the cycle month, not the platform account number | 2 | Functional; found by F-044 |
| >> | 2 | COMPLIANCE-DASHBOARD-F-044 | Five business tests follow the corrected OFA-B-153 test data | 1 | Runs in its next app turn |
| 5c | 3 | COMPLIANCE-DASHBOARD-F-043 | Show the OFA Team's own quarantine move (OfaTeamMoved) and its note | 1 | Same merge window as PS2's group 3 |
| 6 | 3 | COMPLIANCE-DASHBOARD-F-010 | Compliance adds notes | 3 | OFA-F-042 (PS group 2) |
| 7 | 3 | COMPLIANCE-DASHBOARD-F-029 | Account details: the Documents card's contents | 2 | OFA-F-128 (PS group 2) |
| 8 | X | COMPLIANCE-DASHBOARD-F-039 | Three Adviser emails on Wording; Quarantine reads them | 2 | OFA-F-147 (PS group 3); rows W26, Q12 |
| 9 | X | COMPLIANCE-DASHBOARD-F-037 | .NET test speed-up, part 2 | 2 | OFA-F-144 (PS) |
| 10 | X | (no ID) | Parity sweep, parity-backlog rows 1-8 | - | Looks only, at the end |

Stack window 18-11: final run 160 passed, 1 failed (NW-53110), 77 skipped; 21 scenarios lost their waiting tags.
Done 18-11: F-028, F-030, F-031, F-032, F-033, F-034, F-035, F-036, F-040, B-079.

## Advisor (pointer: F-124 in review; next functional group being picked)

| # | Grp | ID | Item | Size | Status / depends on |
|---|-----|----|------|------|---------------------|
| 2 | 1 | (item 5) | Test-clock scenarios; design check only on screens its merges touch | - | App turn after SHELL-F-144 part 2 |
| >> | 2 | ADVISOR-DASHBOARD-F-124 | Remove the adviser's own Move to Quarantined (T94 Done) | 3 | Merges with PS2's OFA-F-146 in one window; urgent single item |

Done 18-11: F-131, B-108, B-109 (merged 01be2667), B-107, F-125, F-126, F-127, F-128, F-129, F-130, F-123, F-082 (the shell run's 15 reds were raised and built in these).

## Hub

Awaiting the user: nothing.
Decided 18-11: OFA-F-016 is marked Done once OFA-F-148 merges (user).

Stack windows (one at a time): 1. shell, done 18-11 (F-144 parts 1+2 and B-130 PASS). 2. ps, running now (B-149, B-165 touched screens; O19 + compliance's 6 B-153 scenarios). 3. compliance (F-020, B-080 touched screens). 4. advisor (test-clock scenarios, touched screens). 5. ps2 (group 3, after its merge with advisor F-124 is near). Each checkout's first window starts make down, make test-data, make up.

0. Design sync 18-11 (f9cf27ce): O17, O18, O19, Q13 Done. The full board run is dropped (user, 18-11: functionality first; only impacted screens are checked). Waiting on Muhammed: O17/O18 heading rule (one line, or two lines allowed) and O19's wording (business to confirm).

2. Push waiting for the user: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin skills-test main`
