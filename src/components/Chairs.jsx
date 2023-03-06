import React from 'react';
import { Div, Img, Link, Section, Wrapper } from './ChairsStyle';
import first from "./assets/images/chair1.png"
import second from "./assets/images/chair2.png"
import third from "./assets/images/chair3.png"
import { Text, Title } from './ChooseStyle';

class Chairs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Section>
                <Wrapper>
                    <Img src={first} alt="first-chair" w="91" h="125" />
                    <Div>
                        <Title w="86" h="22" mb="11">Nordic Chair</Title>
                        <Text w="211" h="44" m="11">Donec mattis porta eros, aliquet finibus risus in. Donecd </Text>
                        <Link>Read more</Link>
                    </Div>
                </Wrapper>
                <Wrapper>
                    <Img src={second} alt="first-chair" w="113" h="123" />
                    <Div>
                        <Title w="72" h="22" mb="11">Kruzi Aero</Title>
                        <Text w="211" h="44" m="11">Donec mattis porta eros, aliquet finibus risus in. Donecd </Text>
                        <Link>Read more</Link>
                    </Div>
                </Wrapper>
                <Wrapper>
                    <Img src={third} alt="first-chair" w="98" h="98" />
                    <Div>
                        <Title w="114" h="22" mb="11">Erganomic Chair</Title>
                        <Text w="211" h="44" m="11">Donec mattis porta eros, aliquet finibus risus in. Donecd </Text>
                        <Link>Read more</Link>
                    </Div>
                </Wrapper>
            </Section>
        );
    }
}


export default Chairs;
