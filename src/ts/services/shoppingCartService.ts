// Shopping Cart 

export function shoppingCart(){
    let container:HTMLDivElement = document.getElementById("shoppingCartContainer") as HTMLDivElement;
    let title:HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
    let icon:HTMLElement = document.createElement("i") as HTMLElement;
  
    container.appendChild(title);
    container.appendChild(icon);
    title.innerHTML="Varukorg";
  
    container.style.display="flex";
    icon.className="fa-solid fa-x";
    icon.addEventListener ("click", function (event){
      container.style.display="none";
      container.innerHTML="";
    }
    
  }  
  