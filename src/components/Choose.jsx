import React from 'react';
import { Bottom, Container, Left, Return, Right, Shop, Support, Top, Truck, Wrapper, } from './ChooseStyle';
import Image from "../components/assets/images/flowers.png"
import { Text, Title } from './MainStyle';


class Choose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Left>
                    <Top>
                        <Title>Why Choose Us</Title>
                        <Text>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the</Text>
                    </Top>
                    <Bottom>
                        <Wrapper>
                            <Truck />
                            <Title>Fast  & Free Shipping </Title>
                            <Text>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</Text>
                        </Wrapper>
                        <Wrapper>
                            <Shop />
                            <Title>Easy to Shop </Title>
                            <Text>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</Text>
                        </Wrapper>
                        <Wrapper>
                            <Support />
                            <Title>24/7 Support</Title>
                            <Text>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</Text>
                        </Wrapper>
                        <Wrapper>
                            <Return />
                            <Title>Hassle Free Returns</Title>
                            <Text>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</Text>
                        </Wrapper>
                    </Bottom>
                </Left>
                <Right>
                    <img src={Image} alt="div" />
                </Right>
            </Container>
        );
    }
}


export default Choose;
