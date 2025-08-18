const categoryButtons = function (categories: string[]):void {
  console.log("Initializing category buttons...");
  renderCategoryButtons(categories);
  addButtonListeners();
}
const categoryButtonTemplate = function (category: string): string {
  return `<button class="category-button" id="${category}-category-button" data-category="${category}">
            ${category}
          </button>`;
}

function renderCategoryButtons(categories: string[]): void {

  console.log("Rendering category buttons for:", categories);
  const buttonContainer = document.querySelector(".category-buttons");
  if(!(buttonContainer instanceof HTMLDivElement)) return;
  buttonContainer.innerHTML = ""; // Clear existing buttons

  categories.forEach((category: string)=> {
    const buttonHTML: string = categoryButtonTemplate(category);
    buttonContainer.innerHTML += buttonHTML;
  });
}

function addButtonListeners() {
  const buttons: NodeListOf<HTMLButtonElement>  = document.querySelectorAll(".category-button");
  buttons.forEach(button => {
    button.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLButtonElement;
      const category: string|undefined = target.dataset.category;
      const allCards: NodeListOf<HTMLDivElement> = document.querySelectorAll(".cards");
      if(category === "All") {
        console.log("All categories button clicked, showing all cards.");
        allCards.forEach((cards: HTMLDivElement) => cards.classList.add("active"));
        return;
      }
      else {
        const allCards: NodeListOf<HTMLDivElement>  = document.querySelectorAll(".cards");
        allCards.forEach((cards: HTMLDivElement) => cards.classList.remove("active"));
        const relateCards = document.getElementById(category + "-cards");
        relateCards?.classList.add("active");
      }
    });
  });
}


export default categoryButtons;