import React from 'react';
import { Container, Title, Wrapper, Link, Div, Image, Text, Sarlavha } from './style';
import TwoChair from "../../assets/images/two-chairs.png"
import Book from "../../assets/images/book.png"
import Shapes from "../../assets/images/shapes.png"

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Wrapper>
                    <Title>Recent Blog</Title>
                    <Link href="#home"> View All Posts</Link>
                </Wrapper>
                <Wrapper>
                    <Div>
                        <Image src={TwoChair} alt="two chairs" />
                        <Sarlavha>First Time Home Owner Ideas</Sarlavha>
                        <Text><i>by</i> <strong>Nana Ama</strong> <i>on</i> <strong>Nov 18th, 2022</strong></Text>
                    </Div>
                    <Div>
                        <Image src={Book} alt="two chairs" />
                        <Sarlavha>First Time Home Owner Ideas</Sarlavha>
                        <Text><i>by</i> <strong>Nana Ama</strong> <i>on</i> <strong>Nov 18th, 2022</strong></Text>
                    </Div>
                    <Div>
                        <Image src={Shapes} alt="two chairs" />
                        <Sarlavha>First Time Home Owner Ideas</Sarlavha>
                        <Text><i>by</i> <strong>Nana Ama</strong> <i>on</i> <strong>Nov 18th, 2022</strong></Text>
                    </Div>
                </Wrapper>
            </Container>
        );
    }
}


export default Blog;
