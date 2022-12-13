import { Product } from "../models/Product";

/* Headcovers */

let headcover1: Product = new Product(
  "Headcover Gris",
  "499",
  "Headcovers som passar för din driver. Finns i en mängd olika motiv så att du kan finna just din favorit.",
  "Headcovers",
  "../assets/products/Headcover_1.jpg",
  "headcover1"
);

let headcover2: Product = new Product(
  "Headcover Ko",
  "499",
  "Headcovers som passar för din driver. Finns i en mängd olika motiv så att du kan finna just din favorit.",
  "Headcovers",
  "../assets/products/Headcover_2.jpg",
  "headcover2"
);

let headcover3: Product = new Product(
  "Headcover Älg",
  "499",
  "Headcovers som passar för din driver. Finns i en mängd olika motiv så att du kan finna just din favorit.",
  "Headcovers",
  "..assets/products/Headcover_3.jpg",
  "headcover3"
);

export let headcovers: Product[] = [headcover1, headcover2, headcover3]; // tänker jag fel här?

/* Golfklubbor */

let proFliHi: Product = new Product(
  "Pro Fli Hi",
  "2799",
  "Mizuno Pro har alltid varit Mizunos mest innovationsinriktade serie med avancerad ingenjörskonst dold i ett stilrent och tidlöst paket.",
  "Golfklubbor",
  "../assets/products/Pro_Fli_Hi.jpg",
  "proFliHi"
);

let stealthUDI: Product = new Product(
  "Stealth UDI",
  "2899",
  "Stealth UDI är ett tourinspirerat utilityjärn riktat mot den bättre spelaren. Tyngdpunkten är placerad för att skapa en låg och penetrerande bollflykt med maximal kontroll.",
  "Golfklubbor",
  "../assets/products/Stealth_UDI.png",
  "stealthUDI"
);

let u510: Product = new Product(
  "U510",
  "2699",
  "Titleist U510 är ett utility-järn med hybridliknande egenskaper men med formen av en kraftfull järnklubba för högre utgångsvinkel och längd.",
  "Golfklubbor",
  "../assets/products/U510.jpg",
  "u510"
);

export let clubs: Product[] = [proFliHi, stealthUDI, u510]; // tänker jag fel här?

/* Golfbollar */

let tp5Pop: Product = new Product(
  "TP5 pix, Glass",
  "599",
  "Golfboll med...",
  "Golfbollar",
  "../assets/products/TP5_PIX_ROCKET_POP.jpg",
  "tp5Pop"
);

let tp5Sushi: Product = new Product(
  "TP5 pix, Sushi",
  "599",
  "Golfboll med fräsch doft av fisk",
  "Golfbollar",
  "../assets/products/TP5_PIX_SUSHI.jpg",
  "tp5Sushi"
);

let tp5Spider: Product = new Product(
  "TP5 pix, Spindel",
  "599",
  "Perfekt för familj med pälsallergi!",
  "Golfbollar",
  "../assets/products/TP5_PIX_SPIDER.jpg",
  "tp5Spider"
);

export let balls: Product[] = [tp5Pop, tp5Sushi, tp5Spider]; // tänker jag fel här?

/* Alla produkter */

export let productList: Product[] = [
  headcover1,
  headcover2,
  headcover3,
  proFliHi,
  stealthUDI,
  u510,
  tp5Pop,
  tp5Sushi,
  tp5Spider,
];

/* Funktioner */

export function createHTMLForProduct(products: Product[]) {
  let bigContainer: HTMLDivElement = document.getElementById(
    "productsContainer"
  ) as HTMLDivElement;

  for (let i: number = 0; i < products.length; i++) {
    let productDiv: HTMLDivElement = document.createElement("div");
    let productContainer: HTMLDivElement = document.createElement("div");
    let title: HTMLHeadingElement = document.createElement("h3");
    let imageContainer: HTMLDivElement = document.createElement("div");
    let image: HTMLImageElement = document.createElement("img");
    let price: HTMLParagraphElement = document.createElement("p");
    let description: HTMLParagraphElement = document.createElement("p");
    let addToCartButton: HTMLButtonElement = document.createElement("button");

    productDiv.className = "product";
    productContainer.className = "product" + "__" + products[i].id;
    title.className = "product__title";
    imageContainer.className = "product__imageContainer";
    image.className = "product__imageContainer__img";
    price.className = "product__price";
    description.className = "product__description";

    title.innerHTML = products[i].title;
    price.innerHTML = products[i].price + " " + "kr"; // måste göra om till number sen
    description.innerHTML = products[i].description;
    addToCartButton.innerHTML = "Lägg i varukorg";

    productContainer.appendChild(title);
    productContainer.appendChild(imageContainer);
    imageContainer.appendChild(image);
    productContainer.appendChild(price);
    productContainer.appendChild(description);
    productContainer.appendChild(addToCartButton);

    productDiv.appendChild(productContainer);
    bigContainer.appendChild(productDiv);
  }
}
