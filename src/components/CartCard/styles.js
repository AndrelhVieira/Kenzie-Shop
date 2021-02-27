import styled from "styled-components";

export const CartCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url("https://i.pinimg.com/originals/96/08/a1/9608a1d9410a2169dd41352876a777b7.jpg");
  background-size: cover;
  margin: 10px auto;
  width: 70vw;
  @media screen and (max-width: 992px) {
    width: 90vw;
  }
  @media screen and (max-width: 680px) {
    flex-direction: column;
    width: 80vw;
    margin: 10px auto;
    padding: 10px;
  } ;
`;

export const CartImage = styled.div`
  width: 10rem;
  border-right: 3px solid #000;
  @media screen and (max-width: 680px) {
    border: 3px solid #000;
  } ;
`;

export const Image = styled.img`
  width: 100%;
`;

export const CartProductTitle = styled.h2`
  font-size: 1.3rem;
  width: 20vw;
  text-align: center;
  color: #000;
  @media screen and (max-width: 680px) {
    margin: 10px;
    width: 80vw;
  } ;
`;

export const CartProductPrice = styled(CartProductTitle)`
  margin: 0 15px;
`;

export const CartProductRemove = styled.button`
  padding: 15px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  border: 3px solid #000;
  color: #000;
  background: transparent;
  margin-right: 15px;
  display: block;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #fff;
    background: #000;
    box-shadow: 0 0 15px #000;
    transition: 0.2s;
  }
  @media screen and (max-width: 680px) {
    margin: 10px;
  } ;
`;
