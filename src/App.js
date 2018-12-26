import React, { Component } from 'react';
import Container from './Container.js'
import Nav from './Nav.js'
import './css/reset.css';
import './css/App.css';
import loadingGif from './images/football.gif';
import nflLogo from './images/nfl-logo.png';
class App extends Component {
  constructor(){
    super();
    this.state = {
      nflTeams: null,
      cities: null,
      isLoading: true,
      allTeams: null
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
        cities: city.cities
      })
    }).catch(errrr => console.log(errrr))
  }

  findSearchedTeam = (input) => {
    let matched = this.state.allTeams.filter(team => {
      return team.name.toLowerCase().includes(input.toLowerCase())
    })

    this.setState({nflTeams: matched})
 }
  
  findSelectedDivision = (input) => { 
    let matched; 
    if (input === 'all') {
      this.setState({nflTeams: this.state.allTeams})
    } else if (input.length === 3 && input !== 'all') {
      matched = this.state.allTeams.filter(team => {
        return team.division.includes(input);
      })
      this.setState({nflTeams: matched})
    } else {
      matched = this.state.allTeams.filter(team => {
        return team.division === input;
      })
      this.setState({nflTeams: matched})
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="loading-screen"> <img className="loading-image" src={loadingGif} alt="loading screen"/></div>
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
    } else {
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
              cities={this.state.cities} />
          </div>
        </div>
      );
    }
  }
}

export default App;
