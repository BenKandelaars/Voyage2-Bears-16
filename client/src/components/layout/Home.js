import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavComponent from '../presentational/Navbar/Navbar';
import SubNavbar from '../presentational/SubNavbar/SubNavbar';
import Slider from '../presentational/Slider/Slider';
import ForYou from './ForYou';
import {
  Header,
  Main,
} from './home_styles';

class Home extends React.Component {
  render() {
    const fullPath = this.props.match.url;
    const section = this.props.match.params.section;
    const re = new RegExp(`^/([a-z]*/)*(?=${section}$)`, 'i');
    const baseUrl = fullPath.match(re)[0];

    return (
      <div>
        <Header>
          <NavComponent />
          <SubNavbar selected={section} />
        </Header>
        <Route path={`${baseUrl}you`} component={ForYou} />
        <Main>
          <Slider />
        </Main>
      </div>
    );
  }
}

Home.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      section: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Home;

