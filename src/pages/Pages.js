import './Pages.css';
import Home from "./Home/Home";
import SearchPage from "./SearchPage/SearchPage";
import ProductPage from "./ProductPage/ProductPage";
import RecipeBook from "./RecipeBook/RecipeBook";
import React from 'react';
import { Route, Routes} from "react-router-dom";

function Pages() {

    return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/SearchPage" element={<SearchPage />} />
                    <Route path="/RecipeBook" element={<RecipeBook />} />
                    <Route path="/ProductsPage/:id" element={<ProductPage />} />

                </Routes>
            </>
    );
}

export default Pages;