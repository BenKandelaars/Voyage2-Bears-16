import React, { Component } from 'react';
import { MoreFiltersContainer, EachOptionContainer,
  MoreFiltersHeading, MoreFiltersOptionStyle,
  MoreFiltersOptionContainer,
  CounterContainer, MinusButton, PlusButton, Counter } from './styles';

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


class MoreFiltersOption extends Component {
  render() {
    return (
      <MoreFiltersContainer>
        <RoomsAndBeds />
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
      <EachOptionContainer>
        Amenities
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
