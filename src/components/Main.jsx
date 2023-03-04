import React from 'react';
import { Container, Text, Title, Button } from './MainStyle';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <div>
                    <Title>Crafted with excellent material.</Title>
                    <Text>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done.</Text> 
                    <Button>Explore</Button>
                </div>
            </Container>
        );
    }
}


export default Main;
