import React, { Component } from 'react';
import PriceRangeOption from './PriceRangeOption';
import Arrow from './Arrow';
import { EachMenuContainer, EachFilterContainer, FilterOption, ArrowIcon } from './styles';
import FontAwesome from 'react-fontawesome';

const PriceRange = props => (
      <EachFilterContainer onClick={() => props.changeState("isPriceRangeOpen")}>
        <FilterOption isOpen={props.isPriceRangeOpen}>
          {props.showPriceRange()}
          <Arrow
          isOpen={props.isPriceRangeOpen}
          color='#008489'
          />
        </FilterOption>
      </EachFilterContainer>
    );

class PriceRangeMenu extends Component {
  showPriceRange = () => {
    const min = this.props.currentPriceRange[0];
    const max = this.props.currentPriceRange[1];

    if (max === 1000 && min === 9) {
      return 'Price range';
    } else if (min === 9) {
      return `Up to €${max}`
    } else if (max === 1000) {
      return `€${min}+`;
    } return `€${min} - €${max}`;
  }
  render() {
    return (
      <EachMenuContainer>
        <PriceRange
          changeState={this.props.changeState}
          isPriceRangeOpen={this.props.isPriceRangeOpen}
          currentPriceRange={this.props.currentPriceRange}
          showPriceRange={this.showPriceRange}
        />
        {(this.props.isPriceRangeOpen &&
          <PriceRangeOption
            handlePriceRangeChange={this.props.handlePriceRangeChange}
          />)}
      </EachMenuContainer>
    );
  }
}

export default PriceRangeMenu;
