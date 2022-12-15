import { Checkout } from "./checkoutService";




// Shopping Cart 
let container:HTMLDivElement = document.getElementById("shoppingCartContainer") as HTMLDivElement;
let title:HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
let icon:HTMLElement = document.createElement("i") as HTMLElement;
let button:HTMLButtonElement = document.createElement("button") as HTMLButtonElement;

title.innerHTML="Varukorg";
button.innerHTML="Gå till kassan";
icon.className="fa-solid fa-x";


export function shoppingCart(){

    container.appendChild(title);
    container.appendChild(icon);
    container.appendChild(button);
    container.style.display="flex";
    icon.addEventListener ("click", function (event){
      container.style.display="none";
      container.innerHTML="";
    });
    button.addEventListener ("click", function (event){
        Checkout();
        container.style.display="none";
      });
  }
  