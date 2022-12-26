import { aboutus } from "./services/aboutService";

import { contactus } from "./services/contactService";
import { hamburgermenu, hamburgericon } from "./services/headerService";

import { createHTMLForProduct, productList } from "./services/productService";
// import { shoppingCart } from "./services/shoppingCartService";

createHTMLForProduct(productList);

// Hamburger

hamburgericon?.addEventListener("click", function (event) {
  hamburgermenu();
});

//About
let about = document.getElementById("about");
about?.addEventListener("click", function (event) {
  aboutus();
});

// Contact
let contact = document.getElementById("contact");
contact?.addEventListener("click", function (event) {
  contactus();
});

// // Cart
// let cart = document.getElementById("cart");
// cart?.addEventListener("click", function (event) {
//   shoppingCart();
// });
