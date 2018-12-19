import React, { Component } from 'react';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      teamInfo: true,
      matchedCity: undefined
    }
  }

  findMatchingCity = () => {
    let matchingCity = this.props.cities.find((city) => {
      return this.props.nflTeams[this.props.clickedIndex].city === city.name
    })
    this.setState({matchedCity: matchingCity})
  }

  toggleCityInfo = () => {
    this.setState({
      teamInfo: !this.state.teamInfo
    })
  }

  cityChange = () => {
    this.findMatchingCity();
    this.toggleCityInfo();
  }

  render() {
    const xIcon = 'X';

    if (this.state.teamInfo) {
      return (
        <div>
          <h1 onClick={this.props.toggleCardView}>{xIcon}</h1>
          <img src={this.props.nflTeams[this.props.clickedIndex].team_img} />
          <h2>{this.props.nflTeams[this.props.clickedIndex].name}</h2>
          <h2>{this.props.nflTeams[this.props.clickedIndex].city}, {this.props.nflTeams[this.props.clickedIndex].state}</h2>
          <h2>{this.props.nflTeams[this.props.clickedIndex].division}</h2>
          <button onClick={this.cityChange}>Show City Info</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1 onClick={this.props.toggleCardView}>{xIcon}</h1>
          <img src={this.state.matchedCity.city_image} />
          <h2>{this.state.matchedCity.name}</h2>
          <h2>{this.state.matchedCity.state}</h2>
          <h2>Population: {this.state.matchedCity.population}</h2>
          <h2><a href={`https://google.com/search?q=${this.state.matchedCity.attractions[0].trim().split(' ').join('%20')}`} target="_blank" rel="noopener noreferrer" >{this.state.matchedCity.attractions[0]}</a></h2>
          <h2><a href={`https://google.com/search?q=${this.state.matchedCity.attractions[1].trim().split(' ').join('%20')}`} target="_blank" rel="noopener noreferrer" >{this.state.matchedCity.attractions[1]}</a></h2>
          <h2><a href={`https://google.com/search?q=${this.state.matchedCity.attractions[2].trim().split(' ').join('%20')}`} target="_blank" rel="noopener noreferrer" >{this.state.matchedCity.attractions[2]}</a></h2>
          <h2><a href={`https://google.com/search?q=${this.state.matchedCity.attractions[3].trim().split(' ').join('%20')}`} target="_blank" rel="noopener noreferrer" >{this.state.matchedCity.attractions[3]}</a></h2 >
          <button onClick={this.toggleCityInfo}>Show Team Info</button>
        </div>
      )
    }
  }

}