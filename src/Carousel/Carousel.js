import React, { Component } from 'react';
import ImageList from "./ImageList"
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import 'font-awesome/css/font-awesome.css';

class Carousel extends Component {

  render(){
    return (
      <div className="carousel">
        <RightArrow />
          <ImageList />
        <LeftArrow />
      </div>
    );
  }
};

export default Carousel;