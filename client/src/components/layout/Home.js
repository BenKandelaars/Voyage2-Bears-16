import React from 'react';
import NavComponent from '../presentational/Navbar/Navbar';
import SubNavbar from '../presentational/SubNavbar/SubNavbar';
import {
  Header,
  Main,
} from './home_styles';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <NavComponent />
          <SubNavbar selected={this.props.section}/>
        </Header>
        <Main>
          
        </Main>
      </div>
    );
  }
}

export default Home;

