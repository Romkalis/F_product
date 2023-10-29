import React from "react";
import Button from "../../ui/button/button";
import { StyledNav, StyledLink } from "./styles.js";

function Nav({button}) {
  return (
    <StyledNav>
      { button? 
      <Button className="nav__button" link="/buy/">
        Купить
      </Button>
      :     <StyledLink>
      Главная
    </StyledLink> }
    </StyledNav>


  );
}
 
export default Nav;
