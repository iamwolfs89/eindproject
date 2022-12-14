import '../Forms/Forms.css';
import React from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import Buttons from "../Buttons/Buttons";

function SignUp() {
    const {register, handleSubmit, formState: {errors}} = useForm();
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
            if (e.response.status === 400) {
                navigate("/login")
            }
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
                                minLength: {
                                    value: 6,
                                    message: "Minimum amount of characters is 6",
                                },
                                validate: (value) => value.includes('@'),
                            })}
                        />
                        {errors.email && <p id="error-message">{errors.email.message}</p>}
                    </label>

                    <label htmlFor="username">
                        Username:
                        <input
                            type="text"
                            placeholder="example123"
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

                    <label htmlFor="password">
                        Password:
                        <input
                            type="password"
                            placeholder="your dog's name?"
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
                        buttonText="Sign up"
                    />
                </fieldset>

            </form>

        </div>
    );
}

export default SignUp;