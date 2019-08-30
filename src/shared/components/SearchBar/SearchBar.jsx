import React from 'react';
import './SearchBar.css';

// style={{display: 'flex', flexDirection: 'row', margin: '15px 0px 30px 0px'}}
const SearchBar = () => (
  <div className="searchContainer">
    <div className="searchIconContainer">
      <i className="fas fa-search" />
    </div>

    <div className="searchInputContainer">
      <input 
        placeholder="Search for job title or company name"
        type="text" 
        style={{
          width: '100%',
          borderColor: 'transparent',
          border: 'none',
          fontWeight: 'bolder',
          backgroundColor: '#F9F9F9',
          fontSize: '14px'
        }}  
      />
    </div>

  </div>
);

export default SearchBar;