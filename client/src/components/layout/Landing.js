import React from 'react';
import Hero from '../presentational/Hero/Hero';
import Carousel from '../presentational/Carousel/Carousel';
import Cards from '../presentational/Cards/Cards';
import Sitemap from '../presentational/Sitemap/Sitemap';
import NavComponent from '../presentational/Navbar/Navbar';
import SubNavbar from '../presentational/SubNavbar/SubNavbar';
import { Wrapper } from './landing_styles';

const Landing = () => (
  <div>
    <NavComponent />
    <Wrapper>
      <Hero />
      <SubNavbar />
      <Carousel />
      <Cards />
      <Sitemap />
    </Wrapper>
  </div>
);

export default Landing;
