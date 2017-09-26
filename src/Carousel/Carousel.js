import React, { Component } from 'react';
import Slider from './Slider';
import CarouselListView from './CarouselList';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import 'font-awesome/css/font-awesome.css';
import { Container, CaroucelContainer } from './style.js';


class Carousel extends Component {

  render(){
    return (
      <Container>
        <h1>Slider</h1>
            <Slider />

        <h1>Carousel</h1>
        <CaroucelContainer> 
          <RightArrow />  
            <CarouselListView />  
          <LeftArrow />
        </CaroucelContainer>
      </Container>
    );
  }
};

export default Carousel;