import React from 'react';
import { Container, Text, Title, Button, Box, Img, Boxes, Price, Ellipse } from './MainStyle';
import img1 from '../components/assets/images/chair1.png'
import img2 from '../components/assets/images/chair2.png'
import img3 from '../components/assets/images/chair3.png'
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
                <Box>
                    <Img className='imgs' src={img1} />
                    <Price className='ll'>Nordic Chair</Price>
                    <Price className='ll'>$50.00</Price>
                    <Boxes className='ls'/>
                    <Ellipse/>
                </Box>
                <Box>
                    <Img className='imgs' src={img2} />
                    <Price className='ll'>Kruzo Aero Chair</Price>
                    <Price className='ll'>$78.00</Price>
                    <Boxes className='ls' />
                    <Ellipse />
                </Box>
                <Box>
                    <Img className='imgs' src={img3} />
                    <Price className='ll'>Ergonomic Chair</Price>
                    <Price className='ll'>$43.00</Price>
                    <Boxes className='ls' />
                    <Ellipse />
                </Box>
            </Container>
        );
    }
}


export default Main;
