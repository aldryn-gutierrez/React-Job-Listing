import React, { Component } from 'react';
import './App.css';

import Header from '../shared/components/Header';
import SearchBar from '../shared/components/SearchBar';
import SearchFilter from '../shared/components/SearchFilter';
import JobList from '../shared/components/JobList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper" style={{display: 'flex', flexDirection: 'column'}}>
          <Header />

          <div style={{padding: '10px 20px', backgroundColor: '#F9F9F9', flex: '0.5'}}>
            <SearchBar/>
            <hr style={{borderColor: '#E3E3E3', backgroundColor: '#E3E3E3', color: '#E3E3E3', border: '0', height: '1px', margin: '20px 0px'}} />
            <SearchFilter/>
          </div>

          <div style={{padding: '0px 20px', backgroundColor: 'white', flex: '6.25'}}>
            <JobList />
          </div>


          
















          <div style={{padding: '0px 20px 20px 20px', backgroundColor: '', flex: '0.25'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0px 0px'}}>
              <div>{'<'}</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>...</div>
              <div>45</div>
              <span>{'>'}</span>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
