import './TopMenu.css';
import React from 'react';
import {NavLink, Link} from "react-router-dom";
import { FcReading, FcSearch, FcHome } from "react-icons/fc";

function TopMenu() {
    return (
        <div className="nav-container">
            <ul className="nav-menu">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive? "active-link": ''}>
                        <FcHome className="FcHome"/>
                        <h4>Home</h4>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Searchpage" className={({ isActive }) => isActive? "active-link": ''}>
                        <FcSearch/>
                        <h4>Search</h4>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Recipebook" className={({ isActive }) => isActive? "active-link": ''}>
                        <FcReading/>
                        <h4>Recipebook</h4>
                    </NavLink>
                </li>
            </ul>

            <ul className="profile-menu">
                <li>
                    <Link to="help">
                        <h6>Help</h6>
                    </Link>
                </li>
                <li>
                    <Link to="login">
                        <h6>Log-in</h6>
                    </Link>
                </li>
                <li>
                    <Link to="singup">
                        <h6>Sign-up!</h6>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default TopMenu;