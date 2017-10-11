import React from 'react';
import Hero from '../presentational/Hero/Hero';
import LandingContent from '../presentational/LandingContent/LandingContent';
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
      <LandingContent />
      <Sitemap />
    </Wrapper>
  </div>
);

export default Landing;
