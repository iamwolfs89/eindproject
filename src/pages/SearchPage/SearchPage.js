import './SearchPage.css';
import React from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import { motion } from "framer-motion";

function SearchPage() {
    return (
        <motion.div
            className="search-page-overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <SearchBar/>
        </motion.div>
    );
}

export default SearchPage;