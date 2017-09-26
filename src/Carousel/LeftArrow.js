import React from 'react';
import FontAwesome from 'react-fontawesome';
import { LeftArrowStyle } from './style.js';


const LeftArrow = () => {
  return (
    <LeftArrowStyle>
      <FontAwesome
       name="angle-left"
       size="3x"
       /> 
    </LeftArrowStyle>
  );
};

export default LeftArrow;