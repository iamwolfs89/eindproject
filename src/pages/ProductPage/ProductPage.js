import React from 'react';
import {useParams} from "react-router-dom";
import Product from "../../components/Product/Product";
import { motion } from "framer-motion";

function ProductPage() {
    let {id} = useParams();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Product/>
        </motion.div>
    );
}

export default ProductPage;