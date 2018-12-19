import React, { Component } from 'react';

export default class TeamIcon extends Component {
  constructor() {
    super();
    this.state = {
      index: null //this isn't needed but it gets mad when the constructor is empty
    }
  }

    iconFunctions = () => {
      this.props.toggleCardView();
      this.props.grabIndex(this.props.index)
    }

  render() {
    return(
      <article onClick={this.iconFunctions}>
      {console.log(this.props.index)}
        <img src={this.props.nflTeam.helmet_image} /> 
        <h2>{this.props.nflTeam.name}</h2>
      </article>
    )
  }
}

