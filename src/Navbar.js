import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/drinks">
                Drinks
            </NavLink>
            <NavLink exact to="/chips">
                Chips
            </NavLink>
            <NavLink exact to="/chocolates">
                Chocolates
            </NavLink>
        </nav>
    );
};

export default Navbar;
