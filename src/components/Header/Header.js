import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <nav>
            <NavLink
                to="/home"
                activeStyle={activeStyle}
            >
                Home
            </NavLink>
            <NavLink
                to="/friends"
                activeStyle={activeStyle}
            >
                Friends
            </NavLink>
            <NavLink
                to="/about"
                activeStyle={activeStyle}
            >
                About
            </NavLink>
            <NavLink
                to="/about/culture"
                activeStyle={activeStyle}
            >
                Culture
            </NavLink>
        </nav>
    );
};

export default Header;