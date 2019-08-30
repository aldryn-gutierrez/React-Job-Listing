import React, { Component } from 'react';
import './App.css';
import Header from '../shared/components/Header';
import JobSearch from './JobSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <JobSearch />
        </div>
      </div>
    );
  }
}

export default App;
