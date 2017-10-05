import React from 'react';
import Hero from '../presentational/Hero/Hero';
import Carousel from '../presentational/Carousel/Carousel';
import Cards from '../presentational/Cards/Cards';
import Sitemap from '../presentational/Sitemap/Sitemap';
import NavComponent from '../presentational/Navbar/Navbar';

const Landing = () => (
  <div>
    <NavComponent />
    <Hero />
    <Carousel />
    <Cards />
    <Sitemap />
  </div>
);

export default Landing;
