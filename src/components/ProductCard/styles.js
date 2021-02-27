import styled from "styled-components";

// --davys-grey: #474747;
// --han-blue: #5373df;
// --manatee: #a7a5b6;
// --maximum-red: #de1a1a;

export const Card = styled.section`
  background: #fff;
  padding: 15px;
  text-align: center;
  margin: 10px;
  width: 25vw;
  justify-content: space-between;
  background-image: url("https://i.pinimg.com/originals/96/08/a1/9608a1d9410a2169dd41352876a777b7.jpg");
  @media screen and (max-width: 1000px) {
    width: 35vw;
  }
  @media screen and (max-width: 550px) {
    margin: 10px 0;
    width: 100vw;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #000;
  margin: 10px;
`;

export const CardPrice = styled(CardTitle)`
  font-size: 1.3rem;
`;

export const CardInformations = styled(CardTitle)`
  font-size: 1rem;
`;

export const CardImage = styled.div`
  border: 5px solid #000;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardButton = styled.button`
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
  &:disabled {
    cursor: not-allowed;
  }
`;
