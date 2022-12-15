// import { Product } from "./models/Product";

import { aboutus } from "./services/aboutService";
import { contactus } from "./services/contactService";
import { hamburgermenu, hamburgericon} from "./services/headerService";


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


hamburgericon?.addEventListener("click", function(event) {
  hamburgermenu();
}); 


//About
let about = document.getElementById("about");
  about?.addEventListener("click", function (event) {
    aboutus();
  });
  

  // Contact 
  let contact = document.getElementById("contact");
  contact?.addEventListener("click", function(event) {
    contactus();
  });
