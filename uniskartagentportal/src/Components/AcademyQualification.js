import React, { useEffect, useState } from "react";
import { countries } from "../Utils/StaticData";
import { getSingleStudentData, studentInfo } from "../redux/NewStudentRegistration/Action";
import Swal from "sweetalert2";
import { getStatesApi } from "../redux/getCountriesStates";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../Utils/Helpers";
const AcademyQualification = ({ getPersonalInfo, setGetPersonalInfo, activeTab, setActiveTab, id }) => {
  const dispatch = useDispatch();
  const [countryOfEducation, setCountryOfEducation] = useState('')
  const [highLevelEducation, setHighLevelEducationn] = useState('')
  const [postGraduateStates, setPostGraduateState] = useState([])
  const [grade12thStates, setGrade12thState] = useState([])
  const [undergraduateStates, setUndergraduateState] = useState([])
  const [grade10thStates, setGrade10thState] = useState([])



  const [qualificationData, setQualificationData] = useState({
    postgraduate: {
      levelOfStudy: "",
      nameOfTheInstitution: "",
      countryOfStudy: "",
      stateOfStudy: "",
      cityOfStudy: "",
      degreeAwarded: "",
      Backlogs: "",
      gradingSystem: "",
      Score: "",
      primaryLanguageOfInstruction: "",
      startDate: "",
      endDate: "",
    },
    undergraduate: {
      levelOfStudy: "Undergraduate",
      nameOfTheInstitution: "",
      countryOfStudy: "",
      stateOfStudy: "",
      cityOfStudy: "",
      degreeAwarded: "",
      Backlogs: "",
      gradingSystem: "",
      Score: "",
      primaryLanguageOfInstruction: "",
      startDate: "",
      endDate: "",
    },
    grade12th: {
      levelOfStudy: "Grade 12th or equivalent",
      nameOfTheInstitution: "",
      countryOfStudy: "",
      stateOfStudy: "",
      cityOfStudy: "",
      degreeAwarded: "",
      Backlogs: "",
      gradingSystem: "",
      Score: "",
      primaryLanguageOfInstruction: "",
      startDate: "",
      endDate: "",
      nameOfBoard: ""
    },
    grade10th: {
      levelOfStudy: "Grade 10th or equivalent",
      nameOfTheInstitution: "",
      countryOfStudy: "",
      stateOfStudy: "",
      cityOfStudy: "",
      degreeAwarded: "",
      Backlogs: "",
      gradingSystem: "",
      Score: "",
      primaryLanguageOfInstruction: "",
      startDate: "",
      endDate: "",
      nameOfBoard: ""
    },
  });
  const [error, setError] = useState(false);
  const [country, setCountry] = useState()
  const getQualificationState = async (value) => {
    try {
      const states = await dispatch(getStatesApi(value));
      return states
    } catch (error) {
      console.log(error);
    }
  }
  const handleQualification = async (e, category) => {
    const { name, value } = e.target;
    setQualificationData(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [name]: value
      }
    }));

    if (category === 'postgraduate' && name === 'countryOfStudy') {
      const getState = await getQualificationState(value)
      setPostGraduateState(getState)
    } else if (category === 'undergraduate' && name === 'countryOfStudy') {
      const getState = await getQualificationState(value)
      setUndergraduateState(getState)
    } else if (category === "grade12th" && name === 'countryOfStudy') {
      const getState = await getQualificationState(value)
      setGrade12thState(getState)
    } else if (category === "grade10th" && name === 'countryOfStudy') {
      const getState = await getQualificationState(value)
      setGrade10thState(getState)
    }

  };
  const validateQualificationData = (data, type) => {
    const isNameofBoardRequired = type === 'nameofBoardReq' ? !!data.nameOfBoard?.length : true
    const isStateDateRequired = type === 'nameofBoardReq' ? true : !!data?.startDate
    return (
      !!data.levelOfStudy?.length &&
      !!data.nameOfTheInstitution?.length &&
      !!data.countryOfStudy?.length &&
      !!data.stateOfStudy?.length &&
      !!data.cityOfStudy?.length &&
      !!data.degreeAwarded?.length &&
      !!data.gradingSystem?.length &&
      !!data.Score?.length &&
      !!data.primaryLanguageOfInstruction?.length &&
      !!data?.endDate &&
      isStateDateRequired &&
      isNameofBoardRequired
    );

  };
  const saveQualifications = async (obj) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, I am sure!",
      cancelButtonText: "No, cancel it!",
      reverseButtons: false,
      dangerMode: true,
    }).then(async function (result) {
      if (result.isConfirmed) {
        try {
          const res = await dispatch(studentInfo(obj));
          if (res.message) {
            const singleDataRes = await dispatch(getSingleStudentData(id));
            setActiveTab(2)
          }
        } catch (error) {
          console.log(error)
        }
        // setIsClicked(true)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", " :)", "error");
      }
    });
  }
  const handlePersonalInfoSubmit = async () => {
    if (highLevelEducation === "Postgraduate" && validateQualificationData(qualificationData.postgraduate) && validateQualificationData(qualificationData.undergraduate) && validateQualificationData(qualificationData.grade12th) && validateQualificationData(qualificationData.grade10th)) {
      const obj = { _id: id, countryOfEducation, highLevelEducation, postgraduate: qualificationData.postgraduate, undergraduate: qualificationData.undergraduate, grade10th: qualificationData.grade10th, grade12th: qualificationData.grade12th }
      saveQualifications(obj)
    } else if (highLevelEducation === "Undergraduate" && validateQualificationData(qualificationData.undergraduate) && validateQualificationData(qualificationData.grade12th) && validateQualificationData(qualificationData.grade10th)) {
      const obj = { _id: id, countryOfEducation, highLevelEducation, undergraduate: qualificationData.undergraduate, grade10th: qualificationData.grade10th, grade12th: qualificationData.grade12th }
      saveQualifications(obj)
    } else if (highLevelEducation === "Grade 12th or equivalent" && validateQualificationData(qualificationData.grade12th, "nameofBoardReq") && validateQualificationData(qualificationData.grade10th, "nameofBoardReq")) {
      const obj = { _id: id, countryOfEducation, highLevelEducation, grade10th: qualificationData.grade10th, grade12th: qualificationData.grade12th }
      saveQualifications(obj)
    } else {

      setError(true)
    }
  };

  useEffect(() => {
    if (getPersonalInfo && getPersonalInfo.grade10t && getPersonalInfo.grade12th) {
      setQualificationData({ ...qualificationData, grade10th: getPersonalInfo.grade10th, grade12th: getPersonalInfo.grade12th })
      if (getPersonalInfo?.countryOfEducation && getPersonalInfo?.highLevelEducation) {
        setCountryOfEducation(getPersonalInfo?.countryOfEducation)
        setHighLevelEducationn(getPersonalInfo?.highLevelEducation)
      }
      const fetchState = async () => {
        if (getPersonalInfo?.grade10th?.countryOfStudy) {
          const states = await getQualificationState(getPersonalInfo.grade10th.countryOfStudy)
          setGrade10thState(states)
        }
        if (getPersonalInfo?.grade12th?.countryOfStudy) {
          const states = await getQualificationState(getPersonalInfo.grade12th.countryOfStudy)
          setGrade12thState(states)
        }
        if (getPersonalInfo?.undergraduate?.countryOfStudy) {
          const states = await getQualificationState(getPersonalInfo.undergraduate.countryOfStudy)
          setUndergraduateState(states)
        }
        if (getPersonalInfo?.postgraduate?.countryOfStudy) {
          const states = await getQualificationState(getPersonalInfo.postgraduate.countryOfStudy)
          setPostGraduateState(states)
        }
      }
      fetchState()
    }

  }, [getPersonalInfo])
  console.log(getPersonalInfo && Object.keys(getPersonalInfo)?.length,"ddddddddddddddddd")
  return (
    <div role="tabpanel" className={`tab-pane ${activeTab === 1 ? 'active' : ''}`} id="PersonalInformation">
      <div id="divQualifications">
        <div className="PIbox EducationSummary Detail">
          <div className="EducationLevelCollaps">
            <div className="btnsec"></div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="">
                <label>Country of Education</label>
                <div className="">
                  <div className="select">
                    <select
                      name="countryOfEducation"
                      className="form-control"
                      data-val="true"
                      data-val-number="The field StudyCountryId must be a number."
                      id="Student.StudyCountryId"
                      tabindex="0"
                      value={countryOfEducation}
                      onChange={(e) => setCountryOfEducation(e.target.value)}
                    >
                      <option>Select Country</option>
                      <option disabled>Select Country</option>
                      {countries.map((item) => {
                        return <option value={item.value}>{item.value}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="">
                <label>
                  Highest Level of Education
                  <span className="requiretxx">*</span>
                </label>
                <div className="">
                  <div className="select">
                    <select
                      name="highestLevelOfEducation"
                      className="form-control"
                      data-val="true"
                      data-val-number="The field HighestStudyLevelId must be a number."
                      id="Student.HighestStudyLevelId"
                      tabindex="1"
                      value={highLevelEducation}
                      onChange={(e) => {
                        setError(false)
                        setHighLevelEducationn(e.target.value)
                      }}
                    >

                      <option value="Select Level" hidden>Select Level</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Grade 12th or equivalent">
                        Grade 12th or equivalent
                      </option>
                    </select>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {!!highLevelEducation?.length && !!countryOfEducation?.length &&
          <>
            {highLevelEducation === "Postgraduate" &&
              <div
                id="divQualificationForm"
                className="PIbox AQForm Detail"
              >
                <form id="qualification-add-form" novalidate="novalidate">

                  <h3 class="title">Post Graduate</h3>
                  <div className="row">

                    <div className="col-sm-6">
                      <div className="">
                        <label>
                          Level of Study<span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <div className="select">
                            <select
                              name="levelOfStudy"
                              className="form-control"
                              data-val="true"
                              data-val-number="The field StudyLevelId must be a number."
                              id="StudentQualificationVM.StudyLevelId"
                              value={qualificationData?.postgraduate?.levelOfStudy}
                              onChange={(e) => handleQualification(e, "postgraduate")}
                               disabled
                            >
                              <option>Postgraduate</option>
                              {/* <option value="Foundation">Foundation</option>
                              <option value="Grade 9th">Grade 9th</option>
                              <option value="Grade 11th">Grade 11th</option>
                              <option value="UG Diploma/Certificate/Associate Degree">
                                UG Diploma/Certificate/Associate Degree
                              </option>
                              <option value="PG Diploma/Certificate">
                                PG Diploma/Certificate
                              </option>
                              <option value="PhD">PhD</option>
                              <option value="Other">Other</option> */}
                            </select>
                          </div>
                          <span
                            id="spanDOB"
                            style={{
                              display:
                                !qualificationData.postgraduate?.levelOfStudy?.length && error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="DOB"
                            data-valmsg-replace="true"
                          >
                            <span id="DOB-error" className="">
                              level of study is required
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="register_student_form">
                        <label>
                          Name of the Institution
                          <span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <input
                            className="text-box single-line"
                            id="StudentQualificationVM_Name"
                            name="nameOfTheInstitution"
                            placeholder="Enter Name of the Institution"
                            type="text"
                            value={qualificationData.postgraduate?.nameOfTheInstitution}
                            onChange={(e) => handleQualification(e, "postgraduate")}
                          />
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.postgraduate?.nameOfTheInstitution?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            name of the institution is required
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-sm-6 country-container">
                          <div className="register_student_form">
                            <label>
                              Country of Study
                              <span className="requiretxx">*</span>
                            </label>
                            <div className="dvalue">
                              <div className="select">
                                <select
                                  name="countryOfStudy"
                                  className="form-control ddlCountry"
                                  data-val="true"
                                  data-val-number="The field CountryId must be a number."
                                  id="StudentQualificationVM.CountryId"
                                  value={qualificationData.postgraduate?.countryOfStudy}
                                  onChange={(e) => handleQualification(e, "postgraduate")}
                                >
                                  <option value="" disabled selected hidden>
                                    Select Country
                                  </option>
                                  {countries.map((item) => {
                                    return (
                                      <option value={item.value}>{item.value}</option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <span
                              id="spanDOB"
                              style={{
                                display:
                                  !qualificationData.postgraduate?.countryOfStudy?.length && error
                                    ? "block"
                                    : "none",
                              }}
                              className="text-danger field-validation-error"
                              data-valmsg-for="DOB"
                              data-valmsg-replace="true"
                            >
                              <span id="DOB-error" className="">
                                Country of Study is required
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 state-container">
                          <div className="register_student_form">
                            <label>
                              State of Study
                              <span className="requiretxx">*</span>
                            </label>
                            <div className="dvalue">
                              <div className="select">
                                <select
                                  name="stateOfStudy"
                                  className="form-control ddlState"
                                  data-val="true"
                                  data-val-number="The field StateId must be a number."
                                  id="StudentQualificationVM.StateId"
                                  value={qualificationData.postgraduate?.stateOfStudy}
                                  onChange={(e) => handleQualification(e, "postgraduate")}
                                >
                                  <option value="" disabled selected hidden>
                                    Select State
                                  </option>
                                  {!!postGraduateStates?.length &&
                                    postGraduateStates.map((state) => {
                                      return (
                                        <option value={state.name}>
                                          {state.name}
                                        </option>
                                      );
                                    })}
                                </select>
                              </div>
                            </div>
                            <span
                              id="spanDOB"
                              style={{
                                display:
                                  !qualificationData.postgraduate?.stateOfStudy?.length && error
                                    ? "block"
                                    : "none",
                              }}
                              className="text-danger field-validation-error"
                              data-valmsg-for="DOB"
                              data-valmsg-replace="true"
                            >
                              <span id="DOB-error" className="">
                                State of Study is required
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="">
                        <label>
                          City of Study<span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <input
                            className="text-box single-line"
                            id="StudentQualificationVM_City"
                            name="cityOfStudy"
                            placeholder="Enter Name of City"
                            type="text"
                            value={qualificationData.postgraduate?.cityOfStudy}
                            onChange={(e) => handleQualification(e, "postgraduate")}
                          />
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.postgraduate?.cityOfStudy?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            city of study is required
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="">
                            <label>Qualification Achieved/Degree Awarded</label>
                            <div className="dvalue">
                              <input
                                className="upperCase text-box single-line"
                                id="StudentQualificationVM_QualificationName"
                                name="degreeAwarded"
                                placeholder="Enter Qualification Achieved / Degree Awarded"
                                type="text"
                                value={qualificationData.undergraduate?.degreeAwarded}
                                onChange={(e) => handleQualification(e, "postgraduate")}
                              />
                            </div>
                            <span
                              id="spanDOB"
                              style={{
                                display:
                                  !qualificationData.postgraduate?.degreeAwarded?.length && error
                                    ? "block"
                                    : "none",
                              }}
                              className="text-danger field-validation-error"
                              data-valmsg-for="DOB"
                              data-valmsg-replace="true"
                            >
                              <span id="DOB-error" className="">
                                Qualification Achieved/Degree Awarded is required
                              </span>
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <div className="register_student_form">
                        <label>
                          Grading System<span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <div className="select">
                            <select
                              name="gradingSystem"
                              className="form-control ddlState"
                              data-val="true"
                              data-val-number="The field GradingPattern must be a number."
                              id="StudentQualificationVM.GradingPattern"
                              value={qualificationData.postgraduate?.gradingSystem}
                              onChange={(e) => handleQualification(e, "postgraduate")}
                            >
                              <option>Select...</option>
                              <option value="100">Out of 100</option>
                              <option value="45">Out of 45</option>
                              <option value="10">Out of 10</option>
                              <option value="7">Out of 7</option>
                              <option value="5">Out of 5</option>
                              <option value="4">Out of 4</option>
                            </select>
                          </div>
                          <span
                            id="spanDOB"
                            style={{
                              display:
                                !qualificationData.postgraduate?.gradingSystem?.length && error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="DOB"
                            data-valmsg-replace="true"
                          >
                            <span id="DOB-error" className="">
                              grading system is required
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="register_student_form">
                        <label>
                          Percentage<span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <input
                            className="text-box single-line"
                            data-val="true"
                            data-val-number="The field Marks must be a number."
                            id="StudentQualificationVM_Marks"
                            name="Score"
                            placeholder="Enter Percentage/CGPA"
                            type="text"
                            value={qualificationData.postgraduate?.Score}
                            onChange={(e) => handleQualification(e, "postgraduate")}
                          />
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.postgraduate?.Score?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            Score is required
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="register_student_form">
                        <label>
                          Primary Language of Instruction
                          <span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <input
                            className="text-box single-line"
                            id="StudentQualificationVM_LanguageInstruction"
                            name="primaryLanguageOfInstruction"
                            placeholder="Enter Primary Language of Instruction"
                            type="text"
                            value={qualificationData.postgraduate?.primaryLanguageOfInstruction}
                            onChange={(e) => handleQualification(e, "postgraduate")}
                          />
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.postgraduate?.primaryLanguageOfInstruction?.length &&
                                error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            primary language of instruction is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="">
                        <label>
                          Start Date<span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <input
                            name="startDate"
                            className="form-control"
                            id="StudentQualificationVMStartDate"
                            placeholder="DD/MM/YYYY"
                            type="date"
                            value={formatDate(qualificationData.postgraduate?.startDate)}
                            onChange={(e) => handleQualification(e, "postgraduate")}
                          />
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.postgraduate?.startDate?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            start date is required
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="">
                        <label>
                          End Date<span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <input
                            name="endDate"
                            className="form-control"
                            id="StudentQualificationVMEndDate"
                            placeholder="DD/MM/YYYY"
                            type="date"
                            value={formatDate(qualificationData.postgraduate?.endDate)}
                            onChange={(e) => handleQualification(e, "postgraduate")}
                          />
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.postgraduate?.endDate?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            end date is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                </form>
              </div>}
            {highLevelEducation === "Postgraduate" || highLevelEducation === "Undergraduate" ?

              <div
                id="divQualificationForm"
                className="PIbox AQForm Detail"
              >
                <form id="qualification-add-form" novalidate="novalidate">

                  <h3 class="title">Undergraduate</h3>
                  <div className="row">

                    <div className="col-sm-6">
                      <div className="">
                        <label>
                          Level of Study<span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <div className="select">
                            <select
                              name="levelOfStudy"
                              className="form-control"
                              data-val="true"
                              data-val-number="The field StudyLevelId must be a number."
                              id="StudentQualificationVM.StudyLevelId"
                              value={qualificationData.undergraduate?.levelOfStudy}
                              onChange={(e) => handleQualification(e, "undergraduate")}
                              disabled
                            >
                              <option>Undergraduate</option>
                              {/* <option value="Foundation">Foundation</option>
                              <option value="Grade 9th">Grade 9th</option>
                              <option value="Grade 11th">Grade 11th</option>
                              <option value="UG Diploma/Certificate/Associate Degree">
                                UG Diploma/Certificate/Associate Degree
                              </option>
                              <option value="PG Diploma/Certificate">
                                PG Diploma/Certificate
                              </option>
                              <option value="PhD">PhD</option>
                              <option value="Other">Other</option> */}
                            </select>
                          </div>
                          <span
                            id="spanDOB"
                            style={{
                              display:
                                !qualificationData.undergraduate?.levelOfStudy?.length && error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="DOB"
                            data-valmsg-replace="true"
                          >
                            <span id="DOB-error" className="">
                              level of study is required
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="register_student_form">
                        <label>
                          Name of the Institution
                          <span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <input
                            className="text-box single-line"
                            id="StudentQualificationVM_Name"
                            name="nameOfTheInstitution"
                            placeholder="Enter Name of the Institution"
                            type="text"
                            value={qualificationData.undergraduate?.nameOfTheInstitution}
                            onChange={(e) => handleQualification(e, "undergraduate")}
                          />
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.undergraduate?.nameOfTheInstitution?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            name of the institution is required
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-sm-6 country-container">
                          <div className="register_student_form">
                            <label>
                              Country of Study
                              <span className="requiretxx">*</span>
                            </label>
                            <div className="dvalue">
                              <div className="select">
                                <select
                                  name="countryOfStudy"
                                  className="form-control ddlCountry"
                                  data-val="true"
                                  data-val-number="The field CountryId must be a number."
                                  id="StudentQualificationVM.CountryId"
                                  value={qualificationData.undergraduate?.countryOfStudy}
                                  onChange={(e) => handleQualification(e, "undergraduate")}
                                >
                                  <option value="" disabled selected hidden>
                                    Select Country
                                  </option>
                                  {countries.map((item) => {
                                    return (
                                      <option value={item.value}>{item.value}</option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <span
                              id="spanDOB"
                              style={{
                                display:
                                  !qualificationData.undergraduate?.countryOfStudy?.length && error
                                    ? "block"
                                    : "none",
                              }}
                              className="text-danger field-validation-error"
                              data-valmsg-for="DOB"
                              data-valmsg-replace="true"
                            >
                              <span id="DOB-error" className="">
                                Country of Study is required
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 state-container">
                          <div className="register_student_form">
                            <label>
                              State of Study
                              <span className="requiretxx">*</span>
                            </label>
                            <div className="dvalue">
                              <div className="select">
                                <select
                                  name="stateOfStudy"
                                  className="form-control ddlState"
                                  data-val="true"
                                  data-val-number="The field StateId must be a number."
                                  id="StudentQualificationVM.StateId"
                                  value={qualificationData.undergraduate?.stateOfStudy}
                                  onChange={(e) => handleQualification(e, "undergraduate")}
                                >
                                  <option value="" disabled selected hidden>
                                    Select State
                                  </option>
                                  {!!undergraduateStates?.length &&
                                    undergraduateStates.map((state) => {
                                      return (
                                        <option value={state.name}>
                                          {state.name}
                                        </option>
                                      );
                                    })}
                                </select>
                              </div>
                            </div>
                            <span
                              id="spanDOB"
                              style={{
                                display:
                                  !qualificationData.undergraduate?.stateOfStudy?.length && error
                                    ? "block"
                                    : "none",
                              }}
                              className="text-danger field-validation-error"
                              data-valmsg-for="DOB"
                              data-valmsg-replace="true"
                            >
                              <span id="DOB-error" className="">
                                State of Study is required
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="">
                        <label>
                          City of Study<span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <input
                            className="text-box single-line"
                            id="StudentQualificationVM_City"
                            name="cityOfStudy"
                            placeholder="Enter Name of City"
                            type="text"
                            value={qualificationData.undergraduate?.cityOfStudy}
                            onChange={(e) => handleQualification(e, "undergraduate")}
                          />
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.undergraduate?.cityOfStudy?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            city of study is required
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="">
                            <label>Qualification Achieved/Degree Awarded</label>
                            <div className="dvalue">
                              <input
                                className="upperCase text-box single-line"
                                id="StudentQualificationVM_QualificationName"
                                name="degreeAwarded"
                                placeholder="Enter Qualification Achieved / Degree Awarded"
                                type="text"
                                value={qualificationData.undergraduate?.degreeAwarded}
                                onChange={(e) => handleQualification(e, "undergraduate")}
                              />
                            </div>
                            <span
                              id="spanDOB"
                              style={{
                                display:
                                  !qualificationData.undergraduate?.degreeAwarded?.length && error
                                    ? "block"
                                    : "none",
                              }}
                              className="text-danger field-validation-error"
                              data-valmsg-for="DOB"
                              data-valmsg-replace="true"
                            >
                              <span id="DOB-error" className="">
                                Qualification Achieved/Degree Awarded is required
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="">
                            <label>Backlogs</label>
                            <div className="dvalue">
                              <input
                                className="text-box single-line"
                                data-val="true"
                                data-val-number="The field Backlogs must be a number."
                                id="StudentQualificationVM_Backlogs"
                                name="Backlogs"
                                placeholder="Enter Backlogs"
                                type="number"
                                value={qualificationData.undergraduate?.Backlogs}
                                onChange={(e) => handleQualification(e, "undergraduate")}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <div className="register_student_form">
                        <label>
                          Grading System<span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <div className="select">
                            <select
                              name="gradingSystem"
                              className="form-control ddlState"
                              data-val="true"
                              data-val-number="The field GradingPattern must be a number."
                              id="StudentQualificationVM.GradingPattern"
                              value={qualificationData.undergraduate?.gradingSystem}
                              onChange={(e) => handleQualification(e, "undergraduate")}
                            >
                              <option>Select...</option>
                              <option value="100">Out of 100</option>
                              <option value="45">Out of 45</option>
                              <option value="10">Out of 10</option>
                              <option value="7">Out of 7</option>
                              <option value="5">Out of 5</option>
                              <option value="4">Out of 4</option>
                            </select>
                          </div>
                          <span
                            id="spanDOB"
                            style={{
                              display:
                                !qualificationData.undergraduate?.gradingSystem?.length && error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="DOB"
                            data-valmsg-replace="true"
                          >
                            <span id="DOB-error" className="">
                              grading system is required
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="register_student_form">
                        <label>
                          Score(UG)<span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <input
                            className="text-box single-line"
                            data-val="true"
                            data-val-number="The field Marks must be a number."
                            id="StudentQualificationVM_Marks"
                            name="Score"
                            placeholder="Enter Percentage/CGPA"
                            type="text"
                            value={qualificationData.undergraduate?.Score}
                            onChange={(e) => handleQualification(e, "undergraduate")}
                          />
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.undergraduate?.Score?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            Score is required
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="register_student_form">
                        <label>
                          Primary Language of Instruction
                          <span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <input
                            className="text-box single-line"
                            id="StudentQualificationVM_LanguageInstruction"
                            name="primaryLanguageOfInstruction"
                            placeholder="Enter Primary Language of Instruction"
                            type="text"
                            value={qualificationData.undergraduate?.primaryLanguageOfInstruction}
                            onChange={(e) => handleQualification(e, "undergraduate")}
                          />
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.undergraduate?.primaryLanguageOfInstruction?.length &&
                                error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            primary language of instruction is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="">
                        <label>
                          Start Date<span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <input
                            name="startDate"
                            className="form-control"
                            id="StudentQualificationVMStartDate"
                            placeholder="DD/MM/YYYY"
                            type="date"
                            value={formatDate(qualificationData.undergraduate?.startDate)}
                            onChange={(e) => handleQualification(e, "undergraduate")}
                          />
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.undergraduate?.startDate?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            start date is required
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="">
                        <label>
                          End Date<span className="requiretxx">*</span>
                        </label>
                        <div className="dvalue">
                          <input
                            name="endDate"
                            className="form-control"
                            id="StudentQualificationVMEndDate"
                            placeholder="DD/MM/YYYY"
                            type="date"
                            value={formatDate(qualificationData.undergraduate?.endDate)}
                            onChange={(e) => handleQualification(e, "undergraduate")}
                          />
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.undergraduate?.endDate?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            end date is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                </form>
              </div> : ""}
            <div
              id="divQualificationForm"
              className="PIbox AQForm Detail"
            >
              <form id="qualification-add-form" novalidate="novalidate">

                <h3 class="title">Grade 12th or equivalent</h3>
                <div className="row">

                  <div className="col-sm-6">
                    <div className="">
                      <label>
                        Level of Study<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <div className="select">
                          <select
                            name="levelOfStudy"
                            className="form-control"
                            data-val="true"
                            data-val-number="The field StudyLevelId must be a number."
                            id="StudentQualificationVM.StudyLevelId"
                            value={qualificationData.grade12th?.levelOfStudy}
                            onChange={(e) => handleQualification(e, "grade12th")}
                            disabled

                          >
                            <option value={"Grade 12th or equivalent"}>Grade 12th or equivalent</option>
                            {/* <option>Select Level</option>
                            <option value="Foundation">Foundation</option>
                            <option value="Grade 9th">Grade 9th</option>
                            <option value="Grade 11th">Grade 11th</option>
                            <option value="UG Diploma/Certificate/Associate Degree">
                              UG Diploma/Certificate/Associate Degree
                            </option>
                            <option value="PG Diploma/Certificate">
                              PG Diploma/Certificate
                            </option>
                            <option value="PhD">PhD</option>
                            <option value="Other">Other</option> */}
                          </select>
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.grade12th?.levelOfStudy?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            level of study is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className=""

                      id="divNameofBoard"
                    >
                      <label>
                        Name of Board<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          id="StudentQualificationVM_Board"
                          name="nameOfBoard"
                          placeholder="Enter Name of Board"
                          type="text"
                          value={qualificationData.grade12th?.nameOfBoard}
                          onChange={(e) => handleQualification(e, "grade12th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade12th?.nameOfBoard?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          name of board is required
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="register_student_form">
                      <label>
                        Name of the Institution
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          id="StudentQualificationVM_Name"
                          name="nameOfTheInstitution"
                          placeholder="Enter Name of the Institution"
                          type="text"
                          value={qualificationData.grade12th?.nameOfTheInstitution}
                          onChange={(e) => handleQualification(e, "grade12th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade12th?.nameOfTheInstitution?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          name of the institution is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-sm-6 country-container">
                        <div className="register_student_form">
                          <label>
                            Country of Study
                            <span className="requiretxx">*</span>
                          </label>
                          <div className="dvalue">
                            <div className="select">
                              <select
                                name="countryOfStudy"
                                className="form-control ddlCountry"
                                data-val="true"
                                data-val-number="The field CountryId must be a number."
                                id="StudentQualificationVM.CountryId"
                                value={qualificationData.grade12th?.countryOfStudy}
                                onChange={(e) => handleQualification(e, "grade12th")}
                              >
                                <option value="" disabled selected hidden>
                                  Select Country
                                </option>
                                {countries.map((item) => {
                                  return (
                                    <option value={item.value}>{item.value}</option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <span
                            id="spanDOB"
                            style={{
                              display:
                                !qualificationData.grade12th?.countryOfStudy?.length && error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="DOB"
                            data-valmsg-replace="true"
                          >
                            <span id="DOB-error" className="">
                              Country of Study is required
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-6 state-container">
                        <div className="register_student_form">
                          <label>
                            State of Study
                            <span className="requiretxx">*</span>
                          </label>
                          <div className="dvalue">
                            <div className="select">
                              <select
                                name="stateOfStudy"
                                className="form-control ddlState"
                                data-val="true"
                                data-val-number="The field StateId must be a number."
                                id="StudentQualificationVM.StateId"
                                value={qualificationData.grade12th?.stateOfStudy}
                                onChange={(e) => handleQualification(e, "grade12th")}
                              >
                                <option value="" disabled selected hidden>
                                  Select State
                                </option>
                                {!!grade12thStates?.length &&
                                  grade12thStates.map((state) => {
                                    return (
                                      <option value={state.name}>
                                        {state.name}
                                      </option>
                                    );
                                  })}
                              </select>
                            </div>
                          </div>
                          <span
                            id="spanDOB"
                            style={{
                              display:
                                !qualificationData.grade12th?.stateOfStudy?.length && error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="DOB"
                            data-valmsg-replace="true"
                          >
                            <span id="DOB-error" className="">
                              State of Study is required
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="">
                      <label>
                        City of Study<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          id="StudentQualificationVM_City"
                          name="cityOfStudy"
                          placeholder="Enter Name of City"
                          type="text"
                          value={qualificationData.grade12th?.cityOfStudy}
                          onChange={(e) => handleQualification(e, "grade12th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade12th?.cityOfStudy?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          city of study is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="">
                          <label>Qualification Achieved/Degree Awarded</label>
                          <div className="dvalue">
                            <input
                              className="upperCase text-box single-line"
                              id="StudentQualificationVM_QualificationName"
                              name="degreeAwarded"
                              placeholder="Enter Qualification Achieved / Degree Awarded"
                              type="text"
                              value={qualificationData.grade12th?.degreeAwarded}
                              onChange={(e) => handleQualification(e, "grade12th")}
                            />
                          </div>
                          <span
                            id="spanDOB"
                            style={{
                              display:
                                !qualificationData.grade12th?.degreeAwarded?.length && error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="DOB"
                            data-valmsg-replace="true"
                          >
                            <span id="DOB-error" className="">
                              Qualification Achieved/Degree Awarded is required
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="">
                          <label>Backlogs</label>
                          <div className="dvalue">
                            <input
                              className="text-box single-line"
                              data-val="true"
                              data-val-number="The field Backlogs must be a number."
                              id="StudentQualificationVM_Backlogs"
                              name="Backlogs"
                              placeholder="Enter Backlogs"
                              type="number"
                              value={qualificationData.grade12th?.Backlogs}
                              onChange={(e) => handleQualification(e, "grade12th")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="register_student_form">
                      <label>
                        Grading System<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <div className="select">
                          <select
                            name="gradingSystem"
                            className="form-control ddlState"
                            data-val="true"
                            data-val-number="The field GradingPattern must be a number."
                            id="StudentQualificationVM.GradingPattern"
                            value={qualificationData.grade12th?.gradingSystem}
                            onChange={(e) => handleQualification(e, "grade12th")}
                          >
                            <option>Select...</option>
                            <option value="100">Out of 100</option>
                            <option value="45">Out of 45</option>
                            <option value="10">Out of 10</option>
                            <option value="7">Out of 7</option>
                            <option value="5">Out of 5</option>
                            <option value="4">Out of 4</option>
                          </select>
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.grade12th?.gradingSystem?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            grading system is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="register_student_form">
                      <label>
                        Score(12th)<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          data-val="true"
                          data-val-number="The field Marks must be a number."
                          id="StudentQualificationVM_Marks"
                          name="Score"
                          placeholder="Enter Percentage/CGPA"
                          type="text"
                          value={qualificationData.grade12th?.Score}
                          onChange={(e) => handleQualification(e, "grade12th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade12th?.Score?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          Score is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="register_student_form">
                      <label>
                        Primary Language of Instruction
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          id="StudentQualificationVM_LanguageInstruction"
                          name="primaryLanguageOfInstruction"
                          placeholder="Enter Primary Language of Instruction"
                          type="text"
                          value={qualificationData.grade12th?.primaryLanguageOfInstruction}
                          onChange={(e) => handleQualification(e, "grade12th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade12th?.primaryLanguageOfInstruction?.length &&
                              error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          primary language of instruction is required
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="">
                      <label>
                        Start Date
                      </label>
                      <div className="dvalue">
                        <input
                          name="startDate"
                          className="form-control"
                          id="StudentQualificationVMStartDate"
                          placeholder="DD/MM/YYYY"
                          type="date"
                          value={formatDate(qualificationData?.grade12th?.startDate)}
                          onChange={(e) => handleQualification(e, "grade12th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade12th?.startDate?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          start date is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="">
                      <label>
                        End Date<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          name="endDate"
                          className="form-control"
                          id="StudentQualificationVMEndDate"
                          placeholder="DD/MM/YYYY"
                          type="date"
                          value={formatDate(qualificationData.grade12th?.endDate)}
                          onChange={(e) => handleQualification(e, "grade12th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade12th?.endDate?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          end date is required
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

              </form>
            </div>
            <div
              id="divQualificationForm"
              className="PIbox AQForm Detail"
            >
              <form id="qualification-add-form" novalidate="novalidate">

                <h3 class="title">Grade 10th or equivalent</h3>
                <div className="row">

                  <div className="col-sm-6">
                    <div className="">
                      <label>
                        Level of Study<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <div className="select">
                          <select
                            name="levelOfStudy"
                            className="form-control"
                            data-val="true"
                            data-val-number="The field StudyLevelId must be a number."
                            id="StudentQualificationVM.StudyLevelId"
                            value={qualificationData.grade10th?.levelOfStudy}
                            onChange={(e) => handleQualification(e, "grade10th")}
                            disabled
                          >
                            {/* <option>Select Level</option> */}

                            <option value="Grade 10th or equivalent">Grade 10th or equivalent</option>

                          </select>
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.grade10th?.levelOfStudy?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            level of study is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className=""

                      id="divNameofBoard"
                    >
                      <label>
                        Name of Board<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          id="StudentQualificationVM_Board"
                          name="nameOfBoard"
                          placeholder="Enter Name of Board"
                          type="text"
                          value={qualificationData.grade10th?.nameOfBoard}
                          onChange={(e) => handleQualification(e, "grade10th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade10th?.nameOfBoard?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          name of board is required
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="register_student_form">
                      <label>
                        Name of the Institution
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          id="StudentQualificationVM_Name"
                          name="nameOfTheInstitution"
                          placeholder="Enter Name of the Institution"
                          type="text"
                          value={qualificationData.grade10th?.nameOfTheInstitution}
                          onChange={(e) => handleQualification(e, "grade10th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade10th?.nameOfTheInstitution?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          name of the institution is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-sm-6 country-container">
                        <div className="register_student_form">
                          <label>
                            Country of Study
                            <span className="requiretxx">*</span>
                          </label>
                          <div className="dvalue">
                            <div className="select">
                              <select
                                name="countryOfStudy"
                                className="form-control ddlCountry"
                                data-val="true"
                                data-val-number="The field CountryId must be a number."
                                id="StudentQualificationVM.CountryId"
                                value={qualificationData.grade10th?.countryOfStudy}
                                onChange={(e) => handleQualification(e, "grade10th")}
                              >
                                <option value="" disabled selected hidden>
                                  Select Country
                                </option>
                                {countries.map((item) => {
                                  return (
                                    <option value={item.value}>{item.value}</option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <span
                            id="spanDOB"
                            style={{
                              display:
                                !qualificationData.grade10th?.countryOfStudy?.length && error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="DOB"
                            data-valmsg-replace="true"
                          >
                            <span id="DOB-error" className="">
                              Country of Study is required
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-6 state-container">
                        <div className="register_student_form">
                          <label>
                            State of Study
                            <span className="requiretxx">*</span>
                          </label>
                          <div className="dvalue">
                            <div className="select">
                              <select
                                name="stateOfStudy"
                                className="form-control ddlState"
                                data-val="true"
                                data-val-number="The field StateId must be a number."
                                id="StudentQualificationVM.StateId"
                                value={qualificationData.grade10th?.stateOfStudy}
                                onChange={(e) => handleQualification(e, "grade10th")}
                              >
                                <option value="" disabled selected hidden>
                                  Select State
                                </option>
                                {!!grade10thStates?.length &&
                                  grade10thStates.map((state) => {
                                    return (
                                      <option value={state.name}>
                                        {state.name}
                                      </option>
                                    );
                                  })}
                              </select>
                            </div>
                          </div>
                          <span
                            id="spanDOB"
                            style={{
                              display:
                                !qualificationData.grade10th?.stateOfStudy?.length && error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="DOB"
                            data-valmsg-replace="true"
                          >
                            <span id="DOB-error" className="">
                              State of Study is required
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="">
                      <label>
                        City of Study<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          id="StudentQualificationVM_City"
                          name="cityOfStudy"
                          placeholder="Enter Name of City"
                          type="text"
                          value={qualificationData.grade10th?.cityOfStudy}
                          onChange={(e) => handleQualification(e, "grade10th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade10th?.cityOfStudy?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          city of study is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="">
                          <label>Qualification Achieved/Degree Awarded</label>
                          <div className="dvalue">
                            <input
                              className="upperCase text-box single-line"
                              id="StudentQualificationVM_QualificationName"
                              name="degreeAwarded"
                              placeholder="Enter Qualification Achieved / Degree Awarded"
                              type="text"
                              value={qualificationData.grade10th?.degreeAwarded}
                              onChange={(e) => handleQualification(e, "grade10th")}
                            />
                          </div>
                          <span
                            id="spanDOB"
                            style={{
                              display:
                                !qualificationData.grade10th?.degreeAwarded?.length && error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="DOB"
                            data-valmsg-replace="true"
                          >
                            <span id="DOB-error" className="">
                              Qualification Achieved/Degree Awarded is required
                            </span>
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="register_student_form">
                      <label>
                        Grading System<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <div className="select">
                          <select
                            name="gradingSystem"
                            className="form-control ddlState"
                            data-val="true"
                            data-val-number="The field GradingPattern must be a number."
                            id="StudentQualificationVM.GradingPattern"
                            value={qualificationData.grade10th?.gradingSystem}
                            onChange={(e) => handleQualification(e, "grade10th")}
                          >
                            <option>Select...</option>
                            <option value="100">Out of 100</option>
                            <option value="45">Out of 45</option>
                            <option value="10">Out of 10</option>
                            <option value="7">Out of 7</option>
                            <option value="5">Out of 5</option>
                            <option value="4">Out of 4</option>
                          </select>
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !qualificationData.grade10th?.gradingSystem?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            grading system is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="register_student_form">
                      <label>
                        Score(10th)<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          data-val="true"
                          data-val-number="The field Marks must be a number."
                          id="StudentQualificationVM_Marks"
                          name="Score"
                          placeholder="Enter Percentage/CGPA"
                          type="text"
                          value={qualificationData.grade10th?.Score}
                          onChange={(e) => handleQualification(e, "grade10th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade10th?.Score?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          Score is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="register_student_form">
                      <label>
                        Primary Language of Instruction
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          id="StudentQualificationVM_LanguageInstruction"
                          name="primaryLanguageOfInstruction"
                          placeholder="Enter Primary Language of Instruction"
                          type="text"
                          value={qualificationData.grade10th?.primaryLanguageOfInstruction}
                          onChange={(e) => handleQualification(e, "grade10th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade10th?.primaryLanguageOfInstruction?.length &&
                              error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          primary language of instruction is required
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="">
                      <label>
                        Start Date
                      </label>
                      <div className="dvalue">
                        <input
                          name="startDate"
                          className="form-control"
                          id="StudentQualificationVMStartDate"
                          placeholder="DD/MM/YYYY"
                          type="date"
                          value={formatDate(qualificationData.grade10th?.startDate)}
                          onChange={(e) => handleQualification(e, "grade10th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade10th?.startDate?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          start date is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="">
                      <label>
                        End Date<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          name="endDate"
                          className="form-control"
                          id="StudentQualificationVMEndDate"
                          placeholder="DD/MM/YYYY"
                          type="date"
                          value={formatDate(qualificationData.grade10th?.endDate)}
                          onChange={(e) => handleQualification(e, "grade10th")}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !qualificationData.grade10th?.endDate?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          end date is required
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

              </form>
            </div></>}


        <div className="row">
          <div className="col-sm-12">
            <div className="submit-btn text-right tabsnextprevbtn">
              <div className="relativepo">
                <button className="btn btn-primary" id="btn-test-submit" onClick={handlePersonalInfoSubmit} disabled={!highLevelEducation.length || !countryOfEducation.length}>
                  Save and continue
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AcademyQualification;
