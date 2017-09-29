import React, { Component } from 'react';
import Carousel from '../components/Carousel/Carousel';
import Sitemap from '../components/sitemap/Sitemap';
import { Hero } from '../components/Hero/Hero';

class Home extends Component {
  
  render() {
    return (
      <div>
        <Hero />
        <Carousel />
        <Sitemap />
      </div>
    )
  }
};

export { Home };
