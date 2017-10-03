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
  render() {
    return (
      <MoreFiltersContainer>
        <RoomsAndBeds />
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
