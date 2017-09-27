import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { RightArrowStyle } from './style.js';

class RightArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 0
    }
  }
  
  componentDidMount() {
    // const width = document.querySelector('img').clientWidth;
    // this.setState({ width });
  }
  
  handleClick = () => {
    this.setState ({visible: this.state.visible - 25});
    console.log(this.state.visible);
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