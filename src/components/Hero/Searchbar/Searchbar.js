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
            <input type="date" name="When" />
        </InputPlusLabel>

        <InputPlusLabel>
            <p>Guests</p>
            <select>
              <option value="1" name="guests">1</option>
              <option value="1" name="guests">2</option>
              <option value="1" name="guests">3</option>
              <option value="1" name="guests">4</option>
            </select>
        </InputPlusLabel>
        <Button>Search</ Button>
      </ SearchContainer>
    );
  }
}
