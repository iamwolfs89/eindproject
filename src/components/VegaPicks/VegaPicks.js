import styled from "styled-components";
import './VegaPicks.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";


function VegaPicks() {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {

    async function getVega() {

        const apiKey = '31cd2d3fe3fb404dbb1113df8af265fc';

        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=4&tags=vegetarian`)

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
                                <Card key={recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}/>
                                    <Gradient/>
                                </Card>
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

const Card = styled.div`
  min-height: 12rem;
  max-height: 15rem;
  max-width: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;

  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 10px;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default VegaPicks;