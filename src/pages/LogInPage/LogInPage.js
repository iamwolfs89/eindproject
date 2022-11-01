import './LogInPage.css';
import React from 'react';
import LogIn from "../../components/LogIn/LogIn";
import { motion } from "framer-motion";

function LogInPage() {
    return (
        <motion.div
            className="log-in-overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <LogIn />
        </motion.div>
    );
}

export default LogInPage;