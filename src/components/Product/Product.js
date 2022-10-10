import './Product.css';
import React from 'react';
import {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function Product() {

    const {id} = useParams();
    const [apiData, SetApiData] = useState("")

async function fetchData() {

        const apiKey = '31cd2d3fe3fb404dbb1113df8af265fc';

        try {
            const result = await axios.get(`https://api.spoonacular.com/recipes/visualizeRecipe&query{id}&apiKey=${apiKey}`)

            SetApiData(result.data.recipes)
            console.log(result.data.recipes)

        } catch (e) {
            console.error(e)
        }
    }

fetchData()

    return (
        <div>
            <h2>{apiData.title}</h2>
            <ul>{apiData.ingredients}</ul>
            <p>Ready in {apiData.readyInMinutes} !</p>
            <ol>{apiData.instructions}</ol>

        </div>
    );
}

export default Product;