import React from 'react';
import Nav from '../presentational/Navbar/Navbar';
import HomeNavbar from '../presentational/HomeNavbar/HomeNavbar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <HomeNavbar />
        <p>Section: {this.props.section}</p>
      </div>
    );
  }
}

export default Home;

