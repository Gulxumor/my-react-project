import React from "react";
import ReactPlayer from "react-player";
import { Container } from "./style";

const MovieModal = ({ setIsModalOpen, isModalOpen }) => {
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container
      className="movie-modal"
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <ReactPlayer width={"900px"} height={"500px"} url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </Container>
  );
};

export default MovieModal;
