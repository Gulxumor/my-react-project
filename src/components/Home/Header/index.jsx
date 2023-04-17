import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Generics/Button";
import { Container, Description, Subtitle, Title, Wrapper } from "./style";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Subtitle>New Arrivals</Subtitle>
        <Title>
          <span>Best Practice</span> This Year
        </Title>
        <Description>
          Shoomotic offers your very comfortable time on walking and exercises
        </Description>
        <Button onClick={() => navigate("/shop")} width={"160px"}>
          Shop Now
        </Button>
      </Wrapper>
    </Container>
  );
};
