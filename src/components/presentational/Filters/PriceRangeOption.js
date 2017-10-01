import React from 'react';
import { SectionContainer, SelectionChoiceHeading, SelectionChoiceSubHeading,
  SliderContainer, Slider } from './styles';

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
    </SectionContainer>
  )
};

export default PriceRangeOption;
