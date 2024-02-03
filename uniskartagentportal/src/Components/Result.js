import React from "react";

const Result = ({searchRes}) => {
  let searchArr = searchRes[0]?.paginatedResults

  return (
    <div
      className="container-fluid bg-white margin-top-6rem m-t-83 SearchProgramFontFamily"
      style={{ clear: "left", marginBottom: "13px" ,display:""}}
      id="showdta"
    >
      <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12">
        <div id="search_filter_box" className="hidden-lg hidden-md hidden-sm">
          <br />
          <h2 className="h5 text-uppercase font-bold justify-content-betweenHeading search_filter_box_h2">
            Show Filters
          </h2>
        </div>
        <div id="sticky-anchortwo"></div>
        <div id="stickyonetwo" className="filterdiv hidden-xs">
          <img src="/assets/images/filter.svg" alt="Filter" /> Filters
        </div>
        <div id="sidedta" className="" style={{ display: "block" }}>
          <div
            className="search_result_filter_options1 eligibility"
            id="divUniversity"
          >
            <h2 className="h5 text-uppercase font-bold justify-content-betweenHeading bg-primary">
              ELIGIBILITY
            </h2>
            <div className="eligibility-panel">
              <form>
                <div className="col-sm-12">
                  <label>Select Student</label>
                  <div className="btn-group bootstrap-select show-tick form-control eligibility_select eligibility_student_select yearfield mydropdown-menu">
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-default"
                      data-toggle="dropdown"
                      data-id="eli_student"
                      title="Select..."
                    >
                      <span className="filter-option pull-left">Select...</span>
                      &nbsp;
                    </button>
                    <div className="dropdown-menu open">
                      <div className="bs-searchbox">
                        <input
                          type="text"
                          className="form-control"
                          autocomplete="off"
                        />
                      </div>
                      <ul className="dropdown-menu inner" role="menu">
                        <div
                          className="dot-flashing"
                          style={{ display: "none" }}
                        ></div>
                        <div
                          className="no-records-found"
                          style={{ display: "none" }}
                        >
                          No records found
                        </div>
                        <a
                          href="#"
                          id="btn_AddStudent"
                          name="btn_AddStudent"
                          className="btn btn-primary"
                        >
                          Add New Student
                        </a>
                      </ul>
                      <div
                        className="dot-flashing"
                        style={{ display: "none" }}
                      ></div>
                      <div
                        className="no-records-found"
                        style={{ display: "none" }}
                      >
                        No records found
                      </div>
                      <a
                        href="#"
                        id="btn_AddStudent"
                        name="btn_AddStudent"
                        className="btn btn-primary"
                      >
                        Add New Student
                      </a>
                    </div>
                    <select
                      title="Select..."
                      className="form-control eligibility_select eligibility_student_select selectpicker show-tick yearfield mydropdown-menu"
                      multiple="multiple"
                      data-live-search="true"
                      data-dropup-auto="false"
                      data-focus-off="true"
                      style={{ textTransform: "capitalize" }}
                      data-max-options="1"
                      id="eli_student"
                      name="eli_student"
                      tabindex="-98"
                    ></select>
                  </div>
                </div>
                <div className="col-sm-12">
                  <label>Country of Residence *</label>
                  <div className="btn-group bootstrap-select show-tick form-control eligibility_select yearfield mandatory_filed">
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-default"
                      data-toggle="dropdown"
                      data-id="eli_nationality"
                      title="Select..."
                    >
                      <span className="filter-option pull-left">Select...</span>
                      &nbsp;
                    </button>
                    <div className="dropdown-menu open">
                      <div className="bs-searchbox">
                        <input
                          type="text"
                          className="form-control"
                          autocomplete="off"
                        />
                      </div>
                      <ul className="dropdown-menu inner" role="menu">
                        <li data-original-index="0">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Afghanistan</span>
                          </a>
                        </li>
                        <li data-original-index="1">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Albania</span>
                          </a>
                        </li>
                        <li data-original-index="2">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Algeria</span>
                          </a>
                        </li>
                        <li data-original-index="3">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">American Samoa</span>
                          </a>
                        </li>
                        <li data-original-index="4">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Andorra</span>
                          </a>
                        </li>
                        <li data-original-index="5">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Angola</span>
                          </a>
                        </li>
                        <li data-original-index="6">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Anguilla</span>
                          </a>
                        </li>
                        <li data-original-index="7">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Antarctica</span>
                          </a>
                        </li>
                        <li data-original-index="8">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Antigua and Barbuda</span>
                          </a>
                        </li>
                        <li data-original-index="9">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Argentina</span>
                          </a>
                        </li>
                        <li data-original-index="10">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Armenia</span>
                          </a>
                        </li>
                        <li data-original-index="11">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Aruba</span>
                          </a>
                        </li>
                        <li data-original-index="12">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Australia</span>
                          </a>
                        </li>
                        <li data-original-index="13">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Austria</span>
                          </a>
                        </li>
                        <li data-original-index="14">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Azerbaijan</span>
                          </a>
                        </li>
                        <li data-original-index="15">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Bahamas</span>
                          </a>
                        </li>
                        <li data-original-index="16">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Bahrain</span>
                          </a>
                        </li>
                        <li data-original-index="17">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Bangladesh</span>
                          </a>
                        </li>
                        <li data-original-index="18">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Barbados</span>
                          </a>
                        </li>
                        <li data-original-index="19">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Belarus</span>
                          </a>
                        </li>
                        <li data-original-index="20">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Belgium</span>
                          </a>
                        </li>
                        <li data-original-index="21">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Belize</span>
                          </a>
                        </li>
                        <li data-original-index="22">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Benin</span>
                          </a>
                        </li>
                        <li data-original-index="23">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Bermuda</span>
                          </a>
                        </li>
                        <li data-original-index="24">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Bhutan</span>
                          </a>
                        </li>
                        <li data-original-index="25">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Bolivia</span>
                          </a>
                        </li>
                        <li data-original-index="26">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Bosnia and Herzegovina</span>
                          </a>
                        </li>
                        <li data-original-index="27">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Botswana</span>
                          </a>
                        </li>
                        <li data-original-index="28">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Bouvet Island</span>
                          </a>
                        </li>
                        <li data-original-index="29">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Brazil</span>
                          </a>
                        </li>
                        <li data-original-index="30">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              British Indian Ocean Territory
                            </span>
                          </a>
                        </li>
                        <li data-original-index="31">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Brunei Darussalam</span>
                          </a>
                        </li>
                        <li data-original-index="32">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Bulgaria</span>
                          </a>
                        </li>
                        <li data-original-index="33">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Burkina Faso</span>
                          </a>
                        </li>
                        <li data-original-index="34">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Burundi</span>
                          </a>
                        </li>
                        <li data-original-index="35">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Cambodia</span>
                          </a>
                        </li>
                        <li data-original-index="36">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Cameroon</span>
                          </a>
                        </li>
                        <li data-original-index="37">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Canada</span>
                          </a>
                        </li>
                        <li data-original-index="38">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Cape Verde</span>
                          </a>
                        </li>
                        <li data-original-index="39">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Cayman Islands</span>
                          </a>
                        </li>
                        <li data-original-index="40">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Central African Republic
                            </span>
                          </a>
                        </li>
                        <li data-original-index="41">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Chad</span>
                          </a>
                        </li>
                        <li data-original-index="42">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Chile</span>
                          </a>
                        </li>
                        <li data-original-index="43">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">China</span>
                          </a>
                        </li>
                        <li data-original-index="44">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Christmas Island</span>
                          </a>
                        </li>
                        <li data-original-index="45">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Cocos (Keeling) Islands
                            </span>
                          </a>
                        </li>
                        <li data-original-index="46">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Colombia</span>
                          </a>
                        </li>
                        <li data-original-index="47">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Comoros</span>
                          </a>
                        </li>
                        <li data-original-index="48">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Congo</span>
                          </a>
                        </li>
                        <li data-original-index="49">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Congo, the Democratic Republic of the
                            </span>
                          </a>
                        </li>
                        <li data-original-index="50">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Cook Islands</span>
                          </a>
                        </li>
                        <li data-original-index="51">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Costa Rica</span>
                          </a>
                        </li>
                        <li data-original-index="52">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Cote D'Ivoire</span>
                          </a>
                        </li>
                        <li data-original-index="53">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Croatia</span>
                          </a>
                        </li>
                        <li data-original-index="54">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Cuba</span>
                          </a>
                        </li>
                        <li data-original-index="55">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Cyprus</span>
                          </a>
                        </li>
                        <li data-original-index="56">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Czech Republic</span>
                          </a>
                        </li>
                        <li data-original-index="57">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Denmark</span>
                          </a>
                        </li>
                        <li data-original-index="58">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Djibouti</span>
                          </a>
                        </li>
                        <li data-original-index="59">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Dominica</span>
                          </a>
                        </li>
                        <li data-original-index="60">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Dominican Republic</span>
                          </a>
                        </li>
                        <li data-original-index="61">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Ecuador</span>
                          </a>
                        </li>
                        <li data-original-index="62">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Egypt</span>
                          </a>
                        </li>
                        <li data-original-index="63">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">El Salvador</span>
                          </a>
                        </li>
                        <li data-original-index="64">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Equatorial Guinea</span>
                          </a>
                        </li>
                        <li data-original-index="65">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Eritrea</span>
                          </a>
                        </li>
                        <li data-original-index="66">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Estonia</span>
                          </a>
                        </li>
                        <li data-original-index="67">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Ethiopia</span>
                          </a>
                        </li>
                        <li data-original-index="68">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Falkland Islands (Malvinas)
                            </span>
                          </a>
                        </li>
                        <li data-original-index="69">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Faroe Islands</span>
                          </a>
                        </li>
                        <li data-original-index="70">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Fiji</span>
                          </a>
                        </li>
                        <li data-original-index="71">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Finland</span>
                          </a>
                        </li>
                        <li data-original-index="72">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">France</span>
                          </a>
                        </li>
                        <li data-original-index="73">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">French Guiana</span>
                          </a>
                        </li>
                        <li data-original-index="74">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">French Polynesia</span>
                          </a>
                        </li>
                        <li data-original-index="75">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              French Southern Territories
                            </span>
                          </a>
                        </li>
                        <li data-original-index="76">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Gabon</span>
                          </a>
                        </li>
                        <li data-original-index="77">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Gambia</span>
                          </a>
                        </li>
                        <li data-original-index="78">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Georgia</span>
                          </a>
                        </li>
                        <li data-original-index="79">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Germany</span>
                          </a>
                        </li>
                        <li data-original-index="80">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Ghana</span>
                          </a>
                        </li>
                        <li data-original-index="81">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Gibraltar</span>
                          </a>
                        </li>
                        <li data-original-index="82">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Greece</span>
                          </a>
                        </li>
                        <li data-original-index="83">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Greenland</span>
                          </a>
                        </li>
                        <li data-original-index="84">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Grenada</span>
                          </a>
                        </li>
                        <li data-original-index="85">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Guadeloupe</span>
                          </a>
                        </li>
                        <li data-original-index="86">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Guam</span>
                          </a>
                        </li>
                        <li data-original-index="87">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Guatemala</span>
                          </a>
                        </li>
                        <li data-original-index="88">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Guinea</span>
                          </a>
                        </li>
                        <li data-original-index="89">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Guinea-Bissau</span>
                          </a>
                        </li>
                        <li data-original-index="90">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Guyana</span>
                          </a>
                        </li>
                        <li data-original-index="91">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Haiti</span>
                          </a>
                        </li>
                        <li data-original-index="92">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Heard Island and Mcdonald Islands
                            </span>
                          </a>
                        </li>
                        <li data-original-index="93">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Holy See (Vatican City State)
                            </span>
                          </a>
                        </li>
                        <li data-original-index="94">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Honduras</span>
                          </a>
                        </li>
                        <li data-original-index="95">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Hong Kong</span>
                          </a>
                        </li>
                        <li data-original-index="96">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Hungary</span>
                          </a>
                        </li>
                        <li data-original-index="97">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Iceland</span>
                          </a>
                        </li>
                        <li data-original-index="98">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">India</span>
                          </a>
                        </li>
                        <li data-original-index="99">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Indonesia</span>
                          </a>
                        </li>
                        <li data-original-index="100">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Iran, Islamic Republic of
                            </span>
                          </a>
                        </li>
                        <li data-original-index="101">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Iraq</span>
                          </a>
                        </li>
                        <li data-original-index="102">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Ireland</span>
                          </a>
                        </li>
                        <li data-original-index="103">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Israel</span>
                          </a>
                        </li>
                        <li data-original-index="104">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Italy</span>
                          </a>
                        </li>
                        <li data-original-index="105">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Jamaica</span>
                          </a>
                        </li>
                        <li data-original-index="106">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Japan</span>
                          </a>
                        </li>
                        <li data-original-index="107">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Jordan</span>
                          </a>
                        </li>
                        <li data-original-index="108">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Kazakhstan</span>
                          </a>
                        </li>
                        <li data-original-index="109">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Kenya</span>
                          </a>
                        </li>
                        <li data-original-index="110">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Kiribati</span>
                          </a>
                        </li>
                        <li data-original-index="111">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Korea, Democratic People's Republic of
                            </span>
                          </a>
                        </li>
                        <li data-original-index="112">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Korea, Republic of</span>
                          </a>
                        </li>
                        <li data-original-index="113">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Kosovo</span>
                          </a>
                        </li>
                        <li data-original-index="114">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Kuwait</span>
                          </a>
                        </li>
                        <li data-original-index="115">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Kyrgyzstan</span>
                          </a>
                        </li>
                        <li data-original-index="116">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Lao People's Democratic Republic
                            </span>
                          </a>
                        </li>
                        <li data-original-index="117">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Latvia</span>
                          </a>
                        </li>
                        <li data-original-index="118">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Lebanon</span>
                          </a>
                        </li>
                        <li data-original-index="119">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Lesotho</span>
                          </a>
                        </li>
                        <li data-original-index="120">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Liberia</span>
                          </a>
                        </li>
                        <li data-original-index="121">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Libyan Arab Jamahiriya</span>
                          </a>
                        </li>
                        <li data-original-index="122">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Liechtenstein</span>
                          </a>
                        </li>
                        <li data-original-index="123">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Lithuania</span>
                          </a>
                        </li>
                        <li data-original-index="124">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Luxembourg</span>
                          </a>
                        </li>
                        <li data-original-index="125">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Macao</span>
                          </a>
                        </li>
                        <li data-original-index="126">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Macedonia, the Former Yugoslav Republic of
                            </span>
                          </a>
                        </li>
                        <li data-original-index="127">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Madagascar</span>
                          </a>
                        </li>
                        <li data-original-index="128">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Malawi</span>
                          </a>
                        </li>
                        <li data-original-index="129">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Malaysia</span>
                          </a>
                        </li>
                        <li data-original-index="130">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Maldives</span>
                          </a>
                        </li>
                        <li data-original-index="131">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Mali</span>
                          </a>
                        </li>
                        <li data-original-index="132">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Malta</span>
                          </a>
                        </li>
                        <li data-original-index="133">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Marshall Islands</span>
                          </a>
                        </li>
                        <li data-original-index="134">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Martinique</span>
                          </a>
                        </li>
                        <li data-original-index="135">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Mauritania</span>
                          </a>
                        </li>
                        <li data-original-index="136">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Mauritius</span>
                          </a>
                        </li>
                        <li data-original-index="137">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Mayotte</span>
                          </a>
                        </li>
                        <li data-original-index="138">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Mexico</span>
                          </a>
                        </li>
                        <li data-original-index="139">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Micronesia, Federated States of
                            </span>
                          </a>
                        </li>
                        <li data-original-index="140">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Moldova, Republic of</span>
                          </a>
                        </li>
                        <li data-original-index="141">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Monaco</span>
                          </a>
                        </li>
                        <li data-original-index="142">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Mongolia</span>
                          </a>
                        </li>
                        <li data-original-index="143">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Montserrat</span>
                          </a>
                        </li>
                        <li data-original-index="144">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Morocco</span>
                          </a>
                        </li>
                        <li data-original-index="145">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Mozambique</span>
                          </a>
                        </li>
                        <li data-original-index="146">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Myanmar</span>
                          </a>
                        </li>
                        <li data-original-index="147">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Namibia</span>
                          </a>
                        </li>
                        <li data-original-index="148">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Nauru</span>
                          </a>
                        </li>
                        <li data-original-index="149">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Nepal</span>
                          </a>
                        </li>
                        <li data-original-index="150">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Netherlands</span>
                          </a>
                        </li>
                        <li data-original-index="151">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Netherlands Antilles</span>
                          </a>
                        </li>
                        <li data-original-index="152">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">New Caledonia</span>
                          </a>
                        </li>
                        <li data-original-index="153">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">New Zealand</span>
                          </a>
                        </li>
                        <li data-original-index="154">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Nicaragua</span>
                          </a>
                        </li>
                        <li data-original-index="155">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Niger</span>
                          </a>
                        </li>
                        <li data-original-index="156">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Nigeria</span>
                          </a>
                        </li>
                        <li data-original-index="157">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Niue</span>
                          </a>
                        </li>
                        <li data-original-index="158">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Norfolk Island</span>
                          </a>
                        </li>
                        <li data-original-index="159">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Northern Mariana Islands
                            </span>
                          </a>
                        </li>
                        <li data-original-index="160">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Norway</span>
                          </a>
                        </li>
                        <li data-original-index="161">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Oman</span>
                          </a>
                        </li>
                        <li data-original-index="162">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Pakistan</span>
                          </a>
                        </li>
                        <li data-original-index="163">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Palau</span>
                          </a>
                        </li>
                        <li data-original-index="164">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Palestinian Territory, Occupied
                            </span>
                          </a>
                        </li>
                        <li data-original-index="165">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Panama</span>
                          </a>
                        </li>
                        <li data-original-index="166">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Papua New Guinea</span>
                          </a>
                        </li>
                        <li data-original-index="167">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Paraguay</span>
                          </a>
                        </li>
                        <li data-original-index="168">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Peru</span>
                          </a>
                        </li>
                        <li data-original-index="169">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Philippines</span>
                          </a>
                        </li>
                        <li data-original-index="170">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Pitcairn</span>
                          </a>
                        </li>
                        <li data-original-index="171">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Poland</span>
                          </a>
                        </li>
                        <li data-original-index="172">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Portugal</span>
                          </a>
                        </li>
                        <li data-original-index="173">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Puerto Rico</span>
                          </a>
                        </li>
                        <li data-original-index="174">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Qatar</span>
                          </a>
                        </li>
                        <li data-original-index="175">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Reunion</span>
                          </a>
                        </li>
                        <li data-original-index="176">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Romania</span>
                          </a>
                        </li>
                        <li data-original-index="177">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Russian Federation</span>
                          </a>
                        </li>
                        <li data-original-index="178">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Rwanda</span>
                          </a>
                        </li>
                        <li data-original-index="179">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Saint Helena</span>
                          </a>
                        </li>
                        <li data-original-index="180">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Saint Kitts and Nevis</span>
                          </a>
                        </li>
                        <li data-original-index="181">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Saint Lucia</span>
                          </a>
                        </li>
                        <li data-original-index="182">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Saint Pierre and Miquelon
                            </span>
                          </a>
                        </li>
                        <li data-original-index="183">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Saint Vincent and the Grenadines
                            </span>
                          </a>
                        </li>
                        <li data-original-index="184">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Samoa</span>
                          </a>
                        </li>
                        <li data-original-index="185">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">San Marino</span>
                          </a>
                        </li>
                        <li data-original-index="186">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Sao Tome and Principe</span>
                          </a>
                        </li>
                        <li data-original-index="187">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Saudi Arabia</span>
                          </a>
                        </li>
                        <li data-original-index="188">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Senegal</span>
                          </a>
                        </li>
                        <li data-original-index="189">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Serbia and Montenegro</span>
                          </a>
                        </li>
                        <li data-original-index="190">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Seychelles</span>
                          </a>
                        </li>
                        <li data-original-index="191">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Sierra Leone</span>
                          </a>
                        </li>
                        <li data-original-index="192">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Singapore</span>
                          </a>
                        </li>
                        <li data-original-index="193">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Slovakia</span>
                          </a>
                        </li>
                        <li data-original-index="194">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Slovenia</span>
                          </a>
                        </li>
                        <li data-original-index="195">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Solomon Islands</span>
                          </a>
                        </li>
                        <li data-original-index="196">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Somalia</span>
                          </a>
                        </li>
                        <li data-original-index="197">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">South Africa</span>
                          </a>
                        </li>
                        <li data-original-index="198">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              South Georgia and the South Sandwich Islands
                            </span>
                          </a>
                        </li>
                        <li data-original-index="199">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Spain</span>
                          </a>
                        </li>
                        <li data-original-index="200">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Sri Lanka</span>
                          </a>
                        </li>
                        <li data-original-index="201">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Sudan</span>
                          </a>
                        </li>
                        <li data-original-index="202">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Suriname</span>
                          </a>
                        </li>
                        <li data-original-index="203">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Svalbard and Jan Mayen</span>
                          </a>
                        </li>
                        <li data-original-index="204">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Swaziland</span>
                          </a>
                        </li>
                        <li data-original-index="205">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Sweden</span>
                          </a>
                        </li>
                        <li data-original-index="206">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Switzerland</span>
                          </a>
                        </li>
                        <li data-original-index="207">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Syrian Arab Republic</span>
                          </a>
                        </li>
                        <li data-original-index="208">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Taiwan, Province of China
                            </span>
                          </a>
                        </li>
                        <li data-original-index="209">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Tajikistan</span>
                          </a>
                        </li>
                        <li data-original-index="210">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Tanzania, United Republic of
                            </span>
                          </a>
                        </li>
                        <li data-original-index="211">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Thailand</span>
                          </a>
                        </li>
                        <li data-original-index="212">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Timor-Leste</span>
                          </a>
                        </li>
                        <li data-original-index="213">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Togo</span>
                          </a>
                        </li>
                        <li data-original-index="214">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Tokelau</span>
                          </a>
                        </li>
                        <li data-original-index="215">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Tonga</span>
                          </a>
                        </li>
                        <li data-original-index="216">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Trinidad and Tobago</span>
                          </a>
                        </li>
                        <li data-original-index="217">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Tunisia</span>
                          </a>
                        </li>
                        <li data-original-index="218">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Turkey</span>
                          </a>
                        </li>
                        <li data-original-index="219">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Turkmenistan</span>
                          </a>
                        </li>
                        <li data-original-index="220">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Turks and Caicos Islands
                            </span>
                          </a>
                        </li>
                        <li data-original-index="221">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Tuvalu</span>
                          </a>
                        </li>
                        <li data-original-index="222">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Uganda</span>
                          </a>
                        </li>
                        <li data-original-index="223">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Ukraine</span>
                          </a>
                        </li>
                        <li data-original-index="224">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">United Arab Emirates</span>
                          </a>
                        </li>
                        <li data-original-index="225">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">United Kingdom</span>
                          </a>
                        </li>
                        <li data-original-index="226">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">United States</span>
                          </a>
                        </li>
                        <li data-original-index="227">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              United States Minor Outlying Islands
                            </span>
                          </a>
                        </li>
                        <li data-original-index="228">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Uruguay</span>
                          </a>
                        </li>
                        <li data-original-index="229">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Uzbekistan</span>
                          </a>
                        </li>
                        <li data-original-index="230">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Vanuatu</span>
                          </a>
                        </li>
                        <li data-original-index="231">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Venezuela</span>
                          </a>
                        </li>
                        <li data-original-index="232">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Vietnam</span>
                          </a>
                        </li>
                        <li data-original-index="233">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Virgin Islands, British
                            </span>
                          </a>
                        </li>
                        <li data-original-index="234">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Virgin Islands, U.s.</span>
                          </a>
                        </li>
                        <li data-original-index="235">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Wallis and Futuna</span>
                          </a>
                        </li>
                        <li data-original-index="236">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Western Sahara</span>
                          </a>
                        </li>
                        <li data-original-index="237">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Yemen</span>
                          </a>
                        </li>
                        <li data-original-index="238">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Zambia</span>
                          </a>
                        </li>
                        <li data-original-index="239">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Zimbabwe</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <select
                      title="Select..."
                      className="form-control eligibility_select selectpicker show-tick yearfield mandatory_filed"
                      id="eli_nationality"
                      name="eli_nationality"
                      multiple="multiple"
                      data-live-search="true"
                      data-dropup-auto="false"
                      data-focus-off="true"
                      style={{ textTransform: "capitalize" }}
                      data-max-options="1"
                      tabindex="-98"
                    >
                      <option value="1">Afghanistan</option>
                      <option value="2">Albania</option>
                      <option value="3">Algeria</option>
                      <option value="4">American Samoa</option>
                      <option value="5">Andorra</option>
                      <option value="6">Angola</option>
                      <option value="7">Anguilla</option>
                      <option value="8">Antarctica</option>
                      <option value="9">Antigua and Barbuda</option>
                      <option value="10">Argentina</option>
                      <option value="11">Armenia</option>
                      <option value="12">Aruba</option>
                      <option value="13">Australia</option>
                      <option value="14">Austria</option>
                      <option value="15">Azerbaijan</option>
                      <option value="16">Bahamas</option>
                      <option value="17">Bahrain</option>
                      <option value="18">Bangladesh</option>
                      <option value="19">Barbados</option>
                      <option value="20">Belarus</option>
                      <option value="21">Belgium</option>
                      <option value="22">Belize</option>
                      <option value="23">Benin</option>
                      <option value="24">Bermuda</option>
                      <option value="25">Bhutan</option>
                      <option value="26">Bolivia</option>
                      <option value="27">Bosnia and Herzegovina</option>
                      <option value="28">Botswana</option>
                      <option value="29">Bouvet Island</option>
                      <option value="30">Brazil</option>
                      <option value="31">British Indian Ocean Territory</option>
                      <option value="32">Brunei Darussalam</option>
                      <option value="33">Bulgaria</option>
                      <option value="34">Burkina Faso</option>
                      <option value="35">Burundi</option>
                      <option value="36">Cambodia</option>
                      <option value="37">Cameroon</option>
                      <option value="38">Canada</option>
                      <option value="39">Cape Verde</option>
                      <option value="40">Cayman Islands</option>
                      <option value="41">Central African Republic</option>
                      <option value="42">Chad</option>
                      <option value="43">Chile</option>
                      <option value="44">China</option>
                      <option value="45">Christmas Island</option>
                      <option value="46">Cocos (Keeling) Islands</option>
                      <option value="47">Colombia</option>
                      <option value="48">Comoros</option>
                      <option value="49">Congo</option>
                      <option value="50">
                        Congo, the Democratic Republic of the
                      </option>
                      <option value="51">Cook Islands</option>
                      <option value="52">Costa Rica</option>
                      <option value="53">Cote D'Ivoire</option>
                      <option value="54">Croatia</option>
                      <option value="55">Cuba</option>
                      <option value="56">Cyprus</option>
                      <option value="57">Czech Republic</option>
                      <option value="58">Denmark</option>
                      <option value="59">Djibouti</option>
                      <option value="60">Dominica</option>
                      <option value="61">Dominican Republic</option>
                      <option value="62">Ecuador</option>
                      <option value="63">Egypt</option>
                      <option value="64">El Salvador</option>
                      <option value="65">Equatorial Guinea</option>
                      <option value="66">Eritrea</option>
                      <option value="67">Estonia</option>
                      <option value="68">Ethiopia</option>
                      <option value="69">Falkland Islands (Malvinas)</option>
                      <option value="70">Faroe Islands</option>
                      <option value="71">Fiji</option>
                      <option value="72">Finland</option>
                      <option value="73">France</option>
                      <option value="74">French Guiana</option>
                      <option value="75">French Polynesia</option>
                      <option value="76">French Southern Territories</option>
                      <option value="77">Gabon</option>
                      <option value="78">Gambia</option>
                      <option value="79">Georgia</option>
                      <option value="80">Germany</option>
                      <option value="81">Ghana</option>
                      <option value="82">Gibraltar</option>
                      <option value="83">Greece</option>
                      <option value="84">Greenland</option>
                      <option value="85">Grenada</option>
                      <option value="86">Guadeloupe</option>
                      <option value="87">Guam</option>
                      <option value="88">Guatemala</option>
                      <option value="89">Guinea</option>
                      <option value="90">Guinea-Bissau</option>
                      <option value="91">Guyana</option>
                      <option value="92">Haiti</option>
                      <option value="93">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="94">Holy See (Vatican City State)</option>
                      <option value="95">Honduras</option>
                      <option value="96">Hong Kong</option>
                      <option value="97">Hungary</option>
                      <option value="98">Iceland</option>
                      <option value="99">India</option>
                      <option value="100">Indonesia</option>
                      <option value="101">Iran, Islamic Republic of</option>
                      <option value="102">Iraq</option>
                      <option value="103">Ireland</option>
                      <option value="104">Israel</option>
                      <option value="105">Italy</option>
                      <option value="106">Jamaica</option>
                      <option value="107">Japan</option>
                      <option value="108">Jordan</option>
                      <option value="109">Kazakhstan</option>
                      <option value="110">Kenya</option>
                      <option value="111">Kiribati</option>
                      <option value="112">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="113">Korea, Republic of</option>
                      <option value="240">Kosovo</option>
                      <option value="114">Kuwait</option>
                      <option value="115">Kyrgyzstan</option>
                      <option value="116">
                        Lao People's Democratic Republic
                      </option>
                      <option value="117">Latvia</option>
                      <option value="118">Lebanon</option>
                      <option value="119">Lesotho</option>
                      <option value="120">Liberia</option>
                      <option value="121">Libyan Arab Jamahiriya</option>
                      <option value="122">Liechtenstein</option>
                      <option value="123">Lithuania</option>
                      <option value="124">Luxembourg</option>
                      <option value="125">Macao</option>
                      <option value="126">
                        Macedonia, the Former Yugoslav Republic of
                      </option>
                      <option value="127">Madagascar</option>
                      <option value="128">Malawi</option>
                      <option value="129">Malaysia</option>
                      <option value="130">Maldives</option>
                      <option value="131">Mali</option>
                      <option value="132">Malta</option>
                      <option value="133">Marshall Islands</option>
                      <option value="134">Martinique</option>
                      <option value="135">Mauritania</option>
                      <option value="136">Mauritius</option>
                      <option value="137">Mayotte</option>
                      <option value="138">Mexico</option>
                      <option value="139">
                        Micronesia, Federated States of
                      </option>
                      <option value="140">Moldova, Republic of</option>
                      <option value="141">Monaco</option>
                      <option value="142">Mongolia</option>
                      <option value="143">Montserrat</option>
                      <option value="144">Morocco</option>
                      <option value="145">Mozambique</option>
                      <option value="146">Myanmar</option>
                      <option value="147">Namibia</option>
                      <option value="148">Nauru</option>
                      <option value="149">Nepal</option>
                      <option value="150">Netherlands</option>
                      <option value="151">Netherlands Antilles</option>
                      <option value="152">New Caledonia</option>
                      <option value="153">New Zealand</option>
                      <option value="154">Nicaragua</option>
                      <option value="155">Niger</option>
                      <option value="156">Nigeria</option>
                      <option value="157">Niue</option>
                      <option value="158">Norfolk Island</option>
                      <option value="159">Northern Mariana Islands</option>
                      <option value="160">Norway</option>
                      <option value="161">Oman</option>
                      <option value="162">Pakistan</option>
                      <option value="163">Palau</option>
                      <option value="164">
                        Palestinian Territory, Occupied
                      </option>
                      <option value="165">Panama</option>
                      <option value="166">Papua New Guinea</option>
                      <option value="167">Paraguay</option>
                      <option value="168">Peru</option>
                      <option value="169">Philippines</option>
                      <option value="170">Pitcairn</option>
                      <option value="171">Poland</option>
                      <option value="172">Portugal</option>
                      <option value="173">Puerto Rico</option>
                      <option value="174">Qatar</option>
                      <option value="175">Reunion</option>
                      <option value="176">Romania</option>
                      <option value="177">Russian Federation</option>
                      <option value="178">Rwanda</option>
                      <option value="179">Saint Helena</option>
                      <option value="180">Saint Kitts and Nevis</option>
                      <option value="181">Saint Lucia</option>
                      <option value="182">Saint Pierre and Miquelon</option>
                      <option value="183">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="184">Samoa</option>
                      <option value="185">San Marino</option>
                      <option value="186">Sao Tome and Principe</option>
                      <option value="187">Saudi Arabia</option>
                      <option value="188">Senegal</option>
                      <option value="189">Serbia and Montenegro</option>
                      <option value="190">Seychelles</option>
                      <option value="191">Sierra Leone</option>
                      <option value="192">Singapore</option>
                      <option value="193">Slovakia</option>
                      <option value="194">Slovenia</option>
                      <option value="195">Solomon Islands</option>
                      <option value="196">Somalia</option>
                      <option value="197">South Africa</option>
                      <option value="198">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="199">Spain</option>
                      <option value="200">Sri Lanka</option>
                      <option value="201">Sudan</option>
                      <option value="202">Suriname</option>
                      <option value="203">Svalbard and Jan Mayen</option>
                      <option value="204">Swaziland</option>
                      <option value="205">Sweden</option>
                      <option value="206">Switzerland</option>
                      <option value="207">Syrian Arab Republic</option>
                      <option value="208">Taiwan, Province of China</option>
                      <option value="209">Tajikistan</option>
                      <option value="210">Tanzania, United Republic of</option>
                      <option value="211">Thailand</option>
                      <option value="212">Timor-Leste</option>
                      <option value="213">Togo</option>
                      <option value="214">Tokelau</option>
                      <option value="215">Tonga</option>
                      <option value="216">Trinidad and Tobago</option>
                      <option value="217">Tunisia</option>
                      <option value="218">Turkey</option>
                      <option value="219">Turkmenistan</option>
                      <option value="220">Turks and Caicos Islands</option>
                      <option value="221">Tuvalu</option>
                      <option value="222">Uganda</option>
                      <option value="223">Ukraine</option>
                      <option value="224">United Arab Emirates</option>
                      <option value="225">United Kingdom</option>
                      <option value="226">United States</option>
                      <option value="227">
                        United States Minor Outlying Islands
                      </option>
                      <option value="228">Uruguay</option>
                      <option value="229">Uzbekistan</option>
                      <option value="230">Vanuatu</option>
                      <option value="231">Venezuela</option>
                      <option value="232">Vietnam</option>
                      <option value="233">Virgin Islands, British</option>
                      <option value="234">Virgin Islands, U.s.</option>
                      <option value="235">Wallis and Futuna</option>
                      <option value="236">Western Sahara</option>
                      <option value="237">Yemen</option>
                      <option value="238">Zambia</option>
                      <option value="239">Zimbabwe</option>
                    </select>
                  </div>
                </div>
                <div
                  className="col-sm-12 error_eli_nationality error_mandate"
                  style={{ display: "none", color: "red" }}
                >
                  Country of Residence is required
                </div>
                <div className="col-sm-12 custTip">
                  <label>State of Residence *</label>
                  <div style={{ verticalAlign: "inherit" }} className="tooltip">
                    <div className="right">
                      <div className="text-content">
                        Fill country of residence first to enable State of
                        Residence
                      </div>
                    </div>
                  </div>
                  <div className="btn-group bootstrap-select show-tick form-control eligibility_select yearfield mandatory_filed">
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-default"
                      data-toggle="dropdown"
                      data-id="eli_stateOfResident"
                      title="Select..."
                    >
                      <span className="filter-option pull-left">Select...</span>
                      &nbsp;
                    </button>
                    <div className="dropdown-menu open">
                      <div className="bs-searchbox">
                        <input
                          type="text"
                          className="form-control"
                          autocomplete="off"
                        />
                      </div>
                      <ul className="dropdown-menu inner" role="menu">
                        <li data-original-index="0">
                          <a tabindex="0" className="" data-tokens="null"></a>
                        </li>
                      </ul>
                    </div>
                    <select
                      title="Select..."
                      className="form-control eligibility_select selectpicker show-tick yearfield mandatory_filed"
                      id="eli_stateOfResident"
                      name="eli_stateOfResident"
                      multiple="multiple"
                      data-live-search="true"
                      data-dropup-auto="false"
                      data-focus-off="true"
                      style={{ textTransform: "capitalize" }}
                      data-max-options="1"
                      tabindex="-98"
                    >
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div
                  className="col-sm-12 error_eli_stateOfResident error_mandate"
                  style={{ display: "none", color: "red" }}
                >
                  State of Residence is required
                </div>
                <div className="col-sm-12">
                  <label>Highest Qualification Studied *</label>
                  <div className="btn-group bootstrap-select show-tick form-control eligibility_select yearfield mandatory_filed">
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-default"
                      data-toggle="dropdown"
                      data-id="eli_levelofstudy"
                      title="Select..."
                    >
                      <span className="filter-option pull-left">Select...</span>
                      &nbsp;
                    </button>
                    <div className="dropdown-menu open">
                      <div className="bs-searchbox">
                        <input
                          type="text"
                          className="form-control"
                          autocomplete="off"
                        />
                      </div>
                      <ul className="dropdown-menu inner" role="menu">
                        <li data-original-index="0">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Postgraduate</span>
                          </a>
                        </li>
                        <li data-original-index="1">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">Undergraduate</span>
                          </a>
                        </li>
                        <li data-original-index="2">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              Grade 12th or equivalent
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <select
                      title="Select..."
                      className="form-control eligibility_select selectpicker show-tick yearfield mandatory_filed"
                      id="eli_levelofstudy"
                      name="eli_levelofstudy"
                      data-live-search="true"
                      data-dropup-auto="false"
                      multiple="multiple"
                      data-focus-off="true"
                      style={{ textTransform: "capitalize" }}
                      data-max-options="1"
                      tabindex="-98"
                    >
                      <option value="2">Postgraduate</option>
                      <option value="1">Undergraduate</option>
                      <option value="8">Grade 12th or equivalent</option>
                    </select>
                  </div>
                </div>
                <div
                  className="col-sm-12 error_eli_levelofstudy error_mandate"
                  style={{ display: "none", color: "red" }}
                >
                  Highest Qualification Studied is required
                </div>
                <div className="row col-sm-12 w100">
                  <div className="col-sm-12 custTip" style={{ padding: 0 }}>
                    <div className="droDown40per">
                      <div>
                        <label>Grading System(12th) *</label>
                        <div
                          style={{ verticalAlign: "inherit" }}
                          className="tooltip"
                        >
                          <div className="right">
                            <div className="text-content">
                              If you don’t have your final percentage yet please
                              enter predicted or aggregate percentage
                            </div>
                          </div>
                        </div>
                        <div className="btn-group bootstrap-select show-tick form-control eligibility_select yearfield mandatory_filed">
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-default"
                            data-toggle="dropdown"
                            data-id="eli_grading_option_12"
                            title="Select..."
                          >
                            <span className="filter-option pull-left">
                              Select...
                            </span>
                            &nbsp;
                          </button>
                          <div className="dropdown-menu open">
                            <div className="bs-searchbox">
                              <input
                                type="text"
                                className="form-control"
                                autocomplete="off"
                              />
                            </div>
                            <ul className="dropdown-menu inner" role="menu">
                              <li data-original-index="0">
                                <a tabindex="0" className="" data-tokens="null">
                                  <span className="text">Out of 100</span>
                                </a>
                              </li>
                              <li data-original-index="1">
                                <a tabindex="0" className="" data-tokens="null">
                                  <span className="text">Out of 45</span>
                                </a>
                              </li>
                              <li data-original-index="2">
                                <a tabindex="0" className="" data-tokens="null">
                                  <span className="text">Out of 10</span>
                                </a>
                              </li>
                              <li data-original-index="3">
                                <a tabindex="0" className="" data-tokens="null">
                                  <span className="text">Out of 7</span>
                                </a>
                              </li>
                              <li data-original-index="4">
                                <a tabindex="0" className="" data-tokens="null">
                                  <span className="text">Out of 5</span>
                                </a>
                              </li>
                              <li data-original-index="5">
                                <a tabindex="0" className="" data-tokens="null">
                                  <span className="text">Out of 4</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <select
                            title="Select..."
                            className="form-control eligibility_select selectpicker show-tick yearfield mandatory_filed"
                            id="eli_grading_option_12"
                            name="eli_grading_option_12"
                            data-live-search="true"
                            data-dropup-auto="false"
                            multiple="multiple"
                            data-focus-off="true"
                            style={{ textTransform: "capitalize" }}
                            data-max-options="1"
                            tabindex="-98"
                          >
                            <option value="100">Out of 100</option>
                            <option value="45">Out of 45</option>
                            <option value="10">Out of 10</option>
                            <option value="7">Out of 7</option>
                            <option value="5">Out of 5</option>
                            <option value="4">Out of 4</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className="col-sm-12 error_eli_grading_option_12 error_mandate"
                        style={{ display: "none", color: "red" }}
                      >
                        Please select Grading System
                      </div>
                    </div>
                    <div className="droDown48per">
                      <label id="txt_12Score">Score(12th)</label>
                      <input
                        type="number"
                        className="form-control numbers mandatory_filed"
                        id="txt_12Percentage"
                        min="0"
                        max="100"
                        name="txt_12Percentage"
                        placeholder="Enter…"
                        onkeyup="checkGradingPattern(this,'eli_grading_option_12');"
                      />
                      <div
                        className="col-sm-12 error_txt_12Percentage error_mandate error_mandateGre"
                        style={{
                          display: "none",
                          color: "red",
                          paddingRight: 0,
                        }}
                      >
                        Score(Grade 12) is required
                      </div>
                    </div>
                  </div>
                  <div style={{ clear: "both" }}></div>
                </div>
                <div className="col-sm-12 w100">
                  <div
                    className="col-sm-12 custTipPer UGPercentage"
                    style={{ padding: 0 }}
                  >
                    <div className="droDown40per">
                      <div className="mr35">
                        <label>Grading System(UG) *</label>
                        <div
                          style={{ verticalAlign: "inherit" }}
                          className="tooltip"
                        >
                          <div className="right">
                            <div className="text-content">
                              If you don’t have your final percentage yet please
                              enter predicted or aggregate percentage
                            </div>
                          </div>
                        </div>
                        <div className="btn-group bootstrap-select show-tick form-control eligibility_select yearfield mandatory_filed">
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-default"
                            data-toggle="dropdown"
                            data-id="eli_grading_option_UG"
                            title="Select..."
                          >
                            <span className="filter-option pull-left">
                              Select...
                            </span>
                            &nbsp;
                          </button>
                          <div className="dropdown-menu open">
                            <div className="bs-searchbox">
                              <input
                                type="text"
                                className="form-control"
                                autocomplete="off"
                              />
                            </div>
                            <ul className="dropdown-menu inner" role="menu">
                              <li data-original-index="0">
                                <a tabindex="0" className="" data-tokens="null">
                                  <span className="text">Out of 100</span>
                                </a>
                              </li>
                              <li data-original-index="1">
                                <a tabindex="0" className="" data-tokens="null">
                                  <span className="text">Out of 10</span>
                                </a>
                              </li>
                              <li data-original-index="2">
                                <a tabindex="0" className="" data-tokens="null">
                                  <span className="text">Out of 7</span>
                                </a>
                              </li>
                              <li data-original-index="3">
                                <a tabindex="0" className="" data-tokens="null">
                                  <span className="text">Out of 5</span>
                                </a>
                              </li>
                              <li data-original-index="4">
                                <a tabindex="0" className="" data-tokens="null">
                                  <span className="text">Out of 4</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <select
                            title="Select..."
                            className="form-control eligibility_select selectpicker show-tick yearfield mandatory_filed"
                            id="eli_grading_option_UG"
                            name="eli_grading_option_UG"
                            data-live-search="true"
                            data-dropup-auto="false"
                            multiple="multiple"
                            data-focus-off="true"
                            style={{ textTransform: "capitalize" }}
                            data-max-options="1"
                            tabindex="-98"
                          >
                            <option value="100">Out of 100</option>
                            <option value="10">Out of 10</option>
                            <option value="7">Out of 7</option>
                            <option value="5">Out of 5</option>
                            <option value="4">Out of 4</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className="col-sm-12 error_eli_grading_option_12 error_mandate"
                        style={{ display: "none", color: "red" }}
                      >
                        Please select Grading System
                      </div>
                    </div>
                    <div className="droDown48per">
                      <label id="txt_UGScore">Score(UG)</label>
                      <input
                        type="number"
                        className="form-control numbers mandatory_filed"
                        id="txt_UGPercentage"
                        min="0"
                        max="100"
                        name="txt_UGPercentage"
                        placeholder="Enter…"
                        onkeyup="checkGradingPattern(this,'eli_grading_option_UG');"
                      />
                      <div
                        className="col-sm-12 error_txt_UGPercentage error_mandate error_mandateGre"
                        style={{
                          display: "none",
                          color: "red",
                          paddingRight: 0,
                        }}
                      >
                        Score(UG) is required
                      </div>
                    </div>
                  </div>
                  <div style={{ clear: "both" }}></div>
                </div>
                <div className="col-sm-12 mr35">
                  <label>Backlogs</label>{" "}
                  <input
                    type="number"
                    className="form-control numbers"
                    id="txt_backlog"
                    min="0"
                    name="txt_backlog"
                    placeholder="Enter…"
                  />
                </div>
                <div className="col-sm-12">
                  <label>Work Experience (Years)</label>
                  <input
                    type="number"
                    className="form-control numbers"
                    id="txt_workexp"
                    min="0"
                    name="txt_workexp"
                    placeholder="Enter…"
                  />
                </div>
                <div className="col-sm-12 custTip">
                  <label>English Proficiency Exam *</label>
                  <div style={{ verticalAlign: "inherit" }} className="tooltip">
                    <div className="right">
                      <div className="text-content">
                        For Without IELTS case, please select 'I will provide
                        this later' option below
                      </div>
                    </div>
                  </div>
                  <div className="btn-group bootstrap-select show-tick form-control eligibility_select yearfield mandatory_filed">
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-default"
                      data-toggle="dropdown"
                      data-id="eli_Test"
                      title="Select..."
                    >
                      <span className="filter-option pull-left">Select...</span>
                      &nbsp;
                    </button>
                    <div className="dropdown-menu open">
                      <div className="bs-searchbox">
                        <input
                          type="text"
                          className="form-control"
                          autocomplete="off"
                        />
                      </div>
                      <ul className="dropdown-menu inner" role="menu">
                        <li data-original-index="0">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">I don't have this</span>
                          </a>
                        </li>
                        <li data-original-index="1">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">
                              I will provide this later
                            </span>
                          </a>
                        </li>
                        <li data-original-index="2">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">IELTS</span>
                          </a>
                        </li>
                        <li data-original-index="3">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">TOEFL</span>
                          </a>
                        </li>
                        <li data-original-index="4">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">PTE</span>
                          </a>
                        </li>
                        <li data-original-index="5">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">DET</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <select
                      title="Select..."
                      className="form-control eligibility_select selectpicker show-tick yearfield mandatory_filed"
                      id="eli_Test"
                      name="eli_Test"
                      multiple="multiple"
                      data-live-search="true"
                      data-dropup-auto="false"
                      data-focus-off="true"
                      style={{ textTransform: "capitalize" }}
                      data-max-options="1"
                      tabindex="-98"
                    >
                      <option value="DONTHAVE">I don't have this</option>
                      <option value="WILLPROVIDELATER">
                        I will provide this later
                      </option>
                      <option value="IELTS">IELTS</option>
                      <option value="TOEFL">TOEFL</option>
                      <option value="PTE">PTE</option>
                      <option value="DET">DET</option>
                    </select>
                  </div>
                </div>
                <div
                  className="col-sm-12 error_eli_Test error_mandate"
                  style={{ display: "none", color: "red" }}
                >
                  English Proficiency Exam is required
                </div>
                <div
                  className="divTests"
                  id="div_IELTS"
                  name="div_IELTS"
                  style={{ display: "none" }}
                >
                  <div className="row cust47">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Listening *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checktestlimit(this, 'ieltsTest','listening');"
                          id="txt_L_IELTS"
                          name="txt_L_IELTS"
                          className="form-control IELTS_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Reading *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checktestlimit(this, 'ieltsTest','reading');"
                          id="txt_R_IELTS"
                          name="txt_R_IELTS"
                          className="form-control IELTS_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Writing *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checktestlimit(this, 'ieltsTest','writing');"
                          id="txt_W_IELTS"
                          name="txt_W_IELTS"
                          className="form-control IELTS_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Speaking *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checktestlimit(this, 'ieltsTest','speaking');"
                          id="txt_S_IELTS"
                          name="txt_S_IELTS"
                          className="form-control IELTS_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Overall *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checklimit(this, 'ieltsTest');"
                          id="txt_O_IELTS"
                          name="txt_O_IELTS"
                          className="form-control IELTS_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row divTests"
                  id="div_PTE"
                  name="div_PTE"
                  style={{ display: "none" }}
                >
                  <div className="row cust47">
                    <div className="col-sm-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Overall *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checklimit(this, 'pteTest');"
                          id="txt_O_PTE"
                          name="txt_O_PTE"
                          className="form-control PTE_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Listening *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checktestlimit(this, 'pteTest','listening');"
                          id="txt_L_PTE"
                          name="txt_L_PTE"
                          className="form-control PTE_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Reading *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checktestlimit(this, 'pteTest','reading');"
                          id="txt_R_PTE"
                          name="txt_R_PTE"
                          className="form-control PTE_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Writing *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checktestlimit(this, 'pteTest','writing');"
                          id="txt_W_PTE"
                          name="txt_W_PTE"
                          className="form-control PTE_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Speaking *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checktestlimit(this, 'pteTest','speaking');"
                          id="txt_S_PTE"
                          name="txt_S_PTE"
                          className="form-control PTE_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row divTests"
                  id="div_TOEFL"
                  name="div_TOEFL"
                  style={{ display: "none" }}
                >
                  <div className="row cust47">
                    <div className="col-sm-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Overall *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checklimit(this, 'toeflTest');"
                          id="txt_O_TOEFL"
                          name="txt_O_TOEFL"
                          className="form-control TOEFL_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Listening *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checktestlimit(this, 'toeflTest','listening');"
                          id="txt_L_TOEFL"
                          name="txt_L_TOEFL"
                          className="form-control TOEFL_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Reading *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checktestlimit(this, 'toeflTest','reading');"
                          id="txt_R_TOEFL"
                          name="txt_R_TOEFL"
                          className="form-control TOEFL_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Writing *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checktestlimit(this, 'toeflTest','writing');"
                          id="txt_W_TOEFL"
                          name="txt_W_TOEFL"
                          className="form-control TOEFL_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-sm-12">
                      <div className="">
                        <label>Speaking *</label>{" "}
                        <input
                          type="text"
                          onkeyup="checktestlimit(this, 'toeflTest','speaking');"
                          id="txt_S_TOEFL"
                          name="txt_S_TOEFL"
                          className="form-control TOEFL_Mandate_Check"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row divTests"
                  id="div_DET"
                  name="div_DET"
                  style={{ display: "none" }}
                >
                  <div className="col-sm-3">
                    <div className="">
                      <label>Overall *</label>{" "}
                      <input
                        type="text"
                        onkeyup="checklimit(this, 'detTest');"
                        id="txt_O_DET"
                        name="txt_O_DET"
                        className="form-control DET_Mandate_Check"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className=" col-sm-12 error_eng_test error_mandate"
                  style={{ display: "none", color: "red" }}
                >
                  Please fill the above required field(s)
                </div>
                <div className=" col-sm-12 custTipPerOther">
                  <label>Other Exams</label>
                  <div style={{ verticalAlign: "inherit" }} className="tooltip">
                    <div className="right">
                      <div className="text-content">
                        For Without GRE case, please select GRE and enter 0 for
                        Overall Score below
                      </div>
                    </div>
                  </div>
                  <div className="btn-group bootstrap-select show-tick form-control eligibility_select yearfield">
                    <button
                      type="button"
                      className="btn dropdown-toggle btn-default"
                      data-toggle="dropdown"
                      data-id="eli_other_Test"
                      title="Select..."
                    >
                      <span className="filter-option pull-left">Select...</span>
                      &nbsp;
                    </button>
                    <div className="dropdown-menu open">
                      <div className="bs-searchbox">
                        <input
                          type="text"
                          className="form-control"
                          autocomplete="off"
                        />
                      </div>
                      <ul className="dropdown-menu inner" role="menu">
                        <li data-original-index="0">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">SAT</span>
                          </a>
                        </li>
                        <li data-original-index="1">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">ACT</span>
                          </a>
                        </li>
                        <li data-original-index="2">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">GRE</span>
                          </a>
                        </li>
                        <li data-original-index="3">
                          <a tabindex="0" className="" data-tokens="null">
                            <span className="text">GMAT</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <select
                      title="Select..."
                      className="form-control eligibility_select selectpicker show-tick yearfield"
                      id="eli_other_Test"
                      name="eli_other_Test"
                      multiple="multiple"
                      data-live-search="true"
                      data-dropup-auto="false"
                      data-focus-off="true"
                      style={{ textTransform: "capitalize" }}
                      data-max-options="1"
                      tabindex="-98"
                    >
                      <option value="SAT">SAT</option>
                      <option value="ACT">ACT</option>
                      <option value="GRE">GRE</option>
                      <option value="GMAT">GMAT</option>
                    </select>
                  </div>
                </div>
                <div
                  className="row divTests"
                  id="div_GRE"
                  name="div_GRE"
                  style={{ display: "none" }}
                >
                  <div className="col-sm-4">
                    <div className="">
                      <label>Overall Score *</label>{" "}
                      <input
                        type="text"
                        onkeyup="checklimit(this, 'greTest');"
                        id="txt_O_GRE"
                        name="txt_O_GRE"
                        className="form-control GRE_Mandate_Check"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="row divTests"
                  id="div_GMAT"
                  name="div_GMAT"
                  style={{ display: "none" }}
                >
                  <div className="col-sm-4">
                    <div className="">
                      <label>Overall Score *</label>{" "}
                      <input
                        type="text"
                        onkeyup="checklimit(this, 'gmatTest');"
                        id="txt_O_GMAT"
                        name="txt_O_GMAT"
                        className="form-control GMAT_Mandate_Check"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="row divTests"
                  id="div_SAT"
                  name="div_SAT"
                  style={{ display: "none" }}
                >
                  <div className="col-sm-4">
                    <div className="">
                      <label>Overall Score *</label>{" "}
                      <input
                        type="text"
                        onkeyup="checklimit(this, 'satTest');"
                        id="txt_O_SAT"
                        name="txt_O_SAT"
                        className="form-control SAT_Mandate_Check"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="row divTests"
                  id="div_ACT"
                  name="div_ACT"
                  style={{ display: "none" }}
                >
                  <div className="col-sm-4">
                    <div className="">
                      <label>Overall Score *</label>{" "}
                      <input
                        type="text"
                        onkeyup="checklimit(this, 'actTest');"
                        id="txt_O_ACT"
                        name="txt_O_ACT"
                        className="form-control ACT_Mandate_Check"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className=" col-sm-12 error_other_test error_mandate"
                  style={{ display: "none", color: "red" }}
                >
                  Overall score is required
                </div>
                <div className="row custBt">
                  <div className="elg_btn_div col-sm-6">
                    <button
                      className="btn app_fil_btn"
                      id="btn_ResetFilter"
                      name="btn_ResetFilter"
                    >
                      RESET
                    </button>
                  </div>
                  <div className="elg_btn_div col-sm-6">
                    <button
                      className="btn app_fil_btn right"
                      id="btn_ApplyFilter"
                      name="btn_ApplyFilter"
                    >
                      APPLY FILTERS
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="search_result_filter_options1" id="divUniversity">
              <h2 className="h5 text-uppercase font-bold justify-content-betweenHeading bg-primary">
                Universities
                <span className="search-university-icon">
                  <img
                    src="/assets/images/searchUniversityIcon.svg"
                    width="18"
                    height="18"
                    alt="searchUniversityIcon"
                  />
                </span>
              </h2>
              <div className="searchTooglediv" style={{ display: "none" }}>
                <input
                  type="text"
                  className="form-control search-university"
                  placeholder="Search university..."
                />{" "}
                <span className="search-university-close">
                  <img
                    src="/images/Icon/closed.svg"
                    width="18"
                    height="18"
                    alt="closed"
                  />
                </span>
              </div>
              <ul
                className="list-unstyled"
                style={{ maxHeight: "250px", overflowY: "scroll" }}
                id="UniversityFilter"
              >
                <li
                  className="margin-top-6 margin-bottom-6"
                  data-item-title="953"
                >
                  <div
                    className="margin-bottom-0"
                    title=" (STUDY GROUP) University of Leeds, Leeds"
                  >
                    <label className="u-check padding-left-30">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 UniversityFilterChk"
                        type="checkbox"
                        data-name="(STUDY GROUP) University of Leeds, Leeds"
                        data-id="953"
                        name="chkunilst"
                        value="undefined"
                        data-selectid="UniversityFilterListSelect"
                        data-country="4"
                        onclick="SearchProgram.SelectItem($(this))"
                      />{" "}
                      (STUDY GROUP) University of Leeds, Leeds
                    </label>
                    <span className="countbox d-inline-block font-size12 min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">
                      163
                    </span>
                  </div>
                </li>
                <li
                  className="margin-top-6 margin-bottom-6"
                  data-item-title="949"
                >
                  <div
                    className="margin-bottom-0"
                    title="(KAPLAN) University of Nottingham International College"
                  >
                    <label className="u-check padding-left-30">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 UniversityFilterChk"
                        type="checkbox"
                        data-name="(KAPLAN) University of Nottingham International College"
                        data-id="949"
                        name="chkunilst"
                        value="undefined"
                        data-selectid="UniversityFilterListSelect"
                        data-country="4"
                        onclick="SearchProgram.SelectItem($(this))"
                      />
                      (KAPLAN) University of Nottingham International College
                    </label>
                    <span className="countbox d-inline-block font-size12 min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">
                      6
                    </span>
                  </div>
                </li>
                <li
                  className="margin-top-6 margin-bottom-6"
                  data-item-title="956"
                >
                  <div
                    className="margin-bottom-0"
                    title="(STUDY GROUP) The University of Sheffield International College"
                  >
                    <label className="u-check padding-left-30">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 UniversityFilterChk"
                        type="checkbox"
                        data-name="(STUDY GROUP) The University of Sheffield International College"
                        data-id="956"
                        name="chkunilst"
                        value="undefined"
                        data-selectid="UniversityFilterListSelect"
                        data-country="4"
                        onclick="SearchProgram.SelectItem($(this))"
                      />
                      (STUDY GROUP) The University of Sheffield International
                      College
                    </label>
                    <span className="countbox d-inline-block font-size12 min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">
                      316
                    </span>
                  </div>
                </li>
                <li
                  className="margin-top-6 margin-bottom-6"
                  data-item-title="1132"
                >
                  <div className="margin-bottom-0" title="University of Leeds">
                    <label className="u-check padding-left-30">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 UniversityFilterChk"
                        type="checkbox"
                        data-name="University of Leeds"
                        data-id="1132"
                        name="chkunilst"
                        value="undefined"
                        data-selectid="UniversityFilterListSelect"
                        data-country="4"
                        onclick="SearchProgram.SelectItem($(this))"
                      />
                      University of Leeds
                    </label>
                    <span className="countbox d-inline-block font-size12 min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">
                      400
                    </span>
                  </div>
                </li>
                <li
                  className="margin-top-6 margin-bottom-6"
                  data-item-title="980"
                >
                  <div
                    className="margin-bottom-0"
                    title="(INTO) Newcastle University"
                  >
                    <label className="u-check padding-left-30">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 UniversityFilterChk"
                        type="checkbox"
                        data-name="(INTO) Newcastle University"
                        data-id="980"
                        name="chkunilst"
                        value="undefined"
                        data-selectid="UniversityFilterListSelect"
                        data-country="4"
                        onclick="SearchProgram.SelectItem($(this))"
                      />
                      (INTO) Newcastle University
                    </label>
                    <span className="countbox d-inline-block font-size12 min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">
                      180
                    </span>
                  </div>
                </li>
                <li
                  className="margin-top-6 margin-bottom-6"
                  data-item-title="985"
                >
                  <div
                    className="margin-bottom-0"
                    title="(KAPLAN) University of Glasgow International College"
                  >
                    <label className="u-check padding-left-30">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 UniversityFilterChk"
                        type="checkbox"
                        data-name="(KAPLAN) University of Glasgow International College"
                        data-id="985"
                        name="chkunilst"
                        value="undefined"
                        data-selectid="UniversityFilterListSelect"
                        data-country="4"
                        onclick="SearchProgram.SelectItem($(this))"
                      />
                      (KAPLAN) University of Glasgow International College
                    </label>
                    <span className="countbox d-inline-block font-size12 min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">
                      14
                    </span>
                  </div>
                </li>
                <li
                  className="margin-top-6 margin-bottom-6"
                  data-item-title="1078"
                >
                  <div
                    className="margin-bottom-0"
                    title="University of Nottingham"
                  >
                    <label className="u-check padding-left-30">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 UniversityFilterChk"
                        type="checkbox"
                        data-name="University of Nottingham"
                        data-id="1078"
                        name="chkunilst"
                        value="undefined"
                        data-selectid="UniversityFilterListSelect"
                        data-country="4"
                        onclick="SearchProgram.SelectItem($(this))"
                      />
                      University of Nottingham
                    </label>
                    <span className="countbox d-inline-block font-size12 min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">
                      381
                    </span>
                  </div>
                </li>
                <li
                  className="margin-top-6 margin-bottom-6"
                  data-item-title="913"
                >
                  <div
                    className="margin-bottom-0"
                    title="(KAPLAN) Queen Mary University of London"
                  >
                    <label className="u-check padding-left-30">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 UniversityFilterChk"
                        type="checkbox"
                        data-name="(KAPLAN) Queen Mary University of London"
                        data-id="913"
                        name="chkunilst"
                        value="undefined"
                        data-selectid="UniversityFilterListSelect"
                        data-country="4"
                        onclick="SearchProgram.SelectItem($(this))"
                      />
                      (KAPLAN) Queen Mary University of London
                    </label>
                    <span className="countbox d-inline-block font-size12 min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">
                      23
                    </span>
                  </div>
                </li>
                <li
                  className="margin-top-6 margin-bottom-6"
                  data-item-title="600"
                >
                  <div
                    className="margin-bottom-0"
                    title="University of Bristol"
                  >
                    <label className="u-check padding-left-30">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 UniversityFilterChk"
                        type="checkbox"
                        data-name="University of Bristol"
                        data-id="600"
                        name="chkunilst"
                        value="undefined"
                        data-selectid="UniversityFilterListSelect"
                        data-country="4"
                        onclick="SearchProgram.SelectItem($(this))"
                      />
                      University of Bristol
                    </label>
                    <span className="countbox d-inline-block font-size12 min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">
                      375
                    </span>
                  </div>
                </li>
                <li
                  className="margin-top-6 margin-bottom-6"
                  data-item-title="1060"
                >
                  <div
                    className="margin-bottom-0"
                    title="The University of Sheffield"
                  >
                    <label className="u-check padding-left-30">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 UniversityFilterChk"
                        type="checkbox"
                        data-name="The University of Sheffield"
                        data-id="1060"
                        name="chkunilst"
                        value="undefined"
                        data-selectid="UniversityFilterListSelect"
                        data-country="4"
                        onclick="SearchProgram.SelectItem($(this))"
                      />
                      The University of Sheffield
                    </label>
                    <span className="countbox d-inline-block font-size12 min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">
                      440
                    </span>
                  </div>
                </li>
                <li
                  className="margin-top-6 margin-bottom-6"
                  data-item-title="306"
                >
                  <div
                    className="margin-bottom-0"
                    title="University of Glasgow"
                  >
                    <label className="u-check padding-left-30">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 UniversityFilterChk"
                        type="checkbox"
                        data-name="University of Glasgow"
                        data-id="306"
                        name="chkunilst"
                        value="undefined"
                        data-selectid="UniversityFilterListSelect"
                        data-country="4"
                        onclick="SearchProgram.SelectItem($(this))"
                      />
                      University of Glasgow
                    </label>
                    <span className="countbox d-inline-block font-size12 min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">
                      326
                    </span>
                  </div>
                </li>
                <li
                  className="margin-top-6 margin-bottom-6"
                  data-item-title="311"
                >
                  <div className="margin-bottom-0" title="Newcastle University">
                    <label className="u-check padding-left-30">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 UniversityFilterChk"
                        type="checkbox"
                        data-name="Newcastle University"
                        data-id="311"
                        name="chkunilst"
                        value="undefined"
                        data-selectid="UniversityFilterListSelect"
                        data-country="4"
                        onclick="SearchProgram.SelectItem($(this))"
                      />
                      Newcastle University
                    </label>
                    <span className="countbox d-inline-block font-size12 min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">
                      383
                    </span>
                  </div>
                </li>
                <li
                  className="margin-top-6 margin-bottom-6"
                  data-item-title="381"
                >
                  <div
                    className="margin-bottom-0"
                    title="(KAPLAN) University of York"
                  >
                    <label className="u-check padding-left-30">
                      <input
                        className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 UniversityFilterChk"
                        type="checkbox"
                        data-name="(KAPLAN) University of York"
                        data-id="381"
                        name="chkunilst"
                        value="undefined"
                        data-selectid="UniversityFilterListSelect"
                        data-country="4"
                        onclick="SearchProgram.SelectItem($(this))"
                      />
                      (KAPLAN) University of York
                    </label>
                    <span className="countbox d-inline-block font-size12 min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">
                      28
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="search_result_filter_options1"
            id="divCountryLevel"
          ></div>
          <div id="divFeeSection">
            <h2 className="h5 text-uppercase font-bold justify-content-betweenHeading bg-primary">
              Tuition Fees
            </h2>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <ul>
                  <li
                    className="margin-top-0 course_detail_text_span"
                    data-item-title="Above 100000"
                    style={{
                      listStyle: "none",
                      padding: "0 !important",
                      textAlign: "right",
                    }}
                  >
                    <div className="margin-bottom-0" title="Above 100000">
                      <label className="u-check padding-left-30">
                        <input
                          className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0 FeesRangeFilterChk"
                          type="checkbox"
                          name="prglvl"
                          data-id="feesRangeCheckBox"
                          data-name="Above_100000"
                          onclick="SearchProgram.SelectItem($(this))"
                          data-selectid="FeesRangeFilterSelect"
                        />
                        Above 1,00,000
                      </label>
                    </div>
                  </li>
                  <span className="irs js-irs-2 irs-with-grid">
                    <span className="irs">
                      <span
                        className="irs-min"
                        style={{ visibility: "hidden" }}
                      >
                        0
                      </span>
                      <span
                        className="irs-max"
                        style={{ visibility: "hidden" }}
                      >
                        100 000
                      </span>
                      <span
                        className="irs-from"
                        style={{ visibility: "hidden", left: "-0.720829%" }}
                      >
                        0
                      </span>
                      <span
                        className="irs-to"
                        style={{ visibility: "hidden", left: "92.0452%" }}
                      >
                        100 000
                      </span>
                      <span
                        className="irs-single"
                        style={{ visibility: "hidden", left: "42.8684%" }}
                      >
                        0 — 100 000
                      </span>
                    </span>
                    <span
                      className="irs-grid"
                      style={{ width: "96.9972%", left: "1.40139%" }}
                    >
                      <span
                        className="irs-grid-text js-grid-text-0"
                        style={{ left: "0%", marginLeft: "-1.61441%" }}
                      >
                        0
                      </span>
                      <span
                        className="irs-grid-text js-grid-text-1"
                        style={{
                          left: "25%",
                          marginLeft: "-4.98828%",
                          visibility: "visible",
                        }}
                      >
                        25 000
                      </span>
                      <span
                        className="irs-grid-text js-grid-text-2"
                        style={{
                          left: "50%",
                          marginLeft: "-5.07784%",
                          visibility: "visible",
                        }}
                      >
                        50 000
                      </span>
                      <span
                        className="irs-grid-text js-grid-text-3"
                        style={{
                          left: "75%",
                          marginLeft: "-4.95628%",
                          visibility: "visible",
                        }}
                      >
                        75 000
                      </span>
                      <span
                        className="irs-grid-text js-grid-text-4"
                        style={{
                          left: "100%",
                          marginLeft: "-5.5257%",
                        }}
                      >
                        100 000
                      </span>
                    </span>
                  </span>
                  <input
                    type="text"
                    id="feesRange"
                    name="feesRange"
                    value=""
                    className="irs-hidden-input"
                    tabindex="-1"
                    readonly
                  />
                </ul>
              </div>
            </div>
          </div>
          <div id="divPercentageSection" style={{ display: "none" }}>
            <h2 className="h5 text-uppercase font-bold justify-content-betweenHeading bg-primary">
              Entry Requirements
            </h2>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  className="col-lg-4"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <h2
                    className="h5 text-uppercase font-bold justify-content-betweenHeading"
                    style={{
                      textIndent: 0,
                      backgroundColor: "#fff",
                      color: "#000000",
                    }}
                  >
                    Percentage marks
                  </h2>
                </div>
                <div
                  className="col-lg-8"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <input
                    type="range"
                    id="percentageMarksToggle"
                    name="points"
                    min="1"
                    className="rangeAll"
                    max="3"
                    value="2"
                  />
                </div>
                <div className="col-lg-12">
                  <div className="col-lg-4"></div>
                  <div
                    className="col-lg-8 col-xs-12"
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    <div
                      className="col-sm-4 col-xs-4"
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      12th or equivelent
                    </div>
                    <div
                      className="col-sm-4 col-xs-4"
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        textAlign: "center",
                      }}
                    >
                      All
                    </div>
                    <div
                      className="col-sm-4 col-xs-4"
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        textAlign: "right",
                      }}
                    >
                      UG
                    </div>
                  </div>
                </div>
                <div className="mt-51">
                  <span className="irs js-irs-3 irs-with-grid">
                    <span className="irs">
                      <span className="irs-min">0%</span>
                      <span className="irs-max">100%</span>
                      <span className="irs-from">0</span>
                      <span className="irs-to">0</span>
                      <span className="irs-single">0</span>
                    </span>
                    <span className="irs-grid">
                      <span
                        className="irs-grid-text js-grid-text-0"
                        style={{ left: "0%" }}
                      >
                        0
                      </span>
                      <span
                        className="irs-grid-text js-grid-text-1"
                        style={{ left: "25%", visibility: "hidden" }}
                      >
                        25
                      </span>
                      <span
                        className="irs-grid-text js-grid-text-2"
                        style={{ left: "50%", visibility: "hidden" }}
                      >
                        50
                      </span>
                      <span
                        className="irs-grid-text js-grid-text-3"
                        style={{ left: "75%", visibility: "hidden" }}
                      >
                        75
                      </span>
                      <span
                        className="irs-grid-text js-grid-text-4"
                        style={{ left: "100%" }}
                      >
                        100
                      </span>
                    </span>
                  </span>
                  <input
                    type="text"
                    id="percentageMarks"
                    name="percentageMarks"
                    value=""
                    className="irs-hidden-input"
                    tabindex="-1"
                    readonly
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="divPercentageSection" style={{ display: "none" }}>
            <h2 className="h5 text-uppercase font-bold justify-content-betweenHeading bg-primary">
              Entry Requirements
            </h2>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  className="col-lg-4"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <h2
                    className="h5 text-uppercase font-bold justify-content-betweenHeading"
                    style={{
                      textIndent: 0,
                      backgroundColor: "#fff",
                      color: "#000000",
                    }}
                  >
                    Percentage marks
                  </h2>
                </div>
                <div
                  className="col-lg-8"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <input
                    type="range"
                    id="percentageMarksToggle"
                    name="points"
                    min="1"
                    className="rangeAll"
                    max="3"
                    value="2"
                  />
                </div>
                <div className="col-lg-12">
                  <div className="col-lg-4"></div>
                  <div
                    className="col-lg-8 col-xs-12"
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    <div
                      className="col-sm-4 col-xs-4"
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      12th or equivelent
                    </div>
                    <div
                      className="col-sm-4 col-xs-4"
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        textAlign: "center",
                      }}
                    >
                      All
                    </div>
                    <div
                      className="col-sm-4 col-xs-4"
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        textAlign: "right",
                      }}
                    >
                      UG
                    </div>
                  </div>
                </div>
                <div className="mt-51">
                  <input
                    type="text"
                    id="percentageMarks"
                    name="percentageMarks"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <div id="sortby" className="row sortby tooltip-holder">
          <div className="col-lg-4 col-md-4 col-sm-6"></div>
          <div
            className="col-lg-2 col-md-2 col-sm-2 text-right sort-by-label"
            id="sort-by"
          >
            <label>Sort By</label>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-4">
            <div className="tooltip programsortby-tooltip">
              <div className="bottom">
                To sort, please select a single country in the country dropdown
              </div>
              <div className="btn-group bootstrap-select form-control program-sort-by disabled">
                <button
                  type="button"
                  className="btn dropdown-toggle disabled btn-default"
                  data-toggle="dropdown"
                  data-id="ProgramSortBy"
                  title="Ranking"
                  tabindex="-1"
                >
                  <span className="filter-option pull-left">Ranking</span>&nbsp;
                </button>
                <div className="dropdown-menu open">
                  <ul className="dropdown-menu inner" role="menu">
                    <li data-original-index="0" className="selected">
                      <a tabindex="0" className="" data-tokens="null">
                        <span className="text">Ranking</span>
                      </a>
                    </li>
                    <li data-original-index="1">
                      <a tabindex="0" className="" data-tokens="null">
                        <span className="text">Tuition Fee - High to Low</span>
                      </a>
                    </li>
                    <li data-original-index="2">
                      <a tabindex="0" className="" data-tokens="null">
                        <span className="text">Tuition Fee - Low to High</span>
                      </a>
                    </li>
                    <li data-original-index="3">
                      <a tabindex="0" className="" data-tokens="null">
                        <span className="text">
                          Application Fee - High to Low
                        </span>
                      </a>
                    </li>
                    <li data-original-index="4">
                      <a tabindex="0" className="" data-tokens="null">
                        <span className="text">
                          Application Fee - Low to High
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <select
                  className="form-control program-sort-by"
                  id="ProgramSortBy"
                  name="ProgramSortBy"
                  tabindex="-98"
                  disabled
                >
                  <option value="Ranking">Ranking</option>
                  <option value="TuitionFeeDesc">
                    Tuition Fee - High to Low
                  </option>
                  <option value="TuitionFeeAsc">
                    Tuition Fee - Low to High
                  </option>
                  <option value="ApplicationFeeDesc">
                    Application Fee - High to Low
                  </option>
                  <option value="ApplicationFeeAsc">
                    Application Fee - Low to High
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div id="searchdta">
          <div id="sticky-anchor"></div>
          <div id="stickyone" className="">
            <div className="SPresultpage">
              <span className="resultfound eligibility_search_Result_badge">
                0 Courses Found
              </span>
              <span className="pntxt">Page 1 of 2</span>
            </div>
          </div>
          <div className="justify-content-between-title margin-bottom-10 bg-primary download-sortlist-tab">
            <div className="row">
              <div className="col-lg-6 downloadbox" style={{ paddingRight: 0 }}>
                <div className="row">
                  <div className="col-md-12 col-xs-12 paddingleft0 results-anchor ipad-align-left">
                    <a
                      className="u-link-v5 text-white actionLinks download1box"
                      href="javascript:void(0);"
                      onclick="SearchProgram.GetCoureseToExport('normal')"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-right padding-0 margin-top-5 shortlist-area">
                <div className="switch switchh">
                  <label className="text-white shortlist-all">
                    <i className="fa fa-check-square-o g-pos-rel margin-right-5 short">
                      &nbsp;&nbsp;
                    </i>
                    Shortlist All
                    <input
                      type="checkbox"
                      id="ShortlistAll"
                      className="switch_input"
                    />
                  </label>
                  <input type="checkbox" id="ShortlistAll" className="switch_input"></input>
                  <span className="lever"></span>
                </div>
              </div>
            </div>
          </div>
          {searchArr && searchArr.map((item)=>{
            return(
              <article className="crbox">
              <div className="row">
                <article className="crbox program_results_127952">
                  <div className="row d-flex">
                    <div className="col-lg-8 col-md-8 col-sm-8 courseDetails">
                      <div >
                        <h3
                          className="h4 margin-bottom-10 student-eligibility-h3"
                          style={{ width: "100%" }}
                        >
                          <a
                            className="u-link-v5 text-black font-size16 font-bold"
                            style={{ textDecoration: "none!important" }}
                            href=""
                          >
                            {item?.Name}
                          </a>
                        </h3>
                      </div>
                      <div className="font-size13 clearfix">
                        <div
                          className="universityProgram 127952"
                          data-unicount="953_false"
                        >
                          <i className="fa fa-university text-blue"></i>
                          <b>University:</b> {item.University}
                        </div>
                        <div className="search_result_items countrydiv">
                        <i className="fa fa-globe text-blue"></i>
                          <b>Country:</b> {item.Country}
                        </div>
                        <div className="search_result_items durationdiv">
                          <b>Duration:</b> {item.Duration} Month(s)
                        </div>
                        <div className="divintake">
                          <div className="intakeIconDiv">
                          <i className="fa fa-user-plus text-blue"></i>
                            <span>
                              <b>Intakes:</b>
                            </span>
                          </div>
                          <div className="openCloseIntakeWrapper">
                            <div className="openIntakeDiv">
                              <div className="open-width-span">
                                <span className="label label-success custom-label label-success-bg">
                                  Open
                                </span>
                              </div>
                              <span className="intakeCard 127952">{item.intake[0].toUpperCase() + item.intake.slice(1,3)}</span>
                            </div>
                            <div className="closedIntakeDiv">
                              <div className="closed-width-span">
                                <span className="label label-danger custom-label label-danger-bg">
                                  Closed
                                </span>
                              </div>
                              <span className="intakeCard 127952 closed-intake">
                                Jan
                              </span>
                              <div
                                style={{ verticalAlign: "inherit" }}
                                className="tooltip"
                                id="intake_tooltip_127952"
                                data-id="127952"
                                data-intake="Jan"
                              >
                                <div className="right closedIntakeRight">
                                  <div className="text-content"></div>
                                  <div
                                    className="loader"
                                    style={{ display: "none" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tutiondiv">
                        <i className="fa fa-money text-blue"></i>
                          <b>Yearly Tuition Fee:</b> {item.TutionFee}
                        </div>
                        <div className="applicationdiv">
                          <b>Application Fee:</b> No application fee
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 search_result_second_box mt-8 p-l-r-3 courseDetails">
                      <div className="col-md-5 col-sm-12 col-xs-5 p-l-r-3-7 viewDeails">
                        <a
                          className="u-link-v5 g-color-gray-dark-v5 ipad-float-view search_result_second_box_view_details"
                          target="_blank"
                          href="/SearchProgram/CourseDetail?uid=MTI3OTUy"
                        >
                          <i className="fa fa-list g-pos-rel margin-right-5">
                            &nbsp;
                          </i>
                          View Details
                        </a>
                      </div>
                      <div className="switch search_result_second_box_shortlist ipad-lever">
                      
                        <label>
                          Shortlist
                          <input
                            id="shortlist_uni_953"
                            type="checkbox"
                            className="shortlist Search_checkbox"
                            data-cid="127952"
                            data-unid="953"
                            onclick="SearchProgram.AddToExportList('127952',$(this), true)"
                          />
                        </label>{" "}
                        <label style={{ clear: "right" }}>
                          Compare
                          <input
                            type="checkbox"
                            className="compare Search_checkbox"
                            data-cid="127952"
                            onclick="SearchProgram.AddToCompareList('127952',$(this))"
                          />
                        </label>
                        <span id="127952"></span>
                      </div>
                      <div className="modalCourseCorrectionsRequestLink">
                        <div style={{ float: "right" }}>
                          <a
                            style={{ cursor: "pointer" }}
                            className="u-link-v5 g-color-gray-dark-v5 ipad-float-view search_result_second_box_view_details modalCourseCorrectionsRequestLinkUnderline"
                            target="_blank"
                            onclick="CourseCorrectionRequest(127952)"
                          >
                            Something doesn't look right?
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row margindiv">
                    <div className="col-sm-12">
                      <div className="rankingdiv">
                        <div className="rankborder">
                          <span>2</span> in Webometrics United Kingdom National
                          Ranking
                        </div>
                        <div className="rankborder">
                          <span>46</span> in Webometrics World Ranking
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              
              </div>
            </article>
            )
          })}
        
        </div>
        <div className="courses-compaire">
          <div className="">
            <div className="col-lg-3 col-md-6 col-sm-8 col-xs-12 col-lg-offset-4 col-md-offset-3 col-sm-offset-4 divMainCompare divMainCompareWeb hidden-xs hidden-sm hidecompareDiv show-lg show-md">
              <div>
                <div className="margin-top-30">
                  <div className="panel panel-default courses-comp">
                    <div
                      className="panel-body"
                      style={{ border: "2px solid #ddd" }}
                    >
                      <div>
                        <strong
                          style={{ fontWeight: "bold", fontSize: "16px" }}
                          className="spnTotalCourses"
                        >
                          2
                        </strong>{" "}
                        <span
                          className="divMainCompareSpan"
                          style={{ fontWeight: "bold" }}
                        >
                          added to compare
                        </span>{" "}
                        <button
                          type="button"
                          className="btn btn-primary btn-sm pull-right"
                          style={{
                            fontSize: "15px",
                            padding: "0 9px 0 9px",
                            textTransform: "none",
                            background: "var(--btColor)",
                          }}
                          onclick="SearchProgram.GetCoureseToExport('compare')"
                        >
                          Compare Courses
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
