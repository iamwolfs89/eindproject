import axios from "axios";
import styled from "styled-components";
import './App.css';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function RecipeCard() {
    const [recipes, setRecipes] = useState("");

    useEffect(() => {
        async function getData(){

            const apiKey = '31cd2d3fe3fb404dbb1113df8af265fc';

            try{
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}&number10`);
                console.log(result.data)
                setRecipes(result.data)
            } catch (e) {
                console.error(e)
                console.log(e.response)
            }
        }
        getData()
    }, []);

    return(
        <div className="recipe-card">

            <Card key={recipes.id}>
                {/*<Link to="Products/:id"><p>{recipes.title}</p></Link>*/}
                <img src={recipes.image} alt={recipes.title}/>
                <Gradient/>
            </Card>

        </div>
    )

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

export default RecipeCard;