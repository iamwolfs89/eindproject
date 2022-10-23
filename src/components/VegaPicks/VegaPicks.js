import styled from "styled-components";
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

        } catch (e) {
            console.error(e);
        }
    }
        getVega();
    }, []);

    return (
        <div className="Vega-picks">
            <Wrapper>
                <h3>Vegetarian recipes</h3>
                <Splide options={{
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
                        return (
                            <SplideSlide>
                                <RecipeCard
                                    recipe={recipe}
                                />
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}


const Wrapper = styled.div`
  margin: 2rem;
`;

export default VegaPicks;