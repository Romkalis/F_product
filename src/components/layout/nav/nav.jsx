import React from "react";
import Button from "/src/components/ui/button/button";
import { StyledNav } from "./styles.js";

function Nav() {
  return (
    <StyledNav>
      <Button className="nav__button" link="/buy/">
        Купить
      </Button>
    </StyledNav>
  );
}

export default Nav;
