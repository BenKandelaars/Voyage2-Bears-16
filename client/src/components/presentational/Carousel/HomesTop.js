import React from 'react';
import SeeAll from './SeeAll';
import { CarouselTitle, CarouselTopStyle } from './styles';

const HomesTop = () => {
  return (
    <CarouselTopStyle>
      <CarouselTitle>Homes</CarouselTitle>
      <SeeAll />
    </CarouselTopStyle>
  );
};

export default HomesTop;
