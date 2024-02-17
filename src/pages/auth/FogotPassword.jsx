import React from "react";
import { Link } from "react-router-dom";
import './FogotPassword.css'
{/*
  * @des FogotPassword
  * @author Trinh Minh Phuc
  * @date 16/02/2024
*/}
const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="forgot-password">
        <h2>Forgot Password</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </form>
        <div className="back-to-login">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
