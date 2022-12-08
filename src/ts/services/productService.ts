import { Product } from "../models/Product";

/* Headcovers */

let headcover1: Product = new Product(
  "Headcover Gris",
  "499",
  "Headcovers som passar för din driver. Finns i en mängd olika motiv så att du kan finna just din favorit.",
  "Headcovers",
  "..assets/products/Headcover_1.jpg" // har jag tänkt fel här???
);

let headcover2: Product = new Product(
  "Headcover Ko",
  "499",
  "Headcovers som passar för din driver. Finns i en mängd olika motiv så att du kan finna just din favorit.",
  "Headcovers",
  "..assets/products/Headcover_2.jpg" // har jag tänkt fel här???
);

let headcover3: Product = new Product(
  "Headcover Älg",
  "499",
  "Headcovers som passar för din driver. Finns i en mängd olika motiv så att du kan finna just din favorit.",
  "Headcovers",
  "..assets/products/Headcover_3.jpg" // har jag tänkt fel här???
);

let headcovers: Product[] = [headcover1, headcover2, headcover3]; // tänker jag fel här?

/* Golfklubbor */

let proFliHi: Product = new Product(
  "Pro Fli Hi",
  "2799",
  "Mizuno Pro har alltid varit Mizunos mest innovationsinriktade serie med avancerad ingenjörskonst dold i ett stilrent och tidlöst paket. Mizuno Pro är järnklubbor för så väl proffsgolfare som amatörer som värdesätter mjuk träffkänsla och elegant design.",
  "Golfklubbor",
  "..assets/products/Pro_Fli_Hi.jpg" // har jag tänkt fel här???
);

let xxxx: Product[] = [headcover1, headcover2, headcover3]; // tänker jag fel här?

/* Golfbollar */

let products: Product[] = [headcover1, headcover2, headcover3, proFliHi];

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
