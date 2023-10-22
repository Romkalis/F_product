import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyledHeader } from "./styles.js";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";

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
