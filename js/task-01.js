const categoryList = document.querySelector("#categories");
console.log(`Number of categories: ${categoryList.children.length}`);
const categoryEl = categoryList.querySelectorAll(`.item`);

categoryEl.forEach((item) => {
  const categoryTitle = item.firstElementChild.textContent;
  const categoryItems = item.lastElementChild.children.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
});
