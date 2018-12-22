import React, { Component } from 'react';
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
              return <TeamIcon toggleIconFunctions={this.toggleIconFunctions} 
                               nflTeam={nflTeam} 
                               index={index}
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
                clickedIndex={this.state.clickedIndex} />
        </main>
      )
    }
  }
}