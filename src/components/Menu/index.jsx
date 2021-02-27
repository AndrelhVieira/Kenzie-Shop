import {
  MenuDiv,
  MenuLogo,
  CartButton,
  ButtonsDiv,
  SpanProducts,
} from "./styles";
import logo from "../../images/logo_kenzie_shop.png";

import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";

const Menu = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();

  const goToCart = () => {
    history.push("/cart");
  };

  const goToDashboard = () => {
    history.push("/products");
  };

  const goToHome = () => {
    history.push("/");
  };

  return (
    <MenuDiv>
      <MenuLogo src={logo} onClick={goToHome} />
      <ButtonsDiv>
        <CartButton onClick={goToDashboard}>Products</CartButton>
        <CartButton onClick={goToCart}>
          {cart.length !== 0 && <SpanProducts>{cart.length}</SpanProducts>}
          Your cart
        </CartButton>
      </ButtonsDiv>
    </MenuDiv>
  );
};

export default Menu;
