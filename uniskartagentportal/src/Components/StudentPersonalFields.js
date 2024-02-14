import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { countries } from "../Utils/StaticData";
import { getStatesApi } from "../redux/getCountriesStates";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleStudentData,
  newStudentRegister,
  studentInfo,
} from "../redux/NewStudentRegistration/Action";
import Swal from "sweetalert2";
import AcademyQualification from "./AcademyQualification";
import WorkExp from "./WorkExp";
import StudentTests from "./StudentTests";
import { formatDate } from "../Utils/Helpers";


const StudentPersonalFields = ({ id, res }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0)
  const [isSameAddress,setIsSaveAddress] = useState(false)
  const [getPersonalInfo, setGetPersonalInfo] = useState({
    _id: id,
    dob: "",
    gender: "",
    maritalStatus: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
    secodeAddress1: "",
    secodeAddress2: "",
    secodeCountry: "",
    secondeState: "",
    secondeCity: "",
    secodePinCode: "",
    passportNo: "",
    issueDate: "",
    expiryData: "",
    issueCountry: "",
    cityOfBirth: "",
    countryOfBirth: "",
    nationality: "",
    citizenship: "",
    isApplicanTACitizenOfMoreThanOneCountry: "false",
    IsTheApplicantLivingAndStudyingInAnyOtherCountry: "false",
    otherNationality: "",
    livingCountry: "",
    isApplicantImmigration: "false",
    immigratedCountry: "",
    DoesApplicantseriousMedicalCondition: "false",
    medicalCondition: "",
    HasApplicantVisaRefusalForAnyCountry: "false",
    refusalVisaCountryName: "",
    refusalVisaType: "",
    HasApplicantEverBeenConvictedOfACriminalOffence: "false",
    criminalOffenceType: "",
    EmergencyContactsName: "",
    EmergencyContactsEmail: "",
    EmergencyContactsPhone: "",
    EmergencyContactsRelationWithApplicant: "",
  });



  const [countryState, setCountryState] = useState([]);
  const [error, setError] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [secondSelectCountry, setSecondSelectedCountry] = useState("");
  const [secondAddressState, setSecondAddressState] = useState([]);
  const handleCountries = async (e, type) => {
    if (type === "secodeCountry") {
      setGetPersonalInfo({ ...getPersonalInfo, secodeCountry: e.target.value });
      setSecondSelectedCountry(e.target.value);
    } else {
      setGetPersonalInfo({ ...getPersonalInfo, country: e.target.value });
      setSelectedCountry(e.target.value);
    }

    const states = await getAllStates(e.target.value);
    type === "secodeCountry"
      ? setSecondAddressState(states)
      : setCountryState(states);
  };
  const handlePersonalInfo = (e, isPhoneField) => {
    if (!!isPhoneField?.name?.length) {
      setGetPersonalInfo({ ...getPersonalInfo, EmergencyContactsPhone: e });
    } else {
      const { value, name } = e.target;
      setGetPersonalInfo((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };
  const isEmpty = (obj) => {
    for (let key in obj) {
      if (
        key !== "isApplicanTACitizenOfMoreThanOneCountry" &&
        key !== "IsTheApplicantLivingAndStudyingInAnyOtherCountry" &&
        key !== "otherNationality" &&
        key !== "livingCountry" &&
        key !== "isApplicantImmigration" &&
        key !== "immigratedCountry" &&
        key !== "DoesApplicantseriousMedicalCondition" &&
        key !== "medicalCondition" &&
        key !== "HasApplicantVisaRefusalForAnyCountry" &&
        key !== "refusalVisaCountryName" &&
        key !== "refusalVisaType" &&
        key !== "HasApplicantEverBeenConvictedOfACriminalOffence" &&
        key !== "criminalOffenceType" &&
        key != "secodeAddress2" &&
        key != "address2" &&
        key != "middleName"
      ) {
        if (obj[key] === "") {
          return true;
        }
      }
    }
    return false;
  };

  const handlePersonalInfoSubmit = async (e) => {
    e.preventDefault()
    const {
      isApplicanTACitizenOfMoreThanOneCountry,
      otherNationality,
      IsTheApplicantLivingAndStudyingInAnyOtherCountry,
      livingCountry,
      isApplicantImmigration,
      immigratedCountry,
      DoesApplicantseriousMedicalCondition,
      medicalCondition,
      HasApplicantVisaRefusalForAnyCountry,
      refusalVisaType,
      refusalVisaCountryName,
      HasApplicantEverBeenConvictedOfACriminalOffence,
      criminalOffenceType,
    } = getPersonalInfo;

    if (isEmpty(getPersonalInfo)) {
      setError(true);
    } else if (
      (isApplicanTACitizenOfMoreThanOneCountry == "true" &&
        !otherNationality?.length) ||
      (IsTheApplicantLivingAndStudyingInAnyOtherCountry == "true" &&
        !livingCountry?.length) ||
      (isApplicantImmigration == "true" && !immigratedCountry?.length) ||
      (DoesApplicantseriousMedicalCondition == "true" &&
        !medicalCondition?.length) ||
      (HasApplicantVisaRefusalForAnyCountry == "true" &&
        !refusalVisaType?.length &&
        !refusalVisaCountryName?.length) ||
      (HasApplicantEverBeenConvictedOfACriminalOffence == "true" &&
        !criminalOffenceType.length)
    ) {
      setError(true);
    } else {
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
            const res = await dispatch(studentInfo(getPersonalInfo));
            if (res.message) {
              setActiveTab(1)
            }
          } catch (error) {
            console.log(error);
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", " :)", "error",);
        }
      });
    }
  };

  const handleAddress = (e) => {
    if (e.target.checked) {
      setIsSaveAddress(e.target.checked)
      setGetPersonalInfo({
        ...getPersonalInfo,
        secodeAddress1: getPersonalInfo.address1,
        secodeAddress2: getPersonalInfo.address1,
        secodeCountry: getPersonalInfo.country,
        secondeState: getPersonalInfo.state,
        secondeCity: getPersonalInfo.city,
        secodePinCode: getPersonalInfo.pinCode,
      });
      setSecondSelectedCountry(getPersonalInfo.country);
    } else {
      setIsSaveAddress(e.target.checked)
      setGetPersonalInfo({
        ...getPersonalInfo,
        secodeAddress1: "",
        secodeAddress2: "",
        secodeCountry: "",
        secondeCity: "",
        secodePinCode: "",
        secondeState: "",
      });
      setSecondSelectedCountry("");
    }
  };
  const getAllStates = async (value) => {
    try {
      const res = await dispatch(getStatesApi(value));
      return res;
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      if (Object.keys(res)?.length) {
        const updatedRes = {};
        for (const key in res) {
          if (typeof res[key] === "boolean") {
            updatedRes[key] = res[key] ? "true" : "false";
          } else {
            updatedRes[key] = res[key];
          }
        }
        setGetPersonalInfo({ ...getPersonalInfo, ...updatedRes });
        setSelectedCountry(res.country);
        setSecondSelectedCountry(res.secodeCountry);
        if (res.country) {
          try {
            const state = await getAllStates(res.country);
            setCountryState([...state]);
          } catch (error) {
            console.error("Error fetching states:", error);
          }
        }

        if (res?.secodeCountry) {
          try {
            const state = await getAllStates(res?.secodeCountry);
            setSecondAddressState([...state]);
          } catch (error) {
            console.error("Error fetching second country states:", error);
          }
        }
      }
    };

    fetchData();
  }, [res]);


  return (
    <div className="tab-pane fade active in" id="Profiletab">
      <div className="MS-tabs">
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className={activeTab === 0 ? "active" : ""}>
            <a
              href="#PersonalInformation"
              aria-controls="personalinformation"
              role="tab"
              data-toggle="tab"
              aria-expanded={activeTab === 0 ? "true" : "false"}
              onClick={() => setActiveTab(0)}
            >
              Personal Information
              <span className="detail-incomplete" id="profile">
                {getPersonalInfo.gender ? "Completed" : "Incomplete"}
               
              </span>
            </a>
          </li>
          <li
            id="QualificationSection"
            className={activeTab === 1 ? "active" : ""}
          >
            <a
              href="#AcademicQualification"
              aria-controls="academicqualification"
              role="tab"
              data-toggle="tab"
              aria-expanded={activeTab === 1 ? "true" : "false"}
              onClick={() => setActiveTab(1)}
            >
              Academic Qualification
              <span className="detail-incomplete" id="academic">
                {getPersonalInfo?.countryOfEducation
                  ? "Completed"
                  : "Incomplete"}
              </span>
            </a>
          </li>
          <li
            id="WorkExperienceSection"
            className={activeTab === 2 ? "active" : ""}
          >
            <a
              href="#WorkExperience"
              aria-controls="workexperience"
              role="tab"
              data-toggle="tab"
              aria-expanded={activeTab === 2 ? "true" : "false"}
              onClick={() => setActiveTab(2)}
            >
              Work Experience
              <span className="detail-incomplete" id="workExp">
              {getPersonalInfo.nameofTheOrganisationAndAddress ? "Completed" : "Optional"}
                
              </span>
            </a>
          </li>
          <li id="testSection" className={activeTab === 3 ? "active" : ""}>
            <a
              href="#Tests"
              aria-controls="tests"
              role="tab"
              data-toggle="tab"
              aria-expanded={activeTab === 3 ? "true" : "false"}
              onClick={() => setActiveTab(3)}
            >
              Tests
              <span className="detail-incomplete" id="testsStatus">
              {!!getPersonalInfo?.studentTests?.length ? "Completed" : "Incomplete"}
              </span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            role="tabpanel"
            className={`tab-pane ${activeTab === 0 ? "active" : ""}`}
            id="PersonalInformation"
          >
            <h3 className="title">Personal Information</h3>
            <form
              id="formPersonalDetailsAll"
              novalidate="novalidate"
              onSubmit={handlePersonalInfoSubmit}
            >
              <div className="editbutton"></div>
              <input
                name="Id"
                data-val="true"
                data-val-number="The field Id must be a number."
                data-val-required="The Id field is required."
                id="Id"
                type="hidden"
                value="563579"
              />
              <div id="profileMoreInfo">
                <div className="PIbox DGMInfo Detail">
                  <div className="row hide">
                    <div className="col-sm-12">
                      <div className="pibox_student_register">
                        <label>
                          Which countries you want to apply to for this student?
                          <span className="requiretxx">*</span>
                        </label>
                        <select
                          data-placeholder="+ Add country, e.g. United States"
                          multiple=""
                          className="chosen-select form-control"
                          id="chooseCountry"
                          style={{ display: "none" }}
                        >
                          <option value="1">United States of America</option>
                          <option value="2">Australia</option>
                          <option value="3">Canada</option>
                          <option value="4">United Kingdom</option>
                          <option value="5">New Zealand</option>
                          <option value="6">Singapore</option>
                          <option value="7">Dubai</option>
                          <option value="8">Ireland</option>
                          <option value="9">Germany</option>
                          <option value="10">France</option>
                          <option value="11">Sweden</option>
                          <option value="12">Netherlands</option>
                          <option value="13">Austria</option>
                          <option value="14">Denmark</option>
                          <option value="15">Finland</option>
                          <option value="16">Italy</option>
                          <option value="17">Hungary</option>
                          <option value="18">Switzerland</option>
                          <option value="19">Spain</option>
                          <option value="20">Lithuania</option>
                          <option value="22">Cyprus</option>
                          <option value="23">Poland</option>
                          <option value="25">Malaysia</option>
                          <option value="26">Mauritius</option>
                          <option value="32">China</option>
                          <option value="35">Vietnam</option>
                          <option value="37">Malta</option>
                          <option value="38">Japan</option>
                          <option value="39">Belgium</option>
                          <option value="40">Russia</option>
                          <option value="41">South Korea</option>
                          <option value="45">India</option>
                          <option value="46">Georgia</option>
                        </select>
                        <div
                          className="chosen-container chosen-container-multi"
                          title=""
                          id="chooseCountry_chosen"
                          style={{ width: 0 }}
                        >
                          <ul className="chosen-choices">
                            <li className="search-field">
                              <input
                                className="chosen-search-input default"
                                type="text"
                                autocomplete="off"
                                value="+ Add country, e.g. United States"
                                style={{ width: "267.087px" }}
                              />
                            </li>
                          </ul>
                          <div className="chosen-drop">
                            <ul className="chosen-results"></ul>
                          </div>
                        </div>
                        <input
                          name="CountriesChosen"
                          className="hidden-val"
                          data-val="true"
                          data-val-required="The CountriesChosen field is required."
                          id="CountriesChosen"
                          type="hidden"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row register_student_form">
                    <div className="col-sm-4">
                      <div className="">
                        <label>
                          Date of Birth
                          <span className="requiretxx">*</span>
                        </label>
                        <input
                          name="dob"
                          className="form-control"
                          id="DOB"
                          placeholder="Select Date"
                          type="date"
                          value={formatDate(getPersonalInfo.dob)}
                          onChange={handlePersonalInfo}
                        />
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !getPersonalInfo.dob?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            DOB is required
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="">
                        <label>
                          Gender
                          <span className="requiretxx">*</span>
                        </label>
                        <div className="select">
                          <select
                            className="form-control"
                            name="gender"
                            id="Gender"
                            value={getPersonalInfo.gender}
                            onChange={handlePersonalInfo}
                          >
                            <option selected="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="OthhandlePersonalInfoStateer">
                              Other
                            </option>
                          </select>
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !getPersonalInfo.gender?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            Gender is required
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="">
                        <label>
                          Marital Status
                          <span className="requiretxx">*</span>
                        </label>
                        <div className="select">
                          <select
                            className="form-control"
                            name="maritalStatus"
                            id="MaritalStatus"
                            value={getPersonalInfo.maritalStatus}
                            onChange={handlePersonalInfo}
                          >
                            <option selected="">Select</option>
                            <option value="Married">Married</option>
                            <option value="Unmarried">Unmarried</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <span
                          id="spanDOB"
                          style={{
                            display:
                              !getPersonalInfo.maritalStatus?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="DOB"
                          data-valmsg-replace="true"
                        >
                          <span id="DOB-error" className="">
                            Marital Status is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="submit-btn"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="title">Mailing Address</h3>
              <div className="editbutton"></div>
              <div
                className="PIbox MailingAddress Old-Detail"
                id="MailingAddress"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        Address 1<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="chkUpd mailing-address text-box single-line"
                          id="MailingAddress_AddressLine1"
                          name="address1"
                          placeholder="Enter Address"
                          type="text"
                          value={getPersonalInfo.address1}
                          onChange={handlePersonalInfo}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !getPersonalInfo.address1?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          Address 1 is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>Address 2</label>
                      <div className="dvalue">
                        <input
                          className="mailing-address text-box single-line"
                          id="MailingAddress_AddressLine2"
                          name="address2"
                          placeholder="Enter Address"
                          type="text"
                          value={getPersonalInfo.address2}
                          onChange={handlePersonalInfo}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        Country
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <div className="select">
                          <select
                            name="country"
                            className="form-control chkUpd mailing-address valid"
                            data-val="true"
                            data-val-number="The field CountryId must be a number."
                            id="MailingAddress.CountryId"
                            aria-required="true"
                            aria-invalid="false"
                            value={selectedCountry}
                            onChange={(e) => handleCountries(e, "firstCountry")}
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
                        <span
                          className="field-validation-valid text-danger"
                          data-valmsg-for="CountryId"
                          data-valmsg-replace="true"
                        ></span>
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !getPersonalInfo.country?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          country is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        State
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <div className="select">
                          <select
                            name="state"
                            className="form-control chkUpd mailing-address valid"
                            data-val="true"
                            data-val-number="The field StateId must be a number."
                            id="MailingAddress.StateId"
                            aria-required="true"
                            aria-invalid="false"
                            value={getPersonalInfo.state}
                            onChange={handlePersonalInfo}
                          >
                            <option value="" disabled selected hidden>
                              Select State
                            </option>
                            {!!countryState?.length &&
                              countryState.map((state) => {
                                return (
                                  <option value={state.name}>
                                    {state.name}
                                  </option>
                                );
                              })}
                          </select>
                          <span
                            id="spanDOB"
                            style={{
                              display:
                                !getPersonalInfo.state?.length && error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="DOB"
                            data-valmsg-replace="true"
                          >
                            <span id="DOB-error" className="">
                              state is required
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        City
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="chkUpd mailing-address text-box single-line"
                          id="MailingAddress_City"
                          name="city"
                          placeholder="Enter City"
                          type="text"
                          value={getPersonalInfo.city}
                          onChange={handlePersonalInfo}
                        />
                      </div>
                    </div>
                    <span
                      id="spanDOB"
                      style={{
                        display:
                          !getPersonalInfo.city?.length && error
                            ? "block"
                            : "none",
                      }}
                      className="text-danger field-validation-error"
                      data-valmsg-for="DOB"
                      data-valmsg-replace="true"
                    >
                      <span id="DOB-error" className="">
                        city is required
                      </span>
                    </span>
                  </div>
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        Pincode
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="chkUpd mailing-address text-box single-line"
                          id="MailingAddress_Pincode"
                          name="pinCode"
                          placeholder="Enter Pincode"
                          type="text"
                          value={getPersonalInfo.pinCode}
                          onChange={handlePersonalInfo}
                        />
                      </div>
                    </div>
                    <span
                      id="spanDOB"
                      style={{
                        display:
                          !getPersonalInfo.pinCode?.length && error
                            ? "block"
                            : "none",
                      }}
                      className="text-danger field-validation-error"
                      data-valmsg-for="DOB"
                      data-valmsg-replace="true"
                    >
                      <span id="DOB-error" className="">
                        pincode is required
                      </span>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="submit-btn"></div>
                  </div>
                </div>
              </div>
              <h3 className="title">Permanent Address</h3>
              <div className="editbutton"></div>
              <div
                className="PIbox PermanentAddress Old-Detail"
                id="PermanentAddress"
              >
                <div className="row">
                  <div className="col-sm-12" style={{ marginTop: 0 }}>
                    <div className="Samemaillingaddress samemailing-checkbox tooltip-holder">
                      <div className="tooltip mailingaddress-tooltip">
                        <div className="bottom">
                          Please fill the mandatory details of mailing address
                          section.
                        </div>
                        <input
                          type="checkbox"
                          className="chk_university MS-tabs Samemaillingaddress samemailing-checkbox"
                          id="chkIsSameMailing"
                          name="PermanentAddress.SameAsMailingAddress"
                          value="true"
                          disabled=""
                          onChange={handleAddress}
                        />
                        <label for="chkIsSameMailing">
                          <span>Same as mailing address</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        Address 1<span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="permanent-address text-box single-line"
                          data-mailingaddress-value=""
                          id="PermanentAddress_AddressLine1"
                          name="secodeAddress1"
                          placeholder="Enter Address"
                          type="text"
                          value={getPersonalInfo.secodeAddress1}
                          onChange={handlePersonalInfo}
                          disabled={isSameAddress}
                        />
                      </div>
                    </div>
                    <span
                      id="spanDOB"
                      style={{
                        display:
                          !getPersonalInfo.secodeAddress1?.length && error
                            ? "block"
                            : "none",
                      }}
                      className="text-danger field-validation-error"
                      data-valmsg-for="DOB"
                      data-valmsg-replace="true"
                    >
                      <span id="DOB-error" className="">
                        Address 1 is required
                      </span>
                    </span>
                  </div>
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>Address 2</label>
                      <div className="dvalue">
                        <input
                          className="permanent-address text-box single-line"
                          data-mailingaddress-value=""
                          id="PermanentAddress_AddressLine2"
                          name="secodeAddress2"
                          placeholder="Enter Address"
                          type="text"
                          value={getPersonalInfo.secodeAddress2}
                          onChange={handlePersonalInfo}
                          disabled={isSameAddress}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        Country
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <div className="select">
                          <select
                            name="secodeCountry"
                            className="form-control permanent-address valid"
                            data-mailingaddress-value=""
                            data-val="true"
                            data-val-number="The field PermanentAddressCountryId must be a number."
                            data-val-required="The PermanentAddressCountryId field is required."
                            id="PermanentAddress.CountryId"
                            aria-required="true"
                            aria-invalid="false"
                            value={secondSelectCountry}
                            onChange={(e) =>
                              handleCountries(e, "secodeCountry")
                            }
                            disabled={isSameAddress}
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
                          <span
                            id="spanDOB"
                            style={{
                              display:
                                !getPersonalInfo.secodeCountry?.length && error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="DOB"
                            data-valmsg-replace="true"
                          >
                            <span id="DOB-error" className="">
                              country is required
                            </span>
                          </span>
                        </div>
                        <span
                          className="field-validation-valid text-danger"
                          data-valmsg-for="PermanentAddressCountryId"
                          data-valmsg-replace="true"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        State
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <div className="select">
                          <select
                            name="secondeState"
                            className="form-control permanent-address valid"
                            data-mailingaddress-value="0"
                            data-val="true"
                            data-val-number="The field PermanentAddressStateId must be a number."
                            id="PermanentAddress.StateId"
                            aria-required="true"
                            aria-invalid="false"
                            value={getPersonalInfo.secondeState}
                            onChange={handlePersonalInfo}
                            disabled={isSameAddress}
                          >
                            <option value="" disabled selected hidden>
                              Select State
                            </option>
                            {isSameAddress && (
                              <option value="" disabled selected hidden>
                                {getPersonalInfo.secondeState}
                              </option>
                            )}
                            {!isSameAddress &&
                              !!secondAddressState?.length &&
                              secondAddressState.map((state) => {
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
                            !getPersonalInfo.secondeState?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          State is required
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        City
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="permanent-address text-box single-line"
                          data-mailingaddress-value=""
                          id="PermanentAddress_City"
                          name="secondeCity"
                          placeholder="Enter City"
                          type="text"
                          value={getPersonalInfo.secondeCity}
                          onChange={handlePersonalInfo}
                          disabled={isSameAddress}
                        />
                      </div>
                    </div>
                    <span
                      id="spanDOB"
                      style={{
                        display:
                          !getPersonalInfo.secondeCity?.length && error
                            ? "block"
                            : "none",
                      }}
                      className="text-danger field-validation-error"
                      data-valmsg-for="DOB"
                      data-valmsg-replace="true"
                    >
                      <span id="DOB-error" className="">
                        city is required
                      </span>
                    </span>
                  </div>
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        Pincode
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="permanent-address text-box single-line"
                          data-mailingaddress-value=""
                          id="PermanentAddress_Pincode"
                          name="secodePinCode"
                          placeholder="Enter Pincode"
                          type="text"
                          value={getPersonalInfo.secodePinCode}
                          onChange={handlePersonalInfo}
                          disabled={isSameAddress}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !getPersonalInfo.secodePinCode?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          pincode is required
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="submit-btn"></div>
                  </div>
                </div>
              </div>
              <h3 className="title">Passport Information</h3>
              <div className="editbutton"></div>
              <div
                className="PIbox PassportInformation Old-Detail"
                id="PassportInformation"
              >
                <div className="row">
                  <div className="col-sm-4">
                    <div className="pibox_student_register">
                      <label>
                        Passport Number
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          id="Passport_PassportNumber"
                          name="passportNo"
                          placeholder="Enter Number"
                          type="text"
                          value={getPersonalInfo.passportNo}
                          onChange={handlePersonalInfo}
                        />
                      </div>
                      <span
                        id="spanDOB"
                        style={{
                          display:
                            !getPersonalInfo.passportNo?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="DOB"
                        data-valmsg-replace="true"
                      >
                        <span id="DOB-error" className="">
                          passport number is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="pibox_student_register">
                      <label>
                        Issue Date
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          name="issueDate"
                          className="form-control"
                          id="PassportIssueDate"
                          placeholder="Enter Date"
                          type="date"
                          value={formatDate(getPersonalInfo.issueDate)}
                          onChange={handlePersonalInfo}
                        />
                        <span
                          id="spanPassportIssueDate"
                          style={{
                            display:
                              !getPersonalInfo.issueDate?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="IssueDate"
                          data-valmsg-replace="true"
                        >
                          <span id="PassportNumber-error" className="">
                            Passport issue date is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="pibox_student_register">
                      <label>
                        Expiry Date
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          name="expiryData"
                          className="form-control"
                          id="PassportExpiryDate"
                          placeholder="Enter Date"
                          type="date"
                          value={formatDate(getPersonalInfo.expiryData)}
                          onChange={handlePersonalInfo}
                        />
                        <span
                          id="spanPassportExpiryDate"
                          style={{
                            display:
                              !getPersonalInfo.expiryData?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="ExpiryDate"
                          data-valmsg-replace="true"
                        >
                          <span id="PassportNumber-error" className="">
                            Passport expiry date is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="pibox_student_register">
                      <label>
                        Issue Country
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <div className="select">
                          <select
                            name="issueCountry"
                            className="form-control valid"
                            data-val="true"
                            data-val-number="The field IssueCountryId must be a number."
                            data-val-required="The IssueCountryId field is required."
                            id="PassportIssue.CountryId"
                            aria-required="true"
                            aria-invalid="false"
                            value={getPersonalInfo.issueCountry}
                            onChange={handlePersonalInfo}
                          >
                            <option value="" disabled selected hidden>
                              Passport Issue Country
                            </option>
                            {countries.map((item) => {
                              return (
                                <option value={item.value}>{item.value}</option>
                              );
                            })}
                          </select>
                        </div>
                        <span
                          id="spanPassportExpiryDate"
                          style={{
                            display:
                              !getPersonalInfo.issueCountry?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="ExpiryDate"
                          data-valmsg-replace="true"
                        >
                          <span id="PassportNumber-error" className="">
                            Passport issue country name is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="pibox_student_register">
                      <label>
                        City of Birth
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          id="Passport_CityofBirth"
                          name="cityOfBirth"
                          placeholder="Enter City"
                          type="text"
                          value={getPersonalInfo.cityOfBirth}
                          onChange={handlePersonalInfo}
                        />
                      </div>
                      <span
                        id="spanPassportExpiryDate"
                        style={{
                          display:
                            !getPersonalInfo.cityOfBirth?.length && error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="ExpiryDate"
                        data-valmsg-replace="true"
                      >
                        <span id="PassportNumber-error" className="">
                          city of birth is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="pibox_student_register">
                      <label>
                        Country of Birth
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <div className="select">
                          <select
                            name="countryOfBirth"
                            className="form-control valid"
                            data-val="true"
                            data-val-number="The field CountryOfBirthId must be a number."
                            data-val-required="The CountryOfBirthId field is required."
                            id="Passport.CountryOfBirthId"
                            aria-required="true"
                            aria-invalid="false"
                            value={getPersonalInfo.countryOfBirth}
                            onChange={handlePersonalInfo}
                          >
                            <option value="" disabled selected hidden>
                              Country of Birth
                            </option>
                            {countries.map((item) => {
                              return (
                                <option value={item.value}>{item.value}</option>
                              );
                            })}
                          </select>
                        </div>
                        <span
                          id="spanPassportExpiryDate"
                          style={{
                            display:
                              !getPersonalInfo.countryOfBirth?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="ExpiryDate"
                          data-valmsg-replace="true"
                        >
                          <span id="PassportNumber-error" className="">
                            country of birth is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="submit-btn"></div>
                  </div>
                </div>
              </div>
              <h3 className="title">Nationality</h3>
              <div className="editbutton"></div>
              <div className="PIbox Nationality Old-Detail" id="Nationality">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        Nationality
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <div className="select">
                          <select
                            name="nationality"
                            className="form-control"
                            data-val="true"
                            data-val-number="The field NationalityId must be a number."
                            data-val-required="The NationalityId field is required."
                            id="Nationality.NationalityId"
                            value={getPersonalInfo.nationality}
                            onChange={handlePersonalInfo}
                          >
                            <option value="" disabled selected hidden>
                              Enter Nationality
                            </option>
                            {countries.map((item) => {
                              return (
                                <option value={item.value}>{item.value}</option>
                              );
                            })}
                          </select>
                        </div>
                        <span
                          id="spanPassportExpiryDate"
                          style={{
                            display:
                              !getPersonalInfo.nationality?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="ExpiryDate"
                          data-valmsg-replace="true"
                        >
                          <span id="PassportNumber-error" className="">
                            nationality is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        Citizenship
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <div className="select">
                          <select
                            name="citizenship"
                            className="form-control"
                            data-val="true"
                            data-val-number="The field CitizenshipId must be a number."
                            data-val-required="The CitizenshipId field is required."
                            id="Nationality.CitizenshipId"
                            value={getPersonalInfo.citizenship}
                            onChange={handlePersonalInfo}
                          >
                            <option value="" disabled selected hidden>
                              Enter Citizenship
                            </option>
                            {countries.map((item) => {
                              return (
                                <option value={item.value}>{item.value}</option>
                              );
                            })}
                          </select>
                        </div>
                        <span
                          id="spanPassportExpiryDate"
                          style={{
                            display:
                              !getPersonalInfo.citizenship?.length && error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="ExpiryDate"
                          data-valmsg-replace="true"
                        >
                          <span id="PassportNumber-error" className="">
                            citizenship is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 pibox_student_register">
                    <label>
                      Is the applicant a citizen of more than one country?
                      <span className="requiretxx">*</span>
                    </label>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="radiobtn">
                          <input
                            id="chkNo"
                            className="toggle toggle-left"
                            name="isApplicanTACitizenOfMoreThanOneCountry"
                            type="radio"
                            checked={
                              getPersonalInfo.isApplicanTACitizenOfMoreThanOneCountry ===
                              "false"
                                ? "checked"
                                : ""
                            }
                            value={false}
                            onChange={handlePersonalInfo}
                          />
                          <label for="chkNo" className="btn">
                            No
                          </label>
                          <input
                            id="chkYes"
                            className="toggle toggle-right"
                            name="isApplicanTACitizenOfMoreThanOneCountry"
                            value={true}
                            type="radio"
                            checked={
                              getPersonalInfo.isApplicanTACitizenOfMoreThanOneCountry ===
                              "true"
                                ? "checked"
                                : false
                            }
                            onChange={handlePersonalInfo}
                          />
                          <label for="chkYes" className="btn">
                            Yes
                          </label>
                        </div>
                        <input
                          type="hidden"
                          value="Yes"
                          name="isApplicanTACitizenOfMoreThanOneCountry"
                        />
                      </div>
                      <div className="col-sm-8">
                        <div className="">
                          <div className="select">
                            <select
                              data-placeholder="Enter 
                                                        Nationality"
                              name="otherNationality"
                              multiple=""
                              className="form-control"
                              id="chooseCitizenshipCountry"
                              value={getPersonalInfo.otherNationality}
                              onChange={handlePersonalInfo}
                              disabled={
                                getPersonalInfo.isApplicanTACitizenOfMoreThanOneCountry ===
                                  "false" && "disable"
                              }
                            >
                              <option value="" disabled selected hidden>
                                Enter Nationality
                              </option>
                              {countries.map((item) => {
                                return (
                                  <option value={item.value}>
                                    {item.value}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <input
                            name="Nationality.CitizenCountries"
                            className="hidden-val"
                            id="CitizenCountries"
                            type="hidden"
                            onChange={handlePersonalInfo}
                          />

                          <span
                            id="spanPassportExpiryDate"
                            style={{
                              display:
                                getPersonalInfo.isApplicanTACitizenOfMoreThanOneCountry ===
                                  "true" &&
                                !getPersonalInfo.otherNationality?.length &&
                                error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="ExpiryDate"
                            data-valmsg-replace="true"
                          >
                            <span id="PassportNumber-error" className="">
                              other citizenship is required
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 pibox_student_register">
                    <label>
                      Is the applicant living and studying in any other country?
                      <span className="requiretxx">*</span>
                    </label>
                    <div className="row">
                      <div className="col-sm-4 ">
                        <div className="radiobtn">
                          <input
                            id="lusNo"
                            className="toggle toggle-left"
                            name="IsTheApplicantLivingAndStudyingInAnyOtherCountry"
                            value="false"
                            type="radio"
                            checked={
                              getPersonalInfo.IsTheApplicantLivingAndStudyingInAnyOtherCountry ===
                              "false"
                                ? "checked"
                                : ""
                            }
                            onChange={handlePersonalInfo}
                          />
                          <label for="lusNo" className="btn">
                            No
                          </label>
                          <input
                            id="lusYes"
                            className="toggle toggle-right"
                            name="IsTheApplicantLivingAndStudyingInAnyOtherCountry"
                            value="true"
                            type="radio"
                            checked={
                              getPersonalInfo.IsTheApplicantLivingAndStudyingInAnyOtherCountry ===
                              "true"
                                ? "checked"
                                : ""
                            }
                            onChange={handlePersonalInfo}
                          />
                          <label for="lusYes" className="btn">
                            Yes
                          </label>
                        </div>
                        <input
                          type="hidden"
                          value="false"
                          name="Nationality.IsLivingUS"
                        />
                      </div>
                      <div className="col-sm-8">
                        <div className="">
                          <div className="select">
                            <select
                              name="livingCountry"
                              className="form-control"
                              data-val="true"
                              data-val-number="The field LivingCountryId must be a number."
                              id="LivingCountryId"
                              disabled={
                                getPersonalInfo.IsTheApplicantLivingAndStudyingInAnyOtherCountry ===
                                  "false" && "disable"
                              }
                              value={getPersonalInfo.livingCountry}
                              onChange={handlePersonalInfo}
                            >
                              <option value="" disabled selected hidden>
                                Living Country
                              </option>
                              {countries.map((item) => {
                                return (
                                  <option value={item.value}>
                                    {item.value}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <span
                          id="spanPassportExpiryDate"
                          style={{
                            display:
                              getPersonalInfo.IsTheApplicantLivingAndStudyingInAnyOtherCountry ===
                                "true" &&
                              !getPersonalInfo.livingCountry?.length &&
                              error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="ExpiryDate"
                          data-valmsg-replace="true"
                        >
                          <span id="PassportNumber-error" className="">
                            other citizenship is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="submit-btn"></div>
                  </div>
                </div>
              </div>
              <h3 className="title">Background Info</h3>
              <div className="editbutton"></div>
              <div
                className="PIbox BackgroundInfo Old-Detail"
                id="BackgroundInfo"
              >
                <div className="row pibox_student_register">
                  <div className="col-sm-6">
                    <label>
                      Has applicant applied for any type of immigration into any
                      country?
                    </label>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="radiobtn">
                          <input
                            id="imcNo"
                            className="toggle toggle-left"
                            name="isApplicantImmigration"
                            value="false"
                            type="radio"
                            checked={
                              getPersonalInfo.isApplicantImmigration === "false"
                                ? "checked"
                                : ""
                            }
                            onChange={handlePersonalInfo}
                          />
                          <label for="imcNo" className="btn">
                            No
                          </label>
                          <input
                            id="imcYes"
                            className="toggle toggle-right"
                            name="isApplicantImmigration"
                            value="true"
                            type="radio"
                            checked={
                              getPersonalInfo.isApplicantImmigration === "true"
                                ? "checked"
                                : ""
                            }
                            onChange={handlePersonalInfo}
                          />
                          <label for="imcYes" className="btn">
                            Yes
                          </label>
                        </div>
                        <input
                          type="hidden"
                          value="false"
                          name="isApplicantImmigration"
                        />
                      </div>
                      <div className="col-sm-8">
                        <div className="">
                          <div className="select">
                            <select
                              name="immigratedCountry"
                              className="form-control"
                              id="ImmigrationCountryValue"
                              disabled={
                                getPersonalInfo.isApplicantImmigration ===
                                  "false" && "disabled"
                              }
                              value={getPersonalInfo.immigratedCountry}
                              onChange={handlePersonalInfo}
                            >
                              <option value="" disabled selected hidden>
                                Select Country
                              </option>

                              {countries.map((item) => {
                                return (
                                  <option value={item.value}>
                                    {item.value}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <span
                            id="spanPassportExpiryDate"
                            style={{
                              display:
                                getPersonalInfo.isApplicantImmigration ===
                                  "true" &&
                                !getPersonalInfo.immigratedCountry?.length &&
                                error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="ExpiryDate"
                            data-valmsg-replace="true"
                          >
                            <span id="PassportNumber-error" className="">
                              immigration country name is required
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>
                      Does applicant suffer from a serious medical condition?
                    </label>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="radiobtn">
                          <input
                            id="mecNo"
                            className="toggle toggle-left"
                            name="DoesApplicantseriousMedicalCondition"
                            value="false"
                            type="radio"
                            checked={
                              getPersonalInfo.DoesApplicantseriousMedicalCondition ===
                              "false"
                                ? "checked"
                                : ""
                            }
                            onChange={handlePersonalInfo}
                          />
                          <label for="mecNo" className="btn">
                            No
                          </label>
                          <input
                            id="mecYes"
                            className="toggle toggle-right"
                            name="DoesApplicantseriousMedicalCondition"
                            checked={
                              getPersonalInfo.DoesApplicantseriousMedicalCondition ===
                              "true"
                                ? "checked"
                                : ""
                            }
                            value="true"
                            type="radio"
                            onChange={handlePersonalInfo}
                          />
                          <label for="mecYes" className="btn">
                            Yes
                          </label>
                        </div>
                        <input
                          type="hidden"
                          value="false"
                          name="DoesApplicantseriousMedicalCondition"
                        />
                      </div>
                      <div className="col-sm-8">
                        <div className="">
                          <input
                            name="medicalCondition"
                            className="form-control"
                            id="MedicalConditionValue"
                            placeholder="Specify Here..."
                            type="text"
                            disabled={
                              getPersonalInfo.DoesApplicantseriousMedicalCondition ===
                                "false" && "disabled"
                            }
                            value={getPersonalInfo.medicalCondition}
                            onChange={handlePersonalInfo}
                          />
                        </div>
                        <span
                          id="spanPassportExpiryDate"
                          style={{
                            display:
                              getPersonalInfo.DoesApplicantseriousMedicalCondition ===
                                "true" &&
                              !getPersonalInfo.medicalCondition?.length &&
                              error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="ExpiryDate"
                          data-valmsg-replace="true"
                        >
                          <span id="PassportNumber-error" className="">
                            medicalCondition is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label>Has applicant Visa refusal for any country?</label>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="radiobtn">
                          <input
                            id="rlcNo"
                            className="toggle toggle-left"
                            name="HasApplicantVisaRefusalForAnyCountry"
                            value="false"
                            type="radio"
                            checked={
                              getPersonalInfo.HasApplicantVisaRefusalForAnyCountry ===
                              "false"
                                ? "checked"
                                : ""
                            }
                            onChange={handlePersonalInfo}
                          />
                          <label for="rlcNo" className="btn">
                            No
                          </label>
                          <input
                            id="rlcYes"
                            className="toggle toggle-right"
                            name="HasApplicantVisaRefusalForAnyCountry"
                            value="true"
                            type="radio"
                            checked={
                              getPersonalInfo.HasApplicantVisaRefusalForAnyCountry ===
                              "true"
                                ? "checked"
                                : ""
                            }
                            onChange={handlePersonalInfo}
                          />
                          <label for="rlcYes" className="btn">
                            Yes
                          </label>
                        </div>
                        <input
                          type="hidden"
                          value="false"
                          name="HasApplicantVisaRefusalForAnyCountry"
                        />
                      </div>
                      <div className="col-sm-8">
                        <div className="margin-bottom-10">
                          <div className="select">
                            <select
                              name="refusalVisaCountryName"
                              className="form-control"
                              id="RefusalCountryValue"
                              disabled={
                                getPersonalInfo.HasApplicantVisaRefusalForAnyCountry ===
                                  "false" && "disabled"
                              }
                              value={getPersonalInfo.refusalVisaCountryName}
                              onChange={handlePersonalInfo}
                            >
                              <option value="" disabled selected hidden>
                                Select Country
                              </option>
                              {countries.map((item) => {
                                return (
                                  <option value={item.value}>
                                    {item.value}
                                  </option>
                                );
                              })}
                            </select>
                            <span
                              id="spanPassportExpiryDate"
                              style={{
                                display:
                                  getPersonalInfo.HasApplicantVisaRefusalForAnyCountry ===
                                    "true" &&
                                  !getPersonalInfo.refusalVisaCountryName
                                    ?.length &&
                                  error
                                    ? "block"
                                    : "none",
                              }}
                              className="text-danger field-validation-error"
                              data-valmsg-for="ExpiryDate"
                              data-valmsg-replace="true"
                            >
                              <span id="PassportNumber-error" className="">
                                refusal country name is required
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="pibox_student_register">
                          <input
                            name="refusalVisaType"
                            className="form-control"
                            id="RefusalCountryAdditional"
                            placeholder="Type of Visa"
                            type="text"
                            disabled={
                              getPersonalInfo.HasApplicantVisaRefusalForAnyCountry ===
                                "false" && "disabled"
                            }
                            value={getPersonalInfo.refusalVisaType}
                            onChange={handlePersonalInfo}
                          />
                        </div>
                        <span
                          id="spanPassportExpiryDate"
                          style={{
                            display:
                              getPersonalInfo.HasApplicantVisaRefusalForAnyCountry ===
                                "true" &&
                              !getPersonalInfo.refusalVisaType?.length &&
                              error
                                ? "block"
                                : "none",
                          }}
                          className="text-danger field-validation-error"
                          data-valmsg-for="ExpiryDate"
                          data-valmsg-replace="true"
                        >
                          <span id="PassportNumber-error" className="">
                            refusal reason is required
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>
                      Has applicant ever been convicted of a criminal offence?
                    </label>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="radiobtn">
                          <input
                            id="cloNo"
                            className="toggle toggle-left"
                            name="HasApplicantEverBeenConvictedOfACriminalOffence"
                            value="false"
                            type="radio"
                            checked={
                              getPersonalInfo.HasApplicantEverBeenConvictedOfACriminalOffence ===
                              "false"
                                ? "checked"
                                : ""
                            }
                            onChange={handlePersonalInfo}
                          />
                          <label for="cloNo" className="btn">
                            No
                          </label>
                          <input
                            id="cloYes"
                            className="toggle toggle-right"
                            name="HasApplicantEverBeenConvictedOfACriminalOffence"
                            value="true"
                            checked={
                              getPersonalInfo.HasApplicantEverBeenConvictedOfACriminalOffence ===
                              "true"
                                ? "checked"
                                : ""
                            }
                            type="radio"
                            onChange={handlePersonalInfo}
                          />
                          <label for="cloYes" className="btn">
                            Yes
                          </label>
                        </div>
                        <input
                          type="hidden"
                          value="false"
                          name="HasApplicantEverBeenConvictedOfACriminalOffence"
                        />
                      </div>
                      <div className="col-sm-8">
                        <div className="pibox_student_register">
                          <input
                            name="criminalOffenceType"
                            className="form-control"
                            id="CriminalOffenceValue"
                            placeholder="Specify Here..."
                            type="text"
                            value={getPersonalInfo.criminalOffenceType}
                            disabled={
                              getPersonalInfo.HasApplicantEverBeenConvictedOfACriminalOffence ===
                                "false" && "checked"
                            }
                            onChange={handlePersonalInfo}
                          />
                          <span
                            id="spanPassportExpiryDate"
                            style={{
                              display:
                                getPersonalInfo.HasApplicantEverBeenConvictedOfACriminalOffence ===
                                  "true" &&
                                !getPersonalInfo.criminalOffenceType?.length &&
                                error
                                  ? "block"
                                  : "none",
                            }}
                            className="text-danger field-validation-error"
                            data-valmsg-for="ExpiryDate"
                            data-valmsg-replace="true"
                          >
                            <span id="PassportNumber-error" className="">
                              crime type is required
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="submit-btn"></div>
                  </div>
                </div>
              </div>
              <h3 className="title">Important Contacts</h3>
              <div className="editbutton"></div>
              <div
                className="PIbox ImportantContacts Old-Detail"
                id="ImportantContacts"
              >
                <h4>Emergency Contacts</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        Name
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          id="StudentEmergencyContact_ContactName"
                          name="EmergencyContactsName"
                          placeholder="Enter Name"
                          type="text"
                          value={getPersonalInfo.EmergencyContactsName}
                          onChange={handlePersonalInfo}
                        />
                      </div>
                      <span
                        id="spanPassportExpiryDate"
                        style={{
                          display:
                            !getPersonalInfo.EmergencyContactsName?.length &&
                            error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="ExpiryDate"
                        data-valmsg-replace="true"
                      >
                        <span id="PassportNumber-error" className="">
                          name is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        Email
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          id="StudentEmergencyContact_ContactEmail"
                          name="EmergencyContactsEmail"
                          placeholder="Enter Email Address"
                          type="text"
                          value={getPersonalInfo.EmergencyContactsEmail}
                          onChange={handlePersonalInfo}
                        />
                      </div>
                      <span
                        id="spanPassportExpiryDate"
                        style={{
                          display:
                            !getPersonalInfo.EmergencyContactsEmail?.length &&
                            error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="ExpiryDate"
                        data-valmsg-replace="true"
                      >
                        <span id="PassportNumber-error" className="">
                          email is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        Phone
                        <span className="requiretxx">*</span>
                      </label>
                      <PhoneInput
                        country={"in"}
                        id="phoneno"
                        onChange={(e, something) =>
                          handlePersonalInfo(e, something)
                        }
                        value={getPersonalInfo.EmergencyContactsPhone}
                      />
                      <span
                        id="spanPassportExpiryDate"
                        style={{
                          display:
                            !getPersonalInfo.EmergencyContactsPhone?.length &&
                            error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="ExpiryDate"
                        data-valmsg-replace="true"
                      >
                        <span id="PassportNumber-error" className="">
                          phone number is required
                        </span>
                      </span>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <div className="submit-btn"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="pibox_student_register">
                      <label>
                        Relation with Applicant
                        <span className="requiretxx">*</span>
                      </label>
                      <div className="dvalue">
                        <input
                          className="text-box single-line"
                          id="StudentEmergencyContact_Relation"
                          name="EmergencyContactsRelationWithApplicant"
                          placeholder="Enter Relation"
                          type="text"
                          value={
                            getPersonalInfo.EmergencyContactsRelationWithApplicant
                          }
                          onChange={handlePersonalInfo}
                        />
                      </div>
                      <span
                        id="spanPassportExpiryDate"
                        style={{
                          display:
                            !getPersonalInfo
                              .EmergencyContactsRelationWithApplicant?.length &&
                            error
                              ? "block"
                              : "none",
                        }}
                        className="text-danger field-validation-error"
                        data-valmsg-for="ExpiryDate"
                        data-valmsg-replace="true"
                      >
                        <span id="PassportNumber-error" className="">
                          Relation with Applicant is required
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="submit-btn text-right tabsnextprevbtn">
                        <div className="relativepo">
                          <button
                            className="btn btn-primary"
                            id="btn-test-submit"
                          >
                            Save and continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div id="modalSaveBeforeLeave" className="modal">
              <div
                className="modal-dialog modal-paylater SaveBeforeLeave"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header padding-top-0">
                    <h4 className="modal-title font-size22 text-black">
                      WAIT!
                      <br />
                      Want to save the form?
                    </h4>
                  </div>
                  <div className="modal-body">
                    <button
                      className="btn btn-info pull-right margin-bottom-10"
                      id="btn-save-personal-details"
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-info bg-red  pull-left margin-bottom-10"
                      id="btn-leave"
                    >
                      don’t save
                    </button>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AcademyQualification
            setGetPersonalInfo={setGetPersonalInfo}
            getPersonalInfo={getPersonalInfo}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            id={id}
          />

          <WorkExp
            setGetPersonalInfo={setGetPersonalInfo}
            getPersonalInfo={getPersonalInfo}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            id={id}
          />
          <StudentTests
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            id={id}
            getPersonalInfo={getPersonalInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentPersonalFields;
