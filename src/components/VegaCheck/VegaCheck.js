import './VegaCheck.css';
// import React, {useEffect} from 'react';
// import axios from "axios";
import {FaLeaf} from "react-icons/fa";
// import {useState} from "@types/react";


function VegaCheck({vegetarian, toggleVegetarian}) {

    return (
        <div>
            <h6>Vegetarian</h6>
            <FaLeaf/>
            <input
                type="checkbox"
                checked={vegetarian}
                onChange={() => toggleVegetarian(!vegetarian)}
            />
        </div>
    );
}

export default VegaCheck;