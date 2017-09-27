import React from 'react';
import { Searchbar } from './Searchbar/Searchbar'
import { HeroContainer, Header, HeaderContainer } from './styles'

export const Hero = () => (
      <HeroContainer className="Hero">
        <HeaderContainer>
          <Header className="Hero-header">
            <h1>Airbnb</h1>
          <p className="Hero-intro">
            Book unique homes and experience a city like a local.
          </p>
          </Header>
          <Searchbar />
        </HeaderContainer>
      </ HeroContainer>
    );

