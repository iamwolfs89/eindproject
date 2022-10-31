import './Home.css';
import VegaPicks from "../../components/VegaPicks/VegaPicks";
import React from 'react';
import SignUp from "../../components/SignUp/SignUp";
import { motion } from "framer-motion";

function Home() {
    return (
        <motion.div
            className="home-overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <VegaPicks/>
            <SignUp/>
        </motion.div>
    );
}

export default Home;