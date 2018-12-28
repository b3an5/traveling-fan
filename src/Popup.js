import React, { Component } from 'react';
import './css/Popup.scss';
import Container from './Container.js'
import Card from './Card.js'
import City from './City.js'

export default class Popup extends Component {
  constructor() {
    super();
    this.state = {
      showCity: false,
      matchedCity: null

    }
  }

  findMatchingCity = () => {
    const selectedTeam = this.props.nflTeams[this.props.clickedIndex];
    let matchingCity = this.props.cities.find((city) => {
      return selectedTeam.city === city.name
    })
    this.setState({ matchedCity: matchingCity })
    this.toggleCityInfo();
  }

  toggleCityInfo = () => {
    console.log('yelloasd')
    this.setState({
      showCity: !this.state.showCity
    })
  }

    // cityCarouselLeft = () => {
  //   this.toggleCityInfo();
  //   this.props.teamCarouselLeft();
  // }

  // cityCarouselRight = () => {
  //   this.toggleCityInfo();
  //   this.props.teamCarouselRight();
  // }

  render() {
    if (this.state.showCity === false) {
      return (
        <section>
          <div className='card-background'></div>
          <Card nflTeams={this.props.nflTeams}
            cities={this.props.cities}
            showTeamInfo={this.showTeamInfo}
            findMatchingCity={this.findMatchingCity}
            clickedIndex={this.props.clickedIndex}
            teamCarouselLeft={this.teamCarouselLeft}
            teamCarouselRight={this.teamCarouselRight}
            key={this.props.nflTeams.name} />
       </section>
      )
    } else {
      return (
        <section>
          <City
            cities={this.props.cities}
            showTeamInfo={this.showTeamInfo}
            matchedCity={this.state.matchedCity}

            clickedIndex={this.props.clickedIndex}
            cityCarouselLeft={this.cityCarouselLeft}
            cityCarouselRight={this.cityCarouselRight} />
        </section>
      )
    }
  }
}