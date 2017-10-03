import React from 'react';
import ExperiencesTop from './ExperiencesTop';
import ExperiencesCarousel from './ExperiencesCarousel';
import 'font-awesome/css/font-awesome.css';
import { Container } from './styles';


const Carousel = () => {
  return (
    <Container>
      <ExperiencesTop />
      <ExperiencesCarousel />
    </Container>
  );
};

export default Carousel;
