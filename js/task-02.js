const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEL = ingredients.map((element) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = element;

  return liEl;
});
const ingridEl = document.querySelector("#ingredients");
ingridEl.append(...ingredientsEL);
