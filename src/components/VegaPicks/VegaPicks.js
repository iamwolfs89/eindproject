import './VegaPicks.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import RecipeCard from "../RecipeCard/RecipeCard";


function VegaPicks() {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {

        async function getVega() {

            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY1}&number=10&tags=vegetarian`)

                setApiData(response.data.recipes)
                console.log("ik ben vegapicks!")

            } catch (e) {
                console.error(e);
            }
        }

        getVega();
    }, []);

    return (
        <div className="vega-picks-container">
            <div className="vega-picks">
                <div className="title-container">
                    <h3 id="vega-picks-title">Vegetarian recipes</h3>
                </div>
                <div className="vega-wrapper">
                    <Splide className="vega-splide" options={{
                        direction: 'ttb',
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        flickMaxPages: 1,
                        interval: 5000,
                        start: 0,
                        perPage: 2,
                        perMove: 1,
                        autoplay: true,
                        pauseOnHover: true,
                        gap: '2px',
                        height: 500,
                        width: 200,
                        rewind: true,
                        rewindSpeed: 10000,
                        speed: 10000,

                    }}>
                        {apiData && apiData.map((recipe) => {
                            console.log(recipe)
                            return (<SplideSlide>
                                <RecipeCard
                                    recipe={recipe}
                                />
                            </SplideSlide>)
                        })}
                    </Splide>
                </div>
            </div>
        </div>
    );
}

export default VegaPicks;