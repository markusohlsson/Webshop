import { hamburgermenu, hamburgericon } from "./services/headerService";
// Hamburger

hamburgericon?.addEventListener("click", function (event) {
    hamburgermenu();
  });
  



// Shopping Cart 
let container:HTMLDivElement = document.getElementById("shoppingCartContainer") as HTMLDivElement;
let title:HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
let icon:HTMLElement = document.createElement("i") as HTMLElement;
let button:HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
let x:HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;
let x2:HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;

x2.href="../pages/checkout.html";


x.href="../index.html";


title.innerHTML="Varukorg";
button.innerHTML="Gå till kassan";
icon.className="fa-solid fa-x";


export function shoppingCart(){
    x2.appendChild(button);
    x.appendChild(icon);
    container.appendChild(title);
    container.appendChild(x);
    container.appendChild(x2);
    container.style.display="flex";
    icon.addEventListener ("click", function (event){
      container.style.display="none";
      container.innerHTML="";
    });
    button.addEventListener ("click", function (event){
        container.style.display="none";
        
      });
  }
  

  shoppingCart();