import React from 'react';
import { Button, Container } from '../style';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Button h="40" br="13" bg="yellow" mt="5" cursor="pointer">Shop now</Button>
                <Button ml="10" h="40" br="13" bg='blue' color='#fff' mt="5" mb="5">Sale</Button>
            </Container>
        );
    }
}


export default Component;
