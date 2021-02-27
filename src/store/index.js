import {
  createStore,
  combineReducers,
  apllyMiddleware,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";

import cartReducer from "./modules/cart/reducers";
import productsReducer from "./modules/products/reducers";

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
