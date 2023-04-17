import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Generics/Button";
import { Container, Subtitle, Title, Wrapper } from "./style";

export const SeasonsBanner = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Subtitle>Mid Season's Sale</Subtitle>
        <Title>Autumn Collection UP TO 20% OFF</Title>
        <Button
          onClick={() => navigate("/shop")}
          type="secondary"
          width={"150px"}
        >
          Shop Now
        </Button>
      </Wrapper>
    </Container>
  );
};

export default SeasonsBanner;
