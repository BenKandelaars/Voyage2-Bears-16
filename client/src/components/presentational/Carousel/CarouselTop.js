import React from 'react';
import SeeAll from './SeeAll';
import { CarouselTitle, CarouselTopStyle } from './style';

const CarouselTop = () => {
  return (
    <CarouselTopStyle>
      <CarouselTitle>Carousel</CarouselTitle>
      <SeeAll />
    </CarouselTopStyle>
  );
};

export default CarouselTop;
