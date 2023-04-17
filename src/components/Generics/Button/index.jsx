import React from "react";
import { Container } from "./style";

export const Button = ({
  children,
  type,
  icon,
  width,
  height,
  onClick,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
  uppercase,
}) => {
  return (
    <Container
      type={type}
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
      pr={pr}
      pl={pl}
      pb={pb}
      pt={pt}
      width={width}
      height={height}
      onClick={onClick}
      uppercase
    >
      {children}
    </Container>
  );
};

export default Button;
