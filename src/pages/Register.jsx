import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    return (
        <form className="box p-6 m-6">
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Zack Herleman"
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input
                        className="input"
                        type="email"
                        placeholder="alex@example.com"
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input
                        className="input"
                        type="password"
                        placeholder="********"
                    />
                </div>
            </div>

            <button className="button is-black">Create Account</button>
        </form>
    );
};

export default Register;
