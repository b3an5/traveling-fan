import React, { Component } from 'react';
import { nflTeams, cities } from 'nfl-cities.js'
import Container from 'Container.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>The Traveling Fan</h1>
        {/* <Nav /> */}
        <Container nflTeams={nflTeams} cities={cities} />
      </div>
    );
  }
}

export default App;
