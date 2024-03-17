import { useState } from "react";
import { Link } from "react-router-dom";
import './FogotPassword.css'
import LongIconComponent from "../../components/LongIcon/LongIcon";
import { toast } from "react-toastify";
import axios from "../../setup/axios";
{/*
  * @des FogotPassword
  * @author Trinh Minh Phuc
  * @date 16/02/2024
*/}
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email) => {
        // Regular expression for validating email
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validate email format
        if (!email || !email.trim()) {
            toast.warning("Hãy nhập email");
            setLoading(false)
            return;
        }
        setValidEmail(validateEmail(email));
        if (!validEmail) {
            toast.warn("Email không đúng định dạng");
            setLoading(false)
            return;
        }
        try {
            const response = await axios.post('forgot', { email });
            toast.success(response.data.message);
            // console.log('Forgot success:', response.data);
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="logo">
                <LongIconComponent />
            </div>
            <div className="ForgotPasswordContainer">
                <div className="forgot-password">
                    <h2>Forgot Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <center>
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? (
                                    <div className="loading-content">
                                        <div className="spinner"></div>
                                        <span>Loading...</span>
                                    </div>
                                ) : (
                                    'Reset Password'
                                )}
                            </button>
                        </center>

                    </form>
                    <div className="back-to-login">
                        <Link to="/login">Back to Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
