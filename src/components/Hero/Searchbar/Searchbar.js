import React, { Component } from 'react';
import { SearchContainer, Button, InputPlusLabel, InputGroup, I, Icon } from './styles';

export class Searchbar extends Component {
  render() {
    return (
      <SearchContainer className="Search-Container">
        <InputGroup className="Input-Group">
          <Icon>
            <I className="fa fa-search" aria-hidden="true" />
          </Icon>
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
            <input placeholder="1 Guest" type="text" name="Guests" />
          </InputPlusLabel>
          
        </ InputGroup>
        <Button className="Button">Search</Button>
      </ SearchContainer>
    );
  }
}
