import React, { useState } from "react";
import Button from "../Button";
import { VscPlay } from "react-icons/vsc";
import MovieModal from "../MovieModal";
import {
  Btns,
  Container,
  Description,
  Rating,
  Subtitle,
  Title,
  Wrapper,
} from "./style";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Title>STAR WARS</Title>
        <Subtitle>THE RISE OF SKYWALKER</Subtitle>
        <Description>
          The surviving members of the resistance face the First Order once
          again, and the legendary conflict between the Jedi and the Sith
          reaches its peak bringing the Skywalker saga to its end.
        </Description>
        <Rating allowHalf defaultValue={2.5} />
        <Btns>
          <Button onClick={() => setIsModalOpen(true)} icon={<VscPlay />}>
            Watch Now
          </Button>
          <Button type={"secondary"}>Trailer</Button>
        </Btns>
        <MovieModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </Wrapper>
    </Container>
  );
};

export default Hero;
