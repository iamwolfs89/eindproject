import './SearchBar.css';
import axios from "axios";
import {useEffect, useState} from "react";
import {FcSearch} from "react-icons/fc";
import {FaLeaf, FaDrumstickBite} from "react-icons/fa";
import {useForm} from "react-hook-form";
import RecipeCard from "../RecipeCard/RecipeCard";

function SearchBar() {
    const {handleSubmit, register, formState: {errors}} = useForm({
        mode: "onChange",
    });
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");
    const [vegetarian, toggleVegetarian] = useState(false)
    const [meatLover, toggleMeatLover] = useState(false)

    useEffect(() => {
        async function getData() {
            const apiKey = '60baf28a5fae40c1b3855f935798447b';
            try {
                let result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&number2`)
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
        <div className="search-container">
            <form
                onSubmit={handleSubmit(onFormSubmit)}
                className="search-form"
            >
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
                    placeholder="Search Recipe"
                    onChange={(event) => setQuery(event.target.value)}
                />

                {errors.name && <p>{errors.name.message}</p>}
                <label className="button-label">
                    <FcSearch
                        role="button"
                        tabIndex="0"
                    />
                </label>
                <label className="checkbox-label">
                    <h6>Vegetarian</h6>
                    <FaLeaf/>
                    <input
                        type="checkbox"
                        checked={vegetarian}
                        onChange={() => toggleVegetarian(!vegetarian)}
                    />

                    <h6>Carnivoor</h6>
                    <FaDrumstickBite/>
                    <input
                        type="checkbox"
                        checked={meatLover}
                        onChange={() => toggleMeatLover(!meatLover)}
                    />
                </label>

            </form>
            <div className="search-result">
                {recipes && recipes.map((recipe) => {
                    console.log(recipe)
                    return (
                        <li>
                            <RecipeCard
                                recipe={recipe}
                            />
                        </li>
                    )
                })}
            </div>
        </div>);
}


export default SearchBar;