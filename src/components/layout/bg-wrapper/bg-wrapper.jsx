import React from "react";
import { StyledWrapper } from "./styles.js";

function BGWrapper({ color, children }) {
  return <StyledWrapper color={color ? color : null}>{children}</StyledWrapper>;
}

export default BGWrapper;
