import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { loginUser } from '../../../Components/redux/Auth/Action';
import { setLocalStorage } from '../../../Utils/Helpers';
import {loginUser} from "../../../redux/Auth/Action"
const SignIn = () => {
  const navigate = useNavigate();
const dispatch = useDispatch()
const [loginFaild,setLoginFail] = useState({})

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is Required'),
      password: Yup.string().required('Password is Required'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await dispatch(loginUser(values));
        if(!!res.token?.length){
          setLocalStorage("token", res.token);
          navigate("/");
        }else{
          setLoginFail(res)
        }
      } catch (err) {
        console.error(err,"dddddddd");
      }
    },
  });
  return (
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
                  <form onSubmit={formik.handleSubmit}>
                    <div className="login-box-bg">
                      <div id="login-box">
                        <div>
                          <h2 id="logintext">Login</h2>
                          <p id="logindescription">Login with provided email address </p>
                        </div>
                        <div id="forminputcontrol">
                          <div className="form-group">
                            <label htmlFor="name">Email Address*</label>
                            <div className="input-container">
                              <input
                                type="email"
                                className={`form-control input-field ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                placeholder="Enter Your Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                              />
                             
                            </div>
                            {formik.touched.email && formik.errors.email && (
                                <div className="invalid-feedback" style={{color:"red"}}>{formik.errors.email}</div>
                              )}
                          </div>
                          <div className="form-group">
                            <label htmlFor="password" id="lblPass">Password*</label>
                            <div className="forgt-pass" onClick={() => navigate("/forget-password")}>
                              <span id="change_password">Forgot Password?</span>
                            </div>
                            <div className="input-container" id="divpassword">
                              <input
                                type={formik.values.showPassword ? 'text' : 'password'}
                                className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                                id="password"
                                placeholder="Enter your password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                              />
                              <img
                                className="icon eyeicon"
                                src={`/assets/images/${formik.values.showPassword ? 'eye.png' : 'eye-off.png'}`}
                                id="eyeicon"
                                onClick={() => formik.setFieldValue('showPassword', !formik.values.showPassword)}
                              />
                             
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <div className="invalid-feedback" style={{color:"red"}}>{formik.errors.password}</div>
                              )}
                                 {!formik.errors.password  && !formik.errors.email && !!loginFaild?.response?.data?.msg?.length && (
                                <div className="invalid-feedback" style={{color:"red"}}>{loginFaild?.response?.data?.msg}</div>
                              )}
                          </div>
                        </div>
                        <button type="submit" id="btn-login" className="btn btn-primary btn-block">
                          Login <img className="iconArrow" src='/assets/images/arrow-right.png' alt="arrow" />
                        </button>
                        <div className="becomeaPartner">
                          Don't have an account? <a href="https://uniskart.com/contact/" target="_blank" rel="noopener noreferrer">Become a partner</a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
