import React, { Component } from 'react';
import SectionButtons from './SectionButtons';
import ToggleButton from './ToggleButton';
import { InstantBookMenuContainer, SelectionChoiceHeading, SelectionChoiceSubHeading } from './styles';

class InstantBookOption extends Component {
  render() {
    return (
      <InstantBookMenuContainer>
        <div>
          <SelectionChoiceHeading>
          Instant Book
          </SelectionChoiceHeading>
          <SelectionChoiceSubHeading>
          Listings you can book without waiting for host approval
          </SelectionChoiceSubHeading>
        </div>
        <ToggleButton />
        <SectionButtons />
      </InstantBookMenuContainer>
    );
  }
};

export default InstantBookOption;
