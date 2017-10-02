import React, { Component } from 'react';
import GuestDropdown from './GuestDropdown';
import { SearchContainer, ButtonWrapper, Button, InputWrapper, InputPlusLabel, InputGroup, Logo, Icon, Icon1, Dot } from './styles';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      people: 2,
    };

    const onAddGuests = () => {
      this.setState({
        show: !this.state.show,
      });
    };
  }

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
              <input type="text" placeholder="Anywhere" name="Where" />
            </InputPlusLabel>
          </InputGroup>

          <InputGroup className="Input-Group">
            <Dot className="Dot">
              <div className="fa fa-circle" aria-hidden="true" />
            </Dot>
            <Icon1>
              <Logo className="fa fa-calendar-o" aria-hidden="true" />
            </Icon1>
            <InputPlusLabel>
              <p>When?</p>
              <input placeholder="From - To" type="text" name="When" />
            </InputPlusLabel>
          </InputGroup>

          <GuestDropdown />

          <InputGroup className="Input-Group">
            <Dot className="Dot">
              <div className="fa fa-circle" aria-hidden="true" />
            </Dot>
            <Icon1>
              <Logo className="fa fa-users" aria-hidden="true" />
            </Icon1>
            <InputPlusLabel>
              <p>Guests</p>
              <span name="Guests"> {this.state.people} Guest</span>
            </InputPlusLabel>
          </InputGroup>

        </InputWrapper>
        <ButtonWrapper className="Button-Wrapper">
          <Button className="Button">
            Search
          </Button>
        </ButtonWrapper>
      </SearchContainer>
    );
  }
}
