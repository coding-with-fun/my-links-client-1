import React from "react";

const AuthPage = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center auth_form_container">
            <div className="shadow-sm card rounded auth_form">
                <h1 className="text-center mb-4 form-title">Sign In</h1>

                <form className="text-center">
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control is-invalid"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-4">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button type="button" className="btn btn-outline-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;
