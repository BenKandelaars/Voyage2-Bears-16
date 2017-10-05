import React, { Component } from 'react';
import Arrow from './Arrow';
import { EachMenuContainer, EachFilterContainer, FilterOption, ArrowIcon } from './styles';
import FontAwesome from 'react-fontawesome';

const MoreFilters = props => (
      <EachFilterContainer onClick={() => props.changeState("isMoreFiltersOpen")}>
        <FilterOption isOpen={props.isMoreFiltersOpen}>
        More filters
        <Arrow
          isOpen={props.isMoreFiltersOpen}
          color='#008489'
        />
        </FilterOption>
      </EachFilterContainer>
    );

class MoreFiltersMenu extends Component {
  render() {
    return (
      <EachMenuContainer>
        <MoreFilters
          changeState={this.props.changeState}
          isMoreFiltersOpen={this.props.isMoreFiltersOpen}
        />
      </EachMenuContainer>
    );
  }
}

export default MoreFiltersMenu;
