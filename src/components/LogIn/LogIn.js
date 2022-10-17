import './LogIn.css';
import React from 'react';
import {useNavigate} from "react-router-dom";

function LogIn() {
    const navigate = useNavigate();

    function handleClick(){
        navigate("/search")
    }

    return (
        <div>

            <button onClick={handleClick}
                    type="button">
                Log in!
            </button>
        </div>
    );
}

export default LogIn;