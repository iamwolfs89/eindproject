import './TopMenu.css';
import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {FaReadme , FaSearch, FaHome} from "react-icons/fa";
import {AuthContext} from "../../context/AuthContext";

function TopMenu() {

    const {auth} = useContext(AuthContext)

    return (
        <div className="nav-container">
            <ul className="nav-menu">
                <li>
                    <div className="fc-home-container">
                        <NavLink to="/" className={({ isActive }) => isActive? "active-link": "not-active"} end>
                            <FaHome/>
                            <h4>Home</h4>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="fc-search-container">
                        <NavLink to="/search" className={({isActive}) => isActive ? "active-link" : "not-active"}>
                            <FaSearch/>
                            <h4>Search</h4>
                        </NavLink>
                    </div>
                </li>
                {/*<li>*/}
                {/*    <div className="fc-recipe-container">*/}
                {/*        <NavLink to="/recipebook" className={({isActive}) => isActive ? "active-link" : "not-active"}>*/}
                {/*            <FaReadme/>*/}
                {/*            <h4>Recipebook</h4>*/}
                {/*        </NavLink>*/}
                {/*    </div>*/}
                {/*</li>*/}
            </ul>

            <ul className="profile-menu">
                <li>
                    <NavLink to="help" className={({ isActive }) => isActive? "active-link": "not-active"}>
                        <h6>Help</h6>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="login" className={({ isActive }) => isActive? "active-link": "not-active"}>
                        {!auth.isAuth ? <h6>Log-in</h6> : <h6>Log-out</h6>}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="signup" className={({ isActive }) => isActive? "active-link": "not-active"}>
                        <h6>Sign-up!</h6>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default TopMenu;