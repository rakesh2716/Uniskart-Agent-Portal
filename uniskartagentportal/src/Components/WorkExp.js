import React, { useState ,useEffect} from 'react'
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { studentInfo } from '../redux/NewStudentRegistration/Action';
const WorkExp = ({ getPersonalInfo, setGetPersonalInfo }) => {
  const dispatch = useDispatch();
  const [showWorkExp, setShowWorkExp] = useState(false);
  const [isClicked,setIsClicked] = useState(false)
const [workExpData,setWorkExp] = useState({
    nameofTheOrganisationAndAddress:"",
    position:"",
    jobProfile:"",
    workingFrom:"",
    workingUpto:"",
    modeOfSalary:"",
    iAmCurrentlyWorkingHere:"no"
})
const [error,setError] = useState(false)
  const handleWorkExp = (e) => {
    const { value, name } = e.target;
    setWorkExp((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
const saveWorkExp = () =>{
  const {
    nameofTheOrganisationAndAddress,
    position,
    jobProfile,
    workingFrom,
    modeOfSalary,
    workingUpto,
    iAmCurrentlyWorkingHere
  } = workExpData;
  if (
    !!nameofTheOrganisationAndAddress.length &&
    !!position.length &&
    !!jobProfile.length &&
    !!workingFrom.length &&
    !!modeOfSalary.length &&
    !!workingUpto.length &&
    !!iAmCurrentlyWorkingHere.length
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
          setGetPersonalInfo({...getPersonalInfo,...workExpData})
          setIsClicked(true)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", " :)", "error");
      }
    });
  } else {
    setError(true);
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
if(!!getPersonalInfo?.nameofTheOrganisationAndAddress?.length && isClicked){
    xyz()
    setIsClicked(false)
}

},[getPersonalInfo])
useEffect(()=>{
  setWorkExp({...getPersonalInfo,...workExpData})
},[])

  return (
    <div role="tabpanel" className="tab-pane" id="WorkExperience">
      <h2 className="title">Work Experience</h2>
      <div id="divWorkExperienceInformation">
        <div id="divWorkInformationFormNext"></div>
        <div
          className="PIbox WEForm Detail"
          id="divWorkInformationForm"
          style={{ display: showWorkExp ? "block" : "none" }}
        >
          <form id="work-form" novalidate="novalidate">
            <input
              name="WorkInformationId"
              id="WorkInformationId"
              type="hidden"
            />
            <div className="row">
              <div className="col-sm-6">
                <div className="pibox_student_register">
                  <label>Name of the Organisation &amp; Address* </label>
                  <div className="dvalue">
                    <input
                      type="text"
                      id="txtWorkCompanyName"
                      name="nameofTheOrganisationAndAddress"
                      className="form-control"
                      placeholder="Name of the Organisation &amp; Address"
                      tabindex="1"
                      value={workExpData.nameofTheOrganisationAndAddress}
                      onChange={handleWorkExp}
                    />
                  </div>
                  <span
                      id="spanDOB"
                      style={{
                        display:
                          !workExpData.nameofTheOrganisationAndAddress?.length && error
                            ? "block"
                            : "none",
                      }}
                      className="text-danger field-validation-error"
                      data-valmsg-for="DOB"
                      data-valmsg-replace="true"
                    >
                      <span id="DOB-error" className="">
                      name of the organisation is required
                      </span>
                    </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pibox_student_register">
                  <label>Position*</label>
                  <div className="dvalue">
                    <input
                      type="text"
                      className="form-control"
                      id="txtWorkDesignation"
                      name="position"
                      placeholder="Enter Position"
                      tabindex="2"
                      value={workExpData.position}
                      onChange={handleWorkExp}
                    />
                  </div>
                  <span
                      id="spanDOB"
                      style={{
                        display:
                          !workExpData.position?.length && error
                            ? "block"
                            : "none",
                      }}
                      className="text-danger field-validation-error"
                      data-valmsg-for="DOB"
                      data-valmsg-replace="true"
                    >
                      <span id="DOB-error" className="">
                      position is required
                      </span>
                    </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="pibox_student_register">
                  <label>Job Profile</label>
                  <div className="dvalue">
                    <input
                      type="text"
                      id="txtJobProfile"
                      name="jobProfile"
                      className="form-control"
                      placeholder="Enter Job Profile"
                      tabindex="3"
                      value={workExpData.jobProfile}
                      onChange={handleWorkExp}
                    />
                  </div>
                  <span
                      id="spanDOB"
                      style={{
                        display:
                          !workExpData.jobProfile?.length && error
                            ? "block"
                            : "none",
                      }}
                      className="text-danger field-validation-error"
                      data-valmsg-for="DOB"
                      data-valmsg-replace="true"
                    >
                      <span id="DOB-error" className="">
                      job profile is required
                      </span>
                    </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pibox_student_register">
                  <label>Working From*</label>
                  <div className="dvalue">
                    <input
                      type="date"
                      id="txtWorkFrom"
                      name="workingFrom"
                      className="form-control working-from"
                      placeholder="DD/MM/YYYY"
                      tabindex="4"
                      value={workExpData.workingFrom}
                      onChange={handleWorkExp}
                    />
                  </div>
                  <span
                      id="spanDOB"
                      style={{
                        display:
                          !workExpData.workingFrom?.length && error
                            ? "block"
                            : "none",
                      }}
                      className="text-danger field-validation-error"
                      data-valmsg-for="DOB"
                      data-valmsg-replace="true"
                    >
                      <span id="DOB-error" className="">
                      working from is required
                      </span>
                    </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="pibox_student_register">
                  <label>Working upto*</label>
                  <div className="dvalue">
                    <input
                      type="date"
                      className="form-control working-upto"
                      id="txtWorkTo"
                      name="workingUpto"
                      placeholder="DD/MM/YYYY"
                      tabindex="5"
                      value={workExpData.workingUpto}
                      onChange={handleWorkExp}
                    />
                  </div>
                  <span
                      id="spanDOB"
                      style={{
                        display:
                          !workExpData.workingUpto?.length && error
                            ? "block"
                            : "none",
                      }}
                      className="text-danger field-validation-error"
                      data-valmsg-for="DOB"
                      data-valmsg-replace="true"
                    >
                      <span id="DOB-error" className="">
                      working upto is required
                      </span>
                    </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pibox_student_register">
                  <label>Mode of Salary</label>
                  <div className="dvalue">
                    <div className="select">
                      <select
                        id="ddlModeOfSalary"
                        name="modeOfSalary"
                        className="form-control"
                        tabindex="6"
                        value={workExpData.modeOfSalary}
                        onChange={handleWorkExp}
                      >
                        <option>Mode of Salary</option>
                        <option value="Cash">Cash</option>
                        <option value="Cheque">Cheque</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                      </select>
                      <span
                      id="spanDOB"
                      style={{
                        display:
                          !workExpData.modeOfSalary?.length && error
                            ? "block"
                            : "none",
                      }}
                      className="text-danger field-validation-error"
                      data-valmsg-for="DOB"
                      data-valmsg-replace="true"
                    >
                      <span id="DOB-error" className="">
                      mode of salary is required
                      </span>
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <label>
                  I am currently working here
                  <span className="requiretxx">*</span>
                </label>
                <div className="radiobtn">
                  <input
                    id="workYes"
                    className="toggle toggle-left"
                    name="iAmCurrentlyWorkingHere"
                    value="yes"
                    type="radio"
                    checked={workExpData.iAmCurrentlyWorkingHere==="yes"}
                    onChange={handleWorkExp}

                  />
                  <label for="workYes" className="btn">
                    Yes
                  </label>
                  <input
                    id="workNo"
                    className="toggle toggle-right"
                    name="iAmCurrentlyWorkingHere"
                    value="no"
                    type="radio"
                    checked={workExpData.iAmCurrentlyWorkingHere==="no"}
                    onChange={handleWorkExp}
                  />
                  <label for="workNo" className="btn">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary cancel"
                    id="btn-cancel-workexperience"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="btn-add-update-work"
                    onClick={saveWorkExp}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="goodbye"></div>
        {!showWorkExp && (
          <div className="addanotherbtn">
            <a
              className="btn btn-default newwork"
              id="hplnkAddNewWorkInformation"
              onClick={() => setShowWorkExp(true)}
            >
              + Add Work Experience
            </a>
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

export default WorkExp;