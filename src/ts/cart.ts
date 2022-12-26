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

// rubrikraden //

let tHeader: HTMLDivElement = document.createElement("div") as HTMLDivElement;
let tPrice: HTMLDivElement = document.createElement("div") as HTMLDivElement;
let tAmount: HTMLDivElement = document.createElement("div") as HTMLDivElement;
let tSum: HTMLDivElement = document.createElement("div") as HTMLDivElement;

tHeader.className = "tHeader";
tPrice.className = "tHeader__tPrice";
tAmount.className = "tHeader__tAmount";
tSum.className = "tHeader__tSum";

tPrice.innerHTML = "Á-pris";
tAmount.innerHTML = "Antal";
tSum.innerHTML = "Summa";

tHeader.appendChild(tPrice);
tHeader.appendChild(tAmount);
tHeader.appendChild(tSum);

shoppingCartContainer.appendChild(title);
shoppingCartContainer.appendChild(tHeader);

let aTag: HTMLAnchorElement = document.createElement("a");
aTag.href = "../pages/checkout.html";
aTag.appendChild(cartButton);

// Rensa varukorg
let clearCart = document.createElement("button");
clearCart.id="clearCart";
clearCart.innerHTML="Rensa Varukorg";

clearCart.addEventListener("click",()=>{
  localStorage.removeItem("cartList");
  window.location.reload()
})

// Totalsumma 
let totalsumma=0;
let totaleC = document.createElement("div") as HTMLDivElement;
let totaleT = document.createElement("h3") as HTMLHeadingElement;
let totale = document.createElement("p") as HTMLParagraphElement;
let totaleK = document.createElement("span") as HTMLSpanElement;
totale.id="";

function collectFromLS() {

  let retrievedObject = JSON.parse(localStorage.getItem("cartList") || "");
  let newList = [];
  for (let i = 0; i < retrievedObject.length; i++) {
    newList.push(retrievedObject);
    console.log(retrievedObject);
  }


  for (let i = 0; i < newList.length; i++) {
    
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
    amountInput.max = "10";
    amountInput.min = "1";
    amountInput.id="amountInput";
    cartButton.id="checkoutButton"
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


   
    // Totalpris per produkt
    let totalAmount = document.createElement("p");
    let totalAmountSek = document.createElement("span");
    let sum:number = retrievedObject[i].amount;
    let sumAmount:number = retrievedObject[i].price;
    let totalSum:number = sum*sumAmount;
    let totalSumAsString:string = JSON.stringify(totalSum);
    totalsumma +=totalSum;
    totalAmount.innerHTML=totalSumAsString
    totalAmount.className="product__sum";
    totalAmount.id="product__sum";
    totalAmountSek.innerHTML=" Kr"
    totalAmount.appendChild(totalAmountSek)
    productContainer.appendChild(totalAmount);

    // totalsumma
    totale.innerHTML=JSON.stringify(totalsumma);
    totaleT.innerHTML="Totalsumma:";
    totaleK.innerHTML=" Kr";
    totaleC.appendChild(totaleT)
    totaleC.appendChild(totale);
    totale.appendChild(totaleK);

    amountInput.addEventListener("change",()=>{
      location.reload();
      sum= retrievedObject[i].amount;
      sumAmount = retrievedObject[i].price;
      totalSum= sum*sumAmount;
      totalSumAsString= JSON.stringify(totalSum);
      totalAmount.innerHTML=totalSumAsString
      totalAmount.appendChild(totalAmountSek)
      console.log(totalSumAsString);
      totale.innerHTML=JSON.stringify(totalsumma);
      totaleC.appendChild(totaleT)
      totaleC.appendChild(totale);
      totale.appendChild(totaleK);
    });

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
  shoppingCartContainer.appendChild(clearCart);
  shoppingCartContainer.appendChild(totaleC);

}

collectFromLS();


