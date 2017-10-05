import React from 'react';
import Nav from '../presentational/Navbar/Navbar';
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
          <Nav />
          <SubNavbar selected={this.props.section}/>
        </Header>
        <Main>
          
        </Main>
      </div>
    );
  }
}

export default Home;

