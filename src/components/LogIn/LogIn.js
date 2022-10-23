import './LogIn.css';
import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function LogIn() {
    const {register, handleSubmit} = useForm();
    const {loginFunction} = useContext(AuthContext)

    async function onFormSubmit(data) {
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`
                , {
                username: data.username,
                password: data.password,
            });
            loginFunction(response.data.accessToken, data.username)

        } catch (e) {
            console.error(e);
            if (e.response.status === 401) {
                alert("password or username doesn't match.")
            }

        }
    }
    return (
        <>
            <div className="inner-container">

                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <fieldset>
                        <legend>Log in!</legend>
                        <label htmlFor="username">
                            Username:
                            <input
                                type="text"
                                id="username"
                                {...register("username", {required: true, minLength: 6})}
                            />
                        </label>

                        <label htmlFor="user-password">
                            Password:
                            <input
                                type="password"
                                id="user-password"
                                {...register("password", {required: true, minLength: 6})}
                            />
                        </label>
                        <button type="submit">Login</button>
                        <p>New user? Click <Link to="/signup"><span className="signup-link">here </span></Link>to sign up!</p>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default LogIn;