import { Product } from "./models/Product";

/* Headcovers */
let headcover1: Product = new Product(
  "Headcover Gris",
  "499",
  "Headcovers som passar för din driver. Finns i en mängd olika motiv så att du kan finna just din favorit.",
  "Headcovers",
  "./assets/products/Headcover_1.jpg" // har jag tänkt fel här???
);

let headcover2: Product = new Product(
  "Headcover Ko",
  "499",
  "Headcovers som passar för din driver. Finns i en mängd olika motiv så att du kan finna just din favorit.",
  "Headcovers",
  "./assets/products/Headcover_2.jpg" // har jag tänkt fel här???
);

let headcover3: Product = new Product(
  "Headcover Älg",
  "499",
  "Headcovers som passar för din driver. Finns i en mängd olika motiv så att du kan finna just din favorit.",
  "Headcovers",
  "./assets/products/Headcover_3.jpg" // har jag tänkt fel här???
);

let headcovers: Product[] = [headcover1, headcover2, headcover3]; // tänker jag fel här?

/* Golfklubbor */

let proFliHi: Product = new Product(
  "Pro Fli Hi",
  "2799",
  "Mizuno Pro har alltid varit Mizunos mest innovationsinriktade serie med avancerad ingenjörskonst dold i ett stilrent och tidlöst paket. Mizuno Pro är järnklubbor för så väl proffsgolfare som amatörer som värdesätter mjuk träffkänsla och elegant design.",
  "Golfklubbor",
  "./assets/products/Pro_Fli_Hi.jpg" // har jag tänkt fel här???
);

let stealthUDI: Product = new Product(
  "Stealth UDI",
  "2899",
  "Stealth UDI är ett tourinspirerat utilityjärn riktat mot den bättre spelaren. Tyngdpunkten är placerad för att skapa en låg och penetrerande bollflykt med maximal kontroll.",
  "Golfklubbor",
  "./assets/products/Stealth_UDI.png" // har jag tänkt fel här???
);

let u510: Product = new Product(
  "U510",
  "2699",
  "Titleist U510 är ett utility-järn med hybridliknande egenskaper men med formen av en kraftfull järnklubba för högre utgångsvinkel och längd.",
  "Golfklubbor",
  "./assets/products/U510.jpg" // har jag tänkt fel här???
);

let xxxx: Product[] = [proFliHi, stealthUDI, u510]; // tänker jag fel här?

/* Golfbollar */

// TP5_PIX_ROCKET_POP.jpg

let tp5Pop: Product = new Product(
  "TP5 pix, Glass",
  "599",
  "Golfboll med...",
  "Golfbollar",
  "./assets/products/TP5_PIX_ROCKET_POP.jpg" // har jag tänkt fel här???
);

// TP5_PIX_SUSHI.jpg

let tp5Sushi: Product = new Product(
  "TP5 pix, Sushi",
  "599",
  "Golfboll med fräsch doft av fisk",
  "Golfbollar",
  "./assets/products/TP5_PIX_SUSHI.jpg" // har jag tänkt fel här???
);

//TP5_PIX_SPIDER.jpg

let tp5Spider: Product = new Product(
  "TP5 pix, Spindel",
  "599",
  "Perfekt för familj med pälsallergi!",
  "Golfbollar",
  "./assets/products/TP5_PIX_SPIDER.jpg" // har jag tänkt fel här???
);

let xxxxxx: Product[] = [tp5Pop, tp5Sushi, tp5Spider]; // tänker jag fel här?

/* ... */

let productList: Product[] = [
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

function createHTMLForProduct(productList: Product[]) {
  let bigContainer: HTMLDivElement = document.getElementById(
    "productContainer"
  ) as HTMLDivElement;

  for (let i: number = 0; i < productList.length; i++) {
    let productContainer: HTMLDivElement = document.createElement("div");
    let title: HTMLHeadingElement = document.createElement("h3");
    let price: HTMLParagraphElement = document.createElement("p");
    let imageURL: HTMLImageElement = document.createElement("img");
    let description: HTMLParagraphElement = document.createElement("p");

    title.innerHTML = productList[i].title;
    price.innerHTML = productList[i].price; // måste göra om till number sen
    description.innerHTML = productList[i].description;
    // imageURL.innerText = productList[i].image; // kolla så jag tänkt rätt - tror inte det

    productContainer.appendChild(title);
    productContainer.appendChild(price);
    productContainer.appendChild(description);
    // productContainer.appendChild(imageURL);

    bigContainer.appendChild(productContainer);
  }
}

createHTMLForProduct(productList);
