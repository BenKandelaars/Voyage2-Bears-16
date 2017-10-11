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
        <ToggleButton
          handleUpdate={this.props.handleUpdate}
          buttonType="instant_book"
          selectedOptions={this.props.selectedOptions.instant_book}
        />
        <SectionButtons />
      </InstantBookMenuContainer>
    );
  }
};

export default InstantBookOption;
