import React, {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

function AuthContextF({ children }) {
    const [auth, toggleAuth] = useState({
        isAuth: false,
        username: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decodedToken = jwtDecode(token)
            getUserData(token, decodedToken)
            console.log(decodedToken);

        } else {
            console.log("geen token")
            toggleAuth({
                ...auth,
                status: 'done',
            });
        }
    }, []);

    async function getUserData(token, decodedToken) {
        try {
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });

            console.log(response)

            toggleAuth({
                ...auth,
                isAuth: true,
                username: decodedToken.sub,
                status: 'done',
            })

        } catch (e) {
            console.error(e)
            localStorage.clear();
            toggleAuth({
                ...auth,
                status: 'done',
            });
        }
    }

    const navigate = useNavigate()

    function login(token, user) {
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token)

        toggleAuth({
            ...auth,
            isAuth: true,
            username: decodedToken.sub,
        });
        console.log("we're in!");
        navigate("/search");
    }


    function logout() {
        toggleAuth({
            ...auth,
            isAuth: false,
            username: null,
        });
        localStorage.clear();
        console.log("we're out!");
    }

    const contextData = {
        auth: auth,
        authFunction: toggleAuth,
        loginFunction: login,
        logoutFunction: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>a moment please...</p> }
        </AuthContext.Provider>
    )
}

export default AuthContextF