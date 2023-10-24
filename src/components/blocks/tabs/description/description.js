import React from "react";
import { StyledDescription, StyledPrice } from "./styles";

function Description(props) {
  return (
    <>
      <StyledDescription>{props.description.text}</StyledDescription>
      <StyledPrice>
        {props.description.price} руб. / {props.description.weight} гр.
      </StyledPrice>
    </>
  );
}

export default Description;
