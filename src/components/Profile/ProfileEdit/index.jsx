import React from "react";
import { Container, Content, ImageWrapper, Wrapper } from "./style";
import noImage from "../../../assets/images/clothes/2.jpg";
import { Button } from "../../Generics/Button";
import { Input } from "../../Generics/Input";

export const ProfileEdit = () => {
  const user = JSON.parse(localStorage.getItem("user-info"));

  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <ImageWrapper.UserImage src={noImage} />
        </ImageWrapper>
        <Content>
          <Input placeholder="fullname" value={user?.fullname} />
          <Input placeholder="specialist" value={"Software Engineer"} />
          <Input placeholder="email" value={user?.email} />
          <Input placeholder="password" value={user?.password} />
          <Button>Save Changes</Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default ProfileEdit;
