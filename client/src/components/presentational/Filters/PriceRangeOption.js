import React, { Component } from 'react';
import SectionButtons from './SectionButtons';
import { SectionContainer, SelectionChoiceHeading, SelectionChoiceSubHeading,
  SliderContainer } from './styles';

export class Slider extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

const PriceRangeOption = () => {
  return (
    <SectionContainer>
      <SelectionChoiceHeading>
        $10 - $1000+
      </SelectionChoiceHeading>
      <SelectionChoiceSubHeading>
        The average nightly price is $77.      
      </SelectionChoiceSubHeading>
      <SliderContainer>
        <Slider />
      </SliderContainer>
      <SectionButtons />
    </SectionContainer>
  )
};

export default PriceRangeOption;
