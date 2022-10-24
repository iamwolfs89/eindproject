import './Home.css';
import VegaPicks from "../../components/VegaPicks/VegaPicks";
import React from 'react';
import SignUp from "../../components/SignUp/SignUp";

function Home() {
    return (
        <span className="home-overview">
            <VegaPicks/>
            <SignUp/>
        </span>
    );
}

export default Home;