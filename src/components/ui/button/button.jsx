import React from "react";
import { StyledButton } from "./styles.js";

function Button({ children, minWidth, link, className }) {
  return (
    <StyledButton
      className={className}
      minWidth={minWidth}
      {...(link ? { href: link } : { as: "button", type: "button" })}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
