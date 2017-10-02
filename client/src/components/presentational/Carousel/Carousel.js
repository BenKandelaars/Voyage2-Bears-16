import React, { Component } from 'react';
import Slider from './Slider';
import CarouselListView from './CarouselList';
import { Container } from './style.js';


class Carousel extends Component {

  render() {
    return (
      <Container>
        <h1>Slider</h1>
        <Slider />

        <h1>Carousel</h1>
        <CarouselListView />
      </Container>
    );
  }
};

export default Carousel;