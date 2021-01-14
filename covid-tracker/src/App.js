import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Covid19 from './components/Map/Covid19';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
    <Router>
      <Navbar/>
      <Switch>
        <Route path = "/map" exact component = {Covid19}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
