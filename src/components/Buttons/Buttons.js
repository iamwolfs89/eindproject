import './Buttons.css';
import React from 'react';

function Buttons(props) {
    return (
        <div className="button-container">
            <button
                type="submit"
                id="button"
            >
                {props.buttonText}
            </button>
        </div>
    );
};

export default Buttons;