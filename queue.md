# Worker queue (the hub's direction)

The hub's current direction for each worker. The hub updates this file every time it directs or
adjusts a worker. Grp = group: items that run together, lowest first. X = not grouped yet.
**>>** = the item the worker is on now.

Updated: 19-11-2026 05:20

## Now: Lachlan's account (from 18-11-2026 20:10), running unsupervised

1. All four workers reopened on Lachlan's account and briefed. Each merges main first.
2. SHELL-F-144 part 2 is merged (8bce346d). Each checkout runs `make down` then `make test-data` once, in its own app turn. App turns go one at a time, scheduled by the hub: shell now.
3. PS2 opened 18-11 for group 3, code only.
4. Functionality first (user, 18-11): no full design checks; only the screens a change touches; look gaps wait for the end parity sweep.
5. Unsupervised: nobody answers prompts. The hub rules on workers' defaults; anything only the user may decide waits on its default (marked "awaiting user" in the rulings). One app stack at a time (memory).

## Shell (pointer: parked 22c4a425)

| # | Grp | ID | Item | Size | Status / depends on |
|---|-----|----|------|------|---------------------|
| 3 | X | (owed runs) | F-084/F-145 look runs (sweep); B-128 waits for a plugin to opt in | - | F-144 parts 1+2 and B-130 proved 18-11 |
| 2 | X | SHELL-B-022 | Table card stays full height when a search finds nothing (theme half) | 3 | Look gap: end parity sweep (functionality first) |
| 1 | X | (owed) | Next stack window: ofa-test-data-drop.ps1 -Leftovers; SHELL-B-132 runbook check | - | From the 18-11 full-run incident |
| 5 | 2 | SHELL-F-161 | Table toolkit Reset: optional host hook, so a plugin restores its own state (advisor's month) | 2 | Next shell group |
| 4 | X | SHELL-F-089 | Take off the temporary "Expired report" sidebar item | 1 | Blocked on OFA-F-056 (PS) |

Done 19-11: B-133 (1877cdd8, proof in PS's next window). Done 18-11: B-131, B-132 (799cc46e), F-144 part 2 (8bce346d), F-144 part 1, F-145, F-084, F-151, F-107, F-114, F-116, B-085, B-119, B-122, B-130, F-160.

## Portfolio Services (pointer: group 3, seed and month fixes: B-171, B-174, F-152, B-173, B-154)

| # | Grp | ID | Item | Size | Status / depends on |
|---|---|---|---|---|---|
| >> | 3 | OFA-B-171 | Seed a separate month at List built and one at Ready to issue (October untouched) for I2, I4, B1 | 3 | Seed |
| 2 | 3 | OFA-B-174 | Seed: about 30 more trail row types get fixed times | 3 | Seed, with B-171 |
| 3 | 3 | OFA-F-152 | Add an account to this month (approved triage row) | 3 | Sized by the hub 19-11; switches on B-170's B8-B11, B13 |
| 4 | 3 | OFA-B-173 | Move to cull list: Reason preselected "Account closed" and the "Add attachments (optional)" row, as the board draws | 2 | Cull list |
| 5 | 3 | OFA-B-154 | Test user: a State Manager seat that reaches every adviser | 2 | Seed |
| 6 | X | OFA-F-155 | Acceptance evidence per signatory | 2 | Held, for when COMPLIANCE-DASHBOARD-F-004 needs every signer |
| 14 | X | OFA-F-144 | Test data: a register-only data set over a shared warehouse | 3 | - |
| 17 | X | OFA-F-044 | The closure confirmation | 3 | OFA-F-010 (in progress) |

Done 19-11 (group 2, merged e88c4201): OFA-F-154, F-042, F-128, F-136, F-046; B-155, B-166, B-169, B-170, B-172 (B2/B14/B15 proof owed to the end sweep). Seed 2026-11-19.6.
Done 18-11 (group 1): OFA-B-152, OFA-B-149, OFA-F-084; then OFA-F-151, OFA-B-156. OFA-B-168 closed as a duplicate of OFA-B-150 (0 points). Group 1b merged ad2ebbd2: OFA-F-153, OFA-B-165, OFA-B-149, OFA-B-153, OFA-B-167, autoFocus follow-up, test fixes (seed 2026-11-19.4: run make test-data before the next make up).
Also queued in PS's handoff: triage rows OFA-B-157+ / OFA-F-152, G6.
Parity list (looks only, at the end): "Add a platform account" menu width (by-hand-dialog.html:72).

## Portfolio Services 2 (pointer: group 5, wording store and email switches)

Second PS checkout, approved by Muhammed 18-11: `../shaw-plugin-dashboard-portfolio-services-2`, branch `portfolio-services-2`, port offset 40, artboard port 8799.

| # | Grp | ID | Item | Size | Status / depends on |
|---|-----|----|------|------|---------------------|
| 1 | - | (setup) | In hub.json and opened 18-11 on Lachlan's account | - | Done |
| >> | 5 | OFA-B-176 | Flaky test: ComplianceSurfaceFindingReviewTests note order ties on CreatedUtc | 1 | First |
| 2 | 5 | OFA-F-080 | The wording store keeps a merge-field order | 2 | - |
| 3 | 5 | OFA-F-081 | The wording store can mark a version as brought in at go-live | 2 | - |
| 4 | 5 | OFA-F-118 | Every email the register sends has an on/off switch | 5 | Seed lines go to PS through the hub |

Done 19-11 (group 4, merged 12f68d74): OFA-S-001, OFA-F-145. Owner questions from S-001 are in the Hub section.
Done 19-11 (group 3, merged 0ab2aae7): OFA-F-146, F-147, F-148, F-149, F-150; OFA-F-016 Done. Seed 2026-11-19.5: every checkout runs make test-data before its next make up. Board Parity C163 owed to the end sweep. Release settings went to docs/deployment/release-runbook.md (4de24c89).

Collision rules (hub ruling 18-11):
1. Migration numbers: PS uses 0086-0099, PS2 uses 0100-0119.
2. Test data and seed: PS only. PS2 asks PS through the hub.
3. PMBook and handoff: each edits only its own items' rows; PS2 writes its notes in its own handoff section.
4. No `make test-data` or `make up` in PS2 until SHELL-F-144 part 2 lands (the OFA test database is still shared).
5. App turns: one at a time, scheduled by the hub.
6. PS2 skips the graph rebuild; PS does it. New IDs come from the hub.

## Compliance (pointer: group 3: PS2's group 3 is on main; merge main and build F-042, F-043, F-039 with B-069 now; merges after advisor)

| # | Grp | ID | Item | Size | Status / depends on |
|---|-----|----|------|------|---------------------|
| >> | 3 | COMPLIANCE-DASHBOARD-B-069 | Fees as at / Signing as at in the shared header (every page but Closed months and Wording) | 3 | OFA-F-153 on main; build now, commit with group 3 |
| 2 | 3 | COMPLIANCE-DASHBOARD-F-042 | Catch up with PS2's group 3: quarantine fixture and S20187 scenario (F-146); the retired adviser-quarantine email slot, no seeded quarantine emails, the State Manager read from Quarantine or Weekly emails, no Compliance Cc, board emails gone for TD-44/46/53 (F-147); the upload check reads IsRequired, adviser emails have 5 fields (F-148) | 5 | Joint window with PS2's group 3 and advisor F-124 |
| 3 | 3 | COMPLIANCE-DASHBOARD-F-043 | Show the OFA Team's own quarantine move (OfaTeamMoved) and its note | 1 | Joint window |
| 4 | 3 | COMPLIANCE-DASHBOARD-F-039 | Three Adviser emails on Wording; Quarantine reads them | 2 | OFA-F-147 (PS2 group 3); rows W26, Q12 |
| 5 | 3 | (owed) | Browser pass for the merged group: touched screens; F-044, F-020, B-081 scenarios | - | Next quiet window |
| 6 | 3 | (owed) | Clear the three @not-built-COMPLIANCE-DASHBOARD-F-040 tags once they pass in the stack window (PMBook line already done) | - | Stack window |
| 7 | 4 | COMPLIANCE-DASHBOARD-F-010 | Compliance adds notes | 3 | OFA-F-042 (PS group 2) |
| 8 | 4 | COMPLIANCE-DASHBOARD-F-029 | Account details: the Documents card's contents | 2 | OFA-F-128 (PS group 2) |
| 9 | X | COMPLIANCE-DASHBOARD-F-037 | .NET test speed-up, part 2 | 2 | OFA-F-144 (PS) |
| 10 | X | (owed) | Board Parity F-028/F-033/F-035/F-036; M-448120 on the board; B-048 re-measure | - | End parity sweep (user, 18-11) |
| 11 | X | (no ID) | Parity sweep, parity-backlog rows 1-8 | - | Looks only, at the end |

Done 18-11: F-028, F-030, F-031, F-032, F-033, F-034, F-035, F-036, F-040, B-079. Merged 4cf941b5: F-020, F-041, F-044, B-081, B-080 (browser pass owed).

## Advisor (pointer: group 4 building: F-080 part 1 next; F-124 and group 3 merged 4d30b61a)

| # | Grp | ID | Item | Size | Status / depends on |
|---|-----|----|------|------|---------------------|
| 2 | 1 | (item 5) | Test-clock scenarios; design check only on screens its merges touch | - | App turn after SHELL-F-144 part 2 |
| 8 | 4 | ADVISOR-DASHBOARD-F-071, F-080, F-093, F-100, F-075 (+ F-056 remainder) | The book and portfolio: every bucket a column, book levels, State Manager opens a book, personal-code accounts in tiles, every filter in every seat | ~21 | Group 4 (F-080 part 1 only: server reads and export; part 2, the levels screen, waits for board row B90) |
| 9 | X | F-047, F-057, F-059, F-060, F-048, F-049, F-117, F-118 | Blocked on Portfolio Services items (OFA-F-024, F-130, F-134..F-136, F-044, F-027, F-131, F-132) | - | Waiting |
| 10 | X | ADVISOR-DASHBOARD-B-104 | S-Account page's scroll test needs a fourth platform account | - | Unblocked: S20114 has four since OFA-B-150; P74 rerun moves to the end-of-build parity sweep |
| 11 | 5 | ADVISOR-DASHBOARD-F-138 | Tracking tab table gets the table tools, with its own export endpoint | 3 | Next group after group 4; depends on F-074 |

Done 19-11 (merged 4d30b61a): F-124, F-074, F-076 (shared value on the hub default, ADV-056 open), F-077, F-116. Business scenarios and parity owed to the end sweep.

Done 18-11: F-131, B-108, B-109 (merged 01be2667), B-107, F-125, F-126, F-127, F-128, F-129, F-130, F-123, F-082 (the shell run's 15 reds were raised and built in these).

## Hub

Awaiting the user: ADV-056 (advisor F-076). A closed account shares its platform with another account in the same S-Account; the warehouse keeps one value for both. Built: the shared value is counted once, with a note (a closure is valued at the month-end before it, so the 'split this month' case never happens).
Awaiting owners (from OFA-S-001, 19-11; PS items blocked until answered): DART admin: a DART document type for the signed renewal (OFA-F-138). Estate architect: the tool's own Agility credential, direct or an authenticated relay route (OFA-F-138). Business/infra: the URL that opens one DART document, and whether advisers and Compliance have DART logins (OFA-F-055, F-060 Open document, F-109). Two conditional items wait on these answers before they get IDs: an authenticated OFA route in DataConnectors.Agility; a tool endpoint that streams a document through Agility.
Decided 18-11: OFA-F-016 is marked Done once OFA-F-148 merges (user).

Stack windows (one at a time, quiet: no other worker's tests or builds): done 18-11: shell, ps (group 1b). Compliance's two tries killed for low memory (a stray full .NET run); its browser pass is owed. ps group 2 wave 1 done 19-11 (B-155, B-172 PASS; B-170 8 passed, 3 red on a shared find.ts step, shell fixing). ps2 19-11 killed by the low-memory guard too. Stack windows stopped: every owed board or browser pass (PS2 C163, compliance, F-040 tags, advisor B-104 P74, ps B-170 proof) moves to the end-of-build UI parity sweep. Merges go on Integration PASS. Each checkout's first window starts make down, make test-data, make up.

0. Design sync 18-11 (f9cf27ce): O17, O18, O19, Q13 Done. The full board run is dropped (user, 18-11: functionality first; only impacted screens are checked). Waiting on Muhammed: O17/O18 heading rule (one line, or two lines allowed) and O19's wording (business to confirm).

2. Push waiting for the user: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin skills-test main`
