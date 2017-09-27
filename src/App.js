import React, { Component } from 'react';
import Carousel from './components/Carousel/Carousel';
// import logo from './logo.svg';
import './App.css';
// import { Home } from './layout/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}

export default App;
