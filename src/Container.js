import React, { Component } from 'react';
import TeamIcon from './TeamIcon.js';
import Card from './Card.js';

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      enlargeCard: false
    }
  }

  toggleCardView = () => {
    this.setState({
      enlargeCard: !this.state.enlargeCard
    })
  }

  render() {
    if(this.state.enlargeCard === false) {
      return(
        <main>
          {
            this.props.nflTeams.map((nflTeam) => {
              return <TeamIcon toggleCardView={this.toggleCardView} nflTeam={nflTeam} />
            })
          }
        </main>
      )
    } else {
      return (
        <main>
          <Card nflTeams={this.props.nflTeams} 
                cities={this.props.cities} />
        </main>
      )
    }
  }
}