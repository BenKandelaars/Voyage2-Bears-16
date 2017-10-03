import React from 'react';
import ExperiencesTop from './ExperiencesTop';
import ExperiencesCarousel from './ExperiencesCarousel';
import HomesTop from './HomesTop';
import HomesCarousel from './HomesCarousel';
import 'font-awesome/css/font-awesome.css';
import { Container } from './styles';


const Carousel = () => {
  return (
    <Container>
      <ExperiencesTop />
      <ExperiencesCarousel />
      <HomesTop />
      <HomesCarousel />
    </Container>
  );
};

export default Carousel;
