import './SearchBar.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
// import RecipeCard from "../RecipeCard/RecipeCard";
import {FcSearch} from "react-icons/fc";
import Alert from "../../pages/SearchPage/Alert";
import styled from "styled-components";


function SearchBar() {
    const [alert, setAlert] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {

        getData()
    }, [ ]);
    async function getData() {

        if (query !== "") {

            const apiKey = '31cd2d3fe3fb404dbb1113df8af265fc';

            try {
                let result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&number10`)

                if (!result.data.results) {
                    return setAlert("No recipe found with such name");
                }
                // console.log(result);
                setRecipes(result.data.results);
                setQuery("");
                setAlert("");
            } catch (e) {
                console.error(e)
                console.log(e.response)
            }
        } else {
            setAlert("enter a recipe");
        }
    }


    const onChange = e => setQuery(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
    };

    return (<div className="search-container">
            <form onSubmit={onSubmit}
                  className="search-form">
                {alert !== "" && <Alert alert={alert}/>}
                <input
                    type="text"
                    name="query"
                    onChange={onChange}
                    value={query}
                    autoComplete="off"
                    placeholder="Search Food"
                />
                <button type="submit">
                    <FcSearch/>
                </button>
            </form>
            <div className="search-result">
                {recipes !== [] && recipes.map((recipe) => {
                    console.log(recipe)

                    return (<div>
                            <Card key={recipe.id}>
                                <Link to="Products/:id"><p>{recipe.title}</p></Link>
                                <img src={recipe.image} alt={recipe.title}/>
                                <Gradient/>
                            </Card>
                        </div>)
                })}
            </div>
        </div>);
}

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

export default SearchBar;