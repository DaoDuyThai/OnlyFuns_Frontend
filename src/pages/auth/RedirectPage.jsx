import React from 'react';
import './LoadingPage.css';
{/*
  * @des LoadingPage
  * @author Trinh Minh Phuc
  * @date 16/02/2024
*/}
const LoadingPage = () => {
  return (
    <div className="loading-container">
      <h1>Just a moment...</h1>
      <div className="slider">
        <div className="line"></div>
        <div className="break dot1"></div>
        <div className="break dot2"></div>
        <div className="break dot3"></div>
      </div>
      <p className='p1'>We're redirecting you to our new site... Not working? <a href="#0">Click here.</a></p>
    </div>
  );
}

export default LoadingPage;
