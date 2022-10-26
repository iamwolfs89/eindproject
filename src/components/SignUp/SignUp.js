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
        <div className="form-container">
            <div className="title-container1">
                <h3>Sign up here!</h3>
                <h4>For free</h4>
            </div>
            <form className="sign-up-form" onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset className="border-form">

                    <label htmlFor="email">
                        Email:
                        <input
                            type="email"
                            placeholder="user@email.com"
                            id="email"
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
                            placeholder="example123"
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
                            placeholder="your dog's name?"
                            id="password"
                            {...register("password", {
                                required: true,
                                minLength: {value: 6, message: "Minimum amount of characters is 6"}
                            })}
                        />
                    </label>
                    <div className="button-container">
                        <button type="submit" id="sign-up-button">Sign up!</button>
                    </div>
                </fieldset>

            </form>

        </div>
    );
}

export default SignUp;