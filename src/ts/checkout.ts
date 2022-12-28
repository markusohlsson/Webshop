let checkoutContainer: HTMLDivElement = document.getElementById(
  "checkoutContainer"
) as HTMLDivElement;
let titleForCheckout: HTMLHeadingElement = document.createElement(
  "h3"
) as HTMLHeadingElement;
titleForCheckout.innerHTML = "Kassa";

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

checkoutContainer.appendChild(titleForCheckout);
checkoutContainer.appendChild(tHeader);

// Totalsumma
let totalAmountForAll:number = 0;
let totalAmountForAllContainer:HTMLDivElement = document.createElement(
  "div"
) as HTMLDivElement;
totalAmountForAllContainer.id = "totalAmountForAllContainer";
let totalAmountForAllTitle:HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
let totalAmountForAllAmount:HTMLParagraphElement = document.createElement(
  "p"
) as HTMLParagraphElement;
let totalAmountForAllKr:HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
totalAmountForAllAmount.id = "";

function collectFromLS() {
  var retrievedObject = JSON.parse(localStorage.getItem("cartList") || "");
  let newList = [];
  for (let i = 0; i < retrievedObject.length; i++) {
    newList.push(retrievedObject);
    console.log(retrievedObject);
  }

  for (let i = 0; i < newList.length; i++) {
    let productContainer:HTMLDivElement = document.createElement("div");
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
    amountInput.type = "number";
    amountInput.value = retrievedObject[i].amount;
    amountInput.max = "10";
    amountInput.min = "1";
    amountInput.className = "product__amountInput";

    title.innerHTML = retrievedObject[i].title;
    price.innerHTML = retrievedObject[i].price + " " + "kr";

    productContainer.appendChild(imageContainer);
    imageContainer.appendChild(image);
    productContainer.appendChild(title);
    productContainer.appendChild(price);
    productContainer.appendChild(amountInput);
    checkoutContainer.appendChild(productContainer);

    // Totalpris per produkt
    let totalAmountPerProduct:HTMLParagraphElement = document.createElement("p");
    let totalAmountPerProductSek:HTMLSpanElement = document.createElement("span");
    let sum: number = retrievedObject[i].amount;
    let sumAmount: number = retrievedObject[i].price;
    let totalSum: number = sum * sumAmount;
    let totalSumAsString: string = JSON.stringify(totalSum);
    totalAmountForAll += totalSum;
    totalAmountPerProduct.innerHTML = totalSumAsString;
    totalAmountPerProduct.className = "product__sum";
    totalAmountPerProduct.id = "product__sum";
    totalAmountPerProductSek.innerHTML = " kr";
    totalAmountPerProduct.appendChild(totalAmountPerProductSek);
    productContainer.appendChild(totalAmountPerProduct);

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
      totalAmountPerProduct.innerHTML = totalSumAsString;
      totalAmountPerProduct.appendChild(totalAmountPerProductSek);
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
}

collectFromLS();
checkoutContainer.appendChild(totalAmountForAllContainer);

// Shopping Cart
let cartFormContainer: HTMLDivElement = document.getElementById(
  "checkoutContainer"
) as HTMLDivElement;
let formContainer: HTMLDivElement = document.createElement(
  "div"
) as HTMLDivElement;
let form: HTMLFormElement = document.createElement("form") as HTMLFormElement;

formContainer.className = "formContainer";

export function Checkout() {
  cartFormContainer.appendChild(formContainer);
  // Formulär
  formContainer.appendChild(form);
  form.appendChild(labelforFirstname);
  labelforFirstname.className = "formLabel";
  form.appendChild(inputforFirstname);
  inputforFirstname.className = "formInput";
  form.appendChild(labelforLastname);
  labelforLastname.className = "formLabel";
  form.appendChild(inputforLastname);
  inputforLastname.className = "formInput";
  form.appendChild(labelForEmail);
  labelForEmail.className = "formLabel";
  form.appendChild(inputForEmail);
  inputForEmail.className = "formInput";
  form.appendChild(labelForPhone);
  labelForPhone.className = "formLabel";
  form.appendChild(inputForPhone);
  inputForPhone.className = "formInput";
  form.appendChild(labelForAddress);
  labelForAddress.className = "formLabel";
  form.appendChild(inputForAddress);
  inputForAddress.className = "formInput";
  form.appendChild(labelForPostCode);
  labelForPostCode.className = "formLabel";
  form.appendChild(inputForPostCode);
  inputForPostCode.className = "formInput";
  form.appendChild(labelForPostAddress);
  labelForPostAddress.className = "formLabel";
  form.appendChild(inputForPostAddress);
  inputForPostAddress.className = "formInput";
  form.appendChild(labelForDeliverySection);
  labelForDeliverySection.className = "formH";
  form.appendChild(labelForDeliveryOne);
  labelForDeliveryOne.className = "formLabel";
  labelForDeliveryOne.appendChild(inputForDeliveryOne);
  inputForDeliveryOne.className = "formCheckbox";
  form.appendChild(labelForDeliveryTwo);
  labelForDeliveryTwo.className = "formLabel";
  labelForDeliveryTwo.appendChild(inputForDeliveryTwo);
  inputForDeliveryTwo.className = "formCheckbox";
  form.appendChild(labelForDeliveryThree);
  labelForDeliveryThree.className = "formLabel";
  labelForDeliveryThree.appendChild(inputForDeliveryThree);
  inputForDeliveryThree.className = "formCheckbox";
  form.appendChild(labelForPaymentSection);
  labelForPaymentSection.className = "formH";
  form.appendChild(labelForPaymentOne);
  labelForPaymentOne.className = "formLabel";
  labelForPaymentOne.appendChild(inputForPaymentOne);
  inputForPaymentOne.className = "formCheckbox";
  form.appendChild(labelForPaymentTwo);
  labelForPaymentTwo.className = "formLabel";
  labelForPaymentTwo.appendChild(inputForPaymentTwo);
  inputForPaymentTwo.className = "formCheckbox";
  form.appendChild(button);
}

// Firstname
let labelforFirstname: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let inputforFirstname: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;
//Lastname
let labelforLastname: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let inputforLastname: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;
//Email Adress
let labelForEmail: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let inputForEmail: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;
// Phone Number
let labelForPhone: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let inputForPhone: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;
// Address
let labelForAddress: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let inputForAddress: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;
// Post Code
let labelForPostCode: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let inputForPostCode: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;
// Post Address
let labelForPostAddress: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let inputForPostAddress: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;

// Delivery
let labelForDeliverySection: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let labelForDeliveryOne: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let inputForDeliveryOne: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;
let labelForDeliveryTwo: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let inputForDeliveryTwo: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;
let labelForDeliveryThree: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let inputForDeliveryThree: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;

// Payment
let labelForPaymentSection: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let labelForPaymentOne: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let inputForPaymentOne: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;
let labelForPaymentTwo: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let inputForPaymentTwo: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;

// Send
let button: HTMLButtonElement = document.createElement(
  "button"
) as HTMLButtonElement;

// Firstname
labelforFirstname.innerHTML = "Förnamn";
inputforFirstname.type = "text";
inputforFirstname.name = "firstname";
inputforFirstname.id = "firstname";
labelforFirstname.htmlFor = "firstname";
inputforFirstname.required = true;
inputforFirstname.placeholder = "John";

// Lastname
labelforLastname.innerHTML = "Efternamn";
inputforLastname.type = "text";
inputforLastname.name = "lastname";
inputforLastname.id = "lastname";
labelforLastname.htmlFor = "lastname";
inputforLastname.required = true;
inputforLastname.placeholder = "Doe";

// Email adress
labelForEmail.innerHTML = "Email";
labelForEmail.htmlFor = "email";
inputForEmail.type = "email";
inputForEmail.id = "email";
inputForEmail.name = "email";
inputForEmail.required = true;
inputForEmail.placeholder = "john@email.com";

// Phone Number
labelForPhone.innerHTML = "Telefon";
inputForPhone.type = "number";
inputForPhone.name = "phonenumber";
inputForPhone.id = "phonenumber";
labelForPhone.htmlFor = "phonenumber";
inputForPhone.required = true;
inputForPhone.placeholder = "0712345678";

// Address
labelForAddress.innerHTML = "Gatuadress";
inputForAddress.type = "text";
inputForAddress.name = "adress";
inputForAddress.id = "adress";
labelForAddress.htmlFor = "adress";
inputForAddress.required = true;
inputForAddress.placeholder = "Gata 10";

// Post Code
labelForPostCode.innerHTML = "Postkod";
inputForPostCode.type = "text";
inputForPostCode.name = "postcode";
inputForPostCode.id = "postcode";
labelForPostCode.htmlFor = "postcode";
inputForPostCode.required = true;
inputForPostCode.placeholder = "123 45";

// Post Address
labelForPostAddress.innerHTML = "Postadress";
inputForPostAddress.type = "text";
inputForPostAddress.name = "postadress";
inputForPostAddress.id = "postadress";
labelForPostAddress.htmlFor = "postadress";
inputForPostAddress.required = true;
inputForPostAddress.placeholder = "Stockholm";

// Delivery
labelForDeliverySection.innerHTML = "Leveransmetod";
labelForDeliverySection.htmlFor = "delivery";

// Delivery 1
inputForDeliveryOne.type = "radio";
inputForDeliveryOne.name = "delivery";
inputForDeliveryOne.id = "deliveryOne";
labelForDeliveryOne.htmlFor = "deliveryOne";
labelForDeliveryOne.innerHTML = "PostNord";
// Delivery 2
inputForDeliveryTwo.type = "radio";
inputForDeliveryTwo.name = "delivery";
inputForDeliveryTwo.id = "deliveryTwo";
labelForDeliveryTwo.htmlFor = "deliveryOne";
labelForDeliveryTwo.innerHTML = "Instabox";
// Delivery 3
inputForDeliveryThree.type = "radio";
inputForDeliveryThree.name = "delivery";
inputForDeliveryThree.id = "deliveryThree";
labelForDeliveryThree.htmlFor = "deliveryOne";
labelForDeliveryThree.innerHTML = "Budbee";

// Payment
labelForPaymentSection.innerHTML = "Betalningsmetod";
labelForPaymentSection.htmlFor = "payment";

// Payment 1
inputForPaymentOne.type = "radio";
inputForPaymentOne.name = "payment";
inputForPaymentOne.id = "paymentOne";
labelForPaymentOne.htmlFor = "paymentOne";
labelForPaymentOne.innerHTML = "Swish";
// Payment 2
inputForPaymentTwo.type = "radio";
inputForPaymentTwo.name = "payment";
inputForPaymentTwo.id = "paymentTwo";
labelForPaymentTwo.htmlFor = "paymentTwo";
labelForPaymentTwo.innerHTML = "Kort";

// Send
button.innerHTML = "Slutför Köp";
button.type = "submit";
button.id = "purchaseButton";

// Tack för ditt köp
let thankYouTitleContainer: HTMLDivElement = document.createElement("div");
let thankYouTitle: HTMLHeadingElement = document.createElement(
  "h3"
) as HTMLHeadingElement;

thankYouTitle.innerHTML = "Tack för ditt köp!";
let backToStart:HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
backToStart.innerHTML = "Återgå till startsidan";
thankYouTitleContainer.className = "thankYouTitleContainer";
backToStart.className = "backToStart";
let backToStartLink:HTMLAnchorElement = document.createElement("a");
backToStartLink.href = "../index.html";
backToStartLink.appendChild(backToStart);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  localStorage.removeItem("cartList");
  checkoutContainer.innerHTML = "";
  thankYouTitleContainer.appendChild(thankYouTitle);
  thankYouTitleContainer.appendChild(backToStartLink);
  cartFormContainer.appendChild(thankYouTitleContainer);
});
Checkout();
