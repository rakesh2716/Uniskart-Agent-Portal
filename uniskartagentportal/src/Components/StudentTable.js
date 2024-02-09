import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from "react-redux";
import { getStudents, newStudentRegister } from '../redux/NewStudentRegistration/Action';
import { useNavigate } from 'react-router-dom';
import { countries, countryOptions } from '../Utils/StaticData';
import { DataPicker } from './DatePicker';
import Select from 'react-select';
import { getUserInfo } from '../Utils/Helpers';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const StudentTable = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [students, setStudents] = useState()
	const handleCountries = (e)=>{
         console.log(e.target.value,"dddddddddddddddddddd")
	}
	const getStudentData = async () => {
		try {
			const res = await dispatch(getStudents())
			setStudents(res)
		} catch (error) {
			console.log(error)
		}
	}
	const [registerStudentObj, setRegisterStudentObj] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        createdBy:getUserInfo().name,
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
                if (res?.response?.status === 400) {
                    setIsAlreadyExist(res.response.data.error)
                } else if(res._id) {
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
	useEffect(() => {
		getStudentData()

	}, [])

	return (
		<>
			<Navbar />
			<div className="container MSLWrap">
				<div className="MSL-top">
					<h1 className="title">Manage Students</h1>
					<div className="registernsbtn">
						
						<a href="#" className="btn btn-success" data-toggle="modal" data-target="#registerModal">+ Register new student</a>
					</div>
					<div className="clearfix"></div>
				</div>
				<div className="MSL-Searchform">
					<div className="SF-Date">
						<div className="">
							<DataPicker />
						</div>
					</div>
					<div className="SF-University">
						<div className="">
							<div className="select">
							<Select
                    id="countries"
                    name="countries"
                    className="browser-default selectpicker"
                    isMulti
                    options={countryOptions}
                    multiple
                    placeholder="Select Countries"
                    // onChange={setGetSelectedCountry}
                    // styles={customStyles}
                />
								{/* <div className="chosen-container chosen-container-multi" title="" id="Country_chosen" style={{ width: "0px" }}>
									<ul className="chosen-choices">
										<li className="search-field">
											<input className="chosen-search-input default" type="text" autocomplete="off" value="Country" style={{ width: "84.8875px" }} />
										</li>
									</ul>
									<div className="chosen-drop">
										<ul className="chosen-results"></ul>
									</div>
								</div> */}
								{/* <input type="hidden" id="hdnCitizen" value="" /> */}
							</div>
						</div>
					</div>
					<div className="SF-Intake">
						<div className="">
							<div className="select">
							<Select
                    id="countries"
                    name="countries"
                    className="browser-default selectpicker"
                    isMulti
                    options={countryOptions}
                    multiple
                    placeholder="Country"
                    // onChange={setGetSelectedCountry}
                    // styles={customStyles}
                />
								{/* <div className="chosen-container chosen-container-multi" title="" id="Intake_chosen" style={{ width: "0px" }}>
									<ul className="chosen-choices">
										<li className="search-field">
											<input className="chosen-search-input default" type="text" autocomplete="off" value="Intake" style={{ width: "70.925px" }} />
										</li>
									</ul>
									<div className="chosen-drop">
										<ul className="chosen-results"></ul>
									</div>
								</div> */}
								{/* <input type="hidden" id="hdnIntake" /> */}
							</div>
						</div>
					</div>
					<div className="SF-Intake">
						<div className="">
							<div className="select">
							<Select
                    id="countries"
                    name="countries"
                    className="browser-default selectpicker"
                    isMulti
                    options={countryOptions}
                    multiple
                    placeholder="Country"
                    // onChange={setGetSelectedCountry}
                    // styles={customStyles}
                />
								{/* <input type="hidden" id="hdnyear" /> */}
							</div>
						</div>
					</div>
					<div className="SF-Status">
						<div className="">
							<div className="select">
						
							<Select
                    id="countries"
                    name="countries"
                    className="browser-default selectpicker"
                    isMulti
                    options={countryOptions}
                    multiple
                    placeholder="Country"
                    // onChange={setGetSelectedCountry}
                    // styles={customStyles}
                />
								{/* <input type="hidden" id="hdnStatusId" /> */}
							</div>
						</div>
					</div>
					<div className="SF-Keyword">
						<div className="">
							<input name="keyword" className="form-control" placeholder="Search by Keyword" value="" type="text" id="keyword" />
						</div>
					</div>
					<div className="SF-Searchbtn">
						<div className="">
							<button type="button" className="btn btn-primary" id="btnSearchData">Search</button>
						</div>
					</div>
				</div>
				<div className="MSL-Whitebox">
					<div className="archive-bar" style={{ textAlign: "right", padding: "0px 10px 10px 10px", display: "none" }}>
						<button id="btnArchiveSelected">
							<i className="fa fa-archive"></i> Archive Selected
						</button>
						<button id="btnClearArchiveSelection">
							<i className="fa fa-times"></i> Clear Selection
						</button>
					</div>
					<div className="table-responsive mb-0">
						<table className="table table-sm table-nowrap card-table" id="student-list">
							<thead>
								<tr>
									<th className="hdDate">
										Date Created
									</th>
									<th>
										Student Name
									</th>
									<th>
										Email Address
									</th>
									<th>
										Mobile Number
									</th>
									<th>
										Created By
									</th>
									<th className="assignptr">
										Assigned To
									</th>
									<th>
										Status
									</th>
									<th>
										&nbsp;
									</th>
								</tr>
							</thead>
							<tbody>
								{!!students?.length && students.map((item) => {
									const name = !!item.middleName ? item.firstName + " " + item.middleName + " " + item.lastName : item.firstName + " " + item.lastName
									return (
										<tr id={item._id} onClick={() => navigate(`/student-form/${item._id}`)}>
											<td className="datealign">
												<span >{new Date(item.createdAt).toLocaleDateString()}</span>
											</td>
											<td className="camelCasing" >{name}</td>
											<td className="emailSmall">
												{item.email}
											</td>
											<td >
												{item.phoneNo}
											</td>
											<td className="kc-team">
												{item.createdBy}
											</td>
											<td>{item.createdBy}</td>
											<td className="status-incomplete">
												App. Incomplete
											</td>
											<td className="copyLink">
												<input type="hidden" value="https://app.coursefinder.ai/students/profile/6wgl6l5jhzq" id="copyformLink_564729" />
												<div className="linkColor copyLinktooltip" onclick="javascript:copylink(564729)">
													<svg width="24" height="24"
														xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
														<path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"></path>
													</svg>
													<span className="copyLinktooltiptext copyLinktooltiptext_564729">Link copied</span>
												</div>
											</td>
										</tr>
									)
								})}

							</tbody>
						</table>
					</div>
					<div className="MS-Paging">
						<div className="row">
							<div className="col-sm-4">
								<div className="showby">
									Show

									<div className="select">
										<select name="CurrentPageSize" className="form-control select-keyword" data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="CurrentPageSize">
											<option value="">PageSize</option>
											<option selected="selected">25</option>
											<option>50</option>
											<option>100</option>
										</select>
									</div>
									Entries

								</div>
							</div>
							<div className="col-sm-4 text-center">
								<div className="Appli_pagination">
									<span id="spnShowingRecords" name="spnShowingRecords">Showing 1 - {students?.length}</span>
									<a className="prevNext nextpage" href="/StudentApplications?dateCreated=01%2F01%2F2023%20-%2004%2F02%2F2024&amp;page=2&amp;pageSize=25" style={{ display: "none" }}>&gt;</a>
								</div>
							</div>
							<div className="col-sm-4 text-right">
								<div className="dataTables_info" role="status" aria-live="polite">
									<span>
										<button value="Show Total No Of records" id="btnShowTotalRecords" name="btnShowTotalRecords" className="PegTotalApp">View Total Students</button>
									</span>
									<div className="lds-facebook" style={{ display: "none" }}>
										<div></div>
										<div></div>
										<div></div>
									</div>
									<span id="spnTotalRecords" name="spnTotalRecords"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="registerModalLabel">
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

export default StudentTable