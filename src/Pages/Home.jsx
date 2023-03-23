import React from "react";
import { Hero, Navbar } from "../Components";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  );
};

export default Home;
