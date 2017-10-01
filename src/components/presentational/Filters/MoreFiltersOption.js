import React, { Component } from 'react';
import { MoreFiltersContainer, EachOptionContainer,
  MoreFiltersHeading } from './styles';

class MoreFiltersOption extends Component {
  render() {
    return (
      <MoreFiltersContainer>
      <EachOptionContainer>
        <MoreFiltersHeading>Rooms and beds</MoreFiltersHeading>
        <div>
          <div>Bedrooms</div>
          <div>0+</div>
        </div>
        <div>
          <div>Beds</div>
          <div>0+</div>
        </div>
        <div>
          <div>Bathrooms</div>
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
