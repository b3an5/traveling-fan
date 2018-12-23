import React, { Component } from 'react';
import './Card.scss';
import xIcon from './images/xIcon.svg'

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

  cityCarouselLeft = () => {
    this.toggleCityInfo();
    this.props.teamCarouselLeft();
  }
  
  cityCarouselRight = () => {
    this.toggleCityInfo();
    this.props.teamCarouselRight();
  }

  render() {
    const selectedTeam = this.props.nflTeams[this.props.clickedIndex];
    const selectedCity = this.state.matchedCity;

    if (this.state.teamInfo) {

      return (
        <div className='card'>
          <img className='x-icon' onClick={this.props.toggleCardView} src={xIcon} />
          <img className="card-img" src={selectedTeam.team_img} alt="NFL team"/>
          <h2 className='team-info' >{selectedTeam.name}</h2>
          <h2 className='team-info' >{selectedTeam.city}, {selectedTeam.state}</h2>
          <h2 className='team-info' >{selectedTeam.division}</h2>
          <button onClick={this.cityChange}>Show City Info</button>
          <h1 className='left-carot carot' onClick={this.props.teamCarouselLeft}>&laquo;</h1>
          <h1 className='right-carot carot' onClick={this.props.teamCarouselRight}>&raquo;</h1>
        </div>
      )
    } else {

      const nums = [0, 1, 2, 3];

      return (
        <div className='card'>
          <img className='x-icon' onClick={this.props.toggleCardView} src={xIcon} />
          <img className="card-img" src={selectedCity.city_image} alt="city" />
          <h2>{selectedCity.name}, {selectedCity.state}</h2>
          <h2>Population: {selectedCity.population}</h2>
          {nums.map((number) => {
            let link = `https://google.com/search?q=${selectedCity.attractions[`${number}`].trim().split(' ').join('%20')}`;
            return  <h2><a href={link} target="_blank" rel="noopener noreferrer" >{selectedCity.attractions[`${number}`]}</a></h2>
          })}
          <button onClick={this.toggleCityInfo}>Show Team Info</button>
          <h1 className='left-carot carot' onClick={this.cityCarouselLeft}>&laquo;</h1>
          <h1 className='right-carot carot' onClick={this.cityCarouselRight}>&raquo;</h1>
        </div>
      )
    }
  }
}