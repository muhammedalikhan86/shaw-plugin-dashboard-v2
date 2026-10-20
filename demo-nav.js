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
