import { Modal } from "antd";
import React from "react";
import ReactPlayer from "react-player";

const MovieModal = () => {
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </Modal>
  );
};

export default MovieModal;
