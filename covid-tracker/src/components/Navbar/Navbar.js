import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from './Button';
import './Navbar.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

class Navbar extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked })
    }

    render (){
        return(
            <nav className = "NavbarItems">
                <h1 className = "navbar-logo">COVID-19 Live Tracker  <i className = "fas fa-lungs-virus"></i></h1>
                <div className = "menu-icon" onClick={this.handleClick}>
                    <i className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>


                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            //<li key = { index }> <a className = { item.cName } href = { item.url }> { item.title } </a> </li>
                                <li key = {index}><Link to={item.url} className = {item.cName}>{item.title}</Link></li>
                        )
                    })}
                </ul>
                <Button><Link to="/map.html">View Map</Link></Button>
            </nav>
        )
    }
}

export default Navbar;