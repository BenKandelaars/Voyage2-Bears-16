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
      isRoomTypeOpen: false,
      isPriceRangeOpen: false,
      isInstantBookOpen: false,
      isMoreFiltersOpen: true,
      currentPriceRange: [9, 1000],
      isAmenitiesSeeAll: false,
      isFacilitiesSeeAll: false,
      isNeighbourhoodsSeeAll: false,
      isHostLanguageSeeAll: false,
      shouldAnimate: false,
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

  handleStateCheck = () => {
    return false;
    // if (this.state.selectedOptions.parent.indexOf(option) > 0) {
    //   return true;
    // } return false;
  }

  handleUpdate = (option, parent) => {
    const { room_type } = this.state.selectedOptions;
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
    if (option === "superhost") {
      this.setState(prevState => ({
        selectedOptions: {
          ...prevState.selectedOptions,
          more_filters: {
            ...prevState.selectedOptions.more_filters,
            more_options: {
              ...prevState.selectedOptions.more_filters.more_options,
              superhost: !prevState.selectedOptions.more_filters.more_options.superhost,
            },
          },
        },
      }));
    }
  }
  handlePlusButtonClick = (clickedCounter, isHalfSize) => {
    const number = (isHalfSize ? 0.5 : 1);
    this.setState(prevState => ({
      selectedOptions: {
        ...prevState.selectedOptions,
        more_filters: {
          ...prevState.selectedOptions.more_filters,
          rooms_and_beds: {
            ...prevState.selectedOptions.more_filters.rooms_and_beds,
            [clickedCounter]: prevState.selectedOptions.more_filters.rooms_and_beds[clickedCounter] + number,            
          },
        },
      },
    }));
  }
  handleMinusButtonClick = (clickedCounter, isHalfSize) => {
    const number = (isHalfSize ? 0.5 : 1);
    this.setState(prevState => ({
      selectedOptions: {
        ...prevState.selectedOptions,
        more_filters: {
          rooms_and_beds: {
            ...prevState.selectedOptions.more_filters.rooms_and_beds,
            [clickedCounter]: prevState.selectedOptions.more_filters.rooms_and_beds[clickedCounter] - number,            
          },
        },
      },
    }));
  }
  handleAnimation = () => {
    this.setState(prevState => ({
      shouldAnimate: !prevState.shouldAnimate,
    }));
  }
  handleSeeAll = (clickedSection) => {
    this.handleAnimation();
    setTimeout(() => {
      this.setState(prevState => ({
        [clickedSection]: !prevState[clickedSection],
      }));
    }, 200);
  }
  render() {
    return (
      <MenuContainer>
        <RoomTypeMenu
          changeState={this.changeState}
          isRoomTypeOpen={this.state.isRoomTypeOpen}
          numberOfSelectedRoomType={this.state.numberOfSelectedRoomType}
          handleRoomtypeSelect={this.handleRoomtypeSelect}
          roomTypeChecked={this.state.roomTypeChecked}
          handleUpdate={this.handleUpdate}
          selectedOptions={this.state.selectedOptions}
          handleStateCheck={this.handleStateCheck}
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
        {(this.state.isMoreFiltersOpen &&
          <MoreFiltersOption
            selectedOptions={this.state.selectedOptions}
            handleUpdate={this.handleUpdate}
            handlePlusButtonClick={this.handlePlusButtonClick}
            handleMinusButtonClick={this.handleMinusButtonClick}
            handleAnimation={this.handleAnimation}
            handleSeeAll={this.handleSeeAll}
            isAmenitiesSeeAll={this.state.isAmenitiesSeeAll}
            isFacilitiesSeeAll={this.state.isFacilitiesSeeAll}
            isNeighbourhoodsSeeAll={this.state.isNeighbourhoodsSeeAll}
            isHostLanguageSeeAll={this.state.isHostLanguageSeeAll}
            shouldAnimate={this.state.shouldAnimate}
          />
        )}
      </MenuContainer>
    );
  }
}

export default Menu;
