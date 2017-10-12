import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Landing from './components/layout/Landing';
import Home from './components/layout/Home';
import './App.css';

const HomeSection = ({ match }) => <Home section={(match) ? match.params.section : ''} />;

HomeSection.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      section: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/home/:section" component={Home} />
    </div>
  </BrowserRouter>
);


export default App;
