import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Covid19 from './components/Map/Covid19';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Database from './components/Database/Database';
import Home from './components/LandingPage/Home';
// import SideDisplay from './components/Map/SideDisplay/SideDisplay';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path = "/map" component = {Covid19}/>
            <Route exact path = "/database" component = {Database}/>
            <Route exact path = "" component = {Home}/>
            {/* <Route path = "/sidebar" exact component = {SideDisplay}/> */}
          </Switch>
        {/* <Footer /> */}
      </Router>
    </div>

  );
}

export default App;
