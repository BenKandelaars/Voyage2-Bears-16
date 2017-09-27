import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { RightArrowStyle } from './style.js';

class RightArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      activeIndex: 0
    }
  }
  
  componentDidMount() {
    // const width = document.querySelector('img').clientWidth;
    // this.setState({ width });
  }
  
  handleClick = () => {
    console.log("clicked");
  };

  render() {
    return (
      <RightArrowStyle onClick={this.handleClick}>
      <FontAwesome
       name="angle-right"
       size="3x"
       /> 
      </RightArrowStyle>
    );
  }
  
};

export default RightArrow;