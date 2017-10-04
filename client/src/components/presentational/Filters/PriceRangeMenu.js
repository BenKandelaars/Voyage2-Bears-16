import React, { Component } from 'react';
import PriceRangeOption from './PriceRangeOption';
import { EachMenuContainer, EachFilterContainer, FilterOption, ArrowIcon } from './styles';
import FontAwesome from 'react-fontawesome';

const PriceRange = props => (
      <EachFilterContainer onClick={() => props.changeState("isPriceRangeOpen")}>
        <FilterOption isOpen={props.isPriceRangeOpen}>
          Price range
          <ArrowIcon isOpen={props.isPriceRangeOpen}>
            <FontAwesome
              name="angle-down"
              style={{
                color: '#008489',
              }}
            />
          </ArrowIcon>
        </FilterOption>
      </EachFilterContainer>
    );

class PriceRangeMenu extends Component {
  render() {
    console.log(this.props);
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
