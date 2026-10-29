// Demo only: the Shaw and Partners logo in each artboard goes back to the start page.
// A plain click opens it here; a middle click, or a Ctrl, Cmd or Shift click, opens it in a new tab.
(function () {
  var LOGO = 'img[src*="logo-primary-reversed"]';
  var HOME = './index.html';
  var style = document.createElement('style');
  style.textContent = LOGO + '{cursor:pointer}';
  document.head.appendChild(style);
  function logoOf(e) {
    return e.target && e.target.closest && e.target.closest(LOGO);
  }
  function stop(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  document.addEventListener('click', function (e) {
    if (!logoOf(e)) return;
    stop(e);
    if (e.ctrlKey || e.metaKey || e.shiftKey) window.open(HOME, '_blank');
    else location.href = HOME;
  }, true);
  // A middle click fires auxclick, not click. Stopping its mousedown keeps the browser's autoscroll away.
  document.addEventListener('mousedown', function (e) {
    if (e.button === 1 && logoOf(e)) stop(e);
  }, true);
  document.addEventListener('auxclick', function (e) {
    if (e.button !== 1 || !logoOf(e)) return;
    stop(e);
    window.open(HOME, '_blank');
  }, true);
})();
