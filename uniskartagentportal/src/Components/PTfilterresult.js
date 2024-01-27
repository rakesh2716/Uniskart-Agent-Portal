import React from 'react'

const PTfilterresult = () => {
  return (
    <div className="PTfilterresult">
    <div className="row">
        <div className="col-sm-3">
            <div className="PTRbox">
                <div className="titledropdown">
                    <select id="TotalApplications" name="totalapplications" className="browser-default selectpicker">
                        <option value="0" selected>All Applications</option>
                        <option value="1">Received at KC</option>
                        <option value="3">On Hold</option>
                        <option value="4">Submitted</option>
                        <option value="7,64">Rejected</option>
                    </select>
                </div>
                <div className="clearfix"></div>
                <div className="ptcount ptcount_applications">0</div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="PTRbox">
                <div className="titledropdown">
                    <select id="TotalOffers" name="totaloffers" className="browser-default selectpicker">
                        <option value="0" selected>Offers</option>
                        <option value="5">Conditional</option>
                        <option value="6">Unconditional</option>
                    </select>
                </div>
                <div className="clearfix"></div>
                <div className="ptcount ptcount_offers"><span id="sp_ptcount_offers">0</span></div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="PTRbox nondrop">
                <h5 className="title">Payments</h5>
                <div className="clearfix"></div>
                <div className="ptcount ptcount_Payments">0</div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="PTRbox nondrop">
                <h5 className="title">Visas Received</h5>
                <div className="clearfix"></div>
                <div className="ptcount ptcount_Visas_Received">0</div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="PTRbox nondrop">
                <h5 className="title">Visas Rejected</h5>
                <div className="clearfix"></div>
                <div className="ptcount ptcount_Visas_Rejected">0</div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="PTRbox nondrop">
                <h5 className="title">Non-Enrolments</h5>
                <div className="clearfix"></div>
                <div className="ptcount ptcount_Non_Enrolments">0</div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="PTRbox nondrop">
                <h5 className="title">Deferrals</h5>
                <div className="clearfix"></div>
                <div className="ptcount ptcount_Deferrals">0</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default PTfilterresult