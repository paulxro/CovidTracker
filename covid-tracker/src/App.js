import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Covid19 from './components/Map/Covid19';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// import SideDisplay from './components/Map/SideDisplay/SideDisplay';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Switch>
            <Route path = "/map" exact component = {Covid19}/>
            {/* <Route path = "/sidebar" exact component = {SideDisplay}/> */}
          </Switch>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
