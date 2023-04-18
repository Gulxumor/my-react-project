import React from 'react';
import { Section,Button, Bottom, Icon, Image, Input, Telegram, Text, Top, Wrapper } from './style';
import Sofa from "../../assets/images/sofa.png";

class Newsletter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Section>
                <Wrapper>
                    <Top>
                        <Icon />
                        <Text>Subscribe to Newsletter</Text>
                    </Top>
                        <Bottom>
                            <Input placeholder="Enter your name" />
                            <Input type={"e-mail"} placeholder="Enter your e-mail" ml="15" />
                            <Button ml="15">
                                <Telegram />
                            </Button>
                        </Bottom>
                </Wrapper>
                <Wrapper>
                    <Image src={Sofa} alt="sofa-img" />
                </Wrapper>
            </Section>
        );
    }
}

export default Newsletter;
