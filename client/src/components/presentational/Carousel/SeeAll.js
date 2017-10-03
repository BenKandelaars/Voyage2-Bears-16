import React from 'react';
import FontAwesome from 'react-fontawesome';
import { SeeAllStyle } from './style';

const SeeAll = () => {
  return (
    <SeeAllStyle>
    See all
    <FontAwesome
      name="angle-right"
      style={{
        color : "#666666",
        paddingLeft: ".4rem",
      }}
    />
    </SeeAllStyle>
  );
};

export default SeeAll;
