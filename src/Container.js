import React, { Component } from 'react';
import TeamIcon from './TeamIcon.js';
// import Card from './Card.js';

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      enlargeCard: false
    }
  }

  render() {
    if(this.state.enlargeCard === false) {
      return(
        <main>
          {
            this.props.nflTeams.map((nflTeam) => {
              return <TeamIcon nflTeam={nflTeam} />
            })
          }
        </main>
      )
        }
    // } else {
    //   return (
    //     <main>
    //       <Card nflTeams={this.props.nflTeams} 
    //             cities={this.props.cities} />
    //     </main>
    //   )
    // }
  }
}