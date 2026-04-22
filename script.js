const search = document.getElementById("search");

if (search) {
  search.addEventListener("input", function () {
    const value = search.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const name = card.querySelector("h2").innerText.toLowerCase();
      card.style.display = name.includes(value) ? "block" : "none";
    });
  });
}