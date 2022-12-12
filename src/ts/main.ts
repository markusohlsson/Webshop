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
