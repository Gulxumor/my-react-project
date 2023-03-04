import React from 'react';
import { Bottom, Container, Left, Right, Top, Wrapper, } from './components/ChooseStyle';
import Image from "./components/images/flowers.png"
import { Text, Title } from './components/MainStyle';


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
                        <Wrapper></Wrapper>
                        <Wrapper></Wrapper>
                        <Wrapper></Wrapper>
                        <Wrapper></Wrapper>
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
