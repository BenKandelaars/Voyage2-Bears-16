import React, { Component } from 'react';
import CheckboxComponent from './CheckboxComponent';
import Counter from './Counter';
import ToggleButton from './ToggleButton';
import { MoreFiltersContainer, EachOptionContainer,
  MoreFiltersHeading, MoreFiltersOptionStyle,
  MoreFiltersOptionContainer,
  CounterContainer, MinusButton, PlusButton, CounterNumber } from './styles';

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

export const Amenities = () => (
  <EachOptionContainer>
    <MoreFiltersHeading>Amenities</MoreFiltersHeading>
    <MoreFiltersOptionContainer>
      <div>
        <CheckboxComponent value={'Family/Kid Friendly'}/>
        <CheckboxComponent value={'TV'}/>
      </div>
      <div>
        <CheckboxComponent value={'Kitchen'}/>
        <CheckboxComponent value={'Wireless Internet'}/>          
      </div>
    </MoreFiltersOptionContainer>
  </EachOptionContainer>
);

export const Facilities = () => (
  <EachOptionContainer>
    <MoreFiltersHeading>Facilities</MoreFiltersHeading>
    <MoreFiltersOptionContainer>
      <div>
        <CheckboxComponent value={'Elevator in Building'}/>
        <CheckboxComponent value={'Hot Tub'}/>
        <CheckboxComponent value={'Gym'}/>
      </div>
      <div>
        <CheckboxComponent value={'Free parking on premise'}/>
        <CheckboxComponent value={'Pool'}/>
        <CheckboxComponent value={'Wheelchair accessible'}/>    
      </div>
    </MoreFiltersOptionContainer>
  </EachOptionContainer>
);

export const HouseRules = () => (
  <EachOptionContainer>
    <MoreFiltersHeading>House rules</MoreFiltersHeading>
    <MoreFiltersOptionContainer>
      <div>
        <CheckboxComponent value={'Pets Allowed'} />
        <CheckboxComponent value={'Suitable for events'} />
      </div>
      <div>
        <CheckboxComponent value={'Smoking Allowed'} />
      </div>
    </MoreFiltersOptionContainer>        
  </EachOptionContainer>
);

export const HostLanguage = () => (
  <EachOptionContainer>
    <MoreFiltersHeading>Host language</MoreFiltersHeading>
    <MoreFiltersOptionContainer>
      <div>
        <CheckboxComponent value={'English'}/>
        <CheckboxComponent value={'Français'}/>
      </div>
      <div>
        <CheckboxComponent value={'Español'}/>
        <CheckboxComponent value={'中文'}/>          
      </div>
    </MoreFiltersOptionContainer>
  </EachOptionContainer>
);


class MoreFiltersOption extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfBedrooms: 0,
      numberOfBeds: 0,
      numberOfBathrooms: 0,
    }
  }
  // handleButtonClick = (clickedCounter, isPlus) => {
  //   this.setState(prevState => ({
  //     [clickedCounter]: (isPlus ? (prevState[clickedCounter] + 1) : (prevState[clickedCounter] - 1)),
  //   }));
  // }

  handlePlusButtonClick = (clickedCounter, isHalfSize) => {
    const halfsize = (isHalfSize ? 0.5 : 1);
    this.setState(prevState => ({
      [clickedCounter]: prevState[clickedCounter] + halfsize,
    }));
  }
  handleMinusButtonClick = (clickedCounter, isHalfSize) => {
    const halfsize = (isHalfSize ? 0.5 : 1);
    if (this.state[clickedCounter] > 0) {
      this.setState(prevState => ({
        [clickedCounter]: prevState[clickedCounter] - halfsize,
      }));
    }
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
        <MoreOptions />
        <Amenities />
        <Facilities />
        <HouseRules />
        <HostLanguage />
      </MoreFiltersContainer>
    );
  }
}

export default MoreFiltersOption;
