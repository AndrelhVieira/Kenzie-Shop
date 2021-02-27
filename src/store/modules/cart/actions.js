import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionsType";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const removeProduct = (list) => ({
  type: REMOVE_PRODUCT,
  list,
});
