import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavComponent from '../presentational/Navbar/Navbar';
import SubNavbar from '../presentational/SubNavbar/SubNavbar';
import ForYou from './ForYou';
import Homes from './Homes';
import Experiences from './Experiences';
import {
  HomeHeader,
} from './styles';

class Home extends React.Component {
  render() {
    const fullPath = this.props.match.url;
    const section = this.props.match.params.section;
    const re = new RegExp(`^/([a-z]*/)*(?=${section}$)`, 'i');
    const baseUrl = fullPath.match(re)[0];

    return (
      <div>
        <HomeHeader>
          <NavComponent />
          <SubNavbar selected={section} />
        </HomeHeader>
        <Route path={`${baseUrl}you`} component={ForYou} />
        <Route path={`${baseUrl}homes`} component={Homes} />
        <Route path={`${baseUrl}experiences`} component={Experiences} />
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

