import React, { Component } from 'react';
import InstantBookOption from './InstantBookOption'
import Arrow from './Arrow';
import { EachMenuContainer, EachFilterContainer, FilterOption, ArrowIcon, ActiveOption } from './styles';
import FontAwesome from 'react-fontawesome';

const InstantBook = props => (
      <EachFilterContainer onClick={() => props.changeState("isInstantBookOpen")}>
        <FilterOption isOpen={props.isInstantBookOpen}>
        Instant Book {(props.selectedOptions.instant_book && <ActiveOption><span>1</span></ActiveOption> )}
        <Arrow
          isOpen={props.isInstantBookOpen}
          color='#008489'
        />
        
        </FilterOption>
      </EachFilterContainer>
    );

class InstantBookMenu extends Component {
  render() {
    return (
      <EachMenuContainer>
        <InstantBook
          changeState={this.props.changeState}
          isInstantBookOpen={this.props.isInstantBookOpen}
          selectedOptions={this.props.selectedOptions}
        />
        {(this.props.isInstantBookOpen &&
          <InstantBookOption
            handleUpdate={this.props.handleUpdate}
            selectedOptions={this.props.selectedOptions}
          />)}
      </EachMenuContainer>
    );
  }
}

export default InstantBookMenu;
