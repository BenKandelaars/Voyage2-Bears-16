import React, { Component } from 'react';
import InstantBook from './InstantBook';
import InstantBookOption from './InstantBookOption'
import { EachMenuContainer } from './styles';


class InstantBookMenu extends Component {
  render() {
    return (
      <EachMenuContainer>
        <InstantBook changeState={this.props.changeState} />
        {(this.props.isInstantBookOpen && <InstantBookOption />)}
      </EachMenuContainer>
    );
  }
}

export default InstantBookMenu;
