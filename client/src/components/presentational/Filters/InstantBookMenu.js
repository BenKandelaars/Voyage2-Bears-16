import React, { Component } from 'react';
import InstantBookOption from './InstantBookOption'
import { EachMenuContainer, EachFilterContainer, FilterOption, ArrowIcon } from './styles';
import FontAwesome from 'react-fontawesome';

const InstantBook = props => (
      <EachFilterContainer onClick={() => props.changeState("isInstantBookOpen")}>
        <FilterOption isOpen={props.isInstantBookOpen}>
        Instant Book
        <ArrowIcon isOpen={props.isInstantBookOpen}>
          <FontAwesome
            name="angle-down"
            style={{
              color: '#008489',
            }}
          />
        </ArrowIcon>
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
        />
        {(this.props.isInstantBookOpen && <InstantBookOption />)}
      </EachMenuContainer>
    );
  }
}

export default InstantBookMenu;
