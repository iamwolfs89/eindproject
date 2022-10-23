import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import {BrowserRouter} from "react-router-dom";
import AuthContextF from "./context/AuthContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <AuthContextF>
                <App/>
            </AuthContextF>
        </React.StrictMode>
    </BrowserRouter>
);
