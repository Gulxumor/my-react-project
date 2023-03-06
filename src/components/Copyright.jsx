import React from 'react';
import { Container, Link, Wrapper } from './CopyrightStyle';

class Copyright extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Link w="500" fs="13">Copyright 2022 degraft87@gmail.com. All Rights Reserved.</Link>
                <Wrapper>
                    <Link w="200">Terms & Conditions</Link>
                    <Link>Privacy Policy</Link>
                </Wrapper>
            </Container>
        );
    }
}

export default Copyright;
