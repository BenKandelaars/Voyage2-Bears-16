import React from 'react';
import Slider, { Range } from 'rc-slider';
import { SliderContainer } from './styles';

const SliderComponent = () => (
  <SliderContainer>
    <Slider />
    <Range />
  </SliderContainer>
);

export default SliderComponent;
