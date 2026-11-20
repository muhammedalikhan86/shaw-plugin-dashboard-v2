# Worker queue (the hub's direction)

The hub's current direction for each worker. The hub updates this file every time it directs or
adjusts a worker. Grp = group: items that run together, lowest first. X = not grouped yet.
**>>** = the item the worker is on now.

Updated: 2026-11-20 evening


## Where we stand (20-11, evening)

Release 1 = Shell, Portfolio Services (PS) and Compliance. Advisor's OFA section is release 2.

Built and on main:
1. The monthly cycle: fees from DataWarehouse.dbo.Fee (F-033; the Sync fees button hidden, B-186), job host and outbox sender (F-010), closure confirmation (F-044).
2. Settings, Import, Paper copies, Weekly reports (PS group 4).
3. Real Annature client via AnnatureInterfaceWebAPI, tested against the mock only (F-159); no double envelope on a retry (B-181).
4. Back Office requests and missing-details asks (F-027), insurance platforms (F-059), closures on master-list rows (F-078), Overview counters (F-056).
5. PS group 6: answer category (F-137), Initial OFA (F-108, F-109), DART filer test-locked to S110438 / MISC (F-138).
6. Shell is finished: column widths (F-164), gap fix (B-134), filter dialog (F-165), Expired report item removed (F-089).
8. The "- -" on both Renewal Trackers is fixed (OFA-B-188, 20-11 evening); restart the stack to see it.
7. Advisor group 10: wide filters and the Unfilled forecast ASF tick box (F-148), OFA Questionnaire column order (F-147).

Building now:
1. PS group 7: monthly cycle parity (24 gaps) and add-by-hand parity (9 gaps). The F-138 DART body fix is already merged (21608d24); the user retests once the stack is free. Then F-028 go-live prep.
2. PS2 group 13: OFA-F-161, the fee expected time for compliance's banner; then group 14: OFA-B-189, B-190 (the same blank platform in the closure email and Compliance Pending Renewals), F-162 (for compliance B-088).
3. Advisor group 11 (unparked by the user 20-11): F-145, F-146, F-142, F-049 (correction part), F-059, F-057.
4. Compliance group 6 (unparked by the user 20-11): B-083, plus all 4 parity gaps (B-084 fees-not-arrived banner, B-085, B-086, B-087) owed docs. B-088 (a reviewed fee-only record still opens) waits on PS2's OFA-F-162.
5. Shell holds the 4200 stack: a full parity run per component today (user, 20-11), findings queued for the weekend; the owed stack checks fold in.

Tests stay light (user, 20-11): affected tests only; no business, browser or stack runs except shell's stack checks.

DART: test filings only on S110438 with type MISC, one manual run the user starts. Retest after the PS group 7 merge.

Not in release 1:
- OFA-F-062 Load test at the February peak (3).
- OFA-F-032 Moving attachments to another store (4).
- OFA-F-131 / F-132 / F-133 Advisor-surface reads and Back Office requests (release 2 with advisor).
Blocked or later: OFA-F-158 (Luke's templates), OFA-F-155 (held), OFA-F-144 and B-179, B-182, B-183, B-184 (after go-live). Artboards still draw 240px free columns (looks wait).

Waiting on the user: push main; check in the DataWarehouse Fee.sql, SyncFee.sql and .sqlproj edit; Luke's Initial OFA envelope title and templates; the DART retest after the PS group 7 merge.

## Now: Lachlan's account (from 18-11-2026 20:10), running unsupervised

1. All four workers reopened on Lachlan's account and briefed. Each merges main first.
2. SHELL-F-144 part 2 is merged (8bce346d). Each checkout runs `make down` then `make test-data` once, in its own app turn. App turns go one at a time, scheduled by the hub: shell now.
3. PS2 opened 18-11 for group 3, code only.
4. Functionality first (user, 18-11): no full design checks; only the screens a change touches; look gaps wait for the end parity sweep.
6. Shortest path to deployment (Muhammed, 19-11): only functional work is scheduled from here. Look gaps (a misaligned button that works) wait. Placeholder email wording is fine to deploy (OFA-F-157; Luke's templates follow as OFA-F-158). Tests per group: affected unit and .NET tests once at Integration only; no Board Parity, no business-test or browser runs, no graph rebuild until the end.
7. Hub stack (4200) handed to shell by the user (20-11, evening) for its owed checks; no other worker uses a stack.
5. Unsupervised: nobody answers prompts. The hub rules on workers' defaults; anything only the user may decide waits on its default (marked "awaiting user" in the rulings). One app stack at a time (memory).

## Shell (pointer: holds the 4200 stack now (user, 20-11): full parity run per component, then the owed stack checks; stack stays up)

| # | Grp | ID | Item | Size | Status / depends on |
|---|-----|----|------|------|---------------------|
| | 5 | SHELL-F-166 | Table toolkit: a table's filter dialog takes its own title ("Filter the Anniversary List"), for PS's monthly cycle board | ?? | Raised 20-11 from PS group 7 parity |
| | 5 | SHELL-F-167 | Table toolkit: an embedded, untitled status-track variant, as the monthly cycle board draws it | ?? | Raised 20-11 from PS group 7 parity |
| | 5 | SHELL-B-135 | Frozen columns are see-through when a table scrolls sideways; make them opaque in every row state, platform-wide | ?? | User 20-11 (seen on Advisor's OFA Questionnaire) |
| | 5 | SHELL-F-168 | Table toolkit: the status track's fold state can be set by the page (two-way), for PS's Overview fold-all | ?? | For OFA-F-163 |
| 1 | 1 | SHELL-F-163 | Shared status track in libs/table-tools (lifted from advisor's ad-questionnaire-track) for PS's renewal tracker | 2 | Done ec81a788 (arch v148) |
| 3 | X | (owed runs) | F-084/F-145 look runs (sweep); B-128 waits for a plugin to opt in | - | F-144 parts 1+2 and B-130 proved 18-11 |
| 1 | X | (owed) | Next stack window: ofa-test-data-drop.ps1 -Leftovers; SHELL-B-132 runbook check | - | From the 18-11 full-run incident |

Done 20-11 (group 4, e1e0f796): F-089 (temporary Expired report sidebar item removed; /overview/counts e2e stub; ShippedManifestsTests green again). Owed next stack window: Playwright portfolio-services-plugin.spec.ts.
Done 20-11 (group 3, 74c491a1): F-165 (filter dialog wide field, one-field range, tick box).
Done 20-11 (group 2, 003196ab): F-164, B-134, B-022 (theme half; plugins opt in after go-live). Owed next stack window: layout crawl, compliance closed-months A20, manual column check, B-134 look on Advisor's OFA Questionnaire.
Done 19-11: F-161 (9f78ffae, no code: the hook exists since SHELL-F-074, [hostChanged] and (resetPressed)), B-133 (1877cdd8, proof in PS's next window). Done 18-11: B-131, B-132 (799cc46e), F-144 part 2 (8bce346d), F-144 part 1, F-145, F-084, F-151, F-107, F-114, F-116, B-085, B-119, B-122, B-130, F-160.

## Portfolio Services (pointer: group 7: monthly cycle + Initial OFAs add-by-hand parity, then F-028)

| # | Grp | ID | Item | Size | Status / depends on |
|---|---|---|---|---|---|
| 15 | X | OFA-F-160 | Remove the manual fee sync: the button, the frontend call and the endpoint that runs dbo.SyncFee | 2 | After go-live (Neeraj via Muhammed 20-11) |
| | - | OFA-F-138 | File the signed renewal document in DART: the real filer | 3 | Built, test-locked to S110438 / MISC (merged 20-11). Test filing 20-11 got a 502 (Agility refused); body fix merged 21608d24, retest pending. Live filing needs OFAREN |
| | 7 | OFA-F-138 fix (merged b7b2d75d, 20-11) | DART Add body as AccountClosureWorkflow sends it (no documentId or status; "S" with sentDate and deliveryMethod); show the relay's reason on a refusal | - | Then the user retests once |
| >> | 7 | OFA-B-191 | The monthly cycle against its boards (Muhammed 20-11): stepper rebuilt as drawn; table toolkit filter bar, status track and Filter dialog as on the Advisor Dashboard; other gaps fixed | ?? | Own-checkout stack, minimal processes; ahead of F-028 |
| >> | 7 | OFA-B-192 | Initial OFAs > Add an arrangement by hand: the expanding "Add a platform" section is misaligned; whole dialog against its board (Muhammed 20-11) | ?? | Same parity run as the monthly cycle |
| | 7 | OFA-F-163 | Overview: condensing one card condenses all; the Expired fee-not-yet-confirmed / Renewal notices not fully signed card gets a condense option | 3 | User 20-11; the two tracks join the shared fold once SHELL-F-168 lands |
| 7 | 7 | OFA-F-028 | Go-live prep: deploy parts with -PrepareOnly, to the IIS Deployment Standard | 5 | Release 1, last (Muhammed 20-11) |
| 6 | X | OFA-F-155 | Acceptance evidence per signatory | 2 | Held, for when COMPLIANCE-DASHBOARD-F-004 needs every signer |
| 14 | X | OFA-F-144 | Test data: a register-only data set over a shared warehouse | 3 | After go-live (Muhammed 19-11) |

Done 20-11 (group 6, merged with b81d9423): OFA-F-137, F-138 (test-locked, S110438/MISC), F-108, F-109 (migrations 0129, 0130, 0133, 0134; next PS 0135).
Done 20-11 (B-187): the exceptions check job only reads dbo.Fee.
Done 20-11 (B-186, merged on main): Sync fees hidden; SyncFee job monthly on the 1st at 06:00. F-030 closed as superseded.
Done 20-11 (F-010, merged 79301a79): OFA-F-010 job host and outbox sender, Shaw.WebJob 2.1.0 restored from the feed (sha512 checked).
Done 19-11 (F-033 alone, merged c8561358): OFA-F-033 (0128, ASF on the advisor and compliance lists). DBA steps in the release runbook.
Done 19-11 (group 4, merged f598194d): OFA-F-014 part 2, F-011, F-023, F-026 (0121-0127). Seed 2026-11-19.8. Manifest gets Import and Settings.
Done 19-11 (group 3, merged 9549205a): OFA-F-152, B-171, B-173, B-174, B-154, 0120 fix. Seed 2026-11-19.7. Browser proof waits until after go-live.
Done 19-11 (group 2, merged e88c4201): OFA-F-154, F-042, F-128, F-136, F-046; B-155, B-166, B-169, B-170, B-172 (B2/B14/B15 proof owed to the end sweep). Seed 2026-11-19.6.
Done 18-11 (group 1): OFA-B-152, OFA-B-149, OFA-F-084; then OFA-F-151, OFA-B-156. OFA-B-168 closed as a duplicate of OFA-B-150 (0 points). Group 1b merged ad2ebbd2: OFA-F-153, OFA-B-165, OFA-B-149, OFA-B-153, OFA-B-167, autoFocus follow-up, test fixes (seed 2026-11-19.4: run make test-data before the next make up).
Also queued in PS's handoff: triage rows OFA-B-157+ / OFA-F-152, G6.
Parity list (looks only, at the end): "Add a platform account" menu width (by-hand-dialog.html:72).

## Portfolio Services 2 (pointer: group 13: OFA-F-161; then group 14: OFA-B-189, B-190, F-162)

Second PS checkout, approved by Muhammed 18-11: `../shaw-plugin-dashboard-portfolio-services-2`, branch `portfolio-services-2`, port offset 40, artboard port 8799.

| # | Grp | ID | Item | Size | Status / depends on |
|---|-----|----|------|------|---------------------|
| 1 | - | (setup) | In hub.json and opened 18-11 on Lachlan's account | - | Done |
| >> | 13 | OFA-F-161 | compliance.SourceTimes gains FeesExpectedUtc (when today's fees were due), for the compliance fees-not-arrived banner | ?? | For COMPLIANCE-DASHBOARD-B-084; migration 0117 |
| | 14 | OFA-B-189 | Closure confirmation email: blank platform; resolve it the B-188 way (0113) | ?? | FUNC |
| | 14 | OFA-B-190 | Compliance Pending Renewals: platform and product the B-188 way (0108) | ?? | FUNC |
| | 14 | OFA-F-162 | compliance.FindingReview carries the finding's account details, so a reviewed finding-only record still opens | ?? | For COMPLIANCE-DASHBOARD-B-088; migration 0119 |
| 9 | X | OFA-B-183 | A notice held as "send outcome unknown": friendly label on the Issuance tab, and a release action | 2 | After go-live (rare case; a person checks Annature) |
| 10 | X | OFA-B-184 | A timeout on create-and-send can still send twice; needs a lookup route in AnnatureInterfaceWebAPI | 2 | After go-live |
| 8 | X | OFA-B-182 | The Fee status column is not in table-tools show/hide, sort or export | 1 | After go-live (looks) |
| 6 | X | OFA-F-158 | Replace every placeholder email with Luke's templates (merge tags as before) | 1 | Blocked on Luke's reply |
| 7 | X | OFA-B-179 | Expired report wrong when the State Manager email switch is off (row text + help text) | 1 | After go-live (switch is ON at go-live) |

Done 20-11 (group 13 part 1, merged 8cfef855): OFA-B-188 (0116; both Renewal Trackers and the export show platform and product).
Done 20-11 (group 12, merged 7ea4ce2a): OFA-F-078, F-056 (GET /overview/counts; O13 not built).
Done 20-11 (group 11, merged 321304ae): OFA-F-027 (0115), F-059, OFA-S-007 findings (parked with the DART pause).
Done 19-11 (group 10, merged 39d785af): OFA-F-044 (0113, closure confirmation; Emails:ClosureConfirmation on, placeholder wording), OFA-B-185 (0114, feeOffRecordedOn). Compliance wording test now eighteen.
Done 19-11 (group 9, merged dba3a113): OFA-B-181 (0112), B-180, OFA-ADR-011, F-023 runbook line.
Done 19-11 (group 8, merged 02adbab6): OFA-F-159, B-033 (already built by F-127, regression test), B-048, B-079. Dev Signing:BaseUrl = AnnatureInterfaceWebAPI on :5291.
Done 19-11 (group 7, merged 4e940c30): OFA-B-066, B-068 (0111); NoticeFieldMapTests fixed test-only. Seed lines (RegisterSeed $%ANNUAL_AMOUNT%, S20187 stop note) sent to PS.
Done 19-11 (group 6, merged f5e124ca): OFA-F-024, F-110, F-130, F-157, B-177, B-178 (0108-0110). Seed lines for F-024 sent to PS.
Done 19-11 (group 5, merged 42c43e19): OFA-B-176, F-080 (0105), F-081 (0106), F-118 (0107). Terminate/cull email labels go to the business (Hub section).
Done 19-11 (group 4, merged 12f68d74): OFA-S-001, OFA-F-145. Owner questions from S-001 are in the Hub section.
Done 19-11 (group 3, merged 0ab2aae7): OFA-F-146, F-147, F-148, F-149, F-150; OFA-F-016 Done. Seed 2026-11-19.5: every checkout runs make test-data before its next make up. Board Parity C163 owed to the end sweep. Release settings went to docs/deployment/release-runbook.md (4de24c89).

Collision rules (hub ruling 18-11):
1. Migration numbers: PS uses 0086-0099 then 0120-0139, PS2 uses 0100-0119. dbo.usp_ArrangementTermination_TellStateManager is PS's (0120 puts @ToldUtc back in after 0107); PS2 does not redefine it.
2. Test data and seed: PS only. PS2 asks PS through the hub.
3. PMBook and handoff: each edits only its own items' rows; PS2 writes its notes in its own handoff section.
4. No `make test-data` or `make up` in PS2 until SHELL-F-144 part 2 lands (the OFA test database is still shared).
5. App turns: one at a time, scheduled by the hub.
6. PS2 skips the graph rebuild; PS does it. New IDs come from the hub.

## Compliance (pointer: group 6: B-083, B-084, B-085, B-086, B-087, owed docs; B-088 waits on OFA-F-162; F-037 skipped, blocked on OFA-F-144)

| # | Grp | ID | Item | Size | Status / depends on |
|---|-----|----|------|------|---------------------|
| X | X | COMPLIANCE-DASHBOARD-B-083 | History and closed-month cull notes skip a note a trail step names (put-back, stop follow-ups) | 1 | After go-live (display only) |
| 5 | X | (owed) | Browser pass and Board Parity for groups 2 and 3: touched screens; F-044, F-020, B-081 and group 3 scenarios | - | End parity sweep |
| 6 | X | (owed) | Clear the three @not-built-COMPLIANCE-DASHBOARD-F-040 tags (arrangements.feature:260) once they pass | - | End parity sweep |
| 9 | X | COMPLIANCE-DASHBOARD-F-037 | .NET test speed-up, part 2 | 2 | OFA-F-144 (PS) |
| 10 | X | (owed) | Board Parity F-028/F-033/F-035/F-036; M-448120 on the board; B-048 re-measure | - | End parity sweep (user, 18-11) |
| 11 | X | (no ID) | Parity sweep, parity-backlog rows 1-8 | - | Looks only, at the end |

Done 19-11 (group 5, merged 06cea28e): F-038, F-045. Owed to the end sweep: Board Parity groups 3-5, business scenarios (F-010, S20114, F-028 OFA PDF with the new wordsIn), component-wide business run for the wordsIn change, F-040 tag clear, runbook counts, closed-months tag recount, architecture §10 Quarantine status.
Done 19-11 (group 4, merged a813a521): F-010, F-029.
Done 19-11 (group 3, merged 7c6979ec): B-069, F-042, F-039, F-043.
Done 18-11: F-028, F-030, F-031, F-032, F-033, F-034, F-035, F-036, F-040, B-079. Merged 4cf941b5: F-020, F-041, F-044, B-081, B-080 (browser pass owed).

## Advisor (pointer: group 11, serial: F-145, F-146, F-142, F-049 (correction part), F-059, F-057; skipped as blocked: F-141, F-143, F-144, F-117, F-118)

| # | Grp | ID | Item | Size | Status / depends on |
|---|-----|----|------|------|---------------------|
| | 11 | ADVISOR-DASHBOARD-F-149 | Gross Revenue and Funds Under Advice cards removed from the Landing Page (user 20-11) | 1 | Code merged 8dbbf66d (hub helper); advisor records the row, fixes arch :317-318/:322, drops the landing figures load (app.ts:342) |
| | 11 | ADVISOR-DASHBOARD-F-150 | OFA Questionnaire: Platform, Platform account number, Product, S-Account and Account name hidden by default (the consolidated columns carry them) | ?? | User 20-11 |
| | 8 | ADVISOR-DASHBOARD-F-147 | OFA Questionnaire column order (Muhammed's test 20-11): frozen Adviser code, S-Account, Account name, Platform, Platform account number, Product, Platform accounts; then read-only Status, Reference Date, past 12 months ASF (excl GST); then editable No OFA obligation, Payment frequency, Next reference date, Forecast ASF (excl GST), Salutation, Email, the questions, Notes | 2 | Done 20-11 (merged) |
| | 10 | ADVISOR-DASHBOARD-B-113 | Renewal Tracker: Platform accounts column shows "- -" instead of platform and product | ?? | Fixed by OFA-B-188 (8cfef855); marked at group 11 Finalization |
| 1d | X | ADVISOR-DASHBOARD-F-145 | Hide "Fee turned off" once recorded: feeOffAccounts reads feeOffRecordedOn from the renewal tracker read | 1 | After OFA-B-185 lands; with the next advisor group |
| 1e | X | ADVISOR-DASHBOARD-F-146 | Closures: wire the closure confirmation to advisor.usp_ClosureConfirmation_Read / _Send / _RecordSentByAdviser (OFA-F-044, PS architecture §3.3) | 3 | With the next advisor group (release 2) |
| 1c | X | (SHELL-F-163 follow-up) | Swap ad-questionnaire-track for the shared track | 1 | Queued; after go-live (looks only) |
| 1b | X | F-141, F-059, F-142, F-143, F-144 | Arrangement record, follow-up email, history events, OFA timeline (split from F-047) | 17 | Queued; blocked on PS reads / design; don't start until Muhammed says |
| 2 | X | F-049, F-057, F-117, F-118 | OFA section: blocked on Portfolio Services items (OFA-F-024, F-027, F-044, F-131, F-132) | - | Queued; don't start until Muhammed says |

Not built (Muhammed 19-11, the Advisor Dashboard and Book of Business are hidden): F-080 part 2, F-135, row B91.

Done 19-11 (group 7, merged 94193061): ADVISOR-DASHBOARD-F-047, F-060, F-048, F-140, F-050 part 4, OFA-B-154 twins. End sweep owed (business and browser runs for groups 3-7, M20, F-103, F-093 B8, F-046 parity, F-124 T94, F-133 timing, npm audit).
Done 19-11 (group 6, merged 02b5e9b8): F-103, B-051, F-091, B-104. Owed to the end sweep: business and browser runs for groups 3 to 6, F-103 "All 6 advisers", F-093 @review-B8, F-046 parity re-run.
Done 19-11 (group 5, merged 79b0181d): F-138, F-134, F-136, F-137.
Done 19-11 (group 4, merged 2a74c4ea): F-100 part 1, F-133, F-071, F-093 part 2, F-056, F-075, F-080 part 1. Owed to the end sweep: business and browser runs for groups 3 and 4, F-124 @review-T94, B-104 P74, F-133 live timing.
Done 19-11 (merged 4d30b61a): F-124, F-074, F-076 (shared value on the hub default, ADV-056 open), F-077, F-116. Business scenarios and parity owed to the end sweep.

Done 18-11: F-131, B-108, B-109 (merged 01be2667), B-107, F-125, F-126, F-127, F-128, F-129, F-130, F-123, F-082 (the shell run's 15 reds were raised and built in these).

## Hub


- OFA-F-159 merged 19-11: `make up` signing now needs AnnatureInterfaceWebAPI running on :5291 (empty Signing:BaseUrl gives the stub).
- OFA-F-030: AnnatureInterfaceWebAPI (git, sic2tfs1 Web APIs) built with a mock Annature; create and send in one call. Pushed by Muhammed 19-11; PS builds OFA-F-159 in group 5.
- Release 1 (Muhammed 19-11): Shell, Portfolio Services, Compliance. Advisor OFA features in release 2. After go-live: OFA-F-032, F-062, F-059, F-144, every LOOK and TEST bug. In release 1: OFA-F-138 DART filing (blocked on the owners). FUNC bugs in release 1: OFA-B-068, B-033, B-066, B-079, B-048; the rest after go-live.

- Go-live addresses supplied 19-11 (rulings log); PS sets them in appsettings.Production.json.
- Shaw.WebJob 2.1.0 and Shaw.Word 2.1.0 published by Muhammed 19-11. OFA-F-033: dbo.Fee and dbo.SyncFee written in the DataWarehouse .sqlproj; Muhammed to check in; the DBA deploys and grants.
- Waiting on Luke (Muhammed is sending one email for all of them): templates for the 8 emails without real wording, plus the Initial OFA envelope title (Annature). Placeholders meanwhile (OFA-F-157); OFA-F-158 swaps them in.

Awaiting the user: ADV-056 (advisor F-076). A closed account shares its platform with another account in the same S-Account; the warehouse keeps one value for both. Built: the shared value is counted once, with a note (a closure is valued at the month-end before it, so the 'split this month' case never happens).
Awaiting owners (from OFA-S-001, 19-11; PS items blocked until answered): DART admin: a DART document type for the signed renewal (OFA-F-138). Estate architect: the tool's own Agility credential, direct or an authenticated relay route (OFA-F-138). Business/infra: the URL that opens one DART document, and whether advisers and Compliance have DART logins (OFA-F-055, F-060 Open document, F-109). Two conditional items wait on these answers before they get IDs: an authenticated OFA route in DataConnectors.Agility; a tool endpoint that streams a document through Agility.
Decided 18-11: OFA-F-016 is marked Done once OFA-F-148 merges (user).

Stack windows (one at a time, quiet: no other worker's tests or builds): done 18-11: shell, ps (group 1b). Compliance's two tries killed for low memory (a stray full .NET run); its browser pass is owed. ps group 2 wave 1 done 19-11 (B-155, B-172 PASS; B-170 8 passed, 3 red on a shared find.ts step, shell fixing). ps2 19-11 killed by the low-memory guard too. Stack windows stopped: every owed board or browser pass (PS2 C163, compliance, F-040 tags, advisor B-104 P74, ps B-170 proof) moves to the end-of-build UI parity sweep. Merges go on Integration PASS. Each checkout's first window starts make down, make test-data, make up.

0. Design sync 18-11 (f9cf27ce): O17, O18, O19, Q13 Done. The full board run is dropped (user, 18-11: functionality first; only impacted screens are checked). Waiting on Muhammed: O17/O18 heading rule (one line, or two lines allowed) and O19's wording (business to confirm).

2. Push waiting for the user: `git -C C:/Users/muhammedali.khan/source/repos/shaw-plugin-dashboard push origin skills-test main`
