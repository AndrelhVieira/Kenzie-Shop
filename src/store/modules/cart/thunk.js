import { addProduct, removeProduct } from "./actions";

export const addProductThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  list.push(product);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(addProduct(product));
};

export const removeProductThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();
  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(removeProduct(list));
};
