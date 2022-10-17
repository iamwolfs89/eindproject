import './ProductPage.css';
import React from 'react';
import {useParams} from "react-router-dom";
import Product from "../../components/Product/Product";

function ProductPage() {
    let { id } = useParams();
    return (
        <Product />
    );
}

export default ProductPage;