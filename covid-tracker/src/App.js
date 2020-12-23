import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path = "/map.html" exact component = {Map}/>
      </Switch>
    </Router>
  );
}

export default App;
