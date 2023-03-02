function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanEl = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

btnColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
});
