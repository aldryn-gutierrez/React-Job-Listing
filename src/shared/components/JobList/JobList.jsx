import React from 'react';
import './JobList.css';
import JobItem from '../JobItem';

const JobList = ({ jobs, total }) => (
  <>
    <div id="jobCountContainer">
      {total} jobs found
      <hr/>
    </div>
    <div>
      {
        jobs.map(job => <JobItem key={job.id} job={job} />)
      }
    </div>
  </>
);

export default JobList;