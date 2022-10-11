import './RecipeCard.css'
import styled from "styled-components";
import {Link} from "react-router-dom";
// import {useEffect, useState} from "react";
// import axios from "axios";

function RecipeCard( {recipe} ) {
    // const [recipes, setRecipes] = useState("");
    //
    // useEffect(() => {
    //     async function getData(){
    //
    //         const apiKey = '60baf28a5fae40c1b3855f935798447b';
    //
    //         try{
    //             const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}&number2`);
    //             console.log(result.data)
    //             setRecipes(result.data)
    //         } catch (e) {
    //             console.error(e)
    //             console.log(e.response)
    //         }
    //     }
    //     getData()
    // }, []);

    return(
        <div className="recipe-card">
            <Card key={recipe.id}>
                <Link to="ProductsPage/:id"><p>{recipe.title}</p></Link>
                <img src={recipe.image} alt={recipe.title}/>
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