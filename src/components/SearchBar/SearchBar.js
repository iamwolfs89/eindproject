import './SearchBar.css';
import axios from "axios";
import {useEffect, useState} from "react";
import {FaLeaf, FaDrumstickBite, FaSearch} from "react-icons/fa";
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
    // const [meatLover, toggleMeatLover] = useState(false)

    useEffect(() => {
        async function getData() {
            try {
                let result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${process.env.REACT_APP_API_KEY3}&number1`)
                setRecipes(result.data.results);
            } catch (e) {
                console.error(e)
                console.log(e.response)
            }
        }

        getData()
    }, [query]);

    function onFormSubmit(data) {
    }

    console.log('ERRORS', errors)
    return (
        <>
            <div className="search-container">
                <div className="title-container5">
                    <h3>Search here!</h3>
                </div>
                <form
                    onSubmit={handleSubmit(onFormSubmit)}
                    className="search-form"
                >
                    <label htmlFor="search-bar">
                    <input
                        type="text"
                        {...register("search-details", {
                            required: "a recipe name is required",
                            maxLength: {
                                value: 30,
                                message: "specify your search"
                            },
                            minLength: {
                                value: 3,
                                message: "use at least 3 characters"
                            }
                        })}
                        value={query}
                        placeholder="Enter Recipe"
                        onChange={(event) => setQuery(event.target.value)}
                    />
                        <FaSearch/>
                    </label>

                    {errors.name && <p>{errors.name.message}</p>}
                    {/*<label className="button-label">*/}
                    {/*    */}
                    {/*</label>*/}
                    <label className="checkbox-container">
                        <h6>Vegetarian</h6>
                        <FaLeaf/>
                        <input
                            type="checkbox"
                            checked={vegetarian}
                            onChange={() => toggleVegetarian(!vegetarian)}
                        />

                        {/*<VegaCheck />*/}

                        {/*<h6>Meatlover</h6>*/}
                        {/*<FaDrumstickBite/>*/}
                        {/*<input*/}
                        {/*    type="checkbox"*/}
                        {/*    checked={meatLover}*/}
                        {/*    onChange={() => toggleMeatLover(!meatLover)}*/}
                        {/*/>*/}
                    </label>

                </form>
                <div className="search-result">
                    {recipes && recipes.map((recipe) => {
                        console.log(recipe)
                        return (
                            <li className="recipe-card">
                                <RecipeCard
                                    recipe={recipe}
                                />
                            </li>
                        )
                    })}
                </div>
            </div>
        </>
    );
}


export default SearchBar;