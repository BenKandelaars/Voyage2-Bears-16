import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import SectionButtons from './SectionButtons';
import CheckboxComponent from './CheckboxComponent';
import { SectionContainer, Checkbox, CheckboxStyle, CheckBoxFakeLabel,
   SectionOption, SelectionChoice, SectionIcon, SelectionChoiceHeading, SelectionChoiceSubHeading
  } from './styles';



class RoomTypeOption extends Component {
  render() {
      return (
        <SectionContainer>
          <SectionOption>
            <CheckboxStyle>
              <Checkbox />
              <CheckBoxFakeLabel />
              <SelectionChoice>
                <SelectionChoiceHeading>Entire Home</SelectionChoiceHeading>
                <SelectionChoiceSubHeading>Have a place to yourself</SelectionChoiceSubHeading>
              </SelectionChoice>
            </CheckboxStyle>
            <SectionIcon>
              <FontAwesome
                name="home"
                size="3x"
              />
            </SectionIcon>
          </SectionOption>
          <SectionOption>
            <CheckboxStyle>
              <Checkbox onClick={this.clicked}/>
              <CheckBoxFakeLabel />
              <SelectionChoice>
                <SelectionChoiceHeading>Private Room</SelectionChoiceHeading>
                <SelectionChoiceSubHeading>Have your own room and share some common spaces</SelectionChoiceSubHeading>
              </SelectionChoice>
            </CheckboxStyle>
            <SectionIcon>
              <FontAwesome
                name="bathtub"
                size="3x"
              />
            </SectionIcon>
          </SectionOption>
          <SectionOption>
            <CheckboxStyle>
              <Checkbox onClick={this.clicked}/>
              <CheckBoxFakeLabel />
              <SelectionChoice>
                <SelectionChoiceHeading>Shared Room</SelectionChoiceHeading>
                <SelectionChoiceSubHeading>Stay in a shared space, like a common room</SelectionChoiceSubHeading>
              </SelectionChoice>
            </CheckboxStyle>
            <SectionIcon>
              <FontAwesome
                name="coffee"
                size="3x"
              />
            </SectionIcon>
            <SectionButtons />
        </SectionOption>
        </SectionContainer>
      );
    }
  };

export default RoomTypeOption;
