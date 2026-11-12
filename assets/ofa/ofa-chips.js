/* C155: the chip sheet's data. The only place a status chip's colour is decided.
   ofa-chip-sheet.dc.html draws it; every OFA board reads its colours from it (assets/ofa/ofa-kit.js asks toneOf for every chip).
   A status a board needs that is not here is added here first, in the group the rule gives, and listed in the change log for review. */
(function () {
  const RULE = [
    "One rule decides every chip colour: colour shows severity and asks for attention.",
    "Teal: done or fine, nothing to do.",
    "Lime: early, keep an eye on it.",
    "Amber: in progress or waiting, needs attention soon.",
    "Orange: urgent, failed or refused, act now.",
    "Navy: ended or out of scope."
  ];
  // the columns: severity 0–4, then chips with no severity (labels, not statuses), drawn in the neutral look
  const HEADS = [["Teal", "#007B84", "#007B84"], ["Lime", "#A9B819", "#A9B819"], ["Amber", "#EE7601", "#EE7601"], ["Orange", "#E84810", "#E84810"], ["Navy", "#1F225E", "#1F225E"], ["No severity", "#F2F2F2", "#929292"]];
  // each severity's tone, as ofa-frame.css draws it (white text on every chip, C154)
  const TONE = ["pos", "lv1", "att", "neg", "msn", "q"];
  // C(label, severity, pages, added): a chip; S(label, colour, severity, pages): a bar or legend swatch. added = "C155" marks a status added for review
  const C = (label, sev, pages, added) => ({ label, sev, pages, chip: "true", sw: null, added: added || null });
  const S = (label, sw, sev, pages) => ({ label, sev, pages, chip: null, sw, added: null });
  const N = "C155";
  const GROUPS = [
    ["Master status", "OFA · AD · CD", [C("ACTIVE", 0, "OFA · AD · CD"), C("No OFA", 4, "OFA · AD · CD"), C("TERMINATED", 3, "OFA · AD · CD")]],
    ["Days to the Expiry Date", "Bars and legends · OFA Overview, Renewal tracker · AD Renewal tracker", [S("More than 90 days", "#007B84", 0, "OFA · AD"), S("61 to 90 days", "#A9B819", 1, "OFA · AD"), S("31 to 60 days", "#EE7601", 2, "OFA · AD"), S("0 to 30 days", "#E84810", 3, "OFA · AD"), S("Declined", "#1F225E", 4, "OFA · AD"), C("EXPIRED", 3, "OFA · AD · CD")]],
    ["Client closures, 10-day clock", "Bar and legend · OFA Overview", [S("7 to 10 days left", "#A9B819", 1, "OFA"), S("4 to 6 days left", "#EE7601", 2, "OFA"), S("1 to 3 days left", "#E84810", 3, "OFA")]],
    ["Follow-up ladder (S10, W37)", "Action required", [C("BEFORE FOLLOW-UP", 0, "AD · CD"), C("BEFORE THE FIRST FOLLOW-UP", 0, "AD · CD", N), C("ADVISER", 1, "AD · CD"), C("WITH THE ADVISER", 1, "AD · CD", N), C("STATE MANAGER", 2, "AD · CD"), C("WITH THE STATE MANAGER", 2, "AD · CD", N), C("COMPLIANCE / OFA TEAM", 3, "AD · CD"), C("WITH COMPLIANCE AND THE OFA TEAM", 3, "AD · CD", N)]],
    ["Signing", "Renewal notices and signatories", [C("FULLY SIGNED", 0, "OFA · AD · CD"), C("SIGNED", 0, "OFA · AD"), C("PAPER COPY UPLOADED", 0, "OFA · AD"), C("PARTLY SIGNED", 2, "OFA · AD · CD"), C("NOT SIGNED", 2, "OFA · AD · CD"), C("SENT ELECTRONICALLY", 2, "OFA · AD"), C("SIGNING REQUEST SENT", 2, "OFA", N), C("AWAITING SIGNED COPY", 2, "OFA", N), C("DECLINED", 3, "OFA · AD · CD"), C("EMAIL NOT DELIVERED", 3, "OFA · AD"), C("ADDRESS ISSUE", 3, "OFA · AD"), C("ADDRESS REQUESTED", 2, "AD", N), C("NOT SENT", 3, "OFA", N)]],
    ["Renewal", "Issuance status", [C("RENEWAL ACCEPTED", 0, "OFA · AD"), C("PENDING", 2, "OFA · AD · CD"), C("ACCEPTED", 0, "OFA · CD"), C("ISSUED", 0, "OFA"), C("GOES OUT", 0, "OFA", N), C("SENT", 2, "OFA", N), C("HELD BACK", 2, "OFA", N), C("TO CONFIRM", 2, "OFA", N)]],
    ["Questionnaire and quarantine", "The monthly cycle · OFA questionnaire · Quarantine", [C("DUE", 2, "AD"), C("WITH US", 1, "OFA"), C("QUARANTINED", 3, "OFA · AD · CD"), C("UNANSWERED", 3, "CD"), C("SUBMITTED", 0, "AD"), C("WAITING", 2, "OFA"), C("OFF THE RUN", 2, "OFA · CD"), C("READY TO SUBMIT", 2, "AD", N), C("CHANGE REQUEST RAISED", 2, "AD", N), C("NOT ANSWERED", 2, "AD", N), C("ACCEPTED BY THE OFA TEAM", 0, "AD", N)]],
    ["Initial OFA", "Initial OFAs", [C("SIGNED", 0, "OFA · AD"), C("FORM IN PROGRESS", 2, "AD"), C("ASKED FOR BY THE OFA TEAM", 2, "AD"), C("ASKED FOR", 2, "AD", N), C("WITH THE OFA TEAM", 2, "AD", N), C("WITH THE CLIENT", 2, "OFA · AD"), C("SENT TO THE CLIENT", 2, "AD", N), C("SENT", 2, "OFA", N), C("NEW", 0, "OFA", N), C("DECLINED", 3, "OFA · AD"), C("WITHDRAWN", 4, "OFA", N)]],
    ["Closure", "Closures · Expired report", [C("CLOCK RUNNING", 2, "AD", N), C("DUE TODAY", 3, "AD"), C("OVERDUE", 3, "AD"), C("PENDING OFA TERMINATION", 3, "AD"), C("WITH THE OFA TEAM", 3, "OFA · AD"), C("CONFIRMED OFF", 0, "OFA · AD · CD")]],
    ["Other", "Exceptions report · Compliance review · tables", [C("CHANGED", 2, "OFA"), C("SUBMITTED FOR REVIEW", 3, "OFA · CD"), C("INSURANCE", 0, "OFA"), C("NEW", 0, "OFA"), C("ADDED TO THE MASTER", 0, "OFA"), C("ARRANGEMENT ADDED", 0, "OFA", N), C("COMPLETED AND ADDED TO THE MASTER", 0, "OFA", N), C("REMOVED", 4, "OFA", N), C("DECEASED ESTATE", 4, "OFA · AD", N), C("DOES NOT EXIST YET", 2, "CD", N)]],
    ["Labels, not statuses", "Tags that name a thing, drawn in the neutral look", [C("THIS MONTH", 5, "OFA", N), C("EVERY MONTH", 5, "OFA", N), C("RECURS EVERY MONTH, BY DESIGN", 5, "OFA", N), C("CURRENT", 5, "CD", N), C("RETAIL SUPER", 5, "OFA", N), C("SEPARATE INITIAL OFA", 5, "OFA", N), C("CONSENT IN THE SOA", 5, "OFA", N), C("FROM COMPLII", 5, "AD", N), C("RECORDED IN COMPLII BEFORE GO-LIVE", 5, "OFA · AD", N), C("NOTE ON THE ACCOUNT", 5, "AD", N), C("NOTE ON THE EXCEPTIONS REPORT", 5, "CD", N), C("STATE MANAGER NOTE", 5, "AD", N)]]
  ];
  // colour is decided per group, not per word: a status in two groups keeps each group's colour. MAP holds a status's colour where a board names no group (the last group listing it); GMAP holds it per group
  const MAP = {}, GMAP = {}; GROUPS.forEach(g => g[2].forEach(it => { if (!it.chip) return; const k = it.label.toUpperCase().trim(); MAP[k] = it.sev; GMAP[g[0] + "|" + k] = it.sev; }));
  const miss = new Set();
  // the sheet's tone for a status, or null when the status is not on the sheet (it is then noted in window.__chipMiss for review)
  const toneOf = (txt, hint) => { const t = String(txt || "").toUpperCase().replace(/\s+/g, " ").trim(); if (!t) return null; const g = /^g:/.test(String(hint || "")) ? String(hint).slice(2) : null; if (g && GMAP[g + "|" + t] !== undefined) return TONE[GMAP[g + "|" + t]]; if (MAP[t] !== undefined) return TONE[MAP[t]]; if (/^ADDED TO THE MASTER|^COMPLETED AND ADDED/.test(t)) return TONE[0]; miss.add(t); window.__chipMiss = [...miss]; return null; };
  window.OFACHIPS = { RULE, HEADS, TONE, GROUPS, MAP, toneOf };
})();
