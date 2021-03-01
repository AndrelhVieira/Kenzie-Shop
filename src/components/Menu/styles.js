import styled from "styled-components";
import bgWhite from "../../images/white.png";

export const MenuDiv = styled.div`
  padding: 10px 0;
  display: flex;
  background-image: ${`url(${bgWhite})`};
  background-size: cover;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  top: 0;
  width: 100%;
  z-index: 3;
  position: sticky;
`;

export const MenuLogo = styled.img`
  width: 10rem;
  cursor: pointer;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const CartButton = styled.button`
  padding: 15px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  border: 3px solid #000;
  color: #000;
  background: transparent;
  margin: 15px 20px 0;
  display: block;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #fff;
    background: #000;
    box-shadow: 0 0 15px #000;
    transition: 0.2s;
  }
  @media screen and (max-width: 425px) {
    margin: 0 5px 0;
    font-size: 0.7rem;
  }
`;
