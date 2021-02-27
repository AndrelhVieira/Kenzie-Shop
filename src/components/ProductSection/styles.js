import styled from "styled-components";

export const ProductsSection = styled.section`
  padding: 25px;
  margin: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 1000px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 700px) {
    padding: 0;
  }
`;
