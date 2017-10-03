import React, { Component } from 'react';
import { CarouselImg2, CarouselText, CarouselItemWrapper } from './style';


class CarouselItem2 extends Component {
  render() {
    return (
      <CarouselItemWrapper>
        <CarouselImg2 />
        <CarouselText>★★★★★</CarouselText>
      </CarouselItemWrapper>
    );
  }
}

export default CarouselItem2;
