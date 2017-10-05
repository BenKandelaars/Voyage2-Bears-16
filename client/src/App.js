import React from 'react';
import { 
  BrowserRouter, 
  Route, 
  Link 
} from 'react-router-dom';
import Landing from './components/layout/Landing';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Landing} />
    {/* <Route path="/home" component={home} /> */}
  </BrowserRouter>
);

export default App;
