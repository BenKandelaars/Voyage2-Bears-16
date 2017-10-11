import React, { Component } from 'react';
import InstantBookMenu from './InstantBookMenu';
import MoreFiltersMenu from './MoreFiltersMenu';
import MoreFiltersOption from './MoreFiltersOption';
import PriceRangeMenu from './PriceRangeMenu';
import RoomTypeMenu from './RoomTypeMenu';
import { MenuContainer } from './styles';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyOpen: null,
      isRoomTypeOpen: true,
      isPriceRangeOpen: false,
      isInstantBookOpen: false,
      isMoreFiltersOpen: false,
      currentPriceRange: [9, 1000],
      selectedOptions: {
        room_type: [],
        price_range: [],
        instant_book: false,
        more_filters: {
          rooms_and_beds: {
            bedrooms: 0,
            beds: 0,
            bathrooms: 0,
          },
          more_options: {
            superhost: false,
          },
          amenities: [],
          facilities: [],
          house_rules: [],
          neighbourhoods: [],
          host_language: [],
        },
      },
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

  handlePriceRangeChange = (price) => {
    this.setState({
      currentPriceRange: price,
    });
  }
  handleUpdate = (option, parent) => {
    const { room_type } = this.state.selectedOptions;
    const roomType = [...this.state.selectedOptions.room_type, option];
    if (parent === "room_type") {
      if (room_type.indexOf(option) < 0) {
        this.setState(prevState => ({
          selectedOptions: {
            ...prevState.selectedOptions,
            room_type: [...prevState.selectedOptions.room_type, option],
          },
        }));
      } else {
        const index = room_type.indexOf(option);
        this.setState(prevState => ({
          selectedOptions: {
            ...prevState.selectedOptions,
            room_type: prevState.selectedOptions.room_type.filter((_, i) => i !== index) 
          },
        }));
      }
    }
    if (option === "instant_book") {
      this.setState(prevState => ({
        selectedOptions: {
          ...prevState.selectedOptions,
          instant_book: !prevState.selectedOptions.instant_book,
        },
      }));
    }
  }
  render() {
    console.log(this.state.selectedOptions);
    return (
      <MenuContainer>
        <RoomTypeMenu
          changeState={this.changeState}
          isRoomTypeOpen={this.state.isRoomTypeOpen}
          numberOfSelectedRoomType={this.state.numberOfSelectedRoomType}
          handleRoomtypeSelect={this.handleRoomtypeSelect}
          roomTypeChecked={this.state.roomTypeChecked}
          handleUpdate={this.handleUpdate}
        />
        <PriceRangeMenu
          changeState={this.changeState}
          isPriceRangeOpen={this.state.isPriceRangeOpen}
          handlePriceRangeChange={this.handlePriceRangeChange}
          currentPriceRange={this.state.currentPriceRange}
        />
        <InstantBookMenu 
          changeState={this.changeState}
          isInstantBookOpen={this.state.isInstantBookOpen}
          handleUpdate={this.handleUpdate}
          selectedOptions={this.state.selectedOptions}
        />
        <MoreFiltersMenu
          changeState={this.changeState}
          isMoreFiltersOpen={this.state.isMoreFiltersOpen}
        />
        {(this.state.isMoreFiltersOpen && <MoreFiltersOption />)}
      </MenuContainer>
    );
  }
}

export default Menu;
