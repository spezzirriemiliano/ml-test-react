import React from 'react';
import './Carousel.scss';

// TODO: implement images carousel, now it shows only one image
const Carousel = (props) => {
    return (
        <div className="carousel-container">
            <img className="carousel-image" src={props.picture} alt={props.picture}/>
        </div>
    );
}

export default Carousel;