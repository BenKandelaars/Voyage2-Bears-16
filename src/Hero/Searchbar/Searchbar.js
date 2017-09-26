import React, { Component } from 'react';
import { SearchContainer, Button, InputPlusLabel } from './styles';

export class Searchbar extends Component {
  render() {
    return (
      <SearchContainer>
        <InputPlusLabel>
          <p>Where</p>
          <input type="text" name="Where"/>
        </InputPlusLabel>
            
        <InputPlusLabel>
            <p>When</p>
            <input type="text" name="When" />
        </InputPlusLabel>

        <InputPlusLabel>
            <p>Guests</p>
            <input type="text" name="When" />
        </InputPlusLabel>
        <Button>Search</ Button>
      </ SearchContainer>
    );
  }
}
