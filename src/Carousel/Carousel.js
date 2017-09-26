import React, { Component } from 'react';
import ImageList from './ImageList';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import 'font-awesome/css/font-awesome.css';
import { Container } from './style.js';


class Carousel extends Component {

  render(){
    return (
      <Container>
        <RightArrow />
          <ImageList />
        <LeftArrow />
      </Container>
    );
  }
};

export default Carousel;