import React, { useState } from 'react'
import Select from 'react-select';
import { customStyles } from '../Utils/Themes';
import { countryOptions, intakeOptions, yearOptions } from '../Utils/StaticData';
import { DataPicker } from './DatePicker';

const Filters = () => {
    const [getSelectedCountry, setGetSelectedCountry] = useState([])
    const [getYear, setGetYear] = useState({})
    const [getIntake, setGetIntake] = useState({})
    return (
        <div className="PTfilterbox staff">
            <div className="calendar-one">
                <DataPicker />
            </div>
            <div className="all-countries">
                {!getSelectedCountry?.length && <div className="all-countriesIco">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.997" height="18.997" viewBox="0 0 18.997 18.997">
                        <g id="Icon_feather-globe" data-name="Icon feather-globe" transform="translate(-2 -2)">
                            <path id="Path_1665" data-name="Path 1665" d="M20,11.5A8.5,8.5,0,1,1,11.5,3,8.5,8.5,0,0,1,20,11.5Z" transform="translate(0 0)" fill="none" stroke="#0A4D9B" strokeLinecap="round" strokeLinejoinn="round" strokeWidth="2" />
                            <path id="Path_1666" data-name="Path 1666" d="M3,18H20" transform="translate(0 -6.501)" fill="none" stroke="#0A4D9B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path id="Path_1667" data-name="Path 1667" d="M15.4,3a13,13,0,0,1,3.4,8.5A13,13,0,0,1,15.4,20,13,13,0,0,1,12,11.5,13,13,0,0,1,15.4,3Z" transform="translate(-3.901 0)" fill="none" stroke="#0A4D9B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                    </svg>
                </div>}
                <Select
                    id="countries"
                    name="countries"
                    className="browser-default selectpicker"
                    isMulti
                    options={countryOptions}
                    multiple
                    placeholder="Select Countries"
                    onChange={setGetSelectedCountry}
                    styles={customStyles}
                />

            </div>
            <div className="all-countries calendar-two">
                <div className="calendarIco">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.979" height="18.262" viewBox="0 0 15.979 18.262">
                        <path id="Icon_awesome-calendar-check" data-name="Icon awesome-calendar-check" d="M15.551,5.707H.428A.428.428,0,0,1,0,5.279V3.995A1.712,1.712,0,0,1,1.712,2.283H3.424V.428A.428.428,0,0,1,3.852,0H5.279a.428.428,0,0,1,.428.428V2.283h4.566V.428A.428.428,0,0,1,10.7,0h1.427a.428.428,0,0,1,.428.428V2.283h1.712a1.712,1.712,0,0,1,1.712,1.712V5.279A.428.428,0,0,1,15.551,5.707ZM.428,6.848H15.551a.428.428,0,0,1,.428.428V16.55a1.712,1.712,0,0,1-1.712,1.712H1.712A1.712,1.712,0,0,1,0,16.55V7.276A.428.428,0,0,1,.428,6.848Zm11.888,3.422-1-1.013a.428.428,0,0,0-.605,0L6.924,13.007l-1.64-1.653a.428.428,0,0,0-.605,0l-1.013,1a.428.428,0,0,0,0,.605l2.946,2.97a.428.428,0,0,0,.605,0l5.1-5.058a.428.428,0,0,0,0-.605Z" fill="#0A4D9B"></path>
                    </svg>
                </div>
                <Select
                    id="Intaketxt"
                    name="intaketxt"
                    className="browser-default selectpicker"
                    options={intakeOptions}
                    placeholder="Select Intake"
                    styles={customStyles}
                    onChange={setGetIntake}
                />
            </div>
            <div className="all-countries calendar-two">
                <div className="calendarIco">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.979" height="18.262" viewBox="0 0 15.979 18.262">
                        <path id="Icon_awesome-calendar-check" data-name="Icon awesome-calendar-check" d="M15.551,5.707H.428A.428.428,0,0,1,0,5.279V3.995A1.712,1.712,0,0,1,1.712,2.283H3.424V.428A.428.428,0,0,1,3.852,0H5.279a.428.428,0,0,1,.428.428V2.283h4.566V.428A.428.428,0,0,1,10.7,0h1.427a.428.428,0,0,1,.428.428V2.283h1.712a1.712,1.712,0,0,1,1.712,1.712V5.279A.428.428,0,0,1,15.551,5.707ZM.428,6.848H15.551a.428.428,0,0,1,.428.428V16.55a1.712,1.712,0,0,1-1.712,1.712H1.712A1.712,1.712,0,0,1,0,16.55V7.276A.428.428,0,0,1,.428,6.848Zm11.888,3.422-1-1.013a.428.428,0,0,0-.605,0L6.924,13.007l-1.64-1.653a.428.428,0,0,0-.605,0l-1.013,1a.428.428,0,0,0,0,.605l2.946,2.97a.428.428,0,0,0,.605,0l5.1-5.058a.428.428,0,0,0,0-.605Z" fill="#0A4D9B"></path>
                    </svg>
                </div>
                <Select
                    name="year"
                    className="browser-default selectpicker"
                    options={yearOptions}
                    placeholder="Select Year"
                    styles={customStyles}
                    onChange={setGetYear}
                />
            </div>
            <div className="btnsearch"><button id="btnApply" value="Save" title="Apply"><i className="fa fa-refresh"></i> Apply Filter</button></div>
            <div className="clearfix"></div>
        </div>
    )
}

export default Filters