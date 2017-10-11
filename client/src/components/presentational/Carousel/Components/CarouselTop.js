import React from 'react';
import PropTypes from 'prop-types';
import SeeAll from './SeeAll';
import { CarouselTitle, CarouselTopStyle } from './styles';

const CarouselTop = props => (
  <CarouselTopStyle>
    <CarouselTitle>{props.title}</CarouselTitle>
    <SeeAll />
  </CarouselTopStyle>
);


CarouselTop.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CarouselTop;
