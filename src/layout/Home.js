import React from 'react';
import NavComponent from '../Navbar/navbar'

class Home extends React.Component {
  
  render() {
    return (
      <div>
        <h1> The start of our app </h1>
        <h2>This is the end of our app</h2>
        <NavComponent/>
      </div>
    )
  }
};

export { Home };



