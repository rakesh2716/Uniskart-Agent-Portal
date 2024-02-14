import React, { useEffect, useState } from "react";
import { tests } from "../Utils/StaticData";
import Swal from "sweetalert2";
import { getSingleStudentData, studentInfo } from "../redux/NewStudentRegistration/Action";
import { useDispatch, useSelector } from "react-redux";

const StudentTests = ({ activeTab, setActiveTab, id, getPersonalInfo }) => {
  const dispatch = useDispatch();
  const [allTest, setAllTest] = useState(tests);

  const handleOpenClose = (e, i, item) => {
    e.preventDefault();
    setAllTest((prevState) => {
      return prevState.map((item, index) => {
        if (index === i) {
          return { ...item, isOpen: !item.isOpen };
        } else {
          return item;
        }
      });
    });
  };

  function capitalizeFirstLetter(input) {
    return input
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  const validateTestScore = (
    fieldName,
    value,
    minValue,
    maxValue,
    errorMsg,
    tranceVal,
    types,
    item
  ) => {
    if (types == "date") {
      return { [fieldName + "Error"]: "", [fieldName]: value };
    }
    if (types === "isCheck") {
      if (
        item.isIeltsYetToReceive === "true" &&
        fieldName === "isIeltsWaiver"
      ) {
        return {
          [fieldName + "Error"]: "",
          isIeltsWaiver: "true",
          isIeltsYetToReceive: "false",
        };
      } else if (
        item.isIeltsWaiver === "true" &&
        fieldName === "isIeltsYetToReceive"
      ) {
        return {
          [fieldName + "Error"]: "",
          isIeltsYetToReceive: "true",
          isIeltsWaiver: "false",
        };
      } else {
        return { [fieldName + "Error"]: "", [fieldName]: value };
      }
    }
    if (types === "isStringInput") {
      return {
        [fieldName + "Error"]: "",
        [fieldName]: capitalizeFirstLetter(value),
      };
    }
    if (value === "") {
      return { [fieldName + "Error"]: "", [fieldName]: value };
    }

    const score = parseInt(value.slice(0, tranceVal));
    if (isNaN(score) || score < minValue || score > maxValue) {
      return { [fieldName + "Error"]: errorMsg, [fieldName]: "" };
    }
    return { [fieldName + "Error"]: "", [fieldName]: value };
  };

  const handleTestChange = (e, index, fieldName, testName, name) => {
    const { value } = e.target;
    setAllTest((prevState) => {
      return prevState.map((item, i) => {
        if (i === index) {
          switch (fieldName) {
            case "testOverallScore":
              return {
                ...item,
                ...validateTestScore(
                  fieldName,
                  value,
                  0,
                  testName === "GRE"
                    ? 340
                    : testName == "TOEFL"
                    ? 120
                    : testName === "PTE"
                    ? 90
                    : testName === "DET"
                    ? 160
                    : testName === "SAT"
                    ? 1600
                    : testName === "ACT"
                    ? 36
                    : 800,
                  `Overall score should be in between 0 & ${
                    testName === "GRE"
                      ? "340"
                      : testName == "TOEFL"
                      ? "120"
                      : testName === "PTE"
                      ? "90"
                      : testName === "DET"
                      ? 160
                      : testName === "SAT"
                      ? "1600"
                      : testName === "ACT"
                      ? "36"
                      : "800"
                  }`,
                  testName === "PTE" || testName === "ACT"
                    ? 2
                    : testName === "SAT"
                    ? 4
                    : 3
                ),
              };
            case "testQuantitative":
            case "testVerbal":
              return {
                ...item,
                ...validateTestScore(
                  fieldName,
                  value,
                  0,
                  testName == "GMAT" ? 400 : 170,
                  `${name} score should be less than or equal to ${
                    testName == "GMAT" ? "400" : "170"
                  }`,
                  3
                ),
              };
            case "testAnalyticalWriting":
            case "testIntegratedReasoning":
              return {
                ...item,
                ...validateTestScore(
                  fieldName,
                  value,
                  0,
                  6,
                  `${name} score should be less than or equal to 6`,
                  1
                ),
              };
            case "testReadingWriting":
            case "testMath":
              return {
                ...item,
                ...validateTestScore(
                  fieldName,
                  value,
                  0,
                  testName === "ACT" ? 36 : 800,
                  `${name} score should be less than or equal to ${
                    testName === "ACT" ? 36 : 800
                  } `,
                  testName === "ACT" ? 2 : 3
                ),
              };
            case "testEssay":
              return {
                ...item,
                ...validateTestScore(
                  fieldName,
                  value,
                  0,
                  8,
                  "Essay score should be less than or equal to 8",
                  1
                ),
              };
            case "testReading":
            case "testListening":
            case "testSpeaking":
            case "testWriting":
              return {
                ...item,
                ...validateTestScore(
                  fieldName,
                  value,
                  0,
                  testName === "TOEFL"
                    ? 30
                    : testName == "IELTS"
                    ? 9
                    : testName == "ACT"
                    ? 36
                    : 90,
                  `${name} score should be less than or equal to ${
                    testName === "TOEFL"
                      ? "30"
                      : testName == "IELTS"
                      ? "9"
                      : testName == "ACT"
                      ? "36"
                      : "90"
                  }`,
                  testName == "IELTS" ? 1 : 2
                ),
              };
            case "testScience":
              return {
                ...item,
                ...validateTestScore(
                  fieldName,
                  value,
                  0,
                  36,
                  "Science score should be less than or equal to 36",
                  2
                ),
              };
            case "testEnglish":
              return {
                ...item,
                ...validateTestScore(
                  fieldName,
                  value,
                  0,
                  36,
                  "English score should be less than or equal to 36",
                  2
                ),
              };
            case "testTRFNo":
              return {
                ...item,
                ...validateTestScore(
                  fieldName,
                  value,
                  0,
                  18,
                  "TRF No is required",
                  2,
                  "isStringInput"
                ),
              };
            case "isIeltsWaiver":
              return {
                ...item,
                ...validateTestScore(
                  fieldName,
                  value,
                  0,
                  18,
                  "TRF No is required",
                  2,
                  "isCheck",
                  item
                ),
              };
            case "isIeltsYetToReceive":
              return {
                ...item,
                ...validateTestScore(
                  fieldName,
                  value,
                  0,
                  18,
                  "TRF No is required",
                  2,
                  "isCheck",
                  item
                ),
              };
            case "testDateOfExamination":
              return {
                ...item,
                ...validateTestScore(
                  fieldName,
                  value,
                  0,
                  18,
                  "date field this requird",
                  18,
                  "date"
                ),
              };
            default:
              return item;
          }
        } else {
          return item;
        }
      });
    });
  };
  function validateTests(tests) {
    let isValid = true;

    tests.forEach((test) => {
      const testFields = Object.keys(test).filter(
        (key) => key.startsWith("test") && !key.endsWith("Error")
      );
      const allFilled = testFields.every((field) => test[field].trim() !== "");
      if (!allFilled) {
        isValid = false;
        return;
      }
    });

    return isValid;
  }

  const handleSubmitTests = async (e) => {
    e.preventDefault();
    const filterBasedOnOpen = allTest.filter((o) => o.isOpen === true);
    if (validateTests(filterBasedOnOpen)) {
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
            const studentTests = {
              _id: id,
              studentTests: filterBasedOnOpen,
            };
            const res = await dispatch(studentInfo(studentTests));
            if (res.message) {
              const singleDataRes = await dispatch(getSingleStudentData(id));
              setActiveTab(5);
            }
          } catch (error) {
            console.log(error);
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", " :)", "error");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Please fill in all the required inputs",
      });
    }
  };
  const addSavedArray = ()=>{
  
    const savedArray = getPersonalInfo?.studentTests
    savedArray.forEach(savedItem => {
  const index = tests.findIndex(item => item.name === savedItem.name);
  
  if (index !== -1) {
    allTest[index] = { ...allTest[index], ...savedItem };
  } else {
    allTest.push(savedItem);
  }
});

tests.filter(test => savedArray.some(savedItem => savedItem.name === test.name));
  }
  useEffect(() => {
    if (!!getPersonalInfo?.studentTests?.length) {
      addSavedArray()
    }
  }, [getPersonalInfo]);
  return (
    <div
      role="tabpanel"
      className={`tab-pane ${activeTab === 3 ? "active" : ""}`}
      id="Tests"
    >
      <h2 className="title">Tests</h2>
      <div className="editbutton">
        <button className="editbtn" id="testEdit" type="button">
          Edit
        </button>
      </div>
      <div id="tests">
        <div className="PIbox TestsEdit">
          <form
            id="test-form"
            novalidate="novalidate"
            onSubmit={handleSubmitTests}
          >
            <div
              style={{
                textAlign: "justify",
                display: "none",
                margin: "20px 20px 20px 13px",
              }}
              id="divInforMsgTest"
            >
              The associated tests will be displayed once your desired programs
              are shortlisted in the ‘Shortlisted Programs’ Tab.
            </div>
            {tests &&
              allTest.map((item, i) => {
                return (
                  <div className="test-partial">
                    <div
                      className="row"
                      onClick={(e) => handleOpenClose(e, i, item)}
                    >
                      <div className="col-sm-12">
                        <label className="checkbox-inline test">
                          <input
                            type="checkbox"
                            className="test-check"
                            id="chkGre"
                            style={{ opacity: "initial" }}
                          />
                          <span className="label-text">{item?.name}</span>
                          <span className="addtest">
                            <span id="greExpandSign">+</span> Add Test
                          </span>
                        </label>
                      </div>
                    </div>
                    <div
                      className="test-data"
                      style={{ display: item.isOpen ? "block" : "none" }}
                    >
                      <div className="row">
                        {item.IELTSWaiver && (
                          <div className="col-sm-6">
                            <label>IELTS Waiver</label>
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="radiobtn">
                                  <input
                                    id="WaiverchkNo"
                                    className="toggle toggle-left"
                                    name="isIeltsWaiver"
                                    value="false"
                                    type="radio"
                                    checked={item.isIeltsWaiver === "false"}
                                    onChange={(e) =>
                                      handleTestChange(e, i, "isIeltsWaiver")
                                    }
                                  />
                                  <label for="WaiverchkNo" className="btn">
                                    No
                                  </label>
                                  <input
                                    id="WaiverchkYes"
                                    className="toggle toggle-right"
                                    name="isIeltsWaiver"
                                    value="true"
                                    type="radio"
                                    checked={item.isIeltsWaiver === "true"}
                                    onChange={(e) =>
                                      handleTestChange(e, i, "isIeltsWaiver")
                                    }
                                  />
                                  <label for="WaiverchkYes" className="btn">
                                    Yes
                                  </label>
                                </div>
                              </div>
                              <div className="col-sm-8">
                                <div className="student_register">
                                  <input
                                    id="ieltsWaiverEnglishMarks"
                                    name="ieltsEnglish12"
                                    className="form-control"
                                    placeholder="Enter English 12 Marks"
                                    type="text"
                                    disabled={item.isIeltsWaiver === "false"}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.yetToReceive && (
                          <div className="col-sm-6">
                            <div className="student_register">
                              <label>Yet to Receive?</label>
                              <div className="row">
                                <div className="col-sm-4">
                                  <div className="radiobtn">
                                    <input
                                      id="chkytrNo"
                                      className="toggle toggle-left"
                                      name="ieltsChkYetToReceived"
                                      value="false"
                                      type="radio"
                                      checked={
                                        item.isIeltsYetToReceive === "false"
                                      }
                                      onChange={(e) =>
                                        handleTestChange(
                                          e,
                                          i,
                                          "isIeltsYetToReceive"
                                        )
                                      }
                                    />
                                    <label htmlFor="chkytrNo" className="btn">
                                      No
                                    </label>
                                    <input
                                      id="chkytrYes"
                                      className="toggle toggle-right"
                                      name="ieltsChkYetToReceived"
                                      value="true"
                                      type="radio"
                                      checked={
                                        item.isIeltsYetToReceive === "true"
                                      }
                                      onChange={(e) =>
                                        handleTestChange(
                                          e,
                                          i,
                                          "isIeltsYetToReceive"
                                        )
                                      }
                                    />
                                    <label htmlFor="chkytrYes" className="btn">
                                      Yes
                                    </label>
                                  </div>
                                </div>
                                <div className="col-sm-8">
                                  <div className="">
                                    <input
                                      id="txtResultDate"
                                      name="resultdate"
                                      className="form-control"
                                      placeholder="Enter Test Result Date"
                                      type="date"
                                      disabled={
                                        item.isIeltsYetToReceive === "false"
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.TRFNo && (
                          <div className="col-sm-6">
                            <div className="student_register">
                              <label>TRF No</label>
                              <div className="dvalue">
                                <span className="input_icon_with">T:</span>
                                <input
                                  type="text"
                                  className="form-control trfno input_text_with_icon_text"
                                  placeholder="TRF No."
                                  maxLength="18"
                                  value={item.testTRFNo}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testTRFNo",
                                      item?.name,
                                      "TRF No"
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        )}
                        {item.overallScore ? (
                          <div className="col-sm-6">
                            <div className="pibox_student_register">
                              <label>Overall Score</label>
                              <span className="requiretxx">*</span>
                              <div className="dvalue">
                                <input
                                  type="number"
                                  name="testOverallScore"
                                  id="greOverallScore"
                                  className="form-control overall-score integer"
                                  maxlength="3"
                                  placeholder="Overall Score"
                                  value={item.testOverallScore?.slice(
                                    0,
                                    item?.name === "PTE" || item.name === "ACT"
                                      ? 2
                                      : item?.name === "SAT"
                                      ? 4
                                      : 3
                                  )}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testOverallScore",
                                      item?.name,
                                      "Overall"
                                    )
                                  }
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility: item.testOverallScoreError
                                      ? "visible"
                                      : "hidden",
                                  }}
                                >
                                  {item.testOverallScoreError}
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="col-sm-6">
                          <div className="pibox_student_register">
                            <label>Date of Examination</label>
                            <div className="dvalue">
                              <input
                                type="date"
                                name="testDateOfExamination"
                                className="form-control examination-date"
                                id="GREid"
                                data-year="5"
                                placeholder="Dt. of Examination"
                                value={item.testDateOfExamination}
                                onChange={(e) =>
                                  handleTestChange(
                                    e,
                                    i,
                                    "testDateOfExamination"
                                  )
                                }
                              />
                              <span
                                style={{ color: "red", visibility: "hidden" }}
                              >
                                {"FFF"}
                              </span>
                            </div>
                          </div>
                        </div>
                        {item.Quantitative && (
                          <div className={item.col}>
                            <div className="pibox_student_register">
                              <label>Quantitative</label>
                              <span className="requiretxx">*</span>
                              <div className="dvalue">
                                <span className="input_icon_with ">Q:</span>
                                <input
                                  type="number"
                                  name="testQuantitative"
                                  id="greQuantitative"
                                  className="form-control quantitative integer input_text_with_icon_text"
                                  maxlength="3"
                                  value={item.testQuantitative?.slice(0, 3)}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testQuantitative",
                                      item?.name,
                                      "Quantitative"
                                    )
                                  }
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility: item.testQuantitativeError
                                      ? "visible"
                                      : "hidden",
                                  }}
                                >
                                  {item.testQuantitativeError}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.Verbal && (
                          <div className={item.col}>
                            <div className="pibox_student_register">
                              <label>Verbal</label>
                              <span className="requiretxx">*</span>
                              <div className="dvalue">
                                <span className="input_icon_with ">V:</span>
                                <input
                                  type="number"
                                  name="testVerbal"
                                  id="greVerbal"
                                  className="form-control verbal integer input_text_with_icon_text"
                                  maxlength="5"
                                  value={item.testVerbal?.slice(0, 3)}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testVerbal",
                                      item?.name,
                                      "Verbal"
                                    )
                                  }
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility: item.testVerbalError
                                      ? "visible"
                                      : "hidden",
                                  }}
                                >
                                  {item.testVerbalError}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.analyticalWriting && (
                          <div className={item.col}>
                            <div className="pibox_student_register">
                              <label>Analytical Writing</label>
                              <span className="requiretxx">*</span>
                              <div className="dvalue">
                                <span className="input_icon_with ">AW:</span>
                                <input
                                  type="number"
                                  name="testAnalyticalWriting"
                                  id="greAW"
                                  className="form-control analytical-writing input-integer input_text_with_icon_text"
                                  maxlength="3"
                                  value={item.testAnalyticalWriting?.slice(
                                    0,
                                    1
                                  )}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testAnalyticalWriting",
                                      item?.name,
                                      "Analytical Writing"
                                    )
                                  }
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility: item.testAnalyticalWritingError
                                      ? "visible"
                                      : "hidden",
                                  }}
                                >
                                  {item.testAnalyticalWritingError}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.IntegratedReasoning && (
                          <div className={item.col}>
                            <div className="pibox_student_register">
                              <label>Integrated Reasoning</label>
                              <span className="requiretxx">*</span>
                              <div className="dvalue">
                                <span className="input_icon_with ">IR:</span>
                                <input
                                  type="number"
                                  name="testIntegratedReasoning"
                                  id="gmatIR"
                                  className="form-control interesting-reasoning integer input_text_with_icon_text"
                                  maxlength="1"
                                  value={item.testIntegratedReasoning?.slice(
                                    0,
                                    1
                                  )}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testIntegratedReasoning",
                                      item?.name,
                                      "Integrated Reasoning"
                                    )
                                  }
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility:
                                      item.testIntegratedReasoningError
                                        ? "visible"
                                        : "hidden",
                                  }}
                                >
                                  {item.testIntegratedReasoningError}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.Reading && (
                          <div className={item.col}>
                            <div className="pibox_student_register">
                              <label>Reading</label>
                              <span className="requiretxx">*</span>
                              <div className="dvalue">
                                <span className="input_icon_with ">R:</span>
                                <input
                                  type="number"
                                  name="testReading"
                                  className="form-control reading integer input_text_with_icon_text"
                                  maxlength="2"
                                  value={item.testReading?.slice(
                                    0,
                                    item?.name == "IELTS" ? 1 : 2
                                  )}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testReading",
                                      item?.name,
                                      "Reading"
                                    )
                                  }
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility: item.testReadingError
                                      ? "visible"
                                      : "hidden",
                                  }}
                                >
                                  {item.testReadingError}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.Listening && (
                          <div className={item.col}>
                            <div className="pibox_student_register">
                              <label>Listening</label>
                              <span className="requiretxx">*</span>
                              <div className="dvalue">
                                <span className="input_icon_with ">L:</span>
                                <input
                                  type="number"
                                  name="testListening"
                                  className="form-control listening integer input_text_with_icon_text"
                                  maxlength="2"
                                  value={item.testListening?.slice(
                                    0,
                                    item?.name == "IELTS" ? 1 : 2
                                  )}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testListening",
                                      item?.name,
                                      "Listening"
                                    )
                                  }
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility: item.testListeningError
                                      ? "visible"
                                      : "hidden",
                                  }}
                                >
                                  {item.testListeningError}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.Speaking && (
                          <div className={item.col}>
                            <div className="pibox_student_register">
                              <label>Speaking</label>
                              <span className="requiretxx">*</span>
                              <div className="dvalue">
                                <span className="input_icon_with ">S:</span>
                                <input
                                  type="number"
                                  name="testSpeaking"
                                  className="form-control speaking integer input_text_with_icon_text"
                                  maxlength="2"
                                  value={item.testSpeaking?.slice(
                                    0,
                                    item?.name == "IELTS" ? 1 : 2
                                  )}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testSpeaking",
                                      item?.name,
                                      "Speaking"
                                    )
                                  }
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility: item.testSpeakingError
                                      ? "visible"
                                      : "hidden",
                                  }}
                                >
                                  {item.testSpeakingError}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.Writing && (
                          <div className="col-sm-3">
                            <div className="pibox_student_register">
                              <label>Writing</label>
                              <span className="requiretxx">*</span>
                              <div className="dvalue">
                                <span className="input_icon_with ">W:</span>
                                <input
                                  type="number"
                                  name="testWriting"
                                  className="form-control writing integer input_text_with_icon_text"
                                  maxlength="2"
                                  value={item.testWriting?.slice(
                                    0,
                                    item?.name == "IELTS" ? 1 : 2
                                  )}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testWriting",
                                      item?.name,
                                      "Writing"
                                    )
                                  }
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility: item.testWritingError
                                      ? "visible"
                                      : "hidden",
                                  }}
                                >
                                  {item.testWritingError}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.ReadingWriting && (
                          <div className="col-sm-4">
                            <div className="pibox_student_register">
                              <label>Reading &amp; Writing</label>
                              <span className="requiretxx">*</span>
                              <div className="dvalue">
                                <span className="input_icon_with ">RW:</span>
                                <input
                                  type="number"
                                  name="testReadingWriting"
                                  className="form-control readingandwriting integer input_text_with_icon_text"
                                  maxlength="3"
                                  value={item.testReadingWriting.slice(0, 3)}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testReadingWriting",
                                      item?.name,
                                      "Reading and Writing"
                                    )
                                  }
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility: item.testReadingWritingError
                                      ? "visible"
                                      : "hidden",
                                  }}
                                >
                                  {item.testReadingWritingError}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.Math && (
                          <div className={item.col}>
                            <div className="pibox_student_register">
                              <label>Math</label>
                              <span className="requiretxx">*</span>
                              <div className="dvalue">
                                <span className="input_icon_with ">M:</span>
                                <input
                                  type="number"
                                  name="testMath"
                                  className="form-control math integer input_text_with_icon_text"
                                  maxlength="3"
                                  value={item.testMath?.slice(
                                    0,
                                    item?.name === "ACT" ? 2 : 3
                                  )}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testMath",
                                      item?.name,
                                      "Math"
                                    )
                                  }
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility: item.testMathError
                                      ? "visible"
                                      : "hidden",
                                  }}
                                >
                                  {item.testMathError}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.Essay && (
                          <div className="col-sm-4">
                            <div className="pibox_student_register">
                              <label>Essay</label>
                              <div className="dvalue">
                                <span className="input_icon_with ">E:</span>
                                <input
                                  type="number"
                                  name="testEssay"
                                  className="form-control essay integer input_text_with_icon_text"
                                  maxlength="1"
                                  value={item.testEssay?.slice(0, 1)}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testEssay",
                                      item?.name,
                                      "Eassy"
                                    )
                                  }
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility: item.testEssayError
                                      ? "visible"
                                      : "hidden",
                                  }}
                                >
                                  {item.testEssayError}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.Science && (
                          <div className={item.col}>
                            <div className="pibox_student_register">
                              <label>Science</label>
                              <span className="requiretxx">*</span>
                              <div className="dvalue">
                                <span className="input_icon_with ">S:</span>
                                <input
                                  type="text"
                                  name="testScience"
                                  className="form-control science integer input_text_with_icon_text"
                                  maxlength="2"
                                  value={item.testScience.slice(0, 2)}
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testScience",
                                      item?.name,
                                      "Science"
                                    )
                                  }
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility: item.testScienceError
                                      ? "visible"
                                      : "hidden",
                                  }}
                                >
                                  {item.testScienceError}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.English && (
                          <div className="col-sm-6">
                            <div className="pibox_student_register">
                              <label>English</label>
                              <span className="requiretxx">*</span>
                              <div className="dvalue">
                                <span className="input_icon_with ">E:</span>
                                <input
                                  type="text"
                                  name="testEnglish"
                                  className="form-control english integer input_text_with_icon_text"
                                  maxlength="2"
                                  onChange={(e) =>
                                    handleTestChange(
                                      e,
                                      i,
                                      "testEnglish",
                                      item?.name,
                                      "English"
                                    )
                                  }
                                  value={item.testEnglish.slice(0, 2)}
                                />
                                <span
                                  style={{
                                    color: "red",
                                    visibility: item.testEnglishError
                                      ? "visible"
                                      : "hidden",
                                  }}
                                >
                                  {item.testEnglishError}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className="row">
              <div className="col-sm-12">
                <div className="submit-btn text-right tabsnextprevbtn">
                  <div className="relativepo">
                    <button className="btn btn-primary" id="btn-test-submit">
                      Submit and continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentTests;
