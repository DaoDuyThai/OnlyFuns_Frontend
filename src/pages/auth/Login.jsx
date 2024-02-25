import React, { useState } from "react";
import "./Login.css";
import Logo from "/src/assets/logo/OnlyFunsShortIcon.png";
import { Link, useNavigate } from "react-router-dom";
import LongIconComponent from "../../components/LongIcon/LongIcon";
import { toast } from "react-toastify";
import axios from "../../setup/axios";
// import axios from "axios";

const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };
  const navigate = useNavigate()

  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (e.target.name === "password" && data.confirmpass !== e.target.value) {
      setConfirmPass(false);
    } else {
      setConfirmPass(true);
    }
  };


 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!data.username || !data.username.trim()) {
      toast.warning('Hãy nhập username')
      return;
    }
    if (!data.password || !data.password.trim()) {
      toast.warning('Hãy nhập password')
      return;
    }
    try {
      const response = await axios.post('login', data);
      console.log('Login success:', response.data);
      
      // Store the accessToken in localStorage
      localStorage.setItem('accessToken', response.data.accessToken);
      navigate('/')      
      toast.success('Login successful!');
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    }
  };
  
  

  return (
    <div className="login">
      <div className="logo">
        <LongIconComponent />
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
            <h3>Login</h3>
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
                type="password"
                className="infoInput"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
              {/* {errorMessage && <p className="error">{errorMessage}</p>} */}
              <Link to={'/register'}> Don't have an account? Sign up</Link>
              <button className="button infoButton" type="submit">
                Login
              </button>
            </div>
            <Link to={'/forgotpassword'} className="forgot">Forgot password?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
