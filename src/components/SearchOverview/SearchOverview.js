import './SearchOverview.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from "styled-components";


function SearchOverview() {

    const [apiData, setApiData] = useState('');
    const [error, SetError] = useState('');

    useEffect(() => {
        getRecipes();
        }, []);

        async function getRecipes() {
            SetError(" ");

            const apiKey = '31cd2d3fe3fb404dbb1113df8af265fc';

            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=4&tags=vegetarian&random`)

                setApiData(response.data.results)

            } catch (e) {
                console.error(e);
                console.log(e.response);
                SetError(e.response.status)
            }
        }
    // return (
    //     <div className="search-overview">
    //         <ul>
    //         {apiData && apiData.map((item) => {
    //             console.log(item)
    //             return(
    //                 <li>
    //                 <Card key={item.id}>
    //                     <p>{item.title}</p>
    //                     <img src={item.image} alt={item.title}/>
    //                     <Gradient />
    //                 </Card>
    //                 </li>
    //             )
    //         })}
    //         </ul>
    //     </div>
    // );
}

const Card = styled.div`
  min-height: 12rem;
  max-height: 15rem;
  max-width: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  
  img{
    border-radius: 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    
  }
  p{
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

const Gradient =styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default SearchOverview;

