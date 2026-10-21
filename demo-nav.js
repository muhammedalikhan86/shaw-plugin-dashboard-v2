// Demo only: the Shaw and Partners logo in each artboard goes back to the start page.
(function () {
  var LOGO = 'img[src*="logo-primary-reversed"]';
  var style = document.createElement('style');
  style.textContent = LOGO + '{cursor:pointer}';
  document.head.appendChild(style);
  document.addEventListener('click', function (e) {
    var logo = e.target && e.target.closest && e.target.closest(LOGO);
    if (!logo) return;
    e.preventDefault();
    e.stopPropagation();
    location.href = './';
  }, true);
})();

// Demo only: a strip of links to view a page at a moment in the October 2026 cycle,
// for pages that have the "moment" setting. A link changes ?moment= without reloading, so the
// page keeps the view it is on; support.js's window.__demoRefresh re-reads the address.
(function () {
  var PAGES = {
    'portfolio-services.html': [
      ['01-10-2026 06:00 · List built', '1 Oct, 6:00 · List built'],
      ['01-10-2026 11:45 · Cull done', '1 Oct, 11:45 · Cull done'],
      ['02-10-2026 10:20 · Released', '2 Oct, 10:20 · Released'],
      ['07-10-2026 09:40 · Today', '7 Oct · Today']
    ]
  };
  PAGES['advisor.html'] = PAGES['portfolio-services.html'].slice();
  PAGES['portfolio-services.html'].push(['08-10-2026 10:00 · Ready to issue', '8 Oct · Ready to issue']);
  var page = location.pathname.split('/').pop();
  var moments = PAGES[page];
  if (!moments) return;
  var DEFAULT = '07-10-2026 09:40 · Today';
  var css = document.createElement('style');
  css.textContent =
    '.demo-moments{position:fixed;left:50%;top:8px;transform:translateX(-50%);z-index:9999;' +
    'display:flex;align-items:center;gap:4px;padding:6px 8px;border-radius:9999px;background:#000;' +
    'box-shadow:0 2px 8px rgba(0,0,0,.3);font:500 12px/16px Roboto,Arial,sans-serif;color:#ccc}' +
    '.demo-moments span{padding:0 8px}' +
    '.demo-moments a{padding:6px 12px;border-radius:9999px;color:#fff;text-decoration:none}' +
    '.demo-moments a:hover{background:#333}' +
    '.demo-moments a[aria-current]{background:#FF6A33;color:#000}';
  document.head.appendChild(css);
  var bar = document.createElement('nav');
  bar.className = 'demo-moments';
  bar.setAttribute('aria-label', 'View the month at');
  var lead = document.createElement('span');
  lead.textContent = 'View the month at';
  bar.appendChild(lead);
  var links = moments.map(function (m) {
    var a = document.createElement('a');
    a.textContent = m[1];
    a.addEventListener('click', function (e) {
      if (typeof window.__demoRefresh !== 'function') return; // falls back to a reload
      e.preventDefault();
      history.pushState(null, '', a.href);
      update();
      window.__demoRefresh();
    });
    bar.appendChild(a);
    return a;
  });
  function update() {
    var current = new URLSearchParams(location.search).get('moment') || DEFAULT;
    moments.forEach(function (m, i) {
      var p = new URLSearchParams(location.search);
      p.set('moment', m[0]);
      links[i].href = '?' + p.toString();
      if (m[0] === current) links[i].setAttribute('aria-current', 'true');
      else links[i].removeAttribute('aria-current');
    });
  }
  window.addEventListener('popstate', function () {
    update();
    if (typeof window.__demoRefresh === 'function') window.__demoRefresh();
  });
  update();
  // On <html>, not <body>: the page's runtime rebuilds the body after it loads.
  document.documentElement.appendChild(bar);
})();
