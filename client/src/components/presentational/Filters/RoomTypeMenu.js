import React, { Component } from 'react';
import RoomType from './RoomType';
import RoomTypeOption from './RoomTypeOption';
import { EachMenuContainer } from './styles';

class RoomTypeMenu extends Component {
  render(){
    return (
      <EachMenuContainer>
        <RoomType changeState={this.props.changeState} />
        {(this.props.isRoomTypeOpen && <RoomTypeOption />)}
      </EachMenuContainer>
      );
  }

};

export default RoomTypeMenu;
