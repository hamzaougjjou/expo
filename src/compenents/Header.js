
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class Header extends Component {
    render() {

        const activeLink = "active-link";
        const normalLink = "";
        let clss = ({ isActive }) => isActive ? activeLink : normalLink;
        
        return (
            <header className="App-header">

                <NavLink className={ clss } to="/">
                    <p className="main-link">Home</p>
                </NavLink>

                <NavLink className={ clss } to="/contact">
                    <p className="main-link">Contact Us</p>
                </NavLink>

                <NavLink className={ clss } to="/profile">
                    <p className="main-link">profile</p>
                </NavLink>

            </header>
        )
    }
}
