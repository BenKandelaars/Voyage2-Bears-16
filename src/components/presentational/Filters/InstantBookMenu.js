import React, { Component } from 'react';
import InstantBook from './InstantBook';
import { EachMenuContainer } from './styles';


class InstantBookMenu extends Component {
  render() {
    return (
      <EachMenuContainer>
        <InstantBook changeState={this.props.changeState} />
      </EachMenuContainer>
    );
  }
}

export default InstantBookMenu;
