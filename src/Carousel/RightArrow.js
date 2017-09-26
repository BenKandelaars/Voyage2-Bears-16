import React from 'react';
import FontAwesome from 'react-fontawesome';
import { RightArrowStyle } from './style.js';

const RightArrow = () => {
  return (
    <RightArrowStyle>
    <FontAwesome
     name="angle-right"
     size="3x"
     /> 
    </RightArrowStyle>
  );
};

export default RightArrow;