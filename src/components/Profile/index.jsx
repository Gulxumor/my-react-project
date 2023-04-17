import React from "react";
import { Container, Content, ImageWrapper, Title, Wrapper } from "./style";
import noImage from "../../assets/images/shop/dark-blue.png";

export const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user-info"));

  return (
    <Container>
      <Wrapper>
        {/* <Edit onClick={() => navigate('/profile-edit')}>Edit Profile</Edit> */}
        <ImageWrapper>
          <ImageWrapper.UserImage src={noImage} />
        </ImageWrapper>
        <Content>
          <Title>{user?.fullname}</Title>
          <Content.Specialist>Software Engineer</Content.Specialist>
          <Content.Specialist>{user?.email}</Content.Specialist>
          <Content.Password type="password" value={user?.password} />
          {/* <Description>Uzbekistan</Description> */}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Profile;
