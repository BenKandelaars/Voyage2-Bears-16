import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Landing from './components/layout/Landing';
import Home from './components/layout/Home';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/home/:section" component={Home} />
    </div>
  </BrowserRouter>
);


export default App;
