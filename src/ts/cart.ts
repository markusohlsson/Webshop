import { hamburgermenu, hamburgericon } from "./services/headerService";
import { Product } from "./models/Product";
import { productList } from "./services/productService";
// Hamburger

hamburgericon?.addEventListener("click", function (event) {
  hamburgermenu();
});

// Products

let shoppingCartContainer: HTMLDivElement = document.getElementById(
  "shoppingCartContainer"
) as HTMLDivElement;
let cartButton: HTMLButtonElement = document.createElement("button");
let title: HTMLHeadingElement = document.createElement(
  "h3"
) as HTMLHeadingElement;
title.innerHTML = "Varukorg";
shoppingCartContainer.appendChild(title);
let aTag: HTMLAnchorElement = document.createElement("a");
aTag.href = "../pages/checkout.html";
aTag.appendChild(cartButton);

// tror inte att vi får använda "var" //

function test() {
  var retrievedObject = JSON.parse(localStorage.getItem("cartList") || "");
  let nylista = [];
  for (let i = 0; i < retrievedObject.length; i++) {
    nylista.push(retrievedObject);
    console.log(retrievedObject);
  }

  // OBS får vi ha svenskt namn här (en lista) ? //

  for (let i = 0; i < nylista.length; i++) {
    // let productDiv: HTMLDivElement = document.createElement("div");
    let productContainer = document.createElement("div");
    let title: HTMLHeadingElement = document.createElement("h3");
    let imageContainer: HTMLDivElement = document.createElement("div");
    let image: HTMLImageElement = document.createElement("img");
    let price: HTMLParagraphElement = document.createElement("p");
    // let description: HTMLParagraphElement = document.createElement("p");
    let amountInput: HTMLInputElement = document.createElement("input");

    // productDiv.className = "product";
    productContainer.className = "product" + "__" + retrievedObject[i].id;
    productContainer.id = "pCId";
    title.className = "product__title";
    imageContainer.className = "product__imageContainer";
    image.className = "product__imageContainer__img";
    price.className = "product__price";
    // description.className = "product__description";
    amountInput.className = "product__amountInput";
    amountInput.type = "number";
    amountInput.value = retrievedObject[i].amount;
    cartButton.innerHTML = "Gå till kassan";

    // let amount:number = amountInput.valueAsNumber;

    title.innerHTML = retrievedObject[i].title;
    price.innerHTML = retrievedObject[i].price + " " + "kr"; // måste göra om till number sen
    // description.innerHTML = retrievedObject[i].description;

    productContainer.appendChild(imageContainer);
    imageContainer.appendChild(image);
    productContainer.appendChild(title);
    // productContainer.appendChild(description);
    productContainer.appendChild(price);
    productContainer.appendChild(amountInput);
    // productDiv.appendChild(productContainer);
    shoppingCartContainer.appendChild(productContainer);

    amountInput.addEventListener("input", () => {
      if (retrievedObject[i].amount < amountInput.value) {
        retrievedObject[i].amount++;
      } else {
        retrievedObject[i].amount--;
      }
      localStorage.setItem("cartList", JSON.stringify(retrievedObject));
      console.log(retrievedObject[i].amount);
    });
  }
  shoppingCartContainer.appendChild(aTag);
}

test();
