import './LogInPage.css';
import React from 'react';
import LogIn from "../../components/LogIn/LogIn";
import { motion } from "framer-motion";

function LogInPage() {
    return (
        <motion.div
            className="log-in-overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <LogIn />
        </motion.div>
    );
}

export default LogInPage;