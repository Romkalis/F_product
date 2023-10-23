import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";
import PageWrapper from '../../layout/page-wrapper/page-wrapper'
import { StyledHeader } from "./styles.js";

function Header() {
  return (
    <PageWrapper>
    <StyledHeader className="page-header">
        <Logo />
        <Nav />
    </StyledHeader>
    </PageWrapper>

  );
}

export default Header;
