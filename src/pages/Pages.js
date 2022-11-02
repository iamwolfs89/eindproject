import Home from "./Home/Home";
import SearchPage from "./SearchPage/SearchPage";
// import RecipeBook from "./RecipeBook/RecipeBook";
import Product from "../components/Product/Product";
import LogInPage from "./LogInPage/LogInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import HelpPage from "./HelpPage/HelpPage";
import React, {useContext} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {AnimatePresence} from "framer-motion";


function Pages() {
    const {auth} = useContext(AuthContext)
    const location = useLocation();

    return (
        <>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    {/*<Route path="/recipebook" element={auth.isAuth ? <RecipeBook/> : <LogInPage/>}/>*/}
                    <Route path="/product/:id" element={auth.isAuth ? <Product/> : <LogInPage/>}/>
                    <Route path="/login" element={<LogInPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/Help" element={<HelpPage/>}/>
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default Pages;