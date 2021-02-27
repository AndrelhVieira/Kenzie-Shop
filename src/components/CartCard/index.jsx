import {
  CartCards,
  Image,
  CartProductTitle,
  CartProductPrice,
  CartImage,
  CartProductRemove,
} from "./styles";

import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/modules/cart/actions";

const CartCard = ({ product }) => {
  const { name, price, image } = product;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeProduct(product.id));
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
