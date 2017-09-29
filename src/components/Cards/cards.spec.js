import React from 'react';
import ReactDom from 'react-dom';
import { ExploreCard } from './Cards';
import homeImg from '../../assets/pictures/explore/home_medium.jpg';

describe('Card component tests', () => {

  describe('Explore Cards Component', () => {
    it('Smoke test', () => {
      const div = document.createElement('div');
      ReactDom.render(<ExploreCard img={homeImg} title={'Home'} />, div);
    });
  });
});

