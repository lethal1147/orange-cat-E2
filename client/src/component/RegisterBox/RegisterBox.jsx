import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './RegisterBox.css';

export default function RegisterBox() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="register-container">

            <div className="register-fields">
                <h1 className="register-title">Register</h1>
                <div className="username-container">
                    <p>Username</p>
                    <input className="username-input-container" type="text" placeholder="Username" />
                </div>
                <div className="password-container">
                    <p>Password</p>
                    <div className="password-input-container">
                        <input type={showPassword ? 'text' : 'password'} placeholder="Password" />
                        <button className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                <div className="password-container">
                    <p>Confirm Password</p>
                    <div className="password-input-container">
                        <input type={showPassword ? 'text' : 'password'} placeholder="Password" />
                        <button className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
            </div>

            <button className="register-button">Sign In</button>

            <div className="register-footer">
                <p>Already have an account? <a href="#">Sign in.</a></p>
            </div>
        </div>
    );
};