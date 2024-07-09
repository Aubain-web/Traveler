import React from 'react';
import { Carousel } from 'react-bootstrap';
import seas from '../../assets/images/seas.jpg';
import ibiza from '../../assets/images/pietro.jpg';
import neom from '../../assets/images/neom.jpg';
import safari from '../../assets/images/safari.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './promotionCaroussel.css'
const PromotionCarousel = () => {
    return (
        <div className="caroussel">
            <Carousel className="promotion-carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={seas}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ibiza}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={safari}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default PromotionCarousel;
