import React from 'react';
import Slider, { Range } from 'rc-slider';
import { SliderContainer } from './styles';
import 'rc-slider/assets/index.css';

function log(value) {
  console.log(value); //eslint-disable-line
}

const SliderComponent = () => (
  <SliderContainer>
    <Range
      onChange={log}
      allowCross={false}
      defaultValue={[0, 1000]}
      trackStyle={[{
        backgroundColor: '#008489', 
      }]}
      handleStyle={[{
        height: '30px',
        width: '30px',
        border: '1px solid #008489',
      },
      {
        height: '30px',
        width: '30px',
        border: '1px solid #008489',
      }
      ]}
      />
  </SliderContainer>
);

export default SliderComponent;
