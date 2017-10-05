import React from 'react';
import Hero from '../presentational/Hero/Hero';
import Carousel from '../presentational/Carousel/Carousel';
import Cards from '../presentational/Cards/Cards';
import Sitemap from '../presentational/Sitemap/Sitemap';
import NavComponent from '../presentational/Navbar/Navbar';
import HomeNavbar from '../presentational/HomeNavbar/HomeNavbar';
import { Wrapper } from './LandingStyles';

const Landing = () => (
  <div>
    <NavComponent />
    <Wrapper>
      <Hero />
      <HomeNavbar />
      <Carousel />
      <Cards />
      <Sitemap />
    </Wrapper>
  </div>
);

export default Landing;
