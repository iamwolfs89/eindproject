import './TopMenu.css';
import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import { FcReading, FcSearch, FcHome } from "react-icons/fc";
import {AuthContext} from "../../context/AuthContext";

function TopMenu() {

    const {auth} = useContext(AuthContext)

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
                    <NavLink to="/search" className={({ isActive }) => isActive? "active-link": ''}>
                        <FcSearch/>
                        <h4>Search</h4>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/recipebook" className={({ isActive }) => isActive? "active-link": ''}>
                        <FcReading/>
                        <h4>Recipebook</h4>
                    </NavLink>
                </li>
            </ul>

            <ul className="profile-menu">
                <li>
                    <NavLink to="help">
                        <h6>Help</h6>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="login">
                        {!auth.isAuth ? <h6>Log-in</h6> : <h6>Log-out</h6>}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="signup">
                        <h6>Sign-up!</h6>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default TopMenu;