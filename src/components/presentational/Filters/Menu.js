import React, { Component } from 'react';
import InstanBook from './InstantBook';
import MoreFilters from './MoreFilters';
import PriceRange from './PriceRange';
import RoomType from './RoomType';
import { MenuContainer } from './styles';

class Menu extends Component {
  render(){
    return (
      <MenuContainer>
        <RoomType />
        <PriceRange />
        <InstanBook />
        <MoreFilters />
      </MenuContainer>
    );
  }
}

export default Menu;
