// Products

let shoppingCartContainer: HTMLDivElement = document.getElementById(
  "shoppingCartContainer"
) as HTMLDivElement;
let cartButton: HTMLButtonElement = document.createElement("button");
let title: HTMLHeadingElement = document.createElement(
  "h3"
) as HTMLHeadingElement;
title.innerHTML = "Varukorg";

let away: HTMLHeadingElement = document.getElementById(
  "hamburgericonbtn"
) as HTMLHeadingElement;

away.style.opacity = "0";

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

// Rensa varukorg
let clearCartContainer: HTMLDivElement = document.createElement("div");
clearCartContainer.id = "clearCartContainer";
let clearCart = document.createElement("button");
clearCart.id = "clearCart";
clearCart.innerHTML = "Rensa Varukorg";

clearCart.addEventListener("click", () => {
  localStorage.removeItem("cartList");
  window.location.reload();
});

// Totalsumma
let totalAmountForAll = 0;
let totalAmountForAllContainer = document.createElement(
  "div"
) as HTMLDivElement;
totalAmountForAllContainer.id = "totalAmountForAllContainer";
let totalAmountForAllTitle:HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
let totalAmountForAllAmount = document.createElement(
  "p"
) as HTMLParagraphElement;
let totalAmountForAllKr = document.createElement("span") as HTMLSpanElement;
totalAmountForAllAmount.id = "";

let aTag: HTMLAnchorElement = document.createElement("a");
aTag.href = "../pages/checkout.html";
aTag.appendChild(cartButton);

function collectFromLS() {
  let retrievedObject = JSON.parse(localStorage.getItem("cartList") || "");
  let newList = [];
  for (let i = 0; i < retrievedObject.length; i++) {
    newList.push(retrievedObject);
    console.log(retrievedObject);
  }

  for (let i = 0; i < newList.length; i++) {
    let productContainer: HTMLDivElement = document.createElement("div");
    let title: HTMLHeadingElement = document.createElement("h3");
    let imageContainer: HTMLDivElement = document.createElement("div");
    let image: HTMLImageElement = document.createElement("img");
    let price: HTMLParagraphElement = document.createElement("p");
    let amountInput: HTMLInputElement = document.createElement("input");

    productContainer.className = "product" + "__" + retrievedObject[i].id;
    productContainer.id = "pCId";
    title.className = "product__title";
    imageContainer.className = "product__imageContainer";
    image.className = "product__imageContainer__img";
    price.className = "product__price";
    amountInput.className = "product__amountInput";
    amountInput.type = "number";
    amountInput.value = retrievedObject[i].amount;
    amountInput.max = "10";
    amountInput.min = "1";
    amountInput.id = "amountInput";
    cartButton.id = "checkoutButton";
    cartButton.innerHTML = "Gå till kassan";

    title.innerHTML = retrievedObject[i].title;
    price.innerHTML = retrievedObject[i].price + " " + "kr";

    productContainer.appendChild(imageContainer);
    imageContainer.appendChild(image);
    productContainer.appendChild(title);
    productContainer.appendChild(price);
    productContainer.appendChild(amountInput);
    shoppingCartContainer.appendChild(productContainer);

    // Totalpris per produkt
    let totalAmount: HTMLParagraphElement = document.createElement("p");
    let totalAmountSek:HTMLSpanElement = document.createElement("span");
    let sum: number = retrievedObject[i].amount;
    let sumAmount: number = retrievedObject[i].price;
    let totalSum: number = sum * sumAmount;
    let totalSumAsString: string = JSON.stringify(totalSum);
    totalAmountForAll += totalSum;
    totalAmount.innerHTML = totalSumAsString;
    totalAmount.className = "product__sum";
    totalAmount.id = "product__sum";
    totalAmountSek.innerHTML = " kr";
    totalAmount.appendChild(totalAmountSek);
    productContainer.appendChild(totalAmount);

    // totalsumma
    totalAmountForAllAmount.innerHTML = JSON.stringify(totalAmountForAll);
    totalAmountForAllTitle.innerHTML = "Totalsumma:";
    totalAmountForAllKr.innerHTML = " kr";
    totalAmountForAllContainer.appendChild(totalAmountForAllTitle);
    totalAmountForAllContainer.appendChild(totalAmountForAllAmount);
    totalAmountForAllAmount.appendChild(totalAmountForAllKr);

    amountInput.addEventListener("change", () => {
      location.reload();
      sum = retrievedObject[i].amount;
      sumAmount = retrievedObject[i].price;
      totalSum = sum * sumAmount;
      totalSumAsString = JSON.stringify(totalSum);
      totalAmount.innerHTML = totalSumAsString;
      totalAmount.appendChild(totalAmountSek);
      console.log(totalSumAsString);
      totalAmountForAllAmount.innerHTML = JSON.stringify(totalAmountForAll);
      totalAmountForAllContainer.appendChild(totalAmountForAllTitle);
      totalAmountForAllContainer.appendChild(totalAmountForAllAmount);
      totalAmountForAllAmount.appendChild(totalAmountForAllKr);
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

  clearCartContainer.appendChild(clearCart);
  shoppingCartContainer.appendChild(clearCartContainer);
  shoppingCartContainer.appendChild(totalAmountForAllContainer);
  shoppingCartContainer.appendChild(aTag);
}

collectFromLS();
