import React from 'react';
import { Searchbar } from './Searchbar/Searchbar'
import { HeroContainer } from './styles'

export const Hero = () => (
      <HeroContainer className="Hero">
        <div className="Hero-header">
          <h1>Airbnb</h1>
        </div>
        <p className="Hero-intro">
          Book unique homes and experience a city like a local.
        </p>
        <Searchbar />
      </ HeroContainer>
    );

