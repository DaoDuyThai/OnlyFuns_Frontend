import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/logo/OnlyFunsShortIcon.png";
import { Link } from "react-router-dom";
import LongIcon from "../../components/LongIcon/LongIcon";
import { toast } from "react-toastify";

const Register = () => {
    const initialState = {
        email: "",
        username: "",
        password: "",
        confirmpass: "",
    };

    const [data, setData] = useState(initialState);
    const [confirmPass, setConfirmPass] = useState(true);
    const [validEmail, setValidEmail] = useState(true);



    // handle Change in input
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        if (e.target.name === "password" && data.confirmpass !== e.target.value) {
            setConfirmPass(false);
        } else {
            setConfirmPass(true);
        }
    };
    const validateEmail = (email) => {
        // Regular expression for validating email
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.username || !data.username.trim()) {
            toast.warning("Hãy nhập username");
            return;
        }
        if (!data.email || !data.email.trim()) {
            toast.warning("Hãy nhập email");
            return;
        }
        setValidEmail(validateEmail(data.email));
        if (!validEmail) {
            toast.warning("Email không đúng định dạng");
            return;
        }
        if (!data.password || !data.password.trim()) {
            toast.warning("Hãy nhập password.");
            return;
        }
        if (!data.confirmpass || !data.confirmpass.trim()) {
            toast.warning("Hãy nhập confirmpass.");
            return;
        }
        if (data.password !== data.confirmpass) {
            toast.warning("Password and confirm password must match.");
            return;
        }

    };

    return (
        <div className="login">
            <div className="logo">
                <LongIcon />
            </div>
            <div className="Auth">
                <div className="a-left">
                    <img src={Logo} alt="" />
                    <div className="Webname">
                        <h1>OnlyFuns</h1>
                        <h5>Best Social networking app in the world!</h5>
                    </div>
                </div>
                <div className="a-right">
                    <form className="infoForm authForm" onSubmit={handleSubmit}>
                        <h3>SignUp</h3>
                        <div>
                            <input
                                
                                type="text"
                                placeholder="Username"
                                className="infoInput"
                                name="username"
                                value={data.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                
                                type="text"
                                placeholder="Email"
                                className="infoInput"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                
                                type="password"
                                className="infoInput"
                                placeholder="Password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                
                                type="password"
                                className="infoInput"
                                placeholder="Confirm Password"
                                name="confirmpass"
                                value={data.confirmpass}
                                onChange={handleChange}
                            />
                        </div>
                        {/* <p style={{ color: "red" }}>{!confirmPass && "Passwords do not match."}</p> */}
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                        <button className="button infoButton" type="submit">
                            SignUp
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
