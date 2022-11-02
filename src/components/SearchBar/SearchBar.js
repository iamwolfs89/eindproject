import './SearchBar.css';
import axios from "axios";
import {useEffect, useState} from "react";
import {FaLeaf, FaSearch} from "react-icons/fa";
import {useForm} from "react-hook-form";
import RecipeCard from "../RecipeCard/RecipeCard";

// import VegaCheck from "../VegaCheck/VegaCheck";

function SearchBar() {
    const {handleSubmit, register, formState: {errors}} = useForm({
        mode: "onChange",
    });
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");
    const [vegetarian, toggleVegetarian] = useState(false)

    useEffect(() => {
        if (vegetarian === true) {
            async function getVegaRecipes() {
                try {
                    const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${process.env.REACT_APP_API_KEY2}&diet=vegetarian&number=8`);
                    setRecipes(result.data.results);
                    console.log("ik ben vegacheck!")
                } catch (e) {
                    console.error(e)
                    if (e.response.status === 402) {
                        alert("You've reached the daily quota")
                    }
                }
            }

            getVegaRecipes()
        } else {
            async function getData() {
                try {
                    let result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${process.env.REACT_APP_API_KEY3}&number=10`);
                    setRecipes(result.data.results);
                } catch (e) {
                    console.error(e)
                    if (e.response.status === 402) {
                        alert("You've reached the daily quota")
                    }
                }
            }

            getData()
        }
    }, [query, vegetarian]);

    function onFormSubmit(data) {
        console.log(data)
    }

    return (
        <>
            <div className="search-container">
                <div className="search-header">
                    <div className="title-container5">
                        <h3>Search here!</h3>
                    </div>
                    <form
                        onSubmit={handleSubmit(onFormSubmit)}
                        className="search-form"
                    >
                        <label htmlFor="search-bar" >
                            <FaSearch/>
                            <input
                                className="search-bar"
                                type="text"
                                {...register("search")}
                                value={query}
                                placeholder="Enter Recipe"
                                onChange={(event) => setQuery(event.target.value)}
                            />
                        </label>

                        <label className="checkbox-container">
                            <h6>Vegetarian</h6>
                            <FaLeaf/>
                            <input
                                type="checkbox"
                                checked={vegetarian}
                                onChange={() => toggleVegetarian(!vegetarian)}
                            />
                        </label>
                    </form>
                </div>
                <div className="search-result">
                    <ul className="recipe-list">
                        {recipes && recipes.map((recipe) => {
                            return (
                                <li key={recipe.id}>
                                    <RecipeCard

                                        recipe={recipe}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}


export default SearchBar;