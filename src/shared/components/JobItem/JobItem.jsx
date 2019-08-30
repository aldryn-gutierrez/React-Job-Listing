import React from 'react';
import './JobItem.css';
import moment from 'moment';

const calculateHourDifference = (pastDatetime) => {
    return Math.floor(
      moment
        .duration(moment().diff(moment(pastDatetime,"YYYY-MM-DD HH:mm:ss")))
        .asHours()
    );
}

const JobItem = ({ job }) => (
  <div className="jobItem">
    <div>
      <div className="jobTitle">
        <span>{ job.job_title }</span>
      </div>
      <div className="jobSalary">
        <span>&#8369;{job.salary_range_from/1000}k - &#8369;{job.salary_range_to/1000}k</span>
      </div>
    </div>
    <div>
      <div className="jobRequirements">
        <div>
          <i className="fas fa-map-marker-alt" />
          <span style={{marginLeft: '16px'}}>{ job.job_location }</span>
        </div>
        <div>
          <i className="fas fa-briefcase" />
          <span>{ job.xp_lvl }</span>
        </div>
        <div>
          <i className="fas fa-graduation-cap" />
          <span>{ job.degree }</span>
        </div>
        <div>
          <i className="fas fa-clock" />
          <span>{ job.job_type }</span>
        </div>
      </div>
    </div>
    <div className="companyDetails">
      <div>
        <div className="companyLogoContainer">
          <img 
            height="50"
            width="50"
            src={job.company_logo} 
            alt="companyLogo"/>
        </div>
        <div className="companyNameContainer">
          <span>
            {job.company_name}
          </span>
        </div>
      </div>
      <div>
        <span className="jobUploaded">{calculateHourDifference(job.refreshed_at)} hours ago</span>
      </div>
    </div>
    <hr/>
  </div>
);

export default JobItem;