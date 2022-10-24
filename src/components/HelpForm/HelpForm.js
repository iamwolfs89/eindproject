import './HelpForm.css';
import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

function HelpForm() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    function onFormSubmit(data) {
        navigate("/")
        console.log(data)
    }

    return (
        <>
            <div className="title">
                <h3>Help form!</h3>
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

                    <label htmlFor="comment">
                        Comment:
                        <input
                            type="text"
                            placeholder="comment here"
                            id="comment"
                            {...register("comment", {
                                required: true,
                                maxLength: {value: 200, message: "you've passed the amount of characters you can use"}
                            })}
                        />
                    </label>
                    <div className="send-button-container">
                        <button type="submit" className="send-button">Send!</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default HelpForm;