import {
  CartSections,
  CartProducts,
  CartResume,
  CartResumeTitle,
  CartResumeInformations,
  NumberOfProducts,
  Total,
  CartResumeButton,
} from "./styles";
import CartCard from "../CartCard";

import { useSelector } from "react-redux";

const CartSection = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <CartSections>
      <CartProducts>
        {cart.map((product, index) => (
          <CartCard product={product} key={index} />
        ))}
      </CartProducts>
      <CartResume>
        <CartResumeTitle>Order Summary</CartResumeTitle>
        <CartResumeInformations>
          <NumberOfProducts>
            {cart.reduce((acc, curr) => acc + 1, 0)} products
          </NumberOfProducts>
          <Total>
            ${cart && cart.reduce((acc, curr) => acc + curr.price, 0)}
          </Total>
        </CartResumeInformations>
        <CartResumeButton>Finalize the order</CartResumeButton>
      </CartResume>
    </CartSections>
  );
};

export default CartSection;
