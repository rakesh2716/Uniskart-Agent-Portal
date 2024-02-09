import React, { useEffect, useState } from 'react'

import Navbar from "../../Components/Navbar"
import StudentPersonalFields from "../../Components/StudentPersonalFields"
// import StudentApplicationFields from './StudentApplicationFields'
import StudentApplicationFields from "../../Components/StudentApplicationFields"
import "../Dashboard/Dashboard.css"
import { getSingleStudentData, updateStudentInfo } from '../../redux/NewStudentRegistration/Action'
import {useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
const Student_Register_form = () => {
	const [studentName,setStudentName] = useState("")
	const [changeStudentInfo,setChangeStudentInfo] = useState({
		name:"",
		email:'',
        phoneNo:""
	})
	const [nameHideShow,setNameHideShow] = useState("")
	const [emailHideShow,setEmailHideShow] = useState("")
	const [phoneHideShow,setphoneHideShow] = useState("")
	const [finalUpdatedObject,setFinalUpdatedObject] = useState({})

	const dispatch = useDispatch();
	let {id} = useParams();
	const [activeTab, setActiveTab] = useState("profile")
	const [getStudentSavedData,setGetStudentSavedData] = useState({})


	const getStudentSavedInfoById = async() =>{
		try {
			const res = await dispatch(getSingleStudentData(id));
			const resssss = await updateStudentInfo(id,changeStudentInfo)
			if(Object.keys(res)?.length){
				setGetStudentSavedData(res)
				setChangeStudentInfo({
					name:res.middleName.length ? res.firstName+" "+res.middleName +" "+ res.lastName : res.firstName+" "+ res.lastName,
					email:res.email,
					phoneNo:res.phoneNo
				})
				let name = res.middleName.length ? res.firstName+" "+res.middleName +" "+ res.lastName : res.firstName+" "+ res.lastName
				setStudentName(name)

			
			}
		} catch (error) {
			console.log(error,"errorerrorerrorerrorerrorerror");
		}
		
	  }
	  const updateStudentInfoData = async () => {
		nameHideShow.length && setNameHideShow("")
		emailHideShow.length && setEmailHideShow("")
		try {
			// if(changeStudentInfo.name && changeStudentInfo.email){
			// 	if(changeStudentInfo.name != studentName || changeStudentInfo.email !=getStudentSavedData?.email){
					const res = await updateStudentInfo(id,changeStudentInfo)
					console.log(res,"resresresresresres");
			// 	}
			// }
		} catch (error) {
		  console.error('Error updating email:', error);
		}
	  };
	  const handleUpdateStudentInfo = (e) =>{
		const { value, name } = e.target;
		setChangeStudentInfo((prev) => {
			return {
			  ...prev,
			  [name]: value,
			};
		  });
		  
	  }
	  useEffect(()=>{
		getStudentSavedInfoById()
	  },[])
	
	return (
		<>
			<Navbar />
			<div className="container MSWrap">

				<div className="MS-main-tabs">
					<div className="tabbable boxed parentTabs p-4">
						<ul className="nav maintabs nav-tabs">
							<li className={activeTab === "profile" && "active"} id="profileSection" onClick={() => setActiveTab("profile")}>
								<a href="#Profiletab" className="nav-link">Profile</a>
							</li>
							<li id="application " className={activeTab === "application" && "active"} onClick={() => setActiveTab("application")}>
								<a href="#Applicationtab" className="nav-link">Applications</a>
							</li>
							<li className={activeTab === "docsView" && "active"} id="docsView" onClick={() => setActiveTab("docsView")}>
								<a href="#docsViewTab" className="nav-link">Documents</a>
							</li>
							<li id="paymentView" style={{ display: 'none' }}>
								<a href="#paymentViewTab" className="nav-link">Payments</a>
							</li>
						</ul>
						<div className="welcomeUser">
							<h1>Welcome to the application of
								{" "}<span className="camelCasing studentNameValue" id="studentNameVal">{getStudentSavedData?.firstName+" "+getStudentSavedData?.lastName }</span>
							</h1>
							<div className="row">
								<div className="col-lg-3 col-md-3 col-sm-6 studentDetail">
									<label>Name</label>
									<div className={`namefld ${nameHideShow ==="" ? "show" :"hide"}`}>
										<span id="dispName" className="camelCasing ">{getStudentSavedData?.firstName+" "+getStudentSavedData?.lastName}</span>
										<div className={`editname`} onClick={()=>setNameHideShow("name")}>
											<a >
												<img src="/assets/images/edit-icon.svg" alt="" />
											</a>
										</div>
									</div>
									<div className={nameHideShow ==="name" ? "show":"hide"} id="editName">
										<input className="form-control camelCasing text-box single-line" id="EditNameVal" name="name" onBlur={updateStudentInfoData} type="text" value={changeStudentInfo.name} onChange={handleUpdateStudentInfo}/>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 studentDetail">
									<label>Email</label>
									<div className={`namefld ${emailHideShow ==="" ? "show" :"hide"}`}>
										<span className="emailSmall" id="dispEmail">{getStudentSavedData?.email}</span>
										<div className="editname" onClick={()=>setEmailHideShow("email")}>
											<a >
												<img src="/assets/images/edit-icon.svg" alt="" />
											</a>
										</div>
									</div>
									<div className={emailHideShow ==="email" ? "show":"hide"} id="editEmail">
										<input className="form-control text-box single-line" id="EditEmailVal" name="email" onBlur={updateStudentInfoData} type="text "value={changeStudentInfo.email}  onChange={handleUpdateStudentInfo}/>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 cust-col2 studentDetaiMargin">
									<label>Phone</label>
									<div className="namefld">
										<span id="dispMob" className="StudentmobileNumber">{getStudentSavedData?.phoneNo}</span>
										<div className="editname">
											<a >
												<img src="/assets/images/edit-icon.svg" alt="" />
											</a>
										</div>
									</div>

								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 cust-colLink studentDetaiMargin">
									<label>Student Url Link</label>
									<input type="hidden" value="https://app.coursefinder.ai/students/profile/5dzeck8yh43" id="copyformLink_563579" />
									<div className="namefld">
										<span id="dispMob" className="elipsy">https://dummyxyz.ai/students/profile/5dzeck8yh43 </span>
										<div className="linkColor copyLinktooltip" >
											<div className="copLink">
												Copy Link

												<div className="svgICO">
													{/* <svg enable-background="new 0 0 141.732 141.732" height="12px" id="Livello_1" version="1.1" viewBox="0 0 141.732 141.732" width="12px" xml:space="preserve"
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink">
												<g id="Livello_107">
													<path d="M57.217,63.271L20.853,99.637c-4.612,4.608-7.15,10.738-7.15,17.259c0,6.524,2.541,12.653,7.151,17.261   c4.609,4.608,10.74,7.148,17.259,7.15h0.002c6.52,0,12.648-2.54,17.257-7.15L91.738,97.79c7.484-7.484,9.261-18.854,4.573-28.188   l-7.984,7.985c0.992,4.667-0.443,9.568-3.831,12.957l-37.28,37.277l-0.026-0.023c-2.652,2.316-6.001,3.579-9.527,3.579   c-3.768,0-7.295-1.453-9.937-4.092c-2.681-2.68-4.13-6.259-4.093-10.078c0.036-3.476,1.301-6.773,3.584-9.39l-0.021-0.02   l0.511-0.515c0.067-0.071,0.137-0.144,0.206-0.211c0.021-0.021,0.043-0.044,0.064-0.062l0.123-0.125l36.364-36.366   c2.676-2.673,6.23-4.144,10.008-4.144c0.977,0,1.947,0.101,2.899,0.298l7.993-7.995c-3.36-1.676-7.097-2.554-10.889-2.554   C67.957,56.124,61.827,58.663,57.217,63.271 M127.809,24.337c0-6.52-2.541-12.65-7.15-17.258c-4.61-4.613-10.74-7.151-17.261-7.151   c-6.519,0-12.648,2.539-17.257,7.151L49.774,43.442c-7.479,7.478-9.26,18.84-4.585,28.17l7.646-7.646   c-0.877-4.368,0.358-8.964,3.315-12.356l-0.021-0.022l0.502-0.507c0.064-0.067,0.134-0.138,0.201-0.206   c0.021-0.02,0.04-0.04,0.062-0.06l0.126-0.127l36.363-36.364c2.675-2.675,6.231-4.147,10.014-4.147   c3.784,0,7.339,1.472,10.014,4.147c5.522,5.521,5.522,14.51,0,20.027L76.138,71.629l-0.026-0.026   c-2.656,2.317-5.999,3.581-9.526,3.581c-0.951,0-1.891-0.094-2.814-0.278l-7.645,7.645c3.369,1.681,7.107,2.563,10.907,2.563   c6.523,0,12.652-2.539,17.261-7.148l36.365-36.365C125.27,36.988,127.809,30.859,127.809,24.337"></path>
												</g>
												<g id="Livello_1_1_"></g>
											</svg> */}
												</div>
											</div>
											<span className="copyLinktooltiptext copyLinktooltiptext_563579">Link copied</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="tab-content">

							{activeTab === "profile" && <StudentPersonalFields id={id} res={getStudentSavedData}/>}
							{activeTab === "application" && <StudentApplicationFields />}
							{/* {activeTab==="profile" && <StudentPersonalFields />}   */}
							<div id="docsViewTab" className="tab-pane fade">

							</div>
							<div id="paymentViewTab" className="tab-pane fade"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Student_Register_form