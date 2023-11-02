import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";
import PageWrapper from '../../layout/page-wrapper/page-wrapper'
import { StyledHeader } from "./styles.js";

function Header(props) {
  return (
    <StyledHeader className="page-header">
        <Logo />
        <Nav button={props.button ? props.button : null}/> 
         {/*   */}
    </StyledHeader>
  );
}

export default Header;
