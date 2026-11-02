// likes.js — adds a like button to every quote (the count resets on reload)
document.querySelectorAll('article.quote').forEach(card => {
  const footer = card.querySelector('footer');
  const btn = document.createElement('button');
  let n = 0;
  btn.className = 'like';
  btn.innerHTML = '♥ <span class="count">0</span>';
  btn.addEventListener('click', () => {
    n += 1;
    btn.classList.add('liked');
    btn.innerHTML = '♥ <span class="count">' + n + '</span>';
  });
  footer.appendChild(btn);
});
