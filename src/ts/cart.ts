import { hamburgermenu, hamburgericon } from "./services/headerService";
import { Product } from "./models/Product";
import { productList } from "./services/productService";
// Hamburger

hamburgericon?.addEventListener("click", function (event) {
    hamburgermenu();
  });
  



// // Shopping Cart 
// let container:HTMLDivElement = document.getElementById("shoppingCartContainer") as HTMLDivElement;

// let icon:HTMLElement = document.createElement("i") as HTMLElement;
// let button:HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
// let x:HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;
// let x2:HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;

// x2.href="../pages/checkout.html";
// x.href="../index.html";



// button.innerHTML="Gå till kassan";
// icon.className="fa-solid fa-x";
// export function shoppingCart(){
//     x2.appendChild(button);
//     x.appendChild(icon);
//     container.appendChild(title);
//     container.appendChild(x);
//     container.appendChild(x2);
//     container.style.display="flex";
//     icon.addEventListener ("click", function (event){
//       container.style.display="none";
//       container.innerHTML="";
//     });
//     button.addEventListener ("click", function (event){
//         container.style.display="none";
        
//       });
//   }
  

  // shoppingCart();

  // Products 

  let shoppingCartContainer: HTMLDivElement = document.getElementById("shoppingCartContainer") as HTMLDivElement;
  let cartButton: HTMLButtonElement = document.createElement("button");
  let title:HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
  title.innerHTML="Varukorg";
  shoppingCartContainer.appendChild(title);
function test(){
  var retrievedObject = JSON.parse(localStorage.getItem("cartList")||"");
  let nylista = [];
  for (let i = 0; i < retrievedObject.length; i++) {
   
    nylista.push(retrievedObject);
    console.log(retrievedObject);
  }
  
  for (let i = 0; i < nylista.length; i++) {

    let productDiv: HTMLDivElement = document.createElement("div");
    let productContainer = document.createElement("div");
    let title: HTMLHeadingElement = document.createElement("h3");
    let imageContainer: HTMLDivElement = document.createElement("div");
    let image: HTMLImageElement = document.createElement("img");
    let price: HTMLParagraphElement = document.createElement("p");
    let description: HTMLParagraphElement = document.createElement("p");
    let amountInput: HTMLInputElement = document.createElement("input");



    productDiv.className = "product";
    productContainer.className = "product" + "__" + retrievedObject[i].id;
    title.className = "product__title";
    imageContainer.className = "product__imageContainer";
    image.className = "product__imageContainer__img";
    price.className = "product__price";
    description.className = "product__description";
    amountInput.type = "number";
    amountInput.value=retrievedObject[i].amount;
    cartButton.innerHTML="Gå till kassan";
  
    // let amount:number = amountInput.valueAsNumber;
  
    title.innerHTML = retrievedObject[i].title;
    price.innerHTML = retrievedObject[i].price + " " + "kr"; // måste göra om till number sen
    description.innerHTML = retrievedObject[i].description;
  
    productContainer.appendChild(title);
    productContainer.appendChild(imageContainer);
    imageContainer.appendChild(image);
    productContainer.appendChild(description);
    productContainer.appendChild(price);
    productContainer.appendChild(amountInput);
    productDiv.appendChild(productContainer);
    shoppingCartContainer.appendChild(productDiv);

    amountInput.addEventListener("input", ()=>{
      if (retrievedObject[i].amount < amountInput.value) {
        retrievedObject[i].amount++;
    } else {
      retrievedObject[i].amount--;
    }
      // retrievedObject[i].amount;
      localStorage.setItem("cartList", JSON.stringify(retrievedObject));
      console.log(retrievedObject[i].amount);
    });
  }
}

test();
shoppingCartContainer.appendChild(cartButton);