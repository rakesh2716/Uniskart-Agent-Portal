import React, { useEffect, useState } from "react";
import { countries } from "../Utils/StaticData";
import { studentInfo } from "../redux/NewStudentRegistration/Action";
import Swal from "sweetalert2";
import { getStatesApi } from "../redux/getCountriesStates";
import { useDispatch, useSelector } from "react-redux";
const AcademyQualification = ({ getPersonalInfo, setGetPersonalInfo }) => {
  const dispatch = useDispatch();
  const [showAcademyFields, setShowAcademyFields] = useState(false);
  const [isClicked,setIsClicked] = useState(false)
  const [academyQualificationData,setAcademyQualificationData] = useState({
    countryOfEducation:"",
    highestLevelOfEducation:"",
    levelOfStudy:"",
    nameOfTheInstitution:"",
    countryOfStudy:"",
    stateOfStudy:"",
    cityOfStudy:"",
    degreeAwarded:"",
    Backlogs:"",
    gradingSystem:"",
    Score:"",
    primaryLanguageOfInstruction:"",
    startDate:"",
    endDate:"",
  })
  const [error, setError] = useState(false);
  const [country,setCountry] = useState()

  const [states, setStates] = useState([]);
  const handleQualification = (e) => {
    const { value, name } = e.target;
    setAcademyQualificationData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handlePersonalInfoSubmit = async () => {
 
    const {
      countryOfEducation,
      highestLevelOfEducation,
      levelOfStudy,
      nameOfTheInstitution,
      countryOfStudy,
      stateOfStudy,
      cityOfStudy,
      degreeAwarded,
      Backlogs,
      gradingSystem,
      Score,
      primaryLanguageOfInstruction,
      startDate,
      endDate,
    } = academyQualificationData;
    if (
      !!highestLevelOfEducation.length &&
      !!levelOfStudy.length &&
      !!nameOfTheInstitution.length &&
      !!countryOfStudy.length &&
      !!stateOfStudy.length &&
      !!cityOfStudy.length &&
      !!degreeAwarded.length &&
      !!Backlogs.length &&
      !!gradingSystem.length &&
      !!Score.length &&
      !!primaryLanguageOfInstruction.length &&
      !!startDate &&
      !!endDate
    ) {
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
            setGetPersonalInfo({...getPersonalInfo,...academyQualificationData})
            setIsClicked(true)
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", " :)", "error");
        }
      });
    } else {
      setError(true);
    }
  };
  const handleCountries = async (e, type) => {
    setAcademyQualificationData({
      ...academyQualificationData,
      countryOfStudy: e.target.value,
    });
    setCountry(e.target.value);
    try {
      const states = await dispatch(getStatesApi(e.target.value));
      setStates(states);
    } catch (error) {
      console.log(error);
    }
  };
  const xyz = async()=>{
      try {
            const res = await dispatch(studentInfo(getPersonalInfo));
            if (res.message) {
              Swal.fire({
                title: "Saved",
                icon: "success",
                confirmButtonText: "Done",
              }).then(function () {});
            }
          } catch (error) {
            console.log(error);
          }
  }
  useEffect(()=>{
    if(!!getPersonalInfo?.levelOfStudy?.length && isClicked){
        xyz()
        setIsClicked(false)
    }
  },[getPersonalInfo])
  useEffect(()=>{


      setAcademyQualificationData({...getPersonalInfo,...academyQualificationData})
    
  },[getPersonalInfo])

  return (
    <div role="tabpanel" className="tab-pane" id="AcademicQualification">
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
                      value={academyQualificationData.countryOfEducation}
                      onChange={handleQualification}
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
                      value={academyQualificationData.highestLevelOfEducation}
                      onChange={handleQualification}
                    >
                      <option>Select Level</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Grade 12th or equivalent">
                        Grade 12th or equivalent
                      </option>
                    </select>
                  </div>
                  <span
                    id="spanDOB"
                    style={{
                      display:
                        !academyQualificationData.highestLevelOfEducation?.length &&
                        error
                          ? "block"
                          : "none",
                    }}
                    className="text-danger field-validation-error"
                    data-valmsg-for="DOB"
                    data-valmsg-replace="true"
                  >
                    <span id="DOB-error" className="">
                      highest level of education is required
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="divQualificationForm"
          className="PIbox AQForm Detail"
          style={{ display: showAcademyFields ? "block" : "none" }}
        >
          <form id="qualification-add-form" novalidate="novalidate">
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
                        value={academyQualificationData.levelOfStudy}
                        onChange={handleQualification}
                      >
                        <option>Select Level</option>
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
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <span
                      id="spanDOB"
                      style={{
                        display:
                          !academyQualificationData.levelOfStudy?.length && error
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
                  style={{ display: "block" }}
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
                      value={academyQualificationData.nameOfBoard}
                      onChange={handleQualification}
                    />
                  </div>
                  <span
                    id="spanDOB"
                    style={{
                      display:
                        !academyQualificationData.nameOfBoard?.length && error
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
                      value={academyQualificationData.nameOfTheInstitution}
                      onChange={handleQualification}
                    />
                  </div>
                  <span
                    id="spanDOB"
                    style={{
                      display:
                        !academyQualificationData.nameOfTheInstitution?.length && error
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
                            name="country"
                            className="form-control ddlCountry"
                            data-val="true"
                            data-val-number="The field CountryId must be a number."
                            id="StudentQualificationVM.CountryId"
                            value={country}
                            onChange={handleCountries}
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
                            !academyQualificationData.countryOfStudy?.length && error
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
                            value={academyQualificationData.stateOfStudy}
                            onChange={handleQualification}
                          >
                            <option value="" disabled selected hidden>
                              Select State
                            </option>
                            {!!states?.length &&
                              states.map((state) => {
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
                            !academyQualificationData.stateOfStudy?.length && error
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
                      value={getPersonalInfo.cityOfStudy}
                      onChange={handleQualification}
                    />
                  </div>
                  <span
                    id="spanDOB"
                    style={{
                      display:
                        !getPersonalInfo.cityOfStudy?.length && error
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
                          value={getPersonalInfo.degreeAwarded}
                          onChange={handleQualification}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !getPersonalInfo.degreeAwarded?.length && error
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
                          value={academyQualificationData.Backlogs}
                          onChange={handleQualification}
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
                        value={academyQualificationData.gradingSystem}
                        onChange={handleQualification}
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
                          !academyQualificationData.gradingSystem?.length && error
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
                    Score<span className="requiretxx">*</span>
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
                      value={academyQualificationData.Score}
                      onChange={handleQualification}
                    />
                  </div>
                  <span
                    id="spanDOB"
                    style={{
                      display:
                        !academyQualificationData.Score?.length && error
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
                      value={academyQualificationData.primaryLanguageOfInstruction}
                      onChange={handleQualification}
                    />
                  </div>
                  <span
                    id="spanDOB"
                    style={{
                      display:
                        !academyQualificationData.primaryLanguageOfInstruction?.length &&
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
                      value={academyQualificationData.startDate}
                      onChange={handleQualification}
                    />
                  </div>
                  <span
                    id="spanDOB"
                    style={{
                      display:
                        !academyQualificationData.startDate?.length && error
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
                      value={academyQualificationData.endDate}
                      onChange={handleQualification}
                    />
                  </div>
                  <span
                    id="spanDOB"
                    style={{
                      display:
                        !academyQualificationData.endDate?.length && error
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
            <div className="row">
              <div className="col-sm-12">
                <div className="register_student_form text-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="btn-add-update-qualification"
                    onClick={handlePersonalInfoSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {!showAcademyFields && (
          <div className="addanotherbtn">
            <button
              type="button"
              className="btn btn-default addanother"
              id="addQualification"
              onClick={() => setShowAcademyFields(true)}
            >
              + ADD ANOTHER
            </button>
          </div>
        )}
        <div className="SPC-Paybtn tabsnextprevbtn">
          <div className="relativepo ">
            <button
              type="button"
              className="btn btn-info btn-continue"
              id="btnWorkContinue"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyQualification;
