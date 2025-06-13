import React from "react";
import Image from "next/image";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import passward_icon from "../Assets/password.png";
import "./loginSignup.css";
const LoginSignup =() => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">
                    <div className="underline"></div>

                </div>
                <div className="inputs">
                    <div className="input">
                        <Image src={user_icon}  alt="user Icon" className="icon" /> 
                        <input type="text" placeholder="Username" className="input-field" />
                    </div>
                    <div className="input">
                        <Image src={email_icon} alt="email Icon" className="icon" /> 
                        <input type="email" placeholder="username@uniwa.gr" className="input-field" />
                    </div>
                    <div className="input">
                        <Image src={passward_icon} alt="User Icon" className="icon" /> 
                        <input type="password"  />
                    </div>
                </div>
            </div>
            <div className="forgot-password">
                Lost password? <span className="link">Click here</span>
            </div>
            <div className="submit-container">
                <div className="submit">
                    Sign Up
                </div>
                <div className="submit">
                    Log in
                </div>

            </div>
        </div>
    );
}

export default LoginSignup;
