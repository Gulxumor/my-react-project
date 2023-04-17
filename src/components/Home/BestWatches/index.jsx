import React from "react";
import { useNavigate } from "react-router-dom";
import { watchesProducts } from "../../../utils/bestWatches";
import { Card } from "../../Generics/Card";
import { Container, Description, Products, Title, Wrapper } from "./style";

export const BestWatches = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Title>Best Watches</Title>
        <Description>
          Here you can check out our new products with fair price on rymo.
        </Description>
        <Products>
          {watchesProducts?.map((product) => (
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

export default BestWatches;
