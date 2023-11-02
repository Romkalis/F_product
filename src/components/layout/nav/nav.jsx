import React from "react";
import Button from "../../ui/button/button";
import { StyledNav, StyledLink } from "./styles.js";
import { useLocation } from "react-router-dom";

function Nav({ button }) {
  let location = useLocation();

  return (
    <StyledNav>
      {location.pathname === "/" ? (
        <Button className="nav__button" link="/buy/">
          Купить
        </Button>
      ) : (
        <StyledLink to="/">Главная</StyledLink>
      )}
    </StyledNav>
  );
}

export default Nav;
