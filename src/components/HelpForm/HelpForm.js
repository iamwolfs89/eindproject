import '../Forms/Forms.css';
import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import Forms from "../Forms/Forms";
import Buttons from "../Buttons/Buttons";

function HelpForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    function onFormSubmit(data) {
        navigate("/")
        console.log(data)
    }

    return (
        <>
            <div className="form-container">
            <div className="title">
                <h3>Help form!</h3>
            </div>
            <form className="help-form" onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset className="border-form">

                    <label htmlFor="user-email">
                        Email:
                        <input
                            type="email"
                            placeholder="your@email.com"
                            id="email"
                            {...register("email", {
                                required: true,
                                minLength: {value: 6, message: "Minimum amount of characters is 6",},
                                validate: (value) => value.includes('@'),
                            })}
                        />
                        {errors.email && <p id="error-message">{errors.email.message}</p>}
                    </label>

                    <label htmlFor="comment">
                        Comment:
                        <textarea
                            rows={8}
                            placeholder="write your comment here"
                            id="comment"
                            {...register("comment", {
                                required: true,
                                maxLength: {
                                    value: 200,
                                    message: "you've passed the amount of characters you can use"
                                }
                            })}
                        />
                        {errors.comment && <p id="error-message">{errors.comment.message}</p>}
                    </label>
                    <Buttons
                        buttonText="Send!"
                    />
                </fieldset>
            </form>
            </div>
        </>
    );
}

export default HelpForm;