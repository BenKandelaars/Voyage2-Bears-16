import React, { Component } from 'react';
import CheckboxComponent from './CheckboxComponent';
import { MoreFiltersContainer, EachOptionContainer,
  MoreFiltersHeading, MoreFiltersOptionStyle,
  MoreFiltersOptionContainer,
  CounterContainer, MinusButton, PlusButton, Counter,
  Checkbox, CheckboxStyle, CheckBoxFakeLabel,
  SectionOption, SelectionChoice, SelectionChoiceHeading } from './styles';

export const RoomsAndBeds = () => (
  <EachOptionContainer>
    <MoreFiltersHeading>Rooms and beds</MoreFiltersHeading>
    <MoreFiltersOptionContainer>
      <MoreFiltersOptionStyle>Bedrooms</MoreFiltersOptionStyle>
      <CounterContainer>
        <MinusButton />
        <Counter>0+</Counter>
        <PlusButton />
      </CounterContainer>
    </MoreFiltersOptionContainer>
    <MoreFiltersOptionContainer>
      <MoreFiltersOptionStyle>Beds</MoreFiltersOptionStyle>
      <CounterContainer>
        <MinusButton />
        <Counter>0+</Counter>
        <PlusButton />
      </CounterContainer>
    </MoreFiltersOptionContainer>
    <MoreFiltersOptionContainer>
      <MoreFiltersOptionStyle>Bathrooms</MoreFiltersOptionStyle>
      <CounterContainer>
        <MinusButton />
        <Counter>0+</Counter>
        <PlusButton />
      </CounterContainer>
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
      <div>X</div>
    </MoreFiltersOptionContainer>
  </EachOptionContainer>
);


class MoreFiltersOption extends Component {
  render() {
    return (
      <MoreFiltersContainer>
        <RoomsAndBeds />
        <MoreOptions />
      <EachOptionContainer>
        <MoreFiltersHeading>Amenities</MoreFiltersHeading>
        <MoreFiltersOptionContainer>
          <div>
            <CheckboxComponent value={"Family/Kid Friendly"}/>
            <CheckboxComponent value={"TV"}/>
          </div>
          <div>
            <CheckboxComponent value={"Kitchen"}/>
            <CheckboxComponent value={"Wireless Internet"}/>          
          </div>
        </MoreFiltersOptionContainer>
      </EachOptionContainer>
      <EachOptionContainer>
        Facilities
      </EachOptionContainer>
      <EachOptionContainer>
        House rules
      </EachOptionContainer>
      <EachOptionContainer>
        Host language
      </EachOptionContainer>
      </MoreFiltersContainer>
    );
  }
};

export default MoreFiltersOption;
