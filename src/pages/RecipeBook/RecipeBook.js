import './RecipeBook.css';
import React from 'react';
import { motion } from "framer-motion";

function RecipeBook() {
    return (
        <motion.div
            className="recipebook-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
        <h3>
            RecipeBook
        </h3>
        <h4>
            Under construction
        </h4>
        </motion.div>
    );
}

export default RecipeBook;