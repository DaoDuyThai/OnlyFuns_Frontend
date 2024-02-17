import React from 'react';
import { Link } from 'react-router-dom';
import './Verify.css'
{/*
 * @des Verify
  * @author Trinh Minh Phuc
  * @date 16/02/2024
*/}
const Verify = () => {
  return (
    <div className="verification-container">
      <div className="verification-icon">&#10004;</div>
      <div className="verification-text">Verification Successful!</div>
      <div className="back-to-login">
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
}

export default Verify;
