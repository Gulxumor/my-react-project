import React from "react";
import {
  Cart,
  Furni,
  Li,
  Container,
  Ul,
  User,
  Wrapper,
  Left,
  Icons,
} from "./style";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Furni />
          <Left>
            <Ul>
              <Li>Home</Li>
              <Li>About us</Li>
              <Li>Services</Li>
              <Li>Blog</Li>
              <Li>Contact us</Li>
            </Ul>
            <Icons>
              <User />
              <Cart />
            </Icons>
          </Left>
        </Wrapper>
      </Container>
    );
  }
}

export default Navbar;
