import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from './Button';
import './Navbar.css';
import { Link } from 'react-router-dom';


// main navbar class is declared with one method (handleClick) and one instance variable (state)

class Navbar extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked })
    } 

    // navbar html below

    render (){
        return(
            <nav className = "NavbarItems">
                <Link to="/"><h1 className = "navbar-logo">COVID-19 Live Tracker  <i className = "fas fa-lungs-virus"></i></h1></Link>
                <div className = "menu-icon" onClick={this.handleClick}>
                    <i className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                                <li key = {index}><Link to={item.url} className = {item.cName}>{item.title}</Link></li>
                        )
                    })}
                </ul>
                <Button><Link to="/map">View Map</Link></Button>
            </nav>
        )
    }
}

export default Navbar;