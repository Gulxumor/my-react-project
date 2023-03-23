import React from "react";
import { Container } from "./style";

const Button = ({ children, icon, type }) => {
  return (
    <Container type={type} icon={icon}>
      {icon && icon}
      {children}
    </Container>
  );
};

export default Button;
