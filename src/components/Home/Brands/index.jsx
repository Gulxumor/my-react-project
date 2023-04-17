import React from "react";
import { brands } from "../../../utils/brands";
import { Brand, Container, Wrapper } from "./style";

export const Brands = () => {
  return (
    <Container>
      <Wrapper>
        {brands?.map((brand) => (
          <Brand
            key={brand?.id}
            src={brand?.img}
            alt={brand?.title}
            loading="lazy"
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Brands;
