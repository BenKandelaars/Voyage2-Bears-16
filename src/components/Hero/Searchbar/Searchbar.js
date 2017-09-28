import React, { Component } from 'react';
import { SearchContainer, ButtonWrapper, Button, InputPlusLabel, InputGroup, LOGO, Icon } from './styles';

export class Searchbar extends Component {
  render() {
    return (
      <SearchContainer className="Search-Container">

        <InputGroup className="Input-Group">
          <Icon>
            <LOGO className="fa fa-search" aria-hidden="true" />
          </Icon>
          <InputPlusLabel>
            <p>Where?</p>
            <input type="text" placeholder="Anywhere" name="Where"/>
          </InputPlusLabel>
        </ InputGroup>   

        <InputGroup className="Input-Group">
          <Icon>
            <LOGO className="fa fa-calendar-o" aria-hidden="true" />
          </Icon>
          <InputPlusLabel>
            <p>When?</p>
            <input placeholder="From - To" type="text" name="When" />
          </InputPlusLabel>
        </ InputGroup>

        <InputGroup className="Input-Group">
          <Icon>
            <LOGO className="fa fa-users" aria-hidden="true" />
          </Icon>
          <InputPlusLabel>
            <p>Guests</p>
            <input placeholder="1 Guest" type="text" name="Guests" />
          </InputPlusLabel>
          
        </ InputGroup>
        <ButtonWrapper className="Button-Wrapper">
          <Button className="Button">
            Search
          </Button>
        </ButtonWrapper>
      </ SearchContainer>
    );
  }
}
