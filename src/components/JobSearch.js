import React from 'react';
import SearchBar from '../shared/components/SearchBar';
import SearchFilter from '../shared/components/SearchFilter';
import JobList from '../shared/components/JobList';
import Pagination from '../shared/components/Pagination';
import { debounce } from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';

class JobSearch extends React.Component {
  onInputChange(term) {
    this.props.fetchJobs(term);
  }

  render() {
    const searchTermChange = debounce((term) => { this.onInputChange(term) }, 1000);
    return (
      <>
        <div style={{padding: '10px 20px 30px 20px', backgroundColor: '#F9F9F9', flex: '0.5'}}>
          <SearchBar onInputChange={ searchTermChange } />
          <hr/>
          <SearchFilter/>
        </div>
        <div style={{padding: '0px 20px', backgroundColor: 'white', flex: '6.25'}}>
          <JobList jobs={this.props.jobs} total={this.props.total} />
        </div>
        <div style={{padding: '0px 20px 20px 20px', backgroundColor: '', flex: '0.25'}}>
          <Pagination/>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { 
    jobs: state.jobResults.jobs,
    total: state.jobResults.total
  };
}

export default connect(mapStateToProps, actions)(JobSearch);