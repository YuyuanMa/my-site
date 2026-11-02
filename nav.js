// nav.js — puts the navigation and the footer into every page (DRY)
function load(file, target) {
  fetch(file)
    .then(r => r.text())
    .then(html => {
      document.getElementById(target).innerHTML = html;
    });
}
load('nav.html', 'site-header');
load('footer.html', 'site-footer');
