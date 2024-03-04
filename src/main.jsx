import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Verify from './pages/auth/Verify.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        {/* <BrowserRouter>
            <Routes>
                <Route path="/verify/:verificationCode" element={<Verify />} />
            </Routes>
        </BrowserRouter> */}


    </>
);
