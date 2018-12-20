import React, { Component } from 'react';
import { nflTeams, cities } from './dataset/nfl-cities'
import Container from './Container.js'
import loadingGif from './images/football.gif'
// import './reset.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nflTeams: null,
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/nflTeams')
      .then(nflTeams => nflTeams.json())
      .then(data => {
        setTimeout(() => {
          this.setState({
            nflTeams: data.nflTeams,
            isLoading: false
          })
        }, 1000);
      }
      )
      .catch(error => console.log(error))
  }

  render() {
    if(this.state.isLoading) {
      return(
        <div className="loading-screen"> <img className="loading-image" src={loadingGif} /> </div>
      )
    } else {
      return (
        <div className="app">
          <div className='app-title-area'>
            <h1 className='app-title'>The Traveling Fan</h1>
          </div>
          {/* <Nav /> */}
          <div className="flex">
          {console.log(this.state.nflTeams)}
            <Container nflTeams={this.state.nflTeams} cities={cities} />
          </div>
        </div>
      );
    }
  }
}

export default App;
