import './Checkbox.css';
import React from 'react';

function Checkbox(props) {
    return (
        <label className="checkbox-container">
            <h6>{props.title}</h6>
            {props.icon}
            <input
                type="checkbox"
                checked={props.diet}
                onChange={() => props.toggle(!props.diet)}
            />
        </label>
    );
};

export default Checkbox;