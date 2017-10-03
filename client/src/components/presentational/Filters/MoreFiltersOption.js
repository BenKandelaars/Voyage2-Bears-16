import React, { Component } from 'react';
import { MoreFiltersContainer, EachOptionContainer,
  MoreFiltersHeading, MoreFiltersOptionStyle,
  MoreFiltersOptionContainer,
  MinusButton, PlusButton, Counter } from './styles';

class MoreFiltersOption extends Component {
  render() {
    return (
      <MoreFiltersContainer>
      <EachOptionContainer>
        <MoreFiltersHeading>Rooms and beds</MoreFiltersHeading>
        <MoreFiltersOptionContainer>
          <MoreFiltersOptionStyle>Bedrooms</MoreFiltersOptionStyle>
          <div>
            <MinusButton />
              <Counter>0+</Counter>
            <PlusButton />
          </div>
        </MoreFiltersOptionContainer>
        <div>
          <MoreFiltersOptionStyle>Beds</MoreFiltersOptionStyle>
          <div>0+</div>
        </div>
        <div>
          <MoreFiltersOptionStyle>Bathrooms</MoreFiltersOptionStyle>
          <div>0+</div>
        </div>
      </EachOptionContainer>
      <EachOptionContainer>
        <MoreFiltersHeading>More options</MoreFiltersHeading>
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
