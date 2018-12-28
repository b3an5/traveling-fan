import React, { Component } from 'react';
import './css/reset.css';
import TeamIcon from './TeamIcon.js';
import Card from './Card.js';
import Popup from './Popup.js';
import './css/Container.scss';

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      displayTeamIcons: true,
      currentTeamToDisplay: null,
      // clickedIndex: null
    }
  }
      
  showTeamInfo = (event) => {
    this.setState({
      displayTeamIcons: !this.state.displayTeamIcons,
      // currentTeamToDisplay: event.target.parentElement.className
    })
  }

  teamCarouselRight = () => {
    if (this.state.clickedIndex !== 31) {
      this.setState({
        clickedIndex: this.state.clickedIndex + 1
      })
    } else {
      this.setState({
        clickedIndex: 0
      })
    }
  }

  teamCarouselLeft = () => {
    if (this.state.clickedIndex !== 0) {
      this.setState({
        clickedIndex: this.state.clickedIndex - 1
      })
    } else {
      this.setState({
        clickedIndex: 31
      })
    }
  }

  render() {
    if(this.state.displayTeamIcons) {
      return(
        <main className="main-display main-display-icon">
          {
            this.props.nflTeams.map((nflTeam, index) => {
              return <TeamIcon 
                  teamColor={nflTeam.name.split(' ').join('-').toLowerCase()}
                  showTeamInfo={this.showTeamInfo}
                  nflTeam={nflTeam}
                  index={index}
                  key={nflTeam.name}
                  />
            })
          }
        </main>
      )
    } else {
      return (
        <main className="main-display main-display-card">
          <Popup
            nflTeams={this.props.nflTeams}
            cities={this.props.cities}
            showTeamInfo={this.showTeamInfo}
            // clickedIndex={this.state.clickedIndex}
            key={this.props.nflTeams.name} />
          {/* <div className='card-background'></div>
          <Card nflTeams={this.props.nflTeams} 
                cities={this.props.cities}
                toggleCardView={this.showTeamInfo}
                clickedIndex={this.state.clickedIndex}
                teamCarouselLeft={this.teamCarouselLeft}
                teamCarouselRight={this.teamCarouselRight}
                key={this.props.nflTeams.name} /> */}
        </main>
      )
    }
  }
}