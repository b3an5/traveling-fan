import React, { Component } from 'react';

export default function teamIcon() {

    function toggleIconFunctions() {
      this.props.toggleCardView();
      this.props.grabIndex(this.props.index)
    }

    return(
      <article onClick={toggleIconFunctions}>
        <img src={this.props.nflTeam.helmet_image} /> 
        <h2>{this.props.nflTeam.name}</h2>
      </article>
    )
  }
}

