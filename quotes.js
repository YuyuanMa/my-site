// quotes.js — shows one random quote in the hero on the quotes page
const articles = Array.from(document.querySelectorAll('article.quote'));
const hero = document.getElementById('random-quote');

if (hero && articles.length) {
  const pick = articles[Math.floor(Math.random() * articles.length)];
  const quote = pick.querySelector('blockquote').innerHTML;
  const source = pick.querySelector('footer').textContent;
  hero.innerHTML = '<blockquote>' + quote + '</blockquote><footer>' + source + '</footer>';
}
