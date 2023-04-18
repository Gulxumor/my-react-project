import React from "react";
import {
  Furni,
  Bottom,
  Facebook,
  Instagram,
  Linkedn,
  Section,
  Text,
  Twitter,
  Wrapper,
  Div,
  Ul,
  InnerWrapper,
} from "./style";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Section>
        <Wrapper>
          <Furni>Furni.</Furni>
          <Text>
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the this is a
            long post for the text.`This small text has to be place here, since
            this is{" "}
          </Text>
          <Bottom>
            <Div>
              <Facebook />
            </Div>
            <Div ml>
              <Instagram />
            </Div>
            <Div ml>
              <Twitter />
            </Div>
            <Div ml>
              <Linkedn />
            </Div>
          </Bottom>
        </Wrapper>

        <Wrapper>
          <InnerWrapper>
            <InnerWrapper.First>
              <Ul>
                <Ul.Li>About Us</Ul.Li>
                <Ul.Li>Services</Ul.Li>
                <Ul.Li>Blog</Ul.Li>
                <Ul.Li>Contact Us</Ul.Li>
              </Ul>
            </InnerWrapper.First>

            <InnerWrapper.First>
              <Ul>
                <Ul.Li>Support</Ul.Li>
                <Ul.Li>Knowledge base</Ul.Li>
                <Ul.Li>Live Chat</Ul.Li>
              </Ul>
            </InnerWrapper.First>

            <InnerWrapper.First>
              <Ul>
                <Ul.Li>Jobs</Ul.Li>
                <Ul.Li>Our team</Ul.Li>
                <Ul.Li>Leadership</Ul.Li>
                <Ul.Li>Privacy Policy</Ul.Li>
              </Ul>
            </InnerWrapper.First>

            <InnerWrapper.First>
              <Ul>
                <Ul.Li>Nordic chair</Ul.Li>
                <Ul.Li>Kruzo Aero</Ul.Li>
                <Ul.Li>Ergonomic</Ul.Li>
              </Ul>
            </InnerWrapper.First>
          </InnerWrapper>
        </Wrapper>
      </Section>
    );
  }
}
export default Footer;
