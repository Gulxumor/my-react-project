import React from "react";
import { Input, Container } from "./style";

const SearchModal = ({ handleOk, handleCancel, isModalOpen }) => {
  return (
    <>
      <Container
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input type="text" placeholder="Write Something..." />
      </Container>
    </>
  );
};

export default SearchModal;
