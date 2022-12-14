import './Product.css';
import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Product() {

    const {id} = useParams();

    const [apiData, SetApiData] = useState({})
    const [activeButton, setActiveButton] = useState('ingredients')

    useEffect(() => {

        async function fetchData() {

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&number=1&apiKey=${process.env.REACT_APP_API_KEY3}`)

                SetApiData(result.data)

            } catch (e) {
                console.error(e)
                if (e.response.status === 402) {
                    alert("You've reached the daily quota")
                }
            }
        }

        fetchData()
    }, [id])

    return (
        <motion.div
            className="product-page-overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="product-container">
                <div className="title-container2">
                    <h3>{apiData.title}</h3>
                    <img id="product-img" src={apiData.image} alt={apiData.title}/>
                    <p id="ready">Ready in {apiData.readyInMinutes} minutes!</p>
                </div>
                <div className="product-recipe">
                    <div className="button-container">
                        <button
                            className={!activeButton ? 'active' : ''}
                            onClick={() => setActiveButton('ingredients')}
                        >
                            Ingredients
                        </button>
                        <button
                            className={!activeButton ? 'active' : 'passive'}
                            onClick={() => setActiveButton('instructions')}
                        >
                            Instructions
                        </button>
                    </div>
                    {activeButton === 'instructions' && (
                        <div id="instructions">
                            <p dangerouslySetInnerHTML={{__html: apiData.instructions}}></p>
                        </div>
                    )}
                    {activeButton === 'ingredients' && (
                        <div id="ingredients">
                            <ul>
                                {Object.keys(apiData).length > 0 && apiData.extendedIngredients.map((ingredient) => {

                                    return (
                                        <li key={ingredient.id}>
                                            {ingredient.original}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default Product;