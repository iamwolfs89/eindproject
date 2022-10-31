import './RecipeCard.css';
import styled from "styled-components";
import {Link} from "react-router-dom";

function RecipeCard( {recipe} ) {

    return(
            <div id="card" key={recipe.id}>
                <Link to={`/product/${recipe.id}`}><p id="recipe-title">{recipe.title}</p></Link>
                <img id="card-img" src={recipe.image} alt={recipe.title}/>
                <Gradient/>
            </div>
    )

}

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default RecipeCard;