import React from 'react';

import MainNavBar from './Navigation/MainNavbar';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from './MoviePage/Home';
import CardList from './UIElements/CardList';

const App = () => {
  return (
    
      <Router>
        <MainNavBar />
        
        <Switch>

            <Route path="/" exact>
              <div>hi</div>
            <Home />
            
          </Route>
          <Route path="/search" exact>
            <div>hi2</div>
          </Route>
            <Redirect to="/" />
            
        </Switch> 
      </Router>
  );
};

export default App;
