import './Home.css';
import VegaPicks from "../../components/VegaPicks/VegaPicks";
import React from 'react';
import SignUp from "../../components/SignUp/SignUp";

function Home() {
    return (
        <div className="home-overview">
            <VegaPicks/>
            <SignUp/>
        </div>
    );
}

export default Home;