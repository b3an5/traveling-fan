import React, { Component } from 'react';
import './Card.scss';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      teamInfo: true,
      matchedCity: null
    }
  }

  findMatchingCity = () => {
    const selectedTeam = this.props.nflTeams[this.props.clickedIndex];
    let matchingCity = this.props.cities.find((city) => {
      return selectedTeam.city === city.name
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
    const xIcon = 'Click here to return';
    const selectedTeam = this.props.nflTeams[this.props.clickedIndex];
    const selectedCity = this.state.matchedCity;

    if (this.state.teamInfo) {

      return (
        <div>
          <h1 onClick={this.props.toggleCardView}>{xIcon}</h1>
          <img src={selectedTeam.team_img} alt='image of NFL team'/>
          <h2>{selectedTeam.name}</h2>
          <h2>{selectedTeam.city}, {selectedTeam.state}</h2>
          <h2>{selectedTeam.division}</h2>
          <button onClick={this.cityChange}>Show City Info</button>
        </div>
      )
    } else {

      const nums = [0, 1, 2, 3];

      return (
        <div>
          <h1 onClick={this.props.toggleCardView}>{xIcon}</h1>
          <img src={selectedCity.city_image} alt="image of city" />
          <h2>{selectedCity.name}, {selectedCity.state}</h2>
          <h2>Population: {selectedCity.population}</h2>
          {nums.map((number) => {
            let link = `https://google.com/search?q=${selectedCity.attractions[`${number}`].trim().split(' ').join('%20')}`;
            return  <h2><a href={link} target="_blank" rel="noopener noreferrer" >{selectedCity.attractions[`${number}`]}</a></h2>
          })}
          <button onClick={this.toggleCityInfo}>Show Team Info</button>
        </div>
      )
    }
  }

}