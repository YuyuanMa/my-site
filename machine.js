// machine.js — a useless machine: you switch it on, it switches itself off
const sw = document.getElementById('switch');
const hand = document.getElementById('hand');
const message = document.getElementById('message');
const countEl = document.getElementById('count');

let count = 0;
let busy = false;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

sw.addEventListener('change', () => {
  if (!sw.checked) return;   // only react when it is switched ON
  if (busy) return;          // the machine is already reaching for it

  busy = true;
  message.textContent = 'A hand is coming for the switch…';

  // wait, then the hand comes out and switches it back off
  setTimeout(() => {
    hand.classList.add('out');
    setTimeout(() => {
      sw.checked = false;      // it switches itself off
      count += 1;
      countEl.textContent = count;
      message.textContent = 'The machine switched itself off.';
      hand.classList.remove('out');
      busy = false;
    }, reduceMotion ? 0 : 500);
  }, reduceMotion ? 0 : 400);
});
