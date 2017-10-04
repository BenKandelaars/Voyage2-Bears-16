import React, { Component } from 'react';
import RoomTypeOption from './RoomTypeOption';
import Arrow from './Arrow';
import { EachMenuContainer, EachFilterContainer, FilterOption, ArrowIcon } from './styles';


const RoomType = props => (
      <EachFilterContainer
        onClick={() => props.changeState('isRoomTypeOpen')}
      >
        <FilterOption isOpen={props.isRoomTypeOpen}>
        Room type
        <Arrow
          isOpen={props.isRoomTypeOpen}
        />
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
