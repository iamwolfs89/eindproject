import './HelpPage.css';
import React from 'react';
import HelpForm from "../../components/HelpForm/HelpForm";
import { motion } from "framer-motion";

function HelpPage() {
    return (
        <motion.div
            className="help-overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <HelpForm />
        </motion.div>
    );
};

export default HelpPage;