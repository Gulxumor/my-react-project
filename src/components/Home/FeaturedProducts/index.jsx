import React from "react";
import { useNavigate } from "react-router-dom";
import { featuredProducts } from "../../../utils/featuredProducts";
import { Card } from "../../Generics/Card";
import { Container, Description, Products, Title, Wrapper } from "./style";

export const FeaturedProducts = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Title>New Arrivals</Title>
        <Description>
          Here you can check out our new products with fair price on rymo.
        </Description>
        <Products>
          {featuredProducts?.map((product) => (
            <Card
              onClick={() => navigate(`/shop/:${product?.id}`)}
              key={product?.id}
              product={product}
            />
          ))}
        </Products>
      </Wrapper>
    </Container>
  );
};

export default FeaturedProducts;
