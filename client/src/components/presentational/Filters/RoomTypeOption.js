import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import SectionButtons from './SectionButtons';
import CheckboxComponent from './CheckboxComponent';
import { SectionContainer, Checkbox, CheckboxStyle, CheckBoxFakeLabel,
   SectionOption, SelectionChoice, SectionIcon, SelectionChoiceHeading, SelectionChoiceSubHeading
  } from './styles';

class RoomTypeOption extends Component {
  handleClick = (e) => {
    console.log(e);
  }
  render() {
      return (
        <SectionContainer>
          <SectionOption> 
            <CheckboxComponent
              stateName="entire-home"
              handleClick={this.handleClick}
              heading="Entire Home"
              subheading="Have a place to yourself"
              entireDiv
            />
            <SectionIcon>
              <FontAwesome
                name="home"
                size="2x"
              />
            </SectionIcon>
          </SectionOption>
          <SectionOption>
            <CheckboxComponent
              heading="Private Room"
              subheading="Have your own room and share some common spaces"
              entireDiv
            />
            <SectionIcon>
              <FontAwesome
                name="bathtub"
                size="2x"
              />
            </SectionIcon>
          </SectionOption>
          <SectionOption>
            <CheckboxComponent
              heading="Shared Room"
              subheading="Stay in a shared space, like a common room"
              entireDiv
            />
            <SectionIcon>
              <FontAwesome
                name="coffee"
                size="2x"
              />
            </SectionIcon>
        </SectionOption>
        <SectionButtons />
        </SectionContainer>
      );
    }
  };

export default RoomTypeOption;
