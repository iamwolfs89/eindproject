import './SignUpPage.css';
import React from 'react';
import SignUp from "../../components/SignUp/SignUp";
import { motion } from "framer-motion";

function SignUpPage() {
    return (
        <motion.div
            className="sign-up-overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <SignUp />
        </motion.div>
    );
}

export default SignUpPage;