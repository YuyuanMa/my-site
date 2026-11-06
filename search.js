// Filter the quote cards as the user types.
var input = document.getElementById("quote-search");
if (input) {
  input.addEventListener("input", function () {
    var q = input.value.toLowerCase();
    document.querySelectorAll(".quote").forEach(function (card) {
      var text = card.textContent.toLowerCase();
      card.style.display = text.indexOf(q) !== -1 ? "" : "none";
    });
  });
}
