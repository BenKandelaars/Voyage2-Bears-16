import React, { Component } from 'react';
import { EachFilterContainer, FilterOption } from './styles';
import FontAwesome from 'react-fontawesome';

class InstantBook extends Component {
  render(){
    return (
      <EachFilterContainer>
        <FilterOption>
        Instant Book
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

export default InstantBook;
