import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
// import ReactSelect, { customStylesTest } from '../../Components/Testing'
import Select from "react-select";
import { IntakeYearsoptions, ProgramLevelData, RequirementsData, countriesData, studyAreasData, yearsOption } from "../../Utils/StaticData";
import SingleSelect, { customStylesTest } from "../../Components/ReactSelect";
import Result from "../../Components/Result";
import { customStyles2 } from "../../Utils/Themes";
import { useDispatch, useSelector } from "react-redux"
import { searchProgramApi } from "../../Components/redux/SearProgram/SearchProgram";
import Swal from 'sweetalert2'

const SearchProgram = () => {
  const dispatch = useDispatch()
  const searchRes = useSelector(state => state.reducers.searchData.searchData?.data)
  const [isAdvanceSearchOpen, setIsAdvanceSearchOpen] = useState(false)
  const [selectAllIntake,setSelectAllIntake] = useState([])
  const [getSearchData, setGetSearchData] = useState({
    courses: "",
    intakeMonth: [],
    intakeYear: '2024',
    SearchState: "",
    program_level: [],
    country: [],
    study_area: [],
    DisciplineAreas: [],
    duration: {},
    ESLOrELPAvailable: [],
    requirements: [],
  });
  const getInputValues = (name, value) => {
    setGetSearchData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSearch = (e, inputType, react_select_val, is_intake) => {
    if (inputType === "checkBox") {
      const { value, name, checked } = e.target;
      setGetSearchData((prev) => {
        if (checked) {
          return {
            ...prev,
            [name]: [...prev[name], value],
          };
        } else {
          return {
            ...prev,
            [name]: prev[name].filter((item) => item !== value),
          };
        }
      });
    }
    if (inputType === "isSelectBox") {
      const name = react_select_val.name;
      if (is_intake == "intakeVal") {
        if (react_select_val.action === "select-option" && react_select_val.option.value === "*") {
          const selectedOptions = Array.isArray(e) ? IntakeYearsoptions.map((option) => option.label) : e.value;
          setSelectAllIntake(IntakeYearsoptions)
          getInputValues(name, selectedOptions);
        } else if (react_select_val.action === "deselect-option" && react_select_val.option.value === "*") {
          setSelectAllIntake([])
          setGetSearchData({...getSearchData,intakeMonth:[] })
        } else if (react_select_val.action === "deselect-option") {
          setSelectAllIntake(e)
          const selectedOptions = e.map((option) => option.label)
          getInputValues(name, selectedOptions);
        }
        else if (e.length === IntakeYearsoptions.length - 1) {
          setSelectAllIntake(IntakeYearsoptions);
          const selectedOptions = e.map((option) => option.label);
          getInputValues(name, selectedOptions);
        } else {
          const selectedOptions = e.map((option) => option.label);
          getInputValues(name, selectedOptions);
          setSelectAllIntake(e);
        }
      } else if(is_intake==="study_area"){
        const selectedOptions =  e.map((option) => option.value);
        getInputValues(name, selectedOptions);
      }else {
        const selectedOptions = Array.isArray(e) ? e.map((option) => option.label) : e.value;
        getInputValues(name, selectedOptions);
      }
    } else if (inputType === "search_text_input") {
      const { value, name } = e.target;
      getInputValues(name, value);
    }
  };
  const clearAll = () => {
    // setGetSearchData({
    //   SearchCourses: "",
    //   Intake: [],
    //   Year: {},
    //   SearchState: "",
    //   ProgramLevel: [],
    //   countries: [],
    //   StudyAreas: [],
    //   DisciplineAreas: [],
    //   Duration: [],
    //   ESLOrELPAvailable: [],
    //   Requirements: [],
    // });
  }
  const handleSearchSubmit = () => {
    if (!!getSearchData?.courses?.length && getSearchData?.intakeYear?.length && !!getSearchData?.intakeMonth?.length) {
      let queryString = "page_no=1&number_of_rows=10&";

      for (let elem in getSearchData) {
        if (getSearchData[elem]?.value) {
          queryString += `${elem}=${getSearchData[elem].value}&`;
        }
        if (Array.isArray(getSearchData[elem])) {
          if (getSearchData[elem].length) {
            const arrayString = encodeURIComponent(JSON.stringify(getSearchData[elem]));
            queryString += `${elem}=${arrayString}&`;
          }
        } else if (typeof getSearchData[elem] === "string" && getSearchData[elem].length) {
          queryString += `${elem}=${getSearchData[elem]}&`;
        }
      }

      if (queryString.length > 0) {
        queryString = queryString.slice(0, -1);
      }

      dispatch(searchProgramApi(queryString));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: !getSearchData.courses.length ? "Please enter course" : !getSearchData.intakeMonth.length ? "Please enter any Intake" : !getSearchData?.intakeYear?.length && "Please enter any Year" ,
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <div className="row Top-Hed"></div>
          <Navbar />
          <div className="body-content padding-left-0 padding-right-0">
            <input
              id="UserRoleInfo"
              name="UserRoleInfo"
              type="hidden"
              value=""
            />
            <input
              id="PartnerMediator"
              name="PartnerMediator"
              type="hidden"
              value="PartnerMediator"
            />
            <section className="course-finder-main-bg">
              <div className="course-finder-main-div">
                <div className="row">
                  <div className="container-fluid">
                    <div
                      className="row index-search-div"
                      style={{ position: "relative" }}
                    >
                      <div className="text-center margin-top-6rem bgForTab">
                        <h2 className="text-white explore-courses">
                          Explore over 1,00,000+ courses
                        </h2>
                        <h4 className="useCourseh4">
                          Use our Course Finder to search
                        </h4>
                      </div>
                      <form
                      >
                        {" "}
                        <div className="col-lg-12 col-md-12 col-sm-12 padding-0">
                          <div className="col-lg-offset-2 col-md-offset-0 col-sm-offset-1 col-lg-8 col-md-12 col-sm-10">
                            <div className="margin-top-6rem advanceSearch tooltip-holder">
                              <div className="row topsearch">
                                <div className="setSearchProgmram">
                                  <div className="m-t-83 searchCust">
                                    <input
                                      type="hidden"
                                      id="subCategorySelection"
                                      name="subCategorySelection"
                                      value="-1"
                                    />
                                    <div className="float_div searchMargin serchInputTxt">
                                      <label>Search courses</label>
                                      <div className="input-group">
                                        <span className="input-group-addon">
                                          <i className="fa fa-search"></i>
                                        </span>
                                        <input
                                          type="text"
                                          className="form-control Searchbykeyword"
                                          id="txtsearch"
                                          name="courses"
                                          autocomplete="off"
                                          onChange={(e) =>
                                            handleSearch(e, "search_text_input")
                                          }
                                          placeholder="Search for Course | University | Country | State"
                                          onkeyup="SearchProgram.SearchByKeyWordOnKerPress(event)"
                                        />
                                      </div>
                                    </div>
                                    <div className="float_div searchMargin IntakeInput">
                                      <label>Intake</label>

                                      <SingleSelect
                                        truckVal={3}
                                        customStyles2={customStyles2}
                                        onChange={(data, e) =>
                                          handleSearch(data, "isSelectBox", e, "intakeVal")
                                        }
                                        name={"intakeMonth"}
                                        options={IntakeYearsoptions}
                                        value={selectAllIntake}
                                      />

                                      <input
                                        type="hidden"
                                        id="hdnSortBy"
                                        name="hdnSortBy"
                                        value=""
                                      />
                                    </div>
                                    <div className="float_div searchMargin yearInput">
                                      <label>Year</label>
                                      <Select
                                        id="Intaketxt"
                                        name="intakeYear"
                                        className="browser-default selectpicker"
                                        options={yearsOption}
                                        onChange={(data, e) =>
                                          handleSearch(data, "isSelectBox", e)
                                        }
                                        defaultValue={yearsOption.find(
                                          (o) =>
                                            o.value == new Date().getFullYear()
                                        )}
                                        styles={customStyles2}
                                      />

                                    </div>

                                    <div className="float_div searchMargin serchInputTxt search-state-width">
                                      <label>Search State</label>
                                      <input
                                        type="text"
                                        className="form-control search-by-location search-by-state"
                                        id="txtSearchState"
                                        name="SearchState"
                                        autocomplete="off"
                                        onChange={(e) =>
                                          handleSearch(e, "search_text_input")
                                        }
                                        placeholder="Province | State"
                                      />
                                      <input
                                        type="hidden"
                                        id="hdnState"
                                        name="hdnState"
                                      />
                                    </div>

                                    <div className="float_div searchMargin">
                                      <label
                                        className="hidden-xs hidden-sm"
                                        style={{ visibility: "hidden" }}
                                      >
                                        Search
                                      </label>

                                      <button
                                        type="button"
                                        className="search-btn-program btn"
                                        style={{
                                          position: "inherit",
                                          margin: 0,
                                        }}
                                        onClick={handleSearchSubmit}
                                      >
                                        <i className="fa fa-search">
                                          &nbsp;&nbsp;
                                        </i>
                                        Search
                                      </button>
                                      <button
                                        style={{
                                          display: "none",
                                          position: "inherit",
                                          margin: 0,
                                        }}
                                        type="button"
                                        className="search-btn-program btn"
                                      // id="Searchbtn"
                                      >
                                        <i className="fa fa-search">
                                          &nbsp;&nbsp;
                                        </i>
                                        Search
                                      </button>
                                    </div>
                                  </div>
                                  <div style={{ position: "relative" }}>
                                    <div
                                      id="div-tooltip"
                                      tabindex="0"
                                      style={{
                                        display: "none",
                                        backgroundColor: "#ffffff",
                                        fontStyle: "italic",
                                        height: "2.5rem",
                                        fontSize: "1rem",
                                        paddingLeft: "11px",
                                        zIndex: 9,
                                        boxShadow: "2px 2px 2px #ddd",
                                        borderRadius: "0px",
                                      }}
                                      className="form-control"
                                    >
                                      <p className="name">
                                        Enter a subject and select from the list
                                      </p>
                                    </div>
                                    <div
                                      id="div-tooltip-message"
                                      tabindex="0"
                                      style={{
                                        width: "100%",
                                        display: "none",
                                        position: "absolute",
                                        top: 0,
                                        backgroundColor: "#ffffff",
                                        fontStyle: "italic",
                                        fontSize: "1rem",
                                        paddingLeft: "11px",
                                        borderRadius: "0px",
                                        zIndex: 9,
                                        boxShadow: "2px 2px 2px #ddd",
                                      }}
                                      className="form-control div-tooltip-height"
                                    >
                                      <p className="name">
                                        Type 3 characters of a subject name and
                                        select from the list
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* <div className="clearfix"></div> */}
                              <div
                                className="input-group col-lg-12 col-md-4 col-sm-5 col-xs-12"
                                href="#demo"
                                data-toggle="collapse"
                                id="divAdvanceSearch"

                              >
                                <a
                                  id="aadvsrc"
                                  href="#"
                                  className="btn btn-danger"
                                >
                                  <i className="fa fa-plus"></i> Advanced Search
                                </a>
                              </div>
                              <div
                                style={{
                                  width: "100%",
                                  margin: "0 auto",
                                  textAlign: "right",
                                  backgroundColor: "#ffffff",
                                }}
                              >
                                <div
                                  id="demo"
                                  className="collapse text-left collapse advCollapse"
                                >
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <hr className="g-brd-gray-light-v4 margin-bottom-15 margin-top-10" />
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-3 progame-level">
                                      <div className="row">
                                        <h2 className="h5 text-capitalize font-bold text-blue margin_in_mobile pl">
                                          Program Level
                                        </h2>
                                        <div style={{ display: "block" }}>
                                          <ul
                                            className="list-unstyled margin-bottom-0"
                                            id="ProgramLevelul"
                                          >
                                            {!!ProgramLevelData?.length &&
                                              ProgramLevelData.map((item) => {
                                                return (
                                                  <li
                                                    className="margin-top-0 margin-bottom-3"
                                                    key={item.id}
                                                  >
                                                    <div className="margin-bottom-0 asearchcheckwrap">
                                                      <label className="u-check padding-left-30 labelwrap">
                                                        <input
                                                          className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                                                          type="checkbox"
                                                          name="program_level"
                                                          value={item.label}
                                                          onChange={(e) =>
                                                            handleSearch(
                                                              e,
                                                              "checkBox"
                                                            )
                                                          }
                                                        />
                                                        <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0 search-prog-ceckbox">
                                                          <i
                                                            className="fa"
                                                            data-check-icon=""
                                                          ></i>
                                                        </div>
                                                        {item.label}
                                                      </label>
                                                    </div>
                                                  </li>
                                                );
                                              })}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="col-lg-5 col-md-4 col-sm-4 next-to-program"
                                      id="h2margin5px"
                                    >
                                      <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12 padding-0-5">
                                          <div className="col-lg-12 col-md-12 col-sm-12 drp_squre_show">
                                            <h2 className="h5 text-capitalize font-bold text-blue pl">
                                              Country
                                            </h2>
                                            <SingleSelect
                                              truckVal={2}
                                              onChange={(data, e) =>
                                                handleSearch(
                                                  data,
                                                  "isSelectBox",
                                                  e
                                                )
                                              }
                                              name={"country"}
                                              options={countriesData}
                                            />
                                          </div>
                                          <div className="col-lg-12 col-md-12 col-sm-12 drp_squre_show">
                                            <h2 className="h5 text-capitalize font-bold text-blue">
                                              Study Area
                                            </h2>
                                            <SingleSelect
                                              truckVal={2}
                                              onChange={(data, e) =>
                                                handleSearch(
                                                  data,
                                                  "isSelectBox",
                                                  e,"study_area"
                                                )
                                              }
                                              name={"study_area"}
                                              options={studyAreasData}
                                            />
                                          </div>
                                          <div className="col-lg-12 col-md-12 col-sm-12 drp_squre_show">
                                            <h2 className="h5 text-capitalize font-bold text-blue">
                                              Discipline Area
                                            </h2>
                                            <SingleSelect
                                              truckVal={2}
                                              onChange={(data, e) =>
                                                handleSearch(
                                                  data,
                                                  "isSelectBox",
                                                  e
                                                )
                                              }
                                              name={"DisciplineAreas"}
                                              options={studyAreasData}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 padding-0-5 drp_squre_show">
                                          <div className="col-lg-12 col-md-12 col-sm-12 ">
                                            <h2 className="h5 text-capitalize font-bold text-blue pl">
                                              Duration
                                            </h2>
                                            <Select
                                              id="Intaketxt"
                                              name="duration"
                                              placeholder="Select"
                                              options={[
                                                {
                                                  value: "12",
                                                  label: "0 - 1 Years",
                                                },
                                                {
                                                  value: "24",
                                                  label: "1 - 2 Years",
                                                },
                                                {
                                                  value: "36",
                                                  label: "2 - 3 Years",
                                                },
                                                {
                                                  value: "48",
                                                  label: "3 - 4 Years",
                                                },
                                                {
                                                  value: "60",
                                                  label: "4 and above Years",
                                                },
                                              ]}
                                              onChange={(data, e) =>
                                                handleSearch(
                                                  data,
                                                  "isSelectBox",
                                                  e
                                                )
                                              }
                                            />
                                          </div>

                                          <div className="col-lg-12 col-md-12 col-sm-12 drp_squre_show">
                                            <h2 className="h5 text-capitalize font-bold text-blue">
                                              ESL/ELP Available
                                            </h2>
                                            <Select
                                              id="Intaketxt"
                                              name="ESLOrELPAvailable"
                                              placeholder="Select"
                                              options={[
                                                {
                                                  value: "Yes",
                                                  label: "Yes",
                                                },
                                                { value: "No", label: "No" },
                                              ]}
                                              onChange={(data, e) =>
                                                handleSearch(
                                                  data,
                                                  "isSelectBox",
                                                  e
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-5 text-requirement heightChange">
                                      <div className="row">
                                        <h2 className="h5 text-capitalize font-bold text-blue pl ">
                                          Requirements
                                        </h2>
                                        <div style={{ display: "block" }}>
                                          <ul className="list-unstyled col-lg-5 col-md-5 col-sm-12 testRequiredUl padding-0 margin-bottom-0">
                                            {RequirementsData?.length &&
                                              RequirementsData.map((item) => {
                                                return (
                                                  <li
                                                    className="margin-top-0 margin-bottom-3 "
                                                    key={item.id}
                                                  >
                                                    <div className=" margin-bottom-0 asearchcheckwrap">
                                                      <div className="tooltip stem-tooltip">
                                                        {item.disabled && (
                                                          <div className="bottom">
                                                            {item.tooltip}
                                                          </div>
                                                        )}
                                                        <label
                                                          className={`${item.disabled &&
                                                            "disabled-checkbox"
                                                            } u-check padding-left-30 labelwrap`}
                                                        >
                                                          <input
                                                            className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                                                            type="checkbox"
                                                            id="chkIsStemCourse"
                                                            name="requirements"
                                                            value={item.label}
                                                            disabled={
                                                              item.disabled
                                                            }
                                                            onChange={(e) =>
                                                              handleSearch(
                                                                e,
                                                                "checkBox"
                                                              )
                                                            }
                                                          />
                                                          <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0 search-prog-ceckbox">
                                                            <i
                                                              className="fa"
                                                              data-check-icon=""
                                                            ></i>
                                                          </div>
                                                          {item.label}
                                                        </label>
                                                      </div>
                                                    </div>
                                                  </li>
                                                );
                                              })}
                                          </ul>
                                          <ul className="list-unstyled col-lg-7 col-md-7 col-sm-12 testRequiredUl padding-right-0 margin-bottom-0">
                                            <li className="margin-top-0 margin-bottom-3 padding-right-0">
                                              <div className="margin-bottom-0 asearchcheckwrap">
                                                <label className="u-check padding-left-30">
                                                  <input
                                                    className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                                                    type="checkbox"
                                                    id="chkScholarshipAvailable"
                                                    name="requirements"
                                                    value={
                                                      "Scholarship Available"
                                                    }
                                                    onChange={(e) =>
                                                      handleSearch(
                                                        e,
                                                        "checkBox"
                                                      )
                                                    }
                                                  />
                                                  <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0 search-prog-ceckbox">
                                                    <i
                                                      className="fa"
                                                      data-check-icon=""
                                                    ></i>
                                                  </div>
                                                  Scholarship Available
                                                </label>
                                              </div>
                                            </li>
                                            <li className="margin-top-0 margin-bottom-0 padding-right-0">
                                              <div className="margin-bottom-0 asearchcheckwrap">
                                                <label className="u-check padding-left-30">
                                                  <input
                                                    className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                                                    type="checkbox"
                                                    id="chkScholarshipAvailable"
                                                    name="requirements"
                                                    value={
                                                      "With 15 Years of Education"
                                                    }
                                                    onChange={(e) =>
                                                      handleSearch(
                                                        e,
                                                        "checkBox"
                                                      )
                                                    }
                                                  />
                                                  <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0 search-prog-ceckbox">
                                                    <i
                                                      className="fa"
                                                      data-check-icon=""
                                                    ></i>
                                                  </div>
                                                  With 15 Years of Education
                                                </label>
                                              </div>
                                            </li>
                                          </ul>
                                          <div className="col-sm-12 padding-left-0">
                                            <ul style={{ margin: 0 }}>
                                              <li className="margin-top-3 margin-bottom-0">
                                                <div className=" margin-bottom-0 asearchcheckwrap">
                                                  <label className="u-check padding-left-30">
                                                    <input
                                                      className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                                                      type="checkbox"
                                                      id="chkIsApplicationFeeWaiver"
                                                      name="requirements"
                                                      value={
                                                        "Application Fee Waiver (upto 100%)"
                                                      }
                                                      onChange={(e) =>
                                                        handleSearch(
                                                          e,
                                                          "checkBox"
                                                        )
                                                      }
                                                    />
                                                    <div className="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0 search-prog-ceckbox">
                                                      <i
                                                        className="fa"
                                                        data-check-icon=""
                                                      ></i>
                                                    </div>
                                                    Application Fee Waiver (upto
                                                    100%)
                                                  </label>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                          <div></div>
                                        </div>
                                      </div>
                                      <br />
                                    </div>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ padding: "10px 0px 0px" }}
                                  >
                                    <div
                                      className="col-lg-3 col-md-4 col-sm-3"
                                      onClick={clearAll}
                                    >
                                      <div
                                        className="hidden-xs  clearBtn"
                                      >
                                        Clear All
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-sm-4"></div>
                                    <div className="col-lg-3 col-md-4 col-sm-5">
                                      <div
                                        className="hidden-lg hidden-md hidden-sm clearBtn text-center"
                                      >
                                        {" "}
                                        Clear All
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-1"></div>
                      </form>{" "}
                    </div>
                  </div>
                  {!!searchRes?.length && <Result searchRes={searchRes} />}

                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SearchProgram;
