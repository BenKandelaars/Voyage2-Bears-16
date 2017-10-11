import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import {
  Wrapper,
  LinkStyles,
} from './styles';

class SubNavbar extends React.Component {
  render() {
    const StyledLink = (location, text) => {
      const selected = this.props.selected || '';
      return (
        <LinkStyles selected={selected === location ? 'true' : ''}>
          <Link to={`/home/${location}`}>{text}</Link>
        </LinkStyles>
      );
    };

    return (
      <Wrapper>
        {StyledLink('you', 'FOR YOU')}
        {StyledLink('homes', 'HOMES')}
        {StyledLink('experiences', 'EXPERIENCES')}
      </Wrapper>
    );
  }
}

SubNavbar.propTypes = {
  selected: PropTypes.string.isRequired,
};

export default SubNavbar;
