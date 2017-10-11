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
          color='#008489'
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
        {(this.props.isRoomTypeOpen &&
          <RoomTypeOption
            handleRoomtypeSelect={this.props.handleRoomtypeSelect}
            handleUpdate={this.props.handleUpdate}
          />)}
      </EachMenuContainer>
      );
  }

};

export default RoomTypeMenu;
