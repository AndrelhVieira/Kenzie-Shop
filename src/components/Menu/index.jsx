import { MenuDiv, MenuLogo, CartButton, ButtonsDiv } from "./styles";
import logo from "../../images/logo_kenzie_shop.png";

import { useHistory } from "react-router-dom";

const Menu = () => {
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
        <CartButton onClick={goToCart}>Your cart</CartButton>
      </ButtonsDiv>
    </MenuDiv>
  );
};

export default Menu;
