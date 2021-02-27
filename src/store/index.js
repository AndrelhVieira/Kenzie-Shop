import { createStore, combineReducers } from "redux";

import cartReducer from "./modules/cart/reducers";
import productsReducer from "./modules/products/reducers";

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(reducer);

export default store;
