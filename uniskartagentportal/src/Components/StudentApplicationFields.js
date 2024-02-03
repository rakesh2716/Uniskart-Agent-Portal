import React from 'react'

const StudentApplicationFields = () => {
  return (
    <div className="" id="Applicationtab">
    <div className="MS-tabs">
        <ul className="nav nav-tabs">
            <li id="appliedCoursesView" className="active hide">
                <a href="#ApplyToPrograms" className="nav-link">Apply To Programs</a>
            </li>
        </ul>
        <div className="tab-content">
            <div className="tab-pane active in" id="ApplyToPrograms">
                <h3 className="title">Quick Add Program</h3>
                <div className="searchprogrambtn">
                    <a className="btn btn-primary">Search Program</a>
                </div>
                <div className="PIbox QAPForm">
                    <div className="row">
                        <div style={{ paddingLeft: 15, paddingRight: 15, paddingBottom: 15 }}>
                            We only show eligible courses for this student for the selected intake, year and university. To understand why certain courses are not eligible for this student, please go to Search Program.
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <div className=" year">
                                <label>Year</label>
                                <div className="btn-group bootstrap-select show-tick form-control">
                                    <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" data-id="Years" title="Select Year">
                                        <span className="filter-option pull-left">Select Year</span>
                                        <span className="bs-caret">
                                            <span className="caret"></span>
                                        </span>
                                    </button>
                                    <div className="dropdown-menu open">
                                        <div className="bs-searchbox">
                                            <input type="text" className="form-control" autocomplete="off" />
                                        </div>
                                        <ul className="dropdown-menu inner" role="menu">
                                            <li data-original-index="0">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">2024</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="1">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">2025</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="2">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">2026</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="3">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">2027</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <select className="form-control selectpicker" id="Years" multiple="multiple" name="Years" title="Select Year" data-max-options="1" tabindex="-98">
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="year">
                                <label>Intake</label>
                                <div className="btn-group bootstrap-select show-tick disabled form-control">
                                    <button type="button" className="btn dropdown-toggle disabled btn-default" data-toggle="dropdown" data-id="IntakeList" tabindex="-1" title="Select Intake">
                                        <span className="filter-option pull-left">Select Intake</span>
                                        <span className="bs-caret">
                                            <span className="caret"></span>
                                        </span>
                                    </button>
                                    <div className="dropdown-menu open">
                                        <div className="bs-searchbox">
                                            <input type="text" className="form-control" autocomplete="off" />
                                        </div>
                                        <ul className="dropdown-menu inner" role="menu">
                                            <li data-original-index="0">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">January</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="1">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">February</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="2">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">March</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="3">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">April</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="4">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">May</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="5">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">June</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="6">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">July</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="7">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">August</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="8">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">September</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="9">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">October</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="10">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">November</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="11">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">December</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="12">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">Spring</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="13">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">Summer</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="14">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">Fall</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="15">
                                                <a tabindex="0" className="" data-tokens="null">
                                                    <span className="text">Winter</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <select className="form-control selectpicker show-tick" id="IntakeList" multiple="multiple" name="IntakeList" title="Select Intake" data-max-options="1" disabled="" tabindex="-98">
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                        <option value="13">Spring</option>
                                        <option value="14">Summer</option>
                                        <option value="15">Fall</option>
                                        <option value="16">Winter</option>
                                    </select>
                                </div>
                                <select className="form-control" id="IntakeListCopy" multiple="multiple" name="IntakeListCopy" style={{ display: 'none' }}>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                    <option value="13">Spring</option>
                                    <option value="14">Summer</option>
                                    <option value="15">Fall</option>
                                    <option value="16">Winter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-3 quickAddSelect">
                            <div className="">
                                <label>University Name</label>
                                <div className="btn-group bootstrap-select show-tick disabled form-control q-program-universityname">
                                    <button type="button" className="btn dropdown-toggle disabled btn-default" data-toggle="dropdown" data-id="UniversityName" tabindex="-1" title="Search University">
                                        <span className="filter-option pull-left">Search University</span>&
                                        <span className="bs-caret">
                                            <span className="caret"></span>
                                        </span>
                                    </button>
                                    <div className="dropdown-menu open">
                                        <div className="bs-searchbox">
                                            <input type="text" className="form-control" autocomplete="off" />
                                        </div>
                                        <ul className="dropdown-menu inner" role="menu"></ul>
                                    </div>
                                    <select className="form-control selectpicker q-program-universityname show-tick" id="UniversityName" multiple="multiple" name="UniversityName" title="Search University" data-max-options="1" disabled="" tabindex="-98"></select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="">
                                <label>Course Name</label>
                                <div className="btn-group bootstrap-select show-tick disabled form-control">
                                    <button type="button" className="btn dropdown-toggle disabled btn-default" data-toggle="dropdown" data-id="CourseName" tabindex="-1" title="Search Program">
                                        <span className="filter-option pull-left">Search Program</span>
                                        <span className="bs-caret">
                                            <span className="caret"></span>
                                        </span>
                                    </button>
                                    <div className="dropdown-menu open">
                                        <div className="bs-searchbox">
                                            <input type="text" className="form-control" autocomplete="off" />
                                        </div>
                                        <ul className="dropdown-menu inner" role="menu"></ul>
                                    </div>
                                    <select className="form-control selectpicker show-tick" id="CourseName" multiple="multiple" name="CourseName" title="Search Program" data-max-options="1" disabled="" tabindex="-98"></select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" id="btnquickApply" disabled="" className="btn btn-primary">ADD</button>
                        </div>
                    </div>
                </div>
                <div id="modalExtraChoiceProgram" className="modal"></div>
                <div id="appliedCoursesViewHtml"></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default StudentApplicationFields