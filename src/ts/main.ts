// import { Product } from "./models/Product";

import {
  balls,
  clubs,
  createHTMLForProduct,
  headcovers,
  productList,
} from "./services/productService";

createHTMLForProduct(productList);

createHTMLForProduct(headcovers);
createHTMLForProduct(clubs);
createHTMLForProduct(balls);

// Hamburger Menu //
let hamburgericon = document.getElementById('hamburgericonbtn');

hamburgericon?.addEventListener('click', function handleClick(event) {
hamburgermenu();
});

function hamburgermenu() {
  let navmenu:HTMLDivElement = document.getElementById("navmenu") as HTMLDivElement;
  let icon:HTMLLIElement = document.getElementById('hamburgericon') as HTMLLIElement;
    if (navmenu.style.display === "none") {
        navmenu.style.display = "flex";
      icon.className="fa-solid fa-x";
    } else {
        navmenu.style.display = "none";
      icon.className="fa-solid fa-bars";
    }
  }
