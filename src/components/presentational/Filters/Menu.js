import React, { Component } from 'react';
import InstanBook from './InstantBook';
import MoreFilters from './MoreFilters';
import PriceRange from './PriceRange';
import RoomType from './RoomType';
import RoomTypeOption from './RoomTypeOption';
import { MenuContainer } from './styles';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRoomTypeOpen: false,
    };
  }

  changeState = (option) => {
    this.setState({
      [option] : !this.state[option],
    });
  }

  render(){
    return (
      <MenuContainer>
        <RoomType
          isRoomTypeOpen={this.state.isRoomTypeOpen}
          changeState={this.changeState}
        />
        {(this.state.isRoomTypeOpen) && <RoomTypeOption />}
        <PriceRange />
        <InstanBook />
        <MoreFilters />
      </MenuContainer>
    );
  }
}

export default Menu;
