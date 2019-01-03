import React, { Component } from 'react';
import './css/Main.scss';
import Container from './Container.js'
import Nav from './Nav.js'
import nflLogo from './images/nfl-logo.png';
class App extends Component {
  constructor(){
    super();

    this.state = {
      nflTeams: null,
      nflCities: null,
      cities: null,
      isLoading: true,
      allTeams: null,
      homeScreen: false
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
          isLoading: false,
          allTeams: data.nflTeams
        })
      }, 1000);
    }).catch(err => console.log(err))

    this.getData('cities').then((city) => {
      this.setState({
        cities: this.matchCitiesToTeams(city.cities),
        nflCities: city.cities
      })
    }).catch(errrr => console.log(errrr))
  }

  matchCitiesToTeams(cities) {
    let la = 25, ny = 20
    cities.splice(ny, 0, cities[ny])
    cities.splice(la, 0, cities[la])
    return cities;
  }

  findSearchedTeam = (input) => {
    let matched = this.state.allTeams.filter(team => {
      return team.name.toLowerCase().includes(input.toLowerCase())
    })
    this.setState({nflTeams: matched})
 }
  

  findSelectedDivision = (input) => { 
    let matchedTeams;

    if (input === 'all') {
      this.setState({
        nflTeams: this.state.allTeams,
        nflCities: this.state.cities
      })
    } else if (input === 'AFC' || input === 'NFC') {
      matchedTeams = this.state.allTeams.filter(team => {
        return team.division.includes(input);
      })

      this.setState({
        nflTeams: matchedTeams,
        nflCities: this.findMatchingCities(input, matchedTeams)
      })
    } else {
      matchedTeams = this.state.allTeams.filter(team => {
        return team.division === input;
      })

      this.setState({
        nflTeams: matchedTeams,
        nflCities: this.findMatchingCities(input, matchedTeams)
      })
    }
  }

  findMatchingCities = (input, teams) => {
    return teams.map(team => {
      let matchingCities = this.state.cities.filter(city => {
        return city.name === team.city
      })
      return matchingCities[0];
    })
  }

  showHomeScreen = () => {
    this.setState({
      homeScreen: true
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="loading-screen">
          <div className="welcome-text">
            <h2 className="welcome-title">The Traveling Fan</h2>
          </div>
        </div>
      )
    } else if (this.state.isLoading === false && this.state.homeScreen === false) {
      return (
        <div className="loading-screen">
          <div className="welcome-text">
            <h2 className="welcome-title">The Traveling Fan</h2>
          </div>
          <button onClick={this.showHomeScreen} className='welcome-button'>LET'S GO!</button>
        </div>
      )
    } else if (this.state.nflTeams.length === 0) { 
      return (
        <div className="app">
          <div className='app-title-area'>
            <h1 className='app-title'>
              <img className="icon-img" src={nflLogo} alt="" />
              The Traveling Fan
              <img className="icon-img" src={nflLogo} alt="" />
            </h1>
          </div>
          <div>
            <Nav
              findSearchedTeam={this.findSearchedTeam} 
              findSelectedDivision={this.findSelectedDivision} />
          </div>
          <div className="flex">
            <h1 className="search-error-message">No Results Found</h1>
          </div>
        </div>
      )
    } else if (this.state.homeScreen) {
      return (
        <div className="app">
          <div className='app-title-area'>
            <h1 className='app-title'>
              <img className='app-img' src={nflLogo} alt="" />
              The Traveling Fan
              <img className='app-img' src={nflLogo} alt="" />
            </h1>
          </div>
          <div>
            <Nav 
              findSearchedTeam={this.findSearchedTeam}
              findSelectedDivision={this.findSelectedDivision} />
          </div>
          <div className="flex">
            <Container
              nflTeams={this.state.nflTeams}
              cities={this.state.nflCities} />
          </div>
        </div>
      );
    }
  }
}

export default App;
