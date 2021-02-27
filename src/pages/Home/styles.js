import styled from "styled-components";

export const ApresentationSection = styled.section`
  position: relative;
  z-index: 2;
  color: #000;
  background: #fff;
  padding: 25px;
  margin: 0 100px;
  @media screen and (max-width: 550px) {
    margin: auto;
  }
  @media screen and (max-width: 500px) {
    margin: 0 10px;
  }
`;

export const LogoImage = styled.img`
  width: 80%;
  margin: 10px auto;
  display: block;
  @media screen and (max-width: 550px) {
    width: 100%;
    margin: auto;
  }
`;

export const Subtitle = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  margin: 10px 0;
  text-transform: uppercase;
`;

export const Button = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
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
    transition: 0.2s;1
  }
  @media screen and (max-width: 550px) {
    margin: 5px auto;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;
