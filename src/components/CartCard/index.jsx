import {
  CartCards,
  Image,
  CartProductTitle,
  CartProductPrice,
  CartImage,
  CartProductRemove,
} from "./styles";

import { useDispatch } from "react-redux";
import { removeProductThunk } from "../../store/modules/cart/thunk";

const CartCard = ({ product }) => {
  const { name, price, image } = product;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeProductThunk(product.id));
  };

  return (
    <CartCards>
      <CartImage>
        <Image src={image} />
      </CartImage>
      <CartProductTitle>{name}</CartProductTitle>
      <CartProductPrice>R${price}</CartProductPrice>
      <CartProductRemove onClick={handleRemove}>
        Remove product
      </CartProductRemove>
    </CartCards>
  );
};

export default CartCard;
