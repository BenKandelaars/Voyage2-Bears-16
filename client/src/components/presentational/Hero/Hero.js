import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import { HeroContainer, Header, HeaderContainer } from './styles';

export default function Hero() {
  return (
    <HeroContainer className="Hero-Container">
      <HeaderContainer className="Header-Container">
        <Header className="Hero-header">
          <h1>Airbnb</h1>
          <p className="Hero-intro">
              Book unique homes and experience a city like a local.
          </p>
        </Header>
        <Searchbar className="Searchbar" />
      </HeaderContainer>
    </HeroContainer>
  )
;
}

