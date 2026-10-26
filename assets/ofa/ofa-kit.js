/* Shared builders for the three OFA pages. Data shaping only; all markup lives in each page's template. */
(function () {
  const PARTS = ["Track", "Toggle", "Table", "Kv", "Notes", "Timeline", "Docs", "Slot", "Text", "Bar", "Checks", "Chips", "Ux", "Form", "List", "Empty", "Pager", "Ev"];
  const BLOCKS = ["Days", "Track", "Doors", "Tabs", "Stepper", "Filters", "Banner", "Card", "Empty", "Ux"];
  const flags = (list, kind) => { const o = {}; list.forEach(k => { o["is" + k] = k === kind; }); return o; };
  const btn = (label, go, kind, icon, o) => Object.assign({ label, go: go || null, kind: kind || "text", icon: icon || null, dis: null, tip: null, hasIcon: !!icon, iconOnly: kind === "icon", text: kind !== "icon", neutral: null, mn: null }, o || {});
  const fld = (v, o) => Object.assign({ v, icon: "arrow_drop_down", err: null, errText: null, ph: null, w: null, go: null, tip: null }, o || {});
  const cell = (o) => {
    o = typeof o === "object" && o !== null ? o : { v: o };
    const c = Object.assign({ v: null, sub: null, chip: null, tone: "", chip2: null, tone2: "", cls: "", color: null, flds: null, stack: null, yn: null, link: null, btns: null, check: null, span: null, rec: null, tip: null, icon: null, h: false, w: null, fw: "500", subColor: null, sub2: null, ind: null }, o);
    if (c.menu && c.menu.l === undefined) c.menu = Object.assign({}, c.menu, { l: "auto" });
    c.v = c.v === null || c.v === undefined ? null : String(c.v);
    c.cl = c.h ? "cl h" : "cl"; c.plain = c.v !== null && !c.rec; ["flds","stack","btns"].forEach(key => { if (!c[key]) c[key] = []; }); c.btns = c.btns.map(b => Object.assign({ dis: null, tip: null, hasIcon: !!b.icon, icon: null, iconOnly: false }, b, { notIconOnly: !b.iconOnly })); if (c.btns.length && c.btns.every(b => b.iconOnly)) c.h = true, c.cl = "cl h";
    c.stack = c.stack.map(s => Object.assign({ v: null, sub: null, chip: null, tone: "", flds: [], btns: [], link: null, ed: null, chg: null }, s)); c.flds = c.flds.map(q => Object.assign({ icon: "arrow_drop_down", err: null, errText: null, ph: null, w: null, go: null, tip: null }, q));
    return c;
  };
  const col = (label, o) => Object.assign({ label, cls: "", w: null, tip: null, tipIcon: false, sort: null, sortIcon: null, cur: "default", aria: "none" }, o || {});
  const ncol = (label, w, o) => col(label, Object.assign({ cls: "num", w: w || null }, o || {}));
  const part = (kind, o) => {
    const p = Object.assign(flags(PARTS, kind), { scroll: null, capped: null, title: null, rows: [], cols: [], items: [], entries: [], text: null, label: null, btns: [], fields: [], minW: "0px", ux: null, right: null, icon: null, color: null, lead: null, dots: [], ticks: [], axisH: "0px", foot: null, legendN: true, per: "10", lbtns: null, mt: "0px", fgCols: null, tw: "100%", aria: "Filter by who the row is waiting on" }, o || {});
    if (kind === "Table") p.rows = p.rows.map(r => Object.assign({ cls: "" }, r, { cells: r.cells.map(cell) }));
    if (p.cols) p.cols = p.cols.map(c => typeof c === "string" ? { label: c } : c && c.label != null && c.label !== "" ? c : Object.assign({}, c, { label: "\u200b" })); if (p.capped === true) p.capped = "true"; if (kind === "Bar") p.btns = (p.btns || []); p.kvCols = p.kvColsX ? p.kvColsX : p.cols4 ? "repeat(4,minmax(0,1fr))" : p.cols3 ? "repeat(3,minmax(0,1fr))" : "repeat(auto-fill,minmax(170px,1fr))";
    return p;
  };
  const block = (kind, span, o) => { const r = Object.assign(flags(BLOCKS, kind), { span: span || 24, title: null, sub: null, asAt: null, actions: [], parts: [], items: [], hasHead: true, text: null, icon: null, tone: "", btns: [], fields: [], dots: [], ticks: [], todayX: null, axisH: "16px", cols: "repeat(auto-fill,minmax(150px,1fr))", chips: [], fix: null, h: "auto", rows: 1, lead: null, legendN: true, foot: null, search: null, fchips: null, days: [], todayCol: "1", todayLabel: null , tcols: null }, o || {}); r.tOld = r.tcols ? null : "true"; if (kind === "Days") r.items = (r.items || []).map(it => Object.assign({}, it, { on: it.on === true || it.on === "true" ? "true" : "false" })); return r; };
  const tbl = (cols, rows, emptyT, emptyS, o) => rows.length ? part("Table", Object.assign({ cols, rows }, o || {})) : part("Empty", { title: emptyT, text: emptyS || null, icon: "task_alt" });

  // dates
  const D = (s) => { const [d, m, y] = s.split("-").map(Number); return new Date(Date.UTC(y, m - 1, d)); };
  const f = (dt) => { const p = (n) => String(n).padStart(2, "0"); return p(dt.getUTCDate()) + "-" + p(dt.getUTCMonth() + 1) + "-" + dt.getUTCFullYear(); };
  const add = (s, n) => { const d = D(s); d.setUTCDate(d.getUTCDate() + n); return f(d); };
  const diff = (a, b) => Math.round((D(b) - D(a)) / 864e5);
  const money = (v) => v === null || v === undefined ? "—" : "$" + Math.round(v).toLocaleString("en-AU");
  let seed = 7; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };

  // attachments: image, .msg or .eml; removable chips before saving, links after
  const ACCEPT = "image/*,.msg,.eml";
  const attOf = (comp, key) => { const list = ((comp.state.att || {})[key]) || []; const set = (l) => comp.setState({ att: Object.assign({}, comp.state.att, { [key]: l }) }); return { accept: ACCEPT, list: list.map((n, i) => ({ name: n, rm: () => set(list.filter((_, j) => j !== i)) })), has: list.length ? "true" : null, names: list, pick: (e) => { const fs = [...((e.target && e.target.files) || [])].map(f => f.name); if (e.target) e.target.value = ""; if (fs.length) set(list.concat(fs)); }, clear: () => set([]) }; };
  const links = (names) => (names || []).map(n => ({ name: n, go: (e) => { if (e && e.preventDefault) e.preventDefault(); } }));
  // notes log: append-only; comp.state.notes[id] holds added entries, comp.state.drafts[id] the box
  function notes(comp, id, base, o) {
    o = o || {};
    const s = comp.state, added = (s.notes || {})[id] || [], draft = (s.drafts || {})[id] || "", at = attOf(comp, "n:" + id);
    const VO = ["Only me", "Everyone"], vk = "nv:" + id, vis = o.vis ? (((s.nvis || {})[id]) || "Only me") : null, vOpen = o.vis && s.nvisOpen === id;
    const entries = (o.asc ? added.concat(base).slice().reverse() : added.concat(base)).filter(n => !(o.vis && n.vis === "Only me" && n.who !== (o.me || "You"))).map(n => Object.assign({}, n, { att: links(n.att), hasAtt: n.att && n.att.length ? "true" : null, vis: o.vis ? (n.vis || "Everyone") : null }));
    return part("Notes", { capped: o.capped ? String(o.capped === true ? "true" : o.capped) : null, tail: o.asc ? "1" : null,
      title: o.title || "Notes", entries, readOnly: !!o.readOnly, canWrite: !o.readOnly, draft,
      addDis: draft.trim() ? null : "true", att: at,
      visSel: o.vis ? { v: vis, open: vOpen, exp: vOpen ? "true" : "false", go: () => comp.setState({ nvisOpen: vOpen ? null : id }), close: () => comp.setState({ nvisOpen: null }), opts: VO.map(v => ({ label: v, on: v === vis ? "true" : null, bg: v === vis ? "var(--mat-sys-secondary-container)" : "transparent", fg: v === vis ? "var(--mat-sys-on-secondary-container)" : "var(--mat-sys-on-surface)", pick: () => comp.setState({ nvis: Object.assign({}, comp.state.nvis, { [id]: v }), nvisOpen: null }) })) } : null,
      onDraft: (e) => comp.setState({ drafts: Object.assign({}, s.drafts, { [id]: e.target.value }) }),
      add: () => { if (!draft.trim()) return; comp.setState({ notes: Object.assign({}, s.notes, { [id]: [{ date: o.now || "07-10-2026 09:40", who: o.me || "You", text: draft.trim(), att: at.names, vis: vis || undefined }].concat(added) }), drafts: Object.assign({}, s.drafts, { [id]: "" }) }); at.clear(); },
      hasEntries: entries.length > 0, noEntries: entries.length === 0,
    });
  }

  // dialog: comp.state.dlg = spec; spec.comment required => confirm disabled until typed
  function dialog(comp) {
    const d0 = comp.state.dlg; if (!d0) return { dlgOn: false, dlg: null }; const d = typeof d0 === "function" ? d0() : d0;
    const s = comp.state, text = s.dlgText || "", pick = s.dlgPick;
    const needText = true;
    const close = () => comp.setState({ dlg: null, dlgText: "", dlgPick: null, dlgSel: {}, dlgOpen: null, att: Object.assign({}, comp.state.att, { dlg: [] }) });
    
    return {
      dlgOn: true,
      dlg: Object.assign({ title: "", sub: null, wide: "dlg", kv: [], hasKv: false, text: null, slot: null, ux: null, fields: [], hasFields: false, checks: [], hasChecks: false, reasons: [], hasReasons: false, reasonsLabel: "Reason", comment: null, hasComment: false, list: [], hasList: false, ev: null, hasEv: false, docs: [], hasDocs: false, list2: [], hasList2: false, list2Title: null, docsTitle: null, listTitle: null, listMax: "none", list3: [], hasList3: false, list3Title: null, tcols: [] }, d, {
        wide: d.wide ? "dlg wide" : "dlg", hasKv: !!(d.kv && d.kv.length), hasFields: !!(d.fields && d.fields.length), fields: (d.fields || []).map(q => { if (!q.choices) return q; const cur = (s.dlgSel || {})[q.label] ?? q.v, isOpen = s.dlgOpen === q.label; return Object.assign({}, q, { v: q.upper && cur !== "All" ? String(cur).toUpperCase() : cur, open: isOpen, bc: isOpen ? "var(--mat-sys-primary)" : null, go: () => comp.setState({ dlgOpen: isOpen ? null : q.label }), opts: q.choices.map(o => ({ label: (q.labels && q.labels[o]) || o, on: o === cur, bg: o === cur ? "var(--mat-sys-secondary-container)" : "transparent", fg: o === cur ? "var(--mat-sys-on-secondary-container)" : "var(--mat-sys-on-surface)", pick: () => comp.setState({ dlgSel: Object.assign({}, s.dlgSel, { [q.label]: o }), dlgOpen: null }) })) }); }), hasChecks: !!(d.checks && d.checks.length), hasReasons: !!(d.reasons && d.reasons.length), hasComment: !!d.comment, att: attOf(comp, "dlg"), hasList: !!(d.list && d.list.length), hasEv: !!d.ev, hasDocs: !!(d.docs && d.docs.length), hasList2: !!(d.list2 && d.list2.length),
        reasons: (d.reasons || []).map((r, i) => ({ label: r, on: pick === i ? "true" : null, go: () => comp.setState({ dlgPick: i }) })),
        commentText: text, onComment: (e) => comp.setState({ dlgText: e.target.value }),
        commentLabel: d.comment ? d.comment.label + (d.comment.required ? " *" : "") : null, commentHint: d.comment && d.comment.hint ? d.comment.hint : null,
        actions: [btn(d.cancel || (d.actions && !d.actions.length && !d.confirm ? "Close" : "Cancel"), close, "text")].concat((d.actions || [btn(d.confirm || "Confirm", null, "filled")]).map(a => { const nt = a.needsText !== undefined ? a.needsText : a.kind === "filled" && needText !== false && !!(d.comment && d.comment.required); const np = a.needsPick !== undefined ? a.needsPick : a.kind === "filled" && !!(d.reasons && d.reasons.length); const blocked = (nt && !text.trim()) || (np && pick == null) || !!a.dis; return Object.assign({ hasIcon: !!a.icon, tip: null }, a, { go: a.go || (() => { const d0 = comp.state.dlg, f = a.onDone || d.onDone; comp._att = ((comp.state.att || {}).dlg || []).slice(); if (f) f(text, pick); comp.setState({ att: Object.assign({}, comp.state.att, { dlg: [] }) }); comp.setState(p => p.dlg === d0 ? { dlg: null, dlgText: "", dlgPick: null, dlgSel: {}, dlgOpen: null } : {}); comp.setState({ snack: a.snack || d.snack || "Recorded, with your name and the time." }); }), dis: blocked ? "true" : null }); })),
      }),
      closeDlg: close,
    };
  }

  function sidebar(comp, items, gear) {
    const s = comp.state, open = !!(s.pinned || s.hover);
    return {
      sbWidth: open ? "268px" : "72px", glyphCol: open ? "40px" : "54px", labelOpacity: open ? 1 : 0, labelDelay: open ? "60ms" : "0ms", labelHits: open ? "auto" : "none",
      hoverIn: () => comp.setState({ hover: true }), hoverOut: () => comp.setState({ hover: false }), pinned: s.pinned ? "true" : null, togglePin: () => comp.setState({ pinned: !s.pinned }),
      sideItems: items.map(it => Object.assign({ cls: "", mt: "4px", badge: null, bcls: "bn", onClick: null, title: it.label }, it, { pad: open ? (it.cls === "d1" || it.top ? "8px" : "20px") : "0px" })),
      hasGear: !!gear, gearOpen: !!s.gearOpen, toggleGear: () => { if (gear && gear.length === 1) { comp.setState({ gearOpen: false }); gear[0].go(); } else comp.setState({ gearOpen: !s.gearOpen }); }, closeGear: () => comp.setState({ gearOpen: false }),
      gearItems: (gear || []).map(g => Object.assign({}, g, { go: () => { comp.setState({ gearOpen: false }); g.go(); } })), gearCls: gear && gear.some(g => g.on) ? "on" : "",
    };
  }

  function controls(comp, defs) {
    return defs.map(g => ({ label: g.label, opts: g.opts.map(o => ({ label: o, on: comp.state[g.key] === o ? "true" : null, pick: () => comp.setState({ [g.key]: o, dlg: null, snack: null }) })) }));
  }

  const kv = (k, v, o) => { const x = Object.assign({ k, v: v === null || v === undefined ? "—" : String(v), sub: null, subColor: null, color: null, cls: "v", chip: null, go: null, gc: "auto", sep: null, arL: null, mid: null }, o || {}); x.txt = !x.chip && !x.go; x.arR = !x.arL; return x; };
  const ff = (label, v, o) => Object.assign({ lab: (o && o.lab) || label, panel: null, std: true, pair: false, rng: false, boxes: [], calOpen: false, cal: null, v1: null, v2: null, on1: null, on2: null, inp: false, box2: true, open: false, opts: [], label, v, box: true, area: false, icon: "arrow_drop_down", ro: null, err: null, errText: null, hint: null, go: null, gc: "auto", color: null, ph: null, onInput: null }, o || {});
  const area = (label, v, onInput, o) => Object.assign(ff(label, v, { box: false, area: true, onInput }), o || {});
  const li = (title, line, o) => Object.assign({ icon: null, title, line: line || null, chip: null, tone: "", btns: [] }, o || {});
  const doc = (name, meta, ok, o) => Object.assign({ name, meta, ok: !!ok, na: !ok, state: "Not yet in DART", go: (e) => { if (e && e.preventDefault) e.preventDefault(); } }, o || {});
  const door = (label, value, sub, go, o) => Object.assign({ info: [sub, (o && o.tip) || null].filter(Boolean).join(" · ") || label, label, value: String(value), sub: sub || "", go, color: "var(--mat-sys-on-surface)", on: null, tip: null, hasBar: false, bar: [], cap: null, hasMini: false, mini: [] }, o || {});
  const tli = (icon, what, when, who, o) => { const x = Object.assign({ icon, what, when, who, why: null, src: null, ev: null, bg: "var(--mat-sys-surface-container)" }, o || {}); x.att = links(x.att); x.hasAtt = x.att.length ? "true" : null; x.fg = x.fg || (x.bg === "var(--mat-sys-surface-container)" ? "var(--mat-sys-on-surface)" : "var(--mat-sys-on-error)"); return x; };
  // table tools: sort (header click), hide columns, export menu, paging; runs on every card with a table
  function tools(comp, blocks, o) { const TC = comp.state.trkCol || {}; return tools0(comp, blocks.map(b => { if (!b || !(b.isTrack || b.isDays || (b.isCard && (b.parts || []).some(p => p && p.isTrack)))) return b; const id = "charts", on = !!TC[id], btn = { go: () => comp.setState({ trkCol: Object.assign({}, comp.state.trkCol, { [id]: !on }) }), icon: on ? "expand_more" : "expand_less", tip: on ? "Show the figures and legend" : "Collapse to the bar", ae: on ? "false" : "true" }; if (b.isTrack || b.isDays) return Object.assign({}, b, { collapsed: on ? "true" : null, colBtn: btn }); return Object.assign({}, b, { parts: b.parts.map(p => p && p.isTrack ? Object.assign({}, p, { collapsed: on ? "true" : null }) : p), actions: (b.actions || []).concat([{ label: btn.tip, icon: btn.icon, go: btn.go, kind: "icon", iconOnly: true, text: false, hasIcon: true, tip: btn.tip }]) }); }), o); }
  function tools0(comp, blocks, o) {
    o = o || {}; const s = comp.state;
    const key = (c) => { if (!c) return [2, ""]; const x = c.v != null && c.v !== "" ? c.v : c.chip != null ? c.chip : c.stack && c.stack.length ? (c.stack[0].v || c.stack[0].chip || (c.stack[0].ed && c.stack[0].ed.label) || "") : c.check ? (c.check.on ? "1" : "0") : c.btns && c.btns[0] ? c.btns[0].label : ""; const t = String(x).replace(/\u2011/g, "-").replace(/\u00a0/g, " ").trim(); if (!t || t === "—") return [2, ""]; const d = /^(\d\d)-(\d\d)-(\d{4})(?:\s+(\d\d):(\d\d))?/.exec(t); if (d) return [0, Number(d[3] + d[2] + d[1] + (d[4] || "00") + (d[5] || "00"))]; if (/^[−-]?\$?[\d,]+(\.\d+)?$/.test(t)) return [0, parseFloat(t.replace(/[^0-9.\-−]/g, "").replace("−", "-"))]; return [1, t.toLowerCase()]; };
    return blocks.map(b => {
      if (!b.isCard) return b; const ti = (b.parts || []).findIndex(p => p.isTable); if (ti < 0) return b; const bare = !!(b.noTools || b.noMenu);
      const id = b.expId || ("t:" + String(b.title || "").replace(/[\d,]+/g, "").trim()), tp = b.parts[ti], cols = tp.cols, so = (s.sort || {})[id];
      const hidM = Object.assign({}, (o.defHid || {})[id] || {}, ((s.hid || {})[id]) || {});
      const rows = tp.rows, isG = (r) => /grp/.test(r.cls || ""), isK = (r) => /kid/.test(r.cls || ""), gU = !!b.grpUnits, sec = !gU && rows.some(isG) && !rows.some(isK);
      const cmp = (a, c) => { if (!so) return 0; const x = key(a.cells[so.ci]), y = key(c.cells[so.ci]); if (x[0] !== y[0]) return x[0] - y[0]; return (x[1] < y[1] ? -1 : x[1] > y[1] ? 1 : 0) * so.d; };
      let units = [];
      if (sec) { let cur = null; rows.forEach(r => { if (isG(r)) { cur = [r]; cur.sec = []; units.push(cur); } else if (cur) cur.sec.push(r); else units.push([r]); }); units.forEach(u => { if (u.sec) u.sec.sort(cmp); }); }
      else { rows.forEach(r => { if ((gU ? !isG(r) : isK(r)) && units.length) units[units.length - 1].push(r); else units.push([r]); }); if (so) units = units.slice().sort((a, c) => cmp(a[0], c[0])); }
      const nData = sec ? units.reduce((n, u) => n + (u.sec ? u.sec.length : 1), 0) : units.length;
      let shown = units, pager = null;
      if (b.paged && !sec) { const per = s.expId === id ? 25 : (b.per || o.per || 10), n = units.length, pages = Math.max(1, Math.ceil(n / per)), pg = Math.min(((s.gp || {})[id]) || 0, pages - 1), setPg = (v) => comp.setState({ gp: Object.assign({}, comp.state.gp, { [id]: v }) }); shown = units.slice(pg * per, pg * per + per); pager = part("Pager", { per: String(per), text: n ? (pg * per + 1) + "–" + Math.min(n, pg * per + per) + " of " + n : "0 of 0", prevDis: pg === 0 ? "true" : null, nextDis: pg >= pages - 1 ? "true" : null, prev: () => setPg(pg - 1), next: () => setPg(pg + 1) }); }
      const lineK = !sec && rows.some(isK) && !rows.some(isG);
      let flat = []; shown.forEach((u, ui) => { u.forEach(r => flat.push(lineK ? Object.assign({}, r, { cls: (r.cls || "") + (ui % 2 ? " be" : " bo") }) : r)); if (u.sec) u.sec.forEach(r => flat.push(r)); });
      if (b.paged && sec) { const per = s.expId === id ? 25 : (b.per || o.per || 10), n = nData, pages = Math.max(1, Math.ceil(n / per)), pg = Math.min(((s.gp || {})[id]) || 0, pages - 1), setPg = (v) => comp.setState({ gp: Object.assign({}, comp.state.gp, { [id]: v }) }); const out = []; let hd = null, done = false, k = 0; flat.forEach(r => { if (isG(r)) { hd = r; done = false; return; } if (k >= pg * per && k < pg * per + per) { if (hd && !done) { out.push(hd); done = true; } out.push(r); } k++; }); flat = out; pager = part("Pager", { per: String(per), text: n ? (pg * per + 1) + "–" + Math.min(n, pg * per + per) + " of " + n : "0 of 0", prevDis: pg === 0 ? "true" : null, nextDis: pg >= pages - 1 ? "true" : null, prev: () => setPg(pg - 1), next: () => setPg(pg + 1) }); }
      const lock = (c) => /^S-Account/.test(c.label || ""), vis = cols.map((c, i) => i).filter(i => lock(cols[i]) || !(cols[i].label && hidM[cols[i].label]));
      const rows2 = flat.map(r => r.cells.length === cols.length ? Object.assign({}, r, { cells: vis.map(i => r.cells[i]) }) : Object.assign({}, r, { cells: r.cells.map((c, j) => j === 0 && c.span ? Object.assign({}, c, { span: String(Math.max(1, Number(c.span) - (cols.length - vis.length))) }) : c) }));
      const setSort = (ci) => () => comp.setState({ sort: Object.assign({}, comp.state.sort, { [id]: !so || so.ci !== ci ? { ci, d: 1 } : so.d === 1 ? { ci, d: -1 } : null }), gp: Object.assign({}, comp.state.gp, { [id]: 0 }) });
      const cols2 = vis.map(i => { const c = cols[i], on = so && so.ci === i; return Object.assign({}, c, { sort: c.label ? setSort(i) : null, cur: c.label ? "pointer" : "default", sortIcon: on ? (so.d > 0 ? "arrow_upward" : "arrow_downward") : null, aria: on ? (so.d > 0 ? "ascending" : "descending") : "none" }); });
      const mOpen = (k) => !!(s.hmenu && s.hmenu.id === id + k), close = () => comp.setState({ hmenu: null });
      const tog = (k, n) => (e) => { const bb = e.currentTarget.getBoundingClientRect(), est = n * 48 + 16, below = window.innerHeight - bb.bottom - 12, above = bb.top - 64, down = below >= Math.min(est, 240) || below >= above, t = down ? bb.bottom + 4 : Math.max(64, bb.top - 4 - Math.min(est, above)), mh = Math.max(144, down ? below : above); comp.setState({ hmenu: mOpen(k) ? null : { id: id + k, r: (window.innerWidth - bb.right) + "px", t: t + "px", mh: mh + "px" } }); };
      const mn = (k, n, items) => ({ open: mOpen(k), r: s.hmenu ? s.hmenu.r : "0px", t: s.hmenu ? s.hmenu.t : "0px", mh: s.hmenu && s.hmenu.mh ? s.hmenu.mh : "70vh", toggle: tog(k, n), close, items });
      const ttl = String(b.title || "Table").split(" · ")[0];
      const expB = btn("Export", null, "menu", "download", { iconOnly: false, text: false, mn: mn(":x", 3, [["Excel", "table_view"], ["CSV", "csv"], ["PDF", "picture_as_pdf"]].map(x => ({ label: x[0], icon: x[1], isChk: false, on: null, dis: null, go: () => comp.setState({ hmenu: null, snack: ttl + " exported as " + x[0] + ": " + nData + (nData === 1 ? " row" : " rows") + ", every column, hidden ones included." }) }))) });
      const named = cols.map((c, i) => ({ c, i })).filter(x => x.c.label);
      const colB = btn("Show or hide columns", null, "menu", "view_column", { iconOnly: false, text: false, mn: mn(":c", named.length, named.map(x => { const lk = lock(x.c), on = lk || !hidM[x.c.label]; return { label: x.c.label, icon: null, isChk: true, on: on ? "true" : null, dis: lk ? "true" : null, go: lk ? null : () => comp.setState({ hid: Object.assign({}, comp.state.hid, { [id]: Object.assign({}, hidM, { [x.c.label]: on }) }) }) }; })) });
      const parts = b.parts.filter((p, j) => !(b.paged && p.isPager && j > ti)).map((p, j) => j === ti ? Object.assign({}, tp, { cols: cols2, rows: rows2 }, vis.length < cols.length && !cols.some(c => c.flex) ? { tw: "100%", minW: "max-content" } : {}) : p);
      if (pager) parts.splice(ti + 1, 0, pager);
      return Object.assign({}, b, { expId: id, parts, actions: bare ? (b.actions || []) : (b.actions || []).concat([expB, colB]) });
    }).map(b => !b || !b.parts ? b : Object.assign({}, b, { parts: b.parts.map(p => p && p.cols ? Object.assign({}, p, { cols: p.cols.map(c => typeof c === "string" ? { label: c } : c && c.label != null && c.label !== "" ? c : Object.assign({}, c, { label: "\u200b" })) }) : p) }));
  }

  // P25 accessible names. Every field takes its name from the label drawn on it (the mat-label: .mofl, mat-label, or the .lb above it);
  // every mat-icon beside a control's text is aria-hidden so its ligature is not read. Runs on every render, all three dashboards.
  function a11y(root) {
    const own = "data-ofa-name", txt = (el) => { let t = ""; if (el) el.childNodes.forEach(function w(n) { if (n.nodeType === 3) t += n.textContent; else if (n.nodeType === 1 && n.tagName !== "MAT-ICON") n.childNodes.forEach(w); }); return t.replace(/\s+/g, " ").trim(); };
    root.querySelectorAll("mat-form-field").forEach(mf => { const lb = mf.querySelector(":scope > mat-label, :scope > .mofl"); if (lb) lb.setAttribute("data-mat-label", ""); });
    root.querySelectorAll("input:not([type=file]):not([type=hidden]):not([type=checkbox]):not([type=radio]), textarea, mat-select, [role=combobox]").forEach(el => {
      const mine = el.hasAttribute(own), al = el.getAttribute("aria-label");
      if (!mine && ((al && al.trim()) || el.getAttribute("aria-labelledby") || (el.id && root.querySelector('label[for="' + el.id + '"]')))) return;
      const mf = el.closest("mat-form-field"), host = el.closest(".fgf, .ctl");
      let lb = mf && mf.querySelector(":scope > mat-label, :scope > .mofl");
      if (!lb && host) lb = host.querySelector(":scope > .lb, :scope > span > .lb, :scope > .lb-row .lb");
      let name = txt(lb).replace(/\s*\*$/, "");
      if (!name && el.getAttribute("placeholder")) name = el.getAttribute("placeholder");
      if (!name) return;
      if (lb && /\*$/.test(txt(lb))) el.setAttribute("aria-required", "true");
      if (al !== name) el.setAttribute("aria-label", name); el.setAttribute(own, "");
    });
    let hid = 0;
    root.querySelectorAll("mat-form-field").forEach(mf => { const h = mf.nextElementSibling, el = mf.querySelector("input, textarea, mat-select, [role=combobox]"); if (!el) return; if (h && h.matches(".hint, mat-hint") && h.textContent.trim()) { if (!h.id) h.id = "ofa-hint-" + (++hid) + "-" + Math.random().toString(36).slice(2, 7); if (el.getAttribute("aria-describedby") !== h.id) el.setAttribute("aria-describedby", h.id); } else if (el.hasAttribute("aria-describedby") && /^ofa-hint-/.test(el.getAttribute("aria-describedby"))) el.removeAttribute("aria-describedby"); });
    root.querySelectorAll("mat-horizontal-stepper").forEach(sp => { if (sp.getAttribute("role") !== "tablist") sp.setAttribute("role", "tablist"); });
    root.querySelectorAll("mat-step-header").forEach(h => { const sel = h.getAttribute("data-on") === "true" ? "true" : "false"; if (h.getAttribute("role") !== "tab") h.setAttribute("role", "tab"); if (h.getAttribute("aria-selected") !== sel) h.setAttribute("aria-selected", sel); if (h.hasAttribute("aria-pressed")) h.removeAttribute("aria-pressed"); });
    root.querySelectorAll("mat-icon:not([aria-hidden])").forEach(ic => {
      if (ic.hasAttribute("aria-label")) return;
      const host = ic.closest("button, a, label, [role=button], [role=tab], [role=menuitem], [role=option], mat-option, mat-chip, [matButton], [matIconButton]");
      if (!host) return;
      let rest = ""; host.childNodes.forEach(function walk(n) { if (n.nodeType === 3) rest += n.textContent; else if (n.nodeType === 1 && n.tagName !== "MAT-ICON") n.childNodes.forEach(walk); });
      if (rest.trim() || host.getAttribute("aria-label")) ic.setAttribute("aria-hidden", "true");
    });
  }
  if (typeof document !== "undefined" && typeof MutationObserver !== "undefined") {
    let q = 0; const run = () => { q = 0; try { a11y(document); } catch (e) {} };
    const go = () => { if (!q) q = requestAnimationFrame(run); };
    new MutationObserver(go).observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    go();
  }

  window.OFAKIT = { a11y, kv, ff, area, li, doc, door, tli, btn, fld, cell, col, ncol, part, block, tbl, D, f, add, diff, money, rnd, notes, dialog, sidebar, controls, tools };
})();
