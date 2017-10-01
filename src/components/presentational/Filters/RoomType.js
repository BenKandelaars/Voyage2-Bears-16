import React, { Component } from 'react';
import { EachFilterContainer, FilterOption, ArrowIcon } from './styles';
import FontAwesome from 'react-fontawesome';

class RoomType extends Component {
  render(){
    return (
      <EachFilterContainer
        onClick={() => this.props.changeState("isRoomTypeOpen")}
      >
        <FilterOption>
        Room type
        <ArrowIcon>
        <FontAwesome
          name="angle-down"
          style={{
            color: '#008489',
            paddingLeft: '10px',
          }}
        />
        </ArrowIcon>
        </FilterOption>
        
      </EachFilterContainer>
        
    );
  }
}

export default RoomType;
