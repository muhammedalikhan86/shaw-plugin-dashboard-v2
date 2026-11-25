# Worker queue

What each worker does next, in order. Forward view only: finished work leaves this file; the back view is the status page's update log.
**>>** = being worked on now. Grp = group, lowest runs first; X = waiting, grouped once it is free.

Updated: 2026-11-25 15:44

## Now

1. Code freeze 2026-12-11. Everything still to build lands before it.
2. Account switch to lachlan at 16:30 today: every worker parks by 16:20; the new hub resumes them on lachlan.
3. After the switch, overnight and unsupervised, one machine window at a time, the hub merging on delegation: (a) Shell fixes table-fit, then Compliance finishes P2+P3; PS seeds the F-143 follow-up steps; (b) PS2 group D review and tests; (c) Advisor's warehouse switch (F-167, F-168, then review and tests); (d) PS group 65's board run; (e) last, alone on the machine: Portfolio Services' full parity check (never run; about 1 to 1.5 hours), findings with screenshot pairs on the parity page. Morning, with Muhammed: he picks from the parity page; the picks go to the designer as design rows; then sync.
4. Go-live gate (before prod): only the OFA database reads DataWarehouse and PowerBI; the APIs keep no DW/PBI connection strings. PS2's procedures are on main (46ed7123). Left: PS2 group D, Advisor's warehouse switch. Plan: docs/hub/analysis/dw-procedures-plan.md.
5. Work order: UAT bugs from the OFA Team, then what helps testers, then other functional items, then look and feel. No idle worker: a blocked worker takes its next unblocked item.
6. Machine: one stack or .NET window at a time. Now: Compliance. Next: whichever of PS2 group D or Advisor says "code ready" first. Then PS group 65's board run. Others write code only meanwhile.
7. Parity sweep, after those windows: each worker runs the disparity-checker on its own component (Compliance, Portfolio Services, Advisor, Shell), with small actual-vs-expected screenshot pairs under docs/design/screenshots/parity/<component>/ and a breadcrumb per finding. The hub gathers them on one page for Muhammed.
8. After each test-site deploy: update-uat-status.ps1, then update-uat-data.ps1 in v2, then commit and push.

## Compliance (pointer: parked 0887b391; P2+P3 held: waits on the shell table-fit fix; resume = make up, Quarantine layout at 1920, Expired/Confirmed filter tests, finalize)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | P2 | B-152, B-153, B117 | Quarantine Extension and Last prompt minWidth 250 (grow up to 500); fix the 7 layout reds | Look and Feel | ?? | In its window |
| >> | P3 | OI-002 | Business scenarios: Arrangements Empty, Loading, Data unavailable; Wording Loading, Failed | Functional | ?? | In its window |
| | X | B109-B111 | Expired platform columns, Arrangements filter State, Wording fields gap: build right, boards change | Look and Feel | - | Design rows, later |
| | X | W44 | Wording page no-version slot wording (actual send is the built-in email) | Look and Feel | - | Design row, next round; business approves words |

## Portfolio Services 2 (pointer: parked 6d26e448: group D code done, untested; next = its window)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | D | OFA-F-226 | Drop DataWarehouse from PS Production and UAT settings, plus leftovers (DatabaseName key, ConnectionStrings comments, unused WarehouseSql) | Functional | 3 | Building |
| | P2 | O47, OFA-F-206 | Initial OFA prepare: tick the signers, set the salutation | Functional | ?? | Waiting on the designer (O47) |
| | 40 | - | End sweep: test data for migrations 0201-0203; look at the Wording page | Functional | 0 | End sweep |
| | X | OFA-F-120 | Word converter: Shaw.Word uploads to an empty drive ID | Functional | - | Waiting on IT for a drive |
| | X | OFA-F-032 | Attachment mover | Functional | - | Your SharePoint live check, after go-live |

## Advisor (pointer: parked 376f3006: F-166 + F-169 code done, untested; next = F-167, F-168, then one .NET + Jest window)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | WS | F-166 | Warehouse readers a-1..a-8 read through OFA-db procedures | Functional | 5 | Building |
| >> | WS | F-169 | S-Account card: "ASF (excl. GST) · past 12 months" column | Functional | 1 | Building |
| | WS | F-167 | PowerBI readers a-9..a-20 read through OFA-db procedures | Functional | 5 | After F-166 |
| | WS | F-168 | Connection strings go; UAT money empty; Development reads live (SHELL-ADR-021) | Functional | 3 | After F-167 |
| | WS | B-159 | Short real business run (proves the B116 runtime skip) | Functional | 0 | In its window |
| | X | - | Design rows: "Done for the month" on a filtered month; questionnaire row height (build right) | Look and Feel | 0 | Row IDs after the group |
| | X | - | Parity backlog: loading bar sits low; dead CSS line in app.scss; close PM-113 on paper | Look and Feel | 1 | Parity sweep |
| | X | B107, B108 | Paginator on one page; "Reported by" without team: build right, boards change | Look and Feel | - | Design rows, later |
| | X | B101 | Signatory address link: tip and re-send when the email failed | Look and Feel | - | Design row, next round |
| | X | F-144 | The OFA timeline | Functional | 6 | Waiting on Luke |

## Portfolio Services (pointer: parked 0642877d; next = group 65 board run in its window, then finalize)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 65 | OFA-B-098, B-107, B-015 | Exceptions report and Anniversary list at 1440/1680/1920: Adviser and Product on one line, S-Account never cut, side-by-side parity | Look and Feel | - | Built; board run in its window |
| | 66 | - | Seed OFA-F-143 follow-up steps in RegisterSeed.cs (Compliance's "latest step is a tip on the chip" scenario needs one, e.g. "Adviser told · Owen Pritchard · 06-10-2026 15:30") | Functional | 1 | Overnight; unblocks a Compliance scenario |
| | X | - | Switch on the two @review-O48 Outbox scenarios | Functional | 0 | Waiting on O48 |
| | X | OFA-F-141 | Correct a product, logged in the trail (plus migration 0222) | Functional | - | Waiting on Luke (a or b) |
| | X | OFA-F-138 | File the signed renewal in DART; real signing-status reader | Functional | 3 | Waiting on your DART retest |
| | X | OFA-F-062 | February-peak load test | Functional | - | End sweep |
| | X | - | Browser checks owed from groups 36, 45, 49 (Settings report preview, B-233, B-235, B-237, B-241, F-189) | Look and Feel | 0 | End sweep |
| | X | - | Parity backlog: O38 checkbox colour and gap; OFA-F-108 dialog frame | Look and Feel | - | End sweep |
| | X | - | Rename local databases to `ShawPortal-OngoingFeeArrangements-*` | Functional | - | When Muhammed says |

## Shell (pointer: parked 99e7be5d; next = the table-fit fix)

| # | Grp | ID | Item | Category | Size | Status |
|---|---|---|---|---|---|---|
| >> | 1 | (raise SHELL-B) | Table-fit: a free-width column can end 4px over its cap (Compliance Quarantine "Extension" 504px > 500px at 1920px, Keep open off; libs/table-tools table-fit.ts) | Look and Feel | ?? | Overnight; Compliance P2 waits on it |
| | X | Shell 2 | Filter dialog copies the column's info tip onto the ASF fields | Look and Feel | - | Later (Muhammed) |
| | X | B103-B106 | User card seat line, "Seconds" label, Act As gap, empty notifications: build right, boards change | Look and Feel | - | Design rows, later |

## Hub

1. Waiting on Muhammed: rerun scripts/uat/grant-misc-rights.sql on Misc at the next deploy (datawarehouse_gridpay added); the OFA-S-005 spike rerun on the unredacted spreadsheet; the DART retest; DART's open-a-document URL and staff DART logins (OFA-S-001); PS's 8 production settings.
2. Waiting on Luke: OFA-F-141 (a or b; a releases migration 0222); Advisor F-144.
3. Hub items: OI-001 shared make-check script; OI-009 cause in shared find.ts.
4. Next test-site deploy: PS group 58 (notices) and deploy 2 (SHELL-F-184, rollback rehearsal). Deployment and testing work is the REL- stack in `docs/leftovers.md`.
5. With the stack up, after OFA-F-202: load the wording starters (`docs/stash/OFA Workflow/references/Wording/Starters/`) into Muhammed's local database.
6. Parity round 2: when Muhammed says, after every P1 fix. Parity page: https://claude.ai/artifact/HJAEsCkiTKGybrYJPW54AU
7. End sweep, last: after the designer's work is synced, built and hand-tested; every parity check.
