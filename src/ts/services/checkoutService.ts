// Shopping Cart 
let container:HTMLDivElement = document.getElementById("checkoutContainer") as HTMLDivElement;
let title:HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
let icon:HTMLElement = document.createElement("i") as HTMLElement;
let formContainer:HTMLDivElement = document.createElement("div") as HTMLDivElement;
let form:HTMLFormElement = document.createElement("form") as HTMLFormElement;

title.innerHTML="Kassa";
icon.className="fa-solid fa-x";


export function Checkout(){

    container.appendChild(title);
    container.appendChild(icon);
    container.appendChild(formContainer);
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



    container.style.display="flex";
    icon.addEventListener ("click", function (event){
      container.style.display="none";
      container.innerHTML="";
    });
  }
  

 // Firstname 
 let labelforFirstname:HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
 let inputforFirstname:HTMLInputElement = document.createElement("input") as HTMLInputElement;
 //Lastname 
 let labelforLastname:HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
 let inputforLastname:HTMLInputElement = document.createElement("input") as HTMLInputElement;
 //Email Adress
 let labelForEmail:HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
 let inputForEmail:HTMLInputElement = document.createElement("input") as HTMLInputElement;
// Phone Number
let labelForPhone:HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
let inputForPhone:HTMLInputElement = document.createElement("input") as HTMLInputElement;
// Address
let labelForAddress:HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
let inputForAddress:HTMLInputElement = document.createElement("input") as HTMLInputElement;
// Post Code
let labelForPostCode:HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
let inputForPostCode:HTMLInputElement = document.createElement("input") as HTMLInputElement;
// Post Address
let labelForPostAddress:HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
let inputForPostAddress:HTMLInputElement = document.createElement("input") as HTMLInputElement;

// Delivery 
let labelForDeliverySection:HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
let inputForDeliveryOne:HTMLInputElement = document.createElement("input") as HTMLInputElement;
let inputForDeliveryTwo:HTMLInputElement = document.createElement("input") as HTMLInputElement;
let inputForDeliveryThree:HTMLInputElement = document.createElement("input") as HTMLInputElement;

// Payment
let labelForPaymentSection:HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
let inputForPaymentOne:HTMLInputElement = document.createElement("input") as HTMLInputElement;
let inputForPaymentTwo:HTMLInputElement = document.createElement("input") as HTMLInputElement;

 // Send
let button:HTMLButtonElement = document.createElement("button") as HTMLButtonElement;


 // Firstname 
 labelforFirstname.innerHTML="Förnamn";
 inputforFirstname.type="text";
 inputforFirstname.name="firstname";
 inputforFirstname.id="firstname";
 labelforFirstname.htmlFor="firstname";
 inputforFirstname.required=true;
 inputforFirstname.placeholder="John";

 // Lastname
 labelforLastname.innerHTML="Efternamn";
 inputforLastname.type="text";
 inputforLastname.name="lastname";
 inputforLastname.id="lastname";
 labelforLastname.htmlFor="lastname";
 inputforLastname.required=true;
 inputforLastname.placeholder="Doe";

 // Email adress
 labelForEmail.innerHTML="Email";
 labelForEmail.htmlFor="email";
 inputForEmail.type="email";
 inputForEmail.id="email";
 inputForEmail.name="email";
 inputForEmail.required=true;
 inputForEmail.placeholder="john@email.com";

 // Phone Number 
 labelForPhone.innerHTML="Telefon";
 inputForPhone.type="number";
 inputForPhone.name="phonenumber";
 inputForPhone.id="phonenumber";
 labelForPhone.htmlFor="phonenumber";
 inputForPhone.required=true;
 inputForPhone.placeholder="0712345678";

 // Address
 labelForAddress.innerHTML="Gatuadress";
 inputForAddress.type="text";
 inputForAddress.name="adress";
 inputForAddress.id="adress";
 labelForAddress.htmlFor="adress";
 inputForAddress.required=true;
 inputForAddress.placeholder="Gata 10";

 // Post Code
 labelForPostCode.innerHTML="Postkod";
 inputForPostCode.type="text";
 inputForPostCode.name="postcode";
 inputForPostCode.id="postcode";
 labelForPostCode.htmlFor="postcode";
 inputForPostCode.required=true;
 inputForPostCode.placeholder="123 45";

  // Post Address
  labelForPostAddress.innerHTML="Postadress";
  inputForPostAddress.type="text";
  inputForPostAddress.name="postadress";
  inputForPostAddress.id="postadress";
  labelForPostAddress.htmlFor="postadress";
  inputForPostAddress.required=true;
  inputForPostAddress.placeholder="Stockholm";

  // Delivery
  labelForDeliverySection.innerHTML="Leveransmetod";
  labelForDeliverySection.htmlFor="delivery";

  // Delivery 1
  inputForDeliveryOne.type="radio";
  inputForDeliveryOne.name="delivery";
  inputForDeliveryOne.id="deliveryOne";
  // Delivery 2
  inputForDeliveryTwo.type="radio";
  inputForDeliveryTwo.name="delivery";
  inputForDeliveryTwo.id="deliveryTwo";
  // Delivery 3
  inputForDeliveryThree.type="radio";
  inputForDeliveryThree.name="delivery";
  inputForDeliveryThree.id="deliveryThree";

    // Payment
    labelForPaymentSection.innerHTML="Betalningsmetod";
    labelForPaymentSection.htmlFor="payment";
  
    // Payment 1
    inputForPaymentOne.type="radio";
    inputForPaymentOne.name="payment";
    inputForPaymentOne.id="paymentOne";
    // Payment 2
    inputForPaymentTwo.type="radio";
    inputForPaymentTwo.name="payment";
    inputForPaymentTwo.id="paymentTwo";

  // Send 
  button.innerHTML="Slutför Köp";
  button.type="submit";


