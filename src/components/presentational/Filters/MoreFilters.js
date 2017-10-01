import React, { Component } from 'react';
import { EachFilterContainer, FilterOption } from './styles';
import FontAwesome from 'react-fontawesome';

class MoreFilters extends Component {
  render() {
    return (
      <EachFilterContainer onClick={() => this.props.changeState("isMoreFiltersOpen")}>
        <FilterOption>
        More filters
        <FontAwesome
          name="angle-down"
          style={{
            color: '#008489',
            paddingLeft: '10px',
          }}
        />
        </FilterOption>
      </EachFilterContainer>
    );
  }
}

export default MoreFilters;
