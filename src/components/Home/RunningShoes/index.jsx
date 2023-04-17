import React from "react";
import { useNavigate } from "react-router-dom";
import { runningShoes } from "../../../utils/runningShoes";
import { Card } from "../../Generics/Card";
import { Container, Description, Products, Title, Wrapper } from "./style";

export const RunningShoes = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Title>Running Shoes</Title>
        <Description>
          Here you can check out our new products with fair price on rymo.
        </Description>
        <Products>
          {runningShoes?.map((product) => (
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

export default RunningShoes;
