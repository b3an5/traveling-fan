import React, { Component } from 'react';
import { nflTeams, cities } from './dataset/nfl-cities'
import Container from './Container.js'
// import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className='app-title-area'>
          <h1 className='app-title'>The Traveling Fan</h1>
        </div>
        {/* <Nav /> */}
        <div className="flex">
          <Container nflTeams={nflTeams} cities={cities} />
        </div>
      </div>
    );
  }
}

export default App;
