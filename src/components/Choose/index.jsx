import React from "react";
import {
  Text,
  Title,
  Bottom,
  Container,
  Left,
  Return,
  Right,
  Shop,
  Support,
  Truck,
  Wrapper,
} from "./style";
import Image from "../../assets/images/flowers.png";

class Choose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Left>
          <Title mb="27" w="261" h="41" fs="34" lh="41">
            Why Choose Us
          </Title>
          <Text mb="88" lh="24" w="444" h="42">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the
          </Text>
          <Bottom>
            <Container mb="26">
              <Wrapper>
                <Truck />
                <Title w="143">Fast & Free Shipping </Title>
                <Text>
                  Donec mattis porta eros, aliquet finibus risus interdum at.
                  Nulla vivethe as it was
                </Text>
              </Wrapper>
              <Wrapper ml="46">
                <Shop />
                <Title>Easy to Shop </Title>
                <Text>
                  Donec mattis porta eros, aliquet finibus risus interdum at.
                  Nulla vivethe as it was
                </Text>
              </Wrapper>
            </Container>
            <Container mb="26">
              <Wrapper>
                <Support />
                <Title w="137">24/7 Support</Title>
                <Text>
                  Donec mattis porta eros, aliquet finibus risus interdum at.
                  Nulla vivethe as it was
                </Text>
              </Wrapper>
              <Wrapper ml="46">
                <Return />
                <Title w="137">Hassle Free Returns</Title>
                <Text>
                  Donec mattis porta eros, aliquet finibus risus interdum at.
                  Nulla vivethe as it was
                </Text>
              </Wrapper>
            </Container>
          </Bottom>
        </Left>
        <Right src={Image} alt="div" />
      </Container>
    );
  }
}

export default Choose;
