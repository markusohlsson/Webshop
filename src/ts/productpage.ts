import { Product } from "./models/Product";
import { productList } from "./services/productService";

let xxxx: Element = document.getElementById("xxxx") as HTMLElement;
let aStartpage: HTMLAnchorElement = document.createElement("a");
aStartpage.href = "../index.html#productsContainer";
xxxx.appendChild(aStartpage);

let productPageContainer: HTMLDivElement = document.getElementById(
  "productsContainer"
) as HTMLDivElement;

let productContainer: HTMLDivElement = document.getElementById(
  "container"
) as HTMLDivElement;

// hämta från LS //
let testListString: string = localStorage.getItem("savedProductList") || "";
let listProduct: Product = JSON.parse(testListString);

// varukorgslistan //
let cartList: Product[] = [];

function createHTMLForProductPage(productList: Product) {
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
  productContainer.className = "product" + "__" + productList.id;
  title.className = "product__title";
  imageContainer.className = "product__imageContainer";
  image.className = "product__imageContainer__img";
  price.className = "product__price";
  description.className = "product__description";
  amountInput.type = "number";

  // let amount:number = amountInput.valueAsNumber;

  title.innerHTML = productList.title;
  price.innerHTML = productList.price + " " + "kr"; // måste göra om till number sen
  description.innerHTML = productList.description;
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
    const cartListJSON: string = localStorage.getItem("cartList") || "";

    if (cartListJSON) {
      let cartListLS: Product[] = JSON.parse(cartListJSON);

      cartList = cartListLS;
    }

    const existingCartItemindex = cartList.findIndex(
      (cartItem) => cartItem.id === productList.id
    );

    if (existingCartItemindex >= 0) {
      cartList[existingCartItemindex].amount++; // = userAmount
    } else {
      productList.amount++; // = userAmount
      cartList.push(productList);
    }
    localStorage.setItem("cartList", JSON.stringify(cartList));
  });
}

createHTMLForProductPage(listProduct);
