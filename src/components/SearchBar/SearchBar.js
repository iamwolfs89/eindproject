import './SearchBar.css';
import axios from "axios";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {FcSearch} from "react-icons/fc";
import {FaLeaf, FaDrumstickBite} from "react-icons/fa";
import {useForm} from "react-hook-form";

function SearchBar() {
    const {handleSubmit, register, formState: {errors}} = useForm({
        mode: "onChange",
    });
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");
    const [vegetarian, toggleVegetarian] = useState(false)
    const [carnivoor, toggleCarnivoor] = useState(false)

    useEffect(() => {

        async function getData() {

            const apiKey = '31cd2d3fe3fb404dbb1113df8af265fc';

            try {
                let result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&number10`)
                // console.log(result);
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
                    <button
                        type="submit"
                    >
                        <FcSearch/>
                    </button>
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
                    <FaDrumstickBite />
                    <input
                        type="checkbox"
                        checked={carnivoor}
                        onChange={() => toggleCarnivoor(!carnivoor)}
                    />
                </label>

            </form>

            <div className="search-result">
                {recipes && recipes.map((recipe) => {
                    console.log(recipe)

                    return (
                        <div>
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