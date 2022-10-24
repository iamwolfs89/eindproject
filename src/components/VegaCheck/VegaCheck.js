import './VegaCheck.css';
import React, {useEffect} from 'react';
import axios from "axios";
import {FaLeaf} from "react-icons/fa";
import {useState} from "@types/react";


function VegaCheck() {
    const [vegetarian, toggleVegetarian] = useState(false)

    useEffect(() => {

        if (vegetarian === true) {
            async function getVegaRecipes() {
                try {
                    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY2}&diet=vegetarian`);
                    console.log(response)
                } catch (e) {
                    console.error(e)
                }
            }

            getVegaRecipes()
        } else {
        }

    }, [vegetarian])

    return (
        <div>
            <h6>Vegetarian</h6>
            <FaLeaf/>
            <input
                type="checkbox"
                checked={vegetarian}
                onChange={() => toggleVegetarian(!vegetarian)}
            />
        </div>
    );
}

export default VegaCheck;