import { ApresentationSection, LogoImage, Button, Subtitle } from "./styles";

import logo from "../../images/logo_kenzie_shop.png";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const goToDashboard = () => {
    history.push("/products");
  };

  return (
    <header>
      <ApresentationSection>
        <LogoImage src={logo} alt="Logo Kenzie Shop" />
        <Subtitle>Your best choice for headsets</Subtitle>
        <Button onClick={goToDashboard}>Product</Button>
      </ApresentationSection>
    </header>
  );
};

export default Home;
