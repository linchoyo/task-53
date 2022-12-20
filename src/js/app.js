import "../scss/app.scss";

let pv = document.querySelector(".price").textContent;
let product = document.querySelector(".product");
product.setAttribute("data-price", pv);

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready


});
