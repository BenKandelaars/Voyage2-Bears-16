import React, { Component } from 'react';
import { SearchContainer, Button, InputPlusLabel, InputGroup } from './styles';

export class Searchbar extends Component {
  render() {
    return (
      <SearchContainer className="Search-Container">
        <InputGroup className="Input-Group">
          <InputPlusLabel>
            <p>Where?</p>
            <input type="text" placeholder="Anywhere" name="Where"/>
          </InputPlusLabel>
        </ InputGroup>   

        <InputGroup className="Input-Group">
          <InputPlusLabel>
            <p>When?</p>
            <input placeholder="From - To" type="text" name="When" />
          </InputPlusLabel>
        </ InputGroup>

        <InputGroup className="Input-Group">
          <InputPlusLabel>
            <p>Guests</p>
            <select>
              <option value="1" name="guests">1</option>
              <option value="2" name="guests">2</option>
              <option value="3" name="guests">3</option>
              <option value="4" name="guests">4</option>
            </select>
          </InputPlusLabel>
          
        </ InputGroup>
        <Button className="Button">Search</Button>
      </ SearchContainer>
    );
  }
}
