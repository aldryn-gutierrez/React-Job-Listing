import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchContainer">
        <div className="searchIconContainer">
          <i className="fas fa-search" />
        </div>
        <div className="searchInputContainer">
          <input 
            placeholder="Search for job title or company name"
            type="text" 
            onChange={(event) => this.props.onInputChange(event.target.value)}
          />
        </div>
      </div>
    );
  }
} 

export default SearchBar;