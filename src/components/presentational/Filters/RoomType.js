import React, { Component } from 'react';
import RoomTypeOption from './RoomTypeOption';
import { EachFilterContainer, FilterOption } from './styles';
import FontAwesome from 'react-fontawesome';

class RoomType extends Component {
  constructor(props){
    super(props);

    this.state = {
      isOptionOpen: false,
    };
  }
  render(){
    return (
      <EachFilterContainer>
        <FilterOption>
        Room type
        <FontAwesome
          name="angle-down"
          style={{
            color: '#008489',
            paddingLeft: '10px',
          }}
        />
        <RoomTypeOption />
        </FilterOption>
        
      </EachFilterContainer>
        
    );
  }
}

export default RoomType;
