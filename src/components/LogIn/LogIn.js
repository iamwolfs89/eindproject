import './LogIn.css';
import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function LogIn() {
    const {register, handleSubmit} = useForm();
    const {loginFunction, auth, logoutFunction} = useContext(AuthContext)

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
            <div className="form-container2">
                <div className="title">
                    <h3>Log in here!</h3>
                </div>
                <form className="log-in-form" onSubmit={handleSubmit(onFormSubmit)}>
                    {!auth.isAuth ?
                        <fieldset className="border-form2">

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
                                    id="password"
                                    {...register("password", {required: true, minLength: 6})}
                                />
                            </label>
                            <div className="button-container2">
                            <button id="log-in-button" type="submit">Log in</button>
                            </div>
                            <p>New user? Click <Link to="/signup"><span id="sign-up-link">here </span></Link>to
                                sign up!</p>
                        </fieldset>
                        : <button
                            onClick={logoutFunction}
                            type="button">Log out</button>}
                </form>
            </div>
        </>
    );
}

export default LogIn;