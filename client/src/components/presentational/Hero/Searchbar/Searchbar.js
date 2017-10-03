import React, { Component } from 'react';
import GuestDropdown from './GuestDropdown';
import { SearchContainer, ButtonWrapper, Button, InputWrapper, InputPlusLabel, InputGroup, InputGroup2, Logo, Icon, Icon1, Dot } from './styles';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      people: 1,
    };
    this.showMenu = this.showMenu.bind(this);
    this.numberOfGuests = this.numberOfGuests.bind(this);
  }

  showMenu() {
    this.setState({
      show: !this.state.show,
    });
  }

  numberOfGuests(x) {
    const number = x;
    this.setState({
      people: number,
    });
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

          <GuestDropdown showing={this.state.show} addGuests={this.numberOfGuests} />

          <InputGroup2 className="Input-Group2" onClick={this.showMenu}>
            <Dot className="Dot">
              <div className="fa fa-circle" aria-hidden="true" />
            </Dot>
            <Icon1>
              <Logo className="fa fa-users" aria-hidden="true" />
            </Icon1>
            <InputPlusLabel>
              <p>Guests</p>
              <span name="Guests">
                {this.state.people}
                  Guests
              </span>
            </InputPlusLabel>
            
          </InputGroup2>
          <ButtonWrapper className="Button-Wrapper">
            <Button className="Button">
              Search
            </Button>
          </ButtonWrapper>
        </InputWrapper>
        
      </SearchContainer>
    );
  }
}
