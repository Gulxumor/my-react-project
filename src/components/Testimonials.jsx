import React from 'react';
import Slider from "react-slick";
import { Container, Div, Image, Text, Title, } from './TestimonialStyle';

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Container>
                <Slider {...settings} className="slider">
                        <Div>
                            <Title w="209" h="41" fw="600" fs="34" lh="41">Testimonials</Title>
                            <Text>‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’</Text>
                            <Image />
                            <Title>Michelle Anna</Title>
                            <Title w="170" h="32" fs="13" mt="8" mb="71">CEO, Co-Founder, XYZ Inc.</Title>
                        </Div>
                        <Div>
                            <Title w="209" h="41" fw="600" fs="34" lh="41">Testimonials</Title>
                            <Text>‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’</Text>
                            <Image />
                            <Title>Michelle Anna</Title>
                            <Title w="170" h="32" fs="13" mt="8" mb="71">CEO, Co-Founder, XYZ Inc.</Title>
                        </Div>
                        <Div>
                            <Title w="209" h="41" fw="600" fs="34" lh="41">Testimonials</Title>
                            <Text>‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’</Text>
                            <Image />
                            <Title>Michelle Anna</Title>
                            <Title w="170" h="32" fs="13" mt="8" mb="71">CEO, Co-Founder, XYZ Inc.</Title>
                        </Div>
                        <Div>
                            <Title w="209" h="41" fw="600" fs="34" lh="41">Testimonials</Title>
                            <Text>‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’</Text>
                            <Image />
                            <Title>Michelle Anna</Title>
                            <Title w="170" h="32" fs="13" mt="8" mb="71">CEO, Co-Founder, XYZ Inc.</Title>
                        </Div>
                        <Div>
                            <Title w="209" h="41" fw="600" fs="34" lh="41">Testimonials</Title>
                            <Text>‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’</Text>
                            <Image />
                            <Title>Michelle Anna</Title>
                            <Title w="170" h="32" fs="13" mt="8" mb="71">CEO, Co-Founder, XYZ Inc.</Title>
                        </Div>
                        <Div>
                            <Title w="209" h="41" fw="600" fs="34" lh="41">Testimonials</Title>
                            <Text>‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’</Text>
                            <Image />
                            <Title>Michelle Anna</Title>
                            <Title w="170" h="32" fs="13" mt="8" mb="71">CEO, Co-Founder, XYZ Inc.</Title>
                        </Div>
                        <Div>
                            <Title w="209" h="41" fw="600" fs="34" lh="41">Testimonials</Title>
                            <Text>‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’</Text>
                            <Image />
                            <Title>Michelle Anna</Title>
                            <Title w="170" h="32" fs="13" mt="8" mb="71">CEO, Co-Founder, XYZ Inc.</Title>
                        </Div>
                        <Div>
                            <Title w="209" h="41" fw="600" fs="34" lh="41">Testimonials</Title>
                            <Text>‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’</Text>
                            <Image />
                            <Title>Michelle Anna</Title>
                            <Title w="170" h="32" fs="13" mt="8" mb="71">CEO, Co-Founder, XYZ Inc.</Title>
                        </Div>
                    </Slider>
            </Container>
        );
    }
}


export default Testimonials