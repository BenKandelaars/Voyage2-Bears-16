import React, { Component } from 'react';
import MoreFilters from './MoreFilters';
import { EachMenuContainer } from './styles';


class MoreFiltersMenu extends Component {
  render() {
    return (
      <EachMenuContainer>
        <MoreFilters changeState={this.props.changeState} />
      </EachMenuContainer>
    );
  }
}

export default MoreFiltersMenu;
