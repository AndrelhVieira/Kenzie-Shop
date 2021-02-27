import styled from "styled-components";

export const CartSections = styled.section`
  display: flex;
  justify-content: center;
  padding: 15px;
  flex-direction: column-reverse;
  /* @media screen and (max-width: 880px) {
    flex-direction: column-reverse;
  } ; */
`;

export const CartProducts = styled.section`
  padding: 0;
`;

export const CartResume = styled.section`
  padding: 15px;
  text-align: center;
  background-image: url("https://i.pinimg.com/originals/96/08/a1/9608a1d9410a2169dd41352876a777b7.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: #000;
  margin: 10px auto;
  height: 100%;
  width: 50vw;
  @media screen and (max-width: 525px) {
    width: 70vw;
  }
`;

export const CartResumeTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  @media screen and (max-width: 525px) {
    font-size: 1.5rem;
  }
`;

export const CartResumeInformations = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 525px) {
    flex-direction: column;
  }
`;

export const NumberOfProducts = styled.h2`
  @media screen and (max-width: 525px) {
    margin: 10px 0;
    font-size: 1.3rem;
  }
`;

export const Total = styled.h2`
  @media screen and (max-width: 525px) {
    margin: 10px 0;
    font-size: 1.3rem;
  }
`;

export const CartResumeButton = styled.button`
  padding: 15px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  border: 3px solid #000;
  color: #000;
  background: transparent;
  margin: 15px auto 0;
  display: block;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #fff;
    background: #000;
    box-shadow: 0 0 15px #000;
    transition: 0.2s;
  }
  @media screen and (max-width: 525px) {
    margin: auto;
  }
`;
