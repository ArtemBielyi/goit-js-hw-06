const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", (event) => {
  event.target.value.trim() !== ""
    ? (nameOutputEl.textContent = event.target.value)
    : (nameOutputEl.textContent = "Anonymous");
});
