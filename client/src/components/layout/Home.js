import React from 'react';
import { Route } from 'react-router-dom';
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
          <SubNavbar selected={this.props.section}/>
        </Header>
         <Route path={`${baseUrl}you`} component={ForYou} />
        <Main>
            <Slider />  
        </Main>
      </div>
    );
  }
}

export default Home;

