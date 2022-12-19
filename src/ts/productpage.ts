import { Product } from "./models/Product";
import { productList } from "./services/productService";

let xxxx: Element = document.getElementById("xxxx") as HTMLElement;
let aStartpage: HTMLAnchorElement = document.createElement("a");
aStartpage.href = "../index.htmll#productsContainer";
xxxx.appendChild(aStartpage);

let productPageContainer: HTMLDivElement = document.getElementById(
  "productsContainer"
) as HTMLDivElement;

let productContainer: HTMLDivElement = document.getElementById(
  "container"
) as HTMLDivElement;

let testListString: any = localStorage.getItem("savedProductList"); // HJÄLP //
let listProduct = JSON.parse(testListString);

let theList: Product[] = [listProduct];

let cartList: Product[] = [];

function createHTMLForProductPage(productList: Product[]) {
  for (let i: number = 0; i < theList.length; i++) {
    let productDiv: HTMLDivElement = document.createElement("div");
    productContainer = document.createElement("div");
    let title: HTMLHeadingElement = document.createElement("h3");
    let imageContainer: HTMLDivElement = document.createElement("div");
    let image: HTMLImageElement = document.createElement("img");
    let price: HTMLParagraphElement = document.createElement("p");
    let description: HTMLParagraphElement = document.createElement("p");
    let addToCartButton: HTMLButtonElement = document.createElement("button");
    let amountInput: HTMLInputElement = document.createElement("input");

    productDiv.className = "product";
    productContainer.className = "product" + "__" + productList[i].id;
    title.className = "product__title";
    imageContainer.className = "product__imageContainer";
    image.className = "product__imageContainer__img";
    price.className = "product__price";
    description.className = "product__description";
    amountInput.type = "number";

    // let amount:number = amountInput.valueAsNumber;

    title.innerHTML = productList[i].title;
    price.innerHTML = productList[i].price + " " + "kr"; // måste göra om till number sen
    description.innerHTML = productList[i].description;
    addToCartButton.innerHTML = "Lägg i varukorg";

    productContainer.appendChild(title);
    productContainer.appendChild(imageContainer);
    imageContainer.appendChild(image);
    productContainer.appendChild(description);
    productContainer.appendChild(price);
    productContainer.appendChild(amountInput);
    productContainer.appendChild(addToCartButton);

    productDiv.appendChild(productContainer);
    productPageContainer.appendChild(productDiv);
    // productPageContainer.appendChild(productDiv);

    addToCartButton.addEventListener("click", () => {
      // let test: string = JSON.stringify(productList[i].amount++);
      // cartList.push(productList[i], test);
      localStorage.setItem("cartList", JSON.stringify(cartList));
    });
  }
}

let productId: string = productList[0].id;
let productDescription = productList[0].description;

createHTMLForProductPage(theList);

console.log(theList);

// xxxx.addEventListener("click", () => {
//     productPageContainer.className = "on";
//     productContainer.innerHTML = "";
// });
