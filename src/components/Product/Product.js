import './Product.css';
import React from 'react';
import {useParams} from "react-router-dom";
// import {useState} from "react";
// import axios from "axios";


function Product( ) {

const {id} = useParams();

    // const [apiData, SetApiData] = useState("")

// async function fetchData({id}) {
//
//         try {
//             const result = await axios.get(`https://api.spoonacular.com/recipes/query={id}/information&apiKey=${process.env.REACT_APP_API_KEY3}`)
//
//             SetApiData(result.data.recipes)
//             console.log(result.data.recipes)
//
//         } catch (e) {
//             console.error(e)
//         }
//     }
//
// fetchData()

    return (
        <div>
            <h2>{id.title}</h2>
            <ul>{id.ingredients}</ul>
            <p>Ready in {id.readyInMinutes} !</p>
            <ol>{id.instructions}</ol>
        </div>
    );
}

export default Product;