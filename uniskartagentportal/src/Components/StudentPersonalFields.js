import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2'
const StudentPersonalFields = () => {
    const [showWorkExp, setShowWorkExp] = useState(false)
	const [showAcademyFields,setShowAcademyFields] = useState(false)
  return (
    <div className="tab-pane fade active in" id="Profiletab">
    <div className="MS-tabs">
        <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active">
                <a href="#PersonalInformation" aria-controls="personalinformation" role="tab" data-toggle="tab" aria-expanded="true">
                    Personal Information

                    <span className="detail-incomplete" id="profile">Incomplete</span>
                </a>
            </li>
            <li id="QualificationSection">
                <a href="#AcademicQualification" aria-controls="academicqualification" role="tab" data-toggle="tab" aria-expanded="false">
                    Academic Qualification

                    <span className="detail-incomplete" id="academic">Incomplete</span>
                </a>
            </li>
            <li id="WorkExperienceSection">
                <a href="#WorkExperience" aria-controls="workexperience" role="tab" data-toggle="tab" aria-expanded="false">
                    Work Experience

                    <span className="detail-incomplete" id="workExp">Optional</span>
                </a>
            </li>
            <li id="testSection">
                <a href="#Tests" aria-controls="tests" role="tab" data-toggle="tab" aria-expanded="false">
                    Tests

                    <span className="detail-incomplete" id="testsStatus">Incomplete</span>
                </a>
            </li>
        </ul>
        <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="PersonalInformation">
                <h3 className="title">Personal Information</h3>
                <form id="formPersonalDetailsAll" novalidate="novalidate">
                    <div className="editbutton"></div>
                    <input name="Id" data-val="true" data-val-number="The field Id must be a number." data-val-required="The Id field is required." id="Id" type="hidden" value="563579" />
                    <div id="profileMoreInfo">
                        <div className="PIbox DGMInfo Detail">
                            <div className="row hide">
                                <div className="col-sm-12">
                                    <div className="pibox_student_register">
                                        <label>Which countries you want to apply to for this student?
                                            <span className="requiretxx">*</span>
                                        </label>
                                        <select data-placeholder="+ Add country, e.g. United States" multiple="" className="chosen-select form-control" id="chooseCountry" style={{ display: 'none' }}>
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
                                        <div className="chosen-container chosen-container-multi" title="" id="chooseCountry_chosen" style={{ width: 0 }}>
                                            <ul className="chosen-choices">
                                                <li className="search-field">
                                                    <input className="chosen-search-input default" type="text" autocomplete="off" value="+ Add country, e.g. United States" style={{ width: "267.087px" }} />
                                                </li>
                                            </ul>
                                            <div className="chosen-drop">
                                                <ul className="chosen-results"></ul>
                                            </div>
                                        </div>
                                        <input name="CountriesChosen" className="hidden-val" data-val="true" data-val-required="The CountriesChosen field is required." id="CountriesChosen" type="hidden" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row register_student_form">
                                <div className="col-sm-4">
                                    <div className="">
                                        <label>Date of Birth
                                            <span className="requiretxx">*</span>
                                        </label>
                                        <input name="DOB" value="" className="form-control" id="DOB" placeholder="Select Date" type="datetime" />
                                        <span id="spanDOB" style={{ display: 'none' }} className="text-danger field-validation-error" data-valmsg-for="DOB" data-valmsg-replace="true">
                                            <span id="DOB-error" className="">DOB is required</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="">
                                        <label>Gender
                                            <span className="requiretxx">*</span>
                                        </label>
                                        <div className="select">
                                            <select className="form-control" name="Gender" id="Gender">
                                                <option value="" selected="">Select</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="">
                                        <label>Marital Status
                                            <span className="requiretxx">*</span>
                                        </label>
                                        <div className="select">
                                            <select className="form-control" name="MaritalStatus" id="MaritalStatus">
                                                <option value="" selected="">Select</option>
                                                <option value="Married">Married</option>
                                                <option value="Unmarried">Unmarried</option>
                                                <option value="Other">Other</option>
                                            </select>
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
                    </div>
                    <h3 className="title">Mailing Address</h3>
                    <div className="editbutton"></div>
                    <div className="PIbox MailingAddress Old-Detail" id="MailingAddress">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>Address 1
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <input className="chkUpd mailing-address text-box single-line" id="MailingAddress_AddressLine1" name="MailingAddress.AddressLine1" placeholder="Enter Address" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>Address 2</label>
                                    <div className="dvalue">
                                        <input className="mailing-address text-box single-line" id="MailingAddress_AddressLine2" name="MailingAddress.AddressLine2" placeholder="Enter Address" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>Country
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <div className="select">
                                            <select name="MailingAddress.CountryId" className="form-control chkUpd mailing-address valid" data-val="true" data-val-number="The field CountryId must be a number." id="MailingAddress.CountryId" aria-required="true" aria-invalid="false">
                                                <option value="">Select Country</option>
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
                                                <option value="50">Congo, the Democratic Republic of the</option>
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
                                                <option value="93">Heard Island and Mcdonald Islands</option>
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
                                                <option value="112">Korea, Democratic People's Republic of</option>
                                                <option value="113">Korea, Republic of</option>
                                                <option value="240">Kosovo</option>
                                                <option value="114">Kuwait</option>
                                                <option value="115">Kyrgyzstan</option>
                                                <option value="116">Lao People's Democratic Republic</option>
                                                <option value="117">Latvia</option>
                                                <option value="118">Lebanon</option>
                                                <option value="119">Lesotho</option>
                                                <option value="120">Liberia</option>
                                                <option value="121">Libyan Arab Jamahiriya</option>
                                                <option value="122">Liechtenstein</option>
                                                <option value="123">Lithuania</option>
                                                <option value="124">Luxembourg</option>
                                                <option value="125">Macao</option>
                                                <option value="126">Macedonia, the Former Yugoslav Republic of</option>
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
                                                <option value="139">Micronesia, Federated States of</option>
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
                                                <option value="164">Palestinian Territory, Occupied</option>
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
                                                <option value="183">Saint Vincent and the Grenadines</option>
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
                                                <option value="198">South Georgia and the South Sandwich Islands</option>
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
                                                <option value="227">United States Minor Outlying Islands</option>
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
                                        <span className="field-validation-valid text-danger" data-valmsg-for="CountryId" data-valmsg-replace="true"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>State
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <div className="select">
                                            <select name="MailingAddress.StateId" className="form-control chkUpd mailing-address valid" data-val="true" data-val-number="The field StateId must be a number." id="MailingAddress.StateId" aria-required="true" aria-invalid="false">
                                                <option value="">Select State</option>
                                                <option value="152">Barbuda</option>
                                                <option value="153">Redonda</option>
                                                <option value="154">Saint George Parish</option>
                                                <option value="155">Saint John Parish</option>
                                                <option value="156">Saint Mary Parish</option>
                                                <option value="157">Saint Paul Parish</option>
                                                <option value="158">Saint Peter Parish</option>
                                                <option value="159">Saint Philip Parish</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>City
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <input className="chkUpd mailing-address text-box single-line" id="MailingAddress_City" name="MailingAddress.City" placeholder="Enter City" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>Pincode
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <input className="chkUpd mailing-address text-box single-line" id="MailingAddress_Pincode" name="MailingAddress.Pincode" placeholder="Enter Pincode" type="text" value="" />
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
                    <h3 className="title">Permanent Address</h3>
                    <div className="editbutton"></div>
                    <div className="PIbox PermanentAddress Old-Detail" id="PermanentAddress">
                        <div className="row">
                            <div className="col-sm-12" style={{ marginTop: 0 }}>
                                <div className="Samemaillingaddress samemailing-checkbox tooltip-holder">
                                    <div className="tooltip mailingaddress-tooltip">
                                        <div className="bottom">
                                            Please fill the mandatory details of mailing address section.
                                        </div>
                                        <input type="checkbox" className="chk_university MS-tabs Samemaillingaddress samemailing-checkbox" id="chkIsSameMailing" name="PermanentAddress.SameAsMailingAddress" value="true" disabled="" />
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
                                    <label>Address 1
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <input className="permanent-address text-box single-line" data-mailingaddress-value="" id="PermanentAddress_AddressLine1" name="PermanentAddress.AddressLine1" placeholder="Enter Address" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>Address 2</label>
                                    <div className="dvalue">
                                        <input className="permanent-address text-box single-line" data-mailingaddress-value="" id="PermanentAddress_AddressLine2" name="PermanentAddress.AddressLine2" placeholder="Enter Address" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>Country
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <div className="select">
                                            <select name="PermanentAddress.CountryId" className="form-control permanent-address valid" data-mailingaddress-value="" data-val="true" data-val-number="The field PermanentAddressCountryId must be a number." data-val-required="The PermanentAddressCountryId field is required." id="PermanentAddress.CountryId" aria-required="true" aria-invalid="false">
                                                <option value="">Select Country</option>
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
                                                <option value="50">Congo, the Democratic Republic of the</option>
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
                                                <option value="93">Heard Island and Mcdonald Islands</option>
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
                                                <option value="112">Korea, Democratic People's Republic of</option>
                                                <option value="113">Korea, Republic of</option>
                                                <option value="240">Kosovo</option>
                                                <option value="114">Kuwait</option>
                                                <option value="115">Kyrgyzstan</option>
                                                <option value="116">Lao People's Democratic Republic</option>
                                                <option value="117">Latvia</option>
                                                <option value="118">Lebanon</option>
                                                <option value="119">Lesotho</option>
                                                <option value="120">Liberia</option>
                                                <option value="121">Libyan Arab Jamahiriya</option>
                                                <option value="122">Liechtenstein</option>
                                                <option value="123">Lithuania</option>
                                                <option value="124">Luxembourg</option>
                                                <option value="125">Macao</option>
                                                <option value="126">Macedonia, the Former Yugoslav Republic of</option>
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
                                                <option value="139">Micronesia, Federated States of</option>
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
                                                <option value="164">Palestinian Territory, Occupied</option>
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
                                                <option value="183">Saint Vincent and the Grenadines</option>
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
                                                <option value="198">South Georgia and the South Sandwich Islands</option>
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
                                                <option value="227">United States Minor Outlying Islands</option>
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
                                        <span className="field-validation-valid text-danger" data-valmsg-for="PermanentAddressCountryId" data-valmsg-replace="true"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>State
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <div className="select">
                                            <select name="PermanentAddress.StateId" className="form-control permanent-address valid" data-mailingaddress-value="0" data-val="true" data-val-number="The field PermanentAddressStateId must be a number." id="PermanentAddress.StateId" aria-required="true" aria-invalid="false">
                                                <option value="">Select State</option>
                                                <option value="184">Aragatsotn Region</option>
                                                <option value="185">Ararat Province</option>
                                                <option value="186">Armavir Region</option>
                                                <option value="187">Gegharkunik Province</option>
                                                <option value="188">Kotayk Region</option>
                                                <option value="189">Lori Region</option>
                                                <option value="190">Shirak Region</option>
                                                <option value="191">Syunik Province</option>
                                                <option value="192">Tavush Region</option>
                                                <option value="193">Vayots Dzor Region</option>
                                                <option value="194">Yerevan</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>City
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <input className="permanent-address text-box single-line" data-mailingaddress-value="" id="PermanentAddress_City" name="PermanentAddress.City" placeholder="Enter City" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>Pincode
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <input className="permanent-address text-box single-line" data-mailingaddress-value="" id="PermanentAddress_Pincode" name="PermanentAddress.Pincode" placeholder="Enter Pincode" type="text" value="" />
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
                    <h3 className="title">Passport Information</h3>
                    <div className="editbutton"></div>
                    <div className="PIbox PassportInformation Old-Detail" id="PassportInformation">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="pibox_student_register">
                                    <label>Passport Number
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <input className="text-box single-line" id="Passport_PassportNumber" name="Passport.PassportNumber" placeholder="Enter Number" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="pibox_student_register">
                                    <label>Issue Date
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <input name="Passport.IssueDate" value="" className="form-control" id="PassportIssueDate" placeholder="Enter Date" type="datetime" />
                                        <span id="spanPassportIssueDate" style={{ display: 'none' }} className="text-danger field-validation-error" data-valmsg-for="IssueDate" data-valmsg-replace="true">
                                            <span id="PassportNumber-error" className="">Passport issue date is required</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="pibox_student_register">
                                    <label>Expiry Date
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <input name="Passport.ExpiryDate" value="" className="form-control" id="PassportExpiryDate" placeholder="Enter Date" type="datetime" />
                                        <span id="spanPassportExpiryDate" style={{ display: 'none' }} className="text-danger field-validation-error" data-valmsg-for="ExpiryDate" data-valmsg-replace="true">
                                            <span id="PassportNumber-error" className="">Passport expiry date is required</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="pibox_student_register">
                                    <label>Issue Country
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <div className="select">
                                            <select name="Passport.IssueCountryId" className="form-control valid" data-val="true" data-val-number="The field IssueCountryId must be a number." data-val-required="The IssueCountryId field is required." id="PassportIssue.CountryId" aria-required="true" aria-invalid="false">
                                                <option value="">Passport Issue Country</option>
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
                                                <option value="50">Congo, the Democratic Republic of the</option>
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
                                                <option value="93">Heard Island and Mcdonald Islands</option>
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
                                                <option value="112">Korea, Democratic People's Republic of</option>
                                                <option value="113">Korea, Republic of</option>
                                                <option value="240">Kosovo</option>
                                                <option value="114">Kuwait</option>
                                                <option value="115">Kyrgyzstan</option>
                                                <option value="116">Lao People's Democratic Republic</option>
                                                <option value="117">Latvia</option>
                                                <option value="118">Lebanon</option>
                                                <option value="119">Lesotho</option>
                                                <option value="120">Liberia</option>
                                                <option value="121">Libyan Arab Jamahiriya</option>
                                                <option value="122">Liechtenstein</option>
                                                <option value="123">Lithuania</option>
                                                <option value="124">Luxembourg</option>
                                                <option value="125">Macao</option>
                                                <option value="126">Macedonia, the Former Yugoslav Republic of</option>
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
                                                <option value="139">Micronesia, Federated States of</option>
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
                                                <option value="164">Palestinian Territory, Occupied</option>
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
                                                <option value="183">Saint Vincent and the Grenadines</option>
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
                                                <option value="198">South Georgia and the South Sandwich Islands</option>
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
                                                <option value="227">United States Minor Outlying Islands</option>
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
                                        <span className="field-validation-valid text-danger" data-valmsg-for="PassportIssueCountryId" data-valmsg-replace="true"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="pibox_student_register">
                                    <label>City of Birth
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <input className="text-box single-line" id="Passport_CityofBirth" name="Passport.CityofBirth" placeholder="Enter City" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="pibox_student_register">
                                    <label>Country of Birth
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <div className="select">
                                            <select name="Passport.CountryOfBirthId" className="form-control valid" data-val="true" data-val-number="The field CountryOfBirthId must be a number." data-val-required="The CountryOfBirthId field is required." id="Passport.CountryOfBirthId" aria-required="true" aria-invalid="false">
                                                <option value="">Country of Birth</option>
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
                                                <option value="50">Congo, the Democratic Republic of the</option>
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
                                                <option value="93">Heard Island and Mcdonald Islands</option>
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
                                                <option value="112">Korea, Democratic People's Republic of</option>
                                                <option value="113">Korea, Republic of</option>
                                                <option value="240">Kosovo</option>
                                                <option value="114">Kuwait</option>
                                                <option value="115">Kyrgyzstan</option>
                                                <option value="116">Lao People's Democratic Republic</option>
                                                <option value="117">Latvia</option>
                                                <option value="118">Lebanon</option>
                                                <option value="119">Lesotho</option>
                                                <option value="120">Liberia</option>
                                                <option value="121">Libyan Arab Jamahiriya</option>
                                                <option value="122">Liechtenstein</option>
                                                <option value="123">Lithuania</option>
                                                <option value="124">Luxembourg</option>
                                                <option value="125">Macao</option>
                                                <option value="126">Macedonia, the Former Yugoslav Republic of</option>
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
                                                <option value="139">Micronesia, Federated States of</option>
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
                                                <option value="164">Palestinian Territory, Occupied</option>
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
                                                <option value="183">Saint Vincent and the Grenadines</option>
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
                                                <option value="198">South Georgia and the South Sandwich Islands</option>
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
                                                <option value="227">United States Minor Outlying Islands</option>
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
                                        <span className="field-validation-valid text-danger" data-valmsg-for="CountryOfBirthId" data-valmsg-replace="true"></span>
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
                                    <label>Nationality
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <div className="select">
                                            <select name="Nationality.NationalityId" className="form-control" data-val="true" data-val-number="The field NationalityId must be a number." data-val-required="The NationalityId field is required." id="Nationality.NationalityId">
                                                <option value="">Enter Nationality</option>
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
                                                <option value="50">Congo, the Democratic Republic of the</option>
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
                                                <option value="93">Heard Island and Mcdonald Islands</option>
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
                                                <option value="112">Korea, Democratic People's Republic of</option>
                                                <option value="113">Korea, Republic of</option>
                                                <option value="240">Kosovo</option>
                                                <option value="114">Kuwait</option>
                                                <option value="115">Kyrgyzstan</option>
                                                <option value="116">Lao People's Democratic Republic</option>
                                                <option value="117">Latvia</option>
                                                <option value="118">Lebanon</option>
                                                <option value="119">Lesotho</option>
                                                <option value="120">Liberia</option>
                                                <option value="121">Libyan Arab Jamahiriya</option>
                                                <option value="122">Liechtenstein</option>
                                                <option value="123">Lithuania</option>
                                                <option value="124">Luxembourg</option>
                                                <option value="125">Macao</option>
                                                <option value="126">Macedonia, the Former Yugoslav Republic of</option>
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
                                                <option value="139">Micronesia, Federated States of</option>
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
                                                <option value="164">Palestinian Territory, Occupied</option>
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
                                                <option value="183">Saint Vincent and the Grenadines</option>
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
                                                <option value="198">South Georgia and the South Sandwich Islands</option>
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
                                                <option value="227">United States Minor Outlying Islands</option>
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
                                        <span className="field-validation-valid text-danger" data-valmsg-for="NationalityId" data-valmsg-replace="true"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>Citizenship
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <div className="select">
                                            <select name="Nationality.CitizenshipId" className="form-control" data-val="true" data-val-number="The field CitizenshipId must be a number." data-val-required="The CitizenshipId field is required." id="Nationality.CitizenshipId">
                                                <option value="">Enter Citizenship</option>
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
                                                <option value="50">Congo, the Democratic Republic of the</option>
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
                                                <option value="93">Heard Island and Mcdonald Islands</option>
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
                                                <option value="112">Korea, Democratic People's Republic of</option>
                                                <option value="113">Korea, Republic of</option>
                                                <option value="240">Kosovo</option>
                                                <option value="114">Kuwait</option>
                                                <option value="115">Kyrgyzstan</option>
                                                <option value="116">Lao People's Democratic Republic</option>
                                                <option value="117">Latvia</option>
                                                <option value="118">Lebanon</option>
                                                <option value="119">Lesotho</option>
                                                <option value="120">Liberia</option>
                                                <option value="121">Libyan Arab Jamahiriya</option>
                                                <option value="122">Liechtenstein</option>
                                                <option value="123">Lithuania</option>
                                                <option value="124">Luxembourg</option>
                                                <option value="125">Macao</option>
                                                <option value="126">Macedonia, the Former Yugoslav Republic of</option>
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
                                                <option value="139">Micronesia, Federated States of</option>
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
                                                <option value="164">Palestinian Territory, Occupied</option>
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
                                                <option value="183">Saint Vincent and the Grenadines</option>
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
                                                <option value="198">South Georgia and the South Sandwich Islands</option>
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
                                                <option value="227">United States Minor Outlying Islands</option>
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
                                        <span className="field-validation-valid text-danger" data-valmsg-for="CitizenshipId" data-valmsg-replace="true"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 pibox_student_register">
                                <label>Is the applicant a citizen of more than one country?
                                    <span className="requiretxx">*</span>
                                </label>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="radiobtn">
                                            <input id="chkNo" className="toggle toggle-left" name="IsMultipleCitizen" value="true" type="radio" checked="checked" />
                                            <label for="chkNo" className="btn">No</label>
                                            <input id="chkYes" className="toggle toggle-right" name="IsMultipleCitizen" value="false" type="radio" />
                                            <label for="chkYes" className="btn">Yes</label>
                                        </div>
                                        <input type="hidden" value="false" name="Nationality.IsMultipleCitizen" />
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="">
                                            <div className="select">
                                                <select data-placeholder="Enter Nationality" multiple="" className="form-control" id="chooseCitizenshipCountry" disabled="disabled" style={{ display: 'none' }}>
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
                                                    <option value="50">Congo, the Democratic Republic of the</option>
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
                                                    <option value="93">Heard Island and Mcdonald Islands</option>
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
                                                    <option value="112">Korea, Democratic People's Republic of</option>
                                                    <option value="113">Korea, Republic of</option>
                                                    <option value="240">Kosovo</option>
                                                    <option value="114">Kuwait</option>
                                                    <option value="115">Kyrgyzstan</option>
                                                    <option value="116">Lao People's Democratic Republic</option>
                                                    <option value="117">Latvia</option>
                                                    <option value="118">Lebanon</option>
                                                    <option value="119">Lesotho</option>
                                                    <option value="120">Liberia</option>
                                                    <option value="121">Libyan Arab Jamahiriya</option>
                                                    <option value="122">Liechtenstein</option>
                                                    <option value="123">Lithuania</option>
                                                    <option value="124">Luxembourg</option>
                                                    <option value="125">Macao</option>
                                                    <option value="126">Macedonia, the Former Yugoslav Republic of</option>
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
                                                    <option value="139">Micronesia, Federated States of</option>
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
                                                    <option value="164">Palestinian Territory, Occupied</option>
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
                                                    <option value="183">Saint Vincent and the Grenadines</option>
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
                                                    <option value="198">South Georgia and the South Sandwich Islands</option>
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
                                                    <option value="227">United States Minor Outlying Islands</option>
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
                                                <div className="chosen-container chosen-container-multi chosen-disabled" title="" id="chooseCitizenshipCountry_chosen" style={{ width: "373px" }}>
                                                    <ul className="chosen-choices">
                                                        <li className="search-field">
                                                            <input className="chosen-search-input default valid" type="text" autocomplete="off" value="Enter Nationality" disabled="" style={{ width: "147.125px" }} aria-invalid="false" />
                                                        </li>
                                                    </ul>
                                                    <div className="chosen-drop">
                                                        <ul className="chosen-results"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <input name="Nationality.CitizenCountries" className="hidden-val" id="CitizenCountries" type="hidden" value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 pibox_student_register">
                                <label>Is the applicant living and studying in any other country?
                                    <span className="requiretxx">*</span>
                                </label>
                                <div className="row">
                                    <div className="col-sm-4 ">
                                        <div className="radiobtn">
                                            <input id="lusNo" className="toggle toggle-left" name="IsLivingUS" value="true" type="radio" checked="checked" />
                                            <label for="lusNo" className="btn">No</label>
                                            <input id="lusYes" className="toggle toggle-right" name="IsLivingUS" value="false" type="radio" />
                                            <label for="lusYes" className="btn">Yes</label>
                                        </div>
                                        <input type="hidden" value="false" name="Nationality.IsLivingUS" />
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="">
                                            <div className="select">
                                                <select name="Nationality.LivingCountryId" className="form-control" data-val="true" data-val-number="The field LivingCountryId must be a number." id="LivingCountryId" disabled="disabled">
                                                    <option value="">Living Country</option>
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
                                                    <option value="50">Congo, the Democratic Republic of the</option>
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
                                                    <option value="93">Heard Island and Mcdonald Islands</option>
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
                                                    <option value="112">Korea, Democratic People's Republic of</option>
                                                    <option value="113">Korea, Republic of</option>
                                                    <option value="240">Kosovo</option>
                                                    <option value="114">Kuwait</option>
                                                    <option value="115">Kyrgyzstan</option>
                                                    <option value="116">Lao People's Democratic Republic</option>
                                                    <option value="117">Latvia</option>
                                                    <option value="118">Lebanon</option>
                                                    <option value="119">Lesotho</option>
                                                    <option value="120">Liberia</option>
                                                    <option value="121">Libyan Arab Jamahiriya</option>
                                                    <option value="122">Liechtenstein</option>
                                                    <option value="123">Lithuania</option>
                                                    <option value="124">Luxembourg</option>
                                                    <option value="125">Macao</option>
                                                    <option value="126">Macedonia, the Former Yugoslav Republic of</option>
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
                                                    <option value="139">Micronesia, Federated States of</option>
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
                                                    <option value="164">Palestinian Territory, Occupied</option>
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
                                                    <option value="183">Saint Vincent and the Grenadines</option>
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
                                                    <option value="198">South Georgia and the South Sandwich Islands</option>
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
                                                    <option value="227">United States Minor Outlying Islands</option>
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
                    <div className="PIbox BackgroundInfo Old-Detail" id="BackgroundInfo">
                        <div className="row pibox_student_register">
                            <div className="col-sm-6">
                                <label>Has applicant applied for any type of immigration into any country?</label>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="radiobtn">
                                            <input id="imcNo" className="toggle toggle-left" name="ImmigrationCountry" value="true" type="radio" checked="checked" />
                                            <label for="imcNo" className="btn">No</label>
                                            <input id="imcYes" className="toggle toggle-right" name="ImmigrationCountry" value="false" type="radio" />
                                            <label for="imcYes" className="btn">Yes</label>
                                        </div>
                                        <input type="hidden" value="false" name="StudentBackgroundInformations.ImmigrationCountry" />
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="">
                                            <div className="select">
                                                <select name="StudentBackgroundInformations.ImmigrationCountryValue" className="form-control" id="ImmigrationCountryValue" disabled="disabled">
                                                    <option value="">Select Country</option>
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
                                                    <option value="50">Congo, the Democratic Republic of the</option>
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
                                                    <option value="93">Heard Island and Mcdonald Islands</option>
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
                                                    <option value="112">Korea, Democratic People's Republic of</option>
                                                    <option value="113">Korea, Republic of</option>
                                                    <option value="240">Kosovo</option>
                                                    <option value="114">Kuwait</option>
                                                    <option value="115">Kyrgyzstan</option>
                                                    <option value="116">Lao People's Democratic Republic</option>
                                                    <option value="117">Latvia</option>
                                                    <option value="118">Lebanon</option>
                                                    <option value="119">Lesotho</option>
                                                    <option value="120">Liberia</option>
                                                    <option value="121">Libyan Arab Jamahiriya</option>
                                                    <option value="122">Liechtenstein</option>
                                                    <option value="123">Lithuania</option>
                                                    <option value="124">Luxembourg</option>
                                                    <option value="125">Macao</option>
                                                    <option value="126">Macedonia, the Former Yugoslav Republic of</option>
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
                                                    <option value="139">Micronesia, Federated States of</option>
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
                                                    <option value="164">Palestinian Territory, Occupied</option>
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
                                                    <option value="183">Saint Vincent and the Grenadines</option>
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
                                                    <option value="198">South Georgia and the South Sandwich Islands</option>
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
                                                    <option value="227">United States Minor Outlying Islands</option>
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
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label>Does applicant suffer from a serious medical condition?</label>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="radiobtn">
                                            <input id="mecNo" className="toggle toggle-left" name="MedicalCondition" value="true" type="radio" checked="checked" />
                                            <label for="mecNo" className="btn">No</label>
                                            <input id="mecYes" className="toggle toggle-right" name="MedicalCondition" value="false" type="radio" />
                                            <label for="mecYes" className="btn">Yes</label>
                                        </div>
                                        <input type="hidden" value="false" name="StudentBackgroundInformations.MedicalCondition" />
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="">
                                            <input name="StudentBackgroundInformations.MedicalConditionValue" className="form-control" id="MedicalConditionValue" placeholder="Specify Here..." type="text" value="" disabled="disabled" />
                                        </div>
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
                                            <input id="rlcNo" className="toggle toggle-left" name="RefusalCountry" value="true" type="radio" checked="checked" />
                                            <label for="rlcNo" className="btn">No</label>
                                            <input id="rlcYes" className="toggle toggle-right" name="RefusalCountry" value="false" type="radio" />
                                            <label for="rlcYes" className="btn">Yes</label>
                                        </div>
                                        <input type="hidden" value="false" name="StudentBackgroundInformations.RefusalCountry" />
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="margin-bottom-10">
                                            <div className="select">
                                                <select name="StudentBackgroundInformations.RefusalCountryValue" className="form-control" id="RefusalCountryValue" disabled="disabled">
                                                    <option value="">Select Country</option>
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
                                                    <option value="50">Congo, the Democratic Republic of the</option>
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
                                                    <option value="93">Heard Island and Mcdonald Islands</option>
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
                                                    <option value="112">Korea, Democratic People's Republic of</option>
                                                    <option value="113">Korea, Republic of</option>
                                                    <option value="240">Kosovo</option>
                                                    <option value="114">Kuwait</option>
                                                    <option value="115">Kyrgyzstan</option>
                                                    <option value="116">Lao People's Democratic Republic</option>
                                                    <option value="117">Latvia</option>
                                                    <option value="118">Lebanon</option>
                                                    <option value="119">Lesotho</option>
                                                    <option value="120">Liberia</option>
                                                    <option value="121">Libyan Arab Jamahiriya</option>
                                                    <option value="122">Liechtenstein</option>
                                                    <option value="123">Lithuania</option>
                                                    <option value="124">Luxembourg</option>
                                                    <option value="125">Macao</option>
                                                    <option value="126">Macedonia, the Former Yugoslav Republic of</option>
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
                                                    <option value="139">Micronesia, Federated States of</option>
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
                                                    <option value="164">Palestinian Territory, Occupied</option>
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
                                                    <option value="183">Saint Vincent and the Grenadines</option>
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
                                                    <option value="198">South Georgia and the South Sandwich Islands</option>
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
                                                    <option value="227">United States Minor Outlying Islands</option>
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
                                        <div className="pibox_student_register">
                                            <input name="StudentBackgroundInformations.RefusalCountryAdditional" className="form-control" id="RefusalCountryAdditional" placeholder="Type of Visa" type="text" value="" disabled="disabled" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label>Has applicant ever been convicted of a criminal offence?</label>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="radiobtn">
                                            <input id="cloNo" className="toggle toggle-left" name="CriminalOffence" value="true" type="radio" checked="checked" />
                                            <label for="cloNo" className="btn">No</label>
                                            <input id="cloYes" className="toggle toggle-right" name="CriminalOffence" value="false" type="radio" />
                                            <label for="cloYes" className="btn">Yes</label>
                                        </div>
                                        <input type="hidden" value="false" name="StudentBackgroundInformations.CriminalOffence" />
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="pibox_student_register">
                                            <input name="StudentBackgroundInformations.CriminalOffenceValue" className="form-control" id="CriminalOffenceValue" placeholder="Specify Here..." type="text" value="" disabled="disabled" />
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
                    <div className="PIbox ImportantContacts Old-Detail" id="ImportantContacts">
                        <h4>Emergency Contacts</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>Name
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <input className="text-box single-line" id="StudentEmergencyContact_ContactName" name="StudentEmergencyContact.ContactName" placeholder="Enter Name" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>Email
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <input className="text-box single-line" id="StudentEmergencyContact_ContactEmail" name="StudentEmergencyContact.ContactEmail" placeholder="Enter Email Address" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>Phone
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <PhoneInput
                                        country={'in'}
                                        id="phoneno"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="submit-btn"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="pibox_student_register">
                                    <label>Relation with Applicant
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="dvalue">
                                        <input className="text-box single-line" id="StudentEmergencyContact_Relation" name="StudentEmergencyContact.Relation" placeholder="Enter Relation" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="submit-btn text-center tabsnextprevbtn">
                                        <div className="relativepo">
                                            <button className="btn btn-info" type="button" >Save</button>
                                            <button className="btn btn-primary" type="button">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div id="modalSaveBeforeLeave" className="modal">
                    <div className="modal-dialog modal-paylater SaveBeforeLeave" role="document">
                        <div className="modal-content">
                            <div className="modal-header padding-top-0">
                                <h4 className="modal-title font-size22 text-black">
                                    WAIT!
                                    <br />
                                    Want to save the form?

                                </h4>
                            </div>
                            <div className="modal-body">
                                <button className="btn btn-info pull-right margin-bottom-10" id="btn-save-personal-details">Save</button>
                                <button className="btn btn-info bg-red  pull-left margin-bottom-10" id="btn-leave">don’t save</button>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="AcademicQualification">
                <div id="divQualifications">
                    <div className="PIbox EducationSummary Detail">
                        <div className="EducationLevelCollaps">
                            <div className="btnsec">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="">
                                    <label>Country of Education</label>
                                    <div className="">
                                        <div className="select">
                                            <select name="Student.StudyCountryId" className="form-control" data-val="true" data-val-number="The field StudyCountryId must be a number." id="Student.StudyCountryId" tabindex="0"><option value="">Select Country</option>
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
                                                <option value="50">Congo, the Democratic Republic of the</option>
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
                                                <option value="93">Heard Island and Mcdonald Islands</option>
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
                                                <option value="112">Korea, Democratic People's Republic of</option>
                                                <option value="113">Korea, Republic of</option>
                                                <option value="240">Kosovo</option>
                                                <option value="114">Kuwait</option>
                                                <option value="115">Kyrgyzstan</option>
                                                <option value="116">Lao People's Democratic Republic</option>
                                                <option value="117">Latvia</option>
                                                <option value="118">Lebanon</option>
                                                <option value="119">Lesotho</option>
                                                <option value="120">Liberia</option>
                                                <option value="121">Libyan Arab Jamahiriya</option>
                                                <option value="122">Liechtenstein</option>
                                                <option value="123">Lithuania</option>
                                                <option value="124">Luxembourg</option>
                                                <option value="125">Macao</option>
                                                <option value="126">Macedonia, the Former Yugoslav Republic of</option>
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
                                                <option value="139">Micronesia, Federated States of</option>
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
                                                <option value="164">Palestinian Territory, Occupied</option>
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
                                                <option value="183">Saint Vincent and the Grenadines</option>
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
                                                <option value="198">South Georgia and the South Sandwich Islands</option>
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
                                                <option value="227">United States Minor Outlying Islands</option>
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

                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="">
                                    <label>Highest Level of Education<span className="requiretxx">*</span></label>
                                    <div className="">
                                        <div className="select">
                                            <select name="Student.HighestStudyLevelId" className="form-control" data-val="true" data-val-number="The field HighestStudyLevelId must be a number." id="Student.HighestStudyLevelId" tabindex="1"><option value="">Select Level</option>
                                                <option value="10">Postgraduate</option>
                                                <option value="8">Undergraduate</option>
                                                <option value="5">Grade 12th or equivalent</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="divQualificationForm" className="PIbox AQForm Detail" style={{display:showAcademyFields ? "block" :"none"}}>
                        <form id="qualification-add-form" novalidate="novalidate">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="">
                                        <label>Level of Study<span className="requiretxx">*</span></label>
                                        <div className="dvalue">
                                            <div className="select">
                                                <select name="StudentQualificationVM.StudyLevelId" className="form-control" data-val="true" data-val-number="The field StudyLevelId must be a number." id="StudentQualificationVM.StudyLevelId"><option value="">Select Level</option>
                                                    <option value="1">Foundation</option>
                                                    <option value="2">Grade 9th</option>
                                                    <option value="4">Grade 11th</option>
                                                    <option value="6">UG Diploma/Certificate/Associate Degree</option>
                                                    <option value="9">PG Diploma/Certificate</option>
                                                    <option value="11">PhD</option>
                                                    <option value="12">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="register_student_form" style={{ display: "none" }} id="divNameofBoard">
                                        <label>Name of Board<span className="requiretxx">*</span></label>
                                        <div className="dvalue">
                                            <input className="text-box single-line" id="StudentQualificationVM_Board" name="StudentQualificationVM.Board" placeholder="Enter Name of Board" type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="register_student_form">
                                        <label>Name of the Institution<span className="requiretxx">*</span></label>
                                        <div className="dvalue">
                                            <input className="text-box single-line" id="StudentQualificationVM_Name" name="StudentQualificationVM.Name" placeholder="Enter Name of the Institution" type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-6 country-container">
                                            <div className="register_student_form">
                                                <label>Country of Study<span className="requiretxx">*</span></label>
                                                <div className="dvalue">
                                                    <div className="select">
                                                        <select name="StudentQualificationVM.CountryId" className="form-control ddlCountry" data-val="true" data-val-number="The field CountryId must be a number." id="StudentQualificationVM.CountryId"><option value="">Select Country</option>
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
                                                            <option value="50">Congo, the Democratic Republic of the</option>
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
                                                            <option value="93">Heard Island and Mcdonald Islands</option>
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
                                                            <option value="112">Korea, Democratic People's Republic of</option>
                                                            <option value="113">Korea, Republic of</option>
                                                            <option value="240">Kosovo</option>
                                                            <option value="114">Kuwait</option>
                                                            <option value="115">Kyrgyzstan</option>
                                                            <option value="116">Lao People's Democratic Republic</option>
                                                            <option value="117">Latvia</option>
                                                            <option value="118">Lebanon</option>
                                                            <option value="119">Lesotho</option>
                                                            <option value="120">Liberia</option>
                                                            <option value="121">Libyan Arab Jamahiriya</option>
                                                            <option value="122">Liechtenstein</option>
                                                            <option value="123">Lithuania</option>
                                                            <option value="124">Luxembourg</option>
                                                            <option value="125">Macao</option>
                                                            <option value="126">Macedonia, the Former Yugoslav Republic of</option>
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
                                                            <option value="139">Micronesia, Federated States of</option>
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
                                                            <option value="164">Palestinian Territory, Occupied</option>
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
                                                            <option value="183">Saint Vincent and the Grenadines</option>
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
                                                            <option value="198">South Georgia and the South Sandwich Islands</option>
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
                                                            <option value="227">United States Minor Outlying Islands</option>
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
                                            </div>
                                        </div>
                                        <div className="col-sm-6 state-container">
                                            <div className="register_student_form">
                                                <label>State of Study<span className="requiretxx">*</span></label>
                                                <div className="dvalue">
                                                    <div className="select">
                                                        <select name="StudentQualificationVM.StateId" className="form-control ddlState" data-val="true" data-val-number="The field StateId must be a number." id="StudentQualificationVM.StateId"><option value="">Select State</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="">
                                        <label>City of Study<span className="requiretxx">*</span></label>
                                        <div className="dvalue">
                                            <input className="text-box single-line" id="StudentQualificationVM_City" name="StudentQualificationVM.City" placeholder="Enter Name of City" type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="">
                                                <label>Qualification Achieved/Degree Awarded</label>
                                                <div className="dvalue">
                                                    <input className="upperCase text-box single-line" id="StudentQualificationVM_QualificationName" name="StudentQualificationVM.QualificationName" placeholder="Enter Qualification Achieved / Degree Awarded" type="text" value="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="">
                                                <label>Backlogs</label>
                                                <div className="dvalue">
                                                    <input className="text-box single-line" data-val="true" data-val-number="The field Backlogs must be a number." id="StudentQualificationVM_Backlogs" name="StudentQualificationVM.Backlogs" placeholder="Enter Backlogs" type="number" value="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-2">
                                    <div className="register_student_form">
                                        <label>Grading System<span className="requiretxx">*</span></label>
                                        <div className="dvalue">
                                            <div className="select">
                                                <select name="StudentQualificationVM.GradingPattern" className="form-control ddlState" data-val="true" data-val-number="The field GradingPattern must be a number." id="StudentQualificationVM.GradingPattern"><option value="">Select...</option>
                                                    <option value="100">Out of 100</option>
                                                    <option value="45">Out of 45</option>
                                                    <option value="10">Out of 10</option>
                                                    <option value="7">Out of 7</option>
                                                    <option value="5">Out of 5</option>
                                                    <option value="4">Out of 4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="register_student_form">
                                        <label>Score<span className="requiretxx">*</span></label>
                                        <div className="dvalue">
                                            <input className="text-box single-line" data-val="true" data-val-number="The field Marks must be a number." id="StudentQualificationVM_Marks" name="StudentQualificationVM.Marks" placeholder="Enter Percentage/CGPA" type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="register_student_form">
                                        <label>Primary Language of Instruction<span className="requiretxx">*</span></label>
                                        <div className="dvalue">
                                            <input className="text-box single-line" id="StudentQualificationVM_LanguageInstruction" name="StudentQualificationVM.LanguageInstruction" placeholder="Enter Primary Language of Instruction" type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="">
                                        <label>Start Date<span className="requiretxx">*</span></label>
                                        <div className="dvalue">
                                            <input name="StudentQualificationVM.StartDate" value="" className="form-control" id="StudentQualificationVMStartDate" placeholder="DD/MM/YYYY" type="datetime" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="">
                                        <label>End Date<span className="requiretxx">*</span></label>
                                        <div className="dvalue">
                                            <input name="StudentQualificationVM.EndDate" value="" className="form-control" id="StudentQualificationVMEndDate" placeholder="DD/MM/YYYY" type="datetime" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="register_student_form text-center">
                                        <button type="button" className="btn btn-primary" id="btn-add-update-qualification">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {!showAcademyFields && <div className="addanotherbtn">
                        <button type="button" className="btn btn-default addanother" id="addQualification" onClick={()=>setShowAcademyFields(true)}>+ ADD ANOTHER</button>
                    </div>}
                    <div className="SPC-Paybtn tabsnextprevbtn">
                        <div className="relativepo ">
                            <button type="button" className="btn btn-info btn-continue" id="btnWorkContinue">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="WorkExperience">
                <h2 className="title">Work Experience</h2>
                <div id="divWorkExperienceInformation">
                    <div id="divWorkInformationFormNext"></div>
                    <div className="PIbox WEForm Detail" id="divWorkInformationForm" style={{ display: showWorkExp ? "block" : 'none' }}>
                        <form id="work-form" novalidate="novalidate">
                            <input name="WorkInformationId" id="WorkInformationId" type="hidden" value="" />
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="pibox_student_register">
                                        <label>Name of the Organisation &amp; Address* </label>
                                        <div className="dvalue">
                                            <input type="text" id="txtWorkCompanyName" name="txtWorkCompanyName" className="form-control" placeholder="Name of the Organisation &amp; Address" tabindex="1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="pibox_student_register">
                                        <label>Position*</label>
                                        <div className="dvalue">
                                            <input type="text" className="form-control" id="txtWorkDesignation" name="txtWorkDesignation" placeholder="Enter Position" tabindex="2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="pibox_student_register">
                                        <label>Job Profile</label>
                                        <div className="dvalue">
                                            <input type="text" id="txtJobProfile" name="txtJobProfile" className="form-control" placeholder="Enter Job Profile" tabindex="3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="pibox_student_register">
                                        <label>Working From*</label>
                                        <div className="dvalue">
                                            <input type="text" id="txtWorkFrom" name="txtWorkFrom" className="form-control working-from" placeholder="DD/MM/YYYY" tabindex="4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="pibox_student_register">
                                        <label>Working upto*</label>
                                        <div className="dvalue">
                                            <input type="text" className="form-control working-upto" id="txtWorkTo" name="txtWorkTo" placeholder="DD/MM/YYYY" tabindex="5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="pibox_student_register">
                                        <label>Mode of Salary</label>
                                        <div className="dvalue">
                                            <div className="select">
                                                <select id="ddlModeOfSalary" name="ddlModeOfSalary" className="form-control" tabindex="6">
                                                    <option value="">Mode of Salary</option>
                                                    <option value="Cash">Cash</option>
                                                    <option value="Cheque">Cheque</option>
                                                    <option value="Bank Transfer">Bank Transfer</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <label>I am currently working here
                                        <span className="requiretxx">*</span>
                                    </label>
                                    <div className="radiobtn">
                                        <input id="workYes" className="toggle toggle-left" name="workingradio" value="false" type="radio" />
                                        <label for="workYes" className="btn">Yes</label>
                                        <input id="workNo" className="toggle toggle-right" name="workingradio" value="true" type="radio" checked="" />
                                        <label for="workNo" className="btn">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary cancel" id="btn-cancel-workexperience">Cancel</button>
                                        <button type="button" className="btn btn-primary" id="btn-add-update-work">Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="goodbye"></div>
                    {!showWorkExp && <div className="addanotherbtn" >
                        <a className="btn btn-default newwork" id="hplnkAddNewWorkInformation" onClick={() => setShowWorkExp(true)}>+ Add Work Experience</a>
                    </div>}
                    <div className="SPC-Paybtn tabsnextprevbtn">
                        <div className="relativepo ">
                            <button type="button" className="btn btn-info btn-continue" id="btnWorkContinue">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="Tests">
                <h2 className="title">Tests</h2>
                <div className="editbutton">
                    <button className="editbtn" id="testEdit" type="button">Edit</button>
                </div>
                <div id="tests">
                    <div className="PIbox TestsEdit">
                        <form id="test-form" novalidate="novalidate">
                            <div style={{ textAlign: 'justify', display: 'none', margin: "20px 20px 20px 13px" }} id="divInforMsgTest">
                                The associated tests will be displayed once your desired programs are shortlisted in the ‘Shortlisted Programs’ Tab.
                            </div>
                            <div className="test-partial">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label className="checkbox-inline test">
                                            <input type="checkbox" className="test-check" id="chkGre" style={{ opacity: "initial" }} />
                                            <span className="label-text">GRE</span>
                                            <span className="addtest">
                                                <span id="greExpandSign">+</span> Add Test
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="test-data" style={{ display: 'block' }}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="pibox_student_register">
                                                <label>Overall Score</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <input type="text" name="greOverallScore" id="greOverallScore" className="form-control overall-score integer" maxlength="3" placeholder="Overall Score" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="pibox_student_register">
                                                <label>Date of Examination</label>
                                                <div className="dvalue">
                                                    <input type="text" className="form-control examination-date" id="GREid" data-year="5" value="" placeholder="Dt. of Examination" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="pibox_student_register">
                                                <label>Quantitative</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">Q:</span>
                                                    <input type="text" name="greQuantitative" id="greQuantitative" className="form-control quantitative integer input_text_with_icon_text" maxlength="3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="pibox_student_register">
                                                <label>Verbal</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">V:</span>
                                                    <input type="text" name="greVerbal" id="greVerbal" className="form-control verbal integer input_text_with_icon_text" o maxlength="5" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="pibox_student_register">
                                                <label>Analytical Writing</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">AW:</span>
                                                    <input type="text" name="greAW" id="greAW" className="form-control analytical-writing input-integer input_text_with_icon_text" maxlength="3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="test-partial">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label className="checkbox-inline test">
                                            <input type="checkbox" className="test-check" id="chkGmat" style={{ opacity: "initial" }} />
                                            <span className="label-text">GMAT</span>
                                            <span className="addtest">
                                                <span id="gmatExpandSign" />+</span> Add Test

                                        </label>
                                    </div>
                                </div>
                                <div className="test-data" style={{ display: 'none' }}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="pibox_student_register">
                                                <label>Overall Score</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <input type="text" name="gmatOverallScore" id="gmatOverallScore" className="form-control overall-score integer" placeholder="Overall Score" maxlength="3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="pibox_student_register">
                                                <label>Date of Examination</label>
                                                <div className="dvalue">
                                                    <input type="text" className="form-control examination-date" id="GMATid" data-year="5" value="" placeholder="Dt. of Examination" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="pibox_student_register">
                                                <label>Quantitative</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">Q:</span>
                                                    <input type="text" name="gmatQuantitative" id="gmatQuantitative" className="form-control quantitative integer input_text_with_icon_text" maxlength="3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="pibox_student_register">
                                                <label>Verbal</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">V:</span>
                                                    <input type="text" name="gmatVerbal" id="gmatVerbal" className="form-control verbal integer input_text_with_icon_text" maxlength="3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="pibox_student_register">
                                                <label>Analytical Writing</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">AW:</span>
                                                    <input type="text" name="gmatAW" id="gmatAW" className="form-control analytical-writing input-integer input_text_with_icon_text" maxlength="3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="pibox_student_register">
                                                <label>Integrated Reasoning</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">IR:</span>
                                                    <input type="text" name="gmatIR" id="gmatIR" className="form-control interesting-reasoning integer input_text_with_icon_text" maxlength="1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="test-partial">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label className="test">
                                            <input type="checkbox" className="test-check" id="chkToefl" style={{ opacity: "initial" }} />
                                            <span className="label-text">TOEFL</span>
                                            <span className="addtest">
                                                <span id="toeflExpandSign">+</span> Add Test
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="test-data" style={{ display: 'none' }}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="">
                                                <label>Overall Score</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <input type="text" name="toeflOverallScore" id="toeflOverallScore" className="form-control overall-score integer" placeholder="Overall Score" maxlength="3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="pibox_student_register">
                                                <label>Date of Examination</label>
                                                <div className="dvalue">
                                                    <input type="text" className="form-control examination-date" id="TOEFLid" data-year="2" value="" placeholder="Dt. of Examination" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="pibox_student_register">
                                                <label>Reading</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">R:</span>
                                                    <input type="text" name="toeflReading" className="form-control reading integer input_text_with_icon_text" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="pibox_student_register">
                                                <label>Listening</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">L:</span>
                                                    <input type="text" name="toeflListening" className="form-control listening integer input_text_with_icon_text" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="pibox_student_register">
                                                <label>Speaking</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">S:</span>
                                                    <input type="text" name="toeflSpeaking" className="form-control speaking integer input_text_with_icon_text" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="pibox_student_register">
                                                <label>Writing</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">W:</span>
                                                    <input type="text" name="toeflWriting" className="form-control writing integer input_text_with_icon_text" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="test-partial">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label className="checkbox-inline test">
                                            <input type="checkbox" className="test-check" id="chkIelts" style={{ opacity: "initial" }} />
                                            <span className="label-text" />IELTS

                                            <span className="addtest">
                                                <span id="ieltsExpandSign">+</span> Add Test
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="test-data" style={{ display: 'none' }}>
                                    <div className="ieltsnotUKAUS">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label>Yet to Receive?</label>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <div className="radiobtn">
                                                            <input id="chkytrNo" className="toggle toggle-left" name="ieltsChkYetToReceived" value="true" type="radio" checked="" />
                                                            <label for="chkytrNo" className="btn">No</label>
                                                            <input id="chkytrYes" className="toggle toggle-right" name="ieltsChkYetToReceived" value="false" type="radio" />
                                                            <label for="chkytrYes" className="btn">Yes</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="">
                                                            <input id="txtResultDate" name="resultdate" className="form-control" placeholder="Enter Test Result Date" type="text" disabled="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="pibox_student_register">
                                                    <label>TRF No</label>
                                                    <div className="dvalue">
                                                        <span className="input_icon_with ">T:</span>
                                                        <input type="text" className="form-control trfno input_text_with_icon_text" placeholder="TRF No." maxlength="18" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label>IELTS Waiver</label>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <div className="radiobtn">
                                                            <input id="WaiverchkNo" className="toggle toggle-left" name="ieltsWaiverChk" value="true" type="radio" checked="" />
                                                            <label for="WaiverchkNo" className="btn">No</label>
                                                            <input id="WaiverchkYes" className="toggle toggle-right" name="ieltsWaiverChk" value="false" type="radio" />
                                                            <label for="WaiverchkYes" className="btn">Yes</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="pibox_student_register">
                                                            <input id="ieltsWaiverEnglishMarks" name="ieltsEnglish12" className="form-control" placeholder="Enter English 12 Marks" type="text" disabled="disabled" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="">
                                                    <label>Date of Examination</label>
                                                    <div className="dvalue">
                                                        <input type="text" name="ieltsDateOfExamination" className="form-control examination-date" id="IELTSid" data-year="2" value="" placeholder="Dt. of Examination" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <div className="">
                                                    <label>Listening</label>
                                                    <span className="requiretxx">*</span>
                                                    <div className="dvalue">
                                                        <span className="input_icon_with ">L:</span>
                                                        <input type="text" name="ieltsListening" className="form-control listening input_text_with_icon_text" maxlength="3" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="pibox_student_register">
                                                    <label>Reading</label>
                                                    <span className="requiretxx">*</span>
                                                    <div className="dvalue">
                                                        <span className="input_icon_with ">R:</span>
                                                        <input type="text" name="ieltsReading" className="form-control reading input_text_with_icon_text" maxlength="3" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="pibox_student_register">
                                                    <label>Writing</label>
                                                    <span className="requiretxx">*</span>
                                                    <div className="dvalue">
                                                        <span className="input_icon_with ">W:</span>
                                                        <input type="text" name="ieltsWriting" className="form-control writing input_text_with_icon_text" maxlength="3" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="pibox_student_register">
                                                    <label>Speaking</label>
                                                    <span className="requiretxx">*</span>
                                                    <div className="dvalue">
                                                        <span className="input_icon_with ">S:</span>
                                                        <input type="text" name="ieltsSpeaking" className="form-control speaking input_text_with_icon_text" maxlength="3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="pibox_student_register">
                                                    <label>Overall Score</label>
                                                    <span className="requiretxx">*</span>
                                                    <div className="dvalue">
                                                        <input type="text" name="ieltsOverallScore" className="form-control overall-score" placeholder="Overall Score" maxlength="3" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="test-partial">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label className="checkbox-inline test">
                                            <input type="checkbox" className="test-check" id="chkPte" style={{ opacity: "initial" }} />
                                            <span className="label-text">PTE</span>
                                            <span className="addtest">
                                                <span id="pteExpandSign">+</span> Add Test
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="test-data" style={{ display: 'none' }}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="pibox_student_register">
                                                <label>Overall Score</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <input type="text" name="pteOverallScore" className="form-control overall-score integer" placeholder="Overall Score" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="pibox_student_register">
                                                <label>Date of Examination</label>
                                                <div className="dvalue">
                                                    <input type="text" className="form-control examination-date" id="PTEid" data-year="2" value="" placeholder="Dt. of Examination" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="pibox_student_register">
                                                <label>Reading</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">R:</span>
                                                    <input type="text" name="pteReading" className="form-control reading integer input_text_with_icon_text" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="pibox_student_register">
                                                <label>Listening</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">L:</span>
                                                    <input type="text" name="pteListening" className="form-control listening integer input_text_with_icon_text" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="pibox_student_register">
                                                <label>Speaking</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">S:</span>
                                                    <input type="text" name="pteSpeaking" className="form-control speaking integer input_text_with_icon_text" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="pibox_student_register">
                                                <label>Writing</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">W:</span>
                                                    <input type="text" name="pteWriting" className="form-control writing integer input_text_with_icon_text" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="test-partial">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label className="checkbox-inline test">
                                            <input type="checkbox" className="test-check" id="chkdet" style={{ opacity: "initial" }} />
                                            <span className="label-text">DET</span>
                                            <span className="addtest">
                                                <span id="detExpandSign">+</span> Add Test
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="test-data" style={{ display: 'none' }}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="pibox_student_register">
                                                <label>Overall Score</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <input type="text" name="detOverallScore" className="form-control overall-score integer" placeholder="Overall Score" maxlength="3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="pibox_student_register">
                                                <label>Date of Examination</label>
                                                <div className="dvalue">
                                                    <input type="text" className="form-control examination-date" id="DETid" data-year="2" value="" placeholder="Date of Examination" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="test-partial">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label className="checkbox-inline test">
                                            <input type="checkbox" className="test-check" id="chkSat" style={{ opacity: "initial" }} />
                                            <span className="label-text">SAT</span>
                                            <span className="addtest">
                                                <span id="satExpandSign">+</span> Add Test
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="test-data" style={{ display: 'none' }}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="pibox_student_register">
                                                <label>Overall Score</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <input type="text" name="satOverallScore" className="form-control overall-score integer" placeholder="Overall Score" maxlength="4" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="pibox_student_register">
                                                <label>Date of Examination</label>
                                                <div className="dvalue">
                                                    <input type="text" className="form-control examination-date" id="SATid" data-year="5" value="" placeholder="Dt. of Examination" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="">
                                                <label>Reading &amp; Writing</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">RW:</span>
                                                    <input type="text" name="satReadingWriting" className="form-control readingandwriting integer input_text_with_icon_text" maxlength="3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="">
                                                <label>Math</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">M:</span>
                                                    <input type="text" name="satMath" className="form-control math integer input_text_with_icon_text" maxlength="3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="">
                                                <label>Essay</label>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">E:</span>
                                                    <input type="text" className="form-control essay integer input_text_with_icon_text" maxlength="1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="test-partial">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label className="checkbox-inline test">
                                            <input type="checkbox" className="test-check" id="chkAct" style={{ opacity: "initial" }} />
                                            <span className="label-text">ACT</span>
                                            <span className="addtest">
                                                <span id="actExpandSign" />+</span> Add Test

                                        </label>
                                    </div>
                                </div>
                                <div className="test-data" style={{ display: 'none' }}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="">
                                                <label>Overall Score</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <input type="text" name="actOverallScore" className="form-control overall-score integer" placeholder="Overall Score" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="">
                                                <label>Date of Examination</label>
                                                <div className="dvalue">
                                                    <input type="text" className="form-control examination-date" id="ACTid" data-year="5" value="" placeholder="Dt. of Examination" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="">
                                                <label>Math</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">M:</span>
                                                    <input type="text" name="actMath" className="form-control math integer input_text_with_icon_text" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="">
                                                <label>Reading</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">R:</span>
                                                    <input type="text" name="actReading" className="form-control reading integer input_text_with_icon_text" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="">
                                                <label>Science</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">S:</span>
                                                    <input type="text" name="actScience" className="form-control science integer input_text_with_icon_text" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="">
                                                <label>English</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">E:</span>
                                                    <input type="text" name="actEnglish" className="form-control english integer input_text_with_icon_text" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="">
                                                <label>Writing</label>
                                                <span className="requiretxx">*</span>
                                                <div className="dvalue">
                                                    <span className="input_icon_with ">W:</span>
                                                    <input type="text" name="actWriting" className="form-control writing integer input_text_with_icon_text" maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="submit-btn text-right tabsnextprevbtn">
                                <div className="relativepo">
                                    <button className="btn btn-primary" id="btn-test-submit">Save and continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default StudentPersonalFields