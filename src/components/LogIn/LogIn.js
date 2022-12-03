import '../Forms/Forms.css';
import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Forms from "../Forms/Forms";
import Buttons from "../Buttons/Buttons";


function LogIn() {
    const {register, handleSubmit, formState: {errors}} = useForm();
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
            <Forms/>
            <div className="form-container">
                <div className="title">
                    {!auth.isAuth ? <h3>Log in here!</h3> : <h3>Log out here!</h3>}
                </div>
                {!auth.isAuth ?
                    <form className="log-in-form" onSubmit={handleSubmit(onFormSubmit)}>
                        <fieldset className="border-form">

                            <label htmlFor="username">
                                Username:
                                <input
                                    type="text"
                                    id="username"
                                    {...register("username", {
                                        required: true,
                                        minLength: {
                                            value: 6,
                                            message: "Minimum amount of characters is 6"
                                        }
                                    })}
                                />
                                {errors.username && <p id="error-message">{errors.username.message}</p>}
                            </label>

                            <label htmlFor="user-password">
                                Password:
                                <input
                                    type="password"
                                    id="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: {
                                            value: 6,
                                            message: "Minimum amount of characters is 6"
                                        }
                                    })}
                                />
                                {errors.password && <p id="error-message">{errors.password.message}</p>}
                            </label>
                            <Buttons
                                buttonText="Log in"
                            />
                            <p>New here? Click <Link to="/signup"><span id="sign-up-link">here </span></Link>to
                                sign up!</p>
                        </fieldset>
                    </form>
                    : <button
                        onClick={logoutFunction}
                        type="button">Log out</button>}
            </div>
        </>
    );
}

export default LogIn;