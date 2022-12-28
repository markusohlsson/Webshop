import { hamburgermenu, hamburgericon } from "./services/headerService";
import { createHTMLForProduct, productList } from "./services/productService";

createHTMLForProduct(productList);

// Hamburger
hamburgericon?.addEventListener("click", function (event) {
  hamburgermenu();
});
