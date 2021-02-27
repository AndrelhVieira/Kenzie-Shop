import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionsType";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id,
});
