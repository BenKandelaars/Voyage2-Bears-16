import React, { Component } from 'react';
import Arrow from './Arrow';
import CheckboxComponent from './CheckboxComponent';
import Counter from './Counter';
import ToggleButton from './ToggleButton';
import { MoreFiltersContainer, EachOptionContainer,
  MoreFiltersHeading, MoreFiltersOptionStyle,
  MoreFiltersOptionContainer,
  CheckboxContainer, SectionBreak,
  SeeAllContainer, SeeAllButton, SeeAllAnimation } from './styles';

export const RoomsAndBeds = props => (
  <EachOptionContainer>
    <MoreFiltersHeading>Rooms and beds</MoreFiltersHeading>
    <MoreFiltersOptionContainer>
      <MoreFiltersOptionStyle>Bedrooms</MoreFiltersOptionStyle>
      <Counter 
        handlePlusButtonClick={props.handlePlusButtonClick}
        handleMinusButtonClick={props.handleMinusButtonClick}
        count={props.numberOfBedrooms}
        plusSign={true}
        clickedCounter="numberOfBedrooms"
      />
    </MoreFiltersOptionContainer>
    <MoreFiltersOptionContainer>
      <MoreFiltersOptionStyle>Beds</MoreFiltersOptionStyle>
      <Counter 
        handlePlusButtonClick={props.handlePlusButtonClick}
        handleMinusButtonClick={props.handleMinusButtonClick}
        count={props.numberOfBeds}
        plusSign={true}
        clickedCounter="numberOfBeds"
      />
    </MoreFiltersOptionContainer>
    <MoreFiltersOptionContainer>
      <MoreFiltersOptionStyle>Bathrooms</MoreFiltersOptionStyle>
      <Counter 
        handlePlusButtonClick={props.handlePlusButtonClick}
        handleMinusButtonClick={props.handleMinusButtonClick}
        count={props.numberOfBathrooms}
        plusSign={true}
        isHalfSize={true}
        clickedCounter="numberOfBathrooms"
      />
    </MoreFiltersOptionContainer>
  </EachOptionContainer>
);

export const MoreOptions = () => (
  <EachOptionContainer>
    <MoreFiltersHeading>More options</MoreFiltersHeading>
    <MoreFiltersOptionContainer>
      <div>
        <MoreFiltersOptionStyle>Superhost</MoreFiltersOptionStyle>
        <p>Stay with recognised hosts.</p>
        <p>Learn more</p>
      </div> 
      <div>
        <ToggleButton />
      </div>
    </MoreFiltersOptionContainer>
  </EachOptionContainer>
);

export const Amenities = props => (
  <EachOptionContainer entireDiv>
    <MoreFiltersHeading>Amenities</MoreFiltersHeading>
    <MoreFiltersOptionContainer>
      <CheckboxComponent heading="Heating" />
      <CheckboxComponent heading="Kitchen" />
      <CheckboxComponent heading="TV" />
      <CheckboxComponent heading="Wireless Internet" />
      <SeeAllAnimation isSeeAll={props.isAmenitiesSeeAll}>
        {props.isAmenitiesSeeAll && 
          <SeeAllContainer isSeeAll={props.isAmenitiesSeeAll} >
            <CheckboxComponent heading="Buzzer/wireless intercom" />
            <CheckboxComponent heading="Doorman" />
            <CheckboxComponent heading="Dryer" />
            <CheckboxComponent heading="Family/Kid Friendly"/>
            <CheckboxComponent heading="Hair dryer" />
            <CheckboxComponent heading="Hangers" />
            <CheckboxComponent heading="Indoor Fireplace" />
            <CheckboxComponent heading="Iron" />
            <CheckboxComponent heading="Laptop friendly workspace" />
            <CheckboxComponent heading="Lock on bedroom" />
            <CheckboxComponent heading="Self Check-in" />
            <CheckboxComponent heading="Shampoo" />
            <CheckboxComponent heading="Washer" />
          </SeeAllContainer>
        }
      </SeeAllAnimation>
    </MoreFiltersOptionContainer>
    <SeeAllButton onClick={() => props.handleSeeAll("isAmenitiesSeeAll")}>See all amenities</SeeAllButton>
    <Arrow
      isOpen={props.isAmenitiesSeeAll}
      color='#008489'
    />
  </EachOptionContainer>
);

export const Facilities = props => (
  <EachOptionContainer entireDiv>
    <MoreFiltersHeading>Facilities</MoreFiltersHeading>
    <MoreFiltersOptionContainer>
        <CheckboxComponent heading="Elevator in Building" />
        <CheckboxComponent heading="Free parking on premise" />
        <CheckboxComponent heading="Pool" />
        <CheckboxComponent heading="Wheelchair accessible" />  
      {props.isFacilitiesSeeAll && 
        <SeeAllContainer isSeeAll={props.isFacilitiesSeeAll}>
          <CheckboxComponent heading="Gym" />
          <CheckboxComponent heading="Hot Tub" />
        </SeeAllContainer>     
      }
    </MoreFiltersOptionContainer>
    <SeeAllButton onClick={() => props.handleSeeAll("isFacilitiesSeeAll")}>See all facilities</SeeAllButton>
    <Arrow
      isOpen={props.isFacilitiesSeeAll}
      color='#008489'
    />
  </EachOptionContainer>
);

export const HouseRules = props => (
  <EachOptionContainer entireDiv>
    <MoreFiltersHeading>House rules</MoreFiltersHeading>
    <MoreFiltersOptionContainer>
      <CheckboxComponent heading="Pets Allowed" />
      <CheckboxComponent heading="Suitable for events" />
      <CheckboxComponent heading="Smoking Allowed" />
    </MoreFiltersOptionContainer>
  </EachOptionContainer>
);

export const Neighbourhoods = props => (
  <EachOptionContainer entireDiv>
    <MoreFiltersHeading>Facilities</MoreFiltersHeading>
    <MoreFiltersOptionContainer>
        <CheckboxComponent heading="Bali" />
        <CheckboxComponent heading="Centro" />
        <CheckboxComponent heading="French Riviera" />
        <CheckboxComponent heading="Puxi" />
      {props.isNeighbourhoodsSeeAll && 
        <SeeAllContainer isSeeAll={props.isNeighbourhoodsSeeAll}>
          <CheckboxComponent heading="1st Arrondissement" />
          <CheckboxComponent heading="3rd Arrondissement" />
        </SeeAllContainer>     
      }
    </MoreFiltersOptionContainer>
    <SeeAllButton onClick={() => props.handleSeeAll("isNeighbourhoodsSeeAll")}>See all neighbourhoods</SeeAllButton>
    <Arrow
      isOpen={props.isNeighbourhoodsSeeAll}
      color='#008489'
    />
  </EachOptionContainer>
);


export const HostLanguage = props => (
  <EachOptionContainer entireDiv>
    <MoreFiltersHeading>Host language</MoreFiltersHeading>
    <MoreFiltersOptionContainer>
      <CheckboxComponent heading="English" />
      <CheckboxComponent heading="Français" />
      <CheckboxComponent heading="Español" />
      <CheckboxComponent heading="中文" />
      {props.isHostLanguageSeeAll && 
        <SeeAllContainer isSeeAll={props.isHostLanguageSeeAll}>
          <CheckboxComponent heading="Bahasa Indonesia" />
          <CheckboxComponent heading="Bahasa Malaysia" />
        </SeeAllContainer>     
      }
    </MoreFiltersOptionContainer>
    <SeeAllButton onClick={() => props.handleSeeAll("isHostLanguageSeeAll")}>See all host language</SeeAllButton>
    <Arrow
      isOpen={props.isHostLanguageSeeAll}
      color='#008489'
    />
  </EachOptionContainer>
);


class MoreFiltersOption extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfBedrooms: 0,
      numberOfBeds: 0,
      numberOfBathrooms: 0,
      isAmenitiesSeeAll: false,
      isFacilitiesSeeAll: false,
      isNeighbourhoodsSeeAll: false,
      isHostLanguageSeeAll: false,
    }
  }
  handlePlusButtonClick = (clickedCounter, isHalfSize) => {
    const number = (isHalfSize ? 0.5 : 1);
    this.setState(prevState => ({
      [clickedCounter]: prevState[clickedCounter] + number,
    }));
  }
  handleMinusButtonClick = (clickedCounter, isHalfSize) => {
    const number = (isHalfSize ? 0.5 : 1);
    if (this.state[clickedCounter] > 0) {
      this.setState(prevState => ({
        [clickedCounter]: prevState[clickedCounter] - number,
      }));
    }
  }
  handleSeeAll = (clickedSection) => {
    this.setState(prevState => ({
      [clickedSection]: !prevState[clickedSection]
    }));
  }

  render() {
    return (
      <MoreFiltersContainer>
        <RoomsAndBeds
          handlePlusButtonClick={this.handlePlusButtonClick}
          handleMinusButtonClick={this.handleMinusButtonClick}
          handleButtonClick={this.handleButtonClick}
          numberOfBedrooms={this.state.numberOfBedrooms}
          numberOfBeds={this.state.numberOfBeds}
          numberOfBathrooms={this.state.numberOfBathrooms}
          />
        <SectionBreak />
        <MoreOptions />
        <SectionBreak />
        <Amenities
          isAmenitiesSeeAll={this.state.isAmenitiesSeeAll}
          handleSeeAll={this.handleSeeAll}
        />
        <SectionBreak />
        <Facilities
          isFacilitiesSeeAll={this.state.isFacilitiesSeeAll} 
          handleSeeAll={this.handleSeeAll}
        />
        <SectionBreak />
        <HouseRules
        />
        <SectionBreak />
        <Neighbourhoods
          isNeighbourhoodsSeeAll={this.state.isNeighbourhoodsSeeAll} 
          handleSeeAll={this.handleSeeAll}
        />
        <SectionBreak />
        <HostLanguage
          isHostLanguageSeeAll={this.state.isHostLanguageSeeAll} 
          handleSeeAll={this.handleSeeAll}
        />
        <SectionBreak />
      </MoreFiltersContainer>
    );
  }
}

export default MoreFiltersOption;
