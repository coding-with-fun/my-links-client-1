import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../components/Alert";
import { validateEmail } from "../utils/validator";

const AuthPage = () => {
    const history = useHistory();
    const formData = {
        email: {
            value: "",
            isValid: true,
        },
        password: {
            value: "",
            isValid: true,
        },
    };

    const [formValues, setFormValues] = useState(formData);
    const [alertInfo, setAlertInfo] = useState({
        showAlert: false,
        message: "",
        type: "success",
    });

    const handleFormInput = (key, value) => {
        const localFormValues = { ...formValues };

        localFormValues[key].isValid = Boolean(value);
        localFormValues[key].value = value;

        setFormValues(localFormValues);
    };

    const handleValidateEmail = () => {
        const localFormValues = { ...formValues };
        localFormValues.email.isValid = validateEmail(formValues.email.value);
        setFormValues(localFormValues);

        setAlertInfo({
            showAlert: localFormValues.email.isValid,
            message: "Please enter correct credentials.",
            type: "danger",
        });
    };

    const handleUserAuthentication = () => {
        localStorage.setItem("my-userToken", "abc");
        history.replace("/");
    };

    return (
        <Fragment>
            {alertInfo.showAlert ? (
                <Alert message={alertInfo.message} type={alertInfo.type} />
            ) : null}

            <div className="container d-flex justify-content-center align-items-center auth_form_container">
                <div className="shadow-sm card rounded auth_form">
                    <h1 className="text-center mb-4 form-title">Sign In</h1>

                    <form className="text-center">
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className={`form-control ${
                                    formValues.email.isValid
                                        ? null
                                        : "is-invalid"
                                }`}
                                value={formValues.email.value}
                                onChange={(e) => {
                                    handleFormInput("email", e.target.value);
                                }}
                                id="userEmail"
                                placeholder="name@example.com"
                                onBlur={() => {
                                    handleValidateEmail();
                                }}
                            />
                            <label htmlFor="userEmail">Email address</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input
                                type="password"
                                className={`form-control ${
                                    formValues.password.isValid
                                        ? null
                                        : "is-invalid"
                                }`}
                                value={formValues.password.value}
                                onChange={(e) => {
                                    handleFormInput("password", e.target.value);
                                }}
                                id="userPassword"
                                placeholder="Password"
                            />
                            <label htmlFor="userPassword">Password</label>
                        </div>

                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={handleUserAuthentication}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default AuthPage;
