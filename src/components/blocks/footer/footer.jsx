import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledFooter, FooterWrapper } from "./styles.js";

function Footer() {
  return (
    <StyledFooter>
      <FooterWrapper>
        <Logo />
        <span className="footer-copyright">Сделано вчера</span>
      </FooterWrapper>
    </StyledFooter>
  );
}

export default Footer;
