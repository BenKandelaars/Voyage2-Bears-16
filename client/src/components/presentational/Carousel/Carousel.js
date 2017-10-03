import React from 'react';
import CarouselTop from './CarouselTop';
import CarouselView from './CarouselView';
import 'font-awesome/css/font-awesome.css';
import { Container } from './style';


const Carousel = () => {
  return (
    <Container>
      <CarouselTop />
      <CarouselView />
    </Container>
  );
};

export default Carousel;
