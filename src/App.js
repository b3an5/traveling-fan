import React, { Component } from 'react';
import { nflTeams, cities } from './dataset/nfl-cities'
import Container from './Container.js'
import './reset.css';
import './App.css';
import loadingGif from './images/football.gif'

class App extends Component {
  constructor(){
    super();

    this.state = {
      nflTeams: null,
      cities: null,
      isLoading: true
    } 
  }

  getData(datatype) {
    const root = 'https://whateverly-datasets.herokuapp.com/api/v1/';
    const promise = fetch(`${root}${datatype}`)
                    .then(data => data.json())
    return promise;
  }

  componentDidMount() {
    this.getData('nflTeams').then((data) => {
      setTimeout(() => {
        this.setState({
          nflTeams: data.nflTeams,
          isLoading: false
        })
      }, 1000);
    }).catch(err => console.log(err))

    this.getData('cities').then((city) => {
      this.setState({
        cities: city.cities
      })
    }).catch(errrr => console.log(errrr))
  }

  render() {
    if (this.state.isLoading) {
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
            <Container nflTeams={this.state.nflTeams} cities={this.state.cities} />
          </div>
        </div>
      );
    }
  }
}

export default App;
