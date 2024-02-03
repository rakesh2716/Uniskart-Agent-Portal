import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useDispatch } from "react-redux"
import { newStudentRegister } from '../redux/NewStudentRegistration/Action'
import { useNavigate } from 'react-router-dom';
const SummeryInfo = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [registerStudentObj, setRegisterStudentObj] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phoneNo: ""
    })
    const [isAlreadyExist, setIsAlreadyExist] = useState("")
    const [error, setError] = useState(false)
    const handleRegisterForm = (e, isPhoneField) => {
        setError(false)
        setIsAlreadyExist("")
        if (!!isPhoneField?.name.length) {
            setRegisterStudentObj({ ...registerStudentObj, phoneNo: e })
        } else {
            const { name, value } = e.target;
            setRegisterStudentObj((prev) => {
                return {
                    ...prev,
                    [name]: value
                }
            })
        }
    }
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmitRegister = async () => {
        const { firstName, lastName, email, phoneNo } = registerStudentObj
        if (!!firstName && !!lastName && !!email && !!phoneNo && isValidEmail(email) && phoneNo.length - 2 === 10) {
            const res = await dispatch(newStudentRegister(registerStudentObj))
            if (!!Object.keys(res).length) {
                if (res.response.status === 400) {
                    setIsAlreadyExist(res.response.data.error)
                } else {
                    navigate(`/student-form/${res._id}`);
                    document.body.classList.remove('modal-open');
                    const modalBackdrops = document.getElementsByClassName('modal-backdrop');
                    while (modalBackdrops[0]) {
                        document.body.removeChild(modalBackdrops[0]);
                    }
                }
            }

        } else {
            setError(true)
        }
    }

    return (
        <>
            <div className="summerybox">
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="welcomename">Dashboard</h1>
                        <div className="welcometxt">
                            Welcome to Course Finder Portal
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="btndiv">
                            <a className="btn btn-success" href="" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">+ Register a new student</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h2 className="modal-title register_student_label" id="exampleModalLabel">Register New Student</h2>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="col-sm-12">
                                    <div className="student_form">
                                        <label htmlFor="FirstName" className="active">First Name
                                            <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <input id="FirstName" type="text" name="firstName" placeholder="Enter First Name" maxLength="150" className="form-control validate" required="" aria-required="true" onChange={handleRegisterForm} />
                                        {error && !registerStudentObj.firstName && <p style={{ color: "red" }}> First name is required<span style={{ color: "red" }}>*</span></p>}
                                    </div>

                                </div>
                                <div className="col-sm-12">
                                    <div className="student_form">
                                        <label htmlFor="MiddleName" className="active">Middle Name</label>
                                        <input id="MiddleName" type="text" name="middleName" placeholder="Enter Middle Name" maxLength="150" className="form-control" onChange={handleRegisterForm} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="student_form">
                                        <label htmlFor="LastName" className="active">Last Name  <span style={{ color: "red" }}>*</span></label>
                                        <input id="LastName" type="text" name="lastName" placeholder="Enter Last Name" maxLength="150" className="form-control" onChange={handleRegisterForm} />
                                        {error && !registerStudentObj.lastName && <p style={{ color: "red" }}> First name is required<span style={{ color: "red" }}>*</span></p>}
                                    </div>
                                </div>
                                <div className="col-sm-12">

                                    <div className="student_form">
                                        <label htmlFor="phoneno" className="active">Phone No  <span style={{ color: "red" }}>*</span></label>
                                        <PhoneInput
                                            country={'in'}
                                            id="phoneno"
                                            name="phoneNo"
                                            onChange={(e, something) => handleRegisterForm(e, something)}
                                        />
                                        {registerStudentObj.phoneNo.length - 2 !== 10 && !!registerStudentObj.phoneNo && error && <p style={{ color: "red" }}>Enter valid Phone No.<span style={{ color: "red" }}>*</span></p>}
                                        {error && !registerStudentObj.phoneNo && <p style={{ color: "red" }}> First name is required<span style={{ color: "red" }}>*</span></p>}
                                        {isAlreadyExist === "Phone number already exists" || isAlreadyExist === "Email and phone number already exist" ? <p style={{ color: "red" }}>{isAlreadyExist}</p> : ""}
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="student_form">
                                        <label htmlFor="email" className="active">Email  <span style={{ color: "red" }}>*</span></label>
                                        <input id="email" type="text" name="email" placeholder="Enter Email" maxLength="150" className="form-control" onChange={handleRegisterForm} />
                                        {!!registerStudentObj.email && !isValidEmail(registerStudentObj.email) && error && <p style={{ color: "red" }}> Invalid email</p>}
                                        {error && !registerStudentObj.email && <p style={{ color: "red" }}> First name is required<span style={{ color: "red" }}>*</span></p>}
                                        {isAlreadyExist === "Email already exists" || isAlreadyExist === "Email and phone number already exist" ? <p style={{ color: "red" }}> {isAlreadyExist}</p> : ""}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleSubmitRegister}>Register Student</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SummeryInfo