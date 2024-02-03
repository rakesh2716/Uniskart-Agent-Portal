import React, { useEffect, useState } from 'react';
import "./Dashboard.css"

import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import SummeryInfo from '../../Components/NewStudentRegistrationForm';
import Filters from '../../Components/Filters';
import PTfilterresult from '../../Components/PTfilterresult';
import PTbottomdashboard from '../../Components/PTbottomdashboard';
import { getUserInfo } from '../../Utils/Helpers';

const LandingPage = () => {

    return (
        <div className="page-container">
            <div className="content-wrap">
                <div className="row Top-Hed"></div>
                <Navbar />
                <div className="body-content padding-left-0 padding-right-0">
                    <div className="parnter-dashboard">
                        <div className="container PTdash">
                            <SummeryInfo />
                            <div className="row">
                                <div className="col-sm-12 staff12 padding-0">
                                    <div className="api-loader-div">
                                        <div className="content api-loader">
                                        </div>
                                        <div className="contentTxt api-loader-error">
                                            Data not found !
                                        </div>
                                        <Filters />

                                        <PTfilterresult />
                                    </div>
                                    <PTbottomdashboard />
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" id="hdnresponse" value="" />
                    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content videoPopup">
                                <div className="modal-header">
                                    <button id="vdoclose" type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                    <h4 className="modal-title fontcolor" id="myModalLabel">Course Finder Tutorial</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item" src="" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 left-align">
                                            <a target="_blank" id="lnkDownloadTutorial">Download Course Finder Tutorial PDF</a>
                                        </div>
                                        <div className="col-sm-6 right-align">
                                            <a target="_blank" id="lnkDownloadFaqs">Download Course Finder FAQ's</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="modal1" className="modal testtimemodel"></div>
                    <div id="modal-accomodation" className="modal fade accomodationpopup">
                        <div className="modal-header">
                            <button id="vdoclose" type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 className="modal-title fontcolor" id="myModalLabel">Accommodation</h4>
                        </div>
                        <div id="amber-widget"></div>
                    </div>

                    <div id="div_whitelable" style={{ display: "none" }}>
                        <div id="userTheme" className="mymodal" role="dialog" data-backdrop="static" data-keyboard="false">
                            <div className="modal-contentCustom">
                                <form id="msform">
                                    <fieldset id="themeSlideOne" className="selectModeScreen">
                                        <a className="close" >×</a>
                                        <h2 className="fs-title">{getUserInfo.name}</h2>
                                        <h3 className="fs-subtitle text-left">Kindly select your default view of Coursefinder</h3>
                                        <p className="fs-paragraph">Every time, Coursefinder will be loaded with the view selected by you now. You can change your default view from profile settings. After login, you can switch between modes through just a button-click.</p>
                                        <div name="next" className="next bluButton">White-Labelled mode</div>
                                        <div className="btnext next" name="next"><u>click here to know more about White-Labelled mode</u></div>
                                        <div className="devider"><div className="orbudge">OR</div></div>
                                        <div id="btnDefaultTheme" className="maybltrButton" data-dismiss="modal" >No, I am ok with the Normal mode</div>
                                    </fieldset>
                                    <fieldset id="themeSlideTwo" className="selectModeScreen">
                                        <a className="close" >×</a>
                                        <h2 className="fs-title">{getUserInfo.name}</h2>
                                        <h3 className="fs-subtitle text-left">Make your work area look the way you want!</h3>
                                        <h4 className="fs-spec">Change text colours, button colours, logo and icon color with ease</h4>
                                        <div className="row">
                                            <div className="col-sm-12 padding-0">
                                                <div className="col-sm-5 left greentxt padding-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
                                                <div className="col-sm-5 right bluetxt padding-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
                                            </div>
                                            <div className="col-sm-12 padding-19">
                                                <div className="col-sm-5 left"><span className="customBtgreen">Button name</span></div>
                                                <div className="col-sm-5 right"><span className="customBtblue">Button name</span></div>
                                            </div>
                                        </div>

                                        <div name="next" className="next bluButton">Try it now</div>
                                        <div name="previous" className="previous maybltrButton" data-dismiss="modal">Maybe later</div>
                                    </fieldset>
                                    <fieldset id="fieldset_logo">
                                        <a className="close">×</a>
                                        <h2 className="fs-title">{getUserInfo.name}</h2>
                                        <h3 className="fs-subtitle center" id="updateMsg" style={{ display: "none" }}>Lets update your White-Labelled workspace</h3>
                                        <h3 className="fs-subtitle center" id="updateMsgOne">Lets set up your White-Labelled workspace</h3>
                                        <div className="row">
                                            <div className="col-sm-12 steps">
                                                <div className="step_a">
                                                    1
                                                    <span>Logo</span>
                                                </div>

                                                <div className="step_b">
                                                    2
                                                    <span>Theme Colour</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 butSec">
                                                <div className="col-sm-12 text-left">
                                                    <div className="fs-logo">
                                                        Logo <span>(use logo size only width:170px and height:40px)</span>
                                                    </div>
                                                    <div id="logoCurrentdiv">
                                                        <img name="logoCurrent" id="logoCurrent" required />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 buttonSection">
                                                    <div className="upload-btn-wrapper">
                                                        <button className="btn">Upload Logo</button>
                                                        <input type="file" accept="image/*" id="loadlogo" name="logo" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="button" name="next" className="next action-button positioningNextbut minOpacity" value="Proceed To Next Step" id="btnValidation" disabled />

                                    </fieldset>
                                    <fieldset id="fieldset_color">
                                        <a className="close" >×</a>
                                        <h2 className="fs-title">{getUserInfo.name}</h2>
                                        <h3 className="fs-subtitle center">Lets set up your White-Labelled workspace</h3>
                                        <div className="row">
                                            <div className="col-sm-12 steps">
                                                <div className="step_c">
                                                    1
                                                    <span>Logo</span>
                                                </div>

                                                <div className="step_d">
                                                    2
                                                    <span>Theme Colour</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12  left-align">
                                                <div>Select Button Colour</div>
                                                <div className="selectColors ">
                                                    <input type="radio" id="orangeButton" name="button_colour" value="#0A4D9B" className="compulsory" checked />
                                                    <label htmlFor="orangeButton"><span className="red"></span></label>

                                                    <input type="radio" id="purpleButton" name="button_colour" value="#947DDE" />
                                                    <label htmlFor="purpleButton"><span className="purple"></span></label>

                                                    <input type="radio" id="greenButton" name="button_colour" value="#4CAF50" />
                                                    <label htmlFor="greenButton"><span className="green"></span></label>

                                                    <div className="addNew">
                                                        <input type="color" id="colorpicker" name="button_cust" value="#dddddd" />
                                                    </div>
                                                </div>

                                                <div>Select Text Colour</div>
                                                <div className="selectColors">

                                                    <input type="radio" id="orangeText" name="text_colour" value="#0A4D9B" className="compulsory" checked />
                                                    <label htmlFor="orangeText"><span className="red"></span></label>

                                                    <input type="radio" id="purpleText" name="text_colour" value="#947DDE" />
                                                    <label htmlFor="purpleText"><span className="purple"></span></label>

                                                    <input type="radio" id="greenText" name="text_colour" value="#4CAF50" />
                                                    <label htmlFor="greenText"><span className="green"></span></label>

                                                    <div className="addNew">
                                                        <input type="color" id="colorpicker" name="text_cust" value="#dddddd" />
                                                    </div>
                                                </div>

                                                <div>Select Icon Colour</div>
                                                <div className="selectColors">
                                                    <input type="radio" id="orangeIcon" name="icon_colour" value="#0A4D9B" className="compulsory" checked />
                                                    <label htmlFor="orangeIcon"><span className="red"></span></label>

                                                    <input type="radio" id="purpleIcon" name="icon_colour" value="#947DDE" />
                                                    <label htmlFor="purpleIcon"><span className="purple"></span></label>

                                                    <input type="radio" id="greenIcon" name="icon_colour" value="#4CAF50" />
                                                    <label htmlFor="greenIcon"><span className="green"></span></label>

                                                    <div className="addNew">
                                                        <input type="color" id="colorpicker" name="icon_cust" value="#dddddd" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="button" name="next" className="action-button left" id="btnThemeSave" value="Click Here To Load Website" />
                                    </fieldset>
                                    <fieldset id="fieldset_thanks">
                                        <h2 className="fs-title">{getUserInfo.name}</h2>
                                        <h3 id="logovalidation" className="fs-subtitle center">Logo will be applied after it is approved by admin.</h3>
                                        <h3 className="fs-subtitle center">Request you to please re-login for looking over the theme changes.</h3>
                                        <input type="button" className="action-button" value="Close" data-dismiss="modal" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default LandingPage;