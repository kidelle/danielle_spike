import React, {Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class SlideShow extends Component {

    render() {
        return (
            <>
            <h1>Carousel</h1>
            <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
            <Slider>
                <Slide index={0}>I am the first Slide.</Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
            
               
            </CarouselProvider>
            </>
        );
    }

}

export default SlideShow;