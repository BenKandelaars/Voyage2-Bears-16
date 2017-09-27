import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { LeftArrowStyle } from './style.js';

class LeftArrow extends Component {
  handleClick = () => {
    console.log("clicked");
  };

  render() {
    return (
      <LeftArrowStyle onClick={this.handleClick}>
        <FontAwesome
         name="angle-left"
         size="3x"
         /> 
      </LeftArrowStyle>
    );
  }
};

export default LeftArrow;