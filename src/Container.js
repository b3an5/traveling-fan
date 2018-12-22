import React, { Component } from 'react';
import './reset.css';
import TeamIcon from './TeamIcon.js';
import Card from './Card.js';
import './Container.scss';

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      enlargeCard: false,
      clickedIndex: null
    }
  }

  toggleCardView = () => {
    this.setState({
      enlargeCard: !this.state.enlargeCard
    })
    }

  getIndex = (clickedTeam) => {
    this.setState({
      clickedIndex: clickedTeam
    })
  }

  toggleIconFunctions = (index) => {
    this.toggleCardView();
    this.getIndex(index)
  }

  render() {
    if(this.state.enlargeCard === false) {
      return(
        <main className="main-display main-display-icon">
          {
            this.props.nflTeams.map((nflTeam, index) => {
              return <TeamIcon 
                        teamColor={nflTeam.name.split(' ').join('-').toLowerCase()}
                        toggleIconFunctions={this.toggleIconFunctions} 
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
          <div className='card-background'></div>
          <Card nflTeams={this.props.nflTeams} 
                cities={this.props.cities}
                toggleCardView={this.toggleCardView}
                clickedIndex={this.state.clickedIndex}
                key={this.props.nflTeams.name} />
        </main>
      )
    }
  }
}