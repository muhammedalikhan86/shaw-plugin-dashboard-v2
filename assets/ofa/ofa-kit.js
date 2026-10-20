/* Shared builders for the three OFA pages. Data shaping only; all markup lives in each page's template. */
(function () {
  const PARTS = ["Track", "Toggle", "Table", "Kv", "Notes", "Timeline", "Docs", "Slot", "Text", "Bar", "Checks", "Chips", "Ux", "Form", "List", "Empty", "Pager", "Ev"];
  const BLOCKS = ["Days", "Track", "Doors", "Tabs", "Stepper", "Filters", "Banner", "Card", "Empty", "Ux"];
  const flags = (list, kind) => { const o = {}; list.forEach(k => { o["is" + k] = k === kind; }); return o; };
  const btn = (label, go, kind, icon, o) => Object.assign({ label, go: go || null, kind: kind || "text", icon: icon || null, dis: null, tip: null, hasIcon: !!icon, iconOnly: kind === "icon", text: kind !== "icon", neutral: null }, o || {});
  const fld = (v, o) => Object.assign({ v, icon: "arrow_drop_down", err: null, errText: null, ph: null, w: null, go: null, tip: null }, o || {});
  const cell = (o) => {
    o = typeof o === "object" && o !== null ? o : { v: o };
    const c = Object.assign({ v: null, sub: null, chip: null, tone: "", chip2: null, tone2: "", cls: "", color: null, flds: null, stack: null, yn: null, link: null, btns: null, check: null, span: null, rec: null, tip: null, icon: null, h: false, w: null, fw: "500", subColor: null }, o);
    c.v = c.v === null || c.v === undefined ? null : String(c.v);
    c.cl = c.h ? "cl h" : "cl"; c.plain = c.v !== null && !c.rec; ["flds","stack","btns"].forEach(key => { if (!c[key]) c[key] = []; }); c.btns = c.btns.map(b => Object.assign({ dis: null, tip: null, hasIcon: !!b.icon, icon: null, iconOnly: false }, b, { notIconOnly: !b.iconOnly })); if (c.btns.length && c.btns.every(b => b.iconOnly)) c.h = true, c.cl = "cl h";
    c.stack = c.stack.map(s => Object.assign({ v: null, sub: null, chip: null, tone: "", flds: [], btns: [], link: null }, s)); c.flds = c.flds.map(q => Object.assign({ icon: "arrow_drop_down", err: null, errText: null, ph: null, w: null, go: null, tip: null }, q));
    return c;
  };
  const col = (label, o) => Object.assign({ label, cls: "", w: null, tip: null, tipIcon: false }, o || {});
  const ncol = (label, w, o) => col(label, Object.assign({ cls: "num", w: w || null }, o || {}));
  const part = (kind, o) => {
    const p = Object.assign(flags(PARTS, kind), { scroll: null, capped: null, title: null, rows: [], cols: [], items: [], entries: [], text: null, label: null, btns: [], fields: [], minW: "0px", ux: null, right: null, icon: null, color: null, lead: null, dots: [], ticks: [], axisH: "0px", foot: null, legendN: true, per: "10", lbtns: null }, o || {});
    if (kind === "Table") p.rows = p.rows.map(r => Object.assign({ cls: "" }, r, { cells: r.cells.map(cell) }));
    if (p.capped === true) p.capped = "true"; if (kind === "Bar") p.btns = (p.btns || []); p.kvCols = p.kvColsX ? p.kvColsX : p.cols4 ? "repeat(4,minmax(0,1fr))" : p.cols3 ? "repeat(3,minmax(0,1fr))" : "repeat(auto-fill,minmax(170px,1fr))";
    return p;
  };
  const block = (kind, span, o) => Object.assign(flags(BLOCKS, kind), { span: span || 24, title: null, sub: null, asAt: null, actions: [], parts: [], items: [], hasHead: true, text: null, icon: null, tone: "", btns: [], fields: [], dots: [], ticks: [], todayX: null, axisH: "16px", cols: "repeat(auto-fill,minmax(150px,1fr))", chips: [], fix: null, h: "auto", rows: 1, lead: null, legendN: true, foot: null, search: null, days: [], todayCol: "1", todayLabel: null }, o || {});
  const tbl = (cols, rows, emptyT, emptyS, o) => rows.length ? part("Table", Object.assign({ cols, rows }, o || {})) : part("Empty", { title: emptyT, text: emptyS || null, icon: "task_alt" });

  // dates
  const D = (s) => { const [d, m, y] = s.split("-").map(Number); return new Date(Date.UTC(y, m - 1, d)); };
  const f = (dt) => { const p = (n) => String(n).padStart(2, "0"); return p(dt.getUTCDate()) + "-" + p(dt.getUTCMonth() + 1) + "-" + dt.getUTCFullYear(); };
  const add = (s, n) => { const d = D(s); d.setUTCDate(d.getUTCDate() + n); return f(d); };
  const diff = (a, b) => Math.round((D(b) - D(a)) / 864e5);
  const money = (v) => v === null || v === undefined ? "—" : "$" + Math.round(v).toLocaleString("en-AU");
  let seed = 7; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };

  // notes log: append-only; comp.state.notes[id] holds added entries, comp.state.drafts[id] the box
  function notes(comp, id, base, o) {
    o = o || {};
    const s = comp.state, added = (s.notes || {})[id] || [], draft = (s.drafts || {})[id] || "";
    const entries = o.asc ? added.concat(base).slice().reverse() : added.concat(base);
    return part("Notes", { capped: o.capped ? String(o.capped === true ? "true" : o.capped) : null, tail: o.asc ? "1" : null,
      title: o.title || "Notes", entries, readOnly: !!o.readOnly, canWrite: !o.readOnly, draft,
      addDis: draft.trim() ? null : "true",
      onDraft: (e) => comp.setState({ drafts: Object.assign({}, s.drafts, { [id]: e.target.value }) }),
      add: () => { if (!draft.trim()) return; comp.setState({ notes: Object.assign({}, s.notes, { [id]: [{ date: o.now || "07-10-2026 09:40", who: o.me || "You", text: draft.trim() }].concat(added) }), drafts: Object.assign({}, s.drafts, { [id]: "" }) }); },
      hasEntries: entries.length > 0, noEntries: entries.length === 0,
    });
  }

  // dialog: comp.state.dlg = spec; spec.comment required => confirm disabled until typed
  function dialog(comp) {
    const d0 = comp.state.dlg; if (!d0) return { dlgOn: false, dlg: null }; const d = typeof d0 === "function" ? d0() : d0;
    const s = comp.state, text = s.dlgText || "", pick = s.dlgPick;
    const needText = true;
    const close = () => comp.setState({ dlg: null, dlgText: "", dlgPick: null, dlgSel: {}, dlgOpen: null });

    return {
      dlgOn: true,
      dlg: Object.assign({ title: "", sub: null, wide: "dlg", kv: [], hasKv: false, text: null, slot: null, ux: null, fields: [], hasFields: false, checks: [], hasChecks: false, reasons: [], hasReasons: false, comment: null, hasComment: false, list: [], hasList: false, ev: null, hasEv: false, docs: [], hasDocs: false, list2: [], hasList2: false, list2Title: null, docsTitle: null, listTitle: null, listMax: "none", list3: [], hasList3: false, list3Title: null }, d, {
        wide: d.wide ? "dlg wide" : "dlg", hasKv: !!(d.kv && d.kv.length), hasFields: !!(d.fields && d.fields.length), fields: (d.fields || []).map(q => { if (!q.choices) return q; const cur = (s.dlgSel || {})[q.label] ?? q.v, isOpen = s.dlgOpen === q.label; return Object.assign({}, q, { v: q.upper && cur !== "All" ? String(cur).toUpperCase() : cur, open: isOpen, bc: isOpen ? "var(--mat-sys-primary)" : null, go: () => comp.setState({ dlgOpen: isOpen ? null : q.label }), opts: q.choices.map(o => ({ label: (q.labels && q.labels[o]) || o, on: o === cur, bg: o === cur ? "var(--mat-sys-secondary-container)" : "transparent", fg: o === cur ? "var(--mat-sys-on-secondary-container)" : "var(--mat-sys-on-surface)", pick: () => comp.setState({ dlgSel: Object.assign({}, s.dlgSel, { [q.label]: o }), dlgOpen: null }) })) }); }), hasChecks: !!(d.checks && d.checks.length), hasReasons: !!(d.reasons && d.reasons.length), hasComment: !!d.comment, hasList: !!(d.list && d.list.length), hasEv: !!d.ev, hasDocs: !!(d.docs && d.docs.length), hasList2: !!(d.list2 && d.list2.length),
        reasons: (d.reasons || []).map((r, i) => ({ label: r, on: pick === i ? "true" : null, go: () => comp.setState({ dlgPick: i }) })),
        commentText: text, onComment: (e) => comp.setState({ dlgText: e.target.value }),
        commentLabel: d.comment ? d.comment.label + (d.comment.required ? " *" : "") : null, commentHint: null,
        actions: [btn(d.cancel || "Cancel", close, "text")].concat((d.actions || [btn(d.confirm || "Confirm", null, "filled")]).map(a => { const nt = a.needsText !== undefined ? a.needsText : a.kind === "filled" && needText !== false && !!(d.comment && d.comment.required); const np = a.needsPick !== undefined ? a.needsPick : a.kind === "filled" && !!(d.reasons && d.reasons.length); const blocked = (nt && !text.trim()) || (np && pick == null) || !!a.dis; return Object.assign({ hasIcon: !!a.icon, tip: null }, a, { go: a.go || (() => { close(); const f = a.onDone || d.onDone; if (f) f(text, pick); comp.setState({ snack: a.snack || d.snack || "Recorded, with your name and the time." }); }), dis: blocked ? "true" : null }); })),
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
  const ff = (label, v, o) => Object.assign({ panel: null, std: true, pair: false, rng: false, boxes: [], calOpen: false, cal: null, v1: null, v2: null, on1: null, on2: null, inp: false, box2: true, open: false, opts: [], label, v, box: true, area: false, icon: "arrow_drop_down", ro: null, err: null, errText: null, hint: null, go: null, gc: "auto", color: null, ph: null, onInput: null }, o || {});
  const area = (label, v, onInput, o) => Object.assign(ff(label, v, { box: false, area: true, onInput }), o || {});
  const li = (title, line, o) => Object.assign({ icon: null, title, line: line || null, chip: null, tone: "", btns: [] }, o || {});
  const doc = (name, meta, ok, o) => Object.assign({ name, meta, ok: !!ok, na: !ok, state: "Not yet in DART", go: (e) => { if (e && e.preventDefault) e.preventDefault(); } }, o || {});
  const door = (label, value, sub, go, o) => Object.assign({ info: [sub, (o && o.tip) || null].filter(Boolean).join(" · ") || label, label, value: String(value), sub: sub || "", go, color: "var(--mat-sys-on-surface)", on: null, tip: null, hasBar: false, bar: [], cap: null, hasMini: false, mini: [] }, o || {});
  const tli = (icon, what, when, who, o) => { const x = Object.assign({ icon, what, when, who, why: null, src: null, ev: null, bg: "var(--mat-sys-surface-container)" }, o || {}); x.fg = x.fg || (x.bg === "var(--mat-sys-surface-container)" ? "var(--mat-sys-on-surface)" : "var(--mat-sys-on-error)"); return x; };
  window.OFAKIT = { kv, ff, area, li, doc, door, tli, btn, fld, cell, col, ncol, part, block, tbl, D, f, add, diff, money, rnd, notes, dialog, sidebar, controls };
})();
