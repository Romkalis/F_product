import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";
import { StyledHeader } from "./styles.js";
import PageWrapper from "../../layout/page-wrapper/page-wrapper";

function Header() {
  return (
    <StyledHeader className="page-header">
      <PageWrapper>
        <Logo />
        <Nav />
      </PageWrapper>
    </StyledHeader>
  );
}

export default Header;
