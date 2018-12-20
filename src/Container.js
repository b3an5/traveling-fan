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

  render() {
    if(this.state.enlargeCard === false) {
      return(
        <main className="main-display">
          {
            this.props.nflTeams.map((nflTeam, index) => {
              return <TeamIcon toggleCardView={this.toggleCardView} 
                               nflTeam={nflTeam} 
                               index={index}
                               getIndex={this.getIndex} />
            })
          }
        </main>
      )
    } else {
      return (
        <main>
          <Card nflTeams={this.props.nflTeams} 
                cities={this.props.cities}
                toggleCardView={this.toggleCardView}
                clickedIndex={this.state.clickedIndex} />
        </main>
      )
    }
  }
}