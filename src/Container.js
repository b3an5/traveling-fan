import React, { Component } from 'react';
import './css/Main.scss';
import TeamIcon from './TeamIcon.js';
import Popup from './Popup.js';

export default class Container extends Component {
  constructor() {
    super();

    this.state = {
      displayTeamIcons: true,
      teamToDisplay: null,
      cityToDisplay: null
    }
  }
      
  switchToPopup = (event) => {
    let targetWord = this.getTargetWord(event);

    let currentTeam = this.props.nflTeams.find(team => {
      return team.name.includes(targetWord);
    })
    let currentCity = this.props.cities.find(city => {
      return currentTeam.city === city.name;
    })
    
    this.setState({
      displayTeamIcons: !this.state.displayTeamIcons,
      teamToDisplay: currentTeam,
      cityToDisplay: currentCity
    })
  }

  getTargetWord(event) {
    let teamName = event.target.className.split('-');
    let index = teamName[teamName.length - 1];
    return index.charAt(0).toUpperCase() + index.slice(1);
  }

  showAllTeams = () => {
    this.setState({
      displayTeamIcons: true,
      teamToDisplay: null,
      cityToDisplay: null
    })
  }

  rotateCarousel = (num) => {
    let index = this.props.nflTeams.indexOf(this.state.teamToDisplay)
    let rightMax = this.props.nflTeams.length - 1, leftMax = 0;

    if (index === leftMax && num < 0) {
      this.setCarouselIndex(rightMax)
    } else if (index === rightMax && num > 0) {
      this.setCarouselIndex(leftMax)
    } else {
      this.setCarouselIndex(index, num)
    }
  }

  setCarouselIndex(index, num = 0) {
    this.setState({
      teamToDisplay: this.props.nflTeams[index + num],
      cityToDisplay: this.props.cities[index + num]
    })
  }

  render() {
    if (this.state.displayTeamIcons) {
      return(
        <main className="main-display main-display-icon">
          {
            this.props.nflTeams.map((nflTeam, index) => {
              return <TeamIcon 
                        teamColor={nflTeam.name.split(' ').join('-').toLowerCase()}
                        switchToPopup={this.switchToPopup}
                        nflTeam={nflTeam}
                        index={index}
                        key={nflTeam.name} />
            })
          }
        </main>
      )
    } else {
      return (
        <main className="main-display main-display-card">
          <Popup
            showAllTeams={this.showAllTeams}
            team={this.state.teamToDisplay}
            city={this.state.cityToDisplay}
            rotateCarousel={this.rotateCarousel}
            key={this.props.nflTeams.name} />
        </main>
      )
    }
  }
}