import './ProductPage.css';
import React from 'react';
import {useParams} from "react-router-dom";

function ProductPage() {
    let { id } = useParams();
    return (
        <div>
            Het recept is {id}!
        </div>
    );
}

export default ProductPage;