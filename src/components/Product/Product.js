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
            console.log(result.data)

        } catch (e) {
            console.error(e)
        }
    }

    fetchData()
    }, [id])

    return (
        <div className="product-page-overview">
            <div className="product-container">
                <div className="title-container2">
                    <h3>{apiData.title}</h3>
                </div>
                <div className="product-recipe">
                    <img id="product-img" src={apiData.image} alt={apiData.title}/>
                    <p id="ready">Ready in {apiData.readyInMinutes} minutes!</p>
                    {/*<ul>{apiData.extendedIngredients}</ul>*/}
                    <div id="instructions">{apiData.instructions}</div>
                </div>
            </div>
        </div>
    );
}

export default Product;