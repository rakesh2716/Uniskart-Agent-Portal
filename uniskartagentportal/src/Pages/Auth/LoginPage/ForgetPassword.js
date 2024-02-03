import React from 'react';
import "./SignIn.css";
import { NavLink } from 'react-router-dom';

const ForgetPassword = () => {
    return (
        <>

            <div className="content-wrap logonbox-container">
                <div className="body-content">
                    <div className="logoNew">
                        <h3>Uniskart Agent Portal</h3>
                    </div>
                    <div className="container">
                        <div className="login-container">
                            <div className="row">
                                <div className="col-sm-12 login-box">
                                    <div className="text-left login-text">
                                        <form>
                                            <div className="login-box-bg">
                                                <div id="login-box">
                                                    <div>
                                                        <h2 id="forgotPasswordtext" style={{ display: "block" }}>Forgot Password</h2>
                                                        <p id="forgotPassworddescription" style={{ display: "block" }}>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
                                                    </div>
                                                    <div id="diverrorokmessages">
                                                        <div id="error-message" className="alert alert-danger" style={{ display: "block" }}></div>
                                                        <div id="ok-message" className="alert alert-success"></div>
                                                    </div>
                                                    <div id="forminputcontrol">
                                                        <div className="form-group">
                                                            <label for="name">Email Address*</label>
                                                            <div className="input-container">
                                                                <input type="email" className="form-control input-field" id="email" placeholder="Example@gmail.com" />
                                                                <img className="icon" src="https://coursefinder-prod.s3.ap-south-1.amazonaws.com/CFImageIcons/mail.png" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <button type="button" id="btn-Forgot-password" className="btn btn-default btn-danger btn-block"> Send Reset Instructions </button>
                                                    <div className="becomeaPartner">Don't have an account? <a href="https://www.studies-overseas.com/partners/study-abroad-association" target="_blank">Become a partner</a>
                                                    </div>
                                                </div>
                                                <div className="back-to-login"> <span className="left-arrow">&lt;<span> <NavLink to="/" className="back-to-login-text">Back to Login</NavLink></span></span></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ForgetPassword