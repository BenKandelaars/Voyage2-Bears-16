import React, { Component } from 'react';
import { CarouselImg, CarouselText, CarouselItemWrapper, CarouselItemOuter } from './style';


class CarouselItem extends Component {
  render() { 
    return (
      <CarouselItemOuter innerRef={this.props.innerRef}>
        <CarouselItemWrapper >
          <CarouselImg></CarouselImg>
          <CarouselText>★★★★★</CarouselText>
        </CarouselItemWrapper>
      </CarouselItemOuter>
    );
  }
}

export default CarouselItem;
