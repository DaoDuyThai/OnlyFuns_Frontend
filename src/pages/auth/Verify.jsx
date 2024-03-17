import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Verify.css'
import axios from '../../setup/axios';
import LongIconComponent from '../../components/LongIcon/LongIcon';
{/*
 * @des Verify
  * @author Trinh Minh Phuc
  * @date 16/02/2024
*/}


const Verify = () => {
  const [message, setMessage] = useState('');
  const verificationCode = useParams().verificationCode;
  const [loading, setLoading] = useState(false)
  console.log(verificationCode)
  // useEffect(() => {
  //   const fetchData = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const data = { verificationCode };
  //       const response = await axios.post('/verify', data);
  //       console.log(response.data);
  //       setMessage(response.data.message);
  //     } catch (error) {
  //       console.log(error.response.data.message);
  //     }
  //   };
  //   fetchData();
  // }, [verificationCode]);
  const handleVerify = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      const data = { verificationCode };
      const response = await axios.post('/verify', data);
      console.log(response.data);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <div className="verification-container">
      <div className="logo">
        <LongIconComponent />
      </div>
      {loading ? (
        <div className="verification-container">
          <div className="verification-icon">{message ? '✔️' : '❌'}</div>
          <div className="verification-text">{message ? message : "Mã xác minh không hợp lệ"}</div>
          <div className="back-to-login">
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      ) : (
        <>
          <div className="verification-container">
            <div className='btn btn-primary' onClick={handleVerify}>Xác Minh</div>
            <div className="back-to-login">
              <Link to="/login">Back to Login</Link>
            </div>
          </div>
        </>


      )}

    </div >
  );
}

export default Verify;
