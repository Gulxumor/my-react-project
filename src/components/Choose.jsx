import React from 'react';
import {Text, Title, Bottom, Container, Left, Return, Right, Shop, Support, Top, Truck, Wrapper, } from './ChooseStyle';
import Image from "../components/assets/images/flowers.png"


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
                        <Title mb="27" w="261" h="41" fs="34" lh="41">Why Choose Us</Title>
                        <Text mb="88" lh="24" w="444" h="42">Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the</Text>
                    </Top>
                    <Bottom>
                        <Wrapper>
                            <Truck />
                            <Title w="143">Fast  & Free Shipping </Title>
                            <Text>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</Text>
                        </Wrapper>
                        <Wrapper ml="11">
                            <Shop />
                            <Title>Easy to Shop </Title>
                            <Text>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</Text>
                        </Wrapper>
                        <Wrapper ml="11">
                            <Support />
                            <Title w="137">24/7 Support</Title>
                            <Text>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</Text>
                        </Wrapper>
                        <Wrapper ml="11">
                            <Return />
                            <Title w="137">Hassle Free Returns</Title>
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
