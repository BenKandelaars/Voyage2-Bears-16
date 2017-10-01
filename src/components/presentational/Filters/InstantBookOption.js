import React, { Component } from 'react';
import SectionButtons from './SectionButtons';
import { InstantBookMenuContainer, SelectionChoiceHeading, SelectionChoiceSubHeading } from './styles';

class InstantBookOption extends Component {
  render() {
    return (
      <InstantBookMenuContainer>
        <SelectionChoiceHeading>
          Instant Book
        </SelectionChoiceHeading>
        <SelectionChoiceSubHeading>
          Listings you can book without waiting for host approval
        </SelectionChoiceSubHeading>
        <SectionButtons />
      </InstantBookMenuContainer>
    );
  }
};

export default InstantBookOption;
