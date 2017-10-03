import React, { Component } from 'react';
import PriceRange from './PriceRange';
import PriceRangeOption from './PriceRangeOption';
import { EachMenuContainer } from './styles';


class PriceRangeMenu extends Component {
  render() {
    return (
      <EachMenuContainer>
        <PriceRange changeState={this.props.changeState} />
        {(this.props.isPriceRangeOpen && <PriceRangeOption />)}
      </EachMenuContainer>
    );
  }
}

export default PriceRangeMenu;
