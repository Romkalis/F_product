import React from "react";
import { StyledWrapper } from "./styles.js";

function PageWrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

export default PageWrapper;
