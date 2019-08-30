import React from 'react';
import './JobList.css';
import JobItem from '../JobItem';

const JobList = () => (
  <>
    <div id="jobCountContainer">
      1231 jobs found
      <hr/>
    </div>
    <div>
      <JobItem/>
      <JobItem/>
      <JobItem/>
      <JobItem/>
      <JobItem/>
    </div>
  </>
);

export default JobList;