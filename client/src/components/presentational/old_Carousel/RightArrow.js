import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { RightArrowStyle } from './style';

class RightArrow extends Component {
  render() {
    if (this.props.activeIndex >= 3) {
      return (
        <div></div>
      );
    } 
    return (
      <RightArrowStyle onClick={this.props.handleOnClickRight}>
        <FontAwesome
          name="angle-right"
          size="3x"
          style={{ color: '#666666' }}
        />
      </RightArrowStyle>
    );
  }
}

export default RightArrow;