import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionsType";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;
      return [...state, product];
    case REMOVE_PRODUCT:
      const { id } = action;
      const productsFiltered = state.filter((curr) => curr.id !== id);
      return productsFiltered;
    default:
      return state;
  }
};

export default cartReducer;
