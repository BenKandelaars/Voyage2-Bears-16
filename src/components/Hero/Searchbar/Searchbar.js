import React, { Component } from 'react';
import { SearchContainer, ButtonWrapper, Button, InputWrapper, InputPlusLabel, InputGroup, Logo, Icon, Icon1, Dot } from './styles';

export class Searchbar extends Component {
  render() {
    return (
      <SearchContainer className="Search-Container">
        <InputWrapper className="Input-Wrapper">
          <InputGroup className="Input-Group">
            <Icon>
              <Logo className="fa fa-search" aria-hidden="true" />
            </Icon>
            <InputPlusLabel>
              <p>Where?</p>
              <input type="text" placeholder="Anywhere" name="Where"/>
            </InputPlusLabel>
          </ InputGroup>   

          <InputGroup className="Input-Group">
            <Dot className="Dot">
              <div className="fa fa-circle" aria-hidden="true" />
            </ Dot>
            <Icon1>
              <Logo className="fa fa-calendar-o" aria-hidden="true" />
            </Icon1>
            <InputPlusLabel>
              <p>When?</p>
              <input placeholder="From - To" type="text" name="When" />
            </InputPlusLabel>
          </ InputGroup>

          <InputGroup className="Input-Group">
            <Dot className="Dot">
              <div className="fa fa-circle" aria-hidden="true" />
            </ Dot>
            <Icon1>
              <Logo className="fa fa-users" aria-hidden="true" />
            </Icon1>
            <InputPlusLabel>
              <p>Guests</p>
              <input placeholder="1 Guest" type="text" name="Guests" />
            </InputPlusLabel>
          </ InputGroup>

        </ InputWrapper>
        <ButtonWrapper className="Button-Wrapper">
          <Button className="Button">
            Search
          </Button>
        </ButtonWrapper>
      </ SearchContainer>
    );
  }
}
