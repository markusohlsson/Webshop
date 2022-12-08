import { Product } from "../models/Product";

let products: Product[];

function createHTMLForProduct(product: Product) {
  let bigContainer: HTMLDivElement = document.getElementById(
    "productContainer"
  ) as HTMLDivElement;

  let productContainer: HTMLDivElement = document.createElement("div");
  let title: HTMLHeadingElement = document.createElement("h3");
  let price: HTMLParagraphElement = document.createElement("p");
  let imageURL: HTMLImageElement = document.createElement("img");
  let description: HTMLParagraphElement = document.createElement("p");

  title.innerHTML = product.title;
  price.innerHTML = product.price; // måste göra om till number sen
  description.innerHTML = product.description;
  imageURL.innerText = product.image; // kolla så jag tänkt rätt - tror inte det

  for (let i: number = 0; i < products.length; i++) {
    createHTMLForProduct(products[i]);

    productContainer.appendChild(title);
    productContainer.appendChild(price);
    productContainer.appendChild(description);
    productContainer.appendChild(imageURL);

    bigContainer.appendChild(productContainer);
  }
}
