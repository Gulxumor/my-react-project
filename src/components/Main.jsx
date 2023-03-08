import React from 'react';
import Slider from "react-slick";
import { A, Category, Container, Img, Inner, Rating, Star } from './MainStyle';
class MySlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => {
                const images = json.slice(0, 10).map(item => ({
                    id: item.id,
                    category: item.category,
                    image: item.image,
                    title: item.title,
                    price: item.price,
                    rating: item.rating.rate,
                }));
                this.setState({ images });
            });
    }
    render() {
            const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear'
            };
        return (
            <Container>
                <Slider {...settings}>
                    {this.state.images.map(product => (
                        <div key={product.id}>
                            <A href='https://github.com/Gulxumor/my-react-project/tree/10-dars'>Github code</A>
                            <Category>{product.category}</Category>
                            <Img src={product.image} alt={product.title} />
                            <Category>{product.title}</Category>
                            <Category>${product.price}</Category>
                            <Inner>
                                <Star />
                                <Rating> {product.rating}</Rating>
                            </Inner>
                        </div>
                    ))}
                </Slider>
            </Container>
        );
    }
}

export default MySlider