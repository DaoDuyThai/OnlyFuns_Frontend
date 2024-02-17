import React, { useState } from "react";
import "./Login.css";
import Logo from "/src/assets/logo/OnlyFunsShortIcon.png";
import { Link } from "react-router-dom";
{/*
  * @des Register
  * @author Trinh Minh Phuc
  * @date 16/02/2024
*/}
const Register = () => {
    const initialState = {
        email: "",
        lastname: "",
        username: "",
        password: "",
        confirmpass: "",
    };

    const [data, setData] = useState(initialState);
    const [confirmPass, setConfirmPass] = useState(true);

    const resetForm = () => {
        setData(initialState);
        setConfirmPass(true);
    };

    // handle Change in input
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        if (e.target.name === "password" && data.confirmpass !== e.target.value) {
            setConfirmPass(false);
        } else {
            setConfirmPass(true);
        }
    };

    // Form Submission
    const handleSubmit = (e) => {
        setConfirmPass(true);
        e.preventDefault();
    };

    return (
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
                            required
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
                            required
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
                            required
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
                            required
                            type="password"
                            className="infoInput"
                            placeholder="Confirm Password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>

                    Already have an account <Link to={'/login'}>Login</Link>
                    <button
                        className="button infoButton"
                        type="submit"

                    >
                        SignUp
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Register;
