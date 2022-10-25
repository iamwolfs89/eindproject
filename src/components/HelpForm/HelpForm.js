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
            <div className="form-container3">
            <div className="title">
                <h3>Help form!</h3>
            </div>
            <form className="help-form" onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset className="border-form3">

                    <label htmlFor="user-email">
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

                    <label htmlFor="comment">
                        Comment:
                        <textarea
                            rows={8}
                            placeholder="write your comment here"
                            id="comment"
                            {...register("comment", {
                                required: true,
                                maxLength: {value: 200, message: "you've passed the amount of characters you can use"}
                            })}
                        />
                    </label>
                    <div className="button-container3">
                        <button type="submit" id="send-button">Send!</button>
                    </div>
                </fieldset>
            </form>
            </div>
        </>
    );
}

export default HelpForm;