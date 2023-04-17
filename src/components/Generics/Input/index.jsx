import React from "react";
import { Container, Icon, InputField } from "./style";

export const Input = React.forwardRef(
  (
    {
      type,
      icon,
      width,
      height,
      onChange,
      placeholder,
      mt,
      mr,
      mb,
      ml,
      pt,
      pr,
      pb,
      pl,
      value,
    },
    ref
  ) => {
    return (
      <Container mr={mr} ml={ml} mb={mb} mt={mt}>
        <InputField
          icon={icon}
          type={type}
          ref={ref}
          pr={pr}
          pl={pl}
          pb={pb}
          pt={pt}
          value={value}
          width={width}
          height={height}
          onChange={onChange}
          placeholder={placeholder || "Maxsulotlarni izlash"}
          autoComplete="off"
        />
        <Icon icon={icon}>{icon}</Icon>
      </Container>
    );
  }
);

export default Input;
