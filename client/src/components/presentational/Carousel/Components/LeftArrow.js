import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { LeftArrowStyle } from './styles';

class LeftArrow extends Component {
  render() {
    if (this.props.activeIndex <= 0) {
      return (
        <div></div>
      );
    } else {
      return (        
        <LeftArrowStyle onClick={this.props.handleOnClickLeft}>
          <FontAwesome
            name="angle-left"
            size="3x"
            style={{ color: '#666666' }}
          />
        </LeftArrowStyle>
      );
    }
  }
}

export default LeftArrow;
