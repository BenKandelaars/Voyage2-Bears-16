import React, { Component } from 'react';
import InstantBookMenu from './InstantBookMenu';
import MoreFiltersMenu from './MoreFiltersMenu';
import PriceRangeMenu from './PriceRangeMenu';
import RoomTypeMenu from './RoomTypeMenu';
import { MenuContainer } from './styles';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyOpen: null,
      isRoomTypeOpen: false,
      isPriceRangeOpen: true,
    };
  }

  changeState = (option) => {
    if (this.state.currentlyOpen !== null) {
      this.setState({
        [this.state.currentlyOpen] : false,
      });
    }
    this.setState({
      currentlyOpen: option,
      [option] : !this.state[option],
    });
  }

  render(){
    return (
      <MenuContainer>
        <RoomTypeMenu
          changeState={this.changeState}
          isRoomTypeOpen={this.state.isRoomTypeOpen}
        />
        <PriceRangeMenu
          changeState={this.changeState}
          isPriceRangeOpen={this.state.isPriceRangeOpen}
        />
        <InstantBookMenu />
        <MoreFiltersMenu />
      </MenuContainer>
    );
  }
}

export default Menu;
