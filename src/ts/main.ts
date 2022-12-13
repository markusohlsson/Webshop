// import { Product } from "./models/Product";

import {
  balls,
  clubs,
  createHTMLForProduct,
  headcovers,
  productList,
} from "./services/productService";

createHTMLForProduct(productList);

createHTMLForProduct(headcovers);
createHTMLForProduct(clubs);
createHTMLForProduct(balls);

// Hamburger Menu //
let hamburgericon = document.getElementById("hamburgericonbtn");

hamburgericon?.addEventListener("click", function(event) {
  hamburgermenu();
});

function hamburgermenu() {
  let navmenu: HTMLDivElement = document.getElementById(
    "navmenu"
  ) as HTMLDivElement;
  let icon: HTMLLIElement = document.getElementById(
    "hamburgericon"
  ) as HTMLLIElement;
  if (navmenu.style.display === "none") {
    navmenu.style.display = "flex";
    icon.className = "fa-solid fa-x";
  } else {
    navmenu.style.display = "none";
    icon.className = "fa-solid fa-bars";
  }
}



// About us //
function aboutus(){
  let container:HTMLDivElement = document.getElementById("aboutUsContainer") as HTMLDivElement;
  let title:HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
  let text:HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
  let icon:HTMLElement = document.createElement("i") as HTMLElement;

  container.appendChild(title);
  container.appendChild(text);
  container.appendChild(icon);
  title.innerHTML="Om oss.";
  text.innerHTML= "Dormys resa har sin början på Askersunds Golfklubb, en trekvarts bilfärd utan för Örebro. Fågelvägen cirka 18 mil väster om Stockholm. En solig sommardag år 1988 tröttnar en ambitiös men rastlös fjortonåring vid namn Mats Hedlund på att plocka bollar på rangen. Han frågar klubbens pro Lars Johansson om han istället kan få hoppa in och jobba i golfshoppen, vilket han får.";

  container.style.display="flex";
  icon.className="fa-solid fa-x";
  icon.addEventListener ("click", function (event){
    container.style.display="none";
    container.innerHTML="";
  }
}

let about = document.getElementById("about");
about?.addEventListener("click", function (event) {
  aboutus();
});


// About us //
function contactus(){
  let container:HTMLDivElement = document.getElementById("contactUsContainer") as HTMLDivElement;
  let title:HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
  let icon:HTMLElement = document.createElement("i") as HTMLElement;
  let form:HTMLFormElement = document.createElement("form") as HTMLFormElement;
  let sentMessage:HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;

  // Firstname 
  let labelforFirstname:HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
  let inputforFirstname:HTMLInputElement = document.createElement("input") as HTMLInputElement;
  //Lastname 
  let labelforLastname:HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
  let inputforLastname:HTMLInputElement = document.createElement("input") as HTMLInputElement;
  //Email Adress
  let labelForEmail:HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
  let inputForEmail:HTMLInputElement = document.createElement("input") as HTMLInputElement;
  //Message
  let labelForMessage:HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
  let textAreaForMessage:HTMLTextAreaElement = document.createElement("textarea") as HTMLTextAreaElement;
  // Send
  let button:HTMLButtonElement = document.createElement("button") as HTMLButtonElement;


  container.appendChild(title);
  container.appendChild(icon);
  container.appendChild(form);
  title.innerHTML="Kontakta oss";
  //Firstname
  form.appendChild(labelforFirstname);
  form.appendChild(inputforFirstname);
  //Lastname
  form.appendChild(labelforLastname);
  form.appendChild(inputforLastname);
  // Email
  form.appendChild(labelForEmail);
  form.appendChild(inputForEmail);
  // Message
  form.appendChild(labelForMessage);
  form.appendChild(textAreaForMessage);
  //button 
  form.appendChild(button);


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
  inputForEmail.placeholder="john@email.com"
  // Message
  labelForMessage.innerHTML="Meddelande";
  labelForMessage.htmlFor="message";
  textAreaForMessage.id="message";
  textAreaForMessage.name="message";
  textAreaForMessage.required=true;
  textAreaForMessage.placeholder="Skriv ditt meddelande här";
  // Send 
  button.innerHTML="Skicka";
  button.type="submit";
  

  form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Du har skickat ett meddelande till oss!");
    form.innerHTML="";
      
    sentMessage.innerHTML="Ditt meddelande har skickats!";
    container.appendChild(sentMessage);
  });

  container.style.display="flex";
  icon.className="fa-solid fa-x";
  icon.addEventListener ("click", function(event){
    container.style.display="none";
    container.innerHTML="";
  }
}

let contact = document.getElementById("contact");
contact?.addEventListener("click", function(event) {
  contactus();
});

