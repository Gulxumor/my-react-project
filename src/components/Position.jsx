import React from 'react';
// import { Button } from './MainStyle';
import  { Container, Img, Image, Right,Div, Wrapper, Title, Text, Doira, } from './PositionStyle';
import Strange from "../components/assets/images/strange.png"
import redbull from "../components/assets/images/redbull.png"
import Broken from "../components/assets/images/broken.png"
import { Button } from './HeaderStyle';


class Position extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Wrapper>
                    <Img src={Strange} alt="position-img" w="424" h="551" />
                    <Right>
                        <Img src={redbull} alt="position-img" w="209" h="209" ml="33" />
                        <Image src={Broken} alt="position-img" />
                    </Right>
                </Wrapper>
                <Wrapper fd="column">
                    <Title>We help  you make Modern Interior Design</Title>
                    <Text>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long  post for the text.`This small text has to be place here, since this is a place holder. You can also chane it.</Text>
                    <Div>
                        <Div>
                            <Doira />
                            <Text>Donec mattis porta eros,let aliquet finibus ri</Text>
                        </Div>
                        <Div>
                            <Doira />
                            <Text>Donec mattis porta eros,let aliquet finibus ri</Text>
                        </Div>
                        <Button mt="40">Explore</Button>
                    </Div>             
                </Wrapper>
            </Container>
        );
    }
}


export default Position;
