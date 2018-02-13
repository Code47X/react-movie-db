import React, { Component } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import banner from './banner.svg';
import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <Banner src={banner} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;

const Banner = styled.img`
  height: 200px;
`;
