import React, { Component } from 'react';
import { EachFilterContainer, FilterOption } from './styles';
import FontAwesome from 'react-fontawesome';

class PriceRange extends Component {
  render(){
    return (
      <EachFilterContainer>
        <FilterOption>
        Price range
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

export default PriceRange;
