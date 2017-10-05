import React, { Component } from 'react';
import PriceRangeOption from './PriceRangeOption';
import Arrow from './Arrow';
import { EachMenuContainer, EachFilterContainer, FilterOption, ArrowIcon } from './styles';
import FontAwesome from 'react-fontawesome';

const PriceRange = props => (
      <EachFilterContainer onClick={() => props.changeState("isPriceRangeOpen")}>
        <FilterOption isOpen={props.isPriceRangeOpen}>
          Price range
          <Arrow
          isOpen={props.isPriceRangeOpen}
          color='#008489'
          />
        </FilterOption>
      </EachFilterContainer>
    );

class PriceRangeMenu extends Component {
  render() {
    return (
      <EachMenuContainer>
        <PriceRange
          changeState={this.props.changeState}
          isPriceRangeOpen={this.props.isPriceRangeOpen}
        />
        {(this.props.isPriceRangeOpen && <PriceRangeOption />)}
      </EachMenuContainer>
    );
  }
}

export default PriceRangeMenu;
