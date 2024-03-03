import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Verify.css'
import axios from '../../setup/axios';
{/*
 * @des Verify
  * @author Trinh Minh Phuc
  * @date 16/02/2024
*/}


const Verify = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const verificationCode = window.location.pathname.split('/').pop();
    axios
      .post('/verify', { verificationCode })
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  })
  return (
    <div className="verification-container">
      {message ? <div className="verification-icon">&#10004;</div>
       : <div className="verification-icon">&#10060;</div>}
      <div className="verification-text">{message ? message : "Mã xác minh không hợp lệ"}</div>
      <div className="back-to-login">
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
}

export default Verify;
