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
import Auth from './MoviePage/Auth';

const App = () => {
  return (
    
      <Router>
        <MainNavBar />
        <Switch>
          <main>
            <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <div>hi2</div>
        </Route>
        <Route path="/auth">
            <Auth />
        </Route>
            <Redirect to="/" />
            </main>    
        </Switch> 
      </Router>
  );
};

export default App;
