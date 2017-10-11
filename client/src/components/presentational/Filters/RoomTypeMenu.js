import React, { Component } from 'react';
import RoomTypeOption from './RoomTypeOption';
import Arrow from './Arrow';
import { EachMenuContainer, EachFilterContainer, FilterOption, ArrowIcon, ActiveOption } from './styles';


const RoomType = props => (
      <EachFilterContainer
        onClick={() => props.changeState('isRoomTypeOpen')}
      >
        <FilterOption isOpen={props.isRoomTypeOpen}>
        Room type {(props.selectedOptions.room_type.length > 0 && <ActiveOption><span>{props.selectedOptions.room_type.length}</span></ActiveOption> )}
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
          selectedOptions={this.props.selectedOptions}
        />
        {(this.props.isRoomTypeOpen &&
          <RoomTypeOption
            handleRoomtypeSelect={this.props.handleRoomtypeSelect}
            handleUpdate={this.props.handleUpdate}
            handleStateCheck={this.props.handleStateCheck}
          />)}
      </EachMenuContainer>
      );
  }

};

export default RoomTypeMenu;
