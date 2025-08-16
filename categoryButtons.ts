const categoryButtons = function (categories) {
  console.log("Initializing category buttons...");
  renderCategoryButtons(categories);
  addButtonListeners();
}
const categoryButtonTemplate = function (category) {
  return `<button class="category-button" id="${category}-category-button" data-category="${category}">
            ${category}
          </button>`;
}

function renderCategoryButtons(categories) {

  console.log("Rendering category buttons for:", categories);
  const buttonContainer = document.querySelector(".category-buttons");
  buttonContainer.innerHTML = ""; // Clear existing buttons

  categories.forEach(category => {
    const buttonHTML = categoryButtonTemplate(category);
    buttonContainer.innerHTML += buttonHTML;
  });
}

function addButtonListeners() {
  const buttons = document.querySelectorAll(".category-button");
  buttons.forEach(button => {
    button.addEventListener("click", (event) => {
      const category = event.target.dataset.category;
      const allCards = document.querySelectorAll(".cards");
      if(category === "All") {
        console.log("All categories button clicked, showing all cards.");
        allCards.forEach(cards => cards.classList.add("active"));
        return;
      }
      else {
        const allCards = document.querySelectorAll(".cards");
        allCards.forEach(cards => cards.classList.remove("active"));
        const relateCards = document.getElementById(category + "-cards");
        relateCards.classList.add("active");
      }
    });
  });
}


export default categoryButtons;