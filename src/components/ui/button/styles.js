import styled from "styled-components";

export const StyledButton = styled.a`
  display: block;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorButton};
  min-width: ${(props) => `${props.minWidth}px` || "100%"};
  width: 260px;
  height: 60px;
  border: none;
  color: #ffffff;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 150%; /* 27px */

  max-width: 700px;

  padding: 17px 98px;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
    color: yellow;
  }

  &:active {
    box-shadow: none;
  }
`;
