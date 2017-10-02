import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Sitemap from '../components/Sitemap/Sitemap';
import Cards from '../components/Cards/Cards';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1> The start of our app </h1>
        <h2>This is the end of our app</h2>
        <Carousel />
        <Cards />
        <Sitemap />
      </div>
    )
  }
};

export { Home };
