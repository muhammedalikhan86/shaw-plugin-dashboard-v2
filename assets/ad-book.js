/* The advisor's book: invented sample data for the Portfolio view (Advisor-Portfolio.dc.html). S-Account → client → platform account → product. */
(function () {
  let seed = 20261007; const r = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  const pick = (a) => a[Math.floor(r() * a.length)];
  const MN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const M24 = Array.from({ length: 24 }, (_, i) => { const m = (9 + i) % 12, y = 2024 + Math.floor((9 + i) / 12); return { short: MN[m].slice(0, 3) + " " + String(y).slice(2), long: MN[m] + " " + y }; });
  const BRANCH = { "Anna Moretti": "Melbourne", "Ben Okafor": "Brisbane", "Chloe Huang": "Sydney", "Diego Reyes": "Parramatta", "Elena Sandoval": "Melbourne", "Filip Kowalski": "Adelaide", "Grace Haddad": "Sydney", "Hugh Brennan": "Perth", "James Doyle": "Brisbane", "Karen Patel": "Sydney", "Liam Fitzgerald": "Melbourne", "Michael Osei": "Parramatta", "Ravi Naidoo": "Sydney", "Rhea Lindqvist": "Adelaide", "Sade Abara": "Perth", "Tomoko Nakamura": "Sydney", "Isabel Ferreira": "Sydney", "Hannah Ilves": "Melbourne" };
  const FN = ["Alder", "Juno", "Margaret", "Peter", "Rowena", "Hector", "Vesna", "Amara", "Noor", "Tamsin", "Lachlan", "Imogen", "Corbin", "Delia", "Ezra", "Fern", "Greer", "Hugo", "Iris", "Jude", "Kit", "Maeve", "Rory", "Saoirse", "Ambrose", "Marisol", "Peregrine", "Lucinda", "Wren", "Orla", "Quinn", "Rhys", "Hollis", "Marigold", "Petra", "Calder", "Mira", "Benno", "Clara", "Teodor", "Ngaio", "Yusra", "Okon", "Priyanka", "Soren", "Talia", "Wilhelmina", "Xavier"];
  const LN = ["Pask", "Teague", "Okonkwo", "Strand", "Vane", "Lomax", "Hale", "Ingram", "Brack", "Corrigan", "Kealy", "Tull", "Quint", "Wu", "Hartigan", "Abadi", "Rourke", "Pryor", "Weller", "Burns", "Haddad", "Lind", "Oduya", "Balogun", "Kralj", "Quist", "Fairlie", "Dellow", "Grant", "Pye", "Frost", "Lindqvist", "Okafor", "Ruiz", "Vasquez", "Harrowgate", "Ashdown", "Merriweather", "Thorne", "Calloway"];
  const ORG = ["Holdings Pty Ltd", "Family Trust", "Super Fund", "Investments Pty Ltd"];
  const PLAT = [
    { k: "MW", n: "Macquarie Wrap", no: () => "M-44" + (1000 + Math.floor(r() * 8999)), prods: ["Macquarie Investment Consolidator II - Elevate", "Macquarie Super Consolidator II - Elevate", "Wrap Cash Account"], ofa: true, w: 4 },
    { k: "HUB", n: "HUB24", no: () => "H-90" + (100 + Math.floor(r() * 899)), prods: ["HUB24 Invest", "HUB24 Super"], ofa: true, w: 3 },
    { k: "NW", n: "Netwealth", no: () => "NW-5" + (4000 + Math.floor(r() * 5999)), prods: ["Netwealth - Investment", "Netwealth Super Accelerator"], ofa: true, w: 3 },
    { k: "SMA", n: "Shaw Managed Accounts", no: () => "7702-" + (100 + Math.floor(r() * 899)), prods: ["SP0001 · Shaw Balanced", "SP0002 · Shaw Growth", "SP0004 · Shaw Income"], ofa: true, w: 3 },
    { k: "CHESS", n: "CHESS Registered", no: () => "HIN 00" + (81000000 + Math.floor(r() * 8999999)), prods: ["Domestic equities", "Listed fixed income"], ofa: false, w: 4 },
    { k: "CMA", n: "Cash Management Account", no: () => "CMA " + (4410000 + Math.floor(r() * 89999)), prods: ["Cash Management Account"], ofa: false, w: 2 },
    { k: "LEV", n: "Leveraged Equities", no: () => "LE-" + (220000 + Math.floor(r() * 77999)), prods: ["Margin loan"], ofa: false, w: 1 },
  ];
  const WPL = PLAT.flatMap(p => Array(p.w).fill(p));
  const p2 = (n) => String(n).padStart(2, "0");
  const dstr = (d) => p2(d.getUTCDate()) + "-" + p2(d.getUTCMonth() + 1) + "-" + d.getUTCFullYear();
  const addD = (s, n) => { const [d, m, y] = s.split("-").map(Number), x = new Date(Date.UTC(y, m - 1, d + n)); return dstr(x); };
  const rdIn = (y, m) => p2(1 + Math.floor(r() * 28)) + "-" + p2(m) + "-" + y;
  const ofaFor = (pl) => {
    if (!pl.ofa) return { kind: "—", st: null, rd: "—", exp: "—", due: "—" };
    const x = r();
    if (x < 0.1) return { kind: "No OFA", st: null, rd: "—", exp: "—", due: "—" };
    if (x < 0.14) return { kind: "—", st: null, rd: "—", exp: "—", due: "—" };
    const y = r();
    if (y < 0.08) { const rd = rdIn(2026, 3 + Math.floor(r() * 2)); return { kind: "Arrangement", st: "EXPIRED", rd, exp: addD(rd, 150), due: "—" }; }
    if (y < 0.22) { const rd = rdIn(2026, 9); return { kind: "Arrangement", st: "PENDING", rd, exp: addD(rd, 150), due: "This month" }; }
    const mo = Math.floor(r() * 11), m = (9 + mo) % 12 + 1, yy = 2026 + (9 + mo >= 12 ? 1 : 0), rd = rdIn(yy, m), cyc = M24[0] && (MN[m % 12] + " " + (m === 12 ? yy + 1 : yy));
    return { kind: "Arrangement", st: "ACCEPTED", rd, exp: addD(rd, 150), due: cyc };
  };
  let sn = 30100;
  const book = (adv, n) => {
    const out = [];
    for (let i = 0; i < n; i++) {
      const e = r(), ent = e < 0.55 ? "Individual" : e < 0.75 ? "Joint" : e < 0.86 ? "Company" : e < 0.95 ? "Trust" : "SMSF";
      const l1 = pick(LN), f1 = pick(FN), f2 = pick(FN);
      const client = ent === "Individual" ? f1 + " " + l1 : ent === "Joint" ? f1 + " & " + f2 + " " + l1 : l1 + " " + (ent === "Company" ? ORG[0] : ent === "Trust" ? ORG[1] : ORG[2]);
      const nPa = r() < 0.55 ? 1 : r() < 0.8 ? 2 : 3, used = new Set(), pas = [];
      for (let j = 0; j < nPa; j++) { let pl = pick(WPL), g = 0; while (used.has(pl.k) && g++ < 8) pl = pick(WPL); used.add(pl.k);
        const nPr = Math.min(pl.prods.length, r() < 0.6 ? 1 : 2), prods = pl.prods.slice(0, nPr).map(nm => { const fua = Math.round(Math.exp(10 + r() * 4.2)); return { nm, fua, nnm: Array.from({ length: 24 }, () => r() < 0.3 ? Math.round(fua * (r() < 0.8 ? 0.004 + r() * 0.03 : -(0.002 + r() * 0.02))) : 0) }; });
        pas.push({ plat: pl.n, no: pl.no(), prods, ofa: ofaFor(pl) }); }
      out.push({ s: "S" + (sn += 1 + Math.floor(r() * 6)), client, ent, adv, br: BRANCH[adv] || "Sydney", pas });
    }
    return out;
  };
  const ADV16 = ["Anna Moretti", "Ben Okafor", "Chloe Huang", "Diego Reyes", "Elena Sandoval", "Filip Kowalski", "Grace Haddad", "Hugh Brennan", "James Doyle", "Karen Patel", "Liam Fitzgerald", "Michael Osei", "Ravi Naidoo", "Rhea Lindqvist", "Sade Abara", "Tomoko Nakamura"];
  const BOOKS = {};
  ADV16.forEach(a => { BOOKS[a] = book(a, a === "Ravi Naidoo" ? 150 : 40); });
  BOOKS["Isabel Ferreira"] = book("Isabel Ferreira", 60);
  // One client with three S-Accounts (Ravi Naidoo's book)
  const MO = "Margaret Okonkwo", rv = BOOKS["Ravi Naidoo"];
  [3, 17, 42].forEach((ix, k) => { rv[ix].client = MO; rv[ix].ent = "Individual"; });
  rv[17].pas = [{ plat: "Macquarie Wrap", no: "M-448210", prods: [{ nm: "Macquarie Super Consolidator II - Elevate", fua: 612400, nnm: rv[17].pas[0].prods[0].nnm }], ofa: { kind: "Arrangement", st: "ACCEPTED", rd: "14-02-2027", exp: "14-07-2027", due: "March 2027" } }];
  rv[42].pas = [{ plat: "Shaw Managed Accounts", no: "7702-618", prods: [{ nm: "SP0002 · Shaw Growth", fua: 284900, nnm: rv[42].pas[0].prods[0].nnm }], ofa: { kind: "Arrangement", st: "PENDING", rd: "22-09-2026", exp: "19-02-2027", due: "This month" } }];
  // An insurance account: No OFA, like any No OFA account
  rv[8].pas.push({ plat: "TAL Life", no: "TL-2271840", prods: [{ nm: "TAL Accelerated Protection", fua: 0, nnm: Array(24).fill(0) }], ofa: { kind: "No OFA", st: null, rd: "—", exp: "—", due: "—" } });
  // B9–B11: the firm's Type and Class codes, opened date, product types, SMA models, master status per platform account
  const TYPES = ["RETAIL", "INST", "NOMINE"], CLS = ["EXECUT", "SOPHCL", "RETAIL", "INSTO", "EXECFP", "DISCCL"], MODELS = ["SP0002", "CASH", "SP0001", "SP0004", "TP0001", "TP0005", "TP0007"];
  const TYOF = (pl, nm) => pl === "CHESS Registered" || pl === "Leveraged Equities" ? "CHESS" : nm === "Cash Management Account" || nm === "Wrap Cash Account" ? "CMA" : pl === "Shaw Managed Accounts" ? "SMA" : nm === "International shares" ? "International" : null;
  Object.values(BOOKS).forEach(bb => bb.forEach(x => {
    x.type = x.ent === "Company" || x.ent === "Trust" || x.ent === "SMSF" ? (r() < 0.6 ? "INST" : "NOMINE") : (r() < 0.9 ? "RETAIL" : "NOMINE");
    x.cls = x.type === "INST" ? (r() < 0.6 ? "INSTO" : "DISCCL") : pick(CLS);
    x.opened = p2(1 + Math.floor(r() * 28)) + "-" + p2(1 + Math.floor(r() * 12)) + "-" + (2008 + Math.floor(r() * 18));
    x.pas.forEach(pa => {
      if ((pa.plat === "Macquarie Wrap" || pa.plat === "HUB24") && r() < 0.45) { const fua = Math.round(Math.exp(10 + r() * 3)); pa.prods.push({ nm: "International shares", fua, nnm: Array.from({ length: 24 }, () => r() < 0.3 ? Math.round(fua * (r() < 0.75 ? 0.004 + r() * 0.03 : -(0.002 + r() * 0.02))) : 0) }); }
      pa.prods.forEach(q => { q.ty = TYOF(pa.plat, q.nm); });
      const f = pa.ofa; if (f.kind === "Arrangement") { if (r() < 0.05) { f.ms = "TERMINATED"; f.st = "TERMINATED"; f.due = "—"; } else f.ms = "ACTIVE"; } else f.ms = f.kind === "No OFA" ? "No OFA" : "No arrangement";
      if (pa.plat === "Shaw Managed Accounts") { const n = r() < 0.5 ? 1 : r() < 0.75 ? 2 : 3, ms = [], used = new Set(); for (let i = 0; i < n; i++) { let c = pick(MODELS), g = 0; while (used.has(c) && g++ < 9) c = pick(MODELS); used.add(c); ms.push(c); } const ws = ms.map(() => 0.2 + r()), wt = ws.reduce((t, v) => t + v, 0); let acc = 0; pa.models = ms.map((c, i) => { const w = i === ms.length - 1 ? 100 - acc : Math.round(ws[i] / wt * 100); acc += w; return { code: c, w }; }); }
    });
  }));
  [[5, "S18544", "Greer Hale", "Individual", { plat: "Shaw Managed Accounts", no: "7702-245", prods: [{ nm: "SP0001 · Shaw Balanced", fua: 412300, nnm: Array(24).fill(0), ty: "SMA" }], models: [{ code: "SP0001", w: 70 }, { code: "CASH", w: 30 }], ofa: { kind: "Arrangement", st: "ACCEPTED", rd: "11-08-2027", exp: "08-01-2028", due: "August 2027", ms: "ACTIVE" } }],
   [11, "S18502", "Delia Strand", "Individual", { plat: "Netwealth", no: "NW-55307", prods: [{ nm: "Netwealth - Investment", fua: 268900, nnm: Array(24).fill(0), ty: null }], ofa: { kind: "Arrangement", st: "ACCEPTED", rd: "03-07-2027", exp: "30-11-2027", due: "July 2027", ms: "ACTIVE" } }],
   [23, "S18450", "Alder & Juno Pask", "Joint", { plat: "Macquarie Wrap", no: "M-441204", prods: [{ nm: "Macquarie Investment Consolidator II - Elevate", fua: 731500, nnm: Array(24).fill(0), ty: null }], ofa: { kind: "Arrangement", st: "PENDING", rd: "04-08-2026", exp: "01-01-2027", due: "This month", ms: "ACTIVE" } }]
  ].forEach(([ix, sa, nm, ent, pa]) => { const x = rv[ix]; x.s = sa; x.client = nm; x.ent = ent; x.type = "RETAIL"; x.ofaRec = sa; x.pas = [pa].concat(x.pas.filter(p => !p.ofa || p.ofa.ms !== "ACTIVE").slice(0, 1)); });
  rv[30].pas = [{ plat: "CHESS Registered", no: "HIN 0086117402", prods: [{ nm: "Domestic equities", fua: 384200, nnm: rv[30].pas[0].prods[0].nnm, ty: "CHESS" }], ofa: { kind: "—", st: null, rd: "—", exp: "—", due: "—", ms: "No arrangement" } }, { plat: "Cash Management Account", no: "CMA 4417702", prods: [{ nm: "Cash Management Account", fua: 52800, nnm: Array(24).fill(0), ty: "CMA" }], ofa: { kind: "—", st: null, rd: "—", exp: "—", due: "—", ms: "No arrangement" } }];
  rv[30].client = "Orla Merriweather"; rv[30].ent = "Individual"; rv[30].type = "RETAIL"; rv[30].cls = "EXECUT";
  const NOTES = { S18544: [{ date: "05-10-2026 14:20", who: "Hannah Ilves", vis: "Only me", text: "Greer is thinking about moving part of the SMA to cash before Christmas. Call her in early November." }, { date: "28-09-2026 10:05", who: "Hannah Ilves", vis: "Everyone", text: "Renewal signed on 11-09-2026. The client asked for the annual review in February.", att: ["review-request-28-09-2026.msg"] }] };
  NOTES[rv[30].s] = [{ date: "02-10-2026 09:30", who: "Ravi Naidoo", vis: "Everyone", text: "Execution only. The client trades herself through CHESS; no advice fee is charged." }];
  rv[42].pas[0].models = [{ code: "SP0002", w: 55 }, { code: "SP0004", w: 30 }, { code: "CASH", w: 15 }];
  // Scale: the 16 advisors together hold $2.61B; monthly Net New Money for the 16 matches the tiles
  const all16 = ADV16.flatMap(a => BOOKS[a]), prods16 = all16.flatMap(s => s.pas.flatMap(p => p.prods));
  const fuaT = prods16.reduce((t, p) => t + p.fua, 0), fk = 2.61e9 / fuaT;
  BOOKS["Isabel Ferreira"].forEach(s => s.pas.forEach(p => p.prods.forEach(q => { q.fua = Math.round(q.fua * fk); q.nnm = q.nnm.map(v => Math.round(v * fk)); })));
  prods16.forEach(p => { p.fua = Math.round(p.fua * fk); p.nnm = p.nnm.map(v => Math.round(v * fk)); });
  { const big = prods16.reduce((a, b) => (b.fua > a.fua ? b : a)); big.fua += 2.61e9 - prods16.reduce((t, p) => t + p.fua, 0); }
  const TGT = [6.4, 5.2, 7.7, 4.9, 6.3, 7.1, 5.8, 6.6, 5.1, 7.4, 6.2, 5.5, 7.2, 6.1, 5.4, 8.3, 7.9, 6.6, 7.4, 5.9, 6.8, 7.2, 4.58, 12.05].map(v => Math.round(v * 1e6));
  const ravP = BOOKS["Ravi Naidoo"].flatMap(s => s.pas.flatMap(p => p.prods)), others = prods16.filter(p => !ravP.includes(p));
  for (let m = 0; m < 24; m++) {
    if (m === 22) { const ws = ravP.filter(p => p.fua > 0).slice(0, 12); ravP.forEach(p => { p.nnm[m] = 0; }); ws.forEach((p, i) => { p.nnm[m] = -35000; }); }
    const fixed = ravP.reduce((t, p) => t + p.nnm[m], 0), rest = others.reduce((t, p) => t + p.nnm[m], 0) || 1, k = (TGT[m] - (m === 22 ? fixed : 0)) / (m === 22 ? rest : rest + fixed);
    (m === 22 ? others : prods16).forEach(p => { p.nnm[m] = Math.round(p.nnm[m] * k); });
    const diffM = TGT[m] - prods16.reduce((t, p) => t + p.nnm[m], 0); const tgt = others.find(p => p.nnm[m] !== 0) || others[0]; tgt.nnm[m] += diffM;
  }
  window.ADBOOK = { NOTES, M24, BOOKS, ADV16, BRANCH, TOWHO: { advisor: ["Ravi Naidoo"], one: ["Ravi Naidoo"], sel: ADV16.slice(0, 3), all: ADV16, own2: ["Isabel Ferreira", "Ravi Naidoo", "Karen Patel"] }, SEARCH: { s: BOOKS["Ravi Naidoo"][17].s, q: MO } };
  { const AB = window.ADBOOK, HI3 = ["S18544", "S18502", "S18450"], rvb = AB.BOOKS["Ravi Naidoo"], moved = rvb.filter(x => HI3.includes(x.s)); AB.BOOKS["Ravi Naidoo"] = rvb.filter(x => !HI3.includes(x.s)); const hb = book("Hannah Ilves", 24); hb.forEach(x => x.pas.forEach(p => p.prods.forEach(q => { q.fua = Math.round(q.fua * fk); q.nnm = q.nnm.map(v => Math.round(v * fk)); }))); moved.forEach(x => { x.adv = "Hannah Ilves"; x.br = "Melbourne"; }); [4, 12].forEach(ix => { hb[ix].client = "Greer Hale"; hb[ix].ent = "Individual"; }); { const BR6 = { "Tobias Marlow": "Geelong", "Sienna Okoro": "Melbourne", "Declan Moss": "Ballarat", "Marcus Delahunt": "Melbourne", "Elias Varney": "Albury" }; Object.assign(AB.BRANCH, BR6); Object.keys(BR6).forEach((a, i) => { const bk = book(a, [30, 22, 18, 14, 20][i]); bk.forEach(x => { x.br = BR6[a]; x.pas.forEach(p => p.prods.forEach(q => { q.fua = Math.round(q.fua * fk); q.nnm = q.nnm.map(v => Math.round(v * fk)); })); }); AB.BOOKS[a] = bk; }); const SIX = ["Declan Moss", "Elias Varney", "Hannah Ilves", "Marcus Delahunt", "Sienna Okoro", "Tobias Marlow"]; AB.ADV6 = SIX; AB.TOWHO_OFA = { advisor: ["Hannah Ilves"], one: ["Tobias Marlow"], sel: ["Hannah Ilves", "Tobias Marlow"], own2: ["Marcus Delahunt", "Hannah Ilves", "Tobias Marlow"], all: SIX }; } AB.BOOKS["Hannah Ilves"] = moved.concat(hb); AB.TOWHO.advisor = ["Hannah Ilves"]; }
})();
