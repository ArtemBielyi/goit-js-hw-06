const validationInputEl = document.querySelector("#validation-input");
const lengthInput = Number(validationInputEl.getAttribute("data-length"));

validationInputEl.addEventListener("blur", () => {
  if (validationInputEl.value.length !== lengthInput) {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  } else {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
  }
});
