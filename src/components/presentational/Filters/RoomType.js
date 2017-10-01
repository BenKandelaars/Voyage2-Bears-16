import React, { Component } from 'react';
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
      <EachFilterContainer
        onClick={() => this.props.changeState("isRoomTypeOpen")}
      >
        <FilterOption>
        Room type
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

export default RoomType;
