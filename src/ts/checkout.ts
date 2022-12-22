import { hamburgermenu, hamburgericon } from "./services/headerService";
// Hamburger

hamburgericon?.addEventListener("click", function (event) {
  hamburgermenu();
});

let checkoutContainer: HTMLDivElement = document.getElementById(
  "checkoutContainer"
) as HTMLDivElement;
let productsContainer: HTMLDivElement = document.createElement("div");
let cartButton: HTMLButtonElement = document.createElement("button");
let title2: HTMLHeadingElement = document.createElement(
  "h3"
) as HTMLHeadingElement;
title2.innerHTML = "Kassa";
checkoutContainer.appendChild(title2);
let aTag: HTMLAnchorElement = document.createElement("a");
aTag.href = "../pages/checkout.html";
aTag.appendChild(cartButton);

// let arrow:HTMLElement = document.createElement("i");
// let arrowlink:HTMLAnchorElement = document.createElement("a");
// arrow.className="fa-solid fa-arrow-left";
// arrowlink.href="../pages/cart.html";
// arrowlink.appendChild(arrow);
// checkoutContainer.appendChild(arrowlink);

function test() {
  var retrievedObject = JSON.parse(localStorage.getItem("cartList") || "");
  let nylista: any[] = [];
  for (let i = 0; i < retrievedObject.length; i++) {
    nylista.push(retrievedObject);
    console.log(retrievedObject);
  }

  // måste ändra till engelskt namn på listan //

  for (let i = 0; i < nylista.length; i++) {
    // let productsContainer = document.createElement("div");
    let productContainer = document.createElement("div");
    let title: HTMLHeadingElement = document.createElement("h3");
    let imageContainer: HTMLDivElement = document.createElement("div");
    let image: HTMLImageElement = document.createElement("img");
    let price: HTMLParagraphElement = document.createElement("p");
    let amountInput: HTMLInputElement = document.createElement("input");

    // productsContainer.className = "productsContainer";
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

    // let amount:number = amountInput.valueAsNumber;

    title.innerHTML = retrievedObject[i].title;
    price.innerHTML = retrievedObject[i].price + " " + "kr"; // måste göra om till number sen

    productContainer.appendChild(imageContainer);
    imageContainer.appendChild(image);
    productContainer.appendChild(title);
    productContainer.appendChild(price);
    productContainer.appendChild(amountInput);
    // productsContainer.appendChild(productContainer);
    checkoutContainer.appendChild(productContainer);

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

test();

// Shopping Cart
let cartFormContainer: HTMLDivElement = document.getElementById(
  "checkoutContainer"
) as HTMLDivElement;
let formContainer: HTMLDivElement = document.createElement(
  "div"
) as HTMLDivElement;
let form: HTMLFormElement = document.createElement("form") as HTMLFormElement;

let z: HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;

formContainer.className = "formContainer";

export function Checkout() {
  cartFormContainer.appendChild(formContainer);
  // Formulär
  formContainer.appendChild(form);
  form.appendChild(labelforFirstname);
  form.appendChild(inputforFirstname);
  form.appendChild(labelforLastname);
  form.appendChild(inputforLastname);
  form.appendChild(labelForEmail);
  form.appendChild(inputForEmail);
  form.appendChild(labelForPhone);
  form.appendChild(inputForPhone);
  form.appendChild(labelForAddress);
  form.appendChild(inputForAddress);
  form.appendChild(labelForPostCode);
  form.appendChild(inputForPostCode);
  form.appendChild(labelForPostAddress);
  form.appendChild(inputForPostAddress);
  form.appendChild(labelForDeliverySection);
  form.appendChild(inputForDeliveryOne);
  form.appendChild(inputForDeliveryTwo);
  form.appendChild(inputForDeliveryThree);
  form.appendChild(labelForPaymentSection);
  form.appendChild(inputForPaymentOne);
  form.appendChild(inputForPaymentTwo);
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
let inputForDeliveryOne: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;
let inputForDeliveryTwo: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;
let inputForDeliveryThree: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;

// Payment
let labelForPaymentSection: HTMLLabelElement = document.createElement(
  "label"
) as HTMLLabelElement;
let inputForPaymentOne: HTMLInputElement = document.createElement(
  "input"
) as HTMLInputElement;
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
// Delivery 2
inputForDeliveryTwo.type = "radio";
inputForDeliveryTwo.name = "delivery";
inputForDeliveryTwo.id = "deliveryTwo";
// Delivery 3
inputForDeliveryThree.type = "radio";
inputForDeliveryThree.name = "delivery";
inputForDeliveryThree.id = "deliveryThree";

// Payment
labelForPaymentSection.innerHTML = "Betalningsmetod";
labelForPaymentSection.htmlFor = "payment";

// Payment 1
inputForPaymentOne.type = "radio";
inputForPaymentOne.name = "payment";
inputForPaymentOne.id = "paymentOne";
// Payment 2
inputForPaymentTwo.type = "radio";
inputForPaymentTwo.name = "payment";
inputForPaymentTwo.id = "paymentTwo";

// Send
button.innerHTML = "Slutför Köp";
button.type = "submit";

// Tack för ditt köp Test
let testp: HTMLParagraphElement = document.createElement(
  "p"
) as HTMLParagraphElement;
let x = inputforFirstname.value;
testp.innerHTML = "Tack för ditt köp" + x + "!";

//

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkoutContainer.innerHTML = "";
  cartFormContainer.appendChild(testp);
});
Checkout();
