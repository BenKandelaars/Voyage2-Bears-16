import React from 'react';
import { 
  BrowserRouter, 
  Route, 
  Link 
} from 'react-router-dom';
import Landing from './components/layout/Landing';
import Home from './components/layout/Home';

const HomeSection = ({ match }) => <Home section={(match) ? match.params.section : ''} />

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/home/:section">
        {HomeSection}
      </Route>
    </div>
  </BrowserRouter>
);


export default App;
