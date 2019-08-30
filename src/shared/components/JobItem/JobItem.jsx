import React from 'react';
import './JobItem.css'

const JobItem = () => (
  <div class="jobItem">
    <div>
      <div class="jobTitle">
        <span>Customer Service Representative -</span>
      </div>
      <div class="jobSalary">
        <span>&#8369;30k - &#8369;35k</span>
      </div>
    </div>
    <div>
      <div class="jobRequirements">
        <div>
          <i className="fas fa-map-marker-alt" />
          <span style={{marginLeft: '16px'}}>Cebu City</span>
        </div>
        <div>
          <i className="fas fa-briefcase" />
          <span>1 - 3 years</span>
        </div>
        <div>
          <i className="fas fa-graduation-cap" />
          <span>Diploma</span>
        </div>
        <div>
          <i className="fas fa-clock" />
          <span>Full Time</span>
        </div>
      </div>
    </div>
    <div class="companyDetails">
      <div>
        <div class="companyLogoContainer">
          <img 
            src="https://sc02.alicdn.com/kf/HTB1sbqOdxsIL1JjSZFqq6AeCpXaH/Best-Selling-Product-Slotted-50x50-mm-Unistrut.jpg_50x50.jpg" 
            alt="companyLogo"/>
        </div>
        <div class="companyNameContainer">
          <span>
            Arc Refreshments Corp
          </span>
        </div>
      </div>
      <div>
        <span class="jobUploaded">3 hours ago</span>
      </div>
    </div>
    <hr/>
  </div>
);

export default JobItem;