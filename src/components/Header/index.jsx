import React from "react";
import { Btn, Button, Container, Content, Img, Wrapper } from "./style";
import CouchImage from "../../assets/images/couch.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Content>
            <Content.RichText>Modern Interior Design Studio</Content.RichText>
            <Btn>
              <Button
                w="150"
                bg="transparent"
                border="1px solid white"
                color="white"
              >
                Shop Now
              </Button>
              <Button bg="transparent" border="1px solid white" color="white">
                Explore
              </Button>
            </Btn>
          </Content>

          <Img src={CouchImage} alt="sofa" />
        </Wrapper>
      </Container>
    );
  }
}

export default Header;
