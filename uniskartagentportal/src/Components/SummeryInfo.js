import React from 'react'

const SummeryInfo = () => {
  return (
    <div className="summerybox">
    <div className="row">
        <div className="col-sm-6">
            <h1 className="welcomename">Dashboard</h1>
            <div className="welcometxt">
                Welcome to Course Finder Portal
            </div>
        </div>
        <div className="col-sm-6">
            <div className="btndiv">
                <a className="btn btn-success" href="/StudentApplications/Index?reg=new">+ Register a new student</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default SummeryInfo