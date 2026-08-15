/* Licht/donker. Zonder keuze volgt de pagina het systeem; wie klikt, kiest
   voor dit toestel en dat blijft staan. */

(function () {
  var knop = document.getElementById('theme');
  if (!knop) return;

  var bewaard = null;
  try { bewaard = localStorage.getItem('thema'); } catch (e) { /* privémodus */ }

  function donkerNu() {
    var gekozen = document.documentElement.getAttribute('data-theme');
    if (gekozen) return gekozen === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function toon() {
    knop.textContent = donkerNu() ? 'Licht' : 'Donker';
  }

  if (bewaard === 'dark' || bewaard === 'light') {
    document.documentElement.setAttribute('data-theme', bewaard);
  }
  toon();

  knop.addEventListener('click', function () {
    var nieuw = donkerNu() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nieuw);
    try { localStorage.setItem('thema', nieuw); } catch (e) { /* privémodus */ }
    toon();
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toon);
})();
