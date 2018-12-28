import React, { Component } from 'react';
import './css/Card.scss';
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
    this.toggleCityInfo();
  }

  toggleCityInfo = () => {
    this.setState({
      teamInfo: !this.state.teamInfo
    })
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
          <img className='x-icon' onClick={this.props.toggleCardView} src={xIcon} alt="icon" />
          <img className="card-img" src={selectedTeam.team_img} alt="NFL team"/>
          <h2 className='team-info' >{selectedTeam.name}</h2>
          <h2 className='team-info' >{selectedTeam.city}, {selectedTeam.state}</h2>
          <h2 className='team-info' >{selectedTeam.division}</h2>
          <button onClick={this.findMatchingCity} className="card-btn">Show City Info</button>
          <h1 className='left-carot carot' onClick={this.props.teamCarouselLeft}>&laquo;</h1>
          <h1 className='right-carot carot' onClick={this.props.teamCarouselRight}>&raquo;</h1>
        </div>
      )
    } else {

      const cityAttractions = this.props.cities[this.props.clickedIndex].attractions;

      return (
        <div className='card'>
          <img className='x-icon' onClick={this.props.toggleCardView} src={xIcon} alt="icon" />
          <img className="card-img" src={selectedCity.city_image} alt="city" />
          <h2>{selectedCity.name}, {selectedCity.state}</h2>
          <h2>Population: {selectedCity.population}</h2>
          {cityAttractions.map((attraction) => {
            let link = `https://google.com/search?q=${`${attraction}`.trim().split(' ').join('%20')}`;
            return  <h2><a href={link} target="_blank" rel="noopener noreferrer" >{attraction}</a></h2>
          })}
          <button onClick={this.toggleCityInfo} className="card-btn">Show Team Info</button>
          <h1 className='left-carot carot' onClick={this.cityCarouselLeft}>&laquo;</h1>
          <h1 className='right-carot carot' onClick={this.cityCarouselRight}>&raquo;</h1>
        </div>
      )
    }
  }

}