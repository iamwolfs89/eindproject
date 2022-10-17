import './Pages.css';
import Home from "./Home/Home";
import SearchPage from "./SearchPage/SearchPage";
import RecipeBook from "./RecipeBook/RecipeBook";
import Product from "../components/Product/Product";
import LogInPage from "./LogInPage/LogInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import HelpPage from "./HelpPage/HelpPage";
import React from 'react';
import { Route, Routes} from "react-router-dom";

function Pages() {

    return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/recipebook" element={<RecipeBook />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/login" element={<LogInPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/Help" element={<HelpPage />} />
                </Routes>
            </>
    );
}

export default Pages;