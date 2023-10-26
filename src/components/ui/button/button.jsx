import React from "react";
import { StyledButton } from "./styles.js";

function Button({ children, minWidth, link, className, onClick , disabled}) {
  return (
    <StyledButton
      className={className}
      minWidth={minWidth}
      {...(link ? { href: link } : { as: "button", onClick, type: "button" })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
