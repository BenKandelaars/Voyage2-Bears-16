import React, { Component } from 'react';
import RoomTypeOption from './RoomTypeOption';
import { EachMenuContainer, EachFilterContainer, FilterOption, ArrowIcon } from './styles';
import FontAwesome from 'react-fontawesome';

const RoomType = props => (
      <EachFilterContainer
        onClick={() => props.changeState('isRoomTypeOpen')}
      >
        <FilterOption>
        Room type
        <ArrowIcon isOpen={props.isRoomTypeOpen}>
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



class RoomTypeMenu extends Component {
  render(){
    return (
      <EachMenuContainer>
        <RoomType
          changeState={this.props.changeState}
          isRoomTypeOpen={this.props.isRoomTypeOpen}
        />
        {(this.props.isRoomTypeOpen && <RoomTypeOption />)}
      </EachMenuContainer>
      );
  }

};

export default RoomTypeMenu;
