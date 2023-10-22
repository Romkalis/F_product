import React from "react";
import { StyledLogo, Text } from "./styles.js";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";

function Logo() {
  return (
    <StyledLogo>
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
