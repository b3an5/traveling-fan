import React, { Component } from 'react';
import './css/Main.scss';
import Card from './Card.js'
import City from './City.js'

export default class Popup extends Component {
  constructor() {
    super();

    this.state = {
      displayTeamInfo: true
    }
  }

  switchPopupView = () => {
    this.setState({
      displayTeamInfo: !this.state.displayTeamInfo
    })
  }

  showAllTeams = () => { 
    this.props.showAllTeams();
  }
  
  rotateCarousel = (event) => {
    let right = 1, left = -1;

    if (event.target.className.includes('right')) {
      this.props.rotateCarousel(right);
    }
    if (event.target.className.includes('left')) {
      this.props.rotateCarousel(left);
    }
  }

  render() {
    if (this.state.displayTeamInfo) {
      return (
        <section>
          <div className='card-background'></div>
          <Card
            showAllTeams={this.showAllTeams}
            switchPopupView={this.switchPopupView}
            currentTeam={this.props.team}
            currentCity={this.props.city}
            rotateCarousel={this.rotateCarousel}
            key={this.props.team.name} />
       </section>
      )
    } else {
      return (
        <section>
          <div className='card-background'></div>
          <City
            showAllTeams={this.showAllTeams}
            switchPopupView={this.switchPopupView}
            currentTeam={this.props.team}
            currentCity={this.props.city}
            rotateCarousel={this.rotateCarousel}
            key={this.props.city.name} />
        </section>
      )
    }
  }
}