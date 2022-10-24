import './SignUp.css';
import React from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

function SignUp() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate()

    async function onFormSubmit(data) {
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                username: data.username,
                email: data.email,
                password: data.password,
                role: ["user"]
            })
            navigate("/login")

        } catch (e) {
            console.error(e)
            alert(e.response.data.message)
        }


        console.log(data);
    }


    return (
        <>
            <div className="title">
                <h3>Sign up here!</h3>
            </div>
            <form className="auth-form" onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>

                    <label htmlFor="user-email">
                        Email:
                        <input
                            type="email"
                            placeholder="user@email.com"
                            id="user-email"
                            {...register("email", {
                                required: true,
                                minLength: {value: 6, message: "Minimum amount of characters is 6",},
                                validate: (value) => value.includes('@'),
                            })}
                        />
                    </label>

                    <label htmlFor="username">
                        Username:
                        <input
                            type="text"
                            placeholder="username"
                            id="username"
                            {...register("username", {
                                required: true,
                                minLength: {value: 6, message: "Minimum amount of characters is 6"}
                            })}
                        />
                    </label>

                    <label htmlFor="password">
                        Password:
                        <input
                            type="password"
                            placeholder="password"
                            id="password"
                            {...register("password", {
                                required: true,
                                minLength: {value: 6, message: "Minimum amount of characters is 6"}
                            })}
                        />
                    </label>
                    <div className="button-register-container">
                        <button type="submit" className="register-button">Register</button>
                    </div>
                </fieldset>

            </form>

        </>
    );
}

export default SignUp;