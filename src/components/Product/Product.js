import './Product.css';
import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


function Product() {

    const {id} = useParams();

    const [apiData, SetApiData] = useState("")

    useEffect(() => {

    async function fetchData() {

        try {
            const result = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&number=1&apiKey=${process.env.REACT_APP_API_KEY3}`)

            SetApiData(result.data)
            console.log("ik ben product!")

        } catch (e) {
            console.error(e)
        }
    }

    fetchData()
    }, [id])

    return (
        <div>
            <h2>{apiData.title}</h2>
            <img src={apiData.image} alt={apiData.title}/>
            {/*/!*<ul>{apiData.extendedIngredients}</ul>*!/*/}
            {/*<p>Ready in {apiData.readyInMinutes} !</p>*/}
            {/*<ol>{apiData.instructions}</ol>*/}
        </div>
    );
}

export default Product;