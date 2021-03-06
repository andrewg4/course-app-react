import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import "../index.css";

class Header extends Component {
    render() {
        return(
            <nav>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                {" | "}
                <NavLink to="/about" activeClassName="active">About</NavLink>
                {" | "}
                <NavLink to="/courses" activeClassName="active">Courses</NavLink>
            </nav>
        );
    }
}

export default Header;