// A "back to top" button that appears after scrolling.
var btn = document.createElement("button");
btn.className = "to-top";
btn.textContent = "↑ Top";
btn.setAttribute("aria-label", "Back to top");
document.body.appendChild(btn);

btn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  btn.classList.toggle("visible", window.scrollY > 400);
});
